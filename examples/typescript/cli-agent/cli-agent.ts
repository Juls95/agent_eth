import { WardenAgentKit } from "@wardenprotocol/warden-agent-kit-core";
import { WardenToolkit, WardenTool } from "@wardenprotocol/warden-langchain";
import { HumanMessage } from "@langchain/core/messages";
import { MemorySaver } from "@langchain/langgraph";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatAnthropic } from "@langchain/anthropic";
import * as dotenv from "dotenv";
import * as readline from "readline";

dotenv.config({ path: '/Users/julian/Documents/agente_kit_Test/agent-kit/.env' });

if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY is not set in .env file");
}

/**
 * Initialize the agent with Warden Agent Kit
 *
 * @returns Agent executor and config
 */
async function initializeAgent() {
    try {
        // Initialize LLM
        const llm = new ChatAnthropic({
            modelName: "claude-3-sonnet-20240229",
            anthropicApiKey: process.env.ANTHROPIC_API_KEY,
        });

        // Configure Warden Agent Kit
        const config = {
            privateKeyOrAccount:
                (process.env.PRIVATE_KEY as `0x${string}`) || undefined,
        };

        // Initialize Warden Agent Kit
        const agentkit = new WardenAgentKit(config);
        // Initialize Warden Agent Kit Toolkit and get tools
        const wardenToolkit = new WardenToolkit(agentkit as any);
        const tools = wardenToolkit.getTools();

        // Store buffered conversation history in memory
        const memory = new MemorySaver();
        const agentConfig = {
            configurable: { thread_id: "Warden Agent Kit CLI Agent Example!" },
        };

        // Create React Agent using the LLM and Warden Agent Kit tools
        const agent = createReactAgent({
            llm,
            tools,
            checkpointSaver: memory,
            messageModifier:
                "You're a helpful assistant that can help with a variety of tasks related to web3 tranactions." +
                "You should only use the provided tools to carry out tasks, interperate the users input" +
                "and select the correct tool to use for the required tasks or tasks.",
        });

        return { agent, config: agentConfig };
    } catch (error) {
        console.error("Failed to initialize agent:", error);
        throw error; // Re-throw to be handled by caller
    }
}

async function runChatMode(agent: any, config: any) {
    console.log("Starting chat mode... Type 'exit' to end.");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const question = (prompt: string): Promise<string> =>
        new Promise((resolve) => rl.question(prompt, resolve));

    try {
        while (true) {
            const userInput = await question("\nPrompt: ");

            if (userInput.toLowerCase() === "exit") {
                break;
            }

            const stream = await agent.stream(
                { messages: [new HumanMessage(userInput)] },
                config
            );

            for await (const chunk of stream) {
                if ("agent" in chunk) {
                    console.log(chunk.agent.messages[0].content);
                } else if ("tools" in chunk) {
                    console.log(chunk.tools.messages[0].content);
                }
                console.log("-------------------");
            }
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
        process.exit(1);
    } finally {
        rl.close();
    }
}

/**
 * Start the chatbot agent
 */
async function main() {
    try {
        const { agent, config } = await initializeAgent();
        await runChatMode(agent, config);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
        process.exit(1);
    }
}

if (require.main === module) {
    console.log("Starting Agent...");
    main().catch((error) => {
        console.error("Fatal error:", error);
        process.exit(1);
    });
}

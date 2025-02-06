# Introduction

This document explains the technology choices behind our decentralized finance (DeFi) monitoring agent tool. The project is designed to continuously track trading volume and liquidity on the Uniswap platform. By leveraging innovative technologies such as the Warden Protocol Agent Kit, this tool provides real-time insights, timely alerts, and comprehensive historical trend analysis, all tailored for traders, investors, and market analysts seeking to capitalize on market opportunities.

# Frontend Technologies

For the user interface, we have chosen to use React.js because of its ability to create dynamic, responsive, and interactive dashboards. The frontend is built with TypeScript, providing strong typing and improved code reliability, which is essential for maintaining a robust user interface. Additionally, V0 by Vercel is used as an AI-powered frontend component builder that ensures the design stays modern and efficient. These choices help create a user-friendly experience that prioritizes clarity and ease of use, allowing users to easily navigate through real-time data, historical trends, and alert settings.

# Backend Technologies

Our backend is primarily built on Solidity as we will create Smart Contracts that store the intelligence and data usage on it, which manages the processing of data and the execution of our detection algorithms. TypeScript is also used on the backend to maintain consistency and improve code reliability across the entire application. To interact with Ethereum-based protocols like Uniswap, we use blockchain technologies such as The Graph. This integration allows our monitoring agent, built with the Warden Protocol Agent Kit, to efficiently collect and process market data. Our backend handles not only the real-time monitoring but also manages the logic for triggering alerts and storing historical data on the Warden Blockchain, ensuring that every piece of information is processed accurately and delivered promptly.

# Infrastructure and Deployment

The project utilizes blockchain infrastructure to ensure reliability and scalability. For storing historical market data, we use Warden Blockchain. The application is designed with robust Continuous Integration and Continuous Deployment (CI/CD) pipelines in mind to facilitate regular updates and maintain operational consistency.

# Third-Party Integrations

The system integrates various third-party services to augment its functionality. For blockchain interactions, The Graph API for Uniswap ensures that our tool can interact effectively with Ethereum and Uniswap, providing accurate and real-time data. The monitoring agent itself is powered by the Warden Protocol Agent Kit, which is central to capturing and processing market metrics. Additionally, advanced tools like Claude AI provide intelligent code assistance, while Cursor offers AI-powered suggestions to enhance our development process. These integrations collectively enhance the tool’s capabilities, ensuring that it is both powerful and intuitive for end users.

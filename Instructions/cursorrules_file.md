# .cursorrules

## Project Overview

*   **Type:** cursorrules_file
*   **Description:** I'm building a decentralized finance (DeFi) monitoring agent utilizing the Warden Protocol Agent Kit. This tool tracks real-time trading volume and liquidity on Uniswap, detects significant market moves, and shows the trades directly in the home page. It features a robust dashboard for visualizing current metrics and historical trends and integrates blockchain interaction plaftorms (The Graph) with Node.js processing and a React.js frontend.
*   **Primary Goal:** The tool is designed to continuously monitor Uniswap’s trading volume and liquidity metrics to identify critical market movements, enabling users to quickly seize emerging financial opportunities.

## Project Structure

### Framework-Specific Routing

*   **Directory Rules:**

    *   React Router 6: Uses a structure based on `src/routes/` where routes are defined with the `createBrowserRouter` API for clear, component-based navigation.
    *   Example 1: "Next.js 14 (App Router)" → `app/[route]/page.tsx` conventions
    *   Example 2: "Next.js (Pages Router)" → `pages/[route].tsx` pattern
    *   Example 3: "React Router 6" → `src/routes/` with `createBrowserRouter`

### Core Directories

*   **Versioned Structure:**

    *   src/routes: Houses route definitions and page-level components for the dashboard, login, alerts, and historical data views following React Router 6 patterns.
    *   src/components: Contains reusable UI components built in TypeScript with React.js, integrating tools like V0 by Vercel for modern design patterns.
    *   server: Hosts backend logic including real-time data processing, blockchain integrations (via Web3.js/Ethers.js), and alerting system built with Node.js.

### Key Files

*   **Stack-Versioned Patterns:**

    *   src/routes/dashboard.tsx: Implements the main dashboard layout displaying live Uniswap metrics and historical trend analysis.
    *   src/routes/login.tsx: Handles user authentication flows using a wallet connection or what's suggested for Wargen AI agent kit, ensuring secure sign-in/sign-up experiences.
    *   server/alerts.sol: Manages the node-based alerting system interfacing with logic to store data in Warden Blockchain and show it in the dashboard.

## Tech Stack Rules

*   **Version Enforcement:**

    *   typescript@4+: Ensures strong typing across both the frontend and backend codebases.
    *   react-router-dom@6: Mandates usage of React Router 6 with component-based routing in `src/routes/`.
    *   node@14+: Specifies backend runtime version to support modern JavaScript features required for real-time data processing.

## PRD Compliance

*   **Non-Negotiable:**

    *   "Tracks Uniswap’s trading volume and liquidity continuously, providing up-to-the-minute data." : The system must deliver real-time monitoring and alert notifications as described in the PRD, ensuring data accuracy and rapid response for significant market moves.

## App Flow Integration

*   **Stack-Aligned Flow:**

    *   Example: "React Router 6 Auth Flow → src/routes/login.tsx for authentication and src/routes/dashboard.tsx for real-time monitoring." Users log in to access a dashboard displaying live market insights, history, and customizable alert settings integrated with continuous backend processing.

# WhatsApp Mobile App Clone Documentation

This documentation covers the implementation of a WhatsApp Mobile UI App Clone using Expo, Expo Router, TypeScript, React Native, and React Context. Follow the instructions to understand the project structure, set up the development environment, and run the application.

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Components](#components)
- [Context](#context)
- [Navigation](#navigation)

## Introduction

The WhatsApp Mobile App Clone is a simplified version of the popular messaging app, WhatsApp. It is built using React Native, Expo, Expo Router, TypeScript, and React Context. The clone aims to demonstrate the UI of the original app while providing a scalable and maintainable codebase.

## Requirements

To run the project, ensure you have the following requirements installed:

- Node.js (v14.x or newer)
- Expo CLI
- A physical device or emulator (iOS/Android) for testing

## Installation

Clone the repository:

```bash
git clone https://github.com/iam-stepheen/WhatsApp-Mobile-App-UI-Clone.git
Navigate to the project directory:

bash
Copy code
cd WhatsApp-Mobile-App-UI-Clone-
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npx expo start
Open the Expo app on your device or emulator and scan the QR code displayed in your terminal.

``` 
## Project Structure

``` bash
WhatsApp-Mobile-App-UI-Clone/
├── root/
│   ├── components/
│   ├── store/
│   │   ├── context/
│   │   └── types/
│   ├── app/
│   ├── assets/
│   └── constants/
├── package.json
└── tsconfig.json
```

- root/components: Contains reusable components for the application.
- root/store: Holds the application's context providers, hooks, and types.
- store/context: Contains the context providers for the application.
- store/types: Holds the TypeScript interfaces and types for context.
- root/app: Manages the navigation structure of the application.
- root/assets: Contains individual screen images.
- root/constants: Includes default colors.

## Components
The following components are used in the application:

- ChatList: Renders a single chat item in the chat list.
- ListCard: Displays a single card used across the app.
- MessageCard: Displays a card for both sent and received messages.
- UI: Holds the checkbox component used across the app.

## Context
The application uses React Context to manage global state:

AppContext: Provides the main application state and functions to manage it.

## Navigation

The navigation structure is managed using Expo Router:

- TabNavigator: Handles the bottom tab navigation for "Chats", "Status", "Settings", and "Calls".
- StackNavigator: Manages the stack navigation for screens, such as "Chat", etc.


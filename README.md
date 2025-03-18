# Shopping Cart App

A modern shopping cart application built with Expo and React Native, featuring a clean UI.

## Features

- 📱 Cross-platform (iOS, Android, Web) support
- 🛍️ Product listing with images
- 🛒 Shopping cart functionality
- 🔄 File-based routing with Expo Router
- 💫 Smooth animations and transitions
- 🔒 TypeScript for type safety

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS) or Android Studio (for Android)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/warathepj/reactnative-shopping-cart.git
   cd reactnative-shopping-cart
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

## Project Structure

```
shopping-cart/
├── app/                   # Main application screens
│   ├── (tabs)/           # Tab-based navigation screens
│   └── _layout.tsx       # Root layout configuration
├── components/           # Reusable UI components
├── constants/           # App-wide constants
├── context/            # React Context providers
├── hooks/              # Custom React hooks
└── assets/            # Images, fonts, and other static files
```

## Usage

- The app opens to the main product listing screen
- Tap "Add to Cart" to add items to your shopping cart
- Navigate to the cart screen to view your items
- Remove items or proceed to checkout
- Use the tab bar for navigation between screens

## Development

To start development:

1. Run the development server:

   ```bash
   npm start
   ```

2. Choose your platform:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Expo](https://expo.dev)
- Uses [Expo Router](https://docs.expo.dev/router/introduction/) for navigation
- Icons from [@expo/vector-icons](https://docs.expo.dev/guides/icons/)

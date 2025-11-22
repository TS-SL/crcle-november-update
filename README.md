# CRCLE Coffee - React Native Mobile App

A beautiful React Native mobile application for coffee ordering, built with Expo and TypeScript.

## Features

- **Onboarding Screen**: Welcome screen with coffee-themed design
- **Home Screen**: Browse coffee items with categories, search, and promo banners
- **Detail Screen**: View coffee details with size selection
- **Order Screen**: Complete order with delivery options and payment summary
- **Delivery Screen**: Track delivery with map view and courier information

## Tech Stack

- **Framework**: React Native 0.81.5
- **Runtime**: Expo SDK 54
- **Language**: TypeScript 5.9.2
- **Navigation**: React Navigation 7.x
- **State Management**: React Hooks (Context API ready)

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/        # App screens
├── navigation/     # Navigation configuration
└── theme/          # Design system (colors, typography, spacing)
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your device

## Development

### Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run on web browser

## ARM64 Compatibility

This app is built with ARM64 compatibility in mind:
- Uses Expo managed workflow (no native builds required)
- All dependencies are ARM64-compatible
- Works on Apple Silicon Macs and Windows ARM64

## Notes

- This is a frontend-only implementation
- No backend or authentication included
- All data is mock/placeholder data
- Images use emoji placeholders (can be replaced with actual images)

## License

MIT


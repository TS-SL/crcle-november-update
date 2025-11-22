import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components';
import { colors, typography, spacing } from '../theme';

const { width, height } = Dimensions.get('window');

interface OnboardingScreenProps {
  onGetStarted: () => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onGetStarted }) => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" />
      
      {/* Visual Section - Inspired by Figma coffee design */}
      <View style={styles.imageContainer}>
        <View style={styles.visualPlaceholder}>
          <Text style={styles.mainIcon}>🎙️</Text>
          <Text style={styles.subIcon}>📝</Text>
          <Text style={styles.subIcon2}>🤖</Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.contentContainer}>
        <Text style={styles.headline}>
          Transform Audio into Insights with AI
        </Text>
        
        <Text style={styles.description}>
          Welcome to CRCLE, where every recording becomes a powerful summary. Record, transcribe, and get AI-powered insights from your audio.
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={onGetStarted}
            variant="primary"
            size="large"
            style={styles.getStartedButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: spacing.xxl,
  },
  visualPlaceholder: {
    width: width * 0.8,
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  mainIcon: {
    fontSize: 120,
  },
  subIcon: {
    position: 'absolute',
    top: '20%',
    right: '10%',
    fontSize: 60,
    opacity: 0.7,
  },
  subIcon2: {
    position: 'absolute',
    bottom: '20%',
    left: '10%',
    fontSize: 60,
    opacity: 0.7,
  },
  contentContainer: {
    paddingHorizontal: spacing.screenPadding,
    paddingBottom: spacing.xxl,
    alignItems: 'center',
  },
  headline: {
    ...typography.h1,
    color: colors.textWhite,
    textAlign: 'center',
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
  description: {
    ...typography.body,
    color: colors.textWhite,
    textAlign: 'center',
    marginBottom: spacing.xl,
    opacity: 0.9,
    paddingHorizontal: spacing.md,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: spacing.md,
  },
  getStartedButton: {
    width: '100%',
  },
});


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { colors, typography, spacing, borderRadius } from '../theme';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header Section - Dark Background (Figma style) */}
      <View style={styles.header}>
        <View style={styles.locationRow}>
          <Text style={styles.locationLabel}>Status</Text>
          <TouchableOpacity style={styles.locationSelector}>
            <Text style={styles.locationText}>CRCLE Active</Text>
            <Text style={styles.chevron}>▼</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Welcome to CRCLE</Text>
          <Text style={styles.welcomeSubtitle}>
            Your audio recording and AI summarization platform
          </Text>
        </View>

        {/* Wearable Sync Status Card */}
        <View style={styles.statusCard}>
          <View style={styles.statusHeader}>
            <Text style={styles.statusIcon}>⌚</Text>
            <View style={styles.statusInfo}>
              <Text style={styles.statusLabel}>Wearable Sync Status</Text>
              <Text style={styles.statusValue}>Not Connected</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.scanButton}>
            <Text style={styles.scanButtonText}>Scan Devices</Text>
          </TouchableOpacity>
        </View>

        {/* Last Sync Card */}
        <View style={styles.statusCard}>
          <View style={styles.statusHeader}>
            <Text style={styles.statusIcon}>🔄</Text>
            <View style={styles.statusInfo}>
              <Text style={styles.statusLabel}>Last Sync</Text>
              <Text style={styles.statusValue}>--/--/---- --:--</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('Uploads' as never)}
            >
              <Text style={styles.actionIcon}>📤</Text>
              <Text style={styles.actionText}>Upload Audio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('Summaries' as never)}
            >
              <Text style={styles.actionIcon}>📝</Text>
              <Text style={styles.actionText}>View Summaries</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('Chat' as never)}
            >
              <Text style={styles.actionIcon}>💬</Text>
              <Text style={styles.actionText}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('Connections' as never)}
            >
              <Text style={styles.actionIcon}>🔗</Text>
              <Text style={styles.actionText}>Connections</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.backgroundDark,
    paddingTop: spacing.md,
    paddingHorizontal: spacing.screenPadding,
    paddingBottom: spacing.lg,
  },
  locationRow: {
    marginBottom: spacing.md,
  },
  locationLabel: {
    ...typography.labelSmall,
    color: colors.textLight,
    marginBottom: spacing.xs,
  },
  locationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    ...typography.h4,
    color: colors.textWhite,
    marginRight: spacing.xs,
  },
  chevron: {
    color: colors.textWhite,
    fontSize: 12,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
  welcomeCard: {
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
    marginHorizontal: spacing.screenPadding,
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
  },
  welcomeTitle: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  welcomeSubtitle: {
    ...typography.body,
    color: colors.textLight,
  },
  statusCard: {
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
    marginHorizontal: spacing.screenPadding,
    marginBottom: spacing.md,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
  },
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  statusIcon: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  statusInfo: {
    flex: 1,
  },
  statusLabel: {
    ...typography.label,
    color: colors.textLight,
    marginBottom: spacing.xs,
  },
  statusValue: {
    ...typography.h4,
    color: colors.text,
  },
  scanButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  scanButtonText: {
    ...typography.button,
    color: colors.text,
  },
  section: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.screenPadding,
  },
  sectionTitle: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.md,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  actionCard: {
    width: '48%',
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 40,
    marginBottom: spacing.sm,
  },
  actionText: {
    ...typography.label,
    color: colors.text,
    textAlign: 'center',
  },
});


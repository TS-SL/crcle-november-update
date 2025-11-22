import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing, borderRadius } from '../theme';
import { AudioFile } from '../models';

const mockUploads: AudioFile[] = [
  {
    id: '1',
    name: 'Recording_2024_11_22.mp3',
    duration: 3600,
    size: 5242880,
    uploadedAt: new Date(),
    status: 'completed',
  },
  {
    id: '2',
    name: 'Meeting_Audio.mp3',
    duration: 1800,
    size: 2621440,
    uploadedAt: new Date(),
    status: 'processing',
    progress: 65,
  },
];

export const UploadsScreen: React.FC = () => {
  const [uploads] = useState<AudioFile[]>(mockUploads);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatSize = (bytes: number) => {
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return colors.success;
      case 'processing':
        return colors.warning;
      case 'uploading':
        return colors.text;
      case 'failed':
        return colors.error;
      default:
        return colors.textLight;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Uploads</Text>
        <Text style={styles.headerSubtitle}>Manage your audio files</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {uploads.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>📤</Text>
            <Text style={styles.emptyText}>No uploads yet</Text>
            <TouchableOpacity style={styles.uploadButton}>
              <Text style={styles.uploadButtonText}>Upload Audio File</Text>
            </TouchableOpacity>
          </View>
        ) : (
          uploads.map((upload) => (
            <View key={upload.id} style={styles.uploadCard}>
              <View style={styles.uploadHeader}>
                <Text style={styles.uploadIcon}>🎵</Text>
                <View style={styles.uploadInfo}>
                  <Text style={styles.uploadName}>{upload.name}</Text>
                  <Text style={styles.uploadMeta}>
                    {formatDuration(upload.duration)} • {formatSize(upload.size)}
                  </Text>
                </View>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: getStatusColor(upload.status) },
                  ]}
                >
                  <Text style={styles.statusText}>{upload.status}</Text>
                </View>
              </View>
              {upload.status === 'processing' && upload.progress && (
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View
                      style={[
                        styles.progressFill,
                        { width: `${upload.progress}%` },
                      ]}
                    />
                  </View>
                  <Text style={styles.progressText}>{upload.progress}%</Text>
                </View>
              )}
            </View>
          ))
        )}
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
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
  headerTitle: {
    ...typography.h2,
    color: colors.textWhite,
    marginBottom: spacing.xs,
  },
  headerSubtitle: {
    ...typography.bodySmall,
    color: colors.textLight,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.screenPadding,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xxl,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  emptyText: {
    ...typography.h4,
    color: colors.textLight,
    marginBottom: spacing.lg,
  },
  uploadButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
  },
  uploadButtonText: {
    ...typography.button,
    color: colors.text,
  },
  uploadCard: {
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  uploadHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadIcon: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  uploadInfo: {
    flex: 1,
  },
  uploadName: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  uploadMeta: {
    ...typography.bodySmall,
    color: colors.textLight,
  },
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: 'transparent',
  },
  statusText: {
    ...typography.labelSmall,
    color: colors.text,
    textTransform: 'capitalize',
  },
  progressContainer: {
    marginTop: spacing.md,
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.round,
    overflow: 'hidden',
    marginBottom: spacing.xs,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.text,
  },
  progressText: {
    ...typography.labelSmall,
    color: colors.textLight,
  },
  fab: {
    position: 'absolute',
    bottom: spacing.xl,
    right: spacing.screenPadding,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    fontSize: 32,
    color: colors.text,
    fontWeight: '300',
  },
});


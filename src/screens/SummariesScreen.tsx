import React, { useState } from 'react';
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
import { Summary } from '../models';

const mockSummaries: Summary[] = [
  {
    id: '1',
    timestamp: new Date(Date.now() - 3600000),
    snippet: 'Meeting discussion about project timeline and deliverables...',
    fullSummary: 'Full summary of the meeting discussing project timeline, deliverables, and next steps.',
    transcript: 'Full transcript text here...',
    audioFileId: '1',
    duration: 3600,
  },
  {
    id: '2',
    timestamp: new Date(Date.now() - 7200000),
    snippet: 'Client call regarding requirements and feedback...',
    fullSummary: 'Full summary of client call with requirements and feedback.',
    transcript: 'Full transcript text here...',
    audioFileId: '2',
    duration: 1800,
  },
];

export const SummariesScreen: React.FC = () => {
  const navigation = useNavigation();
  const [summaries] = useState<Summary[]>(mockSummaries);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    return `${mins} min`;
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Summaries</Text>
        <Text style={styles.headerSubtitle}>AI-generated summaries</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {summaries.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>📝</Text>
            <Text style={styles.emptyText}>No summaries yet</Text>
            <Text style={styles.emptySubtext}>
              Upload audio files to generate summaries
            </Text>
          </View>
        ) : (
          summaries.map((summary) => (
            <TouchableOpacity
              key={summary.id}
              style={styles.summaryCard}
              onPress={() =>
                setExpandedId(expandedId === summary.id ? null : summary.id)
              }
            >
              <View style={styles.summaryHeader}>
                <View style={styles.summaryIconContainer}>
                  <Text style={styles.summaryIcon}>📄</Text>
                </View>
                <View style={styles.summaryInfo}>
                  <Text style={styles.summaryDate}>
                    {formatDate(summary.timestamp)}
                  </Text>
                  <Text style={styles.summaryDuration}>
                    {formatDuration(summary.duration)}
                  </Text>
                </View>
              </View>
              <Text style={styles.summarySnippet}>{summary.snippet}</Text>
              {expandedId === summary.id && (
                <View style={styles.expandedContent}>
                  <View style={styles.divider} />
                  <Text style={styles.expandedLabel}>Full Summary:</Text>
                  <Text style={styles.expandedText}>{summary.fullSummary}</Text>
                  <TouchableOpacity
                    style={styles.viewTranscriptButton}
                    onPress={() => {
                      // Navigate to transcript view
                    }}
                  >
                    <Text style={styles.viewTranscriptText}>
                      View Full Transcript
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          ))
        )}
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
    marginBottom: spacing.sm,
  },
  emptySubtext: {
    ...typography.bodySmall,
    color: colors.textLight,
  },
  summaryCard: {
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  summaryIconContainer: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.md,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  summaryIcon: {
    fontSize: 24,
  },
  summaryInfo: {
    flex: 1,
  },
  summaryDate: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  summaryDuration: {
    ...typography.bodySmall,
    color: colors.textLight,
  },
  summarySnippet: {
    ...typography.body,
    color: colors.text,
    lineHeight: 24,
  },
  expandedContent: {
    marginTop: spacing.md,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginBottom: spacing.md,
  },
  expandedLabel: {
    ...typography.label,
    color: colors.textLight,
    marginBottom: spacing.sm,
  },
  expandedText: {
    ...typography.body,
    color: colors.text,
    lineHeight: 24,
    marginBottom: spacing.md,
  },
  viewTranscriptButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  viewTranscriptText: {
    ...typography.label,
    color: colors.text,
  },
});


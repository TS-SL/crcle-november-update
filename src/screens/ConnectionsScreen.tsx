import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing, borderRadius } from '../theme';

interface Connection {
  id: string;
  name: string;
  icon: string;
  connected: boolean;
  description: string;
}

const connections: Connection[] = [
  {
    id: '1',
    name: 'Google Drive',
    icon: '📁',
    connected: false,
    description: 'Sync audio files to Google Drive',
  },
  {
    id: '2',
    name: 'Dropbox',
    icon: '☁️',
    connected: false,
    description: 'Backup recordings to Dropbox',
  },
  {
    id: '3',
    name: 'OneDrive',
    icon: '💾',
    connected: false,
    description: 'Store files on OneDrive',
  },
];

export const ConnectionsScreen: React.FC = () => {
  const [connectionList, setConnectionList] = useState<Connection[]>(connections);

  const toggleConnection = (id: string) => {
    setConnectionList((prev) =>
      prev.map((conn) =>
        conn.id === id ? { ...conn, connected: !conn.connected } : conn
      )
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Connections</Text>
        <Text style={styles.headerSubtitle}>Connect external services</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {connectionList.map((connection) => (
          <View key={connection.id} style={styles.connectionCard}>
            <View style={styles.connectionHeader}>
              <View style={styles.connectionIconContainer}>
                <Text style={styles.connectionIcon}>{connection.icon}</Text>
              </View>
              <View style={styles.connectionInfo}>
                <Text style={styles.connectionName}>{connection.name}</Text>
                <Text style={styles.connectionDescription}>
                  {connection.description}
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.connectButton,
                  connection.connected && styles.connectedButton,
                ]}
                onPress={() => toggleConnection(connection.id)}
              >
                <Text
                  style={[
                    styles.connectButtonText,
                    connection.connected && styles.connectedButtonText,
                  ]}
                >
                  {connection.connected ? 'Connected' : 'Connect'}
                </Text>
              </TouchableOpacity>
            </View>
            {connection.connected && (
              <View style={styles.connectedIndicator}>
                <View style={styles.connectedDot} />
                <Text style={styles.connectedText}>Active</Text>
              </View>
            )}
          </View>
        ))}
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
  connectionCard: {
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  connectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectionIconContainer: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.md,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  connectionIcon: {
    fontSize: 32,
  },
  connectionInfo: {
    flex: 1,
  },
  connectionName: {
    ...typography.h4,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  connectionDescription: {
    ...typography.bodySmall,
    color: colors.textLight,
  },
  connectButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
  },
  connectedButton: {
    borderColor: colors.text,
  },
  connectButtonText: {
    ...typography.label,
    color: colors.textWhite,
  },
  connectedButtonText: {
    color: colors.textWhite,
  },
  connectedIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  connectedDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.text,
    marginRight: spacing.xs,
  },
  connectedText: {
    ...typography.labelSmall,
    color: colors.text,
  },
});


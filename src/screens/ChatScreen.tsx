import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing, borderRadius } from '../theme';
import { ChatMessage } from '../models';

const mockMessages: ChatMessage[] = [
  {
    id: '1',
    text: 'Hello! How can I help you with your audio summaries?',
    timestamp: new Date(Date.now() - 3600000),
    role: 'assistant',
  },
];

export const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        text: inputText,
        timestamp: new Date(),
        role: 'user',
      };
      setMessages([...messages, newMessage]);
      setInputText('');

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: 'I understand. Let me help you with that.',
          timestamp: new Date(),
          role: 'assistant',
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat</Text>
        <Text style={styles.headerSubtitle}>GPT-4o Mini Assistant</Text>
      </View>

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90}
      >
        <ScrollView
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
        >
          {messages.map((message) => (
            <View
              key={message.id}
              style={[
                styles.messageBubble,
                message.role === 'user'
                  ? styles.userBubble
                  : styles.assistantBubble,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  message.role === 'user'
                    ? styles.userText
                    : styles.assistantText,
                ]}
              >
                {message.text}
              </Text>
              <Text
                style={[
                  styles.messageTime,
                  message.role === 'user'
                    ? styles.userTime
                    : styles.assistantTime,
                ]}
              >
                {formatTime(message.timestamp)}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            placeholderTextColor={colors.textLight}
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity
            style={[
              styles.sendButton,
              !inputText.trim() && styles.sendButtonDisabled,
            ]}
            onPress={handleSend}
            disabled={!inputText.trim()}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  keyboardView: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: spacing.screenPadding,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
  },
  userBubble: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    alignSelf: 'flex-end',
    borderBottomRightRadius: borderRadius.sm,
  },
  assistantBubble: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    alignSelf: 'flex-start',
    borderBottomLeftRadius: borderRadius.sm,
  },
  messageText: {
    ...typography.body,
    marginBottom: spacing.xs,
  },
  userText: {
    color: colors.textWhite,
  },
  assistantText: {
    color: colors.text,
  },
  messageTime: {
    ...typography.labelSmall,
    fontSize: 10,
  },
  userTime: {
    color: colors.textWhite,
    opacity: 0.7,
  },
  assistantTime: {
    color: colors.textLight,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.screenPadding,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    maxHeight: 100,
    ...typography.body,
    color: colors.text,
    marginRight: spacing.md,
  },
  sendButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendButtonText: {
    ...typography.button,
    color: colors.textWhite,
  },
});


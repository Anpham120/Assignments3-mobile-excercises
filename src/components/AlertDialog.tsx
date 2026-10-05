import { Modal, Pressable, Text, View } from 'react-native';

import { styles } from '@/styles/alertDialog';

type AlertDialogProps = {
  visible: boolean;
  title: string;
  messages: string[];
  onClose: () => void;
};

// Hộp thoại cảnh báo vẽ ngay trên giao diện: nền mờ phủ kín màn hình, mỗi thông báo một dòng, bấm OK để đóng
export function AlertDialog({ visible, title, messages, onClose }: AlertDialogProps) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      // Android: để nền mờ phủ cả thanh trạng thái và thanh điều hướng
      statusBarTranslucent
      navigationBarTranslucent
      // Nút Back của Android (Esc trên web) cũng đóng hộp thoại
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.dialog}>
          <Text style={styles.title}>{title}</Text>
          {messages.map((message) => (
            <Text key={message} style={styles.message}>
              {message}
            </Text>
          ))}
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={onClose}
            role="button"
          >
            <Text style={styles.buttonText}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

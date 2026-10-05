import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Nền mờ phủ kín màn hình, hộp thoại nằm giữa
  backdrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  // maxWidth để màn hình rộng (web) hộp thoại không bị kéo giãn
  dialog: {
    width: '100%',
    maxWidth: 320,
    gap: 10,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    fontSize: 15,
    color: '#333',
  },

  // Nút OK cùng kiểu với nút "Click me"
  button: {
    alignSelf: 'center',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 8,
    backgroundColor: '#F08A22',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  pressed: {
    opacity: 0.7,
  },
});

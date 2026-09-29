import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  // Nút "Back" màu cam (cùng màu nút "Click me") ở góc trên bên trái
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#F08A22',
  },
  backText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  pressed: {
    opacity: 0.7,
  },
  // Nội dung nằm giữa màn hình
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    marginBottom: 4,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  info: {
    fontSize: 15,
    color: '#333',
  },
});

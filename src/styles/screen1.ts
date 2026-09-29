import { StyleSheet } from 'react-native';

// Khoảng cách giữa các ô và lề màn hình
const GAP = 10;
const PADDING = 16;
// Màu báo lỗi, dùng chung cho viền ô nhập và dòng thông báo
const ERROR_COLOR = '#D32F2F';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex: {
    flex: 1,
  },
  // flexGrow: nội dung cao ít nhất bằng màn hình để form nằm sát đáy
  content: {
    flexGrow: 1,
    padding: PADDING,
  },

  // Lưới 6 ô: giữ tỉ lệ rộng/cao cố định nên không bị bóp méo khi bàn phím hiện
  grid: {
    aspectRatio: 0.84,
    gap: GAP,
  },
  // Hàng 1 và hàng 2 cao bằng nhau
  row: {
    flex: 6,
    flexDirection: 'row',
    gap: GAP,
  },
  // Hàng 3 (ô 6) thấp hơn
  lastRow: {
    flex: 5,
  },
  // Ô 3 + ô 4 gộp lại, rộng bằng ô 1
  pair: {
    flex: 1,
    flexDirection: 'row',
    gap: GAP,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  numberDark: {
    color: '#000',
  },

  // marginTop: 'auto' đẩy form và nút xuống sát đáy màn hình
  form: {
    marginTop: 'auto',
    paddingTop: 24,
    gap: 10,
  },
  title: {
    marginBottom: 6,
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  field: {
    gap: 4,
  },
  input: {
    height: 44,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 15,
    color: '#000',
  },
  inputError: {
    borderColor: ERROR_COLOR,
  },
  errorText: {
    fontSize: 13,
    color: ERROR_COLOR,
  },

  // Nút "Click me" ở giữa, dưới cùng
  button: {
    alignSelf: 'center',
    marginTop: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
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

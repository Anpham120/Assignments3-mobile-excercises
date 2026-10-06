import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AlertDialog } from '@/components/AlertDialog';
import { styles } from '@/styles/screen1';

type BoxProps = {
  color: string;
  number: string;
  dark?: boolean;
};

// Một ô màu, số nằm giữa. dark = số màu đen (dùng cho nền vàng)
function Box({ color, number, dark }: BoxProps) {
  return (
    <View style={[styles.box, { backgroundColor: color }]}>
      <Text style={[styles.number, dark && styles.numberDark]}>{number}</Text>
    </View>
  );
}

type FieldProps = TextInputProps & {
  error?: string;
};

// Ô nhập kèm dòng báo lỗi màu đỏ bên dưới, có lỗi thì viền cũng đỏ
function Field({ error, ...inputProps }: FieldProps) {
  return (
    <View style={styles.field}>
      <TextInput
        style={[styles.input, !!error && styles.inputError]}
        placeholderTextColor="#888"
        {...inputProps}
      />
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

type Errors = {
  userName?: string;
  studentId?: string;
};

// Ràng buộc "không được để trống": gõ toàn dấu cách cũng tính là trống
function checkRequired(value: string, label: string) {
  if (value.length === 0) return `${label} cannot be empty`;
  if (value.trim().length === 0) return `${label} cannot contain only spaces`;
  return undefined;
}

// Định dạng MSSV: B hoa + 2 chữ cái a-z (hoa hoặc thường) + 2 số từ 22-26 + 4 chữ số 0-9 (vd: BCS231234, Bcs231234)
const STUDENT_ID_PATTERN = /^B[A-Za-z]{2}2[2-6][0-9]{4}$/;

function checkStudentId(value: string) {
  const requiredError = checkRequired(value, 'Student ID');
  if (requiredError) return requiredError;
  if (!STUDENT_ID_PATTERN.test(value.trim())) {
    return 'Student ID must be B + 2 letters + 22-26 + 4 digits (e.g. BCS231234)';
  }
  return undefined;
}

function validate(userName: string, studentId: string): Errors {
  return {
    userName: checkRequired(userName, 'Name'),
    studentId: checkStudentId(studentId),
  };
}

export default function Screen1() {
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const [userName, setUserName] = useState('');
  const [studentId, setStudentId] = useState('');
  // Chưa bấm "Click me" thì chưa báo lỗi; bấm rồi thì lỗi cập nhật ngay khi gõ
  const [submitted, setSubmitted] = useState(false);
  // Nội dung hộp thoại giữ lại sau khi đóng để lúc mờ dần không bị trống
  const [dialogMessages, setDialogMessages] = useState<string[]>([]);
  const [dialogVisible, setDialogVisible] = useState(false);

  const errors: Errors = submitted ? validate(userName, studentId) : {};

  // Bàn phím hiện lên thì cuộn xuống cuối để ô nhập và nút "Click me" không bị che
  useEffect(() => {
    const subscription = Keyboard.addListener('keyboardDidShow', () => {
      scrollRef.current?.scrollToEnd();
    });
    return () => subscription.remove();
  }, []);

  const handlePress = () => {
    setSubmitted(true);
    Keyboard.dismiss();
    const result = validate(userName, studentId);
    const messages = [result.userName, result.studentId].filter((m): m is string => !!m);
    if (messages.length > 0) {
      // Báo lỗi bằng hộp thoại, mỗi lỗi một dòng
      setDialogMessages(messages);
      setDialogVisible(true);
      return;
    }

    // Truyền họ tên và MSSV sang Screen 2 qua params
    router.push({
      pathname: '/screen2',
      params: { userName: userName.trim(), studentId: studentId.trim() },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.grid}>
            {/* Hàng 1: ô 1 và ô 2 chia đều */}
            <View style={styles.row}>
              <Box number="1" color="#287FF0" />
              <Box number="2" color="#F83D3D" />
            </View>

            {/* Hàng 2: ô 3 + ô 4 gộp lại rộng bằng ô 1, ô 5 rộng bằng ô 2 */}
            <View style={styles.row}>
              <View style={styles.pair}>
                <Box number="3" color="#FFD21C" dark />
                <Box number="4" color="#2DAF6A" />
              </View>
              <Box number="5" color="#7D3FE1" />
            </View>

            {/* Hàng 3: ô 6 rộng hết hàng, thấp hơn hai hàng trên */}
            <View style={styles.lastRow}>
              <Box number="6" color="#FF7512" />
            </View>
          </View>

          <View style={styles.form}>
            <Text style={styles.title}>Nhap thong tin sinh vien</Text>
            <Field
              placeholder="Enter your name"
              value={userName}
              onChangeText={setUserName}
              autoCapitalize="words"
              error={errors.userName}
            />
            <Field
              placeholder="Enter your student ID"
              value={studentId}
              onChangeText={setStudentId}
              autoCapitalize="characters"
              autoCorrect={false}
              error={errors.studentId}
            />
          </View>

          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={handlePress}
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Click me</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>

      <AlertDialog
        visible={dialogVisible}
        title="Warning"
        messages={dialogMessages}
        onClose={() => setDialogVisible(false)}
      />
    </SafeAreaView>
  );
}

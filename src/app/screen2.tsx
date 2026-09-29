import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from '@/styles/screen2';

export default function Screen2() {
  const router = useRouter();
  // Nhận họ tên và MSSV do Screen 1 truyền sang
  const { userName, studentId } = useLocalSearchParams<{ userName: string; studentId: string }>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Nút "Back" ở góc trên bên trái, bấm để quay về Screen 1 */}
      <Pressable
        style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
        onPress={() => router.back()}
        accessibilityRole="button"
      >
        <Text style={styles.backText}>Back</Text>
      </Pressable>

      <View style={styles.content}>
        <Text style={styles.title}>Screen 2</Text>
        <Text style={styles.info}>Name: {userName}</Text>
        <Text style={styles.info}>Student ID: {studentId}</Text>
      </View>
    </SafeAreaView>
  );
}

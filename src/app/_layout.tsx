import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      {/* Ẩn header mặc định, Screen 2 tự có nút mũi tên quay lại */}
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

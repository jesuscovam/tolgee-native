import '@expo/browser-polyfill'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { TolgeeProvider } from '@tolgee/react'


const REACT_APP_TOLGEE_API_URL = "https://app.tolgee.io" as const
const REACT_APP_TOLGEE_API_KEY = "demo-please-replace-with-your-token" as const


export default function App() {
  return (
    <TolgeeProvider filesUrlPrefix="i18n/"
      apiUrl={REACT_APP_TOLGEE_API_URL}
      apiKey={REACT_APP_TOLGEE_API_KEY}
      loadingFallback={<ActivityIndicator />}
    >

      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </TolgeeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from "react-native"
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto"
import { Avatar, GluestackUIProvider } from "@gluestack-ui/themed"

import { config } from "./config/gluestack-ui.config"

import { Routes } from "./src/routes"

import { AuthContext } from "@contexts/AuthContext"

import { Loading } from "./src/components/Loading"
import { SignUp } from "@screens/SignUp"

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContext.Provider
        value={{
          user: {
            id: "1",
            name: "Welbert Soares",
            email: "welbertsoares@outlook.com",
            avatar: "welbert.png",
          },
        }}
      >
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </GluestackUIProvider>
  )
}

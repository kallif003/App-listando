import { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LogBox } from "react-native"
import Splash from "./src/pages/Splash/Splash"
import Login from "./src/pages/Login/Login"
import Home from "./src/pages/Home/Home"
// import Criar from "./src/pages/Criar"
// import Criadas from "./src/pages/Criadas"
// import Box from "./src/pages/CheckBox"
// import NovaSenha from "./src/pages/NovaSenha"
import { StatusBar } from "expo-status-bar"
import { BackHandler } from "react-native"
import AuthProvider from "./src/contexts/auth"

const Stack = createNativeStackNavigator()

export default function applistando() {
	useEffect(() => {
		LogBox.ignoreAllLogs()
		BackHandler.addEventListener("hardwareBackPress", () => true)
		return () =>
			BackHandler.removeEventListener("hardwareBackPress", () => true)
	}, [])

	return (
		<NavigationContainer>
			<AuthProvider>
				<StatusBar style="light" translucent={true} backgroundColor="#00acee" />
				<Stack.Navigator initialRouteName="Splash">
					<Stack.Screen
						name="Splash"
						component={Splash}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Login"
						component={Login}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</AuthProvider>
		</NavigationContainer>
	)
}

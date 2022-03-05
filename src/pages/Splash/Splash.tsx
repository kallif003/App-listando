/* eslint-disable no-unused-vars */
import { useEffect, useContext } from "react"
import { Dimensions } from "react-native"
import { Gradient } from "../../components/LinearGradient"
import LottieView from "lottie-react-native"
import { useNavigation, CommonActions } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import list from "../../../assets/list.json"
import { AuthContext } from "../../contexts/auth"

const size = Dimensions.get("window").width * 0.5

export default function Splash() {
	const navigation = useNavigation()
	const { login }: any = useContext(AuthContext)

	let email: any = ""
	let password: any = ""

	useEffect(() => {
		async function pegarDadosAsyncStorage(): Promise<void> {
			await AsyncStorage.getItem("email").then((value) => {
				email = value
			})
			await AsyncStorage.getItem("password").then((value) => {
				password = value
			})

			if (email != null) {
				login(email, password)
			} else {
				setTimeout(() => {
					navigation.dispatch(
						CommonActions.reset({
							index: 0,
							routes: [{ name: "Login" }],
						})
					)
				}, 5000)
			}
		}
		pegarDadosAsyncStorage()
	}, [])

	return (
		<Gradient colors={["#00acee", "#2eb2ff", "#0078d7"]}>
			<LottieView
				source={list}
				style={{ width: size, height: size }}
				autoPlay
				loop
				resizeMode="contain"
			/>
		</Gradient>
	)
}

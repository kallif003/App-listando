import { useState, useEffect, useContext } from "react"
import { useNavigation, CommonActions } from "@react-navigation/native"
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Keyboard,
	SafeAreaView,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import {
	IconView,
	InputView,
	Input,
	TextError,
	Button,
	TextBtn,
	Tittle,
} from "./styles"
import { AuthContext } from "../../contexts/auth"

export default function Login() {
	const [type, setType] = useState("login")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [boolean, setBoolean] = useState(false)
	const navigation = useNavigation()
	const { login, signUp, msgErro }: any = useContext(AuthContext)

	useEffect(() => {
		setBoolean(false)
	}, [])

	async function acessar() {
		if (type === "login") {
			login(email, password)
			Keyboard.dismiss()
		} else {
			signUp(email, password)
			Keyboard.dismiss()
			setEmail("")
			setPassword("")
		}
	}

	function novaSenha() {
		if (email !== "") {
			navigation.dispatch(
				CommonActions.reset({
					index: 0,
					routes: [{ name: "NovaSenha" }],
				})
			)
			setEmail("")
			setPassword("")
		}
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<LinearGradient colors={["#00acee", "#0078d7"]} style={styles.container}>
				<IconView>
					<MaterialCommunityIcons name="playlist-edit" size={80} color="#fff" />
				</IconView>

				<Tittle>Listando</Tittle>

				<InputView>
					{boolean ? <TextError> {msgErro} </TextError> : <View />}
					<Input
						placeholder="Email:"
						onChangeText={(texto) => setEmail(texto)}
						autoCompleteType="off"
					/>
					<Input
						placeholder="Senha:"
						onChangeText={(texto) => setPassword(texto)}
						value={password}
						secureTextEntry={true}
					/>

					<Button onPress={acessar}>
						<TextBtn style={{ color: "#fff" }}>
							{type === "login" ? "Acessar" : "Cadastrar"}
						</TextBtn>
					</Button>

					<TouchableOpacity
						onPress={() =>
							setType((type) => (type === "login" ? "cadastra" : "login"))
						}>
						<TextBtn style={{ marginTop: 10, color: "#000" }}>
							{type === "login"
								? "Criar Conta Gratuita"
								: "Já possuo uma conta"}
						</TextBtn>
					</TouchableOpacity>

					<TouchableOpacity onPress={novaSenha}>
						<TextBtn style={{ marginTop: 10, color: "#f10808", fontSize: 13 }}>
							Esqueceu a senha?
						</TextBtn>
					</TouchableOpacity>
				</InputView>
			</LinearGradient>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		height: "45%",
		marginTop: 20,
	},
})

import firebase from "../../connection/firebaseConnection"
import { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Keyboard,
	SafeAreaView,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
	IconView,
	InputView,
	Input,
	TextError,
	Button,
	TextBtn,
	Tittle,
} from "./styles"

export default function Login() {
	const [type, setType] = useState("login")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [boolean, setBoolean] = useState(false)

	const [msgErro, setMsgErro] = useState("")

	const navigation = useNavigation()

	useEffect(() => {
		setBoolean(false)
	}, [])

	async function acessar() {
		if (type === "login") {
			await firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((user: any) => {
					navigation.navigate("Criadas", {
						user: user.user.uid,
						email: user.user.email,
					})
					AsyncStorage.setItem("email", email)
					AsyncStorage.setItem("senha", password)
					setEmail("")
					setPassword("")
				})
				.catch((error) => {})
			Keyboard.dismiss()
		} else {
			await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((user: any) => {
					navigation.navigate("Criadas", {
						user: user.user.uid,
						email: user.user.email,
					})
					AsyncStorage.setItem("email", email)
					AsyncStorage.setItem("senha", password)
				})
				.catch((error) => {
					setMsgErro("Informe um formato de email válido")
				})

			Keyboard.dismiss()
			setEmail("")
			setPassword("")
		}
	}

	function novaSenha() {
		if (email !== "") {
			navigation.navigate("NovaSenha", { Email: email })
			setEmail("")
			setPassword("")
		}
	}

	return (
		<SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
			<LinearGradient colors={["#00acee", "#0078d7"]} style={styles.container}>
				<IconView>
					<MaterialCommunityIcons name="playlist-edit" size={80} color="#fff" />
				</IconView>

				<Tittle>Listando</Tittle>

				<InputView>
					{boolean ? <TextError> {msgErro} </TextError> : <View />}
					<Input
						placeholder="Email:"
						onChange={(texto: any) => setEmail(texto)}
						value={email}
						autoCompleteType="off"
					/>
					<Input
						placeholder="Senha:"
						onChange={(texto: any) => setPassword(texto)}
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

import { useState, useContext } from "react"
import { useNavigation, CommonActions } from "@react-navigation/native"
import { View, Keyboard, SafeAreaView } from "react-native"
import { Gradient } from "../../components/LinearGradient"
import {
	Button,
	ForgotPassword,
	CreateFreeAccount,
} from "../../components/Buttons"
import { Input } from "../../components/Inputs"
import {
	TextError,
	SecondaryButtonText,
	Title,
} from "../../components/Typography"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { IconView, InputView } from "./styles"
import { AuthContext } from "../../contexts/auth"

export default function Login() {
	const [type, setType] = useState("login")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigation = useNavigation()
	const { login, signUp, msgErro }: any = useContext(AuthContext)

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
			<Gradient colors={["#00acee", "#0078d7"]}>
				<IconView>
					<MaterialCommunityIcons name="playlist-edit" size={80} color="#fff" />
				</IconView>

				<Title>Listando</Title>

				<InputView>
					{msgErro ? <TextError> {msgErro} </TextError> : <View />}
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
						<SecondaryButtonText style={{ color: "#fff" }}>
							{type === "login" ? "Acessar" : "Cadastrar"}
						</SecondaryButtonText>
					</Button>

					<CreateFreeAccount
						onPress={() =>
							setType((type) => (type === "login" ? "cadastra" : "login"))
						}>
						<SecondaryButtonText>
							{type === "login"
								? "Criar Conta Gratuita"
								: "Já possuo uma conta"}
						</SecondaryButtonText>
					</CreateFreeAccount>

					<ForgotPassword onPress={novaSenha}>
						<SecondaryButtonText style={{ color: "#f10808" }}>
							Esqueceu a senha?
						</SecondaryButtonText>
					</ForgotPassword>
				</InputView>
			</Gradient>
		</SafeAreaView>
	)
}

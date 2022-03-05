/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import firebase from "../connection/firebaseConnection"
import { useNavigation, CommonActions } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AuthContext = createContext({})

function AuthProvider({ children }: any) {
	const [msgErro, setMsgErro] = useState("")
	const navigation = useNavigation()

	async function signUp(email: string, password: string) {
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				navigation.dispatch(
					CommonActions.reset({
						index: 0,
						routes: [{ name: "Login" }],
					})
				)
			})
		AsyncStorage.setItem("email", email)
		AsyncStorage.setItem("password", password)
	}

	async function login(email: string, password: string) {
		await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				navigation.dispatch(
					CommonActions.reset({
						index: 0,
						routes: [{ name: "Login" }],
					})
				)
			})
			.catch((error) => {
				setMsgErro("Email ou senha invalidos")
			})
		AsyncStorage.setItem("email", email)
		AsyncStorage.setItem("password", password)
	}
	return (
		<AuthContext.Provider value={{ msgErro, login, signUp }}>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider

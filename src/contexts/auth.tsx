/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import firebase from "../connection/firebaseConnection"
import { useNavigation, CommonActions } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AuthContext = createContext({})

function AuthProvider({ children }: any) {
	const [msgErro, setMsgErro] = useState("")
	const [user, setUser] = useState("")
	const [nameLists, setNameLists] = useState({})
	const navigation = useNavigation()

	async function signUp(email: string, password: string) {
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				navigation.dispatch(
					CommonActions.reset({
						index: 0,
						routes: [{ name: "Home" }],
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
			.then((value: any) => {
				navigation.dispatch(
					CommonActions.reset({
						index: 0,
						routes: [{ name: "Home" }],
					})
				)
				setUser(value.user.uid)
				console.log(user)
			})
			.catch((error) => {
				setMsgErro("Email ou senha invalidos")
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

	async function logout() {
		await firebase
			.auth()
			.signOut()
			.then(() => {
				navigation.dispatch(
					CommonActions.reset({
						index: 0,
						routes: [{ name: "Login" }],
					})
				)
				AsyncStorage.clear()
			})
	}

	async function getUser() {
		await firebase
			.database()
			.ref("Listas")
			.child(user)
			.on("value", (snapshot) => {
				setNameLists([])

				snapshot.forEach((childItem) => {
					const data = {
						key: childItem.key,
						lista: childItem.key,
					}
					setNameLists((old: never[]) => [...old, data])
				})
			})
	}

	return (
		<AuthContext.Provider
			value={{ user, msgErro, login, signUp, logout, nameLists }}>
			{children}
		</AuthContext.Provider>
	)
}
export default AuthProvider

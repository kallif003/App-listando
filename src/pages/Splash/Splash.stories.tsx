import Splash from "./Splash"
import { LinearGradient } from "expo-linear-gradient"
import LottieView from "lottie-react-native"
import { StyleSheet, Dimensions } from "react-native"
import list from "../../../assets/list.json"

const size = Dimensions.get("window").width * 0.5

export default {
	title: "components/Splash",
	component: Splash,
}

export const Basic = () => (
	<LinearGradient
		colors={["#00acee", "#2eb2ff", "#0078d7"]}
		style={styles.container}>
		<LottieView source={list} style={{ width: size, height: size }} />
	</LinearGradient>
)
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#00acee",
	},
})

import { SafeAreaView } from "react-native-safe-area-context"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import { GradientTop, GradientBotton } from "../../components/LinearGradient"
import { PrimaryButton } from "../../components/Buttons"
// import { FlatList } from "react-native"
import { Container, Flat, LogoutButton } from "./styles"
import {
	SecondaryButtonText,
	PrimaryButtonText,
	Title,
} from "../../components/Typography"

const Home: React.FC = () => {
	const { logout }: any = useContext(AuthContext)
	return (
		<SafeAreaView>
			<GradientTop colors={["#00acee", "#2eb2ff", "#0078d7"]}>
				<Title>Minhas Listas</Title>
			</GradientTop>

			<Container>
				<Flat></Flat>
			</Container>

			<GradientBotton colors={["#0078d7", "#2eb2ff", "#00acee"]}>
				<PrimaryButton>
					<PrimaryButtonText>Criar Listas</PrimaryButtonText>
				</PrimaryButton>

				<LogoutButton onPress={() => logout()}>
					<SecondaryButtonText>Sair</SecondaryButtonText>
				</LogoutButton>
			</GradientBotton>
		</SafeAreaView>
	)
}

export default Home

import Login from "./Login"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { NavigationContainer } from "@react-navigation/native"

export default {
	title: "Pages/Login",
	component: Login,
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = () => (
	<NavigationContainer>
		<Login />
	</NavigationContainer>
)

export const Desktop = Template.bind({})

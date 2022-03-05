import styled from "styled-components"
import { LinearGradient } from "expo-linear-gradient"

export const Gradient = styled(LinearGradient)`
	flex: 1;
	align-items: center;
	justify-content: center;
`
export const GradientTop = styled(LinearGradient)`
	width: 100%;
	height: 12%;
	border-bottom-left-radius: 50px;
	border-bottom-right-radius: 50px;
	text-align: center;
	justify-content: center;
`
export const GradientBotton = styled(LinearGradient)`
	align-items: center;
	margin-top: 70px;
	height: 100px;
	border-top-right-radius: 50px;
	border-top-left-radius: 50px;
`

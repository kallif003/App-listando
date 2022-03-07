import styled from "styled-components/native"
import { Feather } from "@expo/vector-icons"

export const MylistContainer = styled.View`
	flex: 1;
	justify-content: center;
`
export const MyListView = styled.View`
	margin-top: 20px;
	border-radius: 5px;
	margin-bottom: 5px;
	margin-left: 20px;
`
export const MyListIcon = styled.View`
	flex-direction: row;
	margin-left: 5px;
`
export const IconTrash = styled(Feather)`
	margin-left: 10px;
	color: #000;
`

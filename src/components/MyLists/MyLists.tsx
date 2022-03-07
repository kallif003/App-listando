import { MylistContainer, MyListView, MyListIcon, IconTrash } from "./styles"
import { ListButton, DeleteButton } from "../../components/Buttons"
import { TextListButton } from "../../components/Typography"

const MyLists = (props: { data: any }) => {
	return (
		<MylistContainer>
			<MyListView>
				<ListButton>
					<TextListButton>{props.data.name}</TextListButton>
					<MyListIcon>
						<DeleteButton>
							<IconTrash name="trash-2" size={24} />
						</DeleteButton>
					</MyListIcon>
				</ListButton>
			</MyListView>
		</MylistContainer>
	)
}

export default MyLists

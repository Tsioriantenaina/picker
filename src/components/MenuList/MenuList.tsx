import React, { FC } from "react";
import MenuListItem from "./MenuListItem/MenuListItem";
import { lists } from "../../App";
interface MenuListProps {
	dificulty: string;
	handleMenuItemClick: (list: string) => void;
}
const MenuList: FC<MenuListProps> = ({ dificulty, handleMenuItemClick }) => {
	return (
		<ul className="list">
			{lists.map((list) => (
				<MenuListItem
					key={list}
					list={list}
					isActive={list === dificulty}
					handleMenuItemClick={handleMenuItemClick}
				/>
			))}
		</ul>
	);
};

export default MenuList;

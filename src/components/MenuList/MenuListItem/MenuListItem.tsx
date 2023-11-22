import React, { FC } from "react";
interface MenuListItemProps {
	list: string;
	isActive: boolean;
	handleMenuItemClick: (list: string) => void;
}
const MenuListItem: FC<MenuListItemProps> = ({ list, handleMenuItemClick, isActive }) => {
	return (
		<li
			className={`item ${isActive ? "active" : ""}`}
			onClick={() => handleMenuItemClick(list)}
		>
			Set to : {list}
		</li>
	);
};

export default MenuListItem;

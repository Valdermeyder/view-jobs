import React from 'react'
import {Menu, MenuItem} from "material-ui";
import {Link} from "react-router-dom";

const style = {
	display: 'inline-block',
	margin: '16px 0 16px 0',
}

export default ({menuItems}) => menuItems.map((menuItem) => (
		<Menu style={style}>
			<MenuItem containerElement={<Link to={menuItem.path}/>} primaryText={menuItem.text}/>
		</Menu>))
import React from 'react'
import {Menu, MenuItem} from "material-ui";
import {Link} from "react-router-dom";

const style = {
	display: 'inline-block'
}

export default ({menuItems}) => menuItems.map((menuItem) => (
		<Menu key={menuItem.path} style={style}>
			<MenuItem containerElement={<Link to={menuItem.path}/>} primaryText={menuItem.text}/>
		</Menu>))
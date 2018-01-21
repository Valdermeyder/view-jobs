import React from 'react'
import {Menu, MenuItem} from 'material-ui';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getEntityPath} from './pathSelector';

const style = {
	display: 'inline-block',
	textAlign: 'center'
}

const MenuBar = ({menuItems}) => menuItems.map((menuItem) => (
	<Menu key={menuItem.path} style={style}>
		<MenuItem containerElement={<Link to={menuItem.path}/>} primaryText={menuItem.text}/>
	</Menu>))

const mapStateToProps = state => ({
	menuItems: [
		{
			path: getEntityPath(state, 'job'),
			text: 'Home'
		}
	]
})

export default connect(mapStateToProps)(MenuBar)

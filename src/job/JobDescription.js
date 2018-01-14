import React, {Fragment} from 'react'
import {CardText, CardTitle} from "material-ui";

export default ({description}) => (
	<Fragment>
		<CardTitle title={description.title}/>
		<CardText>{description.text}</CardText>
	</Fragment>
)
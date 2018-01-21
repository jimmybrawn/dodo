import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class Button extends Component {
	constructor(props){
		super(props)
		this.state = {
			buttonText: 'Button',
			buttonClass: 'button'
		}
	}

	componentWillMount() {
		//	Set state from array of props
		const classesArray = this.props.classes.split(' ')
		classesArray.unshift(this.state.buttonClass)
		const newClass = classesArray.toString()	
		this.setState({buttonClass: newClass.replace(new RegExp(',', 'g'), ' ')}) 
	}

	render() {
		return (
			<button className={this.state.buttonClass}>{this.state.buttonText}</button>
		);
	}
}

Button.propTypes = {
	classes: PropTypes.string
};
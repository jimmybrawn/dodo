import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReceiptItem extends Component {
	// constructor(props){
	// 	super(props)
	// }

	render() {
		return (
			<div>{this.props.name}({this.props.date})</div>
		)
	}
}

ReceiptItem.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string
};

export default ReceiptItem;
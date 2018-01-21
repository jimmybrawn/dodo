import React, { Component } from 'react'
import './App.css'
import ReceiptItem from './ReceiptItem';
import Button from './Button';
import AddReceipt from './AddReceipt';
class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			items: [
				{
					name: 'Elgiganten Keyboard',
					date: '2016-07-17'
				},
				{
					name: 'Elgiganten Hoverboard',
					date: '2018-01-21'
				}
			]
		}
	}

	render() {

		const itemList = this.state.items.map((item, i) => {
			return (<ReceiptItem key={i} name={item.name} date={item.date} />)
		})

		return (
			<div className="App">
				{itemList}
				<Button classes="green add-receipt"/>
				<input type="file" accept="image/*" capture="camera" />
				<AddReceipt/>
			</div>
		)
	}
}

export default App

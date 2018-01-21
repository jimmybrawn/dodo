import React, { Component } from 'react';
import fire from '../fire';
import FileUploader from 'react-firebase-file-uploader';
export default class AddReceipt extends Component {
	constructor(props) {
		super(props);
		this.state = {
			receipts: [],
			qrcode: '',
			isUploading: false,
			progress: 0,
			qrcodeURL: ''
		}
	}

	// handleChangeUsername = (event) => this.setState({ username: event.target.value });
	handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })
	handleProgress = (progress) => this.setState({ progress });
	handleUploadError = (error) => {
		this.setState({ isUploading: false });
		console.error(error);
	}
	handleUploadSuccess = (filename) => {
		this.setState({ qrcode: filename, progress: 100, isUploading: false });
		fire.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({ qrcodeURL: url }));
	}

	componentWillMount() {
		/* Create reference to receipts in Firebase Database */
		let receiptsRef = fire.database().ref('receipts').orderByKey().limitToLast(100);
		receiptsRef.on('child_added', snapshot => {

			/* Update React state when message is added at Firebase Database */
			let receipt = { receipt: { meta: snapshot.val(), id: snapshot.key } };
			this.setState({ receipts: [receipt].concat(this.state.receipts) })
		})

	}
	AddReceipt(e) {
		e.preventDefault();
		const newObject = {
			title: this.inputTitle.value,
			date: this.inputDate.value
		}
		fire.database().ref('receipts').push(newObject);
		this.inputTitle.value = '';
		this.inputDate.value = '';
	}
	todaysDate() {
		var currentDate = new Date();
		var date = currentDate.getDate();
		var month = currentDate.getMonth();
		var year = currentDate.getFullYear();
		var dateString = date + '-' + (month + 1) + '-' + year;
		return dateString
	}
	render() {

		return (
			<form onSubmit={this.AddReceipt.bind(this)}>
				<ul>
					{ /* Render the list of messages */
						this.state.receipts.map(item =>
							<li key={item.receipt.id}>
								{item.receipt.meta.title}
								({item.receipt.meta.date})
						</li>)
					}
				</ul>
				<input type="text" placeholder="Title" ref={el => this.inputTitle = el} />
				<input type="text" placeholder="Date" defaultValue={this.todaysDate()}
					hidden ref={el => this.inputDate = el} />
				{this.state.isUploading &&
					<p>Progress: {this.state.progress}</p>
				}
				<FileUploader
					accept="image/*"
					capture="camera"
					name="qrcode"
					randomizeFilename
					storageRef={fire.storage().ref('qrcodes')}
					onUploadStart={this.handleUploadStart}
					onUploadError={this.handleUploadError}
					onUploadSuccess={this.handleUploadSuccess}
					onProgress={this.handleProgress}
				/>
				{console.log(this.state.qrcodeURL)}
				{this.state.qrcodeURL &&
					<img alt="receipt" src={this.state.qrcodeURL} />
				}

				<input type="submit" />
			</form>
		);
	}
}
import { Component } from 'react'


export class TodoList extends Component {
	state = {
		input: "",
		todoList: []
	}
onChangeEvent(e) {
	this.setState({input: e})
}
addTask(inputTask) {
	if (inputTask==='') {
		alert ("Please add a task")
	}
	else {
		let listArray = this.state.todoList
		listArray.push(inputTask)
		this.setState({todoList: listArray, input: ''})
	}
}
deleteTask () {
	let listArray = this.state.todoList;
	listArray = [];
	this.setState({todoList: listArray})
}
crossedTask (event) {
	const li = event.target;
	li.classList.toggle('crossed');
}
onFormSubmit(e) {
e.preventDefault();
}
	render() {
		return(
		<div> 
		<form onSubmit={this.onFormSubmit}>
			<div className='container'>
				<input className="input-task" type="text" 
				placeholder ="Add a task..."
				onChange={(e) =>{this.onChangeEvent(e.target.value)}}
				value ={this.state.input}/>
			</div>

			<div className='container'>
				<button className ="add-btn" onClick={() => this.addTask(this.state.input)}>Add New Task</button>
			</div>

			<ol>
			{this.state.todoList.map((list, index) =>(
				<li onClick={this.crossedTask} key={index}>{list}</li>
			))}
			</ol>
			
			<div className='container'>
				<button className ="delete-btn" onClick={() => this.deleteTask(this.state.input)}>Delete All Tasks</button>
			</div>
			</form>
		</div>
		)
	}
}
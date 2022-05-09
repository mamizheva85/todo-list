import './App.css';
import Datetime from './Datetime';
import { TodoList } from './TodoList';
import image from './Girl.jpg'




function App() {
return (
<div>
	<div className="app">
		<div className="main-container">
			<h1>To do list</h1>
			
		</div>
	<Datetime />
	<TodoList />
	<div className="main-container">
	<img src ={ image } width="265" alt="girl"/>
	</div>
	</div>
</div>
);
}

export default App;

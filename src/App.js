import React, { useState } from "react";
import "./App.css";

function App() {
	const [desc, setDesc] = useState("");
	const [todos, setTodos] = useState([]);

	const inputChanged = event => {
		setDesc(event.target.value);
	};

	const addTodo = event => {
		event.preventDefault();
		setTodos([...todos, desc]);
	};

	return (
		<div className="App">
			<h1 className="App-header">To Do List</h1>
			<input type="text" onChange={inputChanged} value={desc} />
			<button onClick={addTodo}>Add</button>
			<table>
				<tbody>
					{todos.map((todo, index) => (
						<tr key={index}>
							<td>{todo}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;

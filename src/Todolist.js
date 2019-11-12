import React, { useState } from "react";

const Todolist = () => {
	const [todo, setTodo] = useState({ desc: "", date: "" });
	const [todos, setTodos] = useState([]);

	const addTodo = event => {
		event.preventDefault();
		setTodos([...todos, todo]);
	};

	const inputChanged = event => {
		setTodo({ ...todo, [event.target.name]: event.target.value });
	};

	return (
		<div>
			<input
				type="date"
				name="date"
				onChange={inputChanged}
				value={todo.date}
			/>
			<input
				type="text"
				name="desc"
				onChange={inputChanged}
				value={todo.desc}
			/>
			<button onClick={addTodo}>Add</button>
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo, index) => (
						<tr key={index}>
							<td>{todo.date}</td>
							<td>{todo.desc}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Todolist;

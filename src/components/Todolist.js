import React, { useState } from "react";
import TodoTable from "./TodoTable";

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

	const delItem = event => {
		event.preventDefault();
		setTodos(
			todos.filter((todo, index) => index !== parseInt(event.target.id))
		);
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
			<TodoTable todos={todos} delItem={delItem} />
		</div>
	);
};

export default Todolist;

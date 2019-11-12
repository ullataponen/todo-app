import React, { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";

function App() {
	return (
		<div className="App">
			<h1 className="App-header">To Do List</h1>
			<Todolist />
		</div>
	);
}

export default App;

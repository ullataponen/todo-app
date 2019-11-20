import React from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

function TodoTable(props) {
	const columns = [
		{
			Header: "Date",
			accessor: "date"
		},
		{
			Header: "Description",
			accessor: "desc"
		},
		{
			Cell: ({ index }) => (
				<button className="del" id={index} onClick={props.delItem}>
					Delete
				</button>
			),
			filterable: false,
			sortable: false
		}
	];

	return (
		<div>
			<ReactTable filterable={true} data={props.todos} columns={columns} />
		</div>
	);
}

export default TodoTable;

import React from "react";
import Todo from "./Todo/Todo";

const Todos = ({ todos, onDelete }) => {
	return (
		<>
			{todos.map((todo) => (
				<Todo
					onDelete={onDelete}
					key={todo.id}
					id={todo.id}
					title={todo.title}
					completed={todo.completed}
				/>
			))}
		</>
	);
};

export default Todos;

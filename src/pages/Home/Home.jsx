import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import CreateTodo from "../../components/CreateTodo/CreateTodo";
import Todos from "../../components/Todos/Todos";
import { getTodos, deleteTodo, createTodo } from "../../api";
const Home = () => {
	const [todos, setTodos] = useState([]);
	const [isAddTodo, setIsAddTodo] = useState(false);

	useEffect(() => {
		const getData = async () => {
			const data = await getTodos();
			setTodos(data);
		};
		getData();
	}, []);

	const onClick = () => {
		setIsAddTodo(() => !isAddTodo);
	};

	const handleCreate = async (todo) => {
		await createTodo(todo);
		setTodos((prevState) => [todo, ...prevState]);
	};

	const handleDelete = async (id) => {
		await deleteTodo(id);
		setTodos(todos.filter((e) => e.id !== id));
	};

	return (
		<>
			{!isAddTodo && (
				<Button onClick={onClick} title="Create Todo" type="button"></Button>
			)}
			<CreateTodo show={isAddTodo} addTodo={handleCreate}></CreateTodo>
			<Todos todos={todos} onDelete={handleDelete} />
		</>
	);
};

export default Home;

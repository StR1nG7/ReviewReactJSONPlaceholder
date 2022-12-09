import React, { useState } from "react";
import style from "./CreateTodo.module.css";
import Button from "../Button/Button";

const CreateTodo = ({ show, addTodo }) => {
	const [todo, setTodo] = useState({
		userID: 10,
		title: "",
		completed: false,
	});

	const handleChange = (e) => {
		const title = e.target.value;
		setTodo({ ...todo, title: title });
	};

	const createTodo = (e) => {
		e.preventDefault();
		const newTodo = {
			...todo,
			id: Date.now(),
		};
		setTodo({ ...todo, id: "", title: "" });
		addTodo(newTodo);
	};

	return (
		<>
			<form>
				<div className={show ? style.modal : style.hide}>
					<input
						type="text"
						className={style.todo}
						placeholder="note"
						onChange={(e) => handleChange(e)}
						value={todo.title}
					/>
					<Button type="submit" title="Add Todo" onClick={createTodo}></Button>
				</div>
			</form>
		</>
	);
};

export default CreateTodo;

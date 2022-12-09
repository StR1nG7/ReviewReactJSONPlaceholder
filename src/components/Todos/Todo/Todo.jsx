import React, { useState } from "react";
import style from "./Todo.module.css";

const Todo = ({ id, title, completed, onDelete }) => {
	const [check, setCheck] = useState(completed);

	const onCheck = () => {
		setCheck(() => !check);
	};

	const onClick = () => {
		onDelete(id);
	};
	return (
		<>
			<ul>
				<div
					className={
						check ? `${style.completedText} ${style.todo}` : style.todo
					}
				>
					<li>{id}</li>
					<li className={style.check}>
						<span>{title}</span>
						{check && <hr className={style.completed} />}
					</li>
					<label className={style.formControl}>
						<input type="checkbox" checked={check} onChange={onCheck} />
					</label>
					<button onClick={onClick}>X</button>
				</div>
			</ul>
		</>
	);
};

export default Todo;

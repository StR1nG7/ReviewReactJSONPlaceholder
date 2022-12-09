import React from "react";
import style from "./Button.module.css";
const Button = ({ type, title, onClick }) => {
	return (
		<>
			<button className={style.button} type={type} onClick={onClick}>
				{title}
			</button>
		</>
	);
};

export default Button;

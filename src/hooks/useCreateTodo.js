import { database } from "../firebase";
import { ref, push } from "firebase/database";

export const useCreateTodo = () => {
	const createTodo = (event, value) => {
		event.preventDefault();
		const todosRef = ref(database, "Todos");
		push(todosRef, {
			title: value,
			completed: false,
		}).then(() => {
			value = "";
		});
	};
	return {
		createTodo,
	};
};

import { ref, update } from "firebase/database";
import { database } from "../firebase";

export const useEditTodo = () => {
	const editTodo = (value, id) => {
		const todosRef = ref(database, `Todos/${id}`);
		update(todosRef, {
			title: value,
		});
	};
	return {
		editTodo,
	};
};

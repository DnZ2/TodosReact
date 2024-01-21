import { database } from "../firebase";
import { ref, remove } from "firebase/database";

export const useDeleteTodo = () => {
	const deleteTodo = (id) => {
		const todosRef = ref(database, `Todos/${id}`);
		remove(todosRef);
	};
	return {
		deleteTodo,
	};
};

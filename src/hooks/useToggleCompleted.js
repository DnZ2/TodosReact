import { ref, update } from "firebase/database";
import { database } from "../firebase";

export const useToggleCompleted = () => {
	const toggleCompleted = (completed, id) => {
		const todosRef = ref(database, `Todos/${id}`);
		update(todosRef, {
			completed: !completed,
		});
	};
	return {
		toggleCompleted,
	};
};

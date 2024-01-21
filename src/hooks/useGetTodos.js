import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase";

export const useGetTodos = (refresh, sortFlag) => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		if (sortFlag) {
			const todosRef = ref(database, "Todos");
			onValue(todosRef, (snapshot) => {
				const data = snapshot.val() || [];
				const array = Object.entries(data).sort((a, b) => {
					return a[1].title.localeCompare(b[1].title);
				});
				const object = array.reduce((acc, [key, value]) => {
					acc[key] = value;
					return acc;
				}, {});
				setTodos(object);
			});
		} else {
			const todosRef = ref(database, "Todos");
			onValue(todosRef, (snapshot) => {
				const data = snapshot.val() || [];
				setTodos(data);
			});
		}
	}, [refresh, sortFlag]);

	return {
		todos,
	};
};

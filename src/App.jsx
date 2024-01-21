import { useState, useRef } from 'react'
import './App.css'
import sort from './assets/sort-by-alphabet_icon-icons.com_73407.svg'
import { Todo } from './components/todo'
import { useGetTodos } from './hooks/useGetTodos'
import { useToggleCompleted } from './hooks/useToggleCompleted'
import { useDeleteTodo } from './hooks/useDeleteTodo'
import { useEditTodo } from './hooks/useEditTodo'
import { useCreateTodo } from './hooks/useCreateTodo'
import debounce from 'lodash/debounce';


function App() {
	const [isSorted, setIsSorted] = useState(false)
	const [refresh, setRefresh] = useState(false)
	const [isValidValue, setIsValidValue] = useState(false)

	const createTodoRef = useRef(null)
	const searchTodoRef = useRef(null)

	const {todos} = useGetTodos(refresh,isSorted)
	const {toggleCompleted} = useToggleCompleted()
	const {deleteTodo} = useDeleteTodo()
	const {editTodo} = useEditTodo()
	const {createTodo} = useCreateTodo()

	const validation = ({target}) =>{
		if(target.value.length>=5){
			setIsValidValue(true)
		}
		else{
			setIsValidValue(false)
		}
	}

	const debounceSearch = debounce(()=>{setRefresh(!refresh)}, 700)

	const search = () =>{
		debounceSearch()
	}

  return (
	<main>
		<div className='formContainer'>
			<form className='inputContainer' onSubmit={()=>{createTodo(event, createTodoRef.current.value);createTodoRef.current.value='';setIsValidValue(false)}}>
				<input onChange={validation} ref={createTodoRef} type="text" placeholder='Создать новую задачу (не менее 5 символов)'/>
				<button disabled={!isValidValue} className='createTodo'>+</button>
			</form>
			<div className='inputContainer'>
				<input ref={searchTodoRef} onChange={search} type="text" placeholder='Поиск'/>
				<button onClick={()=>setIsSorted(!isSorted)} style={isSorted?{backgroundColor: 'rgba(0, 0, 0, 0.4)'}: null} className='searchTodo'><img className='sortImg' src={sort} alt="sort"/></button>
			</div>
		</div>

		<ul className='TodosList'>
		{Object.entries(todos).map(([id, {title, completed}])=>{
			if(title.toLowerCase().includes(searchTodoRef.current.value.toLowerCase().trim())){
				return <Todo key={id}
				id={id}
				title={title}
				completed={completed}
				updateStatus={toggleCompleted}
				deleteTodo={deleteTodo}
				editTodo={editTodo}
				/>
			}
		}
		)}
		</ul>
	</main>


  )
}

export default App

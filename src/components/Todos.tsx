"use client"
import { useState } from "react"
import { todoType } from "@/types/todoType"
import Todo from "./Todo"
import AddTodo from "./AddTodo"
import { addTodo, deleteTodo, editTodo, toggleTodo } from "@/actions/todoActions"

interface Props {
  todos: todoType[]
}

const Todos = ({ todos }: Props) => {
  const [todoItems, setTodoItems] = useState<todoType[]>(todos)
  const createTodo = (text: string) => {
    const id = (todoItems.at(-1)?.id || 0) + 1
    addTodo(id, text)
    setTodoItems((prev) => [...prev, { id, text, done: false }])
  }
  const changeTodoText = (id: number, text: string) => {
    setTodoItems((prev) =>
      prev.map(todo =>
        (todo.id === id ? { ...todo, text } : todo)
      )
    )
    editTodo(id, text)
  }

  const toggleIsDone = (id: number) => {
    setTodoItems(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    )
    toggleTodo(id)
  }
  const deleteTodoItem = (id: number) => {
    setTodoItems(prev => prev.filter(todo => todo.id !== id))
    deleteTodo(id)
  }


  return (
    <main>
      <div>To-do app</div>
      <div>
        {todoItems.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            changeTodoText={changeTodoText}
            toggleIsTodoDone={toggleIsDone}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </div>
      <AddTodo />
    </main>
  )
}

export default Todos


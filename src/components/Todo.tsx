'use client'
import { ChangeEvent, useState } from 'react'
import { todoType } from '@/types/todoType'

interface Props {
  todo: todoType
  changeTodoText: (id: number, text: string) => void
  toggleIsTodoDone: (id: number, done: boolean) => void
  deleteTodoItem: (id: number) => void
}

const Todo = ({
  todo,
  changeTodoText,
  toggleIsTodoDone,
  deleteTodoItem,
}: Props) => {
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(todo.text)
  const [isDone, setIsDone] = useState(todo.done)

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleIsDone = async () => {
    toggleIsTodoDone(todo.id, !isDone)
    setIsDone((prev) => !prev)
  }

  const handleEdit = () => {
    setEditing(true)
  }

  const handleSave = () => {
    changeTodoText(todo.id, text)
    setText(todo.text)
  }

  const handleCancel = () => {
    setEditing(false)
    setText(todo.text)
  }

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this todo?')) {
      deleteTodoItem(todo.id)
    }
  }

  return (
    <div className="flex item-center text-black gap-2 p-4 border-gray-200 border rounded-lg">
      <input
        type="checkbox"
        className="text-blue-200 rounded-sm h-4 w-4"
        checked={isDone}
        onChange={handleIsDone}
      />
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        readOnly={!editing}
        className={`${
          todo.done ? 'line-through' : ''
        } outline-none read-only:border-transparent text-black focus:border border-gray-200 rounded px-2 py-1 w-full`}
      />
      <div className="flex gap-1 ml-auto">
        {editing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-gray-50 rounded px-2 w-14 py-1"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-400 text-blue-50 rounded w-14 px-2 py-1"
          >
            Edit
          </button>
        )}

        {editing ? (
          <button
            onClick={handleCancel}
            className="bg-green-600 text-gray-50 rounded px-2 w-14 py-1"
          >
            Close
          </button>
        ) : (
          <button
            onClick={handleDelete}
            className="bg-blue-400 text-blue-50 rounded w-14 px-2 py-1"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default Todo

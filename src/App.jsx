import { useEffect, useState } from 'react'

const STORAGE_KEY = 'todos'
const FILTERS = { all: 'すべて', active: '未完了', done: '完了' }

function loadTodos() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

export default function App() {
  const [todos, setTodos] = useState(loadTodos)
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = (e) => {
    e.preventDefault()
    const title = text.trim()
    if (!title) return
    setTodos([...todos, { id: crypto.randomUUID(), title, done: false }])
    setText('')
  }

  const toggleTodo = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id))

  const clearDone = () => setTodos(todos.filter((t) => !t.done))

  const visible = todos.filter((t) =>
    filter === 'all' ? true : filter === 'done' ? t.done : !t.done,
  )
  const remaining = todos.filter((t) => !t.done).length

  return (
    <main className="app">
      <h1>ToDoリスト</h1>

      <form className="add" onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="やることを入力"
          aria-label="新しいタスク"
        />
        <button type="submit">追加</button>
      </form>

      <div className="filters">
        {Object.entries(FILTERS).map(([key, label]) => (
          <button
            key={key}
            className={filter === key ? 'active' : ''}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <ul className="list">
        {visible.map((t) => (
          <li key={t.id} className={t.done ? 'done' : ''}>
            <label>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleTodo(t.id)}
              />
              <span>{t.title}</span>
            </label>
            <button
              className="delete"
              onClick={() => deleteTodo(t.id)}
              aria-label={`${t.title}を削除`}
            >
              ×
            </button>
          </li>
        ))}
        {visible.length === 0 && <li className="empty">タスクはありません</li>}
      </ul>

      <footer>
        <span>残り {remaining} 件</span>
        <button onClick={clearDone} disabled={todos.every((t) => !t.done)}>
          完了を削除
        </button>
      </footer>
    </main>
  )
}

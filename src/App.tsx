import { useState } from 'react'
import { Todos } from './Components/Todos'

const mockTodos = [
  {
    id: '2',
    title: 'todo 2',
    completed: true
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  },
  {
    id: '4',
    title: 'todo 4',
    completed: false
  }
]
const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)
  return (
    <div className='todoapp'>
      <Todos todos={todos} />
    </div>
  )
}

export default App

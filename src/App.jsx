// RFCE para creacion rapida de componente
// imp para importar y con TAB te mueves en los nombres
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {


  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App

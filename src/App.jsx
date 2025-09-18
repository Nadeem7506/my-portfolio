import './App.css'
import { Aboutme } from './components/Aboutme'
import { Listcomponents } from './components/Listcomponents'
import { Techicons } from './components/Techicons'


function App() {

  return (
    <div className=' bg-indigo-950 w-full h-screen'>
      <Listcomponents />    
      <div className=' w-3/4 flex flex-col justify-self-center'>
      <Aboutme />
      <Techicons />
        </div>
      </div>
  )
}

export default App

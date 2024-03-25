import './App.css'
import Info from './components/Info'
import NavBar from './components/NavBar'
import Links from './components/Links'

function App() 
{
  return (
    <div>
      <nav>
        <NavBar/>
      </nav>
      <main>
        <Info/>
      </main>
      <footer>
        <Links/>
      </footer>
    </div>
  )
}

export default App

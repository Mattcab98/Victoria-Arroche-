import './App.css'
import About from './assets/components/About/About';
import Header from './assets/components/Header/Header'
import TypePhoto from './assets/components/TypePhoto/TypePhoto'

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <>
      <Header/>
      <About/>
      <TypePhoto/>
    </>
  )
}

export default App

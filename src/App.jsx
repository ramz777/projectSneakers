import './App.css'
import Banner from './components/banner/Banner'
import Categoryes from './components/categories/Categoryes'
import Content from './components/content/Content'
import Header from './components/header/Header'
import Sorted from './components/sorted/Sorted'

function App() {

  return (
    <div className='app'>
      <Header /> <hr />
      <Banner/>
      <div className="nav">
        <Categoryes />
        <Sorted />
      </div>
      <Content />
    </div>
  )
}

export default App

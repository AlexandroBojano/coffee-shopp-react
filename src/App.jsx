
import '../src/css/Reset.css'
import '../src/css/Fonts.css'
import '../src/css/Variables.css'
import '../src/css/App.css'
import '../src/css/Responsive.css'
import Header from './components/Header'
import Navbar from "../src/components/Navbar"
import Login from "../src/components/Login"
import Footer from "../src/components/Footer"


function App() {

  return (
  
    <>

    <div className="container">
      
      <Header />
      <Navbar />
       <Login />
       <Footer />
      
     

    </div>
      
    </>
  )
}

export default App

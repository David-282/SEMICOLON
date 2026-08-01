import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import './App.css'

const App = () => {

  return (
    <>
      <NavBar />
      <main>
        <Outlet/>
      </main>

    </>
  )
}

export default App

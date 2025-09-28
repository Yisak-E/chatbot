
import './App.css'
import Landing from "./components/Landing.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChatPage from "./components/ChatPage.jsx";

function App() {

  return (
    <BrowserRouter>
       <Routes>
            <Route path={'/'} element={<Landing/>}/>
           <Route path={'/chatPage'} element={<ChatPage/>}/>
       </Routes>

    </BrowserRouter>
  )
}

export default App

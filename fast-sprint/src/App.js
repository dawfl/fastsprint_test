import MainDashboardHome from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SprintPage from "./pages/SprintPage/SprintPage";
import NewSprint from "./pages/NewSprint/NewSprint";
import NewTask from "./pages/NewTask/NewTask";




function App() {
  return (
    < BrowserRouter >
       <div className="App">
        <Routes>
            <Route path="/" element={<MainDashboardHome />}></Route>
            <Route path="/backlog" element={<SprintPage/>} ></Route>
            <Route path="/newsprint" element={<NewSprint/>} ></Route>
            <Route path="/newtask" element={<NewTask/>} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

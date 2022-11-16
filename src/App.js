import { BrowserRouter,Routes, Route } from "react-router-dom";
import Car from "./components/Car";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Home from "./components/Home";
function App() {
  const person = {
    name : 'Mukit',
    age : 24,
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="cars" element={<Car person={person} name='Lamborgini' color='Black' />}/>
        <Route path="forms" element={< Form/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

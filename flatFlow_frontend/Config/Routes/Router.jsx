import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../../src/Pages/Home';
import Login from '../../src/Pages/Login';
import Register from '../../src/Pages/Register';
import CreateTask from '../../src/Pages/Tasks/CreateTask';


const RouterItem = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/newtask' element={<CreateTask/>}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;
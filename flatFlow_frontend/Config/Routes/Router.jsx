import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../../src/Pages/Home';
import Login from '../../src/Pages/Login';
import Register from '../../src/Pages/Register';


const RouterItem = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;
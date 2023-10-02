import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../../src/Pages/Home';
import Login from '../../src/Pages/Login';
import Register from '../../src/Pages/Register';
import CreateTask from '../../src/Pages/Tasks/CreateTask';
import RegisterGroup from '../../src/Pages/RegisterGroup';
import ProtectedRoutes from './../../src/Components/ProtectedRoutes';
import Dashboard from './../../src/Pages/Dashboard';
import IndexTask from './../../src/Pages/Tasks/IndexTask'
import IndexForum from './../../src/Pages/Forum/IndexForum'
import IndexBalance from './../../src/Pages/Balance/IndexBalance'
import ShowTask from '../../src/Pages/Tasks/ShowTask';
import ForumTask from '../../src/Pages/Forum/ShowForum';
import AddForum from './../../src/Pages/Forum/AddForum';
import IndexAllTasks from './../../src/Pages/Tasks/IndexAllTasks';
import CreateGroup from './../../src/Pages/Group/CreateGroup';
import IndexGroup from '../../src/Pages/Group/IndexGroup';
import ShowGroup from '../../src/Pages/Group/ShowGroup';
import EditTask from '../../src/Pages/Tasks/EditTask';



const RouterItem = () => {
    return(
        <BrowserRouter>

            <Routes>
            <Route element={<ProtectedRoutes/>}>
            <Route path='/newtask' element={<CreateTask/>}></Route>
                <Route path='/newthread' element={<AddForum/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/tasks' element={<IndexTask />}></Route>
                <Route path='/alltasks' element={<IndexAllTasks />}></Route>
                <Route path='/forum' element={<IndexForum />}></Route>
                <Route path='/balance' element={<IndexBalance />}></Route>
                <Route path='/taskdetail/:id' element={<ShowTask />}></Route>
                <Route path='/forumdetail/:id' element={<ForumTask />}></Route>
                <Route path='/groupdetail/:id' element={<ShowGroup />}></Route>
                <Route path='/registergroup' element={<RegisterGroup />}></Route>
                <Route path='/newgroup' element={<CreateGroup />}></Route>
                <Route path='/yourgroups' element={<IndexGroup />}></Route>
                <Route path='/edit-task/:id' element={<EditTask />}></Route>

            </Route>
                
                    
                
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                

              

                
                

                
                
            </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;
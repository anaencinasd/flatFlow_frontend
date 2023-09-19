import {Link, userNavigate} from 'react-router-dom';
import storage from '../Storage/storage';

export default function NavBar() {
const go=useNavigate();
const logout = async()=>{
    storage.remove('authToken');
    storage.remove('authUser');
    await axios.get('/api/auth/logout', storage.get('authToken'));
}

  return (
    <div>NavBar</div>
  )
}

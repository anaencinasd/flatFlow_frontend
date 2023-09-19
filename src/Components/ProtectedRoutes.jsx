import { Navigate, Outlet } from 'react-router-dom';
import AuthService from './../../Config/Service/auth.service'; 

export default function ProtectedRoutes({ children }) {
  const isAuthenticated = AuthService.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to='/login/' />;
  }

  return <Outlet />;
}

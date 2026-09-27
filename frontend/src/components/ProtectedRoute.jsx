import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
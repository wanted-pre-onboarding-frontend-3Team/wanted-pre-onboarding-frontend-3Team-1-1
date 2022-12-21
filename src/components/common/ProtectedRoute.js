import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, path, children }) => {
  if (user) {
    return <Navigate to={path} replace />;
  }

  return children;
};

export default ProtectedRoute;

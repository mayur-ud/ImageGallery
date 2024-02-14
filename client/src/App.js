import {Routes,Route,Navigate} from 'react-router-dom'
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './Dashboard';

function App() {
    return (
      <>
        <Routes>
          
          <Route path='/' element={
            <ProtectedRoutes>
              <Dashboard/>
            </ProtectedRoutes>
            }
          />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          
        </Routes>
      </>
    );
  }
  
  export function ProtectedRoutes(props) {
    console.log(localStorage.getItem("user"))
    if (localStorage.getItem("user")) {
      return props.children;
    } else {
      return <Navigate to="/login" />;
    }
  }

export default App;
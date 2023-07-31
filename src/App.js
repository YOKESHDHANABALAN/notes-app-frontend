import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/dashboard" element={<DashboardPage/>} />
                <Route path="/" element={<h1>Welcome home😍😍!! Are u ready for the fun🥳🥳 click login or register
                  <button><a href="http://localhost:3000/login">login</a></button>
                  <button><a href="http://localhost:3000/register">register</a></button>
                </h1>} />
            </Routes>
        
        
        </BrowserRouter>

        
    </div>
  );
}

export default App;

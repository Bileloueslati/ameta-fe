import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/scss/app.scss';
import PrivateRoute from './components/common/privateRoute';
import Accounts from './pages/accounts';
import SignIn from './pages/auth/signIn';
import Dashboard from './pages/dashboard';
import Sheets from './pages/sheets';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/sheets" element={<Sheets />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

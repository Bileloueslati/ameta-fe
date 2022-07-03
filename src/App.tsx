import "./assets/scss/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/signIn";
import Dashboard from "./pages/dashboard";
import Accounts from "./pages/accounts";
import Sheets from "./pages/sheets";

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full">
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/sheets" element={<Sheets />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;

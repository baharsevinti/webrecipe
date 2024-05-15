import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Recipes from "./pages/Recipes";
import AIRecipe from "./pages/AIRecipe";
import AdminPanel from "./pages/Panel/AdminPanel";
import Abone from "./components/Abone";

import DarkModeToggle from "./DarkModeToggle"; // Dark Mode butonu

function App() {
  return (
    <Router>
      <DarkModeToggle /> {/* Dark Mode butonunu ekleyin */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<AdminPanel />} /> */}
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/makeRecipe" element={<AIRecipe />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/abone" element={<Abone />} />
      </Routes>
    </Router>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Abone from "./components/Abone";
import AIRecipe from "./pages/AIRecipe";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import AdminPanel from "./pages/Panel/AdminPanel";
import Recipes from "./pages/Recipes";
import SignUp from "./pages/SignUp";

import DarkModeToggle from "./DarkModeToggle"; // Dark Mode butonu
import Favori from "./components/Favori";
import GetPayment from "./pages/GetPayment";
import PaymentHistory from "./pages/PaymentHistory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<AdminPanel />} /> */}
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/makeRecipe" element={<AIRecipe />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/abone" element={<Abone />} />
        <Route path="/getPayment" element={<GetPayment />} />
        <Route path="/favori" element={<Favori />} />
        <Route path="/paymentHistory" element={<PaymentHistory />} />
      </Routes>
      <DarkModeToggle /> {/* Dark Mode butonunu ekleyin */}
    </Router>
  );
}

export default App;

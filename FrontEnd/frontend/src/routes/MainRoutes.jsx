import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Signup from "../pages/Signup/Signup";
import Settings from "../pages/Settings/Settings";
import BankAccounts from "../pages/BankAccounts/BankAccounts";
import History from "../pages/History/History";
import TransactionDetail from "../pages/TransactionDetail/TransactionDetail";
import Logout from "../pages/Logout/Logout";
const MainRoutes = () => {
  
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="logout" element={<Logout/>} />
        <Route path="/" element={<Navigate to="/user/settings" replace />} />
        <Route path="/" element={<Layout />}>
          <Route path="user/settings" element={<Settings />} />
          <Route path="bankaccounts" element={<BankAccounts />} />
          <Route path="personal" element={<History />} />
          <Route path="transaction/:id" element={<TransactionDetail />} />
          <Route path="*" element={<Navigate to="/user/settings" replace />} />
        </Route>
        
      </Routes>
    </>
  );
};

export default MainRoutes;

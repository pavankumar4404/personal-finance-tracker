import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, SignedOut, useUser, UserButton } from "@clerk/clerk-react";
// import { dark } from "@clerk/themes";

function App() {
  const { isSignedIn } = useUser();

  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          {isSignedIn && <UserButton />}
        </div>
        <Routes>
          <Route
            path="/"
            element={
              isSignedIn ? (
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

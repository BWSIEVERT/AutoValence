import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Dashboard from "./Components/Dashboard";

function App() {
  const FallbackRoute = () => {
    const location = useLocation();

    // Redirect if user is not on the sign-in page.
    if (location.pathname !== "/sign-in") {
      return <RedirectToSignIn />;
    }

    return null;
  };

  return (
    <Routes>
      {/* Public routes for authentication */}
      <Route
        path="/sign-in"
        element={<SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />}
      />
      <Route
        path="/sign-up"
        element={<SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />}
      />

      {/* Protected route: only visible when signed in */}
      <Route
        path="/"
        element={
          <>
            <SignedIn>
              <Dashboard />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />

      {/* Fallback route: redirect any unknown routes to sign in */}
      <Route path="*" element={<FallbackRoute />} />
    </Routes>
  );
}

export default App;

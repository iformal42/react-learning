import React, { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedPage({ children }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) navigate("/");
    return () => {
      // Cleanup logic here
    };
  }, [isAuth, navigate]);
  if(!isAuth) return null;
  return <>{children}</>;
}

export default ProtectedPage;

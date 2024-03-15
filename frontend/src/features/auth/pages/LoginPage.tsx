import { AuthWrapper } from "@/features/home/components/AuthWrapper";
import { LoginForm } from "../components/LoginForm";
import { useUserStore } from "../hooks/useUserStore";
import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

  React.useEffect(() => {
    if (user) {
      navigate("/app");
    }
  }, [user]);

  return (
    <AuthWrapper>
      <AuthWrapper.FormElement>
        <LoginForm />
      </AuthWrapper.FormElement>
      <AuthWrapper.ImageElement></AuthWrapper.ImageElement>
    </AuthWrapper>
  );
};

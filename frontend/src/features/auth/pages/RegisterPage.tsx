import { AuthWrapper } from "@/features/home/components/AuthWrapper";
import React from "react";
import { RegisterForm } from "../components/RegisterForm";

export const RegisterPage = () => {
  return (
    <AuthWrapper>
      <AuthWrapper.FormElement>
        <RegisterForm />
      </AuthWrapper.FormElement>
      <AuthWrapper.ImageElement></AuthWrapper.ImageElement>
    </AuthWrapper>
  );
};

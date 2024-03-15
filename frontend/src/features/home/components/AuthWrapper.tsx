import { AppLogo } from "@/components/shared/AppLogo";
import { Button } from "@/components/ui/button";
import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

interface IFormElement {
  className?: string;
  children: React.ReactNode;
}

const FormElementWrapper = ({ className, children }: IFormElement) => {
  return (
    <div
      className={classNames(
        "w-full col-span-5 flex flex-col items-start justify-center",
        className
      )}
    >
      <div className="md:px-16 px-8 py-8 w-full">
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
};

interface IImageElement {
  className?: string;
}
const FormImageWrapper = ({ className }: IImageElement) => {
  return (
    <div
      className={classNames(
        "w-full col-span-7 bg-gray-50 px-8 py-8",
        className
      )}
    >
      <img
        className="h-full w-full object-cover rounded-lg"
        src="https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Auth Image"
      />
    </div>
  );
};

interface IAuthWrapper {
  children: React.ReactNode;
}

export const AuthWrapper = ({ children }: IAuthWrapper) => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-12">{children}</div>
  );
};

AuthWrapper.FormElement = FormElementWrapper;
AuthWrapper.ImageElement = FormImageWrapper;

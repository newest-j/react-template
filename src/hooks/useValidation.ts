import { useState } from "react";
import type ValidationErrors from "../Typescript/ValidationErrors";

export default function useValidation() {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateName = (name: string) => {
    const fullNameRegex = /^[A-Za-z]{2,}(?: [A-Za-z]{2,})+$/;
    if (!name.trim()) {
      return "Name is required";
    }

    if (!fullNameRegex.test(name.trim())) {
      return "Please enter your full name (first and last name, letters only)";
    }
    return "";
  };

  const validateEmail = (email: string) => {
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.trim()) {
      return "Email is required";
    }

    if (!emailReg.test(email.trim())) {
      return "Please enter a valid email address";
    }

    return "";
  };

  const validatePassword = (password: string) => {
    const passwordReg =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,20}$/;

    if (!password.trim()) {
      return "Password is required";
    }

    if (!passwordReg.test(password.trim())) {
      return "Password must be 8–20 characters and contain at least one uppercase letter, lowercase letter, digit, and special character";
    }

    return "";
  };

  const setValidationErrors = (newErrors: ValidationErrors) => {
    setErrors(newErrors);
  };

  const clearErrors = () => {
    setErrors({});
  };

  return {
    errors,
    validateName,
    validateEmail,
    validatePassword,
    setValidationErrors,
    clearErrors,
  };
}

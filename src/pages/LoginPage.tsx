import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/Authslice";
import useValidation from "../hooks/useValidation";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { errors, validateEmail, validatePassword, setValidationErrors } =
    useValidation();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // This demo accepts any non-empty values instead of calling a real backend.
    const newErrors = {
      email: validateEmail(form.email),
      password: validatePassword(form.password),
    };

    setValidationErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === "");

    if (!isValid) {
      return;
    }

    dispatch(
      login({
        email: form.email,
        password: form.password,
      }),
    );

    navigate(location.state?.from?.pathname || "/dashboard", { replace: true });
  };

  return (
    <div className="mx-auto w-full max-w-md px-6 py-16 sm:px-8">
      <div className="mb-10 flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 lg:hidden">
        <span className="grid size-8 place-items-center rounded-lg bg-emerald-500 text-sm font-bold text-white">
          N
        </span>
        northstar
      </div>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
        Welcome back
      </p>
      <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
        Log in to your space
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-500">
        Pick up right where you left off.
      </p>
      <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
        <label
          className="block text-sm font-semibold text-slate-700"
          htmlFor="login-email"
        >
          Email address
        </label>
        <input
          id="login-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
          required
        />
        {errors.email && (
          <p className="text-sm text-rose-600">{errors.email}</p>
        )}
        <label
          className="block text-sm font-semibold text-slate-700"
          htmlFor="login-password"
        >
          Password
        </label>
        <input
          id="login-password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
          required
        />
        {errors.password && (
          <p className="text-sm text-rose-600">{errors.password}</p>
        )}
        <button
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-5 py-3.5 font-semibold text-white transition hover:bg-emerald-600"
          type="submit"
        >
          Continue <span aria-hidden="true">→</span>
        </button>
      </form>
      <p className="mt-8 text-center text-sm text-slate-500">
        New to northstar? <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
}

export default LoginPage;

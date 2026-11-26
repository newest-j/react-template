import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function AuthLayout() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
      </section>

      <section>
        <Outlet />
      </section>
    </>
  );
}
export default AuthLayout;

import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/Authslice";
import type { RootState } from "../store/Store";
function DashboardLayout() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <section>
        <div className="avatar">{user?.name?.charAt(0).toUpperCase()}</div>
        <div className="user-details">
          <strong>{user?.name}</strong>
          <span>{user?.email}</span>
        </div>
        <button className="text-button" onClick={handleLogout}>
          Log out
        </button>
      </section>

      <section>
        <Outlet />
      </section>
    </>
  );
}

export default DashboardLayout;

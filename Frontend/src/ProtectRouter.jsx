import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { setLogin } from "./redux/userReducer";
const ProtectRouter = () => {
  const [login, setlogin] = useState(true);
  const { isLogged } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogged) {
      setlogin(true);
      dispatch(setLogin(true));
    }
  });
  return login ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectRouter;

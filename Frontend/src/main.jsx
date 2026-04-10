import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/style.scss";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectRouter from "./ProtectRouter.jsx";
import Login from "./pages/Login.jsx";
import Home from "./components/Home.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import Letures from "./components/Letures.jsx";
import StudentCreate from "./pages/StudentCreate.jsx";
import Student from "./pages/Student.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectRouter />,
        children: [
          {
            element: <DashBoard />,
            children: [
              {
                path: "",
                element: <Home />,
              },
              {
                path: "student-inquiry",
                element: <StudentDashboard />,
              },
              {
                path: "lectures",
                element: <Letures />,
              },
            ],
          },
          {
            path: "create-student",
            element: <StudentCreate />,
          },
          {
            path: "create-student/:id",
            element: <StudentCreate />,
          },
          {
            path: "student/:id",
            element: <Student />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);

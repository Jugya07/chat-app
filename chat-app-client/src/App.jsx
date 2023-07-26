import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import { ChatsPage, chatsLoader } from "./components/ChatsPage";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import { action as loginAction } from "./components/LoginPage/action";
import { action as signupAction } from "./components/SignupPage/action";
import SignupPage from "./components/SignupPage/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "login",
        element: <LoginPage method="POST" />,
        action: loginAction,
      },
      {
        path: "signup",
        element: <SignupPage method="POST" />,
        action: signupAction,
      },
    ],
  },
  {
    path: "/chat",
    element: <ChatsPage />,
    loader: chatsLoader,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

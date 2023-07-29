import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Chats,
  ChatsLoader,
  Main,
  Login,
  LoginAction,
  Signup,
  SignupAction,
} from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/chat",
    element: <Chats />,
    loader: ChatsLoader,
  },
  {
    path: "/login",
    element: <Login method="POST" />,
    action: LoginAction,
  },
  {
    path: "/signup",
    element: <Signup method="POST" />,
    action: SignupAction,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

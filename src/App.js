import "./App.css"           // eslint-disable-next-line       
import Auth from "./pages/Auth/Auth";// eslint-disable-next-line
import Home from "./pages/home/Home";// eslint-disable-next-line
import Profile from "./pages/Profile/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
     
    },
    { path: "/profile", element:<Profile/> },
    { path: "/auth", element: <Auth/>}
  ]);
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
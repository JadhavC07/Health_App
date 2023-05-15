import { HealthDataContextWrapper } from "./context/health-data-context";
import MainComponent from "./component/MainComponent/MainComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import Header from "./Header/Header";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/main",
    element: <MainComponent />,
  },
]);

function App() {
  return (
    <HealthDataContextWrapper>
      <Header />
      <RouterProvider router={router} />
      {/* <MainComponent /> */}
    </HealthDataContextWrapper>
  );
}

export default App;

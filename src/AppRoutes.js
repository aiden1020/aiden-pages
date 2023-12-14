import Home  from "./components/Home";
import AboutMe from "./components/About_me";
const AppRoutes = [
  {
    path: '/',
    element: <Home />,

  },
  {
    path: '/about',
    element: <AboutMe />,

  },
];

export default AppRoutes;

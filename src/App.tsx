
import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";

import { DefaultLayout } from "./layout/default";
import { Home } from "./pages/home/Home";
import { MovieDetails } from "./pages/movie_details/MovieDetails";
import { NotFound } from "./pages/not_found/NotFound";

function App() {
  // handle app routes
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/movies/:movieId", element: <MovieDetails /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ];
  const routerObject = useRoutes(routes);

  return (
    <div>
      {routerObject}
    </div>
  );
}

export default App;

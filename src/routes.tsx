import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import GameDetailsPage from "./Pages/GameDetailsPage";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/LayoutPages";

const router = createBrowserRouter([{
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout/>,
    children: [
        { index: true, element: < HomePage />},
        { path: 'games/:slug', element: <GameDetailsPage />},
    ]
}])

export default router;
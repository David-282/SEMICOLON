

import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Project.jsx";
import Stack from "../pages/Stack.jsx";


const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            children: [
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path: "about",
                    element: <About/>,
                },
                {
                    path: "project",
                    element: <Projects />,
                },
                {
                    path: "stack",
                    element: <Stack/>,
                }
            ]

        },
        ]);

export default router;

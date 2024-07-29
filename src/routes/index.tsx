import {
    createBrowserRouter,
    Link,
} from "react-router-dom";

const redirectIfUser = (): boolean => {
    
}

const logoutUser = () => {
    
}

export const routes = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: 'SignIn',
                element: <SignIn />,
                loader: redirectIfUser,
            },
            {
                path: 'SignUp',
                element: <SignUp />,
                loader: redirectIfUser,
            },
            {
                path: 'logout',
                action: logoutUser,
            },
        ],
    }
]);

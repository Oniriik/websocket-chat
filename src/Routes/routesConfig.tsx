import {
    Home,
    Chat,
} from 'Pages';

export const ROUTES = {
    main: '/',
    chat: '/chat',
};

export const routesConfig = [
    {
        path: ROUTES.main,
        element: <Home />,
    },
    {
        path: ROUTES.chat,
        element: <Chat />,
    },
];

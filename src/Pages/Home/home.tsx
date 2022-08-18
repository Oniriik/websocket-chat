import { NavLink } from 'react-router-dom';
import { ROUTES } from 'Routes';

export const Home: React.FC = () => {

    return (
        <>
            <h1>home</h1>
            <NavLink to={ROUTES.chat}>
                <button>
                Enter chat
                </button>
            </NavLink>
        </>
    );
};

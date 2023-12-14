import { NavLink, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_PROFILE } from '../queries/Queries';
import Error from './Error';

interface AuthorProfileData {
    user: {
        login: string;
        name: string;
        email: string;
    };
}

const AuthorProfilePage: React.FC = () => {
    const { owner } = useParams<{ owner: string }>();
    const { error, data } = useQuery<AuthorProfileData>(GET_AUTHOR_PROFILE, {
        variables: { owner: owner }
    });

    console.log('Data:', data);

    if (error) return <Error errorMessage={error.message} />; //<p>Error: {error.message}</p>;

    const user = data?.user;

    return (
        <div className="user-container">
            {user && (
            <div className="user-info">
                <h2>Author profile: {owner}</h2>
                <p>Login: {user.login}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
            )}
            <NavLink style={({ isActive }) => ({ background: isActive ? "#0366d6" : "#4069da", color: "#fff", margin: "0 0.5rem 0 0", borderRadius:"5px", padding: "0.5rem", textAlign: "center", width: "45%"})} to="/">Back to repos search page</NavLink>
            {/* <NavLink to="/issues/:owner/:repo">Back to issues page</NavLink> */}
        </div>
    )
};

export default AuthorProfilePage;
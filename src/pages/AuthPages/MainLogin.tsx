import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function MainLogin() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {

        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h1 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-white">
                    Welcome to TailAdmin
                </h1>
                {isAuthenticated ? (
                    <button
                        className="w-full px-4 py-2 text-white transition-colors"
                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                    >

                    </button>
                ) : (
                    <button
                        className="w-full px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                        onClick={() => loginWithRedirect()}
                    >
                        Log In
                    </button>
                )}
            </div>
        </div>
    );
}

export default MainLogin;
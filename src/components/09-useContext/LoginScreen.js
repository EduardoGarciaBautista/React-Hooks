import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);
    return (
        <div>
            <h1>Login</h1>
            <hr />
            <button className="btn btn-primary"
            onClick={() => {
                setUser({
                    id: 123,
                    name: 'Eduardo Gb',
                    email: 'ed@gmail.com'
                });
            }}
            >
                Login
            </button>
        </div>
    )
}

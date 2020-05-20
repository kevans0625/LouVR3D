import React from 'react';

const Login = () => {
    return (
        <div>
            <form>
                <input
                    value={name}
                    name="name"
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={email}
                    name="email"
                    type="text"
                    placeholder="Email"
                />
                <input
                    value={password}
                    name="password"
                    type="text"
                    placeholder="Password"
                />
            </form>
        </div>
    )
}

export default Login;
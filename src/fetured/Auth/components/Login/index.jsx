import React from 'react';
import LoginForm from '../LoginForm';

Login.propTypes = {};

function Login(props) {
    const handleSubmit = (values) => {
        console.log(values);
    };
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;

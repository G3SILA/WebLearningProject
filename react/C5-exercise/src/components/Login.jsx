import {useState} from 'react';

export function Login() {
    const [showPassword, setShowPassword] = useState(false); 
    return (
        <>
            <div>
                <input type="text" placeholder="Email" />
            </div>
            <div>
                <input type={showPassword? 'text': 'password'} placeholder="Password" />
                <button onClick={() => {setShowPassword(!showPassword)}}>
                    {showPassword? 'Hide' : 'Show'}
                </button>
            </div>
            <button className="login-button">Login</button>
            <button className="sign-up-button">Sign up</button>
        </>
    );
}

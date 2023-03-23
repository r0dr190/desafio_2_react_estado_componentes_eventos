import React , { useState } from 'react'

const Login = ({ setAlert }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validarLogin = (e) => {

        e.preventDefault();

        if(email.trim() === 'rodrigo@gmail.com' && password.trim() === '1234'){

            setAlert({

                mensaje: 'Sessión Iniciada',
                color: 'primary'
            });
            setEmail('');
            setPassword('');

            return
        }

        setAlert({

            mensaje: 'Error',
            color: 'danger'
        });

    }

    return (

        <div className='container col-6 d-flex justify-content-center align-item-center'>
            
            <form className='' onSubmit={validarLogin}>
            <h1 className='text-center'>Desafío 2 - Estado de los Componentes y Eventos.</h1>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input 
                        type='email' 
                        name='email' 
                        id='email' 
                        className='form-control mb-2'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input 
                        type='password' 
                        name='password' 
                        id='password' 
                        className='form-control mb-2'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Iniciar sesión</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
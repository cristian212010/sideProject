import React, { useState } from "react";
import logo from '../assets/img/campus2.png';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/formLogin.css';

const FormLogin = () =>{
    const history = useHistory();
    const [formData, setFormData] = useState({
      documento: '',
      password: '',
    });

    const [mensajeError, setMensajeError] = useState('');
    const [userData, setUserData] = useState(null);  
    const changeManager = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const redirectLoader = () => {
        history.push({
          pathname: '/candidatos',
          state: { userData: userData },
        });
    };

      const submitLogin = async (event) => {
        event.preventDefault();

        try {
        const response = await axios.post('http://localhost:6996/api/login', formData);
        const token = response.data.token;
        localStorage.setItem('token', token);

        console.log('Inicio de sesión exitoso', response.data);
        const userResponse = await axios.get(`http://localhost:6996/api/usuario/getOne/${formData.documento}`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });

        if (userResponse.status === 200 && userResponse.data.length > 0) {
            const userDataFromServer = userResponse.data[0];

            if (userDataFromServer.id_usuario) {
            localStorage.setItem('id_usuario', userDataFromServer.id_usuario);
            localStorage.setItem('documento', userDataFromServer.documento);

            setTimeout(() => {
                redirectLoader();
            }, 500);
            } else {
            setMensajeError('Datos de usuario incorrectos');
            }
        } else {
            setMensajeError('Datos de usuario incorrectos');
        }
        } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 400) {
            setMensajeError('Usuario o contraseña incorrectos');
        } else {
            setMensajeError('Error en el servidor, por favor, contacte al servicio técnico');
        }
        }
    };


    return(
        <div className='form-login'>
            <img src={logo} alt="KARIO" className='logo-login' />
            <h3 className='h3-login'>Iniciar sesión</h3>
            <p className='p-login'>Por favor ingresa los siguientes datos para ingresar a la plataforma</p>
            {mensajeError && <p>{mensajeError}</p>}
            <form onSubmit={submitLogin}>
                <div className='div-input'>
                    <input
                    type="text"
                    name="documento"
                    value={formData.documento}
                    onChange={changeManager}
                    required
                    className='input-login'
                    placeholder="DOCUMENTO"
                    />
                </div>
                <div className='div-input'>
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={changeManager}
                    required
                    className='input-login'
                    placeholder="PASSWORD"
                    />
                </div>
                <button type="submit" className='btn-login'>Ingresar</button>
            </form>

            <p className='p-problemas'>Tienes problemas para ingresar? Por favor contactarse con asistencia técnica lo más pronto posible</p>
        </div>
    )
}

export default FormLogin;
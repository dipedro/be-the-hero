import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogon(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', {id});

            console.log(response.data.nome);

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.nome);
            history.push('/profile');
        }catch (err) {
            alert('Falha no logon, tente novamente!');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}
                        />
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}
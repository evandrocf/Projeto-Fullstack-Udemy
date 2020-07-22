import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Qr from 'qrcode.react';
import * as S from './style';

//componentes
import Header from '../../components/Header/index.js';
import Footer from '../../components/Footer/index.js';

function QrCode() {
    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    async function SaveMac() {
        if (!mac) {
            alert('Você precisa informar o número que apareceu no smart');
        } else {
            await localStorage.setItem('@todo/macaddress', mac);
            setRedirect(true);
            window.location.reload();
        }
    };

    return (
        <S.Container>
            {
                redirect && <Redirect to="/" />
            }

            <Header />
            <S.Content>
                <h1>Capture o QrCode pelo APP</h1>

                <S.QrCodeArea>
                    <Qr value='getMacaddress' size={350} />
                </S.QrCodeArea>

                <p>suas atividades serão sincronizadas com a do seu celular</p>

                <S.ValidationCode>
                    <span>Digite o número que apareceu no smart</span>
                    <input type="text" autoFocus onChange={e => setMac(e.target.value)} value={mac} />
                    <button type="button" onClick={SaveMac}>Sincronizar</button>
                </S.ValidationCode>
            </S.Content>

            <Footer />
        </S.Container>
    );
};


export default QrCode;

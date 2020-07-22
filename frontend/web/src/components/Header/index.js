import React, {useEffect, useState} from 'react';
import * as S from './style';
import logo from '../../assets/web/logo.png';
import bell from '../../assets/web/bell.png';
import { Link } from 'react-router-dom';
import isConnected from '../../utils/isConnected';

//API
import api from '../../services/api';


function Header({clickNotification }) {
  const [lateCount, setLateCount] = useState();
    //tarefas atrasadas
    async function lateVerify() {
      await api.get(`/task/filter/late/${isConnected}`)
        .then(response => {
          setLateCount(response.data.length);
    });
};

useEffect(() => {
  lateVerify();
}, []);

async function Logout() {
  localStorage.removeItem('@todo/macaddress');
  window.location.reload();
}

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>

      <S.RightSide>
        <Link to="/">Início</Link>
        <span className="dividor"></span>
        <Link to="/task">Nova Tarefa</Link>
        <span className="dividor"></span>
        {!isConnected ? <Link to="/qrcode">Sincronizar Tarefa</Link>: <button type="button" onClick={Logout}>Sair</button>}
        
        {
          lateCount &&
        <>
          <span className="dividor"></span>
          <button onClick={clickNotification} id="notification"><img src={bell} alt="Notificação" /><span>{lateCount}</span></button>
        </>}
      </S.RightSide>
    </S.Container>
  );
}

export default Header;

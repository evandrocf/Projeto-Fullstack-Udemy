import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as S from './style';

//API
import api from '../../services/api';

//componentes
import Header from '../../components/Header/index.js';
import Footer from '../../components/Footer/index.js';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';
import isConnected from '../../utils/isConnected';

function Home() {
  const [filterActived, setFilterActived] = useState('today');
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);

  //dados do bd vindo da api (todas as tarefas)
  async function loadTasks() {
    await api.get(`/task/filter/${filterActived}/${isConnected}`)
      .then(response => {
        setTasks(response.data);
      });
  };

  //mostar tarefas atrasadas
  function Notification() {
    setFilterActived('late');
  };

  useEffect(() => {
    loadTasks();

    if(!isConnected) {
      setRedirect(true);
    }

  }, [filterActived]);

  return (
    <S.Container>
      {
        redirect && <Redirect to="/qrcode" />
      }

      <Header clickNotification={Notification} />

      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")} >
          <FilterCard title="Todos" actived={filterActived === 'all'} />
        </button>

        <button type="button" onClick={() => setFilterActived("today")} >
          <FilterCard title="Hoje" actived={filterActived === 'today'} />
        </button>

        <button type="button" onClick={() => setFilterActived("week")} >
          <FilterCard title="Semana" actived={filterActived === 'week'} />
        </button>

        <button type="button" onClick={() => setFilterActived("month")} >
          <FilterCard title="Mês" actived={filterActived === 'month'} />
        </button>

        <button type="button" onClick={() => setFilterActived("year")} >
          <FilterCard title="Ano" actived={filterActived === 'year'} />
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>{filterActived === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
      </S.Title>

      <S.Content>
        {
          tasks.map(t => (
            <Link to={`/task/${t._id}`}>
              <TaskCard type={t.type} title={t.title} when={t.when} description={t.description} done={t.done} />
            </Link>
          ))
        }
      </S.Content>

      <Footer />
    </S.Container>
  );
}

export default Home;

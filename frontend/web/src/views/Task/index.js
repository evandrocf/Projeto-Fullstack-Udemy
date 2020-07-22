import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './style';
import { format } from 'date-fns';
import isConnected from '../../utils/isConnected';

//API
import api from '../../services/api';

//componentes
import Header from '../../components/Header/index.js';
import Footer from '../../components/Footer/index.js';
import TypeIcons from '../../utils/typeIcons.js';

function Task({ match }) {
    const [redirect, setRedirect] = useState(false);
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setdone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();

    //ao clicar em uma tarefa abre ela e mostra os dados inseridos na mesms
    async function LoadTaskDetails() {
        await api.get(`/task/${match.params.id}`)
            .then(response => {
                setType(response.data.type)
                setdone(response.data.done)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
                setHour(format(new Date(response.data.when), 'HH:MM'))
            });
    };

    //ao clicar no botão salvar enviar dados para a api
    async function save() {
        //validação dados
        if(!title) {
            return alert('é necessáario informar o título da tarefa.');
        }else if(!description) {
            return alert('é necessário informar a descrição da tarefa.')
        }else if(!type) {
            return alert('é necessário informar o tipo da tarefa.')
        }else if(!date) {
            return alert('é necessário informar a data da tarefa.')
        }else if(!hour) {
            return alert('é necessário informar a hora da tarefa.')
        }

        if (match.params.id) {
            await api.put(`/task/${match.params.id}`, {
                macaddress: isConnected,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            })
            .then(() => setRedirect(true));
        } else {

            await api.post('/task', {
                macaddress: isConnected,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            })
            .then(() => setRedirect(true));
        }
    };

    async function Remove() {
        const res = window.confirm('Deseja realmente remover uma tarefa')

        if(res) {
            await api.delete(`/task/${match.params.id}`)
            .then(() => setRedirect(true));
        }
    };

    useEffect(() => {
        if(!isConnected) {
            setRedirect(true);
        }
        
        LoadTaskDetails();

    }, []);

    return (
        <S.Container>
            {redirect && <Redirect to="/" />}

            <Header />

            <S.Form>
                <S.TypeIcons>
                    {
                        TypeIcons.map((icon, i) => (
                            i > 0 &&
                            <button type="button" onClick={() => setType(i)}>
                                <img src={icon} alt="Tipo da Tarefa" className={type && type != i && 'inative'} />
                            </button>
                        ))
                    }
                </S.TypeIcons>

                <S.Input>
                    <span>Título</span>
                    <input type="text" placeholder="Título da tarefa..." onChange={e => setTitle(e.target.value)} value={title} />
                </S.Input>

                <S.TextArea>
                    <span>Descrição</span>
                    <textarea rows={5} placeholder="Detalhes da tarefa..." onChange={e => setDescription(e.target.value)} value={description} />
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input type="date" placeholder="Título da tarefa..." onChange={e => setDate(e.target.value)} value={date} />
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input type="time" placeholder="Título da tarefa..." onChange={e => setHour(e.target.value)} value={hour} />
                </S.Input>

                <S.Options>
                    <div>
                        <input type="checkbox" checked={done} onChange={() => setdone(!done)} />
                        <span>CONCLUÍDO</span>
                    </div>

                    {match.params.id && <button type="button" onClick={Remove}>EXCLUIR</button>}
                </S.Options>

                <S.Save>
                    <button type="button" onClick={save}>Salvar</button>
                </S.Save>

            </S.Form>

            <Footer />
        </S.Container>
    );
}

export default Task;

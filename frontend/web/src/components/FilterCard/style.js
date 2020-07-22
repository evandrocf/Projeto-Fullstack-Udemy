import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 260px;
    height: 60px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${props => props.actived ? '#13E953' : '#123FF5'};
    cursor: pointer;

    img {
        width: 25px;
        height: 25px;
    }

    span {
        align-self: flex-end;
        font-size: 18px;
        font-weight: bold;
        color: #ffffff;
    }

    &:hover {
        background-color: #13E953;
    }
`;

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;

    button {
        background: none;
        border: none;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 70px;

    a {
        text-decoration: none;
        color: #000000;
    }
`;

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #123FF5;
    display: flex;
    justify-content: center;

    h3 {
        position: relative;
        top: 30px;
        color: #123FF5;
        background-color: #ffffff;
        padding: 0 20px;
    }
`;

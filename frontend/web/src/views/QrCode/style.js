import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #13E953;
        text-transform: uppercase;
    }

    p {
        color: #123FF5;
    }
`;

export const QrCodeArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ValidationCode = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    span {
        color: #123FF5;
        text-transform: uppercase;
        font-weight: bold;
    }

    input {
        margin-top: 10px;
        font-size: 18px;
        padding: 10px;
        border: 1px solid #707070;
        border-radius: 15px;
        box-shadow: 0 0 0 0;
        outline: 0;
        text-align: center;
        color: #35839;
    }

    button {
        text-transform: uppercase;
        font-weight: bold;
        background-color: #13E953;
        color: #ffffff;
        font-size: 18px;
        padding: 10px;
        border: none;
        border-radius: 30px;
        box-shadow: 0 0 0 0;
        outline: 0;
        cursor: pointer;
        margin-top: 10px;

        &:hover {
            background-color: #123FF5;
            opacity: .7;
        }
    }
`;

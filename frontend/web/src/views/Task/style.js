import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`;

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    button {
        background: none;
        border: none;
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    .inative {
        opacity: 0.5;
    }

    img {
        width: 50px;
        heigth: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }
    }
`;

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin: 5px 0;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #13E953;
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    /* img {
        width: 20px;
        heigth: 20px;
        position: relative;
        left: 95%;
        bottom: 35px;
    } */
`;

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin: 5px 0;
    }

    textarea {
        font-size: 16px;
        border: 1px solid #13E953;
        border-radius: 10px;
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        font-size: 18px;
        font-weight: bold;
        color: #123FF5;
        border: none;
        background: none;
        box-shadow: 0 0 0 0;
        outline: 0;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }

    div {
        display: flex;
        align-items: center;
        color: #13E953;
        font-weight: bold;
        font-size: 18px;

        span {
            margin 5px
        }

        input {
            cursor: pointer;
        }
    }
`;

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button {
        width: 100%;
        background-color: #13E953;
        border: none;
        font-size: 20px;
        color: #ffffff;
        font-weight; bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;
        box-shadow: 0 0 0 0;
        outline: 0;

        &:hover {
            opacity: .7;
        }
    }
`;

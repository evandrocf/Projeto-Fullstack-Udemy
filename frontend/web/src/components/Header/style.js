import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    border-bottom: 6px solid #13E953;
    background-color: #123FF5;
    display: flex;
`;

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width: 100px;
        height: 40px;
    }
`;

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;
        color: #ffffff;

        &:hover {
            color: #13E953;
        }
    }

    .dividor::after {
        content: "|";
        margin: 0 10px;
        color: #ffffff;
    }

    button {
        font-size: 16px;
        border: none;
        box-shadow: 0 0 0 0;
        outline: 0;
        color: #ffffff;
        background-color: transparent;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            color: #13E953;
        }
    }

    #notification {
        background: none;
        border: none;
        cursor: pointer;

        img {
            width: 25px;
            height: 30px;
        }

        span {
            position: relative;
            top: -20px;
            right: 13px;
            padding: 3px 7px;
            border-radius: 50%;
            color: #13E953;
            background-color: #ffffff;
        }

        &:hover {
            opacity: 0.5;
        }
    }
`;

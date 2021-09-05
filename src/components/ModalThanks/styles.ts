import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;

    img {
        width: 90px;
        height: 90px;
    }

    .text-thanks-support{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 24px 0 24px;
        margin-top: 45px;

        h1 {
            font-size: 24px;
        }

        p {
            margin-top: 12px;
            font-size: 15px;
            text-align: center;
            color: var(--grey-100);
            line-height: 30px;
        }

        button {
            margin-top: 33px;
            width: 108px;
            height: 48px;
            background: var(--green-100);
            color: #fff;
            border: none;
            font-weight: bold;
            border-radius: 45px;
            transition: opacity .3s;

            :hover{
                opacity: 0.72;
            }
        }
    }

`;
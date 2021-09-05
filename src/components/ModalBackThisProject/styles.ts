import styled from "styled-components"

export const Container = styled.div`
    display: flex;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    margin-top: 60px;

    .header-title{
        font-size: 15px;
        line-height: 27px;
        font-style: normal;

        h1 {
            margin-bottom: 15px;
        }

        p {
            font-size: 15px;
            color: var(--grey-100);
            font-style: normal;
            margin-bottom: 30px;
        }
    }

    .header-close-button{
        margin-top: -120px;
        margin-right: 21px;
        cursor: pointer;
        :hover{
            opacity: 0.7;
        }
    }

    @media(max-width: 900px){
        margin-top: 30px;
        .header-title{
            line-height: 27px;
            font-style: normal;

            h1 {
                font-size: 18px;
                margin-bottom: 15px;
            }

            p {
                font-size: 15px;
                color: var(--grey-100);
                font-style: normal;
                width: 300px;
            }
        }

        .header-close-button{
            margin-left: -45px;
        }
    }
`;
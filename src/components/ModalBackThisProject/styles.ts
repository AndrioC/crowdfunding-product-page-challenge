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
`;
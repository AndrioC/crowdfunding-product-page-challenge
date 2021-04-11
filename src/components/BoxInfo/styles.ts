import styled from 'styled-components'

interface WrapperProps{
    qtdValue: number;
}

export const Container = styled.div`    
    display: flex;
    flex-direction: column;

    width: 633px;
    height: 248px;
    border: 1px solid rgba(0, 0, 0, 0.0497193);
    background: var(--white);
    border-radius: 9px;
    margin-bottom: 123px;
`;

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: column;
    padding: 39px 33px;
    opacity: ${props => props.qtdValue === 0 ? 0.5 : 1};
    

    .info-header{
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            font-size: 18px;
        }

        p {   
            line-height: 30px;
            font-size: 15px;
            color: var(--green-50);
            font-weight: 500;
        }
    }

    .info-text{
        margin-top: 24px;
        
        p {   
            line-height: 30px;
            font-size: 15px;
            color: var(--grey-100);
        }
    }

    .info-button{
        display: flex;
        align-items: center;
        margin-top: 24px;
        justify-content: space-between;

        p {
            display: flex;
            align-items: center;
            font-size: 33px;
            font-weight: bold;


            span {
                display: block;
                font-size: 15px;
                font-weight: normal;
                margin-left: 9px;
                color: var(--grey-100);
            }
        }

        button {
            width: 157px;
            height: 48px;
            border-radius: 33px;
            border: 0;
            background: var(--green-50);
            color: var(--white);
            font-size: 15px;
            font-weight: bold;
            transition: background .3s;

            &:hover{
                background: var(--green-100);
            }
        }
    }

`;
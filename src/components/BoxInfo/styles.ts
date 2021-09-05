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
    margin-bottom: 24px;

    @media(max-width: 900px){
        width: 279px;
        height: 372px;
    }
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
            cursor: ${props => props.qtdValue > 0 ? 'pointer' : 'not-allowed'};
            width: 157px;
            height: 48px;
            border-radius: 33px;
            border: 0;
            background: ${props => props.qtdValue > 0 ? 'var(--green-50)' : 'var(--grey-100)'};
            color: var(--white);
            font-size: 15px;
            font-weight: bold;
            transition: background .3s;

            &:hover{
                background: ${props => props.qtdValue > 0 ? 'var(--green-50)' : 'var(--grey-100)'};
            }
        }
    }

    @media(max-width: 900px){
        .info-header{
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            h1 {
                font-size: 18px;
            }

            p {   
                line-height: 15px;
                font-size: 15px;
                color: var(--green-50);
                font-weight: 500;
                margin-top: 3px;
            }
        }

        .info-text{
            margin-right: 24px;
            p {
                line-height: 24px;
                font-size: 14px;
                width: 237px;
            }
        }

        .info-button{
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            p {
                margin-bottom: 3px;
            }
        }

    }

`;
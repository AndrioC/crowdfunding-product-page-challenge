import styled from 'styled-components'


interface BoxWrapperProps{
    qtdValue: number;
    idChange: number;
    indexValue: number;
}

interface Props{
    idChange: number;
    indexValue: number;
}

export const BoxInfo = styled.div`
    margin-top: 33px;
    padding-left: 24px;
    padding-right: 24px;
`;

export const BoxWrapper = styled.div<BoxWrapperProps>`
    display: flex;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-width: ${props => (props.indexValue + 1) === props.idChange ? 2 : 1}px;
    border-color: ${props => (props.indexValue + 1) === props.idChange ? "#3CB3AB" : ""};
    width: 636px;
    height: 159px;
    border-radius: 9px;
    pointer-events: ${props => props.qtdValue === 0 ? "none" : "all"};
    
    opacity: ${props => props.qtdValue === 0 ? 0.3 : 1}; 

    .box-wrapper-info{
        display: flex;
        flex-direction: column;
        margin-top: 36px;
        margin-left: 12px;

        .box-wrapper-title{
            display: flex;
            justify-content: space-between;
            color: #3CB3AB;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 12px;

            .box-wrapper-title-and-price{
                > span {
                    color: #000;
                    margin-right:  21px;
                }
            }

            .box-wrapper-qtd{
                margin-right: 30px;

                p {
                    display: flex;
                    align-items: center;
                    font-size: 24px;
                    font-weight: bold;
                    color: #000;

                    span {
                        display: block;
                        font-size: 15px;
                        font-weight: normal;
                        margin-left: 9px;
                        color: var(--grey-100);
                    }
                }
            }
        }

        .box-wrapper-text{
            font-size: 15px;
            line-height: 27px;
            color: #7a7a7a;
        }
    }
`;

export const BoxWrapperSelect = styled.div<Props>`
    margin-top: 36px;
    margin-left: 27px;
    button{
        border: none;
        background: #fff;
        div {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #3CB3AB;
            border-radius: 12px;
            width: 24px;
            height: 24px;
            cursor: pointer;

            > div{
                width: 12px;
                height: 12px;
                background: ${props => (props.indexValue + 1) === props.idChange ? "#3CB3AB" : "#fff"};
                border: ${props => (props.indexValue + 1) === props.idChange ? 1 : 0}px;
            }
        }
    }
`;
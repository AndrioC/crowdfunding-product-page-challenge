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
    height: ${props => (props.indexValue + 1) === props.idChange && props.qtdValue > 0 ? 255 : 159}px;
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

        .box-wrapper-enter-pledge{
            position: relative;
            top: 20px;
            display: flex;
            justify-content: space-between;
            display: ${props => (props.indexValue + 1) === props.idChange && props.qtdValue > 0 ? "" : "none"};
            ::before{
                content: '';
                height: 1px;
                width: 634px;
                right: 0;
                position: absolute;
                background: #000;  
                opacity: .15; 
            }

            .box-wrapper-enter-pledge-title{
                margin-top: 40px;
                margin-left: -30px;
                color: var(--grey-100);
                font-size: 15px;
            }

            .box-wrapper-enter-pledge-button{
                display: flex;
                margin-top: 40px;
                margin-right: 30px;

                .box-wrapper-enter-pledge-button-input-pledge{
                    text-align: center;
                    width: 100px;
                    height: 48px;
                    border-radius: 45px;
                    border: 1px solid var(--green-50);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                    background: #fff;
                    }
                    p {
                        color: var(--grey-100);
                        font-weight: bold;
                        position: relative;
                        ::before{
                            content: '';
                            height: 18px;
                            width: 3px;
                            top: 1px;
                            left: 36px;
                            position: absolute;
                            background: var(--green-50);  
                        }
                    }
                    input {
                        border: 1px solid #fff;
                        width: 36px;
                        height: 36px;
                        margin-left: 3px;
                        font-weight: bold;
                    }
                }

                button {
                    margin-left: 21px;
                    background: var(--green-100);
                    width: 108px;
                    height: 48px;
                    color: #fff;
                    font-weight: bold;
                    border: none;
                    font-size: 15px;
                    border-radius: 45px;
                    transition: opacity .3s;

                    :hover{
                        opacity: 0.81;
                    }
                }
                
            }
        }
    }

    @media(max-width: 900px){
        width: 279px;
        height: ${props => (props.indexValue + 1) === props.idChange && props.qtdValue > 0 ? 423 : 250}px;

        .box-wrapper-info{
            .box-wrapper-title{
                .box-wrapper-title-and-price{
                    display: flex;
                    flex-direction: column;
                    span:nth-child(1) {
                        font-size: 15px;
                    }
                    span:nth-child(2) {
                        font-size: 12px;
                    }
                }

                .box-wrapper-qtd{
                    p {
                        font-size: 15px;
                    }
                }
            }

            .box-wrapper-text{
                margin-top: 12px;
                margin-left: -42px;  
                padding: 0 6px 0 6px;  
            }

            .box-wrapper-enter-pledge{
                position: relative;
                top: 20px;
                display: flex;
                flex-direction: column;
                display: ${props => (props.indexValue + 1) === props.idChange && props.qtdValue > 0 ? "" : "none"};
                ::before{
                    content: '';
                    height: 1px;
                    width: 279px;
                    position: absolute;
                    background: #000;  
                    opacity: .15; 
                }

                .box-wrapper-enter-pledge-title{
                    display: flex;
                    align-items: center;
                    margin-left: 15px;
                }

                .box-wrapper-enter-pledge-button{
                    margin-left: -45px;
                }
            }
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
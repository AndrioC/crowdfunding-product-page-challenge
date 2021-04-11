import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;


    section {
        
        & + section {
            margin-top: 24px;
        }
    }
`;

export const MasterCraftContent = styled.div`
    margin-top: -90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    width: 730px;
    height: 269px;
    border: 1px solid rgba(0, 0, 0, 0.0497193);
    background: var(--white);
    border-radius: 9px;

    > img{
        position: absolute;
        top: -30px;
    }

    .mastercraft-info{
        margin-top: 57px;
        align-items: center;
        justify-content: center;

        h1 {
            text-align: center;
        }

        p {
            margin-top: 15px;
        }
    }

    .mastercraft-buttons{
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 45px;
        justify-content: space-between;
        padding: 0 48px;

        .button-back-this-project{
            width: 204px;
            height: 57px;
            border-radius: 33px;
            border: none;
            background: var(--green-50);
            color: var(--white);
            font-size: 16px;
            font-weight: bold;
            transition: background .3s;

            &:hover{
                background: var(--green-100);
            }
        }

        .button-bookmark{
            display: flex;
            width: 174px;
            height: 57px;
            border: none;
            align-items: center;
            justify-content: center;
            border-radius: 33px;
            position: relative;
            background: var(--grey-10);
            transition: filter 0.3s;

            p {
               margin-left: 45px;
               color: var(--grey-100);
               font-weight: bold;
               font-size: 16px;
            }

            > img {
                position: absolute;
                left: 0;
                color: red;
            }

            &:hover{
                filter: brightness(0.81);
            }
        }
    }

`;

export const ContributionInfo = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 730px;
    height: 269px;
    border: 1px solid rgba(0, 0, 0, 0.0497193);
    background: var(--white);
    border-radius: 9px;


    .wrapper-info{
        display: flex;
        align-items: center;
        margin-bottom: 39px;
        margin-left: 48px;


        .wrapper-info-value{
            display: flex;
            flex-direction: column;
            position: relative;

            h1 {
                font-size: 33px;
                font-weight: bold;
                line-height: 39px;
            }

            p {
                margin-top: 9px;
                font-size: 15px;
                font-weight: 100;
                color: var(--grey-100);   
            }

            & + div {
                margin-left: 90px;
                &::after{
                    content: '';
                    height: 63px;
                    width: 1%;
                    position: absolute;
                    left: -50px;
                    background: var(--grey-40);  
                    opacity: .75;                        
                }
            }
        }
    }

`;

export const AboutProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 730px;
    height: 1197px;
    border: 1px solid rgba(0, 0, 0, 0.0497193);
    background: var(--white);
    border-radius: 9px;
    margin-bottom: 123px;

    .project-info{
        margin-left: -48px;     
        margin-top: 48px;
        margin-bottom: 30px;

        h1 {
            font-size: 21px;
        }

        p {
            margin-top: 33px;
            color: var(--grey-100);
            font-weight: normal;
            font-size: 15px;
            line-height: 30px;
        }
    }
`;
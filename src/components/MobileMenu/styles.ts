import styled, { keyframes } from 'styled-components'

interface Props{
    openMenu: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div<Props>`

    svg {
        color: #fff;
        position: absolute;
        right: 12px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        background: #fff;
        width: 327px;
        height: 212px;
        border-radius: 9px;
        border: 1px solid var(--grey-40);
        position: absolute;
        right: 9px;
        top: 120px;
        z-index:100;
        display: ${props => props.openMenu ? "" : "none"};
        animation: ${props => props.openMenu ? fadeIn : fadeOut} 1s linear;
        

        li {
            margin-top: 21px;
            margin-left: 24px;
            cursor: pointer;
            transition: opacity .3s;
            & + li {
                margin-top: 51px;

                &::before{
                    content: '';
                    height: 2px;
                    width: 327px;
                    top: -24px;
                    right: 0;
                    position: absolute;
                    background: #2F2F2F;  
                    opacity: .1;                        
                } 
            } 

            :hover{
                opacity: 0.6;
            }

            position: relative;
            
            color: #000;
            font-size: 18px;
            font-weight: 500;              
        }
    }
`;
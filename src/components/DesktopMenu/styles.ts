import styled from 'styled-components'

export const Container = styled.div`    
    ul {
        display: flex;
        list-style: none;

        li {
            & + li {
                margin-left: 33px;
            }    

            position: relative;

            color: var(--white);
            font-size: 14px;
            font-weight: 500;

            &:hover{
                cursor: pointer;
                &::after{
                    content: '';
                    height: 2px;
                    width: 100%;
                    top: 15px;
                    position: absolute;
                    left: 0;
                    background: var(--white);  
                    opacity: .75;                        
                }
            }   
        }
    }
`;
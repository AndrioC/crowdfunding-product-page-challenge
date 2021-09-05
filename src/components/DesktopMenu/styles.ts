import styled from 'styled-components'

export const Container = styled.div`    
    ul {
        display: flex;
        list-style: none;
        margin-top: 12px;

        li {
            position: absolute;
            right: 18px;
            & + li {
                margin-left: 36px;
            }    

            position: relative;
            color: var(--white);
            font-size: 24px;
            font-weight: 500;

            &:hover{
                cursor: pointer;
                &::after{
                    content: '';
                    height: 2px;
                    width: 100%;
                    top: 36px;
                    position: absolute;
                    left: 0;
                    background: var(--white);  
                    opacity: .75;                        
                }
            }   
        }
    }
`;
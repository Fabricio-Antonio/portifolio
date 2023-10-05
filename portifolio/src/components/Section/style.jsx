import styled from 'styled-components'

export const StyledSection = styled.div`
    width: 100%;
    height: 100%;
    background-color: #16B8F3;
    padding-top: 2%;
    display: flex;
    
    & h1{
        font-size: 2.125rem;
        font-weight: 700;
        margin-left: 15.625vw;
        padding-top: 7.5rem;
        color: #f8f8f8;
    }
    
    & p{
    font-size: 1.313rem;
    font-weight: 500;
    margin-left: 18.229166666666668vw;
    margin-top: 2%;
    padding-bottom: 2%;
    color: #F8f8f8;
    }

    & img{
        margin-top: 140px;
        border-radius: 50%;
        margin-left: 150px;
        border: 4px solid #f8f8f8;
        display: flex;
        flex-wrap: wrap;
        user-select: none;
    }

    @media (max-width: 1024px) {
        & img{
        margin-left: 2em;
        }
    }
    
    @media (max-width: 768px) {
        & img{
        margin-left: 1em;
        height: 200px; 
        width: 200px; 
        justify-content: center;
        margin-bottom: 2em;
        }

        & h1{
        font-size: 2.125rem;
        font-weight: 700;
        margin-left: 3em;

        }

        flex-wrap: wrap;
        justify-content: center;

    }
    @media (max-width: 425px) {
        & h1 {
            margin-left: 1em;
        }
    }
`
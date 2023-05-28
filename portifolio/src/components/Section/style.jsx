import styled from 'styled-components'

export const StyledSection = styled.div`
    width: 100%;
    height: 100%;
    background-color: #16B8F3;
    padding-top: 2%;
    display: flex;
    
    & h1{
        font-size: 2.125rem;
        font-weight: 500;
        margin-left: 15.625vw;
        padding-top: 7.5rem;
        color: #FFF;
    }
    
    & p{
    font-size: 1.313rem;
    font-weight: 500;
    margin-left: 18.229166666666668vw;
    margin-top: 2%;
    padding-bottom: 2%;
    color: #FFF;
    }

    & img{
        margin-top: 140px;
        border-radius: 50%;
        margin-left: 150px;
        border: 4px solid #FFF;
        display: flex;
        user-select: none;
    }
`
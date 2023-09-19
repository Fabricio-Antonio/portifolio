import styled from 'styled-components'

export const StyledSection2 = styled.div`
    width: 100%;
    height: 850px;
    background-color: #f8f8f8;
    padding-top: 2%;
    display: flex;
    
    & h2{
        font-size: 2.125rem;
        font-weight: 700;
        margin-left: 30px;
        margin-top: 15px;
    }
    
    & p{
    margin-left: 30px;
    font-size: 21px;
    font-weight: 500;
    margin-top: 15px;
    }

    & img {
        margin-left: 100px;
        margin-top: 200px;
    }

    & li {
        list-style: none;
        font-size: 40px;
        align-items: left;
        display: grid;

        grid-template-columns: 1fr 1fr;
    }
`
export default StyledSection2;
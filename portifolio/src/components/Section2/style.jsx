import styled from 'styled-components'

export const StyledSection2 = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    padding-top: 2%;
    display: flex;
    flex-wrap: wrap;
    
    & h2{
        font-size: 2.125rem;
        font-weight: 700;
        margin-left: 30px;
        margin-top: 15px;
    }
    
    & p{
    margin-left: 30px;
    font-size: 21px;
    font-weight: 400;
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

@media (max-width: 768px) {
    & li {
        list-style: none;
        font-size: 40px;
        align-items: left;
        display: grid;

        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 425px) {
        justify-content: center;
        
        & h2{
        font-size: 2rem;
        font-weight: 700;
        margin-left: 1.563rem;
        margin-top: 15px;
        }

        & p{
        margin-left: 1.563rem;
        font-size: 1.188rerm;
        font-weight: 400;
        margin-top: 15px;
        }

        & img {
            margin-top: 50px;
            margin-left: 0;
            height: 200px; 
            width: 200px;
        }

        & ul {
        font-size: medium;
        font-weight: 500;
        
        
    }
  }
`
export default StyledSection2;
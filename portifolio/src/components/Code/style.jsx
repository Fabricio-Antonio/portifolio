import styled from 'styled-components'

export const Code = styled.div`
   height: 200px;
   width: 700px;
   font-size: large;
   margin-left: 18.229166666666668vw;
   background-color: #f8f8f8;
   border-radius: 5px;
   font-family: monospace;
   padding-top: 10px;
   padding-left: 5px;
   margin-top: 3%;
   margin-bottom: 1%;

@media (max-width: 1024px) {
      margin-left: 5em;
      }
@media (max-width: 768px) {
      margin-left: 2em;
}
@media (max-width: 425px) {
      width: 400px;
      height: 300px;
      margin-left: 1rem;
}
`;

export default Code;
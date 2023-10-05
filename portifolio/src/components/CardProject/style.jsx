import styled from 'styled-components'

export const StyledCardProject = styled.div`
        margin-left: 100px;
        margin-top: 10px;
        display: flex;

        .Card {
                margin-right: 1rem;
        }

        .button{
                background-color: #16B8F3;
                margin-left: 1rem;
                border: none;
                --bs-btn-active-bg: #181818;
        }

        & iframe {
                width: auto;
                height: auto;
        }

        & h3 {
                color: #f8f8f8;
                margin-left: 1rem;
        }

        & p {
                margin-left: 1rem;
        }

        .displayBlock{
                display: block;
        }

        .displayFlex {
                display: flex;
        }
`

export default StyledCardProject;
import styled from 'styled-components'

export const StyledButtonTop = styled.div`

        position: fixed;
        bottom: 50px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: #16B8F3;
        border-radius: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: solid #f8f8f8;
        cursor: pointer;
        scroll-behavior: smooth;

        & i {
            border: solid #f8f8f8;
            border-width: 0 7px 7px 0;
            padding: 5px;
            display: inline-block;
            transform: rotate(-135deg);
            -webkit-transform: rotate(-135deg);
        }

`
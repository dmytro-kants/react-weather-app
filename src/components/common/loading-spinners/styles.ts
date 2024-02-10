import styled from 'styled-components'

export const MainSpinner = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-around;
    height:100vh
`

export const MainSpinnerText = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    > p {
        font-size:48px;
        font-weight:bold;
        margin:0 0 10px 0;
        text-align:center;
    }
`
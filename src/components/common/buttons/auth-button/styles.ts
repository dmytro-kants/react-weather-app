import styled from 'styled-components'

interface AuthButtonStyleProps {
    $type:string;
}

export const AuthButton = styled.div<AuthButtonStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width:120px;
    height: 50px;
    border-radius: 20px;
    background-color: ${(props) => {
        if(props.$type === "Sign up"){
            return "#373737"
        }
        if(props.$type === "Sign in" || props.$type === "Logout"){
            return "#868686"
        }
    }}; 
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: none;
    margin-left:20px;
    &:hover {
        background-color: #a9a9a9;
    }
    >p {
        color:white;
        font-size:20px;
    }
`
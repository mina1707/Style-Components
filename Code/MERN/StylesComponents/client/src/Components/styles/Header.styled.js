import styled from "styled-components";

export const StyledHeader = styled.header `

    background-color: ${({theme}) => theme.colors.header};
    padding: 40px 0;

`

export const Nav = styled.nav `
    
    display: flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom: 40px;

`
export const Logo = styled.div `
    font-size: 50px;
    
`

export const Image = styled.img`

    width: 450px;
    margin-left: 40px;

`
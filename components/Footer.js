import styled from "styled-components"

const FooterStyled = styled.footer`
    text-align: center;
    font-size: 1rem;
    font-weight: 400; 
    color: #fffffc;
    width: 88%;
    margin: 2rem .4rem .4rem;
    padding: .4rem;
    border: 1px solid darkorange;
    border-radius: 4px;
`;

export default function Footer() {
    return (
        <FooterStyled>© 2025 The C </FooterStyled>
    )
}
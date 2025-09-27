import styled from "styled-components";

const StyledHeader = styled.header`
background-color: var(--color-grey-0);


    padding: 1rem 5rem;
    border:1px solid var(--color-green-700) ;

`

function Header() {
    return (
        <StyledHeader>
            Header
        </StyledHeader>
    );
}

export default Header;
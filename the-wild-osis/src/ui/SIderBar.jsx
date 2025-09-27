import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSiderBar = styled.aside`
background-color: var(--color-grey-0);
    padding: 3rem ;
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`
function SIderBar() {
    return (
        <StyledSiderBar>
            <Logo />
            <MainNav/>
        </StyledSiderBar>
    );
}

export default SIderBar;
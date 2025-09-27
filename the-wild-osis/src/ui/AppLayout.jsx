import { Outlet } from "react-router-dom";
import Header from "./Header";
import SIderBar from "./SIderBar";
import styled from "styled-components";

const StyledLayout = styled.div`
background-color: var(--color-grey-50);

    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    /* grid-template-rows: 1rem 1rem; */

`
const Main = styled.main`
/* background-color: yellow; */
padding: 4rem ;
    
`
// const AppLayout 
function AppLayout() {
    return (
        <StyledLayout>
            <Header />
            <SIderBar />
            <Main>

                <Outlet />
            </Main>

        </StyledLayout>
    );
}

export default AppLayout;
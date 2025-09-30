import { Outlet } from "react-router-dom";
import Header from "./Header";
import SIderBar from "./SIderBar";
import styled from "styled-components";

const StyledLayout = styled.div`
    background-color: var(--color-grey-50);

    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;

    /* grid-template-rows: 1rem 1rem; */

`
const Main = styled.main`
/* background-color: yellow; */
padding: 4rem ;
    overflow: scroll;



    
`
const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap:3.2rem;

`
// const AppLayout 
function AppLayout() {
    return (
        <StyledLayout>
            <Header />
            <SIderBar />
            <Main>
                <Container>
                    <Outlet />
                </Container>
            </Main>

        </StyledLayout>
    );
}

export default AppLayout;
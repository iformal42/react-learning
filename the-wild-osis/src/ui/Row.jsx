import styled, { css } from "styled-components";

const Row = styled.div`
display: flex;
${props => props.type === 'horizontoal' &&
        css`
    justify-content: space-between;
    align-items: center;
`}
${props => props.type === 'veritcal' &&
        css`
    flex-direction: column;
    gap: 1rem;
`}
    
`
Row.defaultProps = {
    type: "veritcal"
}
export default Row;
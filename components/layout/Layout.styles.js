import styled from "styled-components";


export const Wrapper = styled.main`
min-height: 100vh;
display: flex;
flex-direction: column;
background: black;
`

export const Container = styled.div.attrs({ id: 'page-wrap' })`
background-image: url('${props => props.background}');
background-position: center;
flex: 1;
transform: scale(${({openMenu}) => openMenu ? '0.7' : '1'});
transition: transform 700ms ease;
filter: blur(${({openMenu}) => openMenu ? '0.5em' : '0em' })
`

export const MainContent = styled.div`
max-width: 1440px;
flex: 1;
margin: 0 auto;
`;

export const Header = styled.header`
display: grid;
grid-template-columns: repeat(3, 1fr);
`;

export const InstaWrapper = styled.div`
justify-content: flex-end;
border: none;
margin: 0em 1.5em;
`
export const HeaderColumn = styled.div`
display: flex;
align-items: center;
justify-content: ${ props => props.justify };
padding: 0.5em 0em;
`
export const Logo = styled.div`
transition: transform 500ms ease;
:hover {
    transform: scale(1.05);
    cursor: pointer;
}
`



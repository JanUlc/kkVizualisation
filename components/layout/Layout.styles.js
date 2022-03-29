import styled from "styled-components";

export const Wrapper = styled.main`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
`

export const BackgorundWrapper = styled.div`

background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 93%), url('${props => props.background}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const Container = styled.div.attrs({ id: 'page-wrap' })`

transform: scale(${({openMenu}) => openMenu ? '0.7' : '1'});
transition: transform 700ms ease;
filter: blur(${({openMenu}) => openMenu ? '0.5em' : '0em' });
height: 78vh;
`

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
export const Footer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
background-color: black;
height: 7.8vh;
`



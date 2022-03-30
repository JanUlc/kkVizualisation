import styled from "styled-components";

export const Wrapper = styled.main`
height: 100vh;
display: flex;
flex-direction: column;
`

export const BackgorundWrapper = styled.div`
display: flex;
flex:1;
flex-direction: column;
background: radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 93%), url('${props => props.background}');
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const Container = styled.div.attrs({ id: 'page-wrap' })`
flex:1;
transform: scale(${({openMenu}) => openMenu ? '0.7' : '1'});
transition: transform 700ms ease;
filter: blur(${({openMenu}) => openMenu ? '0.5em' : '0em' });
padding: 0.5rem;
`

export const Header = styled.header`
flex:0 0 100px;
display: flex;
align-items: center;
`;

export const InstaWrapper = styled.div`
justify-content: flex-end;
border: none;
margin: 0em 1.5em;
`
export const HeaderColumn = styled.div`
display: flex;
flex:1;
justify-content: ${ props => props.justify };
`
export const Logo = styled.div`
transition: transform 500ms ease;
:hover {
    transform: scale(1.05);
    cursor: pointer;
}
`
export const Footer = styled.div`
flex:0 0 70px;
display: flex;
background-color: black;
align-items: center;
padding: 0.5rem;
`



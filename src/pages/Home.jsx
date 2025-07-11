import './Home.css'
import styled, { keyframes } from 'styled-components';

const underlineDraw = keyframes`
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    opacity: 0;
  }
`;

const HighlightWord = styled.span`
  position: relative;
  display: inline-block;
  color: currenColor;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #D61AAE;
    transform: scaleX(0);
    transform-origin: left;
    animation: ${underlineDraw} 2.5s ease-in-out infinite;
  }
`;

function Home() {
    return (
        <main className="main">
            <div className="container">
                <div className="main-text text-end">
                    <h1>¡Hola! <br /> soy Paola</h1>
                    <p>Soy una <HighlightWord>desarrolladora web</HighlightWord> con ojo para los detalles y una gran curiosidad por como hacer que las ideas cobren vida en la pantalla. Me apasiona crear experiencias digitales que conecten, sorprendan y funcionen. Pero no solo vivo en el mundo del código: también traigo conmigo experiencia en atención al cliente, ventas y otras áreas que me han enseñado a trabajar en equipo, resolver problemas y adaptarme rápido.

                        Este es mi espacio para mostrarte lo que he hecho y todo lo que puedo llegar a hacer. Siempre lista para un nuevo desafío.</p>
                </div>
            </div>
        </main>
    );
}

export default Home
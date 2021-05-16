import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';

export const HeroContainer = styled.div`
  max-width: 1100px;
  margin: auto;
  padding: 0 6px;
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;

  @media screen and ${breakpoints.device.md} {
    grid-template-columns: 1fr;
    column-gap: 0px;
  }
`;

export const TextSection = styled.section`
  align-self: center;

  @media screen and ${breakpoints.device.md} {
    grid-area: 1 / 1 / 2 / 2;
    align-self: top;
    height: 100%;
    width: 80%;
    margin: auto;
    z-index: 2;
  }

  @media screen and ${breakpoints.device.sm} {
    align-self: stretch;
    width: 100%;
    padding: 0 6px;
  }
`;

export const TextHeader = styled.h1`
  margin: 16px 0;
  font-size: 32px;
  color: #000;

  @media screen and ${breakpoints.device.md} {
    text-align: center;
  }
`;

export const TextList = styled.ul`
  padding: 12px 6px;
  font-size: 18px;
  list-style-position: inside;
  text-indent: -1.5rem;
  padding-left: 1.5rem;
  letter-spacing: 1.2px;
  
  @media screen and ${breakpoints.device.md} {
    list-style-type: none;
    text-align: center;
    font-size: 20px;
  }
`;

export const Item = styled.li`
  padding: 6px 0;
  font-weight: bold;
`;

export const ImgSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and ${breakpoints.device.md} {
    grid-area: 1 / 1 / 2 / 2;
    z-index: 1;
    opacity: 0.4;
  }
`;

export const Img = styled.img`
  width: 350px;
  height: 350px;
`;


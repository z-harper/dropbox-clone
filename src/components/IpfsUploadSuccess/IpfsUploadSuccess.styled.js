import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';

export const SuccessContainer = styled.div`
  padding-bottom: 32px;  

  @media screen and ${breakpoints.device.md} {
    margin-top: 24px;
  }
`;

export const SuccessHeader = styled.h3`
  margin-bottom: 10px;
  text-align: center;
  color: green;
`;

export const SuccessDesc = styled.h5`
  margin-bottom: 10px;
  text-align: center;
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;

  @media screen and ${breakpoints.device.md} {
    width: 90%;
    margin: auto;
  }

  @media screen and ${breakpoints.device.sm} {
    width: 100%;
  }
`;

export const SuccessAttrib = styled.p`
  margin-bottom: 6px;
`;

export const SuccessVal = styled.p`
  font-weight: bold;
  letter-spacing: 1.2px;
`;

export const SuccessLink = styled.a`
  margin-top: 12px;
  display: inline-block;
  width: 100%;
  text-align: center;
  color: #ff8248;
  font-weight: bold;
`;
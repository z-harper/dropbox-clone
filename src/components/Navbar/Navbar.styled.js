import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';

export const NavbarContainer = styled.nav`
  min-height: 120px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, #bbb, #fff);

  @media screen and ${breakpoints.device.sm} {
    padding: 6px;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const NavLogo = styled.div``;

export const DStoreImg = styled.img`
  width: 84px;
  height: 72px;
`;


export const AcctContainer = styled.div`
  padding: 6px;
  border: 1px solid #aaa;
  border-radius: 8px;
  box-shadow: 4px 4px 4px #bbb;
`;

export const AcctText = styled.h4`
  margin-bottom: 4px;
  text-decoration: underline;

  @media screen and ${breakpoints.device.sm} {
    text-align: center;
  }
`;

export const AcctNumber = styled.p`
  word-wrap: break-word;
  word-break: break-all;
`;


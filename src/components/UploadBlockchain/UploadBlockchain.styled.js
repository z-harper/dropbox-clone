import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';

export const UploadContainer = styled.div`
  min-height: 300px;
  max-width: 1100px;
  margin: auto;
  margin-top: 3rem;
  padding: 0 6px;
`;

export const UploadHeader = styled.h1`
  width: 50%;  
  font-size: 32px;
  text-align: center;
  margin: 16px 0;

  @media screen and ${breakpoints.device.md} {
    width: 100%;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;

  @media screen and ${breakpoints.device.md} {
    grid-template-columns: 1fr;
    column-gap: 0px;
  }
`;

export const TextContainer = styled.section`

  @media screen and ${breakpoints.device.md} {
    margin-bottom: 24px;
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

export const BtnContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const FilesAddedHeader = styled.h2`
  text-decoration: underline;
`;

export const FilesAdded = styled.h3`
  font-size: 32px;

  @media screen and ${breakpoints.device.md} {
    margin: 10px 0 16px 0;
  }
`;

export const SubmitBtn = styled.button`
  height: 30px;
  width: 200px;
  border: 2px solid #ff9949;
  border-radius: 8px;
  background: #ff9949;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
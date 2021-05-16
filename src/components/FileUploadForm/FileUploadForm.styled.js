import styled from 'styled-components';
import breakpoints from '../../theme/breakpoints';

export const FileUploadContainer = styled.div`
  min-height: 300px;
  max-width: 1100px;
  margin: auto;
  padding: 0 6px;
`;

export const IpfsHeader = styled.h1`
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
  //display: ${({isUploadSuccess}) => (isUploadSuccess ? 'grid' : 'block')};
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;

  @media screen and ${breakpoints.device.md} {
    grid-template-columns: 1fr;
    column-gap: 0px;
  }
`;

export const FormControl = styled.section``;

export const Form = styled.form`
  display: flex;
  margin-bottom: 8px;
`;

export const InputBoxIcon = styled.div`
  flex-grow: 1;
  height: 150px;
  width: 150px;
  margin-right: 16px;
  border: 3px dashed #ff8248;;
  border-radius: 50%;
  display: flex;
  align-items: stretch;
`;

export const InputLabel = styled.label`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  word-wrap: break-word;
  word-break: break-all;
  transition: 0.5s all ease-in-out;

  &:hover {
    background: #aaa;
    color: #fff;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileDescContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DescLabel = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

export const DescInput = styled.textarea`
  width: 90%;
  padding: 2px 6px;
  resize: none;
  border: 2px solid #ff8248;
  border-radius: 8px;
`;

export const BtnContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IpfsSubmitBtn = styled.button`
  height: 30px;
  width: 200px;
  margin: auto;
  border: 2px solid #ff9949;
  border-radius: 8px;
  background: #ff9949;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const WarningMessage = styled.div`
  padding: 16px 6px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and ${breakpoints.device.md} {
    margin: 16px;
  }
`;
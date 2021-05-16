import styled from 'styled-components';
import RingLoader from 'react-spinners/RingLoader';

const LoadingContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background: radial-gradient(#e66465, #9198e5);
`;

const LoadingMessage = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #bbb;
`;

const spinnerCSS = `
  margin-bottom: 16px;
  color: #bbb;
`;

const spinnerColor = '#bbb';

const Loading = () => {
  return (
    <LoadingContainer>
      <RingLoader color={spinnerColor} loading={true} css={spinnerCSS} size={150} />
      <LoadingMessage>loading...</LoadingMessage>
    </LoadingContainer>
  )
}

export default Loading

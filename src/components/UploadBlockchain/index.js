import {UploadContainer, UploadHeader, GridWrapper, TextContainer, TextList, Item, BtnContainer, FilesAddedHeader, FilesAdded, SubmitBtn} from './UploadBlockchain.styled';

const UploadBlockChain = ({ filesCount, uploadFile, submitToBlockchain }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // check for empty properties
    let countEmpty = 0;
    Object.keys(uploadFile).forEach(key => {
      if (uploadFile[key] === null || uploadFile[key] === '') {
        countEmpty++;
      }
    })
    if (countEmpty > 0) {
      window.alert('Please ensure file is uploaded to IPFS before pushing to blockchain');
      return;
    }

    submitToBlockchain();
  }

  return (
    <UploadContainer>
      <UploadHeader>2. Upload to Blockchain</UploadHeader>
      <GridWrapper>
        <TextContainer>
          <TextList>
            <Item>Don't worry about remembering your file's link on IPFS</Item>
            <Item>Keep your file locations in one place</Item>
            <Item>Search bar let's you find files effortlessly</Item>
            <Item>See what other people have been uploading</Item>
          </TextList>
        </TextContainer>
        <BtnContainer>
          <FilesAddedHeader>Total files tracked:</FilesAddedHeader>
          <FilesAdded>{filesCount}</FilesAdded>
          <SubmitBtn type='submit' onClick={handleSubmit}>Submit To Blockchain</SubmitBtn>
        </BtnContainer>
      </GridWrapper>
    </UploadContainer>
  )
}

export default UploadBlockChain

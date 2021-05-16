import { useState } from 'react';
import { FileUploadContainer, IpfsHeader, GridWrapper, FormControl, Form, FileInput, InputLabel, InputBoxIcon, FileDescContainer, DescLabel, DescInput, BtnContainer, IpfsSubmitBtn, WarningMessage } from './FileUploadForm.styled';
import IpfsUploadSuccess from '../IpfsUploadSuccess';
import { ipfsUploadDocument } from '../../utils/ipfs-interactions';
import { fileToByteArray } from '../../utils/file-to-bytes';

const FileUploadForm = ({ setUploadFile, uploadFile }) => {

  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState({});
  const [fileDescription, setFileDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploadSuccess(false);
    
    // Convert file to byte array    
    const fileByteArray = await fileToByteArray(selectedFile);
    // Uplaod file to ipfs
    const filePath = await ipfsUploadDocument(fileByteArray);
    // Stage file properties to be used for upload to blockchain
    setUploadFile({
      name: selectedFile.name,
      type: selectedFile.type,
      size: selectedFile.size,
      description: fileDescription,
      fileHash: filePath
    });

    if (filePath.length > 0) setIsUploadSuccess(true);
    // Reset file and description
    setSelectedFile({});
    setFileDescription('');

    window.alert(`upload successful: https://ipfs.io/ipfs/${filePath}`);
  }

  return (
    <FileUploadContainer>
      <IpfsHeader>1. Upload to IPFS</IpfsHeader>
      <GridWrapper>
        <FormControl>
          <Form>
            <InputBoxIcon>
              <InputLabel htmlFor='file'>{selectedFile.name ? selectedFile.name : 'Select File'}</InputLabel>
              <FileInput required type='file' id='file' name='file' onChange={e => setSelectedFile(e.target.files[0])} />
            </InputBoxIcon>
            <FileDescContainer>
              <DescLabel htmlFor='fileDesc'>File Description</DescLabel>
              <DescInput rows='5' placeholder='Enter a description...' required type='text' id='fileDesc' name='fileDesc' value={fileDescription} onChange={e => setFileDescription(e.target.value)} />
            </FileDescContainer>
          </Form>
          <BtnContainer>
            <IpfsSubmitBtn type='submit' onClick={handleSubmit}>Submit to IPFS</IpfsSubmitBtn>
          </BtnContainer>
        </FormControl>
        {isUploadSuccess 
          ? <IpfsUploadSuccess uploadFile={uploadFile} />
          : <WarningMessage>
              <h4><span style={{textDecoration: 'underline', color: '#ff9949'}}>NOTE</span>: IPFS is a decentralized storage system which gives users the ability to view any file that has been uploaded.</h4>
              <br />
              <h4>Please do not upload any document that contains personal information.</h4>
            </WarningMessage>
        }
      </GridWrapper>
    </FileUploadContainer>
  )
}

export default FileUploadForm

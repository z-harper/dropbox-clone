import { SuccessContainer, SuccessHeader, SuccessDesc, DetailsGrid, SuccessAttrib, SuccessVal, SuccessLink } from './IpfsUploadSuccess.styled';

const IpfsUploadSuccess = ({ uploadFile }) => {
  const {name, type, size, description, fileHash} = uploadFile;

  return (
    <SuccessContainer>
      <SuccessHeader>Upload Success!!</SuccessHeader>
      <SuccessDesc>Below are the details of the uploaded file to IPFS.</SuccessDesc>
      <DetailsGrid>
        <SuccessAttrib>File name:</SuccessAttrib>
        <SuccessVal>{name}</SuccessVal>
        <SuccessAttrib>File description:</SuccessAttrib>
        <SuccessVal>{description}</SuccessVal>
        <SuccessAttrib>File size:</SuccessAttrib>
        <SuccessVal>{size} bytes</SuccessVal>
        <SuccessAttrib>File type:</SuccessAttrib>
        <SuccessVal>{type}</SuccessVal>
      </DetailsGrid>
      <SuccessLink href={`https://ipfs.io/ipfs/${fileHash}`} target='_blank' rel='noopener noreferrer'>IPFS Link to File</SuccessLink>
    </SuccessContainer>
  )
}

export default IpfsUploadSuccess

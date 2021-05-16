import {FilesContainer, GridTable, TableProp, TableVal, TableLink} from './UploadedFiles.styled';

const UploadedFiles = ({ filesData }) => {
  return (
    <FilesContainer>
      <GridTable>
        <TableProp>Name</TableProp>
        <TableProp>Description</TableProp>
        <TableProp>Type</TableProp>
        <TableProp>Size</TableProp>
        <TableProp>Date</TableProp>
        <TableProp>Uploader</TableProp>
        <TableProp>IPFS Location</TableProp>
      </GridTable>
      {filesData.map(file => {
        return (
          <GridTable key={file.id}>
            <TableVal>{file.name}</TableVal>
            <TableVal>{file.description.substring(0,15)}...</TableVal>
            <TableVal>{file.type}</TableVal>
            <TableVal>{file.size} bytes</TableVal>
            <TableVal>{file.date.toLocaleDateString()}</TableVal>
            <TableLink href={`https://ropsten.etherscan.io/address/${file.uploader}`} target='_blank' rel='noopener noreferrer'>{file.uploader.substring(0,6)}...</TableLink>
            <TableLink href={`https://ipfs.io/ipfs/${file.path}`} target='_blank' rel='noopener noreferrer'>{file.path.substring(0,6)}...</TableLink>
          </GridTable>
        )
      })}
    </FilesContainer>
  )
}

export default UploadedFiles

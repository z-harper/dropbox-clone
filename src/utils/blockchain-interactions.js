/**
 * 
 * @param {*} contract takes current instance of Storage contract for current account 
 * @returns number of files in Storage Contract
 */
export const getFilesCount = async (contract) => {
  try {
    let files = await contract.filesUploaded();
    return parseInt(Number(files._hex), 10);
  } catch (error) {
    console.log(error);
    window.alert('Failed to retrieve number of files in Storage.');
  }
  
}



const parseContent = (fileContent) => {
  let milliTime = parseInt(fileContent.uploadTime.toString()) * 1000;

  return {
    description: fileContent.fileDesc,
    path: fileContent.fileHash,
    name: fileContent.fileName,
    type: fileContent.fileType,
    uploader: fileContent.uploader,
    size: fileContent.fileSize.toString(),
    id: parseInt(fileContent.fileId.toString()),
    date: new Date(milliTime),
  }
}

/**
 * 
 * @param {*} contract current instance of Storage contract for current account
 * @param {*} filesCountApp current count of files in app
 * @param {*} filesCountBC current count of files of Storage contract on blockchain
 * @returns data object for each file 
 */
export const getFilesData = async (contract, filesCountApp, filesCountBC) => {
  try {
    // If this is the first time running the app or state has been cleared
    if (filesCountApp === 0) {
      let files = [];
      // File index of Storage contract begins at 0
      for (let i = 0; i < filesCountBC; i++) {
        let file = await contract.files(i);
        file = parseContent(file);
        files = [...files, file];
      }
      return files;
    }
    // A new file has been uploaded 
    let newFileIndex = filesCountBC - 1;
    let file = await contract.files(newFileIndex);
    return parseContent(file);
  } catch (error) {
    console.log(error);
    window.alert('Failed to retrieve data for files in Storage.');
  }
}



/**
 * 
 * @param {*} contract current instance of Storage contract for current account
 * @param {*} fileData object with properties of file uploaded to ipfs
 * @returns receipt of transaction on successful file upload
 */
export const pushFileToStorage = async (contract, fileData) => {
  try {
    const {name, type, size, description, fileHash} = fileData;
    // push to blockchain
    const tx = await contract.uploadFile(fileHash, size, type, name, description);
    // wait for the transaction to be mined
    const receipt = await tx.wait();
    return receipt;
  } catch (error) {
    console.log(error);
    window.alert('Failed to push file to Storage.');
  }
}
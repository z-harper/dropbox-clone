const ipfsClient = require('ipfs-http-client')

/**
 * 
 * @param {*} fileByteArray 
 * @returns file path hash
 */
export const ipfsUploadDocument = async (fileByteArray) => {
  try {
    // Create ipfs connection
    const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })
    // Push file to ipfs
    const result = await ipfs.add(fileByteArray);
    return result.path;
  } catch (error) {
    console.log(error);
    window.alert('An error occurred while communicating with IPFS...');
  }
}

/**
 * 
 * @param {*} filePath 
 * @returns returns decoded text of a given file path
 */
export const ipfsRetrieveDocument = async (filePath) => {
  try {
    // Create ipfs connection
    const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })
    // retrieve bytearray from ipfs
    const chunks = []
    for await (let chunk of ipfs.cat(filePath)) {
      chunks.push(chunk)
    }
    // decode bytearray
    let decoded = new TextDecoder().decode(chunks[0]);
    return decoded;
  } catch (error) {
    console.log(error);
    window.alert('An error occurred while retrieving the file from IPFS...');
  }
}

// Test file on ipfs
//https://ipfs.io/ipfs/QmQzGyV7zWTBM99BmfSktcj9bVmbGJsb9LKs6eY3QDHC41
//const cid ='QmQzGyV7zWTBM99BmfSktcj9bVmbGJsb9LKs6eY3QDHC41';
// another test: 'QmdpQEyf1oGxXYneJ4o7GqxGxF4BgUYy9vXSv91axQN91g';
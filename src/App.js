import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import StorageAbi from './contracts/Storage.json';
import { getFilesCount, getFilesData, pushFileToStorage } from './utils/blockchain-interactions';
import './App.css';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FileUploadForm from './components/FileUploadForm';
import UploadBlockchain from './components/UploadBlockchain';
import UploadedFiles from './components/UploadedFiles';

function App() {

  const [acctAddress, setAcctAddress] = useState('');
  const [contract, setContract] = useState({});
  const [filesCount, setFilesCount] = useState(0);
  const [filesData, setFilesData] = useState([]);
  const [uploadFile, setUploadFile] = useState({});  // file properties
  const [isLoading, setIsLoading] = useState(true);

  const configureWeb3 = async () => {
    // provider === window.ethereum
    const provider = await detectEthereumProvider();
    if (provider) {
      try {       
        // Request access to metamask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAcctAddress(accounts[0]);

        // Create ethers instance of user account and Storage Contract
        //const provider = new ethers.providers.Web3Provider(window.ethereum);
        const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');
        const signer = provider.getSigner();

        // Get contract address
        const networkId = Object.keys(StorageAbi.networks)[0];
        const storageAddress = StorageAbi.networks[networkId].address;
        // Create a contract instance
        const storageContract = new ethers.Contract(storageAddress, StorageAbi.abi, signer);
        setContract(storageContract);

        // retrieve data from blockchain on app startup
        if (filesCount === 0) {
          // get number of files held on Storage contract
          const blockchainFileCount = await getFilesCount(storageContract);
          setFilesCount(blockchainFileCount);
          // get data for each file
          const storageFiles = await getFilesData(storageContract, filesCount, blockchainFileCount);
          setFilesData([...filesData, ...storageFiles]);
        }
        // If all checks pass
        setIsLoading(false);
      } catch (error) {
        if (error.code === 4001) {
          // User rejected request
          console.log(error);
          window.alert('User denied permission.');
        }
      }      
    } else {
      // No provider detected
      window.alert('MetaMask not detected in browser. Please install to use this site.')
    }    
  };

  const submitToBlockchain = async () => {
    setIsLoading(true);
    // send new file to storage
    const receipt = await pushFileToStorage(contract, uploadFile);
    console.log('trx receipt\n',receipt);

    // get number of files held on Storage contract
    const blockchainFileCount = await getFilesCount(contract);
    setFilesCount(blockchainFileCount);

    // get data for file
    const storageFiles = await getFilesData(contract, filesCount, blockchainFileCount);
    setFilesData([...filesData, storageFiles]);

    // clear current file
    setUploadFile({});
    setIsLoading(false);

    window.alert('Upload to blockchain successful!! Check out your file details below');
  }

  // If user switches to a new account
  const acctChangeListener = () => {
    window.ethereum.on("accountsChanged", async function() {
      // Reload interface with current account
      setIsLoading(true);
      configureWeb3();
      setIsLoading(false);
    });
  }

  useEffect(() => {
    configureWeb3();
    acctChangeListener();
  }, [])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <Navbar acctAddress={acctAddress} />
      <Hero />
      <FileUploadForm setUploadFile={setUploadFile} uploadFile={uploadFile} />
      <UploadBlockchain filesCount={filesCount} uploadFile={uploadFile} submitToBlockchain={submitToBlockchain} />
      <UploadedFiles filesData={filesData} />
    </>
  );
}

export default App;

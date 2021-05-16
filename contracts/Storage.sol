// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Storage {
    string public name = 'Decentralized Dropbox';
    uint public filesUploaded;
    mapping(uint256 => File) public files;
    
    struct File {
        uint fileId;
        string fileHash;
        uint fileSize;
        string fileType;
        string fileName;
        string fileDesc;
        uint uploadTime;
        address payable uploader;
    }
    
    event FileUploaded(uint fileId, string fileHash, uint fileSize, string fileType, string fileName, string fileDesc, uint uploadTime, address payable uploader);
    
    function uploadFile(string memory _fileHash, uint _fileSize, string memory _fileType, string memory _fileName, string memory _fileDesc) public {
        // Require statements that ensure proper uploade 
        require(bytes(_fileHash).length > 0, "File hash not present");
        require(_fileSize > 0, "File size not present");
        require(bytes(_fileType).length > 0, "File type not present");
        require(bytes(_fileName).length > 0, "File name not present");
        require(bytes(_fileDesc).length > 0, "File description not present");
        require(msg.sender != address(0), "Invalid address");
        
        files[filesUploaded] = File(filesUploaded, _fileHash, _fileSize, _fileType, _fileName, _fileDesc, block.timestamp, payable(msg.sender));
        filesUploaded++;
        
        // Trigger event when file uploaded 
        emit FileUploaded(filesUploaded, _fileHash, _fileSize, _fileType, _fileName, _fileDesc, block.timestamp, payable(msg.sender));
    }
    
}
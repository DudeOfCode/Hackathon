//SPDX-License-Identifier:MIT
pragma solidity ^0.8.3;

contract DStorage {
    address payable public owner;
    uint256 public id;
    struct FileInfo {
        uint256 fileId;
        string fileName;
        string filePath;
        string fileType;
        address payable saver;
    }
    address[] public paidUser;
    mapping(uint256 => FileInfo) public aFile;

    FileInfo[] public files;

    constructor() {
        owner = payable(msg.sender);
    }

    receive() external payable {}

    function uploadFile(
        string memory _fileName,
        string memory _filePath,
        string memory _fileType
    ) public {
        FileInfo memory fileInfo;
        id++;
        fileInfo.fileId = id;
        fileInfo.fileName = _fileName;
        fileInfo.fileType = _fileType;
        fileInfo.filePath = string(
            abi.encodePacked("https://ipfs.infura.io/ipfs/", _filePath)
        );
        fileInfo.saver = payable(msg.sender);
        aFile[id] = fileInfo;
        files.push(fileInfo);
    }

    function displayFile() public view returns (FileInfo[] memory) {
        return files;
    }

    function payment() public payable {
        require(msg.sender != owner, "You can't transfer to yourself");
        (bool successful, bytes memory data) = owner.call{value: 0.3 * 10**18}(
            ""
        );
        require(successful, "Failed to send matic");
        paidUser.push(msg.sender);
    }
}

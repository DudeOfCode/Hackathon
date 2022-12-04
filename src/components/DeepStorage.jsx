import { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
// import cors from "cors";
//const ipfsUpload = new create("https://ipfs.infura.io:5001/api/v0");
//const ipfsUploads = new create("http://localhost:5001");

//const webpack = require("webpack");
const Dstorage = require("../ERC20ABI.json");
export let Buffer = require("buffer").Buffer;
export let process = require("process/browser");
const projectId = "2I9pFSAD08o7bYa3XqY2qekLJXf";
const projectSecret = "eb8c935ffd5f6d3fe4f8db672608b1ac";
const DeepStorage = () => {
  const contractAddress = "0x126D6Ea9ba3D0968c5BF49830c8BbcEEED846F60";
  // const contractAddress = "";
  const [errorMessage, setError] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [Signer, setSigner] = useState(null);
  const [storageContract, setStorageContract] = useState(false);
  const [storageValue, setStorageValue] = useState([]);
  const [paidUsers, setPaidUsers] = useState([]);
  const [afile, addFile] = useState(null);

  const connectEthers = async () => {
    if (defaultAccount) {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
      let signer = await provider.getSigner();
      setSigner(signer);
      let contract = new ethers.Contract(contractAddress, Dstorage.abi, signer);
      setStorageContract(contract);
    }
  };
  const Connected = async () => {
    const provider = await window.ethereum;
    const account = await provider.request({ method: "eth_accounts" });
    if (account.length > 0) {
      setDefaultAccount(account[0]);
    } else {
      console.log("No acct");
    }
  };
  useEffect(() => {
    Connected();
  }, []);

  const Connect = async () => {
    if (window.ethereum) {
      const provider = await window.ethereum;
      const account = await provider.request({ method: "eth_requestAccounts" });
      if (account.length > 0) {
        setDefaultAccount(account[0]);
      } else {
        console.log("No acct");
      }
    } else {
      setError(
        "Please connect to the internet if connected ensure you have metamsk installed"
      );
    }
  };
  const chosenFile = async (e) => {
    e.preventDefault();

    const uFile = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(uFile);
    reader.onloadend = () => {
      addFile(Buffer(reader.result));
    };
  };
  const uploadFile = async (e) => {
    e.preventDefault();
    await connectEthers();
    const auth =
      "Basic " +
      Buffer.from(projectId + ":" + projectSecret).toString("base64");
    const ipfsUpload = await create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
      headers: {
        authorization: auth,
      },
    });
    const uploaded = await ipfsUpload.add(afile);
    const setPath = uploaded.path;
    await storageContract.uploadFile(
      e.target.setName.value,
      String(setPath),
      e.target.setType.value
    );
  };
  const showFiles = async (e) => {
    e.preventDefault();
    await connectEthers();
    const value = await storageContract.displayFile();
    setStorageValue(value);
  };
  const Payment = async (e) => {
    e.preventDefault();
    await connectEthers();
    await storageContract.payment();
    const paid = await storageContract.paidUser();
    setPaidUsers(paid);
  };

  return (
    <div>
      <div className="uploadhead">
        <h1>Let's begin</h1>
        <em
          style={{ textTransform: "Capitalize", transition: "ease-in" }}
          className="text-type"
        >
          <ReactTypingEffect
            text={["Who knew data storage could be this simple and efficent."]}
          ></ReactTypingEffect>
        </em>
      </div>

      <form className="uploadFile" onSubmit={uploadFile}>
        <div>
          <label> Give your file a name</label>
          <input
            id="setName"
            type="text"
            placeholder="Type the file name here"
            required
            style={{ color: "black" }}
          ></input>

          <div className="file">
            <label> Select the type of file you want to store?</label>
            <div id="setType" required>
              <input
                type="radio"
                name="radio"
                id="img"
                value="Image"
                radioGroup="hello"
              />{" "}
              <em>Image</em>
              <input type="radio" name="radio" id="file" /> <em>File</em>
              <input type="radio" name="radio" id="audio" /> <em>Audio</em>
              <input type="radio" name="radio" id="video" /> <em>Video</em>
            </div>
          </div>

          <div className="uploadbtn" onChange={chosenFile}>
            <input type="file" name="uFile" required />
            <button type={"submit"}>Upload</button>
          </div>
          <div className="preview">
            <button onClick={showFiles}>Click here to preview files.</button>
          </div>
        </div>
      </form>
      <h2>Next step</h2>
      <div className="wallet">
        <div>
          {!defaultAccount && (
            <button id="Connect" onClick={Connect}>
              Connect-Wallet
            </button>
          )}
        </div>
        <div>
          {defaultAccount && <button id="Connect">Wallet-Connected</button>}
          <h6 id="Connect">Connected Address: {defaultAccount}</h6>
          {errorMessage}
        </div>
        <div>
          <button onClick={Payment} id="Pay">
            Make Payment
          </button>
        </div>
      </div>
      <div>
        <ol>
          {storageValue.map((Files, index) => {
            if (String(Files.saver).toLowerCase() === defaultAccount) {
              return (
                <div key={index}>
                  <li>{String(Files.filePath)}</li>
                </div>
              );
            }
            return null;
          })}
        </ol>
      </div>
    </div>
  );
};
export default DeepStorage;

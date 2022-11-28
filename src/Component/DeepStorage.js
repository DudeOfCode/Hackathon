import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import cors from "cors";
// const ipfsUpload = new create('https://ipfs.infura.io:5001/api/v0');
// const ipfsUpload = new create('http://localhost:5001');

//const webpack = require('webpack');
const Dstorage = require("../Dstorage.json");
export let Buffer = require("buffer").Buffer;
export let process = require("process/browser");
const projectId = process.projectId;
const projectSecret = process.projectId;
const DeepStorage = () => {

    const contractAddress = "0x126D6Ea9ba3D0968c5BF49830c8BbcEEED846F60"
    const [errorMessage, setError] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [Provider, setProvider] = useState(null);
    const [Signer, setSigner] = useState(null);
    const [storageContract, setStorageContract] = useState(false);
    const [storageValue, setStorageValue] = useState([]);
    const [paidUsers, setPaidUsers] = useState([]);
    const [afile, addFile] = useState(null);

    const connectEthers = async () => {
        if (defaultAccount) {
            let provider = new ethers.providers.Web3Provider(window.ethereum)
            setProvider(provider);
            let signer = await provider.getSigner();
            setSigner(signer);
            let contract = new ethers.Contract(contractAddress, Dstorage.abi, signer)
            setStorageContract(contract);
        }
    }
    const Connected = async () => {
        const provider = await window.ethereum;
        const account = await provider.request({ method: "eth_accounts" });
        if (account.length > 0) {
            setDefaultAccount(account[0]);

        } else {
            console.log("No acct");
        }
    }
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
                console.log("No acct")
            }
        } else {
            setError("Please install Meta-Mask");
        }
    }
    const chosenFile = async (e) => {
        e.preventDefault();

        const uFile = e.target.files[0];
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(uFile);
        reader.onloadend = () => {
            addFile(Buffer(reader.result));
        }



    }
    const uploadFile = async (e) => {
        e.preventDefault();
        await connectEthers();
        const auth =
            'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')
        const ipfsUpload = await create({
            host: 'ipfs.infura.io',
            port: 5001,
            protocol: 'https',
            headers: {
                authorization: auth
            }
        });
        const uploaded = await ipfsUpload.add(afile);
        const setPath = uploaded.path;
        await storageContract.uploadFile(e.target.setName.value, String(setPath), e.target.setType.value);

    }
    const showFiles = async (e) => {
        e.preventDefault();
        await connectEthers();
        const value = await storageContract.displayFile();
        setStorageValue(value);

    }
    const Payment = async (e) => {
        e.preventDefault();
        await connectEthers();
    }

    return (
        <div >
            {!defaultAccount && <button id="Connect" onClick={Connect}>Connect-Wallet</button>}
            {defaultAccount && <button id="Connect">Wallet-Connected</button>}
            <h6 id="Connect">Connected Address: {defaultAccount}</h6>
            {errorMessage}
            <form onSubmit={uploadFile}>
                <input id="setName" type="text" placeholder="Type the file name here" required></input>
                <p><input id="setType" type="text" placeholder="image,video or text" required></input></p>
                <input type="file" name="uFile" onChange={chosenFile} required />
                <button type={"submit"}>Upload</button>
            </form>
            <p></p>
            <div><button onClick={Payment} id="Pay">Make Payment</button></div>
            <div><button onClick={showFiles}>Hello,They will show here!!(GetStuff)
            </button>
                {storageValue.map((Files, index) => (
                    <div key={index}>{Files.map((afileInfo, index) => (<div key={index}>{String(afileInfo.type)}</div>)
                    )}</div>
                ))}
            </div>

        </div >
    )
}
export default DeepStorage;
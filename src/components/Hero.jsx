import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import hero from './tools/hero.png';
import herosec from './tools/herosec.png';
import ReactTypingEffect from "react-typing-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const element = (
  <FontAwesomeIcon style={{ color: "white" }} icon={faAngleDown} />
);

const benefits = [
  {
    id: 1,
    h2: "Affordable",
    url: "https://img.icons8.com/external-icongeek26-glyph-icongeek26/512/external-dollar-donation-and-charity-icongeek26-glyph-icongeek26.png",
    alt: "affordabilty",
    p: "    Storing data could be really expensive, and we know this. That is why we have created an afforable rate for data storage with you in mind",
  },
  {
    id: 2,
    h2: "Security",
    url: "https://img.icons8.com/material-sharp/512/cyber-security.png",
    alt: "security",
    p: " When storing data security should not be compromised and this wepromise to keep. To ensure that your data is secured.",
  },
  {
    id: 3,
    h2: "Decentralized",
    url: "https://img.icons8.com/material-sharp/512/decentralized-network.png",
    alt: "decentralized",
    p: " Keeping data decentralized simply means there is no third party between you and data This makes it safe and secure. ",
  },
  {
    id: 4,
    h2: "Peer to peer storage",
    url: "https://img.icons8.com/external-kmg-design-glyph-kmg-design/512/external-peer-to-peer-business-startup-kmg-design-glyph-kmg-design.png",
    alt: "p2p",
    p: "DataT has joined forces with IPFs to ensure that storing of any kind of data is faster and easier",
  },
];
export default function Hero() {
  return (
    <div className="container-hero">
      <div className="hero-main">
        <div className="hero">
          <h1 className="animate__animated animate__backInLeft hero">
            Protect your data with{" "}
            <span className="hero-text">Data Technologies</span>
          </h1>
          <p className=" animate__animated animate__fadeIn">
            A decentralized web3 solution that helps you <b>Store</b>{" "}
            <b>data</b> securely
          </p>
        </div>
        <div className="img">
          <img
          src={hero}
            alt="hero img"
            className="hero-img"
          />
        </div>
      </div>

   
      <div className="main">
        <h2>The decentralized way to store data is here</h2>
        <div className="typewriter">
          <p className="typewriter">
            Storing data could never be more,{" "}
            <ReactTypingEffect text={["secure.", "reliable.", "efficent."]} />
          </p>
        </div>
      </div>
      <div className="about-container">
   
      <div className="about-us">
        <AnimationOnScroll animateIn="animate__flipInX">
          <h2>Who we are</h2>
        </AnimationOnScroll>
        <p>
          We are an <b>IPFs</b> enabled dApp (decentralized app) that simply
          helps you connect Web2 data to Web3 storage. To ensure <b>security</b>{" "}
          of your data via
          <b> decentralization.</b>{" "}
        </p>
        <p className="fact">
          According to a report published by Holon{" "}
          <q>Web 3 storage could solve the global data crisis</q> <br /> It also
          went futher to say{" "}
          <q>
            The current centralized data storage model won’t be able to handle
            future data demand
          </q>
        </p>
        <p className="fact">
          According to an article by Akash Takyar{" "}
          <q>
            Web 3 gives users full control over thier data througth
            decentralization but they retain full acces to storage and
            communication
          </q>
        </p>
        <p>
          Centralized network can be censored or mutated. As hopes are on the
          storage provider to secure data, but we can't always be sure that the
          operator would live up to this; as anything can happen. Hacking, data
          policy changes, corrupted sotware and many more. <br />
          That's why we've brought a solution that keeps you in control to help
          you secure your future by storing your data
        </p>
      </div>
      <div className="hero-image">
  <img src={herosec} alt="hero-sec" className="hero-sec"/>
</div>
      </div>
      <div className="benefits-container">
        <div className="benefits">
        <div>
                  <h2>Why Choose Us?</h2>
                </div>
          <div className="card-container">
          
            {benefits.map((item) => {
              return(
              <div className="card" key={item.id}>
               
                <div className="img-card">
                  <img src={item.url} alt={item.alt} />
                </div>
              <AnimationOnScroll animateIn="animate__flipInY">
              <h2 style={{'fontSize': '1em'}}>{item.h2}</h2>
              </AnimationOnScroll>
                <p>{item.p}</p>
              </div>
              );
            })}
            
          </div>
        </div>
      </div>

      <div className="IPFs">
        <AnimationOnScroll animateIn="animate__slideInLeft">
          {" "}
          <h2>Curious About IPFs?</h2>
        </AnimationOnScroll>
        <p>
          IPFs is simply a <b>decentralized storage network</b>.
        </p>
        <div className="">{element}</div>
        <p>
          {" "}
          When you upload a file on our website or app, it gets sent to{" "}
          <b>IPFs</b>.
        </p>
        <div className="">{element}</div>
        <p>
          <b>IPFs</b> then spilts your file into smaller bits, which are{" "}
          <b>crytographically hased</b> (meaning: have a unique ID with
          cryptography).
          <br /> After which your data tis stored with a{" "}
          <b> Content Identifier (CID). </b> This content identifier acts as the
          permanent record of your file as it exists.
        </p>
        <div className="">{element}</div>
        <p>
          Whenever you upload a new version of a file it gets a another
          cryptographic hash, after which it gets a new CID. Files stored are
          resistant to <b>tampering</b>, <b>manipulation</b> and{" "}
          <b>censorship</b>.
        </p>{" "}
        <p>
          {" "}
          Changes to any file doesn't <b>overwrite</b> the file rather it is
          stored as a new version of such file
        </p>
        <div>{element}</div>
        <p>
          To save cost files can be save cost common chunks (opt in feature that
          creates a clone file of common modules) can be reused.
        </p>
      </div>
    </div>
  );
}



const AboutUs = () => {
    return (<div>
        <div className="about-us">
            <h2>Who we are</h2>
            <p>
                We are an IPFs enabled dApp(decentralized app). We simply connect Web2
                data to WEb3 storage to ensure that your data is safe via
                decentralization{" "}
            </p>
            <p className="fact">
                According to a report published by Holon
                <q>Web3 storage could solve the global data crisis</q> <br /> It also
                went futher to say
                <q>
                    The current centralized data storage model won’t be able to handle
                    future data demand
                </q>

            </p>
            <p>The speech above made us realize that we could help make
                the storage system of the current generation better, by using
                the available web3 api (ethers),blockchain solidity and react (frontend).

            </p>
            <p className="fact">
                According to an article by Akash Takyar{" "}
                <q>
                    Web3 gives users full control over their data througth
                    decentralization but they retain full access to storage and
                    communication
                </q>
            </p>
            <p>
                Centralized network can be censored or mutated(tam,pered with). As hopes are on the
                storage provider to secure data, but we can't always be sure that the
                operator would live up to this; as anything can happen. Hacking, data
                policy changes, corrupted software and many more. <br />
                That's why we've brought a solution that keeps you in control to help
                you secure your future by storing your data.
            </p>
        </div>
    </div>)
}
export default AboutUs;
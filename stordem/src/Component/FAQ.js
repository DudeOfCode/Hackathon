import Collapsible from 'react-collapsible';
const FAQ = () => {
    return (<div>

        <div id="Faq">
            <Collapsible trigger="What types of files can I save?" >
                <p>Currently the app can only store images,video and text.</p>
            </Collapsible>
        </div>

        <div id="Faq" button>
            <Collapsible trigger="Is the number of data I can save limited?">
                <p>The storage app is totally unlimited,it is like directly storing a file in a never ending cloud</p>
            </Collapsible>
        </div>
        <div id="Faq">
            <Collapsible trigger="Do I need to connect my wallet in order to upload?">

                <p>Yes,your wallet address is basically going to be mapped to your uploaded files. </p>
            </Collapsible>
        </div>
        <div id="Faq">
            <Collapsible trigger="What is the minimum and maximum size of the files I can upload at once?">

                <p>This has no limit,it will only depend on your network connection.</p></Collapsible>
        </div>
        <div id="Faq">
            <Collapsible trigger="Does the admin have access to my stored files?">

                <p>No!! The admin has no access to anyone's data except his (if he/she wishes to store data).</p>
            </Collapsible>
        </div>


    </div>)
}
export default FAQ;
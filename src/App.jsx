import { useState } from "react"
import ChatBox from "./components/ChatBox"
import Header from "./components/Header"
import Recipient from "./components/Recipient"
import User from "./components/User"


function App() {
 
  const [headerData,setHeaderData] = useState({userName:"Unknown",lastseen:"last seen at 11:30 AM",time:"12:40"})
  const [batteryPercent,setbatteryPercent] = useState("60");
  const [mobileNetwork,setMobileNetwork] = useState("4G");
  const [userMsg,setUserMsg] = useState("");
  const [recipientMsg,setRecipientMsg] = useState("");
  const [msgList,setMsgList] = useState([])

  return (
    <>  
    <div className="h-fit bg-[#124076] p-10 pb-20">
          <h1 className="text-white font-semibold text-3xl pb-10">Fake Chat App</h1>
         <main className="flex">
         <div className="flex-1 max-w-sm">
         <User
         headerData={headerData}
         setHeaderData={setHeaderData}
         batteryPercent={batteryPercent}
         setbatteryPercent={setbatteryPercent}
         mobileNetwork={mobileNetwork}
         setMobileNetwork={setMobileNetwork}
         userMsg={userMsg}
         setUserMsg={setUserMsg}
         msgList={msgList}
         setMsgList={setMsgList}
         />
         </div>
         <div className="h-fit max-w-sm mx-auto flex-1">
             <Header
             headerData={headerData}
             batteryPercent={batteryPercent}
             mobileNetwork={mobileNetwork}
             />
             <ChatBox
             msgList={msgList}
             />
          </div>
        <div className="max-w-sm flex-1">
        <Recipient
        recipientMsg={recipientMsg}
        setRecipientMsg={setRecipientMsg}
        msgList={msgList}
        setMsgList={setMsgList}
        />
        </div>
         </main>
 
    </div>
    <footer className="bg-[#124076] p-3 text-center text-white">
          <p>CopyRights &copy; - 2024 | Developed by Sanjeev</p>
   </footer>
    </>
  )
}

export default App

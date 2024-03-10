import { useState } from "react"
import ChatBox from "./components/ChatBox"
import Header from "./components/Header"
import Recipient from "./components/Recipient"
import User from "./components/User"


function App() {
 
  const [headerData,setHeaderData] = useState({userName:"Unknown",lastseen:"last seen at 11:30 AM",time:"12:40"})
  const [batteryPercent,setbatteryPercent] = useState("60");
  const [mobileNetwork,setMobileNetwork] = useState("4G");
  return (
    <>  
    <div className="h-screen bg-[#124076] p-5">
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
         />
         </div>
         <div className="h-fit max-w-sm mx-auto flex-1">
             <Header
             headerData={headerData}
             batteryPercent={batteryPercent}
             mobileNetwork={mobileNetwork}
             />
             <ChatBox/>
          </div>
        <div className="max-w-sm flex-1">
        <Recipient/>
        </div>
         </main>
    </div>
    </>
  )
}

export default App

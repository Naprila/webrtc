import { useState } from "react"
import ParticipantSection from "./ParticipantSection";
import ChatSection from "./ChatSection";


const ContainerSection = () => {
  const [activeTab, setActiveTab] = useState<string>("Participants");


  const setParticipantsTabActive = () => {
    setActiveTab("Participants");
  }

  const setChatTabActive = () => {
    setActiveTab("Chat");
  }

  return (
    <div className=" border-l-[1.5px] border-[#212a35]  h-full bg-[#17202e]">
      <div className=" border-[#212a35] border-b-[1.5px] p-3 ">
        <div className=" flex justify-between rounded-md bg-[#25303f] p-1 items-center">
          <button className={`px-5 py-2 rounded-md ${activeTab === "Participants" ? "bg-[#2e8cff] text-white" : "bg-transparent text-[#606876]"}`} onClick={setParticipantsTabActive}>
            Participants
          </button>
          <button className={`px-5 py-2 rounded-md ${activeTab === "Chat" ? "bg-[#2e8cff] text-white" : "bg-transparent text-[#606876]"}`} onClick={setChatTabActive}>
            Chat
          </button>
        </div>
      </div>
      {
        activeTab === "Participants" ? <ParticipantSection /> :  <ChatSection />
      }
      
     
      </div>
  )
}

export default ContainerSection
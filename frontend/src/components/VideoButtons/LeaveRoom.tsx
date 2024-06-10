import { useNavigate } from "react-router-dom"


const LeaveRoom = () => {
    const navigate = useNavigate();
    const handleRoomDisconnection = () => {
        navigate("/")
    }

  return (
    <div>
        <button onClick={handleRoomDisconnection} 
        className="bg-[#ed4141] hover:bg-[#d43535] ml-4 py-3 px-4  font-extralight text-white text-sm rounded-md"
        >Leave Meeting</button>
    </div>
  )
}

export default LeaveRoom
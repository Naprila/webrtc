import Camera from "./Camera"
import LeaveRoom from "./LeaveRoom"
import Mic from "./Mic"
import SwitchToScreenSharing from "./SwitchToScreenSharing"


const VideoButtons = () => {
  return (
    <div className=" flex gap-2 bg-[#17202e] p-2">
        <Mic />
        <Camera />
        <SwitchToScreenSharing />
        <LeaveRoom />
    </div>
  )
}

export default VideoButtons
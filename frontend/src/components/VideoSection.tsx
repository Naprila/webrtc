import RoomIdLabel from "./RoomIdLabel"
import VideoButtons from "./VideoButtons/VideoButtons"


const VideoSection = ({ roomId } : {roomId: string}) => {
  return ( 
    <div className=" bg-[#101826] h-full">
      <div>
          <div className="border-[#212a35] border-b-[1.5px] p-3 py-4 flex justify-center itmes-center">
            <RoomIdLabel  roomId={roomId}/>
          </div>
          <div className=" flex justify-center items-center mt-2">
            <VideoButtons />
          </div>
      </div>
    </div>
  )
}

export default VideoSection
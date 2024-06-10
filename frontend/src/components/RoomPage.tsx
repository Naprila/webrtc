import ContainerSection from "./ContainerSection"
import VideoSection from "./VideoSection"


const RoomPage = ( { roomId} : {roomId: string} ) => {
  return (
    <div className="flex justify-between w-full h-screen">
      <div className="w-4/5">
        <VideoSection roomId={roomId} />
      </div>
      <div className="w-1/5 h-full ">
        <ContainerSection />
      </div>
    </div>
  )
}

export default RoomPage
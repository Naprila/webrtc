import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"
import { setIsRoomHost } from "../store/userInfoSlice";
import JoinRoomContent from "./JoinRoomContent";
import AudioCheckBox from "./AudioCheckBox";
import ErrorMessage from "./ErrorMessage";
import JoinRoomButtons from "./JoinRoomButtons";


const JoinRoom = () => {
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isRoomHost = useSelector((state: any) => state.userSlice.isRoomHost);

  useEffect(() => {
    const host = Boolean(searchParams.get('host')) || false;
    if( host ) {
      dispatch(setIsRoomHost(host))
    } else {
      dispatch(setIsRoomHost(false))
    }
  }, [searchParams, dispatch])

  const handleJoinRoom = () => {
    console.log("joining the room")
  }

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center pb-3 ">
      <div className=" bg-[#2f3d54] border-slate-500 border rounded-sm absolute top-56 px-24 font-light shadow-lg">
          <div className=" my-6 text-white text-lg ">
              {isRoomHost ? <p>Host a Meeting </p> : <p>Join a Meeting</p>}
          </div>
          <JoinRoomContent isRoomHost={isRoomHost}/>
          <AudioCheckBox />
          <ErrorMessage errorMessage={error}/>
          <JoinRoomButtons handleJoinRoom={handleJoinRoom} isRoomHost={isRoomHost} />
      </div>
    </div>
  )
}

export default JoinRoom
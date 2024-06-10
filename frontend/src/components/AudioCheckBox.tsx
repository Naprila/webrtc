
import { useDispatch, useSelector } from "react-redux";
import { setConnectOnlyWithAudio } from "../store/userInfoSlice";

const AudioCheckBox = () => {
    const connectOnlyWithAudio = useSelector((state: any) => state.userSlice.connectOnlyWithAudio);
    const dispatch = useDispatch();

    const handleImage = () => {
        dispatch(setConnectOnlyWithAudio(!connectOnlyWithAudio))
    }

  return (
    <div className=" flex gap-1.5 items-center text-xs mb-5">
        <div className=" w-4 h-4 border-solid border bg-zinc-600 rounded-sm" onClick={handleImage}>
            {connectOnlyWithAudio && <img src="check.png" alt="checkbox-image" className=" p-0.5 max-w-full max-h-full" />}
        </div>
        <p className=" text-white">Audio only</p>
    </div>
  )
}

export default AudioCheckBox
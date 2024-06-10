import { useNavigate } from "react-router-dom";

interface ButtonProps {
  buttonText : string;
  cancelButton?: boolean;
  onClickHandler: () => void
}

interface JoinRoomButtonsProps {
  handleJoinRoom: () => void;
  isRoomHost: boolean
}

const Button = ({ buttonText, cancelButton = false, onClickHandler} : ButtonProps) => {
  const buttonClass = cancelButton ? "bg-[#f22121] hover:bg-[#d43535]" : "bg-[#2d8cff] hover:bg-[#1a75ff]"

  return <button className={`${buttonClass}  m-4 py-0.5 px-2 font-extralight text-white rounded-md`} onClick={onClickHandler}>
    {buttonText}
  </button>
}


const JoinRoomButtons = ({ handleJoinRoom, isRoomHost}: JoinRoomButtonsProps) => {
  const successButtonText = isRoomHost ? "Host" : "Join"
  const navigate = useNavigate();

  const pushToIntroductionPage = () => {
    navigate("/")
  }

  return (
    <div className="">
      <Button buttonText={successButtonText} onClickHandler={handleJoinRoom}/>
      <Button buttonText="Cancel" cancelButton onClickHandler={pushToIntroductionPage} />
    </div>
  )
}

export default JoinRoomButtons
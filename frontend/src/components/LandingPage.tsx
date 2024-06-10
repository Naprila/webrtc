import { useNavigate } from "react-router-dom"
import Button from "./Button"
import "./LandingPage.css"

const LandingPage = () => {
    const navigate = useNavigate();

    const pushToJoinRoomAsHost = () => {
        console.log("Im in Join Room page as host")
        navigate("/join-room?host=true")
    }

    const pushToJoinRoom = () => {
        navigate("/join-room")
    }

    const pushToRandomRoom = () => {
        navigate("/")
    }

  return (
    <div className=" relative flex h-screen w-full">
        <img src="Home.png" alt="home-page-image" className=" object-cover w-full h-screen" />
        <div className="absolute flex inset-32 justify-center items-center">
            <div className=" text-white text-lg flex items-center justify-center gap-10 font-extralight">
                <div className=" flex flex-col gap-10 ">
                    <Button createRoom={false} buttonText="Join a meeting" onClickHandler={pushToJoinRoom}  />
                    <Button createRoom={true} buttonText="Create a meeting" onClickHandler={pushToJoinRoomAsHost}  />
                </div>
                <div className=" ml-20 mr-20 h-52 text-white text-xl bg-white w-[1px]"></div>
                <div className=" ">
                    <Button createRoom={false} buttonText="Talk with Strangers" onClickHandler={pushToRandomRoom}  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
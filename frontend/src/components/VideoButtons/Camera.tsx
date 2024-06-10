import { useState } from "react"


const Camera = () => {
    const [isCameraVisible, setIsCameraVisible] = useState<boolean> (false);

    const handleCameraClick = () => {
        setIsCameraVisible(!isCameraVisible)
    }

  return (
    <div className=" bg-[#25303f] hover:bg-[#4c535e] border-[#41474e] px-2 py-1 rounded-md border">
        <div className="  w-8 h-8">
            <img src={ isCameraVisible ? "camera.png" : "nocamera.png" } alt="camera-image" onClick={handleCameraClick} className="object-cover w-full h-full"/>
        </div>
    </div>
  )
}

export default Camera
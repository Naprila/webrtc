import { useState } from "react"


const SwitchToScreenSharing = () => {
    const [isScreenSharingActive, setIsScreenSharingActive] = useState<boolean> (false);

    const handleScreenShareToogle = () => {
        setIsScreenSharingActive(!isScreenSharingActive)
    }

  return (
    <div className=" bg-[#25303f] hover:bg-[#4c535e] border-[#41474e] px-2 py-1 rounded-md border">
        <div className="  w-8 h-8">
            <img src="share1.png" alt="screen-sharing-image" onClick={handleScreenShareToogle} className="object-cover w-full h-full"/>
        </div>
    </div>
  )
}

export default SwitchToScreenSharing
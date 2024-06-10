import { useState } from "react";


const Mic = () => {
    const [isMicMuted, setIsMicMuted] = useState<boolean> (false);

    const handleMicClick = () => {
        setIsMicMuted(!isMicMuted);
    }

  return (
    <div className=" bg-[#25303f] hover:bg-[#4c535e] border-[#41474e] px-2 py-1 rounded-md border">
        <div className="  w-8 h-8">
            <img src={ isMicMuted ? "mic.png" : "micoff.png" } alt="mic-image" onClick={handleMicClick} className="object-cover w-full h-full"/>
        </div>
    </div>
  )
}

export default Mic
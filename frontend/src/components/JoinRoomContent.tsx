import React, { useState } from "react"

interface isRoomHostProps {
  isRoomHost: boolean
}

const JoinRoomContent = ({isRoomHost} : isRoomHostProps) => {
  const [username, setUsername] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleRoomId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomId(e.target.value)
  }

  return (
    <div className=" mt-3 gap-3 flex flex-col mb-5">
        <input type="text" placeholder="Enter your Username" value={username} onChange={handleUsername} className=" border-zinc-400 border bg-transparent text-sm px-1 text-white rounded-sm focus:outline-none focus:border-sky-400"/>
        {
          !isRoomHost &&  (
          <input type="text" placeholder="Enter Room id" value={roomId} onChange={handleRoomId} className=" border-zinc-400 border bg-transparent text-sm px-1 text-white rounded-sm focus:outline-none focus:border-sky-400"/>
        )
        }
    </div>
  )
}

export default JoinRoomContent
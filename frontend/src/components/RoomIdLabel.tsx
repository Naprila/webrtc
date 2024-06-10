

const RoomIdLabel = ( { roomId } : {roomId: string}) => {

    const copyToClipboard = () => {

    }

  return (
    <button className=" text-white px-5 py-2 rounded-md bg-[#2e8cff] hover:bg-[#177bf5]" onClick={copyToClipboard}>Room Id: {roomId}</button>
  )
}

export default RoomIdLabel
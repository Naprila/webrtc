

const participants = [
  {
    identity: "Me",
  },
  {
    identity: "Catherine",
  },
  {
    identity: "Park Choo"
  }
]

// to do put a profile picture aling with status of mic and camera
const Participant = ({ name } : {name : string}) => {
  return <div className=" flex justify-between text-[#606876]  bg-[#25303f] p-2 m-3 rounded-lg">
      <div className="">
        { name }
      </div>
      <div className="flex gap-1 ">
        <div className=" w-5 h-5 ">
          <img src="micoff.png" alt="mic-image" className=" object-cover w-full h-full"/>
        </div>
        <div className=" w-5 h-5 ">
          <img src="nocamera.png" alt="camera-image" className=" object-cover w-full h-full"/>
        </div>
      </div>
    </div>
}


const ParticipantSection = () => {
  return (
    <div className= "rounded-lg">
      {
        participants.map((participant) => {
          return <Participant key={participant.identity} name={participant.identity} />
        })
      }
      </div>
  )
}

export default ParticipantSection
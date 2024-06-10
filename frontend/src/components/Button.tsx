

interface buttonProps {
    createRoom: boolean;
    buttonText: String;
    onClickHandler: () => void

}

const Button = ({ createRoom = false, buttonText, onClickHandler}: buttonProps) => {

    const buttonClass = createRoom ? "neonRedText" : "neonBlueText"

  return (
    <button className={buttonClass} onClick={onClickHandler}> {buttonText} </button>
  )
}

export default Button
import React from "react"

type BottonPropsType = {
    name: string
    callback: () => void
    disabled?: boolean
}
const Button: React.FC<BottonPropsType> = (props) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
    )
}
export default Button
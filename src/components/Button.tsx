interface buttonProps{
    className?: string,
    children?: any
    title?: string
    type?: string
    onClick?: () => void
}

export default function Button(props:buttonProps){
    return (
        <button
            className={` ${props.className}`}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}
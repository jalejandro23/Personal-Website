import './Sample.css'

function Sample(props) {
    return (
        <>
            <div>
                About Me!:
            </div>
            <p>{props.name}</p>
            <p>{props.name2}</p>
            <p>{props.name3}</p>
            <p>{props.name4}</p>
        </>
    )
}

export default Sample
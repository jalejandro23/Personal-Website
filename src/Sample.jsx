import './Sample.css'

function Sample(props) {
    return (
        <>
            <div>
                Relevant Courses:
            </div>
            <p>{props.name}</p>
            <p>{props.name2}</p>
        </>
    )
}

export default Sample
const Greet = (props) => {
    return (
    <div>
    <h1>{props.greeter} {props.name}!</h1>
    {props.children}
    </div>
    )
}

export default Greet
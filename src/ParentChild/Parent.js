

 

function Parent(props){
    const {children} = props
    const {name} = props
    let number = 28
    return (
        <>
        <div>
            I am a parent {name}
        </div>
        {children} {/* TO SHOW CHILD BELOW DIV OF PARENT*/}
        {number}
        </>
    )
}
export default Parent;
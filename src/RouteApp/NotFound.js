import { useNavigate } from "react-router"

function NotFound(){
    const navigate = useNavigate();
    return(
<>
<h1>Not Found</h1>
<p>Unfortunately the page your looking for has been moved or deleted</p>
<button onClick={()=>{navigate("/")}}>Navigate to the home page</button>
</>
    )
       
}
export default NotFound;
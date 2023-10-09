import { useSelector } from "react-redux";

function ExampleComponent(){
   const toggleValue = useSelector((store)=>store?.toggle);

   const color = toggleValue ? "black":"white";

   return(
    <>
    Example document
    <div style={{width:"100%", height:"100%", marginBottom:"50px", backgroundColor:color}}>
        shdsdkansm
    </div>
    </>
   )


}
export default ExampleComponent;
import { useSearchParams } from "react-router-dom";
import Dog from "./Animal/Dog";
import Lion from "./Animal/Lion";

function Animal(){
    const params = useSearchParams();

    const animalToDisplay = params[0].get("type");

    if(animalToDisplay === 'dog'){

    }
    return(
        <>
        <h1>Animals</h1>
        {animalToDisplay==='dog' && <Dog />}
        {animalToDisplay==='lion' && <Lion />}
        {animalToDisplay !=="dog" && animalToDisplay!=="lion" &&(<div></div>)}
        </>
    )
}

export default Animal;

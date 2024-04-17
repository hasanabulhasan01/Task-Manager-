import'./index.css'
import { useParams } from "react-router-dom";


function Tasks(){

    let {id} = useParams()
    console.log("id...", id)
    return(
        <h1>Task Page</h1>
    )
}

export default Tasks;
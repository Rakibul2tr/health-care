import { useContext } from "react"
import { Mycontext } from "./ContextProvider"


const UseContext=()=>{
    return useContext(Mycontext);
}
export default UseContext;
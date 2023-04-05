import { createContext, useContext,useState,useEffect} from "react";
import useCreateDate from "./useCreateDate";
import { useRouter } from "next/router"
import {v4 as uuid} from 'uuid'


const noteContext = createContext()

export const NoteContextProvider = ({children}) => {
  const router = useRouter()
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [notes, setNotes] = useState([])

 const date = useCreateDate()
  const handleSubmit = (e,title,setTitle,details,setDetails,notes,setNotes) => {
    e.preventDefault()
    if(title && details){
      const date = new Date()
      const note = {id:uuid(),title,details,date}
      console.log(note);
      setNotes((prev) => [...prev,note])
    //   router.push('/')
    }
    console.log(handleSubmit);
}
// useEffect(() => {
//       localStorage.setItem("notes",JSON.stringify(notes))
//   }, [notes])
    return(
        <noteContext.Provider value={{title,setTitle,details,setDetails,notes,setNotes,handleSubmit}}>
            {children}
        </noteContext.Provider>
    )
}

export const useNoteContext = () => useContext(noteContext)
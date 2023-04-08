import Link from "next/link"
import { useRouter } from "next/router"
import {IoIosArrowBack} from 'react-icons/io'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import { useNoteContext } from "../NoteContext"

const EditNote = () => {
  const {note,setNote,deleteNote   } = useNoteContext()
  const router = useRouter()
  const idx = router.query.id

  // const deleteNote = () => {
  //   const selectedNote = note.filter(note => note.id == idx)
  //   console.log(selectedNote);
  //   note.splice(selectedNote,1)
  // }
  console.log(idx);
  return (
    <div className=" bg-black text-white h-full p-4 md:m-auto md:w-1/2  ">
    <header className="w-full flex items-center justify-between ">
      <Link href='/'>
        <button className="text-xl bg-gray-700 p-2 rounded-md"><IoIosArrowBack/></button>
      </Link> 

      <button className="bg-purple-700 py-2 px-4 rounded-md text-sm font-medium ">Save</button>
      <button className="bg-red-600 p-2 text-lg rounded-md" onClick={deleteNote}><RiDeleteBin6Fill/></button>
    </header>

    <form action="" className="flex flex-col gap-4 mt-8">
      <input type="text" placeholder="Title" autoFocus className="bg-transparent border-none outline-none text-3xl text-gray-200"/>
      <textarea  rows="28" placeholder="Note Details..."
      className="bg-transparent border-none outline-none text-sm text-gray-200"></textarea>
    </form>
    Hello link
    <p>{idx}</p>
  </div>
  )
}
export default EditNote






// export async function getServerSideProps({params}){
  
//   const {id} = params
//   const data = fetch(`http://localhost:3000/editNote/${id}`)
//   console.log(params);
//   return {
//     props:{
//       data:data
//     },
//   }
// }
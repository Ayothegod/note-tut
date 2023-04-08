import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { v4 as uuid } from "uuid";
import useCreateDate from "../components/useCreateDate";
import { useRouter } from "next/router";
import { useNoteContext } from "@/pages/NoteContext";

const CreateNote = () => {
  const {
    title,
    setTitle,
    details,
    setDetails,
    note,
    setNote,
    handleSubmit,
  } = useNoteContext();
  // const router = useRouter()
  // const [title,setTitle] = useState("")
  // const [details,setDetails] = useState("")
  // const [notes,setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])

  // const date = useCreateDate()
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if(title && details){
  //     const date = new Date()
  //     const note = {id:uuid(),title,details,date}
  //     console.log(note);
  //     setNotes((prev) => [...prev,note])
  //     router.push('/')
  //   }
  // }
  // useEffect(() => {
  //     localStorage.setItem("notes",JSON.stringify(notes))
  // }, [notes])

  return (
    <div className=" bg-black text-white h-full p-4 md:m-auto md:w-1/2  ">
      <header className="w-full flex items-center justify-between ">
        <Link href="/">
          <button className="text-xl bg-gray-700 p-2 rounded-md">
            <IoIosArrowBack />
          </button>
        </Link>
        <button
          className="bg-purple-700 py-2 px-4 rounded-md text-sm font-medium "
          onClick={handleSubmit}
        >
          Save
        </button>
      </header>
      <form className="flex flex-col gap-4 mt-8">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          autoFocus
          className="bg-transparent border-none outline-none text-3xl text-gray-200"
        />
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows="28"
          placeholder="Note Details..."
          className="bg-transparent border-none outline-none text-sm text-gray-200"
        ></textarea>
      </form>
    </div>
  );
};

export default CreateNote;

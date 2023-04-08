import { createContext, useContext, useState, useEffect } from "react";
import useCreateDate from "../components/useCreateDate";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";

const noteContext = createContext(null);

export const NoteContextProvider = ({ children }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [note, setNote] = useState([])
    useEffect(() => {
    const noteFromLocalStorage = localStorage.getItem('notes')

    const parsedNote =
      noteFromLocalStorage !== null
      ? JSON.parse(noteFromLocalStorage)
      : []

    setNote(parsedNote)
  }, [])
  useEffect(() => {
  if (note.length === 0) return
  localStorage.setItem('notes', JSON.stringify(note))
}, [note])

  const date = useCreateDate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const note = { id: uuid(), date, title, details };
      console.log(note);
      setNote((prev) => [...prev, note]);
      console.log(note);
      router.push("/");
    }
  };
  const idx = router.query.id

//   const index = getLocalStorage
//                 .findIndex(user => return user == id_of_the_user_to_remove);
// remove that element from the array

// getLocalStorage.splice(index, 1);

// Save the getLocalStorage back to local storage

// localStorage.setItem('users', JSON.stringify(getLocalStorage));

   const deleteNote = () => {
    const storageNote = JSON.parse(localStorage.getItem("notes"))
    const selectedNote = note.filter(note => note.id == idx)
    // const selectedNote = note.filter(note => note.id == idx)
    console.log(selectedNote);
    console.log({"note":storageNote});
    note.splice(selectedNote,1)
  }

  const value = {
    title,
    setTitle,
    details,
    setDetails,
    note,
    setNote,
    handleSubmit,
    deleteNote
  };
  return <noteContext.Provider value={value}>{children}</noteContext.Provider>;
};

export const useNoteContext = () => useContext(noteContext);

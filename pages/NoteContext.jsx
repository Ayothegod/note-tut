import { createContext, useContext, useState, useEffect } from "react";
import useCreateDate from "../components/useCreateDate";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";

const noteContext = createContext(null);

export const NoteContextProvider = ({ children }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [note, setNote] = useState([]);
  const date = useCreateDate();
  const idx = router.query.id;

  useEffect(() => {
    const noteFromLocalStorage = localStorage.getItem("notes");
    const parsedNote =
      noteFromLocalStorage !== null ? JSON.parse(noteFromLocalStorage) : [];
    setNote(parsedNote);
  }, []);

  useEffect(() => {
    if (note.length === 0) return;
    localStorage.setItem("notes", JSON.stringify(note));
  }, [note]);

  //create note
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const note = { id: uuid(), date, title, details };
      console.log(note);
      setNote((prev) => [...prev, note]);
      setTitle("");
      setDetails("");
      console.log(note);
      router.push("/");
    }
  };

  //delete note
  const deleteNote = () => {
    const storageNote = JSON.parse(localStorage.getItem("notes"));
    const index = storageNote.filter((note) => note.id == idx);
    console.log(index);
    storageNote.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(storageNote));
    router.push("/");
  };

  const value = {
    title,
    setTitle,
    details,
    setDetails,
    note,
    setNote,
    handleSubmit,
    deleteNote,
  };
  return <noteContext.Provider value={value}>{children}</noteContext.Provider>;
};

export const useNoteContext = () => useContext(noteContext);

import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useNoteContext } from "../../components/NoteContext";
import { useState, useEffect } from "react";
import useCreateDate from "@/components/useCreateDate";
import Head from "next/head";

const EditNote = () => {
  const router = useRouter();
  const idx = router.query.id;
  const { note, setNote, deleteNote } = useNoteContext();
  const date = useCreateDate();
  const notes = note.find((note) => note.id === idx);
  const [title, setTitle] = useState(notes?.title || "Your Title Here");
  const [details, setDetails] = useState(notes?.details || "Your details Here");
  console.log(title, details);

  const saveEdit = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = { ...notes, title, details, date };
      const newNotes = note.map((item) => {
        if (item.id == idx) {
          item = newNote;
        }
        return item;
      });
      setNote(newNotes);
    }
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Notes App | edit-note</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black">


      <div className=" md:w-2/3 text-white h-full p-4 md:m-auto  ">
        <header className="w-full flex items-center justify-between pb-4 border-b border-b-neutral-800">
          <Link href="/">
            <button className="text-xl bg-gray-700 p-2 rounded-md">
              <IoIosArrowBack />
            </button>
          </Link>

          <button
            className="bg-purple-700 py-2 px-4 rounded-md text-sm font-medium "
            onClick={saveEdit}
          >
            Save
          </button>
          <button
            className="bg-red-600 p-2 text-lg rounded-md"
            onClick={deleteNote}
          >
            <RiDeleteBin6Fill />
          </button>
        </header>
        <form action="" className="flex flex-col gap-4 mt-8">
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
            </main>
    </>
  );
};
export default EditNote;

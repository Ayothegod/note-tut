import Head from "next/head";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import NoteItem from "@/components/NoteItem";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useNoteContext } from "@/pages/NoteContext";

export default function Home() {
  const { note } = useNoteContext();
  return (
    <>
      <Head>
        <title>Notes App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full bg-black ">
      <div className=" bg-black text-white min-h-screen p-4 md:m-auto md:w-2/3 relative">
        <header className=" w-full flex items-center justify-between ">
          <p className="font-semibold text-2xl ">My Notes</p>

          <button className=" bg-gray-700 text-lg p-2 rounded-lg ">
            <FaSearch />
          </button>
        </header>
        <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {note.map((note) => (
            <NoteItem key={note.id} item={note} />
          ))}
        </section>

        <Link href="/createNote">
          <button className="bg-gray-700 p-2 rounded-md text-xl  bottom-6 right-6 fixed ">
            <FaPlus />
          </button>
        </Link>
      </div>
      </main>
    </>
  );
}

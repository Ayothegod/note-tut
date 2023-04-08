import { NoteContextProvider } from "@/pages/NoteContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NoteContextProvider>
      <Component {...pageProps} />
    </NoteContextProvider>
  );
}

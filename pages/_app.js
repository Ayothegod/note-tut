import { NoteContextProvider } from "@/components/NoteContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NoteContextProvider>
      <Component {...pageProps} />
    </NoteContextProvider>
  );
}

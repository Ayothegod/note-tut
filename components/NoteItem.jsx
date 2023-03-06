import Link from "next/link"

const NoteItem = ({item}) => {
  return (
    <Link href={`/editNote/${item.id}`} className=' bg-purple-700 p-4 ' >
        <p>{item.title.length > 40 ? (item.title.substr(0,40)) + '...' : item.title}</p>
        <p className="mt-4 font-medium text-xs text-gray-400">{item.date}</p>
    </Link>
  )
}

export default NoteItem
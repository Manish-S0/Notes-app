
import { MdOutlinePushPin,MdCreate,MdDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date, content, tags, isPinned, onEdit, onDelete, onPinNote,
}) => {
  return (
    <div className="border rounded bg-white p-4 hover:shadow-lg transition-all ease-in-out">
      <div className="flex justify-between items-center">
        <div>
          <h2 className='text-sm font-medium'>{title}</h2>
          <span className='text-xs text-slate-500'>{date}</span>
        </div>

        <MdOutlinePushPin className={`icon-btn ${isPinned ? "text-primary" : "text-slate-300"}`} onClick={onPinNote}/>
      </div>

      <p className='text-xs text-slate-500 mt-2'>{content}</p>
      <div className="flex justify-between items-center mt-2">

        <div className="text-xs text-slate-500">{tags}</div>
        <div className='flex gap-2 flex-wrap'>
          <MdCreate className='text-slate-500' onClick={onEdit}/>
          <MdDelete className='text-slate-500' onClick={onDelete}/>
        </div>
      </div>

      {/* <div className='flex gap-1 flex-wrap'>
        {tags.map((tag, index) => (
          <span
            key={index} 
            className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full"
          >
            {tag} 
          </span>
        ))}
      </div> */}
    </div>
  )
}

export default NoteCard
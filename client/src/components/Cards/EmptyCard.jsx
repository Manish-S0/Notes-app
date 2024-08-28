
// import AddNoteImg from '../../assets/addnotes.png'
import AddNoteImg from '../../assets/addnote.svg'
const EmptyCard = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-8'>
      <img src={AddNoteImg} alt="No notes" className='w-1/2 h-[300px] mx-auto'/>
      <p className='w-1/2 text-sm font-medium text-slate-500 text-center leading-7 mx-auto mt-5'> Create your first note! Click the &quot;+&quot; button to get started </p>
    </div>
  )
}

export default EmptyCard
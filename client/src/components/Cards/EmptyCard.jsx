
// import AddNoteImg from '../../assets/addnotes.png'
import AddNoteImg from '../../assets/addnote.svg'
import NoNotes from '../../assets/no-records-found.png'
const EmptyCard = (isSearch) => {
  return (
    <div className='flex flex-col items-center justify-center mt-8'>
      {isSearch?

      (<>
      <img src={NoNotes} alt="No notes" className='w-1.5/2 h-[300px] mx-auto'/>
        <p className='w-1/2 text-sm font-medium text-slate-500 text-center leading-7 mx-auto mt-5'>No notes found</p>
      </>
      ):
      ( <>
      <img src={AddNoteImg} alt="No notes" className='w-1/2 h-[300px] mx-auto'/>
      <p className='w-1/2 text-sm font-medium text-slate-500 text-center leading-7 mx-auto mt-5'> Create your first note! Click the &quot;+&quot; button to get started </p>
      </>
      )}
    </div>
  )
}

export default EmptyCard
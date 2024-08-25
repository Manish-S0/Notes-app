import { useState } from "react"
import Navbar from "../../components/Navbar"
import NoteCard from "../../components/Cards/NoteCard"
import { MdAdd } from "react-icons/md"
import AddEditNotes from "./AddEditNotes"
import Modal from "react-modal"

const Home = () => {
  const [showEditModal, setShowEditModal] = useState({isShown:false,
    type:'add',
    data:null,

  })

  return (
    <>
      <Navbar/>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-6">
          <NoteCard title='Note 1'  
            content='Note 1 content' 
            date={new Date().toDateString()} 
            tags={['first1', 'tag2']}
            isPinned={true}
            onPinNote={() => {}}
            onDelete={() => {}}
            onEdit={() => {}} 
          />
        </div>
      </div>
      <button className="w-15 h-15 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10" 
      onClick={() => {setShowEditModal({isShown:true, type:'add', data:null})}}>

        <MdAdd className="text-[30px] text-white"/>
        
      </button>

      <Modal 
        isOpen={showEditModal.isShown}
        onClose={() => setShowEditModal({isShown:false})}
        type={showEditModal.type}
        data={showEditModal.data}
        style={{overlay:{
          backgroundColor:'rgba(0,0,0,0.5)',
        },}}
        content=""
        className="w-[40%] max-h-3/4 bg-white rounded-md p-4 mt-14 mx-auto "
      >
        <AddEditNotes onClose={() => setShowEditModal({isShown:false, type:'add', data:null})} 
        type={showEditModal.type} 
        data={showEditModal.data}/>
      </Modal>

      
    </>
  )
}

export default Home
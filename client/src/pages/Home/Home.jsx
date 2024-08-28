import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import NoteCard from "../../components/Cards/NoteCard"
import { MdAdd } from "react-icons/md"
import AddEditNotes from "./AddEditNotes"
import Modal from "react-modal"
import { axiosInstance } from "../../utils/axiosInstance"
import { useNavigate } from "react-router-dom"



const Home = () => {
  const [showEditModal, setShowEditModal] = useState({isShown:false,
    type:'add',
    data:null,

  })

//user api integraiton
  const[user,setUser]=useState(null)
  const [notes, setNotes] = useState([]);
  const navigate=useNavigate()
  const [loading, setLoading] = useState(true);


  const handleEdit=(noteDetails)=>{
    setShowEditModal({
      isShown:true,
      type:'edit',
      data:noteDetails 
    })

  }

 
    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get('/api/users/me', {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        setUser(res.data);
      } catch (err) {
        if (err.res && err.res.data && err.res.data.message) {
          console.log(err.res.data.message);
          navigate('/login');
        } else {
          console.log('Something went wrong');
        }
      }
      finally {
        setLoading(false);
      }
    };

    const fetchNotes = async () => {
      try {
        const res = await axiosInstance.get('/api/notes', {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        setNotes(res.data);
      } catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchUser();
      fetchNotes();
    }, []);

    
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar user={user}/>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-6">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              title={note.title}
              content={note.content}
              date={new Date(note.createdAt).toDateString()} 
              isPinned={note.isPinned}
              onPinNote={() => {}}
              onDelete={() => {}}
              onEdit={() => handleEdit(note)}
            />
          ))}
          
        </div>
      </div>
      <button className="w-15 h-15 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10" 
      onClick={() => {setShowEditModal({isShown:true, type:'add', data:null})}}>

        <MdAdd className="text-[30px] text-white"/>
        
      </button>

      <Modal ariaHideApp={false}
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
        noteData={showEditModal.data}
        fetchNotes={fetchNotes}/>
      </Modal>

      
    </>
  )
}

export default Home
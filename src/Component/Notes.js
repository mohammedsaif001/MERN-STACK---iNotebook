import React,{useContext,useEffect} from 'react';
import noteContext from '../Context/Notes/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';

export default function Notes() {
    const context = useContext(noteContext);
  const {notes,getNotes} = context;
  useEffect(() => {
      getNotes()
   
  }, []);
  

  return <>
      <AddNote/>
      <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((notes) =>{
        return <Noteitem key={notes._id} notes={notes}/>
      })}
    </div>
  </>;
}

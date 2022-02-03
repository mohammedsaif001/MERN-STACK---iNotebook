import React, { useContext,useState } from 'react';
import noteContext from '../Context/Notes/noteContext';


export default function AddNote() {
    const context = useContext(noteContext);
    const {addNote } = context;
    const [note, setnote] = useState({title:"",description:"",tag:""});

    const handleClick = (e)=>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag);
        setnote({title:"",description:"",tag:""})
    }
    const onChange = (e)=>{
        setnote({...note,[e.target.name]:e.target.value}) //Change the name of title and description to the given value
    }

    return <div className="container my-3">
        <h2>Add a NOTE</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" value={note.title} name="title" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text"  value={note.description}className="form-control" id="description " onChange={onChange} name='description' minLength={5} required />
            </div>
            <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" value={note.tag} className="form-control" id="tag" name="tag" onChange={onChange} minLength={5} required/>
            </div>
            <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
    </div>;
}

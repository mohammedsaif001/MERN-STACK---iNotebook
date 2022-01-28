import React, { useContext,useState } from 'react';
import noteContext from '../Context/Notes/noteContext';


export default function AddNote() {
    const context = useContext(noteContext);
    const {addNote } = context;
    const [note, setnote] = useState({title:"",description:"",tag:"default"});

    const handleClick = (e)=>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag);
    }
    const onChange = (e)=>{
        setnote({...note,[e.target.name]:e.target.value}) //Change the name of title and description to the given value
    }

    return <div className="container my-3">
        <h2>Add a NOTE</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description " onChange={onChange} name='description' />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={onChange}/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
        </form>
    </div>;
}

import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "61f289bdf6f59a03fb58667e",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
        },
        {
            "_id": "61f289bdf6f59a03fb58667e1",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
        },
        {
            "_id": "61f289bdf6f59a03fb58667e2",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
        },
        {
            "_id": "61f289bdf6f59a03fb58667e3",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
        },
        {
            "_id": "61f289bdf6f59a03fb58667e4",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
        },
        {
            "_id": "61f289bdf6f59a03fb58667e5",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
        },
        {
            "_id": "61f289bdf6f59a03fb58667e6",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
        },
        {
            "_id": "61f289bdf6f59a03fb58667e7",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
        },
        {
            "_id": "61f289bdf6f59a03fb58667e8",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
        },
        {
            "_id": "61f289bdf6f59a03fb586678e",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
        }


    ]
    const [notes, setnotes] = useState(notesInitial);

    //Add a Note
    const addNote = (title,description,tag) => {
        //TODO: API CALL
        console.log("Adding a New Node")
        const note = {
            "_id": "61f289bdf6f59a03fb586678e",
            "user": "61f18061abfd071b339ab754",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
        }
        setnotes(notes.concat(note))
    }

    //Delete a Note
    const deleteNote = () => {

    }
    //Edit a Note
    const updateNote = () => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote,updateNote}}>
            {props.children};
        </NoteContext.Provider>
    )
}

export default NoteState;
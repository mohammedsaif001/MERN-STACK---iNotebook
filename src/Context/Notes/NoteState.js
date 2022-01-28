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
            "_id": "61f289bdf6f59a03fb58667e",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
          },
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
            "_id": "61f289bdf6f59a03fb58667e",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
          },
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
            "_id": "61f289bdf6f59a03fb58667e",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
          },
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
            "_id": "61f289bdf6f59a03fb58667e",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
          },
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
            "_id": "61f289bdf6f59a03fb58667e",
            "user": "61f18061abfd071b339ab754",
            "title": "New Movie",
            "description": "Pushpa RAj",
            "tag": "films",
            "date": "2022-01-27T12:02:05.566Z",
            "__v": 0
          }

          
    ]
    const [notes, setnotes] = useState(notesInitial);
    

    return (
        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children};
        </NoteContext.Provider>
    )
}

export default NoteState;
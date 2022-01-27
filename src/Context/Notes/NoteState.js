import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name" : "saif",
        "class" : "7cse7"
    }
    const [state, setstate] = useState(s1);

    const update = () => {
        setTimeout(() => {
            return setstate({
                "name" : "Villain",
                "class" : "A Different World"
            })
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children};
        </NoteContext.Provider>
    )
}

export default NoteState;
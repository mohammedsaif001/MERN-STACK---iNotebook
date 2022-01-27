import React,{useContext, useEffect} from 'react';
import noteContext from '../Context/Notes/noteContext';

export default function About() {
  const a = useContext(noteContext)
  useEffect(() => {
   a.update();
   // eslint-disable-next-line
  }, []);
  
  return <div>
      This is About {a.state.name} &amp; He is in {a.state.class}
  </div>;
}

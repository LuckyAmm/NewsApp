import React,{useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    })
    const [styleMode, setStyleMode] = useState('Dark')

    const toggleStyle = () => {
        if (myStyle.backgroundColor === 'white') {
            setMyStyle({
              color: "white",
              backgroundColor: "black",
            });
            setStyleMode('Light');
        }
        else {
            setMyStyle({
              color: "black",
              backgroundColor: "white",
            });
            setStyleMode("Dark");

        }
    }

  return (
    <div className="w-[60vw] p-4 flex flex-col gap-5  m-auto" style={myStyle}>
      <h1 className="text-3xl"> About Us</h1>
      <div className="flex flex-col gap-5">
        <div className="border-2 p-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, ut?
        </div>
        <div className="border-2 p-1">Lorem, ipsum.</div>
        <div className="border-2 p-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          veniam ipsa, dolores deleniti consequuntur fuga pariatur
          exercitationem. Id, assumenda nesciunt.
        </div>
      </div>
      <button onClick={toggleStyle}>Enable {styleMode} Mode</button>
    </div>
  );
}

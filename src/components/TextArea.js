import React,{useState} from 'react'

export default function TextArea(props) {
    let [text, setText] = useState('Enter Something');
  const toUpperCase = () => {
    let convertedText = text.toUpperCase();
        setText(convertedText);
  }
  const toLowerCase = () => {
    let convertedText = text.toLowerCase();
        setText(convertedText);
  }
    const handleChange=(event)=>{
        setText (event.target.value);
  }
  
    let btnStyle = 'px-3 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 mx-2 ';

  return (
    <div className="w-[60%] my-10 mx-auto flex flex-col gap-5">
      <h1 className="font-bold text-3xl">{props.name}</h1>
      <textarea
        className="border-black border-2 rounded-xl w-full min-h-[200px] max-h-[350px] p-2"
        value={text}
        onChange={handleChange}
        rows="10"
      ></textarea>
      <div>
        <button className={btnStyle} onClick={toUpperCase}>
          Convert UpperCase
        </button>
        <button className={btnStyle} onClick={toLowerCase}>
          Convert LowerCase
        </button>
        <button className={btnStyle}>Remove ExtraSpaces</button>
      </div>
      <div className="">
        <h3 className="text-2xl">Preview</h3>
        <div>{!text?"Enter Something in Textarea":text}</div>
      </div>
    </div>
  );
}

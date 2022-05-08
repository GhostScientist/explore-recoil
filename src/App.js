import './App.css';
import { useRecoilState, atom } from 'recoil';

function App() {
  return (
    <div className="App">
      <TextInput />
    </div>
  );
}

const textState = atom({key: 'textState', default: ''});

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default App;

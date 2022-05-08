import './App.css';
import { useRecoilState, useRecoilValue, atom, selector } from 'recoil';

function App() {
  return (
    <div className="App">
      <TextInput />
      <CharacterCount />
    </div>
  );
}

const textState = atom({ key: 'textState', default: '' });

const charCountState = selector({
  key: 'charCountState', get: ({ get }) => {
    const text = get(textState);
    return text.length;
  }
});

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

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return (
    <div>
      Character count: {count}
    </div> 
  );
}

export default App;

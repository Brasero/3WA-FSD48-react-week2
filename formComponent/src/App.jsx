import './App.css'
import {useState} from "react";

function App() {

  const [value, setValue] = useState('')
  const [select, setSelect] = useState('1')
  const [select2, setSelect2] = useState(['2', '1'])
  const [text, setText] = useState("")
  const [check, setCheck] = useState(true);

  const handleCheckChange = () => {
    setCheck(!check)
  }
  const handleInputChange = (e) => {
    const {value} = e.target
    setValue(value.toUpperCase())
  }

  const handleSelectChange = (e) => {
    const {value} = e.target
    setSelect(value)
  }

  const handleSelectMultChange = (e) => {
    const {value} = e.target
    const state = [...select2]
    if(select2.includes(value)) {
      const index = state.findIndex((val) =>  val === value)
      state.splice(index, 1)
      setSelect2(state)
    }
    else {
      state.push(value)
      setSelect2(state)
    }
  }

  return (
      <form>
        <input type={'text'} value={value} onChange={handleInputChange}/>
        <select name={'select'} value={select} onChange={handleSelectChange}>
          <option value={'2'}>2</option>
          <option value={'1'}>1</option>
        </select>
        <select name={'select2'} multiple={true} value={select2} onChange={handleSelectMultChange}>
          <option value={'2'}>2</option>
          <option value={'1'}>1</option>
          <option value={'4'}>4</option>
          <option value={'5'}>5</option>
        </select>

        <textarea value={text} onChange={(e) => {setText(e.target.value)}}/>

        <input type={'checkbox'} checked={check} onChange={handleCheckChange} />
      </form>
  )
}

export default App
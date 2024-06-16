import {useState, useRef} from "react"
import Modal from "./components/Modal"
import Box from "./components/Box"
export default function App(){
  const[todo, setTodo] = useState([])//todo = [{boxName: "", firstEntry: ""}]
  const dialog = useRef()
  function handleClick(){
      dialog.current.open()
  }
  function handleInfo(firstEntry, boxName){
    setTodo(prevTodo => {
      
      let newTodo = [...prevTodo, {boxName, firstEntry}]
      return newTodo
    })
  }
  return(<section className="flex flex-col justify-start mt-12 items-center">
    <h1 className="mb-10 text-xl text-slate-50 ">{todo.length == 0?"Oops, seems like you have nothing to do":"Make sure you complete your Todo's"}</h1>
    <button onClick={handleClick}
     className="rounded py-2 mb-10 max-[400px]:mb-0 px-6 bg-green-300 w-fit h-fit cursor-pointer">
    Create a Todo
    </button>
    <Modal ref={dialog} handleInfo={handleInfo}/>
    <section className="flex gap-10 flex-wrap justify-center items-start m-2" >
    {todo.map((starter,ind) => <Box key={ind} info={starter} />)}
    </section>
    
    <footer className="flex flex-col gap-1 mt-20 mb-10" >
    <h2 className="text-slate-50" >Feeling bored, So am I 😅</h2>
    <p className="text-slate-300" >created by aditya/midsane</p>
    </footer>
  </section>)
}
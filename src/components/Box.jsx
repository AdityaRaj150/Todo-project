import {useState} from "react"
import deleteimg from "../assets/icons8-delete-30.png"
const todoBarsStyle = "p-3 rounded border border-slate-300 flex gap-8 justify-between items-center max-[490px]:gap-2 "
const deleteStyle = "cursor-pointer w-5 opacity-60 hover:opacity-100 hover:scale-125 transition-all ease-linear"
export default function Box({info}){
    const[boxData, setBoxData] = useState([info.firstEntry])
    const[boxName, setBoxName] = useState(info.boxName)
    function handleClick(){
        setBoxData(prevData => {
            let newData = [...prevData]
            newData.push("")
            return newData
        })

    }
    function handleOnChange(event, ind){
        setBoxData(prevData =>
            {
                let newData = [...prevData]
                newData[ind] = event.target.value
                return newData
            }
        )
    }  

        function deleteTopic(ind){
                setBoxData(prevData => {
                    let newData = []
                    for(let i=0; i<prevData.length; i++){
                        if(i != ind) newData.push(prevData[i])
                    }
                    
                    if(newData.length == 0) return null
                    return newData
                })
            
        }

        function editBoxName(event){
            setBoxName(event.target.value)
        }

    function deleteBox(){
        setBoxData(null)
    }
    if(boxData == null) return
    return(<section className="flex flex-col bg-slate-100 rounded max-[400px]:scale-[0.8] max-[350px]:scale-[0.7] ">
        <div className={`${todoBarsStyle} bg-amber-300 font-medium`}>
           <input className="bg-transparent focus:outline-none"value={boxName} onChange={editBoxName} />
            <img onClick={deleteBox} className={deleteStyle} src={deleteimg} />
          
        </div>
        {boxData == null ? "error": boxData.map((todo,ind) => <div key={ind}
        className={todoBarsStyle}>
            <input value={todo} onChange={(event) => handleOnChange(event,ind)} 
            className="bg-transparent focus:outline-none p-2 rounded-sm"/>
           
            <div onClick={handleClick} className="h-10 cursor-pointer hover:border hover:border-stone-300 rounded-full aspect-square  hover:bg-yellow-300 flex justify-center items-center ">
                <button>+</button>
            </div>
            <img onClick={() => deleteTopic(ind)}  className={deleteStyle} src={deleteimg} />
        </div>)}
    </section>)
}
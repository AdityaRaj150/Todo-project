import {useRef, forwardRef, useImperativeHandle} from "react"
const inputStyle = "bg-stone-200 rounded p-2 focus:outline-none focus:shadow-md focus:shadow-slate-300 focus:border-2 focus:border-stone-300"
export default forwardRef(function Modal({handleInfo}, ref){
    const info = useRef()
    const boxName = useRef()
    const dialog = useRef()
    
    useImperativeHandle(ref, ()=> {
        return{
            open() {
                dialog.current.showModal()
            }
        }
    })
    return(<section>
        <dialog ref={dialog} >
        <div className="flex flex-col gap-5 text-lg p-10 rounded" >
            <div className="flex justify-between">
            <label>What are you upto!</label>
            <form method="dialog"><button className="border-dotted border flex justify-center items-center border-stone-800 bg-slate-100 w-8 aspect-square rounded-full
            hover:bg-stone-800 hover:text-slate-100 transition-all ease-linear" >x</button></form>
            </div>
          
            <input className={inputStyle} ref={info} />
            <form method="dialog" onSubmit={()=>{
                handleInfo(info.current.value, boxName.current.value)
                info.current.value = ""
                boxName.current.value = ""
                }
             } >
             <div className="flex flex-col mb-5 gap-5">
                <label>Box name:</label>
                <input ref={boxName} className={inputStyle} />
             </div>
            <button className="rounded-md text-sm bg-amber-200 transition-all ease-linear hover:bg-amber-400 py-2 px-2 "
             >Create Box</button></form>
        </div>
        </dialog>
            
    </section>)
})
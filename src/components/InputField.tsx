import React from "react";

interface Props{
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    todo: string;
    handelAdd(e:React.FormEvent): void;
}
function InputField({ todo, setTodo, handelAdd }: Props) {
    return (
        <form className='input' onSubmit={handelAdd}>
            <input type="text" className="input__box" placeholder='Enter Your Task' value={todo} onChange={(e)=>setTodo(e.target.value)} />
            <button type="submit" className='input__btn'>
                <span>Go</span>
            </button>
        </form>
    )
}

export default InputField
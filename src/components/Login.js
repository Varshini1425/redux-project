import React from 'react'

import {useSelector, useDispatch} from 'react-redux';
import {setText, setNum} from '../features/userLoginSlice';

const Login = () => {
 
  const text = useSelector((state)=>state.text)
  const num = useSelector((state) => state.num)


  const dispatch = useDispatch()

  const message=()=>{
    alert("successfully submitted")
  }


  return (
    <>
    <div>
        <h1 className='text-3xl font-bold p-3 align-middle'>Hello, Welcome to the Redux page...!</h1>
        <p className='text-2xl p-3 font-semibold'>Please login to the page</p>
        <form>
            <label className=' pt-5 font-medium'>Enter your fields
                <br></br>Name:
                <input  type='text' className='text-slate-700 rounded-md m-2 font-medium' value={text} maxLength={50} onChange={(e)=>dispatch(setText(e.target.value))}></input>
                <br></br>Contact Number:
                <input  type='tel' className='text-slate-700 rounded-md m-2 font-medium' value={num} maxLength={10} onChange={(e)=>dispatch(setNum(e.target.value))}></input>
                <button className='bg-violet-300 rounded-md p-1 m-1 text-slate-700' type='submit' onClick={(e)=>{e.preventDefault(); message()}}>Submit</button>
            </label>
        </form>
    </div>
    </>
  )
}

export default Login
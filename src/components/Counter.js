import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment,decrement } from '../features/counterSlice'

const Counter = () => {

   const count = useSelector((state) => state.counter.value)
   const dispatch = useDispatch()

  return (
    <div>
        <h1 className='text-2xl'>Counter : {count}</h1>
        <button className='p-3 bg-violet-300 rounded-md text-slate-700 m-3 bg-center justify-center' onClick={()=>dispatch(increment())}>Increment</button>
        <button className='p-3 bg-violet-300 rounded-md text-slate-700 m-3 justify-center'onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
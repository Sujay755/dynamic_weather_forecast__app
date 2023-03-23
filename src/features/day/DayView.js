import React from 'react'
import { useSelector } from 'react-redux';
import Base from '../../components/Base';
import Days from '../../components/Days';

const DayView = () => {
  const days = useSelector((state)=>state.days)
  const current = useSelector((state)=>state.current)
  const time = current.location.localtime? current.location.localtime.substring(11,16) : ''

  return (
    <Base>
        <div>
            <div className={"w-full lg:w-2/4 justify-center mx-auto my-3" + (days.loading ? ' visible' : ' hidden')}>
              <h1 className="font-bold text-lg">Loading...</h1>
            </div>
            <div className={"w-full lg:w-2/4 justify-center mx-auto my-3" + (days.error ? ' visible' : ' hidden')}>
              <h1 className="font-bold text-lg">{days.error}</h1>
            </div>
            <div className='flex flex-col text-left text-sm px-5 py-5 rounded-md bg-slate-100 w-full lg:w-1/2 mx-auto mt-5 mb-2'>
                <h1 className='font-bold text-lg sm:text-xl'>Daily Weather - <span className='text-lg font-semibold'>{current.location.name}</span></h1>
                <h4 className='text-base sm:text-lg font-semibold'>As of {time}</h4>
                <hr className='mt-2'/>
            </div>
            <div>
              {days.forecastDay.map((day,index)=>(
                <Days key={index} day={day}/>
              ))}
            </div>
        </div>
    </Base>
  )
}

export default DayView;
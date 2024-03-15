'use client'
import React, { useState } from 'react';
import Table from "../Table/table"
import Cards from "./Card/cards"
import LineChart from "./Chart/line"
import BarChart from "./Chart/bar"
import PiChart from "./Chart/pi"


export default function AdminComponant(){
  return (
    <div>
      <div >
      <Cards></Cards>
      </div>
        <div className=' shadow-default mt-5'>
          <LineChart></LineChart>
        </div>
        <div className=' mt-8 gap-5 flex lg:flex-row flex-col'> 
        <div className='shadow-default rounded-xl '>
          <BarChart></BarChart>
        </div>
        <div className='shadow-default rounded-xl '>
            <PiChart></PiChart>
        </div>
        </div>
      </div>
    
  );
}



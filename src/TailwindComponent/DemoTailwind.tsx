import React from 'react'
import Table from './table';

export default function DemoTailwind() {
  return (
    <div className='container'>
      <h2 className='text-red-500 text-5xl my-4 text-center'>WELCOME TO THE CYBER FONTEND WITH TAILWIND</h2>
      <div className="grid grid-cols-3 gap-2 ">
        <Table price='123' />
        <Table price='123' /> 
        <Table price='123' />
      </div>
    </div>
  )
}

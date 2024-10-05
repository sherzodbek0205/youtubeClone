import React from 'react'
import {YoutubeOutlined} from '@ant-design/icons'
import { Input } from 'antd';
function Navbar() {
  return (
    <>
   <div className="flex items-center justify-between p-5">
   <div className='flex gap-1 items-center'>
   <YoutubeOutlined  style={{ fontSize: '45px', color: 'red' }}/>
    <h1 className=' font-bold text-[30px] text-[]'>YouTube</h1>

   </div>
   <Input type="text" placeholder="Search" style={{width:'450px'}} />
   <div></div>
   </div>

    </>
  )
}

export default Navbar;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { YoutubeOutlined } from '@ant-design/icons';
import { Input } from 'antd';

function Navbar() {
  const [value, setValue] = useState('')
	const navigate = useNavigate()

	const submitHandler = e => {
		e.preventDefault()
		if (value) {
			navigate(`/search/${value}`)
			setValue('')
		}
	}


  return (
    <>
      <div className="flex items-center justify-between p-5">
        <div className='flex gap-1 items-center'>
          <YoutubeOutlined style={{ fontSize: '45px', color: 'red' }} />
          <h1 className='font-bold text-[30px] text-[]'>YouTube</h1>
        </div>

        {/* Input with search functionality */}
        <Input
          type="text"
          placeholder="Search"
          style={{ width: '450px' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}  // Update input value
          onPressEnter={submitHandler} // Trigger search on Enter key
        />

        <div></div>
      </div>
    </>
  );
}

export default Navbar;

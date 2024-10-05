import {Routes ,Route} from 'react-router-dom';

import Main from '../components/main/main';

function Switch() {
  return (
    <>
  <Routes>

   <Route path="/" element={<Main/>}/>


  </Routes>


    </>
  )
}

export default Switch;

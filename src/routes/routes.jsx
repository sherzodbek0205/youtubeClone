import {Routes ,Route} from 'react-router-dom';

import Main from '../components/main/main';
import SearchResults from '../components/search-results/search-results';

function Switch() {
  return (
    <>
  <Routes>

   <Route path="/" element={<Main/>}/>
    <Route path="/search/:id" element={<SearchResults/>}/>



  </Routes>


    </>
  )
}

export default Switch;

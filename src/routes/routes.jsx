import {Routes ,Route} from 'react-router-dom';

import Main from '../components/main/main';
import SearchResults from '../components/search-results/search-results';

function Switch({ selectedCategory, selectedCategoryHandler, videos }) {
  return (
    <>
  <Routes>

   <Route path="/" element={<Main selectedCategory={selectedCategory} videos={videos} />}/>
    <Route path="/search/:id" element={<SearchResults selectedCategoryHandler={selectedCategoryHandler}/>}/>



  </Routes>


    </>
  )
}

export default Switch;

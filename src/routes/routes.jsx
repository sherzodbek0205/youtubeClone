import {Routes ,Route} from 'react-router-dom';

import Main from '../components/main/main';
import SearchResults from '../components/search-results/search-results';
import VideoDetail from '../components/video-detail/video-detail';

function Switch({ selectedCategory, selectedCategoryHandler, videos }) {
  return (
    <>
  <Routes>

   <Route path="/" element={<Main selectedCategory={selectedCategory} videos={videos} />}/>
    <Route path="/search/:id" element={<SearchResults selectedCategoryHandler={selectedCategoryHandler}/>}/>
    <Route path="/video/:id" element={<VideoDetail/>}/>


  </Routes>


    </>
  )
}

export default Switch;

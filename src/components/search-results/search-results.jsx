import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiService } from '../../service/api.service';
import Category from '../category/category';
import {category} from '../category/const'


function SearchResults({selectedCategoryHandler,selectedCategory}) {
 const [videos, setVideos] = useState([])
	const { id } = useParams()

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
				setVideos(data.items)
			} catch (error) {
				console.log(error)
			}
		}

		getData()
	}, [id])


  return (
    <>
      <div className='grid p-2 grid-cols-1 gap-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
      {videos.map((video) => (

 <div key={video.id.videoId} className=' flex flex-col gap-1 '>
<img src={video.snippet.thumbnails?.medium?.url || video.snippet.thumbnails?.default?.url} alt="" />
<div className='flex justify-start gap-2 p-2'>
<img className='w-[30px] h-[30px] rounded-full' src={video.snippet.thumbnails?.medium?.url} alt="" />
<div className='flex flex-col gap-2'>
 <p>{video?.snippet?.title.slice(0,50)}</p>
 <p>{video?.snippet?.channelTitle}</p>
</div>
</div>
 </div>



      ))}
      </div>
    </>
  );
}

export default SearchResults;

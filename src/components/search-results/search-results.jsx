import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiService } from '../../service/api.service';
import Category from '../category/category';
import {category} from '../category/const'
import Videos from '../videos/videos';


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
				<div className="text-[35px] flex gap-2 font-bold ">
					<h1  className="text-white">Search results by </h1>
					<h1 className="text-red-600 capitalize ">{id}</h1>
				</div>
     <Videos videos={videos}/>
    </>
  );
}

export default SearchResults;

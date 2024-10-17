import React from 'react'
import { Navbar } from './components'
import Switch from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { useEffect ,useState} from 'react';
import {ApiService} from './service/api.service'
import Category from './components/category/category';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("New");
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`);
				setVideos(data.items);
			} catch (error) {
				console.log(error);
			}
		};
		getData();
	}, [selectedCategory]);

	 const selectedCategoryHandler = (category) => {
		setSelectedCategory(category);
	};
  return (
    <>



     <BrowserRouter>

     <Navbar/>
     <Category selectedCategoryHandler={selectedCategoryHandler}/>
      <Switch  selectedCategory={selectedCategory}
        selectedCategoryHandler={selectedCategoryHandler}
        videos={videos} />
    </BrowserRouter>
    </>
  )
}

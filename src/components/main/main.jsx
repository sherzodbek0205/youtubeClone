import { useEffect, useState } from "react";
import { Category, Videos } from "..";
import { ApiService } from "../../service/api.service";

function Main() {
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
			<Category selectedCategoryHandler={selectedCategoryHandler} />
			<div className="text-[35px] font-bold flex gap-2">
				<h1 className="text-[red]">{selectedCategory}</h1>
				<h1>videos</h1>
			</div>
			<Videos videos={videos} />
		</>
	);
}

export default Main;

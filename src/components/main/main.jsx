import { useEffect, useState } from "react";
import { Category, Videos } from "..";
import { ApiService } from "../../service/api.service";

function Main({selectedCategory,videos}) {

	return (
		<>

			<div className="text-[35px] font-bold flex gap-2">
				<h1 className="text-[red]">{selectedCategory}</h1>
				<h1>videos</h1>
			</div>
			<Videos videos={videos} />
		</>
	);
}

export default Main;

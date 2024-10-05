import React from 'react'
import {category} from './const'


function Category({selectedCategoryHandler}) {
  return (
   <>
    <div className=' flex  gap-2 justify-center p-2  overflow-x-auto scrollbar-hidden	'>

 {category.map(item=>(

  <button key={item.name} onClick={()=>selectedCategoryHandler(item.name)} type="button" className=" flex items-center gap-1  text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
  {item.icon}
  {item.name}
  </button>
 ))}

    </div>
</>
  )
}

export default Category

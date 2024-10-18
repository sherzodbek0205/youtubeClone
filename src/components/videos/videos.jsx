import React from 'react';


function Videos({ videos }) {
 console.log(videos);
  return (
    <>
     <div className='grid p-2 grid-cols-1 gap-4 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 '>
      {videos.map((video) => (

 <div key={video.id.videoId} className=' flex flex-col gap-1  '>
<img className=" rounded-xl" src={video.snippet.thumbnails?.medium?.url || video.snippet.thumbnails?.default?.url} alt="" />
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

export default Videos;
  
import { MdCastForEducation,MdSportsGymnastics,MdHome,MdLocalMovies,MdOutlineLiveTv,MdOutlineSportsBasketball,MdTheaterComedy,MdOutlinePodcasts } from "react-icons/md";
import { IoMusicalNotesSharp,IoFlower} from "react-icons/io5";
import { SiYoutubegaming ,SiBitcoincash} from "react-icons/si";
import { GiClothes } from "react-icons/gi";
export  const category = [
 { name:'All', icon:<MdHome />},
 {name:'Movies', icon:<MdLocalMovies />},
 {name:'Music',icon:<IoMusicalNotesSharp/>},
 {name:'Live',icon:<MdOutlineLiveTv />},
 {name:'Gaming',icon:<SiYoutubegaming/>},
 {name:'Sport',icon:<MdOutlineSportsBasketball />},
 {name:'Gym',icon:<MdSportsGymnastics />},
 {name:'Beauty',icon:<IoFlower />},
 {name:'Fashion',icon:<GiClothes/>},
 {name:'Comedy',icon:<MdTheaterComedy /> },
 {name:'Podcast',icon:<MdOutlinePodcasts />},
 {name:'Crypto',icon:<SiBitcoincash />},
 {name:'Education',icon:<MdCastForEducation />}



]
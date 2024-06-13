import { storyPics } from '@/app/assets/surprise/story/pics/picBundler.js';
import { storyHeaders } from '@/app/assets/surprise/story/headers/headerBundler.js'
import { copy } from './copy.js'


const sections = storyHeaders.map((h, i) => {
    return {
        header: h,
        image: storyPics[i],
        copy: copy[i]
    }
})


export default sections;

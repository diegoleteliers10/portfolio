import { skills } from '../data/data'
import skillsSvg from '../assets/AFjYjVMx5B.json'
import { Player} from '@lottiefiles/react-lottie-player';
import { Fade, Slide, Bounce } from 'react-awesome-reveal';

const Skills = () => {
  return (
    <div id='skills' className='h-screen w-full bg-[#222831] overflow-x-hidden overflow-y-hidden'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full pl-2'>
        <Fade direction='down' triggerOnce delay={350}>
          <div className='text-center'>
            <h2 className='text-[#892CDC] text-3xl font-bold mt-6'>Skills</h2>
            <p className='text-white'>Technical Levels</p>
          </div>
        </Fade>

        <div className='flex items-center justify-center'>
          <Slide direction='left' triggerOnce delay={450}>
            <Player
              autoplay
              loop
              src={skillsSvg}
              style={{ height: '400px', width: '400px', position: 'relative', right: '2rem'}}
            ></Player>
          </Slide>
          <Bounce triggerOnce delay={450}>
          <div className='grid grid-cols-3 gap-y-2 mt-12 gap-x-[3rem]'> 
            {
              skills.map((skill) => {
                return (
                <div key={skill.id} className='group flex flex-col items-center justify-center border-[1px] border-[#892CDC] p-2 rounded-md hover:bg-[#EEEEEE] text-[#D9ACF5] hover:scale-110 ease-in-out  duration-200'>
                  {skill.icon}
                  <h3 className='group-hover:text-[#222831] text-lg font-semibold mt-2'>{skill.name}</h3>
                  <p className='group-hover:text-[#222831] text-sm'>{skill.level}</p>
                </div>
                )
              })
            }
            
          </div>
          </Bounce>
          <p className='absolute font-signature text-[#D9ACF5] left-[15%] top-[calc(240%-2rem)] -rotate-45 text-xl'>&lt;Player&gt;</p>
          <p className='absolute font-signature text-[#D9ACF5] left-[38%] top-[calc(280%-2rem)] -rotate-45 text-xl'>&lt;/Player&gt;</p>
        </div>
      </div>
 
    </div>
  )
}

export default Skills
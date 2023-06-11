import { Tilt } from 'react-tilt'
import {AiFillGithub} from 'react-icons/ai'
import {TbWorldWww} from 'react-icons/tb'
import { projects } from '../data/data'
import {Slide} from 'react-awesome-reveal'
const Projects = () => {
  return (
    <div id='projects' className='h-screen w-full bg-[#222831] flex flex-col justify-center items-center pb-[6rem] gap-6'> 
    <Slide delay={400} triggerOnce direction='down'>
      <div className='text-center'>
        <h2 className='text-[#892CDC] text-3xl font-bold'>Projects</h2>
        <p className='text-white'>Some of my works</p>
      </div>
    </Slide>
    <Slide delay={400} triggerOnce direction='up'>
      <div className='flex flex-wrap justify-center items-center gap-10'>
        {projects.map((project)=>(
          <Tilt key={project.id} className="bg-[#D9ACF5] p-2 rounded-lg w-[270px] h-[300px] flex flex-col justify-center">

            <img src={project.image} alt={project.name} className='w-full h-full object-cover rounded-lg'/>
            <div className='w-full flex flex-col justify-start items-start'>
              <h3 className='text-[#892CDC] text-xl font-bold'>
                {project.name} <AiFillGithub className='text-[#d66100] cursor-pointer inline-block' size={20} onClick={()=>window.open(project.url, '_blank')}/> {project.deploy !== "" &&
                  <TbWorldWww className='text-[#0f018f] cursor-pointer inline-block' size={20} onClick={()=>window.open(project.deploy, '_blank')}/>
                }
              </h3>
              <h5 className='text-[#222831] text-[10px] font-bold mt-1 w-full h-full'>{project.description}</h5>
              <div className='flex gap-2'>
                {project.leng.map((leng)=>(
                  <p key={leng.name} className='text-[10px] font-bold mt-[3px]' style={{color:`${leng.col}`}}>
                    {leng.name}
                  </p>
                  ))
                }
              </div>

            </div>
          </Tilt>
        ))}
      </div>
    </Slide>
    
    <p className='text-[#D9ACF5] absolute top-[470%] left-[72%] font-signature font-medium text-4xl -rotate-45'>&#123;hover: me&#125; &#9786;</p>
    </div>
  )
}

export default Projects
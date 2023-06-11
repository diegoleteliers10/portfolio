import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {Fade} from 'react-awesome-reveal'

const Social = () => {
  return (
    <div className='flex flex-col top-[35%] fixed left-0 px-[6rem] after:contentent-[""] after:w-[15rem] after:h-[1px] after:bg-[#D9ACF5] after:rotate-[90deg] after:absolute after:bottom-[-9rem] after:left-[-0.5rem]'>
      <Fade direction="up" triggerOnce>
        <ul>
          <li className='pb-4 hover:-translate-y-1 duration-300'>
            <a href="https://github.com/diegoleteliers10" target="_blank" rel='noreferrer'>
              <FaGithub className='text-[#D9ACF5]' size={30}/>
            </a>
          </li>

          <li className='pb-4 hover:-translate-y-1 duration-300'>
            <a href="https://www.linkedin.com/in/diegoleteliers10/" target="_blank" rel='noreferrer'>
              <FaLinkedin className='text-[#D9ACF5]' size={30}/>
            </a>
          </li>

          <li className='pb-4 hover:-translate-y-1 duration-300'>
            <a href="mailto:diegoleteliers10@gmail.com">
              <HiOutlineMail className='text-[#D9ACF5]' size={30}/>
            </a>
          </li>
        </ul>
      </Fade>
    </div>
  
  )
}

export default Social
import {BsArrowDown} from 'react-icons/bs'
import {FaHandPointDown} from 'react-icons/fa'
import Hero from '../assets/hero.png'
import {Fade,Slide, Bounce, Rotate} from 'react-awesome-reveal'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-[#222831]'>
      <div className='max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full pl-2'>
        <div className='flex flex-col justify-center h-full pr-[4rem] pt-12'>
          <Fade triggerOnce direction='down'>
            <h2 className='text-[#EEEEEE] font-bold text-4xl'>Hi, I&apos;m Diego Letelier</h2>
          </Fade>
          <div>
            <Fade triggerOnce direction='down'>
              <h2 className='text-[#892CDC] font-bold text-2xl before:w-[8rem] before:h-[1px] before:bg-white md:before:inline-block before:content-[""] before:relative before:bottom-1 before:mr-2 before:z-[0]'>Full Stack Developer</h2>
            </Fade>
          </div>
          <Slide delay={300} duration={1000} fraction={0} triggerOnce>
            <p className='text-[#EEEEEE] py-4 max-w-md'>I am a Chilean Full Stack Developer looking for challenges and new experiences. I am also an agluien who loves to work in a team and learn and create things with new technologies. <FaHandPointDown size={20} className='animate-bounce infinite inline-block ml-[13rem] relative top-2'/></p>
          </Slide>

          <div className='flex flex-row items-center justify-center py-2'>
            <Bounce triggerOnce>
              <button className='group text-[#EEEEEE] font-bold bg-[#393E46] flex justify-center items-center p-4 rounded-md hover:bg-[#892CDC] hover:drop-shadow-4xl hover:-translate-y-1 active:translate-y-[0.2rem] active:transition duration-150'>
                <a href='CV-DiegoLetelier.pdf' download>Download CV</a>
                <span className='pl-[12px]'>
                  <BsArrowDown className='group-hover:translate-y-1 duration-200 delay-200' size={20}/>
                </span>
              </button>
            </Bounce>
          </div>
        </div>
        <Rotate direction='left' triggerOnce>
          <div className=' bg-[rgb(137,44,220)] bg-gradient-to-r from-purple-700 via-purple-500 to-pink-300 transform rotate-[-45deg] w-[25rem] h-[25rem] rounded-full overflow-hidden '>
            <img src={Hero} alt="profile" className='relative scale-[0.90] top-6 right-4 transform rotate-45' />
          </div>
        </Rotate>

        <p className='text-[#D9ACF5] absolute top-[25%] right-[45%] rotate-[-45deg] font-signature font-medium text-4xl'>&lt;div&gt;</p>
        <p className='text-[#D9ACF5] absolute bottom-[25%] right-[6%] rotate-[-45deg] font-signature font-medium text-4xl'>&lt;/div&gt;</p>
      </div>
    </div>
  )
}

export default Home
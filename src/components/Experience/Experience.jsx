import {study,experiences} from '../data/data'
import {FaUniversity} from 'react-icons/fa'
import {AiOutlineCalendar} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import { Player} from '@lottiefiles/react-lottie-player';
import {Fade, Slide} from 'react-awesome-reveal';

import brain from '../assets/i7OD2wZIi5.json'

const Experience = () => {
  return (
    <div id='experience' className='h-screen w-full bg-[#222831] flex flex-col justify-center items-center overflow-x-hidden overflow-y-hidden'>
      <div className='flex flex-col justify-center items-center relative top-4'>
        <div className='text-center relative bottom-[2rem]'>
          <Slide delay={350} direction='right' triggerOnce>
            <h2 className='text-[#892CDC] text-3xl font-bold'>Experience and Studies</h2>
          </Slide>
          <Slide direction='left' triggerOnce delay={350}>
            <p className='text-[#EEEEEE]'>My life through the years</p>
          </Slide>
          
        </div>

        <div className='flex relative top-1 gap-[2rem]'>
          <div className='flex flex-col justify-center items-center rounded-lg border-[2px] border-[#393E46] bg-[#393E46] hover:hover:scale-110 hover:border-[#892CDC] duration-200'>

            <Fade damping={400} delay={500} triggerOnce>
              <div className='flex flex-col justify-center items-center pt-1 relative top-2'>
                <FaUniversity size={30} className='text-[#D9ACF5]'/>
                <h3 className='text-xl text-[#892CDC] font-bold'>Studies</h3>
              </div>
            </Fade>

            <Slide delay={400} triggerOnce direction='up'>
              <div className='flex flex-col justify-around gap-2 p-4'>
                {study.map((item) => (
                  
                  <div key={item.id}className='rounded-md bg-[#222831] relative w-[250px] h-[150px] px-3 py-2'>
                    <h3 className='text-lg text-[#892CDC] font-bold'>{item.name}</h3>
                    <h5 className='text-[#D9ACF5] font-light'>{item.place}</h5>
                    <p className='text-[#D9ACF5] font-medium'>{item.description} </p>
                    <p className='text-[#D9ACF5] font-extralight text-xs absolute right-[5px] bottom-[5px]'> <AiOutlineCalendar size={17} className='inline-block relative bottom-[2px]'/> {item.date}</p>
                    <div className='absolute top-[10px] right-[10px] rounded-full bg-[#ffffff] w-[30px] h-[30px] flex justify-center items-center overflow-hidden'>
                      <img src={item.icon} alt={item.name} className='scale-[2]'/>
                    </div>
                  </div>
                
                ))}
              </div>
            </Slide>
          </div>

          { experiences.length > 0 &&
            <div className='flex flex-col justify-center items-center border-[2px] rounded-lg border-[#393E46] bg-[#393E46] hover:scale-110 hover:border-[#892CDC] duration-200'>
              <div className='flex flex-col justify-center items-center pt-6'>
                <MdWork size={30} className='fill-[#D9ACF5] '/>
                <h3 className='text-xl text-[#892CDC] font-bold'>Experiencies</h3>
              </div>
              <div className='flex flex-col justify-around gap-4 p-8'>
                {experiences.map((item) => (
                  <div key={item.name}>
                    <h3 className='text-lg text-[#892CDC] font-bold'>{item.name}</h3>
                    <h5 className='text-base text-[#D9ACF5]'>{item.place}</h5>
                    <p className='text-[10px] text-[#D9ACF5] pt-3'> <AiOutlineCalendar size={15} className='inline-block'/> {item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      </div>

      <Player
            autoplay
            loop
            src={brain}
            style={{ height: '150px', width: '150px', position: 'absolute', top:'370%', left:'80%'}}
      ></Player>

    </div>
  )

};




export default Experience
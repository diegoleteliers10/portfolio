import { Player} from '@lottiefiles/react-lottie-player';
import codingSvg from '../assets/98636-coding.json'
import {CgGames} from 'react-icons/cg'
import {IoFootball} from 'react-icons/io5'
import {AiOutlineStock} from 'react-icons/ai'
import {MdLocalMovies} from 'react-icons/md'
import {Fade, Slide} from 'react-awesome-reveal'


const About = () => {

  const listOfInterest=[
    {
      id:1,
      name: 'Games',
      icon: <CgGames className='text-[#D9ACF5] text-4xl'/>,
    },
    {
      id:2,
      name: 'Football',
      icon: <IoFootball className='text-[#D9ACF5] text-4xl'/>,
    },
    {
      id:3,
      name: 'Stock Market',
      icon: <AiOutlineStock className='text-[#D9ACF5] text-4xl'/>,
    },
    {
      id:4,
      name: 'Movies',
      icon: <MdLocalMovies className='text-[#D9ACF5] text-4xl'/>,
    }
  ]

  return (
    <div id='about' className='h-screen w-full bg-[#222831] flex flex-col items-center justify-center'>
      <div className='flex justify-center items-center h-full pt-[4rem] px-4 gap-12'>
        <div className='flex flex-col justify-center items-center pb-2 pt-6'>
          <p className='text-[#D9ACF5] absolute bottom-[-7rem] left-[18%]  font-signature font-medium text-xl'>&lt;h2&gt;</p>
          <p className='text-[#D9ACF5] absolute bottom-[-10rem] left-[36%] font-signature font-medium text-xl'>&lt;/h2&gt;</p>

          <Fade delay={350} triggerOnce>
            <h2 className='text-[#892CDC] text-4xl font-bold relative right-[6rem]'>About Me</h2>
          </Fade>
        
          <Slide delay={450} triggerOnce>
            <p className='text-[#EEEEEE] pt-4 pb-4 px-4 max-w-md'>
              Hi, I&apos;m a 23 year old full stack developer and industrial engineer from Santiago, Chile. I like to combine my two careers to create applications and web pages that are intuitive and easy to use for users. I want to bring the community closer to technology and make it more accessible and fun. Since I was a kid I have been passionate about technology and I have always been close to electronic devices and always wanted to learn about technology.
              <br/>
              <br/>
              I am a person who loves to learn new technologies and to be able to develop new things together with teams of great values, where I can bring knowledge to them and they can bring knowledge to me. My dream is to be a developer that can make the world a better and friendly place together with technology. Currently I&apos;m doing projects both in the bootcamp I&apos;m participating in, as well as personal projects, which help me to improve and affirm my knowledge in different programming languages.
            </p>
          </Slide>
        </div>
        <Slide direction='right' delay={450} triggerOnce>
          <div className='flex flex-col justify-center items-center'>
            <Player
              autoplay
              loop
              src={codingSvg}
              style={{ height: '300px', width: '300px', position: 'relative' , left: '3rem'}}
            ></Player>
            <p className='text-[#D9ACF5] font-bold text-xl relative left-[3rem]'>Another Interests</p>
            <ul className='grid grid-cols-2 gap-y-4 gap-x-[4rem] relative left-[3rem] bottom-[-1rem]'>
              {listOfInterest.map((interest) => <li key={interest.id} className='flex flex-col items-center'>
                {interest.icon}
                <p className='text-[#D9ACF5]'>{interest.name}</p>
              </li> )}
            </ul>
          </div>
        </Slide>

      </div>
    </div>
  )
}

export default About
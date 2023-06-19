import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'
import { Player } from '@lottiefiles/react-lottie-player';
import talking from '../assets/czG6fVMB4S.json'
import {Fade,Slide} from 'react-awesome-reveal'

const Contact = () => {

  const [noty,setNoty]= useState(false);
  const form = useRef();

  const notify = () => noty? toast('Email was sent successfully',{icon: <AiFillCheckCircle className='text-[#0fab14]'/>,duration:2000}): toast('Email was not sent successfully',{icon: <AiFillCloseCircle className='text-[#ab0f0f]'/>,duration:2000});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('portafolio_service', 'template_9u05zgg', form.current, 'DaO7FWiE1IlCYVP4g')
      .then((result) => {
          console.log(result.text);
          setNoty(true);
      }, (error) => {
          console.log(error.text);
          setNoty(false);
      });
  }

  return (
    <div id='contact' className='h-screen w-full bg-[#222831] flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden'>
     <div className='max-w-screen-lg mx-auto flex items-center'>
      <Slide triggerOnce delay={450} direction='left'>
        <div className='flex flex-col justify-center items-center bg-[#393E46] rounded-lg px-4 py-4 mt-12 ml-[3rem]'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col  rounded-md bg-[#222831] p-4 w-[300px] shadow-2xl hover:-translate-x-1 hover:-translate-y-1 duration-300'>
            <Fade damping={400} cascade delay={700} triggerOnce>
              <h2 className='text-2xl font-bold text-[#892CDC]'>Contact Me</h2>
            </Fade>
            <div className='flex flex-col mt-3'>
              <Fade damping={400} cascade delay={700} triggerOnce>
                <label className='text-[#D9ACF5] font-bold text-base'>Name</label>
              </Fade>
              <input placeholder='Your name' type="text" name="user_name" className='caret-[#892CDC] pl-2 py-1 rounded-md' />
              <Fade damping={400} cascade delay={700} triggerOnce>
                <label className='text-[#D9ACF5] font-bold text-base'>Email</label>
              </Fade>
              <input placeholder='Your email' type="email" name="user_email" className='caret-[#892CDC] pl-2 py-1 rounded-md' />
              <Fade damping={400} cascade delay={700} triggerOnce>
                <label className='text-[#D9ACF5] font-bold text-base'>Message</label>
              </Fade>
              <textarea placeholder='Your message' name="message" className='w-full h-[200px] caret-[#892CDC] pl-2 py-1 rounded-md resize-none'/>
              <input onClick={notify} type="submit" value='Send' className='bg-[#892CDC] text-[#EEEEEE] font-bold rounded-md py-2 mt-2 cursor-pointer hover:scale-105 active:translate-y-[0.2rem] active:transition duration-150 '/>
            </div>
          </form>
        </div>
      </Slide>
        <Slide direction='right' triggerOnce delay={450}>
          <Player
            autoplay
            loop
            src={talking}
            style={{ height: '400px', width: '400px', position: 'relative' , left: '3rem'}}
          ></Player>
        </Slide>
     </div>
     <Toaster/>
    </div>
  )
}

export default Contact
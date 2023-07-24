import {AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {FaCss3Alt, FaReact, FaPython} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiExpress, SiJavascript, SiTypescript, SiRedux, SiTailwindcss, SiPostgresql} from 'react-icons/si'

import doggy from '../assets/doggydeep.png'
import rick from '../assets/rick&morty.png'

const study= [
    {
      id:1,
      name: "Industrial Engineering",
      place: "U. of Development, Chile",
      description: "With 2.25 years of experience in the civil engineering career, with 45% of the courses passed.",
      date: "March 2019 - today",
      icon: "UDD.png"
    },
    {
      id:2,
      name: "Henry Bootcamp",
      place: "Remote, Chile",
      description: "With +800 hours of programming based on practices and real projects.",
      date: "March 2023 - July 2023",
      icon: "logoOG.png"
    }
  ]

const experiences= [
]

const skills = [
  {
    name: "HTML 5",
    icon: <AiFillHtml5 className='w-6 h-6 fill-[#D9ACF5] group-hover:fill-red-700'/>,
    level: "Advanced"
  },
  {
    name: "CSS 3",
    icon: <FaCss3Alt className='w-6 h-6 fill-[#D9ACF5] group-hover:fill-blue-700'/>,
    level: "Intermediate"
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className='w-6 h-6 fill-[#D9ACF5] group-hover:fill-yellow-700'/>,
    level: "Intermediate"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className='w-6 h-6 fill-[#D9ACF5] group-hover:fill-blue-700'/>,
    level: "Intermediate"
  },
  {
    name: "React JS",
    icon: <FaReact className='w-6 h-6 fill-[#D9ACF5] group-hover:fill-teal-500'/>,
    level: "Intermediate"
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className='w-6 h-6 fill-[#D9ACF5] group-hover:fill-purple-800'/>,
    level: "Intermediate"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className='w-6 h-6 fill-[#D9ACF5] group-hover:fill-teal-400'/>,
    level: "Advanced"
  },
  {
    name: "Node JS",
    icon: <FaNodeJs className='w-6 h-6 fill-[#D9ACF5] group-hover:fill-green-800'/>,
    level: "Intermediate"
  },
  {
    name: "git",
    icon: <AiFillGithub className='w-6 h-6 fill-[#D9ACF5] group-hover:fill-orange-700'/>,
    level: "Intermediate"
  },
  {
    name: "Express JS",
    icon: <SiExpress className='w-6 h-6 fill-[#D9ACF5] group-hover:fill-green-800'/>,
    level: "Intermediate"
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className='w-6 h-6 fill-[#D9ACF5] group-hover:fill-[#336691]'/>,
    level: "Advanced"
  },
  {
    name: "Python",
    icon: <FaPython className='w-6 h-6 fill-[#D9ACF5] group-hover:fill-yellow-600'/>,
    level: "Basic"
  }
];

const projects=[
  {
    id:1,
    name: "Doggy Deep",
    url: "https://github.com/diegoleteliers10/PI_Dogs_Henry",
    deploy:"https://doggydeep.netlify.app/",
    image: doggy,
    description: "Design and develop a dog App with search, filtering, creation and deletion of dogs, eye catching and intuitive design. I had to get dogs through api requests to be displayed on screen, plus validations. I had use the data through routes in the server. And I had to create a database that had new and existing dogs and temperaments.",
    leng:[{name:"#React",col:"#14b8a6"},{name:"#Express",col:"#166534"},{name:"#PostgreSQL",col:"#336691"},{name:"#Html",col:"#b91c1c"},{name:"#Redux",col:"#6b21a8"}]
  },
  {
    id:2,
    name: "Rick & Morty",
    url: "https://github.com/diegoleteliers10/Rick_y_Morty",
    deploy:"",
    image: rick,
    description: "Design and develop a rick and morty App. Where you can search, filtering, creation and deleted chartacters. Also eye catching and intuitive. I had to get characters through api requests to be displayed on screen, plus validations. I had use the data through routes in the server. And I had to create a database that save new users and their favorites characters.",
    leng:[{name:"#React",col:"#14b8a6"},{name:"#Express",col:"#166534"},{name:"#PostgreSQL",col:"#336691"},{name:"#Html",col:"#b91c1c"},{name:"#Redux",col:"#6b21a8"}]
  }
]
export {study, skills, experiences, projects}
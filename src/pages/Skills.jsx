import SkillCard from '../components/SkillCard'
import { icons } from '../icons'
const Skills = () => {
    return (
        <>
            <h2 className='text-3xl font-mono text-center mb-2'>- MY SKILLS -</h2>
            <h3 className='font-mono text-bold text-center'>FRONTEND</h3>
            <div className='grid grid-cols-3 place-items-center border p-4 mx-[10%] md:mx-[20%] mb-3 rounded-lg hover:border-sky-300 duration-300 shadow-xl hover:shadow-sky-400'>
                {icons[0].map(ico => <SkillCard key={ico.name} ico={ico} />)}
            </div>
            <h3 className='font-mono text-bold text-center'>BACKEND</h3>
            <div className='grid grid-cols-2 rounded-lg border mb-3 place-items-center p-4 mx-[10%] md:mx-[20%] hover:border-sky-300 duration-300 shadow-xl hover:shadow-sky-400'>
                {icons[1].map(ico => <SkillCard key={ico.name} ico={ico} />)}
            </div>
            <h3 className='font-mono text-bold text-center'>FRAMEWORKS AND LIBRARIES</h3>
            <div className='grid grid-cols-5 rounded-lg border mb-3 place-items-center p-4 mx-[10%] md:mx-[20%] gap-1 hover:border-sky-300 duration-300 shadow-xl hover:shadow-sky-400'>
                {icons[2].map(ico => <SkillCard key={ico.name} ico={ico} />)}
            </div>
            <h3 className='font-mono text-bold text-center'>VERSION CONTROL</h3>
            <div className='grid grid-cols-2 rounded-lg border mb-3 place-items-center p-4 mx-[10%] md:mx-[20%] hover:border-sky-500 duration-300 shadow-xl hover:shadow-sky-400'>
                {icons[3].map(ico => <SkillCard key={ico.name} ico={ico} />)}
            </div>
        </>
    )
}

export default Skills   
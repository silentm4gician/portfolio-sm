import gitHub from '../images/github.png'
import linkedin from '../images/linkedin.png'
import ig from '../images/instagram.png'
const Links = () => 
{
    return (
        <div className='mx-3 space-x-2 items-center w-10 relative'>
            <div className='absolute top-80'>
                <a href='https://github.com/silentm4gician' target='_blank' >
                    <img className='mb-3 hover:scale-125' src={gitHub} alt="github" />
                </a>
                <a href='https://www.instagram.com/leandro_gm5/' target='_blank' className='mb-3 hover:scale-125'>
                    <img className='mb-3 hover:scale-125' src={ig} alt="instagram" />
                </a>
                <a href='https://www.linkedin.com/in/leandro-gonz%C3%A1lez-matkovich-857742233/' target='_blank' className='hover:scale-125'>
                    <img className='mb-3 hover:scale-125' src={linkedin} alt="linkedin" />
                </a>
            </div>
        </div>
    )
}

export default Links
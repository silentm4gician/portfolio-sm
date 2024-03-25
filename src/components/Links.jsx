import gitHub from '../images/github.png'
import linkedin from '../images/linkedin.png'
import ig from '../images/instagram.png'
const Links = () => 
{
    return (
        <div className='mx-3 space-x-2 items-center w-10'>
            <div className='mt-96'>
                <button className='mb-3 hover:scale-125'>
                    <img src={gitHub} alt="github" />
                </button>
                <button className='mb-3 hover:scale-125'>
                    <img src={ig} alt="instagram" />
                </button>
                <button className='hover:scale-125'>
                    <img src={linkedin} alt="linkedin" />
                </button>
            </div>
        </div>
    )
}

export default Links

const Cards = ({proyect}) => 
{
    return (
        <div className="max-w-sm h-full bg-transparent border border-gray-600 rounded-lg shadow hover:shadow-sky-300/50 place-items-stretch hover:border-sky-300">
        <a href={proyect.link} target='_blank'>
            <img className="rounded-t-lg" src={proyect.img} alt="" />
        </a>
        <div className="p-5">
            <a href={proyect.link} target='_blank'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{proyect.name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{proyect.desc}</p>
            <a href={proyect.link} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-transparent rounded-lg shadow hover:shadow-sky-300/50">
                Visit Site
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href={proyect.repo} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-transparent rounded-lg shadow hover:shadow-sky-300/50">
                View Repo
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
    )
}

export default Cards
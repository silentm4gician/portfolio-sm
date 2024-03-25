
const NavBar = () => 
{
    return (
        <div className="flex justify-center items-center p-10">
            <div className="sticky space-x-4 sm:space-x-1">
                <a href="/" className="text-sm lg:text-3xl md:text-xl font-bold font-mono hover:text-sky-300">// home </a>
                <a href="/proyects" className="text-sm lg:text-3xl md:text-xl font-bold font-mono hover:text-sky-300">// proyects </a>
                <a href="/skill" className="text-sm lg:text-3xl md:text-xl font-bold font-mono hover:text-sky-300">// skills </a>
                <a href="https://goo.su/OjVY" target='_blank' className="text-sm lg:text-3xl md:text-xl font-bold font-mono hover:text-sky-300">// resumee </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=leandroGonzalezMat@gmail.com" target='_blank' className="text-sm lg:text-3xl md:text-xl font-bold font-mono hover:text-sky-300">// contact </a>
            </div>
        </div>
    )
}

export default NavBar
import Cards from "../components/Cards"
import { work } from "../work"

const Work = () => 
{
    return (
        <div>
            <h2 className="text-center text-3xl font-mono">- MY WORK -</h2>
            <div className="grid gap-4 place-items-center grid-cols-1 lg:grid-cols-3 lg:gap-3 sm:grid-cols-1 justify-center p-4 mx-[5%]">
                {work.map(p=><Cards key={p.name} proyect={p}/>)}
            </div>
        </div>
    )
}

export default Work
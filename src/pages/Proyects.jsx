import Cards from "../components/Cards"
import { proyects } from "../proyects"

const Proyects = () => 
{
    return (
        <div>
            <h2 className="text-center text-3xl font-mono">- MY PROYECTS -</h2>
            <div className="grid gap-4 place-items-center grid-cols-1 lg:grid-cols-3 lg:gap-1 sm:grid-cols-2 justify-center p-4 mx-[5%]">
                {proyects.map(p=><Cards key={p.name} proyect={p}/>)}
            </div>
        </div>
    )
}

export default Proyects
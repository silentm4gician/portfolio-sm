
const SkillCard = ({ico}) => 
{
    return (
        <div className="w-12 mx-4 md:w-16 sm:w-14">
            <img className="p-1" src={ico.img} alt={ico.name} />
        </div>
    )
}

export default SkillCard
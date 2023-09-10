import html from "../../assets/Html5.png"

function Card (){

    const cursos = [
        {id:1, nome: "HTML 5", img: ""},
        {id:2, nome: "CSS3", img: ""},
        {id:3, nome: "JavaScript", img: ""},
        {id:4, nome: "React.js", img: ""},
        {id:5, nome: "PHP", img: ""},
        {id:6, nome: "MySql", img: ""},
        {id:7, nome: "JQuery", img: ""},
        {id:8, nome: "WordPress", img: ""},
        {id:9, nome: "BootStrap", img: ""},
        {id:10, nome: "Figma", img: ""},
        {id:11, nome: "Git", img: ""},
        {id:12, nome: "Node.js", img: ""},
        {id:13, nome: "TypeScript", img: ""},
        {id:14, nome: "Tailwind", img: ""},
        
    ]

    return(
        <>
            {cursos.map((curso)=>(
            <div className="flex flex-col items-center bg-card rounded-xl w-36 h-36 my-4 mx-6">
                <h5 className="text-xl font-semibold">{curso.nome}</h5>
                <img src={curso.img} alt="" />
            </div>
            ))}
        </>
        
        )
}

export default Card;
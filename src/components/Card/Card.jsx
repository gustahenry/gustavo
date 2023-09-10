import html from "../../assets/Html5.png"
import css from "../../assets/CSS3.png"
import js from "../../assets/JavaScript.png"
import react from "../../assets/React.png"
import php from "../../assets/PHP Logo.png"
import mysql from "../../assets/MySQL Logo.png"
import jquery from "../../assets/JQuery.png"
import wp from "../../assets/WordPress.png"
import bootstrap from "../../assets/Bootstrap.png"
import figma from "../../assets/Figma.png"
import git from "../../assets/Git.png"
import node from "../../assets/Node Js.png"
import ts from "../../assets/TypeScript.png"
import tailwind from "../../assets/Tailwind CSS.png"

function Card (){

    const cursos = [
        {id:1, nome: "HTML 5", img: html},
        {id:2, nome: "CSS3", img: css},
        {id:3, nome: "JavaScript", img: js},
        {id:4, nome: "React.js", img: react},
        {id:5, nome: "PHP", img: php},
        {id:6, nome: "MySql", img: mysql},
        {id:7, nome: "JQuery", img: jquery},
        {id:8, nome: "WordPress", img: wp},
        {id:9, nome: "BootStrap", img: bootstrap},
        {id:10, nome: "Figma", img: figma},
        {id:11, nome: "Git", img: git},
        {id:12, nome: "Node.js", img: node},
        {id:13, nome: "TypeScript", img: ts},
        {id:14, nome: "Tailwind", img: tailwind},
        
    ]

    return(
        <>
            {cursos.map((curso)=>(
            <div className="flex flex-col items-center bg-card rounded-xl w-36 h-36 my-4 lg:mx-6 mx-2 py-2">
                <h5 className="text-xl font-semibold">{curso.nome}</h5>
                <img src={curso.img} alt="" />
            </div>
            ))}
        </>
        
        )
}

export default Card;
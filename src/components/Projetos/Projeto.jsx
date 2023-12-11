import act from "../../assets/projetos/act.png"

function Projeto (){
    return(
            <div className="lg:w-80 space-y-4">
                <img className="lg:w-80 h-56 object-cover" img src={act} alt="" />
                <p className="text-base font-semibold text-justify">
                    Desenvolvimento de projeto Wordpres e PHP, site, blog e landing pages
                </p>
                <div className="bg-bd h-12 w-full rounded-3xl flex items-center justify-center">
                    <a href="https://actinstitute.org/"><p className="font-medium">ACT Institute</p></a>
                </div>
            </div>
        )
}

export default Projeto;
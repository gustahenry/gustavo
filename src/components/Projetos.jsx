import Projeto from "./Projetos/Projeto";

function Projetos (){
    return(
        <div id="projetos" className="w-screen bg-primary lg:px-24 px-8  space-y-28">
            <div className="text-white space-y-20 py-24">
                <h3 className=" lg:text-5xl text-4xl font-bold text-center">Projetos</h3>
                <div className="flex flex-wrap justify-start">
                    <Projeto/>                       
                </div>
            </div>
        </div>
    )
}

export default Projetos;
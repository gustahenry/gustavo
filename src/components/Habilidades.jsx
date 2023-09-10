import Card from "./Card/Card";


function Habilidades (){
    return(
            <div id="habilidades" className="w-screen bg-primary px-24 space-y-28">
                <div className="text-white space-y-20 pt-24 flex flex-col items-center">
                    <h3 className=" text-5xl font-bold ">Habilidades</h3>
                    <div className="flex flex-wrap justify-start">
                        <Card/>                        
                    </div>
                </div>
                <div className="w-11/10 h-0.5 bg-white"></div> 
            </div>
        )
}

export default Habilidades;
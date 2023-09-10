import imgHero from "../assets/image 38.png"

function Hero (){
    return(
            <div id="hero" className="w-screen bg-primary px-24 py-20 space-y-24">
                <div className="flex flex-row justify-between items-center">
                    <div className="text-white space-y-3">
                        <p className="text-2xl font-bold">Olá, eu sou</p>
                        <h1 className="text-5xl font-bold text-h1" >Gustavo Henrique</h1>
                        <h2 className=" text-4xl font-bold">Desenvolvedor Front-end</h2>
                        <div className="bg-bd h-12 w-60 rounded-3xl flex items-center justify-center">
                            <p>Download CV</p>
                        </div>
                    </div>
                    <div>
                        <img src={imgHero} alt="" />
                    </div>
                </div>
                <div className="w-11/10 h-0.5 bg-white"></div>
            </div>
        )
    }
    
    export default Hero;
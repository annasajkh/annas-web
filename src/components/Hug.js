import annasHug from "../images/hug.png";


export default function Hug() {
    return (
        <section id="hug">
            <div className="container 
                mx-auto
                min-h-screen
                flex justify-center
                flex-col
                items-center"> 
            
            <img src={annasHug} width={300} height={300}></img>
            <p class="text-2xl">awww do you want a hug?</p>
            <p class="text-2xl mb-10">alright *hugs*</p>
            
            <a href="#home" className="rounded-lg
                                        box-border h-16 w-23 p-3
                                        text-2xl
                                        hover:bg-gray-700
                                        hover:text-sky-300
                                        focus:bg-gray-700
                                        focus:text-sky-300">Home</a>
            </div>
        </section>
    )
}
import annasOwO from "../images/owo.jpg";



export default function Home() {
    return (
        <div className="container 
            mx-auto
            min-h-screen
            flex justify-evenly
            flex-col
            items-center"> 
        <img src={annasOwO} width={300} height={300}></img>
        <p class="text-2xl font-mono">Welcome OwO</p>
        </div>
    )
}
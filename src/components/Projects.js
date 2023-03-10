import githubLogo from "../images/github-logo.png";
import replitLogo from "../images/replit-logo.png";

export default function Projects() {
    return (
        <section id="projects">
            <div className="container 
                mx-auto
                min-h-screen
                flex justify-evenly
                flex-col
                items-center"> 
                <p class="text-2xl">you can find all of my projects here</p>
                
                <a href="https://github.com/annasajkh">
                    <img src={githubLogo} width={100} height={100}></img>
                </a>

                <a href="https://replit.com/@AnnasVirtual">
                    <img src={replitLogo} width={100} height={100}></img>
                </a>

                <a href="#home"className="rounded-lg
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

export default function Navbar() {
    return (
        <section id="home">
            <header className="box-content h-20 flex items-center justify-evenly md:sticky">
                <a href="#projects" className="rounded-lg
                                            box-border h-16 w-23 p-3
                                            text-2xl
                                            hover:bg-gray-700
                                            hover:text-sky-300
                                            focus:bg-gray-700
                                            focus:text-sky-300">Projects</a>
                <a href="#hug" className="rounded-lg
                                            box-border h-16 w-23 p-3
                                            text-2xl
                                            hover:bg-gray-700
                                            hover:text-sky-300
                                            focus:bg-gray-700
                                            focus:text-sky-300">Hug</a>
            </header>
        </section>
    )
}
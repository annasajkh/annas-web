
import { Link } from "react-router-dom";

export default function Navbar() {
    const linkStyle: string = "flex justify-center items-center w-32 h-16 rounded-lg hover:bg-gray-700 text-2xl";

    return (
        <div className="text-white bg-gradient-to-r from-slate-900 via-slate-800 to-gray-800">
            <header className="h-20 flex items-center justify-evenly md:sticky">
                <Link to="/" className={linkStyle}>Home</Link>
                <Link to="/projects" className={linkStyle}>Projects</Link>
                <Link to="/something" className={linkStyle}>End</Link>
            </header>
        </div>
    )
}
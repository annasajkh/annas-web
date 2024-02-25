import github from "../assets/projects/github.png";
import itchIO from "../assets/projects/itch_io.png";
import replit from "../assets/projects/replit.jpg";

export default function Projects() {
	const projectLinkStyle: string = "rounded-lg sm:mx-10 sm:scale-100 mx-2 scale-75";

	return (
		<div className="py-64">
			<div className="mx-auto flex justify-center flex-row items-center bg-gradient-to-r from-slate-900 via-slate-800 to-gray-800 mt-2 py-2">
				<a href="https://github.com/annasajkh" target="_blank" className={projectLinkStyle}>
					<img src={github} width={100} height={100}></img>
				</a>

				<a href="https://annasjk.itch.io/" target="_blank" className={projectLinkStyle}>
					<img src={itchIO} width={100} height={100}></img>
				</a>

				<a href="https://replit.com/@AnnasVirtual" target="_blank" className={projectLinkStyle}>
					<img src={replit} width={100} height={100}></img>
				</a>
			</div>

			<p className="text-2xl font-mono flex justify-center items-center text-center pt-24 mt-2">You can find all of my projects on github, itch.io, and replit</p>
		</div>
	);
}

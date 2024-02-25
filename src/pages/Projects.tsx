import github from "../assets/projects/github.png";
import itchIO from "../assets/projects/itch_io.png";
import replit from "../assets/projects/replit.jpg";

export default function Projects() {
	return (
		<div className="py-64">
			<div className="mx-auto flex justify-center flex-row items-center">
				<a href="https://github.com/annasajkh" target="_blank">
					<img src={github} className="rounded-lg mx-10" width={100} height={100}></img>
				</a>

				<a href="https://annasjk.itch.io/" target="_blank">
					<img src={itchIO} className="rounded-lg mx-10" width={100} height={100}></img>
				</a>

				<a href="https://replit.com/@AnnasVirtual" target="_blank">
					<img src={replit} className="rounded-lg mx-10" width={100} height={100}></img>
				</a>
			</div>
			
			<p className="text-2xl font-mono flex justify-center items-center text-center pt-24 mt-2">You can find all of my projects on github, itch.io, and replit</p>
		</div>
	);
}

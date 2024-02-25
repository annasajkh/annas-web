import annasHappy from "../assets/annas/annas_happy.png";

export default function End() {
	return (
        <div className="flex justify-evenly flex-col items-center pt-40">
            <img src={annasHappy} className="rounded-lg" width={300} height={300}></img>
            <p className="text-2xl font-mono pt-16 pb-40 mb-8">Hope you have a good day take care</p>
        </div>
	);
}
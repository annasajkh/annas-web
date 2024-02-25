import annasHappy from "../assets/annas/annas_happy.png";

export default function End() {
    const roundedAndStopScalingStyle = "rounded-lg min-w-8";

	return (
        <div className="flex justify-evenly flex-col items-center pt-40">
            <img src={annasHappy} className={roundedAndStopScalingStyle} width={300} height={300}></img>
            <p className="text-2xl font-mono pt-16 pb-40 mb-8 flex justify-center items-center text-center">Hope you have a good day take care</p>
        </div>
	);
}

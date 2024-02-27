import { useState } from "react";

import annasImg from "../assets/annas/annas.png";
import annasHappyImg from "../assets/annas/annas_happy.png";

import twitterXImg from "../assets/social_media/twitter_x.jpg";
import youtubeImg from "../assets/social_media/youtube.png";
import instagramImg from "../assets/social_media/instagram.jpg";
import tumblrImg from "../assets/social_media/tumblr.jpg";
import linktreeImg from "../assets/social_media/linktree.png";

export default function Home() {
	const socialMediaLinkStyle = "sm:mx-10 sm:scale-100 mx-2 scale-75";
	const roundedAndStopScalingStyle = "rounded-lg min-w-8";

	const socialMediaStyle = "rounded-lg min-w-8 hover:scale-110";

	const [isMouseDown, setIsMouseDown] = useState(false);

	function onMouseEnter() {
		setIsMouseDown(true);
	}

	function onMouseLeave() {
		setIsMouseDown(false);
	}

	return (
		<div className="pt-40">
			<div className="flex justify-evenly flex-col items-center">
				<img src={isMouseDown ? annasHappyImg : annasImg} className={roundedAndStopScalingStyle} width={260} height={260} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></img>
				<p className="text-2xl font-mono flex justify-center items-center text-center mt-16 mb-40">Hello my name is Annas and i like to code and draw</p>
			</div>

			<div className="mx-auto flex justify-center flex-row items-center mt-2 py-2 transparent-bg">
				<a href="https://twitter.com/AnnasVirtual" target="_blank" className={socialMediaLinkStyle}>
					<img src={twitterXImg} width={48} height={48} className={socialMediaStyle}></img>
				</a>

				<a href="https://www.youtube.com/channel/UCCUgLcJpWM0OOgxQCr32nYg" target="_blank" className={socialMediaLinkStyle}>
					<img src={youtubeImg} width={48} height={48} className={socialMediaStyle}></img>
				</a>

				<a href="https://www.instagram.com/annasvirtual/?hl=en" target="_blank" className={socialMediaLinkStyle}>
					<img src={instagramImg} width={48} height={48} className={socialMediaStyle}></img>
				</a>

				<a href="https://www.tumblr.com/annasvirtual" target="_blank" className={socialMediaLinkStyle}>
					<img src={tumblrImg} width={48} height={48} className={socialMediaStyle}></img>
				</a>

				<a href="https://linktr.ee/AnnasVirtual" target="_blank" className={socialMediaLinkStyle}>
					<img src={linktreeImg} width={48} height={48} className={socialMediaStyle}></img>
				</a>
			</div>
		</div>
	);
}

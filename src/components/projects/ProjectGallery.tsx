import { useState, useMemo } from "react";
import { projects } from "../../types/projects";

import {
	AnimatedPreviousButton,
	AnimatedNextButton,
	MiddleButton,
} from "../buttons/GalleryNavButtons";
import ImageView from "./ImageView";

const ProjectGallery = () => {
	const [projectIndex, setProjectIndex] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [fullScreenImage, setFullScreenImage] = useState("");

	const images = useMemo(
		() => Object.values(projects[projectIndex].src),
		[projectIndex]
	);

	const handleProjectNavigation = (direction: "prev" | "next") => {
		setProjectIndex((prevProjectIndex) => {
			if (direction === "prev") {
				return prevProjectIndex === 0
					? projects.length - 1
					: prevProjectIndex - 1;
			} else {
				return prevProjectIndex === projects.length - 1
					? 0
					: prevProjectIndex + 1;
			}
		});
		setCurrentIndex(0);
	};

	const goToProjectImageIndex = (index: number) => {
		setCurrentIndex(index);
	};

	const openFullScreenImage = (imageUrl: string) => {
		setFullScreenImage(imageUrl);
		setIsModalOpen(true);
	};

	const closeFullScreenImage = () => {
		setIsModalOpen(false);
		setFullScreenImage("");
	};

	return (
		<>
			<div
				id="projects"
				className="w-full bg-opacity-20 backdrop-blur-3xl z-10"
			>
				<div className="flex flex-col lg:flex-row justify-center space-x-6 w-full p-12">
					<div className="flex flex-col items-center">
						<img
							src={images[currentIndex]}
							alt="Gallery"
							className="rounded-lg object-contain border-2 lg:w-[800px] lg:h-[400px] border-extra cursor-pointer" // Add cursor pointer
							onClick={() => openFullScreenImage(images[currentIndex])} // Open full-screen on click
						/>

						<div className="flex flex-row m-4 space-x-4">
							{images.map((_, index) => (
								<MiddleButton
									key={index}
									interactMiddle={() => goToProjectImageIndex(index)}
									isActive={currentIndex === index}
								/>
							))}
						</div>
					</div>
					<div className="w-full lg:w-1/2 flex flex-col justify-between h-full">
						<div>
							<h1 className="text-white font-cairoextrabold text-2xl lg:text-5xl mb-4 lg:mb-10">
								{projects[projectIndex].title}
							</h1>
							<p className="text-white font-cairolight text-base lg:text-xl">
								{projects[projectIndex].description}
							</p>
						</div>

						{/* Technologies section at the bottom */}
						<p className="text-white font-cairolight text-sm lg:text-lg italic mt-4 lg:mt-10">
							Technologies:{" "}
							<span className="text-xs lg:text-lg font-cairobold">
								{projects[projectIndex].languages.join(" | ")}
							</span>
						</p>
					</div>
				</div>

				<div className="flex w-full gap-2 justify-between lg:justify-evenly p-6">
					<AnimatedPreviousButton
						interact={() => handleProjectNavigation("prev")}
					/>
					<AnimatedNextButton
						interact={() => handleProjectNavigation("next")}
					/>
				</div>
			</div>

			<ImageView
				isOpen={isModalOpen}
				imageUrl={fullScreenImage}
				onClose={closeFullScreenImage}
			/>
		</>
	);
};

export default ProjectGallery;

interface CertificateProps {
	image: string;
	name?: string;
	finished: boolean;
	credlyLink?: string;
}
export const Certificate = ({
	image,
	name,
	finished,
	credlyLink,
}: CertificateProps) => {
	return (
		<>
			<div className="text-white font-cairoregular text-xl">
				<div className="flex flex-row items-center space-x-4">
					<img
						src={image}
						alt=""
						className="w-28 lg:w-32"
					/>
					<div>
						<p className="text-base lg:text-xl">{name}</p>
						{finished ? (
							<p className="bg-primary border-2 border-secondary rounded-xl w-28 text-base text-center m-2">
								Completed
							</p>
						) : (
							<p className="bg-extra border-2 border-extra rounded-xl w-32 text-base text-center m-2 font-cairolight">
								On going
							</p>
						)}
						{finished && (
							<p className="bg-secondary border border-secondary text-black rounded-xl w-28 text-base text-center m-2">
								<a
									target="_blank"
									href={credlyLink}
								>
									Credly Link
								</a>
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

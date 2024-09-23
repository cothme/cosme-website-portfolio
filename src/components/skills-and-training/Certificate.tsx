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
						<p className="text-base">{name}</p>
						{finished ? (
							<p className="bg-blue-500 border border-blue-500 rounded-xl w-28 text-base text-center m-2">
								Finished
							</p>
						) : (
							<p className="bg-green-500 border border-green-500 rounded-xl w-32 text-base text-center m-2 font-cairolight">
								On going
							</p>
						)}
						{finished && (
							<p className="bg-yellow-600 border border-yellow-600 rounded-xl w-28 text-base text-center m-2">
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

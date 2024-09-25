interface FullScreenImageModalProps {
	isOpen: boolean;
	imageUrl: string;
	onClose: () => void;
}

const ImageView: React.FC<FullScreenImageModalProps> = ({
	isOpen,
	imageUrl,
	onClose,
}) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
			<img
				src={imageUrl}
				alt="Full Screen"
				className="max-w-full max-h-full cursor-pointer"
				onClick={onClose} // Close modal when the image is clicked
			/>
		</div>
	);
};

export default ImageView;

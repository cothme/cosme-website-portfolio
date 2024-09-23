import TESDA from "../../assets/images/logos/tesda-logo.png";
import Cisco from "../../assets/images/logos/cisco-logo.png";
import MayaCert from "../../assets/images/logos/maya-cert.png";
import Database from "../../assets/images/logos/database-logo.png";
export const certificates = [
	{ name: "Computer System Servicing NC II", image: TESDA, finished: false },
	{
		name: "CCNA: Switching, Routing, and Wireless Essentials",
		image: Cisco,
		finished: true,
		credlyLink:
			"https://www.credly.com/badges/36d230d8-7a57-40ee-9353-0b67c75c815e/public_url",
	},
	{
		name: "Autodesk Maya: Certified User",
		image: MayaCert,
		finished: true,
		credlyLink:
			"https://www.credly.com/badges/00d4e39b-aa6b-4c22-ab1b-d2b090b4d8e0/linked_in_profile",
	},
	{
		name: "IT Specialist: Databases",
		image: Database,
		finished: true,
		credlyLink:
			"https://www.credly.com/badges/1e63d88a-3042-4c0b-b072-e157d6d11ab8",
	},
];

import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";
import enablePublicAccess from "@cors";

const AvoDetail = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		// Generally, you would not want this in your apps.
		// See more in 'cors.js'
		await enablePublicAccess(req, res);

		const db = new DB();
		const avoId = req.query.id as string;

		const avo = await db.getById(avoId);

		// Using Next.JS response helpers https://nextjs.org/docs/api-routes/response-helpers
		res.status(200).json(avo);
	} catch (e) {
		console.error(e);
		res.status(404).end();
	}
};

export default AvoDetail;

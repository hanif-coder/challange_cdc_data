import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';
import CDCData from '../../db/models/cdcData';

const corsMiddleware = Cors({
    origin: '*', // Adjust the origin based on your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add the HTTP methods you need
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await new Promise((resolve, reject) => {
        corsMiddleware(req, res, (err: any) => {
          if (err) return reject(err);
          resolve();
        });
      });
    if (req.method === 'GET') {
        try {
            // Retrieve filters from query parameters
            const { jurisdictionId, vaccinationStatus, demographic } = req.query;

            // Construct query options based on filters
            const queryOptions: any = {};
            if (jurisdictionId) {
                queryOptions.jurisdictionId = jurisdictionId;
            }
            if (vaccinationStatus) {
                queryOptions.vaccinationStatus = vaccinationStatus;
            }
            if (demographic) {
                queryOptions.demographic = demographic;
            }

            // Fetch data with applied filters
            const data = await CDCData.findAll({
                where: queryOptions,
            });

            res.status(200).json({ message: "cdc data", result: data });
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Error fetching data' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}

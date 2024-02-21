import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import CDCData from '../../db/models/cdcData';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const response = await axios.get('https://data.cdc.gov/api/views/qz99-wyhv/rows.json?accessType=DOWNLOAD');
      const data = response.data;
      console.log("data", data.data[0][1]);
      let firstIndex = data.data[2];
      let insertObject = {
        uuid: firstIndex[0],
        jurisdictionId: firstIndex[1],
        startDate: firstIndex[2],
        endDate: firstIndex[3],
        category: firstIndex[4],
        categoryType: firstIndex[5],
        vaccinationStatus: firstIndex[6],
        intent: firstIndex[7],
        demographic: firstIndex[8],
        difficultyReceivingVaccine: firstIndex[9],
        vaccinationWeek: firstIndex[10],
        vaccinationYear: firstIndex[11],
        vaccinationFrequency: firstIndex[12],
        vaccinationPercentage: firstIndex[13],
        vaccinationPercentageRange: firstIndex[14],
        totalVaccinations: firstIndex[15],
        vaccinationChange: firstIndex[16],
      };
      // Assuming the data is an array of objects for bulk create uncomment below ling
      // await CDCData.create(data.data);
      let result = await CDCData.create(insertObject);

      res.status(200).json({ message: 'Data inserted successfully', result });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Error inserting data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

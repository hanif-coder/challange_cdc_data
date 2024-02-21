import React, { useState, useEffect } from 'react';
import { getData } from '../../services/api.ts';

const DataList: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData({});
                setData(result.result); // Extracting the 'result' array from the response
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Data List</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>uuid</th>
                        <th>jurisdictionId</th>
                        <th>startDate</th>
                        <th>endDate</th>
                        <th>category</th>
                        <th>categoryType</th>
                        <th>vaccinationStatus</th>
                        <th>intent</th>
                        <th>demographic</th>
                        <th>difficultyReceivingVaccine</th>
                        <th>vaccinationWeek</th>
                        <th>vaccinationYear</th>
                        <th>vaccinationFrequency</th>
                        <th>vaccinationPercentage</th>
                        <th>vaccinationPercentageRange</th>
                        <th>totalVaccinations</th>
                        <th>vaccinationChange</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: any) => ( // Ensure 'item' is typed as 'any'
                        <tr key={item.uuid}>
                            <td>{item.jurisdictionId}</td>
                            <td>{item.startDate}</td>
                            <td>{item.endDate}</td>
                            <td>{item.category}</td>
                            <td>{item.categoryType}</td>
                            <td>{item.vaccinationStatus}</td>
                            <td>{item.intent}</td>
                            <td>{item.demographic}</td>
                            <td>{item.difficultyReceivingVaccine}</td>
                            <td>{item.vaccinationWeek}</td>
                            <td>{item.vaccinationYear}</td>
                            <td>{item.vaccinationFrequency}</td>
                            <td>{item.vaccinationPercentage}</td>
                            <td>{item.vaccinationPercentageRange}</td>
                            <td>{item.totalVaccinations}</td>
                            <td>{item.vaccinationChange}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataList;

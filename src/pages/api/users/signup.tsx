import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function getServerSideProps(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            // JSON 파일의 경로
            const filePath = path.resolve('./public/userDto.json');
            const newData = req.body;
            let jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            const coupon = [0, 1];
            const fetchData = [
                ...jsonData,
                {
                    id: jsonData[jsonData.length - 1].id + 1,
                    name: newData.username,
                    ...newData,
                    point: 5000,
                    coupon: coupon
                }
            ];
            
            // jsonData = [...jsonData, newData];

            // 수정된 데이터를 JSON 파일에 다시 씁니다.
            fs.writeFileSync(filePath, JSON.stringify(fetchData));
            res.statusCode = 200;
            res.json({ message: 'Data added successfully!', data: jsonData});

            
        } catch (error) {
            console.error("Error: ", error);
            res.statusCode = 500;
            res.json({
                message: "Error adding data"
            });
        };
    } else {
        res.statusCode = 405;
        res.json({ message: 'Method not allowed' });
    };
}
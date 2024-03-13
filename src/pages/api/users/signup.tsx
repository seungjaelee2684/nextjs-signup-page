import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function getServerSideProps(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            // JSON 파일의 경로
            const filePath = path.resolve('./public/userDto.json');
            // fs.readFile(filePath, 'utf8', (err, data) => {
            //     if (err) {
            //         console.error(err);
            //         return;
            //     }

            //     const jsonData = JSON.parse(data);
                
            // })

            // 요청으로부터 새로운 데이터를 받아와서 기존 데이터에 추가합니다.
            const newData = req.body;
            let jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            res.statusCode = 200;
                res.json({ message: 'Data added successfully!', data: jsonData});
            // jsonData = [...jsonData, newData];

            // 수정된 데이터를 JSON 파일에 다시 씁니다.
            // fs.writeFileSync(filePath, JSON.stringify(jsonData));

            
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
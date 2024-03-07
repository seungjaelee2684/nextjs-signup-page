import { NextApiRequest, NextApiResponse } from "next"

export default async function signupHandler (
    req: NextApiRequest,
    res: NextApiResponse) {
        if (req.method === 'POST') {
            try {
                const signupInfo = JSON.parse(req.body);
                res.status(200).json({ userInfoDto: {
                    ...signupInfo
                } })
            } catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }      
};
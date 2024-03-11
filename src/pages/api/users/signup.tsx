export async function POST (req: Request) {
    const { 
        username,
        nickname,
        id,
        email,
        location,
        password
     } = await req.json();

     console.log(username,
        nickname,
        id,
        email,
        location,
        password);

    const mockupUsers = [
        {
            userId: 0,

        }
    ]
}
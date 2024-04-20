import { NextRequest, NextResponse } from "next/server";


const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
    },
    {
        id: 2,
        name: "Product 2",
        price: 150,
    },
 ]
export default async function GET(req:NextRequest, res: NextResponse) {

    console.log("================================")
    console.log("url: " + req.url)
    console.log("method: " + req.method)
    console.log("headers: " + req.headers)
};

// export default function GET(req: NextRequest){
// }

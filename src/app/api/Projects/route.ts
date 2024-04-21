import { NextResponse } from "next/server"
import * as fs from 'fs'
import { error } from "console"

export async function GET(){
    try{
    const data: string[] = await new Promise((resolve, reject) => {
        fs.readdir("/home/vinay/VinayYadava/projectdata","utf-8",(err,data)=>{ 
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
           })
        
    })
   
    console.log(data)
    return(
            NextResponse.json(data)
        )

    }
    catch (error) {
        console.error(error);
        return NextResponse.json({"Internal Server Error": 500});
    }
}
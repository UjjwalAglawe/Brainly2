
export function random(len:number){
    let options="qwanjsdonasl13809ljndasdnjasl";
    let length=options.length;

    let ans="";

    for(let i=0;i<len;i++)
    {
        ans+=options[Math.floor((Math.random()*length))]
    }

    return ans;
}
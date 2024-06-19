let list = [1,4,0,9,11,8];

let high = list[0];

for(let i=1 ;i<list.length;i++)
{
    if(high<list[i]){
        high = list[i];
    }
}

console.log(high);

let sh

for(let i=1 ;i<list.length;i++)
{
    if(high<list[i]){
        sh=high;
        high = list[i];

    }
    else if(sh<list[i]){
        sh=list[i]
    }
}

console.log(sh);


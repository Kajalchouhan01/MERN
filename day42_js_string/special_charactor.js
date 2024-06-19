const charctor = (str) =>{

    let  vowelsCount = 0;
    let constCount = 0;
    let vowels = [];
    let consonent = [];

    let str2 = str.toLowerCase();

    for(let i=0; i<str2.length; i++){
        let char = str2.charAt(i);
        
        if(char == 'a' || char == 'i' || char == 'e'|| char =='o' || char == 'u'){
            vowelsCount++;
            vowels.push(str.charAt(i))
        }else{
            constCount++;
            consonent.push(str.charAt(i))
        }
    }
    console.log("total volwels =",vowelsCount)
    console.log(vowels)
    console.log("total consonant", constCount)
    console.log(consonent)
}

const str = "Eduction"
vowels(str)


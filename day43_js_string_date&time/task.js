// const alphabate = (str) =>{

   
//     let charector = [];
//     let alphabate = [];

//     let str2 = str.toLowerCase();

//     for(let i=0; i<str2.length; i++){
//         let char = str2.charAt(i);
        
//         if(char == '@' || char == '!' || char == '#'|| char =='%' || char == '^' || char == '&' || char == '*' || char == '(' || char == ')' || char == '$'){
           
//             charector.push(str.charAt(i))
//         }else{
           
//             alphabate.push(str.charAt(i))
//         }
//     }
    
//     console.log("charator is",charector)
    
//     console.log("alphabate is",alphabate)
// }
// const str = "Educ#$^&*tion"
// alphabate(str)

const removeSpecialChar = (str) =>{
    
    let result ="";

    for(let i=0; i<str.length; i++){
        let char = str.charAt(i);
        let ascii = char.charCodeAt(0)

        if((ascii >=65 && ascii <=90) || (ascii >= 97 && ascii <= 122)){
            result += char;
        }
    }
    return result;
};

console.log(removeSpecialChar("Hello! How are you?"));
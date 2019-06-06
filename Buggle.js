let buggle = [
    ['x','x','x','a','p'],
    ['x','x','p','p','x'],
    ['x','x','l','x','x'],
    ['x','x','e','x','x']
]

function wordsInBuggle(word='', buggle=[]){
    
    let founds = [];

    word.split('').forEach((letter)=>{
        buggle.forEach((row,index_row) => {
            let letters = {letter:letter, values:[]};
            row.forEach((column, index_column)=>{
                if(letter === column){
                    letters.values.push([index_row, index_column]);
                }
            })
            letters.values.length && founds.push(letters);
        })
    })

    function linkInWords(links = []){
       
        for(let i=0,len=founds.length; i<len;i++){
            founds[i].values[0] > 
        }
        return links;
    }

}

findInBuggle('apple',buggle);
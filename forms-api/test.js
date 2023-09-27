let arry=[1,2,3,1,3,4,5]

const repeatNum=(arr)=>{
    let storedNum=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j]){
                storedNum.push(arr[i])
            }
        }
    }return storedNum
}
console.log(repeatNum(arry))
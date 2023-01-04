export const buscarObjeto = (arr,search) => {
    let result =[];
    for(let i=0; i<arr.length;i++){
        if(arr[i].title.includes(search) || arr[i].subtitle.includes(search) ||arr[i].description.includes(search)){
            result.push(arr[i])
        }
    }
    return result
};

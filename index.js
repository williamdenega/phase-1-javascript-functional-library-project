

const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }

function myEach(collection, alert){

    Object.values(collection).forEach(key =>
        alert(key))
    return collection

}


function myMap(collection, fuctn ){
    let newArry = []
    Object.values(collection).forEach(value =>{
        let newValue  = fuctn(value)
        newArry.push(newValue)
    })

    return newArry
}


function myReduce(collection,funct,acc){

    let newCollection = standardizeInput(collection)

    if(!acc){
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }

    newCollection.forEach(item => acc = funct(acc,item,newCollection))
    return acc

}


function myFind(collection,predicate){
    let newCollection = standardizeInput(collection)

    for(let i =0; i < newCollection.length;i++){
        if(predicate(newCollection[i])) return newCollection[i]
    }

    return undefined
}


function myFilter(collection, predicate){
    let newCollection = standardizeInput(collection)

    let evenNums = []
    newCollection.forEach(num => {
        if(predicate(num)) evenNums.push(num)})
    return evenNums
}

function mySize(collection){
    let newCollection = standardizeInput(collection)
    return newCollection.length

}

function myFirst(arry,val) {
    if(!val) {
        let newArry = arry[0]
        return newArry
    }
    let newArry = arry.slice(0,val)
    return newArry
}

function myLast(arr,val){
    if(!val){
        return arr.slice(-1)[0]
    }
    return arr.slice(-val)

}


function myKeys(obj){
    return Object.keys(obj)

}

function myValues(obj){
    return Object.values(obj)
}
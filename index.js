const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(catName){
    cats.push(catName)
}

function destructivelyPrependCat(catName){
    cats.unshift(catName)
}

function destructivelyRemoveLastCat(catName){
    cats.pop(catName)
}

function destructivelyRemoveFirstCat(catName){
    cats.shift(catName)
}

function appendCat(catName){
    return [...cats, catName]
}

function prependCat(catName){
    return [catName,...cats]
}

function removeLastCat(){
    return cats.slice(0, cats.length -1)
}

function removeFirstCat(){
    return cats.slice(1, cats.length)
}
let cats = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendCat(name) { cats.push(name) }
function destructivelyPrependCat(name) { cats.unshift(name) }
function destructivelyRemoveLastCat() { cats.pop() }
function destructivelyRemoveFirstCat() {cats.shift() }
function appendCat(name) { 
    let myCats = [...cats] 
    myCats.push (name)
    return myCats
}
function prependCat(name) { 
    let myCats = [...cats] 
    myCats.unshift (name)
    return myCats
}
function removeLastCat() { 
    let myCats = [...cats] 
    myCats.pop ()
    return myCats
}
function removeFirstCat() { 
    let myCats = [...cats] 
    myCats.shift ()
    return myCats
}
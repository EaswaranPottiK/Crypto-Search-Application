function searchItems(){
    const searchItem  = window.location.href
    const urlObj = new URL(searchItem)
    const parameter = new URLSearchParams(urlObj.search)
    
    if (!parameter.has('q')){
        return //if query does not have q then return to avoid crash of program
    }

    // //if it has q then sent the value to text box (to avoid value disappear)
    document.getElementsByClassName('text')[0].value = parameter.get('q')
}

window.onload = function begin(){
    searchItems();
}

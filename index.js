const entryForm = document.getElementById('entryForm');

console.log(entryForm);

function addEntryToDom(event){
    event.preventDefault();
    // this prevents the page from refreshing every time we enter text
}

entryForm.addEventListener('submit', addEntryToDom)


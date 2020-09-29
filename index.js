// define const
const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');
const entryTextbox = document.getElementsByClassName('entry-textbox');






function addEntryToDom(event){
    event.preventDefault();
    // this prevents the page from refreshing every time we enter text
    console.log(entryTextbox[0].value);
}

entryForm.addEventListener('submit', addEntryToDom)


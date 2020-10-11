// define const
const entryForm = document.getElementById('entryForm');
const entriesSection = document.getElementById('entries');
const entryTextbox = document.getElementsByClassName('entry-textbox');






function addEntryToDom(event){
    event.preventDefault();
    // this prevents the page from refreshing every time we enter text
    const entryDiv = document.createElement('div');
    // console.log(entryDiv)
//     console.log(entryTextbox[0].value);
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox[0].value;
    entriesSection.appendChild(entryDiv);
}

entryForm.addEventListener('submit', addEntryToDom)


// define const
const entryForm = document.getElementById('entryForm');
const entriesSection = document.querySelector('#entries');
const entryTextbox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');





let count = 1;
function addEntryToDom(event){
    event.preventDefault();
    // this prevents the page from refreshing every time we enter text
    const entryDiv = document.createElement('div');
   
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display = 'none';
    
    entriesSection.appendChild(entryDiv);

    //clear the entry textbox whenever the submit button is clicked
    entryTextbox.value = '';

    const displayEntryButton = document.createElement('button');

    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);

    displayEntryButton.addEventListener('click', function(){
        entryDiv.style.display = 'block';
    })

    count++;
}

entryForm.addEventListener('submit', addEntryToDom)


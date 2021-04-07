let mainBtn = document.getElementById('btn');
let sitesUl = document.querySelector('.sites-list');
let websiteName = document.querySelector('.website-name');
let websiteUrl = document.querySelector('.website-url');

myStorage = window.localStorage;




mainBtn.addEventListener('click', function() {

    
    
    let bookmark = {
        name: websiteName.value,
        url: websiteUrl.value,
    }

    if(localStorage.getItem('bookmarks') === null) {
        
        let bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    } else {

        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    createdElements();
    

});

function createdElements() {

    if(websiteName.value === ''){
        alert('You must input a website name');
        console.log('radi')
    } else {

        let newLi = document.createElement('LI');
        newLi.classList.add('component');
        sitesUl.appendChild(newLi);

        let siteName = document.createElement('p')
        siteName.classList.add('website-names');
        newLi.appendChild(siteName);
        siteName.innerText = websiteName.value;
        
        let visitButton = document.createElement('a');
        visitButton.classList.add('website-visit');
        newLi.appendChild(visitButton);
        visitButton.innerText = 'Visit';
        visitButton.target = "_blank";
        visitButton.href = `${websiteUrl.value}`;

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('website-delete');
        newLi.appendChild(deleteButton);
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function() {
            newLi.remove();
        });

    websiteName.value = '';
    websiteUrl.value = '';

    }

    
};




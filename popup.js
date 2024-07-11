// Initialize button with user’s preferred color
let newPhrase = document.getElementById("newPhrase");
chrome.storage.sync.get("color", ({ color }) => {
    newPhrase.style.backgroundColor = color;
});

//URL is fine;
newPhrase.addEventListener('click', () => {
    alert('BUTTON WAS PRESSED!');

    var img = document.createElement('img');
    img.src = 'https://cataas.com/cat';
    document.getElementById('container').appendChild(img);
});

window.addEventListener('DOMContentLoaded', () => {
    var arrayOfTrendingAndSearched = ['Man', 'Woman', 'Kids', 'Shoes', 'Bags', 'Watches'];
    const trendingAndSearchedDiv = document.querySelector('.trendingAndSearched-parent');
    arrayOfTrendingAndSearched.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('trendingAndSearched');
        itemDiv.textContent = item;
        trendingAndSearchedDiv.appendChild(itemDiv);
    });

    const profileImgs = [];
    for (let i = 1; i <= 5; i++) {
        const profileImg = document.createElement('div');
        profileImg.classList.add('profileImg');
        const rand = getRandomLetterAndColor();
        profileImg.style.backgroundColor = rand.color;
        profileImg.textContent = rand.letter.toUpperCase();
        profileImgs.push(profileImg);
    }

    profileImgs.forEach(img => {
        document.querySelector('.clientProfiles').appendChild(img);
    });

    function getRandomLetterAndColor() {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const colors = ['tomato', 'goldenrod', 'mediumseagreen', 'dodgerblue', 'coral', 'slateblue', 'crimson','darkorange'];
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return { letter: randomLetter, color: randomColor };
    }
});

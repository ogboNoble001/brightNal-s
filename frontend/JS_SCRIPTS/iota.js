window.addEventListener('DOMContentLoaded', () => {
    
    // Scroll event to add shadow to navbar on scroll
    const navbar = document.querySelector('.navigation-home');
    window.addEventListener('scroll', () => {});
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }); 
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
    
    const container = document.querySelector(".animateTxt");
  if (container) {
    const words = container.textContent.trim().split(/\s+/);
    container.textContent = "";
    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.textContent = word + "\u00A0";
      span.style.animationDelay = `${index * 0.15}s`;
      container.appendChild(span);
    });
  }
  
  function animateOdometer(selector, delay = 100, rolls = 10) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        const digitsArray = Array.from(text);
        
        digitsArray.forEach((char, idx) => {
            const span = document.createElement('span');
            span.classList.add('digit');
            el.appendChild(span);
            
            setTimeout(() => {
                span.classList.add('active', 'rolling');
                let count = 0;
                
                const interval = setInterval(() => {
                    span.textContent = Math.floor(Math.random() * 10);
                    count++;
                    
                    if (count >= rolls) {
                        clearInterval(interval);
                        span.textContent = char;
                        span.classList.remove('rolling');
                    }
                }, delay);
            }, idx * 50);
        });
    });
}
animateOdometer( '.mainSectione', 100, 25);
})
(function()
{
    let info = document.querySelector('body').querySelector('.ytp-right-controls');//'#info-contents');

    let openBtn = document.createElement('button');

    openBtn.classList.add('ytp-button');
    openBtn.ariaLabel = 'Better YouTube Theater';
    openBtn.title = 'Better YouTube Theater';
    openBtn.innerHTML = `<svg height="auto" version="1.1" viewBox="0 0 36 36" width="auto"><use class="ytp-svg-shadow"></use><image xlink:href="https://nxg9997.github.io/BetterYTTheater/BYTT.svg" width="70%" height="70%" x="10%" y="10%"/></svg>`;
    
    openBtn.onclick = (e) => {
        let urlParams = new URLSearchParams(location.search);
        let vId = urlParams.get('v');
        window.location = `https://nxg9997.github.io/BetterYTTheater?v=${vId}`;
    };

    info.appendChild(openBtn);
    console.log(openBtn);
})();
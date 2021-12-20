(function()
{
    let info = document.querySelector('body').querySelector('.ytp-right-controls');//'#info-contents');

    let openBtn = document.createElement('button');

    openBtn.classList.add('ytp-button');
    openBtn.ariaLabel = 'Better YouTube Theater';
    openBtn.title = 'Better YouTube Theater';
    openBtn.innerHTML = `<svg height="auto" version="1.1" viewBox="0 0 36 36" width="auto"><use class="ytp-svg-shadow"></use><image xlink:href="http://nozdormu.ng:8000/BYTT.svg" width="70%" height="70%" x="10%" y="10%"/></svg>`;
    
    openBtn.onclick = (e) => {
        let urlParams = new URLSearchParams(location.search);
        let vId = urlParams.get('v');
        window.location = `http://nozdormu.ng:8000?v=${vId}`;
    };

    info.appendChild(openBtn);
    console.log(openBtn);
})();
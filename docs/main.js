let videoData = null;

function urlify(text) {
    let urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g;
    text = '<p>' + text;
    return text.replace(urlRegex, function(url) {
        return '</p><a href="' + url + '">' + url + '</a><p>';
    }) + '</p>';
}

(function()
{
    let urlParams = new URLSearchParams(location.search);
    let vId = urlParams.get('v');

    let stream = document.querySelector('#video-stream');

    stream.src = `https://www.youtube.com/embed/${vId}?&autoplay=1`;

    console.log('loaded js n8');

    let frame = document.createElement("iframe");  
    frame.referrerPolicy = "origin";  
    frame.src = `https://www.youtube.com/live_chat?v=${vId}&embed_domain=${window.location.hostname}`;  
    frame.frameBorder = "0";  
    frame.id = "chat";  
    let wrapper = document.getElementById("theater-mode");  
    wrapper.appendChild(frame);

    //AIzaSyAi1aivqx2WXxuwEodcfuyqtJdMlsmEIsA
    //https://www.googleapis.com/youtube/v3/videos?id=dxsQwaRjvHY&key=AIzaSyAi1aivqx2WXxuwEodcfuyqtJdMlsmEIsA&part=snippet

    fetch(`https://www.googleapis.com/youtube/v3/videos?id=${vId}&key=AIzaSyAi1aivqx2WXxuwEodcfuyqtJdMlsmEIsA&part=snippet`, {method: 'get'}).then(res=>{
        res.json().then(data=>{

            console.log(data);
            videoData = data;

            let title = document.querySelector('#video-title');
            let name = document.querySelector('#channel-name');
            let nameLink = document.querySelector('#channel-link');
            let description = document.querySelector('#video-description');

            title.innerText = videoData['items'][0]['snippet']['title'];
            name.innerText = videoData['items'][0]['snippet']['channelTitle'];
            document.title = `${videoData['items'][0]['snippet']['title']} - ${videoData['items'][0]['snippet']['channelTitle']} - Better YouTube Theater`;
            nameLink.href = `https://www.youtube.com/channel/${videoData['items'][0]['snippet']['channelId']}`;
            let descripText = urlify(videoData['items'][0]['snippet']['description']);
            description.innerHTML = descripText;
            console.log(descripText);
        });
    });
})();
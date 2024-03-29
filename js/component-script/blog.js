var photoData;
// add event listeners on video
addEventListenersOnBgVideo();

function addEventListenersOnBgVideo() {
    const video = document.querySelector('div video');
    const playBtn = document.querySelector('a#playbtn');
    const videodiv = document.querySelector('div#jumpvideo');
    console.log(playBtn);
    playBtn.addEventListener('click', () => {
        console.log('clicked');
        videodiv.style.display = 'block';
        video.play();
    });
    video.addEventListener('ended', () => {
        videodiv.style.display = 'none';
    });

}

// function removeVideo() {
//     const video = document.querySelector('div#jumpvideo');
//     video.style.display = 'none';
// }

function _bindRecentBlogData() {
    let recentBlogData = myBucketList();
    let location = document.querySelector('a#bungyloc');
    location.href = recentBlogData[0].jumpsStats[0].mapLocation;
    photoData = recentBlogData[0].jumpsStats[0].allPhotoBlogData;
    photoData.map((data, index) => setBlogTemplateOnUI(initializeBlogComponent(data), index));
}

function initializeBlogComponent(data, index) {
    let blogTemplate = document.querySelector('#photo-container');
    let blogCard = blogTemplate.content.querySelector('.photo-grid');
    let caption = blogTemplate.content.querySelector('h2');
    let quote = blogTemplate.content.querySelectorAll('h4')[0];
    let detail = blogTemplate.content.querySelectorAll('h4')[1];
    let timeStamp = blogTemplate.content.querySelector('sub');
    let img = blogTemplate.content.querySelector('img');
    blogCard.style.background = "rgba(93,159,183,0.7)";
    caption.innerHTML = data.caption;
    quote.innerHTML = `<i class="fa fa-quote-left" aria-hidden="true"></i><i> ${data.quote} </i><i class="fa fa-min fa-quote-right" aria-hidden="true"></i>`;
    detail.innerHTML = data.detail;
    timeStamp.innerHTML = data.timeStamp;
    img.src = `../img/bungy/optimized/${data.photoId}`;
    return blogTemplate;
}

/**
 * Swaps the photos position alternatively for effect.
 * @param {*} blogSection 
 */
function swapPhotoPosition(blogSection) {
    let photo = blogSection.querySelectorAll('div.photo-full');
    let text = blogSection.querySelectorAll('div.photo-detail');
    console.log(photo);
    photo = Array.from(photo);
    text = Array.from(text);
    photo.map((item, index) => item.style.order = index % 2 === 0 ? 2 : 1);
    text.map((item, index) => item.style.order = index % 2 === 0 ? 1 : 2);
}



function setBlogTemplateOnUI(newBlogTemplate, index) {
    let blogSection = document.querySelector('article');
    let blogBody = document.importNode(newBlogTemplate.content, true);
    blogSection.appendChild(blogBody);
    // swap position of divs for even and odd entries
    if (index === photoData.length - 1) {
        swapPhotoPosition(blogSection);
    }

}
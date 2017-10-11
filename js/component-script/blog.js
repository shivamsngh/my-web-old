var photoData;
function _bindRecentBlogData() {
    let recentBlogData = myBucketList();
    photoData = recentBlogData[0].jumpsStats[0].allPhotoBlogData;
    recentBlogData[0].jumpsStats[0].allPhotoBlogData
        .map((data, index) => this.setBlogTemplateOnUI(this.initializeBlogComponent(data), index));
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
    img.src=`../img/bungy/${data.photoId}`;
    return blogTemplate;
}

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
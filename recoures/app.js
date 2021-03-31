


async function api() {
    let html =``;
    const data = []
    const resStoryID = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    const storyID = await resStoryID.json()
    for(let i = 0; i < 20; i++) {
        const resStory = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyID[i]}.json?print=pretty`)
        const story = await resStory.json()
        data.push(story)
        // vi minh chi co 1 cai tk co class la left nen phai dung` la content[0] de lay phan tu dau tien cua mang xong innerHTml thoi
        if (i === 0) {
            renderLeftNews(story);
        } else if (i > 0 && i < 3) {
            renderRightNews(story);
        } else if (i >= 3 && i < 5) {
            renderLeftHl(story);
        } else if (i >= 5 && i < 7) {
            renderRightHl(story)
        } else if (i >= 7 && i < 9) {
            renderTrending1(story)
        } else if (i >= 9 && i < 11) {
            renderTrending2(story)
        } else if (i >= 11 && i < 13) {
            renderTrending3(story)
        } else if (i >= 13 && i < 15) {
            renderTrending4(story)
        } else if (i===15) {
            renderEditorPick1(story);
        } else if (i===16) {
            renderEditorPick2(story);
        } else if (i===17) {
            renderEditorPick3(story);
        } 
    }
    console.log(data);
}
// function render 3 bai viet dau tien1
function renderLeftNews(data) {
    const firstArticleElement = document.getElementsByClassName('left'); // Cai nay return ve 1 array chua' nhung element co class la left
    firstArticleElement[0].innerHTML = `
        <div class="posts">
            <img src="http://www.vprowand.com/html5/goodnews/images/thumbs/9.jpg" alt="thumbs">
            <p class="author">${data.by}</p>
            <p class="title">${data.title}</p>
            <p>I think your best bet would be to start or join a startup. That's been a reliable way to get rich
                for hundreds of years.The word "startup" dates from the 1960s, but what happens in one is very
                similar.</p>
            <div class="post-info">
                <a class="share" href="#"><i class="fas fa-share"></i>12</a>
                <a class="comments" href="#"><i class="fas fa-comment"></i>0</a>
            </div>
        </div>
    `
}

function renderRightNews(data) {
    const firstArticleElement = document.getElementsByClassName('right');
    firstArticleElement[0].innerHTML += `
        <div class="posts">
            <img src="http://www.vprowand.com/html5/goodnews/images/thumbs/9.jpg" alt="thumbs">
            <p class="author">${data.by}</p>
            <p class="title">${data.title}</p>
            <div class="post-info">
                <a class="share" href="#"><i class="fas fa-share"></i>12</a>
                <a class="comments" href="#"><i class="fas fa-comment"></i>0</a>
            </div>
        </div>
    `
}

function renderLeftHl(data) {
    const firstArticleElement = document.getElementsByClassName('left-side');
    firstArticleElement[0].innerHTML += `
    <div class="posts">
    <a href="#">
        <img src="http://www.vprowand.com/html5/goodnews/images/thumbs/7.jpg" alt="">
        <p class="author">${data.by}</p>
        <p class="title">${data.title}
        </p>
        <div class="post-info">
            <a class="share" href="#"><i class="fas fa-share"></i>212</a>
            <a class="comments" href="#"><i class="fas fa-comment"></i>50</a>
        </div>
    </a>
</div>`
}

function renderRightHl(data) {
    const firstArticleElement = document.getElementsByClassName('right-side');
    firstArticleElement[0].innerHTML += `
    <div class="posts">
    <a href="#">
        <img src="http://www.vprowand.com/html5/goodnews/images/thumbs/7.jpg" alt="">
        <p class="author">${data.by}</p>
        <p class="title">${data.title}
        </p>
        <div class="post-info">
            <a class="share" href="#"><i class="fas fa-share"></i>212</a>
            <a class="comments" href="#"><i class="fas fa-comment"></i>50</a>
        </div>
    </a>
</div>`
}

function renderTrending1(data) {
    const firstArticleElement = document.getElementsByClassName('c1');
    firstArticleElement[0].innerHTML += `<div class="posts">
    <img src="http://www.vprowand.com/html5/goodnews/images/thumbs/5.jpg" alt="...">
    <p class="author">${data.by}</p>
    <p class="title">${data.title}</p>
</div>`
}

function renderTrending2(data) {
    const firstArticleElement = document.getElementsByClassName('c2');
    firstArticleElement[0].innerHTML += `<div class="posts">
    <img src="http://www.vprowand.com/html5/goodnews/images/thumbs/5.jpg" alt="...">
    <p class="author">${data.by}</p>
    <p class="title">${data.title}</p>
</div>`
}

function renderTrending3(data) {
    const firstArticleElement = document.getElementsByClassName('c3');
    firstArticleElement[0].innerHTML += `<div class="posts">
    <img src="http://www.vprowand.com/html5/goodnews/images/thumbs/5.jpg" alt="...">
    <p class="author">${data.by}</p>
    <p class="title">${data.title}</p>
</div>`
}

function renderTrending4(data) {
    const firstArticleElement = document.getElementsByClassName('c4');
    firstArticleElement[0].innerHTML += `<div class="posts">
    <img src="http://www.vprowand.com/html5/goodnews/images/thumbs/5.jpg" alt="...">
    <p class="author">${data.by}</p>
    <p class="title">${data.title}</p>
</div>`
}

function renderEditorPick1(data) {
    const firstArticleElement = document.getElementsByClassName('a1');
    firstArticleElement[0].innerHTML += `<div class="thumb">
    <a href="#"><img src="http://www.vprowand.com/html5/goodnews/images/thumbs/6.jpg" alt=""></a>
</div>
<div class="posts">
    <p class="title">${data.title}</p>
    <p>I think your best bet would be to start or join a startup. That's been a reliable way to get rich for
        hundreds of years.</p>
    <div class="post-info">
        <a class="share" href="#"><i class="fas fa-share"></i></a>
        <a class="comments" href="#"><i class="fas fa-comment"></i></a>
    </div>
</div>` }

function renderEditorPick2(data) {
    const firstArticleElement = document.getElementsByClassName('a2');
    firstArticleElement[0].innerHTML += `<div class="thumb">
    <a href="#"><img src="http://www.vprowand.com/html5/goodnews/images/thumbs/6.jpg" alt=""></a>
</div>
<div class="posts">
    <p class="title">${data.title}</p>
    <p>I think your best bet would be to start or join a startup. That's been a reliable way to get rich for
        hundreds of years.</p>
    <div class="post-info">
        <a class="share" href="#"><i class="fas fa-share"></i></a>
        <a class="comments" href="#"><i class="fas fa-comment"></i></a>
    </div>
</div>` }
function renderEditorPick3(data) {
    const firstArticleElement = document.getElementsByClassName('a3');
    firstArticleElement[0].innerHTML += `<div class="thumb">
    <a href="#"><img src="http://www.vprowand.com/html5/goodnews/images/thumbs/6.jpg" alt=""></a>
</div>
<div class="posts">
    <p class="title">${data.title}</p>
    <p>I think your best bet would be to start or join a startup. That's been a reliable way to get rich for
        hundreds of years.</p>
    <div class="post-info">
        <a class="share" href="#"><i class="fas fa-share"></i></a>
        <a class="comments" href="#"><i class="fas fa-comment"></i></a>
    </div>
</div>` }






api();

async function api() {
  let html = ``;
  const data = [];
  const resStoryID = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );
  const storyID = await resStoryID.json();
  for (let i = 0; i < 20; i++) {
    const resStory = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyID[i]}.json?print=pretty`
    );
    const story = await resStory.json();
    data.push(story);
    // vi minh chi co 1 cai tk co class la left nen phai dung` la content[0] de lay phan tu dau tien cua mang xong innerHTml thoi
    if (i === 0) {
      renderLeftNews(story);
    } else if (i === 1) {
      renderRightNews(story);
    } else if (i === 2) {
      renderRightUnder(story);
    } else if (i >= 3 && i < 5) {
      renderLeftHl(story);
    } else if (i >= 5 && i < 7) {
      renderRightHl(story);
    } else if (i >= 7 && i < 9) {
      renderTrending1(story);
    } else if (i >= 9 && i < 11) {
      renderTrending2(story);
    } else if (i >= 11 && i < 13) {
      renderTrending3(story);
    } else if (i >= 13 && i < 15) {
      renderTrending4(story);
    } else if (i === 15) {
      renderEditorPick1(story);
    } else if (i === 16) {
      renderEditorPick2(story);
    } else if (i === 17) {
      renderEditorPick3(story);
    }
  }
  console.log(data);
}
// function render 3 bai viet dau tien
function renderLeftNews(data) {
  const firstArticleElement = document.getElementsByClassName("left"); // Cai nay return ve 1 array chua' nhung element co class la left
  firstArticleElement[0].innerHTML = `
        <div class="posts">
        <a href="#"><p class="title" style ='color: white;'>${data.title}</p></a>
            <p class="author">${data.by}</p>
            <p>I think your best bet would be to start or join a startup. That's been a reliable way to get rich
                for hundreds of years.The word "startup" dates from the 1960s, but what happens in one is very
                similar.</p>
        </div>
    `;
}

function renderRightNews(data) {
  const firstArticleElement = document.getElementsByClassName("right-above");
  firstArticleElement[0].innerHTML += `
        <div class="posts">
            
            <a href="#"><p class="title" style ='color: white;'>${data.title}</p></a>
            <p class="author">${data.by}</p>
        </div>
    `;
}

function renderRightUnder(data) {
  const firstArticleElement = document.getElementsByClassName("right-under");
  firstArticleElement[0].innerHTML += `
        <div class="posts">
            
        <a href="#"><p class="title" style ='color: white;'>${data.title}</p></a>
            <p class="author">${data.by}</p>
        </div>
    `;
}
// render phần highlights
function renderLeftHl(data) {
  const firstArticleElement = document.getElementsByClassName("left-side");
  firstArticleElement[0].innerHTML += `
    <div class="posts">
    <a href="#">
        <img src="https://media.congluan.vn/files/huyhoang/2021/01/30/tesla-model-x-2021-3-2322.jpg" alt="thumb">
        <p class="author hl-text">${data.by}</p>
        <p class="title hl-text">${data.title}
        </p>
        <div class="post-info hl-text">
            <a class="share" href="#"><i class="fas fa-thumbs-up">${data.score}</i></a>
        </div>
    </a>
</div>`;
}

function renderRightHl(data) {
  const firstArticleElement = document.getElementsByClassName("right-side");
  firstArticleElement[0].innerHTML += `
    <div class="posts">
    <a href="#">
        <img src="https://www.metalocus.es/sites/default/files/styles/mopis_news_gallery_first_deskop/public/metalocus_concept_activation-and-connectivity_04.jpg?itok=Nmyy-fCS" alt="">
        <p class="author hl-text">${data.by}</p>
        <p class="title hl-text">${data.title}
        </p>
        <div class="post-info hl-text">
            <a class="share" href="#"><i class="fas fa-thumbs-up">${data.score}</i></a>
        </div>
    </a>
</div>`;
}

// render trending
function renderTrending1(data) {
  const firstArticleElement = document.getElementsByClassName("c1");
  firstArticleElement[0].innerHTML += `<div class="posts">
    
    <p class="author">${data.by}</p>
    <p class="title">${data.title}</p>
</div>`;
}

function renderTrending2(data) {
  const firstArticleElement = document.getElementsByClassName("c2");
  firstArticleElement[0].innerHTML += `<div class="posts">
    <p class="author">${data.by}</p>
    <p class="title">${data.title}</p>
</div>`;
}

function renderTrending3(data) {
  const firstArticleElement = document.getElementsByClassName("c3");
  firstArticleElement[0].innerHTML += `<div class="posts">
    
    <p class="author">${data.by}</p>
    <p class="title">${data.title}</p>
</div>`;
}

function renderTrending4(data) {
  const firstArticleElement = document.getElementsByClassName("c4");
  firstArticleElement[0].innerHTML += `<div class="posts">
    
    <p class="author">${data.by}</p>
    <p class="title">${data.title}</p>
</div>`;
}

//Render EditorPick
function renderEditorPick1(data) {
  const firstArticleElement = document.getElementsByClassName("a1");
  firstArticleElement[0].innerHTML += `<div class="thumb">
    <a href="#"><img src="https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2020-05/45-258-suez.jpg?itok=sU0Wso-C" alt=""></a>
</div>
<div class="posts">
    <p class="title">${data.title}</p>
    <p class="author">${data.by}</p>
    <p>I think your best bet would be to start or join a startup. That's been a reliable way to get rich for
        hundreds of years.</p>
        <div class="post-info">
        <a class="share" href="#"><i class="fas fa-thumbs-up">${data.score}</i></a>
    </div>
</div>`;
}

function renderEditorPick2(data) {
  const firstArticleElement = document.getElementsByClassName("a2");
  firstArticleElement[0].innerHTML += `<div class="thumb">
    <a href="#"><img src="http://www.vprowand.com/html5/goodnews/images/thumbs/6.jpg" alt=""></a>
</div>
<div class="posts">
    <p class="title">${data.title}</p>
    <p class="author">${data.by}</p>
    <p>That's been a reliable way to get rich for hundreds of years.The word "startup" dates from the 1960s, but what happens in one is very similar.</p>
        <div class="post-info">
        <a class="share" href="#"><i class="fas fa-thumbs-up">${data.score}</i></a>
    </div>
</div>`;
}
function renderEditorPick3(data) {
  const firstArticleElement = document.getElementsByClassName("a3");
  firstArticleElement[0].innerHTML += `<div class="thumb">
    <a href="#"><img src="https://thoughtbrick.com/wp-content/uploads/2019/12/Meet-people-where-theyre-at-everyday-life.jpg" alt=""></a>
</div>
<div class="posts">
    <p class="title">${data.title}</p>
    <p class="author">${data.by}</p>
    <p>Instead of working at a low intensity for forty years, you work as hard as you possibly can for four.</p>
        <div class="post-info">
        <a class="share" href="#"><i class="fas fa-thumbs-up">${data.score}</i></a>
    </div>
</div>`;
}

api();


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
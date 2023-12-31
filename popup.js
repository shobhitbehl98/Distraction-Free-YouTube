let feed = document.getElementById('feed');
let sidebar = document.getElementById('sidebar');
let shorts = document.getElementById('shorts');
let github = document.getElementById('github');
let comments = document.getElementById('comments');
github.addEventListener('click',()=>{
    chrome.tabs.create({ url: "https://github.com/shobhitbehl98/Distraction-Free-YouTube" });
})
chrome.storage.sync.get(['feed'], function (result) {
    if (result.feed) {
        feed.checked = result.feed;
    }
});
chrome.storage.sync.get(['sidebar'], function (result) {
    if (result.sidebar) {
        sidebar.checked = result.sidebar;
    }
});
chrome.storage.sync.get(['shorts'], function (result) {
    if (result.shorts) {
        shorts.checked = result.shorts;
    }
});
chrome.storage.sync.get(['comments'], function (result) {
    if (result.comments) {
        comments.checked = result.comments;
    }
});
feed.addEventListener('click',()=>{
    chrome.runtime.sendMessage({ type: 'feed', data: feed.checked });
})

sidebar.addEventListener('click',()=>{
    chrome.runtime.sendMessage({ type: 'sidebar', data: sidebar.checked });
})

shorts.addEventListener('click',()=>{
    chrome.runtime.sendMessage({ type: 'shorts', data: shorts.checked });
})
comments.addEventListener('click',()=>{
    chrome.runtime.sendMessage({ type: 'comments', data: comments.checked });
})

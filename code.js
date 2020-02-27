var siteWidth = 853;
var siteHeight = 531;
var scale1 = window.innerWidth /siteWidth;
var scale2 = window.innerHeight /siteHeight;
var scale = Math.min(scale1, scale2);

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', height='+siteHeight+', initial-scale='+scale+'');

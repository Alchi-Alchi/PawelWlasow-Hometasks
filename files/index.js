let pageName;
let linkUrl = 'pages/' + pageName + '.html';
let content = document.getElementById ('article');
function SwitchToArticlePage() {
  SwitchToState({pagename: 'Статья'}); 
  let xhr = new XMLHttpRequest ();
  xhr.open ('GET', linkUrl, true);
  if (xhr.readyState === 4 && xhr.status === 200) {
    content.innerHTML = xhr.responseXML;
    console.log (xhr.responseText);
  } else {
    console.log ('error');
  }
  xhr.send ();
}
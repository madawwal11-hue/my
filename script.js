function getThumbnail(){
  let url = document.getElementById('ytUrl').value;
  let id = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
  if(id){
    document.getElementById('result').innerHTML = `<img src="https://img.youtube.com/vi/${id}/maxresdefault.jpg" width="100%"><br><br><a href="https://img.youtube.com/vi/${id}/maxresdefault.jpg" target="_blank" class="btn">Download HD Thumbnail</a>`;
  } else { alert('Paste a valid YouTube URL'); }
}
function generateTitle(){
  let topic = document.getElementById('topic').value;
  if(!topic) return alert('Enter topic');
  let titles = [`How I Got 1000 Subs With ${topic}`, `7 Secrets About ${topic} No One Tells You`, `I Tried ${topic} For 30 Days - Result?`, `${topic} For Beginners - Full Guide`];
  document.getElementById('titleResult').innerHTML = titles.map(t=>`<p>🔥 ${t}</p>`).join('');
}

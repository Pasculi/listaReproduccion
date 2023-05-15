const songsContainer = document.querySelector(".songs-container");
const addButton = document.querySelector(".input__btn_action_add");
const artistInput = document.querySelector(".input__text_type_artist");
const titleInput = document.querySelector(".input__text_type_title");
const form = document.forms.add;
const artist = form.elements.artist;
const title = form.elements.title;

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector("#song-template").content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector(".song__artist").textContent = artistValue;
  songElement.querySelector(".song__title").textContent = titleValue;
 
  songsContainer.append(songElement);
  artistInput.value = "";
  titleInput.value = "";
}

function keyHandler(evt) {
  if (evt.key === "Enter") {
    addSong(artistInput.value, titleInput.value);
  }
}

artistInput.addEventListener("keydown", keyHandler);
titleInput.addEventListener("keydown", keyHandler);

songsContainer.addEventListener('click', function(evt){
    if(evt.target.classList.contains("song__like")){
        evt.target.classList.toggle("song__like_active");
    }
});

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    console.log(evt)
})
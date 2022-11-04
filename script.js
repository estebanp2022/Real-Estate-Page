let storyBackground = document.querySelector(".story-pictures");

async function getPhotos() {
  let response = await fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=interiors&count=10"
  );
  let photos = await response.json();
  return photos;
}

getPhotos().then((photos) => {
  console.log(photos);
  storyBackground.innerHTML = `
        <img class="img-1" src="${photos[0].urls.small}">
        <img class="img-2" src="${photos[1].urls.small}">
    `;
  storyBackground.style.backgroundImage = `url(${photos[3].urls.regular})`;
});

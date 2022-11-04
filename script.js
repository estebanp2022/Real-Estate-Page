let storyBackground = document.querySelector(".story-pictures");
let img1 = document.querySelector(".home-img-1");
let img2 = document.querySelector(".home-img-2");
let img3 = document.querySelector(".home-img-3");
let img4 = document.querySelector(".home-img-4");
let img5 = document.querySelector(".home-img-5");
let img6 = document.querySelector(".home-img-6");
let galleryImg1 = document.querySelector(".gallery-img-1");
let galleryImg2 = document.querySelector(".gallery-img-2");
let galleryImg3 = document.querySelector(".gallery-img-3");
let galleryImg4 = document.querySelector(".gallery-img-4");
let galleryImg5 = document.querySelector(".gallery-img-5");
let galleryImg6 = document.querySelector(".gallery-img-6");
let galleryImg7 = document.querySelector(".gallery-img-7");
let galleryImg8 = document.querySelector(".gallery-img-8");
let galleryImg9 = document.querySelector(".gallery-img-9");
let galleryImg10 = document.querySelector(".gallery-img-10");
let galleryImg11 = document.querySelector(".gallery-img-11");
let galleryImg12 = document.querySelector(".gallery-img-12");
let galleryImg13 = document.querySelector(".gallery-img-13");
let galleryImg14 = document.querySelector(".gallery-img-14");

async function getInteriorPhotos() {
  let response = await fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=interiors&count=10"
  );
  let photos = await response.json();
  return photos;
}

getInteriorPhotos().then((photos) => {
  // console.log(photos);
  storyBackground.innerHTML = `
        <img class="img-1" src="${photos[0].urls.small}">
        <img class="img-2" src="${photos[1].urls.small}">
    `;
  storyBackground.style.backgroundImage = `url(${photos[3].urls.regular})`;
});

async function getHomePhotos() {
  let response = await fetch(
    "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=luxury-homes&count=20"
  );
  let photos = await response.json();
  return photos;
}

getHomePhotos().then((photos) => {
  console.log(photos);
  img1.src = `${photos[0].urls.regular}`;
  img2.src = `${photos[1].urls.regular}`;
  img3.src = `${photos[2].urls.regular}`;
  img4.src = `${photos[3].urls.regular}`;
  img5.src = `${photos[4].urls.regular}`;
  img6.src = `${photos[5].urls.regular}`;

  galleryImg1.src = `${photos[6].urls.regular}`;
  galleryImg2.src = `${photos[7].urls.regular}`;
  galleryImg3.src = `${photos[8].urls.regular}`;
  galleryImg4.src = `${photos[9].urls.regular}`;
  galleryImg5.src = `${photos[10].urls.regular}`;
  galleryImg6.src = `${photos[11].urls.regular}`;
  galleryImg7.src = `${photos[12].urls.regular}`;
  galleryImg8.src = `${photos[13].urls.regular}`;
  galleryImg9.src = `${photos[14].urls.regular}`;
  galleryImg10.src = `${photos[15].urls.regular}`;
  galleryImg11.src = `${photos[16].urls.regular}`;
  galleryImg12.src = `${photos[17].urls.regular}`;
  galleryImg13.src = `${photos[18].urls.regular}`;
  galleryImg14.src = `${photos[19].urls.regular}`;
});

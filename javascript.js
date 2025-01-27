const scrollLeftButton = document.getElementById('scrollLeft');
const scrollRightButton = document.getElementById('scrollRight');
const imageContainer = document.getElementById('imageContainer');

scrollLeftButton.addEventListener('click', () => {
  imageContainer.scrollBy({ left: -1265, behavior: 'smooth' });
});

scrollRightButton.addEventListener('click', () => {
  imageContainer.scrollBy({ left: 1265, behavior: 'smooth' });
});
//second  scrollbar
const scrollLeftButton2 = document.getElementById('scrollLeft2');
const scrollRightButton2 = document.getElementById('scrollRight2');
const imageContainer2 = document.getElementById('imageContainer2');

scrollLeftButton2.addEventListener('click', () => {
  imageContainer2.scrollBy({ left: -335, behavior: 'smooth' });
});

scrollRightButton2.addEventListener('click', () => {
  imageContainer2.scrollBy({ left: 335, behavior: 'smooth' });
});
//third scrollbar
const scrollLeftButton3 = document.getElementById('scrollLeft3');
const scrollRightButton3 = document.getElementById('scrollRight3');
const imageContainer3 = document.getElementById('imageContainer3');

scrollLeftButton3.addEventListener('click', () => {
  imageContainer3.scrollBy({ left: -350, behavior: 'smooth' });
});

scrollRightButton3.addEventListener('click', () => {
  imageContainer3.scrollBy({ left: 350, behavior: 'smooth' });
});
//fourth scroll

const scrollLeftButton4 = document.getElementById('scrollLeft4');
const scrollRightButton4 = document.getElementById('scrollRight4');
const imageContainer4 = document.getElementById('imageContainer4');

scrollLeftButton4.addEventListener('click', () => {
  imageContainer4.scrollBy({ left: -380, behavior: 'smooth' });
});

scrollRightButton4.addEventListener('click', () => {
  imageContainer4.scrollBy({ left: 380, behavior: 'smooth' });
});
//fifth scroll
const scrollLeftButton5 = document.getElementById('scrollLeft5');
const scrollRightButton5 = document.getElementById('scrollRight5');
const imageContainer5 = document.getElementById('imageContainer5');

scrollLeftButton5.addEventListener('click', () => {
  imageContainer5.scrollBy({ left: -380, behavior: 'smooth' });
});

scrollRightButton5.addEventListener('click', () => {
  imageContainer5.scrollBy({ left: 380, behavior: 'smooth' });
});

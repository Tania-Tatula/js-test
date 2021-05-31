const hero = document.querySelector('.hero');
const names = ['Devileye', 'Oups', 'DazYazab', 'Mr3vil', 'Sunisup', 'Nanilui', 'Prezakas', 'WukOng', 'Lio', 'AndroidNumero16', 'Uberzoe', 'Nocturne', 'Wio', 'Curaj', 'SirMime', 'Kurama', 'Kukukoko', 'MaxPad', 'Sibbi', 'Zolker'];
const heroNames =[];

// створюємо генератор випадковх чисел
function fontSize(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

// створюємо генератор випадкової розміру літер
  function textTransform() {
    let transform = '';
      let number = fontSize(1, 2);
      if(number == 1){
        transform = 'capitalize';
      }
      else{
        transform = 'uppercase';
      }
      return transform;
  }

//   створюємо розмітку кожного імені героя разом зі стилями
  names.map(name => heroNames.push(
      `<p style="font-size: ${fontSize(10, 14)}px; text-transform:${textTransform()}; margin-top: ${fontSize(5, 12)}px;">${name}</p>`));

// рендеримо розмітку
  hero.innerHTML = heroNames.join(' ');
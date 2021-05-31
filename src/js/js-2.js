const sendPicture = document.querySelector('.sendPicture');
const picture = document.querySelector('.picture');
const choosePicture = document.querySelector('.choosePicture');

// запускає функцію відмальовки картинки 
 choosePicture.addEventListener('change', addsPicture, false);


//  перетворює завантажену картинку в url посилання на неї та рендерить її в розмітку
 function addsPicture() { 
    pictureOfsendPicture(choosePicture.files);

     const file = choosePicture.files[0]; 
     let reader = new FileReader();
 reader.readAsDataURL(file);
 reader.onload = function(){
        picture.innerHTML = `<img src="${reader.result}" alt="your picture"></img>`;

 }
 }


//  передає картинку в другий інпут
 function pictureOfsendPicture(files) {
    sendPicture.files = files;

 }
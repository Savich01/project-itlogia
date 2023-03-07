document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
};

let buttons = document.getElementsByClassName("car-button");
for (let i = 0; i <buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("reserve").scrollIntoView({behavior: "smooth"});
    };
}

document.getElementById("prise-action").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Заполните поле имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Заполните поле вашим номером телефона!");
    } else if (document.getElementById("car").value === "") {
        alert("Укажите автомобиль, который вас интересует!");
    } else {
        alert("Спасибо за заявку мы свяжемся с вами в скором времени!");
    }

};

document.addEventListener("DOMContentLoaded", function () {
  let layer = document.querySelector('.reserve__img');
  document.addEventListener('mousemove', (event) => {
    layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
  });

  const elem = document.querySelector(".main");
  document.addEventListener('scroll', () => {
    elem.style.backgroundPositionX = '0' + (0.5 * window.pageYOffset) + 'px';
  });
});
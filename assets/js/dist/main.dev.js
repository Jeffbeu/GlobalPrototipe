"use strict";

var c = function c(el) {
  return document.querySelector(el);
};

function typeWriter(elemento) {
  var textArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textArray.forEach(function (letra, index) {
    setTimeout(function () {
      return elemento.innerHTML += letra;
    }, 40 * index);
  });
}

var titulo = c('h1');
typeWriter(titulo);
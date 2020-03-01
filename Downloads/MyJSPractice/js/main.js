'use strict';

{
  const btn = document.getElementById("btn");

  btn.addEventListener('click', () => {
    console.log("ok");
    btn.textContent = "hit!";
  });
}

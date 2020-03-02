'use strict';

{
  const btn = document.getElementById("btn");

  const words = ["大吉", "中吉", "小吉"];

  btn.addEventListener('click', () => {
    //console.log(words[random]);
    const random = Math.floor( Math.random() * words.length);
    btn.textContent = words[random];
  });

}

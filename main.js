const text = document.querySelector('.circle-textcontent p');
text.innerHTML = text.innerText.split("").map(
    (char,i) =>
    `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`
).join("")


const btn = document.querySelector('.btn');
const colorText = document.querySelector('.color-code');

const colors = ["Red", "Blue", "Yellow", "Purple", "Green", "Orange",]

btn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * colors.length)
    console.log(randomNumber)

    const selectedColor = colors[randomNumber]

    document.body.style.backgroundColor = selectedColor;

    colorText.textContent = selectedColor;
})
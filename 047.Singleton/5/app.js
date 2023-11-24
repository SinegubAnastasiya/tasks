// 5. При наведении курсора на изображение, необходимо осуществить замену этого
// изображения на другое.

class Html{
    changeImg() {
        const img = document.querySelector('img');
        
        img.addEventListener('mouseover', () => {
            img.src = "./assets/img2.jpeg";
        })
        
        img.addEventListener('mouseout', () => {
            img.src = "./assets/img1.png";
        })
    }
}

const html = new Html();
html.changeImg();

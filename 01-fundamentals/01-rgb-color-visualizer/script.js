const ranges = document.querySelectorAll('.range');
const counters = document.querySelectorAll('.counter');
const color = document.querySelector('.color');

let red = 0;
let green = 0;
let blue = 0;

for (const range of ranges) {
    range.addEventListener('input', (e) => {
        const target = e.target;
        switch (target.name) {
            case 'red':
                red = target.value;
                break;
            case 'green':
                green = target.value;
                break;
            case 'blue':
                blue = target.value;
                break;
        }
        color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        for(const counter of counters) {
            if (counter.name === target.name) counter.value = range.value;            
        }
    })
}


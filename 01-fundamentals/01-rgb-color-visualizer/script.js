const ranges = document.querySelectorAll('.range');
const counters = document.querySelectorAll('.counter');
const color = document.querySelector('.color');

let red, green, blue = 0;



for (let range of ranges) {
    range.addEventListener('input', (e) => {
        const targetName = range.name;
        
        for(let counter of counters) {
            if (counter.name === targetName) counter.value = range.value;
            switch (targetName) {
                case 'red':
                    red = range.value;
                    break;
                case 'green':
                    green = counter.value;
                    break;
                case 'blue':
                    blue = counter.value;
                    break;
            }
            
        }
    })
}


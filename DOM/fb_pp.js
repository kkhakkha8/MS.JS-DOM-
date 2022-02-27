let fbImgClass = document.getElementsByClassName('pzggbiyp');

// fbImgClass now return htmlCollection

let resultArray = [...fbImgClass];

// now it changed into array it has many div which contain img

//first splice the array what we want is chat pic at the right side
 let splicedArray = resultArray.splice(42,resultArray.length); 

<svg>
    <mask></mask>
    <g>
        <image></image>
        <circle></circle>
    </g>
</svg>

Therefore to get attribute under image tag of <svg> tag

for(let i = 0; i < splicedArray.length; i++) {
    let imgTag = splicedArray[i].children[1].children[0];
    
        console.log(imgTag.getAttribute('xlink:href'));
    
    
}

let imgAttribute = resultArray[20].children[1].children[0].getAttribute('xlink:href');

export const HEX2RGB = (hex) => {
    if (hex.charAt(0) === '#') {
        hex = hex.substr(1);
    }
    if ((hex.length < 2) || (hex.length > 6)) {
        return false;
    }
    var values = hex.split(''),
        r,
        g,
        b;

    if (hex.length === 2) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = r;
        b = r;
    } else if (hex.length === 3) {
        r = parseInt(values[0].toString() + values[0].toString(), 16);
        g = parseInt(values[1].toString() + values[1].toString(), 16);
        b = parseInt(values[2].toString() + values[2].toString(), 16);
    } else if (hex.length === 6) {
        r = parseInt(values[0].toString() + values[1].toString(), 16);
        g = parseInt(values[2].toString() + values[3].toString(), 16);
        b = parseInt(values[4].toString() + values[5].toString(), 16);
    } else {
        return false;
    }
    return [r, g, b];
}

export const euclideonDistance = (v1, v2) => {
    var i,
        d = 0;

    for (i = 0; i < v1.length; i++) {
        d += (v1[i] - v2[i]) * (v1[i] - v2[i]);
    }
    return Math.sqrt(d);
};


export const getRandomColor = (letters, distanceFromGreen) => {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }

    if (euclideonDistance(HEX2RGB(color), [0, 255, 0]) <= distanceFromGreen) {
        color = getRandomColor(letters);
    }

    return color;
}

const darkColors = ['#006EFF','#E96C00','#4F2C5E','#C8922E'];
const lightColors = ['#F9E5B4','#C8DDED','#F9F2F2','#EDDCF4'];
export const getColorCombination = () => {
    const color1 = darkColors[Math.floor( Math.random() * darkColors.length)];
    const color2 = lightColors[ Math.floor(Math.random() * lightColors.length)];

    console.log(Math.random() * darkColors.length)
    if(Math.random() >= 0.5){
        return [color1, color2]
    }

    return [color2, color1]
}
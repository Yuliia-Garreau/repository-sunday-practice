//Напишіть функцію unique(arr), яка повертає масив,
//містить лише унікальні елементи arr.
//const words = ["HTML","CSS", "JS", "React", "JS", "CSS", "JS",
// "Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"];
const words = ["HTML","CSS", "JS", "React", "JS", "CSS", "JS",
    "Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"];

function unique(words) {
    const unic = [];
    for (const item of words) {
        if (!unic.includes(item)) {
            unic.push(item);
        }
    }
    return unic;
}

console.log(unique(words));

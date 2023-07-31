module.exports = function reverse(n) {
    let str = n.toString();

    if (str[0] === "-") {
        str = str.slice(1);
    }

    const arr = str.split("");

    let num = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        num += arr[i];
    }

    return num;
};

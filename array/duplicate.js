export default function (arr) {
    return arr.filter(function(value, index){
        return arr.indexOf(value) === index
    });
}
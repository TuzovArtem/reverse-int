module.exports = function reverse (n) {
    if(n<0){
        n*=-1
    }
    result = result = n.toString().split('').reverse().map(elem => {
		return +elem;
	}).join('');


    return result
}

function isPrime(n){
    console.log(n)
    if(n===1) {
        return false;
    }

    else if(n === 2){
       return true;
    }
    else{
        for(var x=2; x<n; x++){
            if(n%x === 0){
                return false;
            }
        }
        return true;
   }
}

function main() {
    console.log(isPrime(13))

}

main()
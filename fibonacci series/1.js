function fibSum(n) {
    var fib = [];
    var even_fib = [];
                
    for(let i = 0;  even_fib.length < n; i++){                
       if(i > 2) fib.push(fib[i-1] + fib[i-2]) 
         else fib.push(1)
                   
         if(fib[i] % 2 == 0) even_fib.push(fib[i])
                    
         }
     return even_fib.reduce((a, b) => a + b)
             
   }
                  
   console.log([fibSum(100)]) 
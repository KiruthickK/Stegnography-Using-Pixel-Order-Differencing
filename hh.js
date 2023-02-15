 var pi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 // var pii = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 //cover11111 00000

 //sec 11111 

 function encryptLeastBitOne(x, rem) {
     return x ^ rem;
 }
 for (var i = 0; i < 10; i++) {
     pi[i] = encryptLeastBitOne(pi[i], 16);
 }
 console.log(pi);
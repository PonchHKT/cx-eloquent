const x = prompt("Enter number");
let i = 1;
let count = 0;
for(;i<=x;i++)
{
     if(x%i==0){
         count++;
      }
}
if(count==2){
     alert("Prime number");
}else{
     alert("Not prime number");
}
function evenodd(s1){
  const number = Number(s1);
if(number%2==0)
  return 1;
else
  return 0;  
}
s1=prompt("Enter any number");
res = evenodd(s1);
if(res)
  document.write("The number is even");
else
  document.write("The number is odd");
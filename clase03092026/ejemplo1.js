let age=prompt("Enter your age:",15);
alert("You are " + age + " years old.");
let res=confirm("Eres mayor de edad?");
if(res){
    alert("You are an adult.");
}
else{
    alert("You are not an adult.");
}
alert(Number(" 12345"));
alert(Number(" 12345gt"));
alert(Number("true"));
alert(Number("false"));

alert(Boolean(1));
alert(Boolean(0));

alert(Boolean("Hello")); //true
alert(Boolean("")); //false
    var x = 1;
	var i, j = 0, k = 0, linha = 1;

	document.write("import java.util.Scanner;<br><br>",
	"public class Tijolinho2 {<br>",
	"public static void main(String[] args) {<br>",
	"Scanner read = new Scanner(System.in);<br>",
	"double num1 = 0; <br>",
	"double num2 = 0; <br>",
	"char sign; <br>",
	"System.out.println(\"Welcome to this calculator!\");<br>",
	"System.out.println(\"It can add, subtract, multiply and divide whole numbers from 0 to 50\");<br>",
	"System.out.println(\"Please choose your first number: \");<br>",
	"num1 = read.nextDouble();<br>",
	"System.out.println(\"What do you want to do? +, -, /, or *: \");<br>",
	"sign = read.next().charAt(0);<br>",
	"System.out.println(\"Please choose your second number: \");<br>",
	"num2 = read.nextDouble();<br>",
	)
	
	do {
		for(i = 0; i <= 50;i++) {
			for(j = 0; j <= 50; j++) {
				//document.write("<br>",linha,": ");
				if(x == 1) {
					document.write("if( num1 ==", i, "&& num2 ==", j, "&& sign == '+' ){<br>System.out.println(\"",i, "+", j, " == ", i+j,"\");<br>}<br>");				}
				else if(x == 2) {
					document.write("if( num1 ==", i, "&& num2 ==", j, "&& sign == '-' ){<br> System.out.println(\"",i, "-", j, " == ", i-j,"\");<br>}<br>");
				}
				else if(x == 3) {
					document.write("if( num1 ==", i, "&& num2 ==", j, "&& sign == '*' ){<br> System.out.println(\"",i, "*", j, " == ", i*j,"\");<br>}<br>");
				}
				else{
					if(j != 0 ) {
						document.write("if( num1 ==", i, "&& num2 ==", j, "&& sign == '/' ){<br>System.out.println(\"",i, "/", j, " == ", i/j,"\");<br>}<br>");
					}
				}
				linha++;
			}
		}
        if(x < 4) {
            x++;
        }
        else {
            x = 1;
        }
		
		k++;
		
	}while(k < 4);

	document.write("System.out.println(\"Thanks for using this calculator, goodbye :)\");<br>")
	document.write("}<br>")
	document.write("}")
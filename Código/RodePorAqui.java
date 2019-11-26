import java.util.Scanner;

public class RodePorAqui {
	public static void main(String[] args) {
		double num1, num2;
		char sign;

		@SuppressWarnings("all")
		Scanner read = new Scanner(System.in);

		MinhaPrimeiraCalculadora m1 = new MinhaPrimeiraCalculadora(0, 0, '+');

		System.out.println("Bem-vindo a esta calculadora!");
		System.out.println("Ela pode somar, subtrait, multiplicar e dividir números de 0 e 50");

		try {
			System.out.println("Por favor, digite o primeiro número: ");
			num1 = read.nextDouble();
			m1.setNum1(num1);

			System.out.println("Qual operação deseja fazer? +, -, /, or *: ");
			sign = read.next().charAt(0);
			m1.setSign(sign);

			System.out.println("Por favor, digite o segundo número: ");
			num2 = read.nextDouble();
			m1.setNum2(num2);

			if((m1.getNum1() >= 0 && m1.getNum1() <= 10) && (m1.getNum1() >= 0 && m1.getNum2() <= 10)) {
				m1.de0a10();
			}
			else if((m1.getNum1() >= 11 && m1.getNum1() <= 20) && (m1.getNum1() >= 11 && m1.getNum2() <= 20)) {
				m1.de11a20();
			}
			else if((m1.getNum1() >= 21 && m1.getNum1() <= 30) && (m1.getNum1() >= 21 && m1.getNum2() <= 30)) {
				m1.de21a30();
			}
			else if((m1.getNum1() >= 31 && m1.getNum1() <= 30) && (m1.getNum1() >= 31 && m1.getNum2() <= 40)) {
				m1.de31a40();
			}
			else if((m1.getNum1() >= 41 && m1.getNum1() <= 50) && (m1.getNum1() >= 41 && m1.getNum2() <= 50)) {
				m1.de41a50();
			}
			else {
				System.out.println("Número inválido! O programa apenas aceita entre 0 a 50.");
			}
		} catch (Exception e) {
			System.out.println("Foi informado algum dado errado, mas não se preocupe, um dia você entenderá que o programa é somente de 0 a 50!");
		} finally {
			System.out.println("Obrigado por usar a calculadora, adeus! :)");
		}
	}
}

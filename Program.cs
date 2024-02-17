// dev: Carolina Baião
// Desafio: 
    // Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre 
    // será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
    // escreva um programa na linguagem que desejar onde, informado um número, ele calcule a
    // sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence
    // ou não a sequência.

using System;

class Program {
    static int options() { // menu de opções 
        Console.WriteLine("===> FIBONACCI <====");
        Console.WriteLine("Digite sua opção: ");
        Console.WriteLine("1 - Consultar novo número;");
        Console.WriteLine("2 - Sair do programa.");
        int option = int.Parse(Console.ReadLine());
        return option;
    }

    static void isFibonacci(int num) {
        int part1 = 0, part2 = 1;

        while (part1 < num) {
            int temp = part1;
            part1 = part2;
            part2 = temp + part2;
        }

        if(part1 == num) {
            Console.WriteLine("Pertence à sequência de Fibonacci! :)");
        } 
        else {
            Console.WriteLine("Não pertence à sequência de Fibonacci! :(");
        }
    }

    public static void Main(string[] args) {
        int op;
        do {
            Console.Clear();
            op = options();
            switch(op) {
                case 1: 
                    Console.WriteLine("Digite o número a consultar: ");
                    int number = int.Parse(Console.ReadLine());
                    isFibonacci(number);
                    Console.ReadKey();
                    break;
            }
        } while (op != 2);
    }
}
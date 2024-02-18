// Dev: Carolina Baião
// Desafio:
// Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

using System;

class Program {
    static int options() { // menu de opções 
        Console.WriteLine("===> INVERTE STRING <====");
        Console.WriteLine("Digite sua opção: ");
        Console.WriteLine("1 - Inverter nova string;");
        Console.WriteLine("2 - Sair do programa.");
        int option = int.Parse(Console.ReadLine());
        return option;
    }

    static void inverte_string(string txt) {
        char[] arr_aux = new char[txt.Length]; // criando um array auxiliar
        int indice = txt.Length - 1;

        for(int i=0; i < txt.Length; i++) {
            arr_aux[indice] = txt[i]; // auxiliar na posição de baixo p/ cima recebe char atual
            indice--;
        }
        Console.WriteLine($"string invertida: ");
        for(int i=0; i < arr_aux.Length; i++) {
            Console.WriteLine(arr_aux[i]);
        }
    }

    public static void Main(string[] args) {
        int op;
        do {
            Console.Clear();
            op = options();
            switch(op) {
                case 1: 
                    Console.WriteLine("Digite a string a ser invertida: ");
                    string text = Console.ReadLine();
                    inverte_string(text);
                    Console.ReadKey();
                    break;
            }
        } while (op != 2);
    }
}
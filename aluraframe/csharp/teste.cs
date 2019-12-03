using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = "4 onetwlalaoosadfasdfaslalaasdtrettrettrettretfasdflalane";
            var stringSeparada = input.Split(' ');
            int numero = int.Parse(stringSeparada[0]);
            int tamanhoString = stringSeparada[1].Length;

            string sequenciaAtual = "";
            string sequenciaTeste = "";
            string sequenciaMaisRepetida = "";
            int numeroRepeticao = 0;
            int numeroTotal = 0;

            for(int i = 0; i < tamanhoString - numero; i++)
            {
                sequenciaAtual = stringSeparada[1].Substring(i, numero);

                for(int a = i+1; a < stringSeparada[1].Length - numero + 1; a++)
                {
                    sequenciaTeste = stringSeparada[1].Substring(a, numero);
                    if (sequenciaAtual.Equals(sequenciaTeste))
                    {
                        numeroRepeticao++;
                    }
                }
                if(numeroRepeticao > numeroTotal)
                {
                    numeroTotal = numeroRepeticao;
                    sequenciaMaisRepetida = sequenciaAtual;
                }
                sequenciaAtual = "";
                sequenciaTeste = "";
                numeroRepeticao = 0;
            }
             var resposta = sequenciaMaisRepetida;
        }
    }
}

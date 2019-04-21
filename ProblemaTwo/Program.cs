using System;
using System.Collections.Generic;
using System.Linq;

namespace ProblemaTwo
{
    class Program
    {
        static void Main(string[] args)
        {
            Execute();
        }

        private static void Execute()
        {
            try
            {
                Console.Write("Número de competidores: ");
                int.TryParse(Console.ReadLine(), out int N);

                if (N < 2 || N > 24) throw new Exception("Número inválido");

                Console.Write("Largada: ");
                var largada = Console.ReadLine().Split(" ").Select(n => int.Parse(n));
                if (largada.Count() != N) throw new Exception("Largada inválida");

                Console.Write("Chegada: ");
                var chegada = Console.ReadLine().Split(" ").Select(n => int.Parse(n));
                if (chegada.Count() != N) throw new Exception("Chegada inválida");

                Console.WriteLine($"Ultrapassagens: {Process(largada, chegada)}");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            Console.WriteLine(string.Empty);
            Execute();
        }

        private static int Process(IEnumerable<int> largada, IEnumerable<int> chegada)
        {
            var soma = 0;

            for (int i = 0; i < chegada.Count(); i++)
            {
                var cNum = chegada.ElementAt(i);
                var lNum = largada.ElementAt(i);
                soma += cNum > lNum ? cNum - lNum : 0;
            }

            return soma;
        }
    }
}
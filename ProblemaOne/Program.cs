using System;

namespace ProblemaOne
{
    class Program
    {
        private const long V = 1000000000000000000;

        static void Main(string[] args)
        {
            Execute();
        }

        private static void Execute()
        {
            try
            {
                Console.Write("Digite o andar: ");

                long.TryParse(Console.ReadLine(), out long andar);

                if (andar < 1 || andar > V) throw new Exception("Número inválido");

                Console.WriteLine($"Resultado: {Process(andar)}");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            Console.WriteLine(string.Empty);
            Execute();
        }

        private static long Process(long N)
        {
            if (N > 1)
            {
                long nAndar = N + 1;

                string strAndar = nAndar.ToString();

                while (strAndar.Contains("4") || strAndar.Contains("13"))
                {
                    nAndar++;
                    strAndar = nAndar.ToString();
                }

                return nAndar;
            }
            else
            {
                return N;
            }
        }
    }
}
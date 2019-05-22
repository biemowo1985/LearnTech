using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleFactory
{
    class Program
    {
        static void Main(string[] args)
        {
            var oper = OperationFactory.CreateOperation("+");
            oper.NumberA = 3;
            oper.NumberB = 5;
            var result = oper.Calculate();

            Console.WriteLine("Calculate Result is: " + result);
            Console.ReadLine();
        }
    }
}

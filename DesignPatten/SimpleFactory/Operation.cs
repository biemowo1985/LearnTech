using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleFactory
{
    public class Operation
    {
        public double NumberA { get; set; }
        public double NumberB { get; set; }
        public virtual double Calculate()
        {
            double result = 0;
            return result;
        }
    }

    public class OperationAdd : Operation
    {
        public override double Calculate()
        {
            return NumberA + NumberB;
        }
    }

    public class OperationSub : Operation
    {
        public override double Calculate()
        {
            return NumberA - NumberB;
        }
    }

    public class OperationMul : Operation
    {
        public override double Calculate()
        {
            return NumberA * NumberB;
        }
    }

    public class OperationDiv : Operation
    {
        public override double Calculate()
        {
            if (NumberB == 0)
            {
                throw new Exception("Attempted to divide by zero.");
            }
            return NumberA / NumberB;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopChargeSystem
{
    abstract class StrategyBase
    {
        public abstract double GetFinal(double normalCash);
    }
}

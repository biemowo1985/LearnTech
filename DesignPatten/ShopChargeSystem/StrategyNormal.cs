using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopChargeSystem
{
    class StrategyNormal : StrategyBase
    {
        public override double GetFinal(double normalCash)
        {
            return normalCash;
        }
    }
}

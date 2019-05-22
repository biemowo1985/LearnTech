using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopChargeSystem
{
    //打折
    class StrategyDiscount : StrategyBase
    {
        public double discount;

        public StrategyDiscount(double discount)
        {
            this.discount = discount;
        }
        public override double GetFinal(double normalCash)
        {
            return normalCash * discount;
        }
    }
}

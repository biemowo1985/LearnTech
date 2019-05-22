using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopChargeSystem
{
    class CashContext
    {
        StrategyBase strategy = null;

        public CashContext(string strategyName)
        {
            switch (strategyName)
            {
                case "discount":
                    strategy = new StrategyDiscount(0.88);
                    break;
                case "return":
                    strategy = new StrategyReturn("300", "100");
                    break;
                case "normal":
                    strategy = new StrategyNormal();
                    break;
                default:
                    strategy = new StrategyNormal();
                    break;
            }
        }

        public double GetResult(double normalCash)
        {
            return strategy.GetFinal(normalCash);
        }
    }
}

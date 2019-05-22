using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopChargeSystem
{
    //满减返利
    class StrategyReturn : StrategyBase
    {
        double cashCondition = 0.0d;
        double cashReturn = 0.0d;

        public StrategyReturn(string cashCondition, string cashReturn)
        {
            this.cashCondition = double.Parse(cashCondition);
            this.cashReturn = double.Parse(cashReturn);
        }
        public override double GetFinal(double normalCash)
        {
            double result = normalCash;
            if (normalCash > cashCondition)
            {
                result = normalCash - Math.Floor(normalCash / cashCondition) * cashReturn;//满300减100，满600减200以此类推
            }
            return result;
        }
    }
}

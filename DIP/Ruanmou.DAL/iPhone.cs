using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ruanmou.IDAL;

namespace Ruanmou.DAL
{
    public class iPhone : AbstractPhone
    {
        /// <summary>
        /// 打电话
        /// </summary>
        public override void Call()
        {
            Console.WriteLine("Use {0} Call", this.GetType().Name);
        }

        /// <summary>
        /// 发短信
        /// </summary>
        public override void Text()
        {
            Console.WriteLine("Use {0} Text", this.GetType().Name);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ruanmou.IDAL
{
    public abstract class AbstractPhone
    {
        public int Id { get; set; }
        public string Branch { get; set; }

        /// <summary>
        /// 打电话
        /// </summary>
        public abstract void Call();

        /// <summary>
        /// 发短信
        /// </summary>
        public abstract void Text();
    }
}

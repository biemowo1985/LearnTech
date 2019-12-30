using Ruanmou.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ruanmou.Service
{
    public class Power : IPower
    {
        //public Power()
        //{
        //    Console.WriteLine($"{this.GetType().Name}被构造。。");
        //}

        public Power(IMicrophone microphone)
        {
            Console.WriteLine($"{this.GetType().Name}被构造。。");
        }
    }
}

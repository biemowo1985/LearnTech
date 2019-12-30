using Ruanmou.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using Unity;

namespace Ruanmou.Service
{
    public class ApplePhone : IPhone
    {
        [Dependency]//属性注入
        public IMicrophone Microphone { get; set; }
        public IHeadphone Headphone { get; set; }
        public IPower Power { get; set; }

        public ApplePhone()
        {
            Console.WriteLine("{0}构造函数", this.GetType().Name);
        }

        //[InjectionConstructor]//构造函数注入:可以不要特性，默认调用参数个数最多的
        public ApplePhone(IHeadphone iHeadphone, IPower power, IMicrophone microphone)
        {
            this.Headphone = iHeadphone;
            Console.WriteLine("{0}带参数构造函数", this.GetType().Name);
        }

        public void Call()
        {
            Console.WriteLine("{0}打电话", this.GetType().Name); ;
        }

        [InjectionMethod]//方法注入
        public void Init123456678890(IPower iPower)
        {
            this.Power = iPower;
        }
    }
}

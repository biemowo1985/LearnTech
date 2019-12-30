using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IOCUnity
{
    /// <summary>
    /// 1 依赖倒置原则和IOC
    /// 2 IOC的好处
    /// 3 介绍和使用Unity
    /// 4 使用Unity改造项目
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("欢迎来到.net高级班公开课之核心语法特训，今天是Eleven老师为大家带来的控制反转ioc");
                IOCTest.Show();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            Console.Read();
        }
    }
}

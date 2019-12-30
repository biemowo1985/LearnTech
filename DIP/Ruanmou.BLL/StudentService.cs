//using Ruanmou.DAL;
using Ruanmou.IBLL;
using Ruanmou.IDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ruanmou.BLL
{
    /// <summary>
    /// 业务逻辑层，完成对业务逻辑的封装
    /// </summary>
    public class StudentService : IStudentService
    {
        public void Study()
        {
            Console.WriteLine("跟着Eleven老师一起学习.net高级开发");
        }

        //public void PlayPhone(iPhone phone)
        //{
        //    Console.WriteLine("Use {0}", phone.GetType().Name);
        //    phone.Call();
        //    phone.Text();
        //}
        //public void PlayOppo(Oppo phone)
        //{
        //    Console.WriteLine("Use {0}", phone.GetType().Name);
        //    phone.Call();
        //    phone.Text();
        //}
        //public void PlayMi(Mi phone)
        //{
        //    Console.WriteLine("Use {0}", phone.GetType().Name);
        //    phone.Call();
        //    phone.Text();
        //}
        ////能不能简单点，一个方法搞定？

        public void Play(AbstractPhone phone) 
        {
            Console.WriteLine("Use {0}", phone.GetType().Name);
            phone.Call();
            phone.Text();
        }





        ///// <summary>
        ///// 泛型不太熟悉的  可以加课堂的助教老师 获取视频代码
        ///// </summary>
        ///// <typeparam name="T"></typeparam>
        ///// <param name="phone"></param>
        //public void PlayT<T>(T phone) where T : AbstractPhone
        //{
        //    Console.WriteLine("Use {0}", phone.GetType().Name);
        //    phone.Call();
        //    phone.Text();
        //}


    }
}

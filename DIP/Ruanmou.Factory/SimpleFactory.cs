using Ruanmou.IBLL;
using Ruanmou.IDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Ruanmou.Factory
{
    /// <summary>
    /// 既不依赖细节  又能创建实例--反射
    /// 倒置：以前高层就直接依赖低层，
    ///       现在高层是依赖于抽象，
    ///       细节由第三方工厂决定
    /// </summary>
    public class SimpleFactory
    {
        /// <summary>
        /// 泛型版本的没问题了，刷个1
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static T Create<T>()
        {
            string typeDll = System.Configuration.ConfigurationManager.AppSettings[$"{typeof(T).Name}Assembly"];
            Assembly assembly = Assembly.Load(typeDll.Split(',')[1]);
            Type type = assembly.GetType(typeDll.Split(',')[0]);
            return (T)Activator.CreateInstance(type);
        }







        private static string IStudentServiceAssembly = System.Configuration.ConfigurationManager.AppSettings["IStudentServiceAssembly"];
        public static IStudentService CreateStudentService()
        {
            Assembly assembly = Assembly.Load(IStudentServiceAssembly.Split(',')[1]);
            Type type = assembly.GetType(IStudentServiceAssembly.Split(',')[0]);
            return (IStudentService)Activator.CreateInstance(type);
        }

        private static string AbstractPhoneAssembly = System.Configuration.ConfigurationManager.AppSettings["AbstractPhoneAssembly"];
        public static AbstractPhone CreatePhone()
        {
            Assembly assembly = Assembly.Load(AbstractPhoneAssembly.Split(',')[1]);
            Type type = assembly.GetType(AbstractPhoneAssembly.Split(',')[0]);
            return (AbstractPhone)Activator.CreateInstance(type);
        }
        //1 工厂方法写的好累，能不能泛型一下？
    }
}

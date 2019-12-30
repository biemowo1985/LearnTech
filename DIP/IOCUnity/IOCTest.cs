using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Configuration;
using Ruanmou.Interface;
using Ruanmou.Service;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Unity;

namespace IOCUnity
{
    public class IOCTest
    {
        public static void Show()
        {
            Console.WriteLine("**************************");
            {
                AndroidPhone phone = new AndroidPhone();
                phone.Call();
            }
            {

                IPhone phone = new AndroidPhone();
                phone.Call();
            }

            //自建工厂

            //使用容器
            Console.WriteLine("************************");
            {
                IUnityContainer container = new UnityContainer();//1 准备空的容器
                container.RegisterType<IPhone, AndroidPhone>();//2 容器注册

                IPhone phone = container.Resolve<IPhone>();
                phone.Call();
                Console.WriteLine("三个属性都是空的");
            }
            Console.WriteLine("**************************");
            {
                IUnityContainer container = new UnityContainer();//1 准备空的容器
                container.RegisterType<IPhone, ApplePhone>();//2 容器注册
                container.RegisterType<IMicrophone, Microphone>();
                container.RegisterType<IHeadphone, Headphone>();
                container.RegisterType<IPower, Power>();

                IPhone phone = container.Resolve<IPhone>();
                phone.Call();
                Console.WriteLine("三个属性都不是空的");
            }
            //{
            //    //生命周期管理 单例  线程单例  瞬时 
            //}

            {
                IUnityContainer container = new UnityContainer();
                ExeConfigurationFileMap fileMap = new ExeConfigurationFileMap();
                fileMap.ExeConfigFilename = Path.Combine(AppDomain.CurrentDomain.BaseDirectory + "CfgFiles\\Unity.Config.xml");//找配置文件的路径
                Configuration configuration = ConfigurationManager.OpenMappedExeConfiguration(fileMap, ConfigurationUserLevel.None);
                UnityConfigurationSection section = (UnityConfigurationSection)configuration.GetSection(UnityConfigurationSection.SectionName);

                section.Configure(container, "testContainer");//注册

                IPhone phone = container.Resolve<IPhone>();
                phone.Call();

            }

            {
                IUnityContainer container = new UnityContainer();
                ExeConfigurationFileMap fileMap = new ExeConfigurationFileMap();
                fileMap.ExeConfigFilename = Path.Combine(AppDomain.CurrentDomain.BaseDirectory + "CfgFiles\\Unity.Config.xml");//找配置文件的路径
                Configuration configuration = ConfigurationManager.OpenMappedExeConfiguration(fileMap, ConfigurationUserLevel.None);
                UnityConfigurationSection section = (UnityConfigurationSection)configuration.GetSection(UnityConfigurationSection.SectionName);

                section.Configure(container, "testContainerExtend");//注册

                IPhone phone = container.Resolve<IPhone>();
                phone.Call();
            }
        }
    }
}

using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Configuration;
using Ruanmou.Interface;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Unity;

namespace IOCUnity.Unity
{
    public class UnityConfig
    {
        public static void Show()
        {
            {
                IUnityContainer container = new UnityContainer();//准备容器

                ExeConfigurationFileMap fileMap = new ExeConfigurationFileMap();
                fileMap.ExeConfigFilename = Path.Combine(AppDomain.CurrentDomain.BaseDirectory + "CfgFiles\\Unity.Config.xml");//找配置文件的路径
                Configuration configuration = ConfigurationManager.OpenMappedExeConfiguration(fileMap, ConfigurationUserLevel.None);
                UnityConfigurationSection section = (UnityConfigurationSection)configuration.GetSection(UnityConfigurationSection.SectionName);

                section.Configure(container, "testContainer");//注册

                IPhone phone = container.Resolve<IPhone>();  //new AndroidPhone();//创建对象
                phone.Call();
                IPhone phone2 = container.Resolve<IPhone>("apple");  //new AndroidPhone();//创建对象
                phone2.Call();
                IPhone phone3 = container.Resolve<IPhone>("android");  //new AndroidPhone();//创建对象
                phone3.Call();
            }
        }
    }
}

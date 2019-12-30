using Microsoft.Practices.Unity.Configuration;
using Ruanmou.BLL;
using Ruanmou.DAL;
using Ruanmou.Factory;
using Ruanmou.IBLL;
using Ruanmou.IDAL;
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

namespace DIP
{
    /// <summary>
    /// 1 细节与抽象：类 与 接口/抽象类
    /// 2 依赖倒置原则（Dependence Inversion Principle)
    /// 3 依赖倒置的使用
    /// 
    /// 本周计划了5次课，全部学习IOC控制反转+DI依赖注入
    /// 主流框架都在使用，甚至在.NetCore里面已经内置了IOC
    /// 工作中用过 接触过的，刷个1  完全没有的刷个2
    /// 
    /// DIP开始---IOC理论基础---引入容器完成IOC--解析原理+手写IOC容器
    /// 
    /// 设计模式六大原则之依赖倒置原则
    /// 单一职责  里氏替换
    /// 依赖倒置原则  接口隔离原则
    /// 迪米特法则  开闭原则
    /// 
    /// 依赖倒置原则：面向对象语言程序设计时，高层模块不要依赖于低层模块，二者应该通过抽象来依赖-------依赖抽象，而不是依赖细节
    /// 高层低层是分层之后，相对性的概念
    /// 抽象：接口-抽象类
    /// 细节：普通类
    /// 
    /// 面向细节：写死依赖某个具体类型
    /// 面向抽象：可以满足多个类型的诉求，而且可以让高层不受底层扩展影响
    /// 
    /// 假如某个项目分了10层，(最高层)1-->2-->3-->4-->5-->6-->7-->8-->9-->10(最底层)
    /// 如果是依赖细节，第7层升级了一下，第6层得调整，5---4---3---2---1都得调整一下， 这叫水波效应，也就是某个地方改一下，结果很多地方都需要跟着改(大家经常加班的原因)
    /// 如果是依赖抽象，第8层升级了一下，第7层不用改，其他的当然也都不用改了；通过面向抽象，可以屏蔽层的内部变化。
    /// 因为开发过程中，细节是多变的，而抽象是稳定的，基于抽象搭建的架构就会相对稳定(如果抽象都变化，那么就没什么稳定可说的了)
    /// 所以说，还是得面向抽象，还得依赖倒置原则
    ///  
    /// 下面，老师来带大家全贯穿依赖倒置原则(写的就是IOC控制反转)！
    /// 要么不做，要么做绝
    /// 
    /// 
    /// 准备好学习的小伙伴儿，给Eleven老师刷一个专属字母E！
    /// 
    /// 1 依赖倒置原则-->IOC-->DI
    /// 2 IOC容器Unity引入和使用
    /// 3 使用Unity改造项目
    /// 
    /// 昨天DIP课程，来听了的刷个1 没有的刷个2
    /// 没有听的请一定加一下课堂直接老师，获取一下昨天的视频代码
    /// 
    /// 依赖倒置原则：面向对象语言程序设计时，高层模块不要依赖于低层模块，二者应该通过抽象来依赖-------依赖抽象，而不是依赖细节
    /// 依赖抽象，而不是依赖细节。细节交给了一个工厂来反射创建的，这样一来程序就完全没有依赖，就可以随意的扩展升级！
    /// 
    /// IOC：控制反转，常规情况下，高层应该依赖于低层，项目是不稳定的
    ///      就是把高层对低层的依赖去掉，换成对抽象的依赖，
    ///      细节交给第三方来决定，这就是控制反转
    ///      反转的目的是为了降低依赖，增强扩展行
    ///      其实IOC是一个目标
    ///      
    ///  DI：依赖注入，其实就是在实现IOC时会遇到对象依赖的问题，依赖注入就是指在IOC创建对象时，通过一定的技术手段，去自动完成依赖对象的创建并传入！
    ///      构造函数注入---属性注入---方法注入 
    ///      以上为执行顺序---推荐使用构造函数注入，可以不用声明特性，可以在服务层去掉对容器的依赖(AspNetCore内置容器ServiceCollection就只支持构造函数注入)
    ///      DI是没有层数限制，可以一直去依赖注入，才能真正的做到IOC(递归)  是实现IOC的手段
    ///      
    /// IOC + DI + Unity容器使用(配置文件-别名-)(生命周期管理--AOP扩展)
    /// 今天课程觉得大有收获，大开眼界，给老师刷个666,表示点赞
    /// 今天的代码也挺有含量，需要的话请联系课堂的助教老师，12点之前分享
    /// 如果需要视频的话，也请联系课堂的助教老师，下午2点左右分享
    /// 如果大家还有啥技术问题(跟今天内容不是特别相关)，可以联系老师的微信：185-7280-2691
    /// 此外，如果大家有什么想学习的，可以直接跟小助理提建议，
    /// 包括时间和内容，微信：185-7280-2691
    /// 
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine("欢迎来到.net高级班公开课之核心语法特训，今天是Eleven老师为大家带来的设计模式六大原则之依赖倒置原则");
                #region 0723
                //{
                //    Console.WriteLine("**********************************");
                //    StudentService service = new StudentService();
                //    service.Study();
                //    {
                //        iPhone phone = new iPhone();
                //        service.PlayPhone(phone);
                //        service.Play(phone);
                //    }
                //    {
                //        Oppo phone = new Oppo();
                //        service.PlayOppo(phone);
                //        service.Play(phone);
                //    }
                //    {
                //        Mi phone = new Mi();
                //        //service.PlayOppo(phone);
                //        service.Play(phone);
                //    }
                //    {
                //        Lumia phone = new Lumia();
                //        service.Play(phone);
                //    }
                //    {
                //        Vivo phone = new Vivo();
                //        service.Play(phone);
                //    }
                //    //1 面向细节，只能满足单一类型诉求；面向抽象，可以满足各种子类的诉求，一个方法搞定多个类型
                //    //2 面向抽象，还能支持下层的扩展，上层不受影响
                //}
                //{
                //    //Console.WriteLine("**********************************");
                //    //IStudentService service = new StudentService();
                //    //service.Study();
                //    //{
                //    //    iPhone phone = new iPhone();
                //    //    service.PlayPhone(phone);
                //    //}
                //    ////细节换抽象(其实右边还是有细节)
                //    ////1 查看实现不太方便  2 方法必须在接口声明(编译器不允许调用)
                //}

                //Console.WriteLine("******************彻底的依赖倒置****************");
                //{
                //    IStudentService service = SimpleFactory.CreateStudentService();
                //    //new IStudentService();
                //    //既需要实例化对象，但是又不想依赖细节？ 甩锅--封装一下--
                //    service.Study();
                //    {
                //        AbstractPhone phone = SimpleFactory.CreatePhone();
                //        service.Play(phone);
                //    }
                //}

                //{
                //    IStudentService service = SimpleFactory.Create<IStudentService>();
                //    //new IStudentService();
                //    //既需要实例化对象，但是又不想依赖细节？ 甩锅--封装一下--
                //    service.Study();
                //    {
                //        AbstractPhone phone = SimpleFactory.Create<AbstractPhone>();
                //        service.Play(phone);
                //    }
                //}
                ////贯彻了依赖倒置原则，从高层到低层，完全没有出现细节的依赖，全部是面向抽象的  why  可配置--可扩展的一个架构
                ////需要今天课程代码的，大家加一下课堂的助教老师，课后第一时间分享
                ////需要今天课程视频的，大家加一下课堂的助教老师，下午2点之前分享
                ////明天同一时间，不见不散咧？肯定到的刷个1  明天就是IOC+DI  
                ////欢迎加老师的微信号：185-7280-2691
                #endregion

                #region 0724
                //Console.WriteLine("******************依赖倒置****************");
                //{
                //    StudentService service = new StudentService();//BLL
                //    service.Study();
                //    iPhone phone = new iPhone();//DAL
                //    service.Play(phone);
                //    //依赖了细节，DAL变化 会导致BLL变化，又会导致UI变化
                //}
                //{
                //    IStudentService service = SimpleFactory.CreateStudentService();
                //    service.Study();
                //    {
                //        AbstractPhone phone = SimpleFactory.CreatePhone();
                //        service.Play(phone);
                //    }
                //    //高层里面就没有任何低层依赖，低层的变化就不会影响到高层
                //}
                ////IOC容器：其实就是一个工厂
                //{
                //    //从IOC容器使用  nuget--Unity
                //    IUnityContainer container = new UnityContainer();//1 实例化容器
                //    container.RegisterType<IStudentService, StudentService>();//2 容器注册
                //    container.RegisterType<AbstractPhone, Vivo>();

                //    IStudentService service = container.Resolve<IStudentService>();//3 获取实例
                //    AbstractPhone phone = container.Resolve<AbstractPhone>();
                //    service.Play(phone);
                //    //IOC容器是工厂的升级，其实就是用来获取实例(原理也是反射)
                //}
                {
                    //如果项目是多层的，而且相互依赖呢？
                    //IUnityContainer container = new UnityContainer();
                    //container.RegisterType<IPhone, ApplePhone>();
                    //container.RegisterType<IMicrophone, Microphone>();
                    //container.RegisterType<IHeadphone, Headphone>();
                    //container.RegisterType<IPower, Power>();
                    ////IMicrophone microphone = container.Resolve<IMicrophone>();
                    ////IPower power = container.Resolve<IPower>();
                    //IPhone phone = container.Resolve<IPhone>();

                    //单纯通过无参数构造函数，完成对象的创建没啥技术含量，
                    //但是如果构造A对象时，需要依赖于B对象，如果是工厂的写法，得先构造B-->传入去构造A；如果层级多了，A-->B-->C-->D-->E--->F,这就是实现IOC目标的一个大大的难题！
                }
                {
                    //这里不是也有细节吗？！
                    //程序需要细节，但是又不想写死，只能转移到配置文件
                    {
                        IUnityContainer container = new UnityContainer();//准备容器

                        ExeConfigurationFileMap fileMap = new ExeConfigurationFileMap();
                        fileMap.ExeConfigFilename = Path.Combine(AppDomain.CurrentDomain.BaseDirectory + "CfgFiles\\Unity.Config.xml");//找配置文件的路径
                        Configuration configuration = ConfigurationManager.OpenMappedExeConfiguration(fileMap, ConfigurationUserLevel.None);
                        UnityConfigurationSection section = (UnityConfigurationSection)configuration.GetSection(UnityConfigurationSection.SectionName);

                        section.Configure(container, "testContainer");//注册

                        IPhone phone = container.Resolve<IPhone>();  //new AndroidPhone();//创建对象
                        phone.Call();

                        //如果有多个重复呢？！  就来个别名

                        IPhone phone2 = container.Resolve<IPhone>("apple");  //new AndroidPhone();//创建对象
                        phone2.Call();
                        IPhone phone3 = container.Resolve<IPhone>("android");  //new AndroidPhone();//创建对象
                        phone3.Call();
                    }

                    
                }

                #endregion
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            Console.Read();
        }
    }
    //
}

//E老师，同一类库使用一个Unity容器还是整个项目使用一个？
//全局一个--规则一样就行--规则可以有多个容器实例；
//以前在热插拔框架，试过多个容器

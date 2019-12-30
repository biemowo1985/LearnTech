using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIP
{
    /// <summary>
    /// 核心语法公开课
    /// </summary>
    public class LessonCore 
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public void Study()
        {
            Console.WriteLine("周二四六上午十点到十点跟Eleven老师学习.net高级开发核心语法");
        }

        public void Movie()
        {
            Console.WriteLine("可以获取当次课的视频回看");
        }
    }

    /// <summary>
    /// 设计模式公开课
    /// </summary>
    public class LessonDesign 
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public void Study()
        {
            Console.WriteLine("周一三五上午十点到十点跟Eleven老师学习.net架构师设计模式");
        }

        public void Movie()
        {
            Console.WriteLine("可以获取当次课的视频回看");
        }
    }


}

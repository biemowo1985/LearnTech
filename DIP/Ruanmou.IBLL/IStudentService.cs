using Ruanmou.IDAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ruanmou.IBLL
{
    public interface IStudentService
    {
        void Study();
        void Play(AbstractPhone phone);
    }
}

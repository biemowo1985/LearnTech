using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ShopChargeSystem
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            LoadStrategyData();
        }

        private void btnFinal_Click(object sender, EventArgs e)
        {
            var price = double.Parse(this.txtPrice.Text.Trim());
            var count = double.Parse(this.txtCount.Text.Trim());
            var normalCash = price * count;

            string key = ((KeyValuePair<string,string>)comboBox1.SelectedItem).Key;
            var cash = new CashContext(key);
            var result = cash.GetResult(normalCash);
            this.lblFianl.Text = result.ToString();
        }

        private void LoadStrategyData()
        {
            var dataSource = new Dictionary<string, string>();
            dataSource.Add("normal", "原价");
            dataSource.Add("discount", "88折");
            dataSource.Add("return", "满300减100");
            comboBox1.DataSource = new BindingSource(dataSource, null);
            comboBox1.DisplayMember = "Value";
            comboBox1.ValueMember = "Key";
        }
    }
}

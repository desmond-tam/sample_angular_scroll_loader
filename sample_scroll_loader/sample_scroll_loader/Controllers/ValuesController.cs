using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Threading;

namespace sample_scroll_loader.Controllers
{
    public class sitem
    {
        public int Page { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }

    public class ValuesController : ApiController
    {
        private Random rn = new Random();
        public decimal GetRandomPrice()
        {
            return (decimal)rn.Next(0,50) / 100;
        }

        [HttpGet]
        public IHttpActionResult Get(int page)
        {
            Thread.Sleep(3000);
            List<sitem> list = new List<Controllers.sitem>();
            for (int i=0;i<10;i++)
            {
                list.Add(new Controllers.sitem
                {
                    Page = page,
                    Name = "Name " + i,
                    Price = GetRandomPrice()
                });
            }
            return Ok<IEnumerable<sitem>>(list);
        }
    }
}

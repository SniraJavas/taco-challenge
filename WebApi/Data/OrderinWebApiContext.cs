using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrderinWebApi.Models;

namespace OrderinWebApi.Data
{
    public class OrderinWebApiContext : DbContext
    {
        public OrderinWebApiContext (DbContextOptions<OrderinWebApiContext> options)
            : base(options)
        {
        }

        public DbSet<OrderinWebApi.Models.Order> Order { get; set; }
    }
}

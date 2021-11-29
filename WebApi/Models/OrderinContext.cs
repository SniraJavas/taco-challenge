using System.Data.Entity;

namespace OrderinWebApi.Models
{
    public class OrderinContext : DbContext
    {



        public OrderinContext() { 
        
        }

        public DbSet<Resturant> Resturants { get; set; }
        public DbSet<Category> Cotegories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<MenuItem> MenuItems { get; set; }
    }
}

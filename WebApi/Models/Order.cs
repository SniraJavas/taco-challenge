namespace OrderinWebApi.Models
{
    public class Order
    {
        public int Id { set; get; }
        public double Total { set; get; }
        public List<MenuItem> MenuItems { get; set; }
    }
}

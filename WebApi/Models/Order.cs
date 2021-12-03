namespace OrderinWebApi.Models
{
    public class Order
    {
        public int Id { set; get; }
        public double Total { set; get; }
        public List<Items> MenuItems { get; set; }
    }

    public class Items {
        public int Id { set; get; }
        public string ShopId { set; get;  }
        public string ItemId { set; get; }
    }
}

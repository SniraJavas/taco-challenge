namespace OrderinWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class modifiedthemodeltmatchFE : DbMigration
    {
        public override void Up()
        {
            DropIndex("dbo.MenuItems", new[] { "Order_Id" });
            CreateTable(
                "dbo.Items",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ShopId = c.String(),
                        ItemId = c.String(),
                        Order_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Order_Id);
            
            DropColumn("dbo.MenuItems", "Order_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.MenuItems", "Order_Id", c => c.Int());
            DropIndex("dbo.Items", new[] { "Order_Id" });
            DropTable("dbo.Items");
            CreateIndex("dbo.MenuItems", "Order_Id");
        }
    }
}

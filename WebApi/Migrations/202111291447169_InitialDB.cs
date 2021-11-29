namespace OrderinWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialDB : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Resturant_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Resturants", t => t.Resturant_Id)
                .Index(t => t.Resturant_Id);
            
            CreateTable(
                "dbo.MenuItems",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Price = c.Double(nullable: false),
                        Category_Id = c.Int(),
                        Order_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Categories", t => t.Category_Id)
                .ForeignKey("dbo.Orders", t => t.Order_Id)
                .Index(t => t.Category_Id)
                .Index(t => t.Order_Id);
            
            CreateTable(
                "dbo.Orders",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Total = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Resturants",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        City = c.String(),
                        Suburb = c.String(),
                        LogoPath = c.String(),
                        Rank = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Categories", "Resturant_Id", "dbo.Resturants");
            DropForeignKey("dbo.MenuItems", "Order_Id", "dbo.Orders");
            DropForeignKey("dbo.MenuItems", "Category_Id", "dbo.Categories");
            DropIndex("dbo.MenuItems", new[] { "Order_Id" });
            DropIndex("dbo.MenuItems", new[] { "Category_Id" });
            DropIndex("dbo.Categories", new[] { "Resturant_Id" });
            DropTable("dbo.Resturants");
            DropTable("dbo.Orders");
            DropTable("dbo.MenuItems");
            DropTable("dbo.Categories");
        }
    }
}

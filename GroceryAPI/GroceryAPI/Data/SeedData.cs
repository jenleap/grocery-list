using GroceryAPI.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryAPI.Data
{
    public class SeedData
    {
        public static void SeedDatabase(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<DataContext>();
                context.Database.Migrate();
                if (context.Items.Count() == 0)
                {
                    var item = new Item
                    {
                        Title = "Sample Item",
                        Notes = "Sample Notes",
                        IsPurchased = false,
                        IsDeleted = false
                    };
                    context.Items.Add(item);
                    context.SaveChanges();
                }
            }
        }
    }
}

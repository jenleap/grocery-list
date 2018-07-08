using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryAPI.Data.Dtos
{
    public class ItemDto
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Notes { get; set; }

        public Boolean IsPurchased { get; set; }

        public Boolean IsDeleted { get; set; }

    }
}

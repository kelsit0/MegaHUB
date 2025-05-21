using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;



namespace MegaAPI.Models
{
    [Table("Content")]
    public class Content
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        
        [Column("image_path")]
        public string ImagePath { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public ICollection<Favorite>? Favorites { get; set; }
    }
}

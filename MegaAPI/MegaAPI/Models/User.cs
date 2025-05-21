using System.ComponentModel.DataAnnotations.Schema;

namespace MegaAPI.Models
{

    [Table("User")]
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;

        [Column("password_hash")]
        public string PasswordHash { get; set; } = string.Empty;
        [Column("created_at")]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public ICollection<Favorite>? Favorites { get; set; }
    }
}

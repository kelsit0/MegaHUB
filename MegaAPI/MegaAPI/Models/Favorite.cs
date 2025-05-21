namespace MegaAPI.Models
{
    public class Favorite
    {
        public int UserId { get; set; }
        public User? User { get; set; }

        public int ContentId { get; set; }
        public Content? Content { get; set; }
    }
}

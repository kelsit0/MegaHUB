using Microsoft.EntityFrameworkCore;

namespace MegaAPI.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Content> Contents { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Favorite> Favorites { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Clave compuesta en Favorite
            modelBuilder.Entity<Favorite>()
                .HasKey(f => new { f.UserId, f.ContentId });

            base.OnModelCreating(modelBuilder);
        }
    }


}

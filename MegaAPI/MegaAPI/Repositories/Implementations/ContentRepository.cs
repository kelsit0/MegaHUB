using MegaAPI.Models;
using MegaAPI.Repositories.Interfaces;

namespace MegaAPI.Repositories.Implementations
{
  public class ContentRepository: IContentRepository
  {
    private readonly ApplicationDbContext _context;

    public ContentRepository(ApplicationDbContext context) {
      _context = context;
    }
    public IEnumerable<Content> getAll() {
        return _context.Contents.ToList();
    }
  }
}

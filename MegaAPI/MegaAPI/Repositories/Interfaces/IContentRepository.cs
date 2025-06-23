using MegaAPI.Models;

namespace MegaAPI.Repositories.Interfaces
{
  public interface IContentRepository
  {
    IEnumerable<Content> getAll();
  }
}

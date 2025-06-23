using MegaAPI.Models;

namespace MegaAPI.Services.Interfaces
{
  public interface IContentService
  {
    IEnumerable<Content> getAll();
  }
}

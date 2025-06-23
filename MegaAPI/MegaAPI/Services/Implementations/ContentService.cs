using MegaAPI.Models;
using MegaAPI.Repositories.Interfaces;
using MegaAPI.Services.Interfaces;

namespace MegaAPI.Services.Implementations
{
  public class ContentService: IContentService
  {
    private readonly IContentRepository _repository;
    public ContentService(IContentRepository repository) {
      _repository = repository;
    }

    public IEnumerable<Content> getAll() {
        return _repository.getAll();
    }

  }
}

using MegaAPI.Models;
using MegaAPI.Models.DTOS;

namespace MegaAPI.Repositories.Interfaces
{
  public interface IUserRepository
  {
    User? Authenticate(string username, string password);
    IEnumerable<User> getAll();
    User? createUser(User user);
  }
}

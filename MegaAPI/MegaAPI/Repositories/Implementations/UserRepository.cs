using MegaAPI.Models;
using MegaAPI.Models.DTOS;
using MegaAPI.Repositories.Interfaces;

namespace MegaAPI.Repositories.Implementations
{
  public class UserRepository: IUserRepository
  {
    private readonly ApplicationDbContext _context;

    public UserRepository(ApplicationDbContext context) {
      _context = context;
    }

    public User? Authenticate(string username, string password){
      var exist = _context.Users.FirstOrDefault(u => u.Username == username && u.PasswordHash == password);
      if(exist == null)
      {
        return null;
      }
      return exist;
    }

    public IEnumerable<User> getAll() {
      return _context.Users.ToList();
    }

    public User? createUser(User user) {
      
      var exist =_context.Users.FirstOrDefault(u => u.Username == user.Username);
      if (exist != null)
      {
        return null; // User already exists
      }
      
      _context.Users.Add(user);
      _context.SaveChanges();
      return user;
    }
  }
}

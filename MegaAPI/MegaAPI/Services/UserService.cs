using MegaAPI.Models;
using MegaAPI.Services.Interfaces;

namespace MegaAPI.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;

        public UserService(ApplicationDbContext context) { 
            _context = context; 
        }


        public User? Authenticate(string username, string password) { 
            return _context.Users
                .FirstOrDefault(u=> u.Username== username && u.PasswordHash == password);
        }
    }
}

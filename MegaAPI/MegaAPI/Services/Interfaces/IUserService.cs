
using MegaAPI.Models;

namespace MegaAPI.Services.Interfaces
{
    public interface IUserService
    {

        User? Authenticate(string username, string password);
    }
}

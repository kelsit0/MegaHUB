
using MegaAPI.Models;
using MegaAPI.Models.DTOS;

namespace MegaAPI.Services.Interfaces
{
    public interface IUserService
    {

        ResponseUserDTO? Authenticate(string username, string password);
        IEnumerable<ResponseUserDTO> getAll();
       ResponseUserDTO? CreateUser(CreateUserDTO user);  
  }
}

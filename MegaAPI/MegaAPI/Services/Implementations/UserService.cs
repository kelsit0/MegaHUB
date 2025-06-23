using MegaAPI.Models;
using MegaAPI.Models.DTOS;
using MegaAPI.Repositories.Interfaces;
using MegaAPI.Services.Interfaces;

namespace MegaAPI.Services.Implementations
{
  public class UserService : IUserService
  {
    private readonly IUserRepository _repository;

    public UserService(IUserRepository repository)
    {
      _repository = repository;
    }
    ///mapeos
    public User DtoToUser(CreateUserDTO userDto)
    {
      return new User
      {
        Username = userDto.Username,
        Email = userDto.Email,
        PasswordHash = userDto.PasswordHash
      };
    }
    public ResponseUserDTO userToDto(User user)
    {
      return new ResponseUserDTO
      {
        Username = user.Username,
        Email = user.Email,
      };
    }

    public ResponseUserDTO? Authenticate(string username, string password)
    {
      var user = _repository.Authenticate(username, password);

      if (user == null)
        return null;

      return userToDto(user);
    }


    public IEnumerable<ResponseUserDTO> getAll()
    {
      var users = _repository.getAll();
      List<ResponseUserDTO> response = new List<ResponseUserDTO>();
      foreach (var user in users)
      {
        response.Add(userToDto(user));
      }
      return response;
    }

    public ResponseUserDTO? CreateUser(CreateUserDTO user)
    {
      var myUser = DtoToUser(user);
      var response=  userToDto(_repository.createUser(myUser));
      return response == null ? null : response; // If the user already exists, return null
    }
  }
}

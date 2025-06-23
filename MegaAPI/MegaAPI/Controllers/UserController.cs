using MegaAPI.Models;
using MegaAPI.Models.DTOS;
using MegaAPI.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MegaAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private readonly IUserService _userService;


    public UserController(IUserService service)
    {
      _userService = service;
    }

    [HttpPost]
    public ActionResult<ResponseUserDTO> login([FromForm] string username, [FromForm] string password)
    {

      var user = _userService.Authenticate(username, password);
      if (user == null)
      {
        return NotFound("User not found");
      }
      return Ok(user);
    }

    [HttpGet]
    public IEnumerable<ResponseUserDTO> getAll()
    {
      return _userService.getAll();

    }

    [HttpPost("create")]
    public ActionResult<ResponseUserDTO> createUser([FromBody] CreateUserDTO user)
    {
      if (user == null || string.IsNullOrEmpty(user.Username) || string.IsNullOrEmpty(user.PasswordHash))
      {
        return BadRequest("Invalid user data");
      }
      var createdUser = _userService.CreateUser(user);
      if (createdUser == null)
      {
        return BadRequest("User already exists or creation failed");
      }
      return Ok(createdUser);
    }

  }
}

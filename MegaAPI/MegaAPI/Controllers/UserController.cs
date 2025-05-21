using MegaAPI.Models;
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


        public UserController(IUserService service) { 
            _userService = service;   
        }

        [HttpPost]
        public ActionResult<User> login([FromForm ]string username, [FromForm]string password) {
            
            var user = _userService.Authenticate(username, password);   
            if (user == null)
            {
                return NotFound("User not found");
            }
            return Ok(user);
        }

    }
}

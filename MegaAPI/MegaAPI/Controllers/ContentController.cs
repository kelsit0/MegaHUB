using MegaAPI.Models;
using MegaAPI.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MegaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public ContentController(ApplicationDbContext context) {
            _dbContext = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Content>> getContent() {
            return Ok(_dbContext.Contents.ToList());
        }

    }
}

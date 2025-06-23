using MegaAPI.Models;
using MegaAPI.Services;
using MegaAPI.Services.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MegaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentController : ControllerBase
    {
        private readonly IContentService _service;

        public ContentController( IContentService service) {
            _service = service;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Content>> getContent() {
            return Ok(_service.getAll());
        }

    }
}

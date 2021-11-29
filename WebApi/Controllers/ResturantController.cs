using Microsoft.AspNetCore.Mvc;
using OrderinWebApi.Models;

namespace OrderinWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ResturantController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<ResturantController> _logger;

        public ResturantController(ILogger<ResturantController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<Resturant> Get()
        {
            string json = System.IO.File.ReadAllText("Data/SampleData.json");
            var resturants = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Resturant>>(json);
            return resturants.ToArray();
        }
    }
}
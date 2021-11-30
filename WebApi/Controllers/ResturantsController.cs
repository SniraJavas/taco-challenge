using Microsoft.AspNetCore.Mvc;
using OrderinWebApi.Models;

namespace OrderinWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ResturantsController : ControllerBase
    {

        private readonly ILogger<ResturantsController> _logger;

        public ResturantsController(ILogger<ResturantsController> logger)
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
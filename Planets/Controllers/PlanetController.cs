using Microsoft.AspNetCore.Mvc;

namespace Planets.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlanetController : ControllerBase
    { 
        [HttpGet]
        public Planet[] Get()
        {
            Planet[] planets = { new Planet(1, "Mecury", 45.54, "3.285 × 10^23 kg", 4879,
                                            GetImage("mercury")),
                                 new Planet(2, "Venus", 56.76, "4.867 × 10^24 kg", 12104,
                                            GetImage("venus")),
                                 new Planet(3, "Earth", 93.56, "5.972 × 10^24 kg", 12724,
                                            GetImage("earth")),
                                 new Planet(4, "Mars", 103.76, "6.434 × 10^24 kg", 6997,
                                            GetImage("mars")),
                                 new Planet(5, "Jupiter", 145.43, "1.898 × 10^27 kg", 139820 ,
                                            GetImage("jupiter")),
                                 new Planet(6, "Saturn", 187.87, "2.564 × 10^27 kg", 116460,
                                            GetImage("saturn")),
                                 new Planet(7, "Uranus", 205.12, "3.421 × 10^27 kg", 50725,
                                            GetImage("uranus")),
                                 new Planet(8, "Neptune", 266.76, "1.024 × 10^267 kg", 49244,
                                            GetImage("neptune")),
            };

            return planets.ToArray();
        }

        private FileContentResult GetImage (string image)
        {
            Byte[] image1 = System.IO.File.ReadAllBytes("Images/" + image + ".jpg");
            return File(image1, "image/jpeg");
        }
    }
}

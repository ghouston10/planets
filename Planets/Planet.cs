using Microsoft.AspNetCore.Mvc;

namespace Planets
{
    public class Planet
    {
        public Planet(int Id, string Name, double DistanceFromSun, string Mass, int Diameter, FileContentResult Image)
        {
            this.Id = Id;
            this.Name = Name;
            this.DistanceFromSun = DistanceFromSun;
            this.Mass = Mass;
            this.Diameter = Diameter;
            this.Image = Image;
        }
        
        public int Id { get; set; }
        public string Name { get; set; }
        public double DistanceFromSun { get; set; }
        public string Mass { get; set; }
        public int Diameter { get; set; }
        public FileContentResult Image { get; set; }
    }
}

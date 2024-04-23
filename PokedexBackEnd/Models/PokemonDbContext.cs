using Microsoft.EntityFrameworkCore;

namespace Pokedex.Models
{
    public class PokemonDbContext : DbContext
    {
        public PokemonDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Pokemon> Pokemons { get; set; }
    }

}

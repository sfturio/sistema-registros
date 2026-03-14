using BackendDotNet.Options;
using BackendDotNet.Repositories;
using BackendDotNet.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration
    .AddEnvironmentVariables();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// Bind de configuracao Database com suporte a variaveis de ambiente.
builder.Services
    .AddOptions<DatabaseOptions>()
    .Bind(builder.Configuration.GetSection(DatabaseOptions.SectionName));

builder.Services.PostConfigure<DatabaseOptions>(options =>
{
    options.Host = Environment.GetEnvironmentVariable("DB_HOST") ?? options.Host;
    options.Port = int.TryParse(Environment.GetEnvironmentVariable("DB_PORT"), out var port) ? port : options.Port;
    options.Name = Environment.GetEnvironmentVariable("DB_NAME") ?? options.Name;
    options.User = Environment.GetEnvironmentVariable("DB_USER") ?? options.User;
    options.Password = Environment.GetEnvironmentVariable("DB_PASSWORD") ?? options.Password;
});

builder.Services.AddScoped<IRegistroRepository, RegistroRepository>();
builder.Services.AddScoped<IRegistroService, RegistroService>();

var app = builder.Build();

app.UseHttpsRedirection();
app.MapControllers();
app.Run();

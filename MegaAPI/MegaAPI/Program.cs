using MegaAPI.Models;
using MegaAPI.Repositories.Implementations;
using MegaAPI.Repositories.Interfaces;
using MegaAPI.Services.Implementations;
using MegaAPI.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


// Add DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();
/// enlazamos con la interfaz y la implementacion para contenido
builder.Services.AddScoped<IContentRepository, ContentRepository>(); 
builder.Services.AddScoped<IContentService, ContentService>();  

var origenes = builder.Configuration.GetValue<string>("AllowedHosts")!.Split(",");

builder.Services.AddCors(opciones =>
{
    opciones.AddDefaultPolicy(politica =>
    {
        politica.WithOrigins(origenes)
                .AllowAnyHeader()
                .AllowAnyMethod();
    });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//cors
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();

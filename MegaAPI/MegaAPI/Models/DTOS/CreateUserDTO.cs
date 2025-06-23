namespace MegaAPI.Models.DTOS
{
  public class CreateUserDTO
  {
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;

    public string PasswordHash { get; set; } = string.Empty;
  }
}

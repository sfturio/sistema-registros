namespace BackendDotNet.Options;

public sealed class DatabaseOptions
{
    public const string SectionName = "Database";

    public string Host { get; set; } = "localhost";
    public int Port { get; set; } = 5432;
    public string Name { get; set; } = "registros_db";
    public string User { get; set; } = "postgres";
    public string Password { get; set; } = "postgres";
}

using BackendDotNet.Models;
using BackendDotNet.Options;
using Microsoft.Extensions.Options;

namespace BackendDotNet.Repositories;

public interface IRegistroRepository
{
    Task<IReadOnlyList<RegistroDto>> ListarAsync(CancellationToken cancellationToken = default);
}

public sealed class RegistroRepository : IRegistroRepository
{
    private readonly DatabaseOptions _db;

    public RegistroRepository(IOptions<DatabaseOptions> dbOptions)
    {
        _db = dbOptions.Value;
    }

    public Task<IReadOnlyList<RegistroDto>> ListarAsync(CancellationToken cancellationToken = default)
    {
        IReadOnlyList<RegistroDto> itens =
        [
            new RegistroDto(1, $"Registro em {_db.Host}:{_db.Port}/{_db.Name}", "dotnet")
        ];

        return Task.FromResult(itens);
    }
}

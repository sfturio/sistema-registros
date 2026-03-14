using BackendDotNet.Models;
using BackendDotNet.Repositories;

namespace BackendDotNet.Services;

public interface IRegistroService
{
    Task<IReadOnlyList<RegistroDto>> ListarAsync(CancellationToken cancellationToken = default);
}

public sealed class RegistroService(IRegistroRepository repository) : IRegistroService
{
    public Task<IReadOnlyList<RegistroDto>> ListarAsync(CancellationToken cancellationToken = default)
        => repository.ListarAsync(cancellationToken);
}

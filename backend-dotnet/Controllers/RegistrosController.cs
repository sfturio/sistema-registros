using BackendDotNet.Services;
using Microsoft.AspNetCore.Mvc;

namespace BackendDotNet.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class RegistrosController(IRegistroService registroService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get(CancellationToken cancellationToken)
    {
        var registros = await registroService.ListarAsync(cancellationToken);
        return Ok(registros);
    }
}

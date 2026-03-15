import { z } from "zod";
import { registroService } from "../services/registroService.js";

const registroSchema = z.object({
  titulo: z.string().min(3).max(120),
  descricao: z.string().max(1000).optional().default(""),
  status: z.enum(["aberto", "em_andamento", "concluido"]).default("aberto"),
});

export const registroController = {
  async list(req, res) {
    console.log("[REGISTRO][LIST] filtros:", req.query);

    const registros = await registroService.list(req.query);
    return res.status(200).json({ ok: true, data: registros });
  },

  async create(req, res) {
    console.log("[REGISTRO][CREATE]", req.body);

    const parsed = registroSchema.safeParse(req.body);
    if (!parsed.success) {
      console.warn("[REGISTRO][CREATE] payload inválido");
      return res.status(400).json({
        ok: false,
        error: "payload_invalido",
        details: parsed.error.flatten(),
      });
    }

    const created = await registroService.create(parsed.data);
    console.log("[REGISTRO][CREATE] sucesso id:", created?.id);

    return res.status(201).json({ ok: true, data: created });
  },

  async update(req, res) {
    console.log("[REGISTRO][UPDATE] id:", req.params.id, "payload:", req.body);

    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ ok: false, error: "id invalido" });
    }

    const parsed = registroSchema.partial().safeParse(req.body);
    if (!parsed.success || Object.keys(parsed.data).length === 0) {
      console.warn("[REGISTRO][UPDATE] payload_invalido");
      return res.status(400).json({ ok: false, error: "payload invalido" });
    }

    const updated = await registroService.update(id, parsed.data);
    if (!updated) {
      return res
        .status(404)
        .json({ ok: false, error: "registro nao encontrado" });
    }

    return res.status(200).json({ ok: true, data: updated });
  },

  async remove(req, res) {
    console.log("[REGISTRO][DELETE] id:", req.params.id);
    
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ ok: false, error: "id invalido" });
    }

    const deleted = await registroService.remove(id);
    if (!deleted) {
      return res
        .status(404)
        .json({ ok: false, error: "registro nao encontrado" });
    }

    return res.status(200).json({ ok: true });
  },
};

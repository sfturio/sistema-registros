import { pool } from "../config/pool.js";

export const registroRepository = {
  async list({ status, busca }) {
    const values = [];
    const where = [];

    if (status) {
      values.push(status);
      where.push(`status = $${values.length}`);
    }

    if (busca) {
      values.push(`%${busca}%`);
      where.push(`(titulo ILIKE $${values.length} OR descricao ILIKE $${values.length})`);
    }

    const sql = `
      SELECT id, titulo, descricao, status, created_at, updated_at
      FROM registros
      ${where.length ? `WHERE ${where.join(" AND ")}` : ""}
      ORDER BY updated_at DESC;
    `;

    const { rows } = await pool.query(sql, values);
    return rows;
  },

  async create({ titulo, descricao, status }) {
    const sql = `
      INSERT INTO registros (titulo, descricao, status)
      VALUES ($1, $2, $3)
      RETURNING id, titulo, descricao, status, created_at, updated_at;
    `;

    const { rows } = await pool.query(sql, [titulo, descricao || "", status || "aberto"]);
    return rows[0];
  },

  async update(id, payload) {
    const fields = [];
    const values = [];

    if (payload.titulo !== undefined) {
      values.push(payload.titulo);
      fields.push(`titulo = $${values.length}`);
    }

    if (payload.descricao !== undefined) {
      values.push(payload.descricao);
      fields.push(`descricao = $${values.length}`);
    }

    if (payload.status !== undefined) {
      values.push(payload.status);
      fields.push(`status = $${values.length}`);
    }

    if (fields.length === 0) {
      return null;
    }

    values.push(id);

    const sql = `
      UPDATE registros
      SET ${fields.join(", ")}, updated_at = now()
      WHERE id = $${values.length}
      RETURNING id, titulo, descricao, status, created_at, updated_at;
    `;

    const { rows } = await pool.query(sql, values);
    return rows[0] || null;
  },

  async remove(id) {
    const { rowCount } = await pool.query("DELETE FROM registros WHERE id = $1", [id]);
    return rowCount > 0;
  },
};

import { registroRepository } from "../models/registroRepository.js";

export const registroService = {
  list(filters) {
    return registroRepository.list(filters);
  },

  create(payload) {
    return registroRepository.create(payload);
  },

  update(id, payload) {
    return registroRepository.update(id, payload);
  },

  remove(id) {
    return registroRepository.remove(id);
  },
};

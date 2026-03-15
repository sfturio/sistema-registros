<template>
  <main class="container">
    <header>
      <h1>Sistema de Registros</h1>
      <p>Projeto de estudo para portfólio (Vue + Node + PostgreSQL).</p>
    </header>

    <section class="panel">
      <h2>Novo Registro</h2>
      <form @submit.prevent="createRegistro" class="form-grid">
        <input v-model="form.titulo" placeholder="Titulo" required minlength="3" />
        <select v-model="form.status">
          <option value="aberto">Aberto</option>
          <option value="em_andamento">Em andamento</option>
          <option value="concluido">Concluido</option>
        </select>
        <textarea v-model="form.descricao" placeholder="Descricao"></textarea>
        <button type="submit">Salvar</button>
      </form>
    </section>

    <section class="panel">
      <h2>Registros</h2>
      <ul class="list">
        <li v-for="item in registros" :key="item.id">
          <div>
            <strong>{{ item.titulo }}</strong>
            <p>{{ item.descricao }}</p>
            <small>Status: {{ item.status }} | Atualizado: {{ formatDate(item.updated_at) }}</small>
          </div>
          <button @click="removeRegistro(item.id)">Remover</button>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { api } from "./services/api.js";

const registros = ref([]);
const form = reactive({ titulo: "", descricao: "", status: "aberto" });

const load = async () => {
  const res = await api.list();
  registros.value = res.data || [];
};

const createRegistro = async () => {
  await api.create({ ...form });
  form.titulo = "";
  form.descricao = "";
  form.status = "aberto";
  await load();
};

const removeRegistro = async (id) => {
  await api.remove(id);
  await load();
};

const formatDate = (value) => new Date(value).toLocaleString("pt-BR");

onMounted(load);
</script>

<style>
:root {
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  color: #e6e9f2;
  background: #0f1320;
}

* { box-sizing: border-box; }
body { margin: 0; }

.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 24px;
  display: grid;
  gap: 16px;
}

header h1 { margin: 0; }
header p { margin: 6px 0 0; color: #b8bfd3; }

.panel {
  background: #171d2e;
  border-radius: 12px;
  padding: 16px;
}

.form-grid {
  display: grid;
  gap: 10px;
}

input, select, textarea, button {
  border: 1px solid #30384f;
  background: #101625;
  color: #e6e9f2;
  border-radius: 8px;
  padding: 10px;
}

button {
  cursor: pointer;
  background: #2c4aa0;
  border: none;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.list li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  background: #101625;
  border: 1px solid #27304a;
  border-radius: 10px;
  padding: 12px;
}

.list p { margin: 6px 0; color: #c6cbe0; }
small { color: #94a0c0; }
</style>

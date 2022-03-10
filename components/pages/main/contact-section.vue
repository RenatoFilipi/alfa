<template lang="html">
  <section id="contato" class="py-32 block">
    <div class="block w-full">
      <h3 class="text-center text-indigo-400 font-pp font-medium text-xl mb-2">
        CONTATE-NOS
      </h3>
      <h1
        class="text-center font-pp text-5xl max-w-5xl mx-auto my-0 font-semibold leading-snug mb-20"
      >
        {{ title }}
      </h1>
      <div
        class="flex max-w-6xl h-auto bg-white rounded-lg border border-gray-200 m-auto"
      >
        <div class="block w-7/12 p-8">
          <span class="font-pp">Mande-nos uma mensagem</span>
          <div class="flex flex-col gap-4 mt-8">
            <!-- nome -->
            <div>
              <label
                for="name-icon"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Nome</label
              >
              <div class="relative">
                <div
                  class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-indigo-400 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  id="name-icon"
                  v-model="form.name"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Barbara Ormeneze"
                />
              </div>
            </div>
            <!-- email -->
            <div>
              <label
                for="email-adress-icon"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Email</label
              >
              <div class="relative">
                <div
                  class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-indigo-400 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    ></path>
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    ></path>
                  </svg>
                </div>
                <input
                  id="email-adress-icon"
                  v-model="form.email"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ormenezearquitetura@gmail.com"
                />
              </div>
            </div>
            <!-- assunto -->
            <div>
              <label
                for="subject-icon"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Assunto</label
              >
              <div class="relative">
                <div
                  class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-indigo-400 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <input
                  id="subject-icon"
                  v-model="form.subject"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Novo projeto"
                />
              </div>
            </div>
            <!-- mensagem -->
            <div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >Mensagem</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Deixe seu comentário..."
              ></textarea>
            </div>
            <!-- botao -->
            <button
              type="button"
              class="mt-8 text-white w-full bg-indigo-400 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="submitForm"
            >
              Enviar
            </button>
          </div>
        </div>
        <div class="block bg-gray-50 rounded-r-lg w-5/12"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContactForm } from '~/interfaces/utils/IForm'
const title = 'Deixe sua mensagem para um novo projeto ou para apenas um olá'

export default Vue.extend({
  name: 'ContactSection',
  data() {
    return {
      title,
      form: { name: '', email: '', subject: '', message: '' } as IContactForm,
    }
  },

  methods: {
    submitForm() {
      console.log(this.form)
    },
  },
})
</script>

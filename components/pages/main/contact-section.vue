<template lang="html">
  <section id="contato" class="pb-32 block">
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
        class="flex max-w-5xl h-auto bg-white rounded-lg border border-gray-200 m-auto"
      >
        <div class="block w-4/6 p-8">
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
              class="mt-8 text-white w-full bg-indigo-400 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 font-medium font-pp rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center justify-center"
              @click="submitForm"
            >
              <svg
                v-if="isSubmitting"
                role="status"
                class="inline mr-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              <span v-if="isSubmitting">Enviando...</span>
              <span v-else>Enviar</span>
            </button>
          </div>
        </div>
        <div
          class="block border border-gray-100 rounded-r-lg w-2/6 p-8 bg-gray-100"
        >
          <span class="font-pp text-gray-900">Informações de contato</span>
          <div class="flex flex-col mt-10 space-y-8">
            <div v-for="(item, index) in contactInfo" :key="index" class="">
              <h5 class="font-pp text-indigo-400">{{ item.title }}</h5>
              <div class="mt-4 flex flex-col space-y-1">
                <p
                  v-for="(info, indexin) in item.data"
                  :key="indexin"
                  class="font-pp text-gray-900 text-sm"
                >
                  {{ info }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContactForm } from '~/interfaces/utils/IForm'
import { IContactInfoBlock } from '~/interfaces/utils/IMisc'
const contactInfo: Array<IContactInfoBlock> = [
  {
    title: 'Onde nos encontrar',
    data: ['1600 Amphitheatre Parkway', 'Mountain View, CA', '94043 US'],
  },
  {
    title: 'Envie-nos um email para',
    data: ['contact@glintsite.com', 'nfo@glintsite.com'],
  },
  {
    title: 'Ligue para nós',
    data: ['Phone: (+63) 555 1212', 'Mobile: (+63) 555 0100'],
  },
]

const title = 'Deixe sua mensagem para um novo projeto ou para apenas um olá'

export default Vue.extend({
  name: 'ContactSection',
  data() {
    return {
      title,
      form: { name: '', email: '', subject: '', message: '' } as IContactForm,
      isSubmitting: false as Boolean,
      contactInfo,
    }
  },

  methods: {
    submitForm() {
      console.log(this.form)
      this.isSubmitting = true
      setTimeout(() => {
        this.isSubmitting = false
      }, 2000)
    },
  },
})
</script>

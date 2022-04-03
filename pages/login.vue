<template>
  <div>
    <Navbar />
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <div v-if="errorMessage" class="alert alert-error shadow-lg mt-3 mb-3">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-100" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{{ errorMessage }}</span>
                </div>
              </div>
              <h2 class="card-title">Login!</h2>
              <form @keydown.enter="login">

                <label class="block">
                  <span class="text-gray-700">Email</span>
                  <input v-model="email" type="email" class="mt-1 block w-full" placeholder="" />
                </label>
                <label class="block">
                  <span class="text-gray-700">Password</span>
                  <input  v-model="password" type="password" class="mt-1 block w-full" placeholder="" />
                </label>
              </form>
              <div class="card-actions justify-end">
                <button class="btn btn-primary" @click="login">Login</button>
              </div>
            </div>
          </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  middleware: ['auth'],
  data() {
    return {
      email: '',
      password: '',
      errorMessage: null
    }
  },

  methods: {
    login() {
      this.errorMessage = null
      try {
        this.$auth
        .loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        }).then((result) => {
          this.$router.push('/')
        }).catch((err) => {
          const responseData = err.response?.data
          this.errorMessage = responseData?.message ?? responseData
        });
      } catch (err) {
        const responseData = err.response?.data
        this.errorMessage = responseData?.message ?? responseData
      }
    },
  }
}
</script>

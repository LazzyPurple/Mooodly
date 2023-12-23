<template>
  <div class="login-container">
    <h2 class="login-title">Sign in to your account</h2>
    <form @submit.prevent="loginUser">
      <div class="form-group">
        <label for="email">Email Adress</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit" class="login-button">Sign in</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post('http://localhost:1337/api/auth/local', {
          identifier: this.email,
          password: this.password
        })
        // Stockez le token JWT ici, par exemple dans localStorage
        localStorage.setItem('jwt', response.data.jwt)
        // Redirigez vers la page d'accueil ou toute autre page sécurisée
        this.$router.push({ name: 'home' })
      } catch (error) {
        console.error('An error occurred:', error)
        // Gérer les erreurs ici, par exemple en affichant un message
      }
    }
  }
}
</script>

<style>
.login-container {
  background-color: #fff;
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

.login-title {
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  color: #000;
  display: block;
  text-align: left;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #4f46e5;
  color: white;
  cursor: pointer;
}

.signup-link {
  color: #4f46e5;
  text-decoration: none;
}
</style>

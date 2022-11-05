<template>
  <div class="flex flex-col items-center">
    <div v-if="auth.currentUser === null" class="login mt-5 flex flex-col justify-center items-center gap-7">
      <h3>Login</h3>
      <form @submit.prevent="pressed">
        <div class="login">
          <input v-model="email" type="text" placeholder="email" class="p-5 w-full text-2xl m-1" />
        </div>
        <div class="password" :class="{ 'text-vampireStateBuilding': errorObj.message }">
          <input v-model="password" type="password" placeholder="password" class="p-5 w-full text-2xl m-1" />
        </div>
        <button class="w-96 h-20 border">Login</button>
      </form>
    </div>
    <button v-else class="w-96 h-20 border" @click="logoutFunc">Logout</button>
    <div v-if="errorObj.message" class="error text-center">
      {{ errorObj.message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../plugins/firebase';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorObj = ref({ message: '' });
const router = useRouter();

console.log('Login page');

function logoutFunc() {
  signOut(auth);
  console.log('auth.currentUser: ', auth.currentUser);
  router.push('./'); // refresh the page
}

function pressed() {
  // Initialize Firebase
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(async userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log('user', user);
      router.push({ path: '/secret', query: { q: 'test' } });
    })
    .catch(error => {
      // const errorCode = error.code
      errorObj.value.message = error.message;
    });
}
</script>

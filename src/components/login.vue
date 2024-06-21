<template>
    <div>
      <form class="main" @submit.prevent="signIn">
        <div class="box">
          <img src="https://www.payagri.com/assets/images/logo.png" alt="Company Logo" class="logo">
          <p class="heading">Timesheet Management</p>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input :type="showPassword ? 'text' : 'password'" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
            <div class="show">
              <input type="checkbox" id="showPassword" v-model="showPassword">
              <label for="showPassword" class="text-show">Show Password</label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign In</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { auth } from '@/firebase/firebase';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        showPassword: false
      };
    },
    methods: {
      async signIn() {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
          const user = userCredential.user;
  
          // Redirect to home page with userId
          this.$router.push({ name: 'Home', params: { userId: user.uid } });
        } catch (error) {
          console.error('Sign-in error:', error);
          alert('Sign-in failed: ' + error.message);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .main {
    min-height: 100vh;
    width: 100%;
  }
  
  form {
    gap: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .form-group {
    padding: 1em 1em;
    opacity: 0.9;
  }
  
  .main {
    min-height: 100vh;
    background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msOP2.img);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: rgb(8, 8, 8);
  }
  
  .box {
    flex: 0 0 30%;
    width: 36%;
    background-color: #ccc;
    margin: 10px;
    border-radius: 20px;
    transition: 0.5s;
    padding: 3em;
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  
  .btn {
    margin-left: 10em;
    margin-top: 2em;
  }
  
  .logo {
    width: 17vw;
    margin-left: 5em;
  }
  
  .heading {
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 30px;
  }
  
  .show {
    padding: 1em 1em;
  }
  
  .text-show {
    margin-left: 0.7em;
  }
  
  /* Media Queries for responsiveness */
  @media (max-width: 1200px) {
    .box {
      width: 50%;
    }
  }
  
  @media (max-width: 992px) {
    .box {
      width: 70%;
    }
  
    .logo {
      width: 20vw;
      margin-left: 0;
    }
  
    .btn {
      margin-left: 0;
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    .box {
      width: 90%;
      padding: 2em;
    }
  
    .logo {
      width: 30vw;
      margin-left: 0;
    }
  
    .btn {
      margin-left: 0;
      width: 100%;
    }
  }
  
  @media (max-width: 576px) {
    .box {
      width: 95%;
      padding: 1em;
    }
  
    .logo {
      width: 40vw;
      margin-left: 0;
    }
  
    .heading {
      font-size: 1.2rem;
    }
  
    .btn {
      margin-left: 0;
      width: 100%;
    }
  }
  </style>
  
<template>
  <div id="app">
    <div id="nav">

    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
#app {
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
     :root {
            --main-txt-color: #0CB91E;
            --paragraph-txt-color: #2F2E41;
            --span-txt-color: #505050;
            --button-bg-color: #2F2E41;
            --main-padding-top: 20px;
            --div-padding-top: 70px;
        
        }
</style>

<template>
  <div id="banner">
  <div id="navbar">
  <RouterLink to="/">首頁</RouterLink>
  <RouterLink to="blog">關於我</RouterLink>
  <RouterLink to="#">作品集</RouterLink>
  <RouterLink to="#">聯絡我</RouterLink>
</div>
  </div>

<RouterView></RouterView>

</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>
body {
      margin: 0;
      font-family: Arial, sans-serif;
    }
#banner{
  background-image: url(assets/banner.jpg);
  background-size: 100%;
}
#navbar {
      display: flex;
      justify-content: center;
      padding-top: 2%;
      padding-bottom: 20%;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      background-image: linear-gradient(-180deg, #0a0a0a 0%, #ffffff00 100%);
    }

    #navbar a {
      text-decoration: none;
      margin: 0 10px;
      padding: 8px 16px;
      color: #ffffff;
      border-radius: 20px;
      transition: all 0.3s ease;
      font-weight: bold;
    }

    #navbar a:hover {
      background-color: #ffd6e8;
      color: #ff1493;
      transform: scale(1.05);   
     }
    

    
</style>
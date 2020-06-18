<template>
  <div id="app" class="d-flex w-100 h-100  mx-auto flex-column">

    <router-view />
    <footer class="footer">
      <div class="container">
        <span class="text-muted">&#169; Copyright 2020 JB-Production | </span>
        <span class="text-muted">Contact <a href="mailto:bhattjay91@yahoo.com">Jay Bhatt</a> for any questions.</span>
      </div>
</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {

    }
  },
  created(){
    this.getImage();
  },
  methods:{
    getImage(){

      this.axios.get('https://api.pexels.com/v1/search?query=ocean',
        {
          headers: {
             'Authorization': '563492ad6f91700001000001874e43f1cad34bd8a58e48aa7a10da20'
           }
        }).then((response) => {
          let landscapePhoto = response.data.photos[0].src.landscape
          document.body.style.cssText = "background:  url('"+landscapePhoto+"') no-repeat fixed; background-size: cover;background-position-x: center;";
      })
    }
  }
}
</script>
<style>
html,
body {
  height: 100%;
}
body {
  display: -ms-flexbox;
  display: flex;
}
.cover-container {
  max-width: 42em;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}

</style>

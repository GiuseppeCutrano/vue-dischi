var myApp = new Vue({
  el:"#root",
  data:{
    albums:[],
  },
  
  mounted(){
   axios
   .get('https://flynn.boolean.careers/exercises/api/array/music')
   .then(album => {
     this.albums = album.data.response;
     console.log(album.data.response);
     console.log(this.albums);
   });
 }
});

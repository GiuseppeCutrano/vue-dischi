var myApp = new Vue({
  el:"#root",
  data:{
    albums:[],
    genres: [],
    filterAlb: 'All'
  },

  mounted(){
   axios
   .get('https://flynn.boolean.careers/exercises/api/array/music')
   .then(album => {
     this.albums = album.data.response;
     console.log(album.data.response);
     console.log(this.albums);
     this.albums.forEach((el, i) => {

                if (!this.genres.includes(el.genre)) {

                    this.genres.push(el.genre);
                }

            });
   });
 }
});

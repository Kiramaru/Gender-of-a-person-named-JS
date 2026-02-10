let app = new Vue({
    el: '#app',
    data: {
      linkname: null,
      name: null,
      gender: null,
      persent: null,
      loading: true,
      errored: false
    },
    updated() {
      axios
        .get("https://api.genderize.io/?name=" + this.linkname)
        .then(gender => (this.name = gender.data.name, this.gender = gender.data.gender,
           this.persent = gender.data.probability*100 + "%"))
        .catch(error => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => 
          {console.log(this.gender);
            if(this.gender != null){
            this.loading = false;
          } 
          else {
            this.loading = true
          }})
        }
      });
var flag = false;
function Descript(){
  let mass = new Array();
  mass = document.getElementsByName("des");
  if(!flag){
    for (index = 0; index < mass.length; index++) {
      mass[index].style.display = "none";
    }
    flag = true;
    console.log(0);
  }
  else{
    for (index = 0; index < mass.length; index++) {
      mass[index].style.display = "block";
    }
    flag = false;
    console.log(1);
  }
}
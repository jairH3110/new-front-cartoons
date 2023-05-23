class kafkaServices {
  //url = 'https://your-kafka-express-service-kafka-adsoftsito.cloud.okteto.net/';
  url = 'http://localhost:8080/'
 
  reaction = async (name) => {
   await fetch(this.url + 'like?name=' + name, {
      method: 'GET',
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },  
   })  
      .then((response) => console.log(response.json()))
      .then((data) => {
        console.log(data);
      })  
      .catch((err) => {
         console.log(err.message);
      }); 
  }

}
const kafkaService = new kafkaServices();
export default  kafkaService
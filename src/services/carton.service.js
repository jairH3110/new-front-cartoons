import firebase from "../firebase";

const db = firebase.collection("cartons");

class CartonDataServices {
  getAll() {
    return db;
  }

  create(carton) {
    return db.add(carton);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}
const CartonDataService = new CartonDataServices();
export default  CartonDataService
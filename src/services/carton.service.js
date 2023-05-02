import firebase from "../firebase";

const db = firebase.collection("cartons");

class CartonDataService {
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

export default new CartonDataService();
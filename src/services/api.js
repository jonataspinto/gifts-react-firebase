import { firebase } from './Firebase'
import { getAll } from '../store/gifted/gifted.action';

const get = () => {
  let res = []
  firebase
  .database()
  .ref("gifted")
  .on("value", snapshot => {
    Object.keys(snapshot.val()).map(key => (
      res.push(snapshot.val()[key] = {
        ...snapshot.val()[key],
        key,
        items: Object.keys(snapshot.val()[key].items).map(itemKey => {
          let item = {
            ...snapshot.val()[key].items[itemKey],
            key: itemKey
          }
          return item;
        }),
      })
    ));
  });
  return res
};

const insertGifted = (newGifted) => {
  firebase
  .database()
  .ref("gifted")
  .push(newGifted);
}

const removeGifted = (key) => {
  firebase
  .database()
  .ref(`gifted/${key}`)
  .remove().then(function() {
    getAll()
  })
}

export { get, insertGifted, removeGifted };

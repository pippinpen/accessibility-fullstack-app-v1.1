
// function that adds dot path to updates object for UpdateOne $set in Mongoose
const createMongooseUpdatePath = (updatesObj) => {
  const dotPathUpdatesObj = {};
  for (const key in updatesObj){
    const value = updatesObj[key];
    const newKey = ('formConfig' + '.' + key);
    dotPathUpdatesObj[newKey] = value;
  }
  return dotPathUpdatesObj;
};

exports.createMongooseUpdatePath = createMongooseUpdatePath;
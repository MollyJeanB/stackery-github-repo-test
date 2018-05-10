module.exports = async message => {
    console.log("Hello github hosting!")

  console.dir(message);

  return {
    response: "Hello returned"
  };
}

function ss() {
  //   this.age = 20;
  //   this.name = "sadnan";

  function getName() {
    return "sadnan";
  }
  function getThis() {
    return this;
  }
  return this;
}
function sss() {
  return this;
}

const aa = new ss();
console.log(aa);

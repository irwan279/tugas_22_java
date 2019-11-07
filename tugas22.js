function tugas22() {
  var kalimat = "Saya ingin belajar bersama";
  var result = kalimat.split(" ");
  var item1 = "item :"
  var index1 = "index ke "
  // return result
  result.forEach(function (item, index, array){
    console.log(item1, item, index1, index);
  })
}
console.log(tugas22());

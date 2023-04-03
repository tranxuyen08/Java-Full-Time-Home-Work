function number() {
  const a = prompt('nhap vao so a:', '')
  const b = prompt('nhap vao so b:', '')
  switch (true) {
    case a % b == 0:
      alert('chia het');
      break;
    case a % b != 0:
      alert('ko chia het')
  }
}
function yearOld() {
  const a = prompt('nhap vao so tuoi:', '')
  switch (true) {
    case a == 15:
      alert('b da duoi tuoi vao lop 10')
      break;
    case a != 15:
      alert('b ko du tuoi')
      break;
  }
}
function numMax() {
  const a = prompt('nhap vao so nguyen a:', "")
  const b = prompt('nhap vao so nguyen b:', "")
  const c = prompt('nhap vao so nguyen c:', "")
  switch (true) {
    case a > b && a > c:
      alert('a max')
      break;
    case b > a && b > c:
      alert('b max');
      break;
    case c > b && c > a:
      alert('c max');
      break;
    case a == b && b == c:
      alert('a b c deu max')
      break
  }
}
function point() {
  const diemGiuaKy = Number(prompt('nhap vao diem giua ky:', ""))
  const diemCuoiKy = Number(prompt('nhap vao diem cuoi ky:', ""))
  const diemTongKet = Number((diemGiuaKy + diemCuoiKy))/2
  console.log(diemTongKet);
    switch (true) {
      case diemTongKet >= 8:
        alert('gioi')
        break;
      case diemTongKet >= 7:
        alert('kha')
        break;
      case diemTongKet >= 5:
        alert('trung binh')
        break;
      default:
        alert('yeu')
        break;
    }
}
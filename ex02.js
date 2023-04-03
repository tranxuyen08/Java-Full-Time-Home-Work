function doiDo() {
  const nhietDoC = Number(prompt('nhap vao nhiet do :',''))
  const doF =  nhietDoC * 9/5 + 32
  alert(doF)
}
function changeFt(){
  const met = Number(prompt('nhap vao so feet:',''))
  const  ft = met * 3.2808
  switch(true){
    case ft > 0:
    alert(ft)
    break;
    default:
      alert('ko hop le')
  }
}
function dientichHV(){
  const a =  Number(prompt('nhap vao canh a:',''))
  const sHinhVuong = a * a;
  switch(true){
    case a > 0:
      alert(sHinhVuong)
      break;
    default:
      alert('ko hop le')
  }
}
function dientichHCN(){
  const a =  Number(prompt('nhap vao canh a:',''))
  const b =  Number(prompt('nhap vao canh b:',''))
  const sHCN = a * b
  switch(true){
    case sHCN > 0:
      alert('dien tich hinh chu nhat la:',sHCN)
      break;
    default:
      alert('ko hop le')
  }
}

var listData = [
  {id: 100, name: 'Calamus',  des:'www.calamus.xyz',color:'#E1244E',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你', value: 123, delay: 120, fatherId: 0,tlevel:1},
  {id: 101, name: 'Calamus1', des:'www.calamus.xyz',color:'#E1244E',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 0, fatherId: 100,tlevel:1},
  {id: 102, name: 'Calamus2', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 100, fatherId: 100,tlevel:0},
  {id: 103, name: 'Calamus3', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 100,tlevel:0},
  {id: 104, name: 'Calamus4', des:'www.calamus.xyz',color:'#E1244E',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 200, fatherId: 100,tlevel:0},
  {id: 105, name: 'Calamus5', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 101,tlevel:0},
  {id: 106, name: 'Calamus6', des:'www.calamus.xyz',color:'#E1244E',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 102,tlevel:0},
  {id: 107, name: 'Calamus7', des:'www.calamus.xyz',color:'#E1244E',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 102,tlevel:0},
  {id: 108, name: 'Calamus8', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 102,tlevel:0},
  {id: 109, name: 'Calamus9', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 102,tlevel:0},
  {id: 110, name: 'Calamus10', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 102,tlevel:0},
  {id: 111, name: 'Calamus11', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 102,tlevel:0},
  {id: 112, name: 'Calamus12', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 300, fatherId: 103,tlevel:0},
  {id: 113, name: 'Calamus13', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 103,tlevel:0},
  {id: 114, name: 'Calamus14', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 108,tlevel:0},
  {id: 116, name: 'Calamus15', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 108,tlevel:0},
  {id: 117, name: 'Calamus16', des:'www.calamus.xyz',color:'#aaa',content:'你可以选择爱我或者不爱我，而我只能选择爱你或者更爱你',value: 123, fatherId: 108,tlevel:0},
]
listData.forEach(function (v) {
  if (!v.delay) {
      v.delay = 200 * Math.random();
  }
});
export const list = listData

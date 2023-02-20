import { CookieUtil } from "./CookieUtil.js" 

CookieUtil.set('Name','natnicha')
CookieUtil.set('arr',JSON.stringify([{Name:"pin",Age:20},{Name:"nachricht",Age:25}]))
CookieUtil.set('objMe',JSON.stringify({Name:"pin",Age:20}))
console.log(CookieUtil.get('Name'));

CookieUtil.unset('allword')
CookieUtil.unset('categoryAll')
console.log(CookieUtil.get('Name'));
console.log( JSON.parse(CookieUtil.get('arr')));
console.log(CookieUtil.get('objMe'));
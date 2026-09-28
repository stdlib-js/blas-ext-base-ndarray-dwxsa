"use strict";var o=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var q=o(function(D,s){
var l=require('@stdlib/ndarray-base-numel-dimension/dist'),u=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),n=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/blas-ext-base-dwxsa/dist').ndarray,x=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function c(a){var r,e,i;return e=a[0],i=a[1],r=x(a[2]),m(l(e,0),r,n(e),u(e,0),v(e),n(i),u(i,0),v(i)),i}s.exports=c
});var f=require("path").join,p=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),j=q(),t,d=p(f(__dirname,"./native.js"));g(d)?t=j:t=d;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21eb9bf8"],{1148:function(n,e,i){"use strict";var t=i("a691"),r=i("577e"),o=i("1d80");n.exports=function(n){var e=r(o(this)),i="",s=t(n);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(i+=e);return i}},"408a":function(n,e,i){var t=i("c6b6");n.exports=function(n){if("number"!=typeof n&&"Number"!=t(n))throw TypeError("Incorrect invocation");return+n}},4128:function(n,e,i){var t;(function(r){"use strict";var o,s,u,c=9e15,f=1e9,a="0123456789abcdef",l="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",h="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",d={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-c,maxE:c,crypto:!1},p=!0,g="[DecimalError] ",w=g+"Invalid argument: ",m=g+"Precision limit exceeded",v=g+"crypto unavailable",N="[object Decimal]",b=Math.floor,y=Math.pow,x=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,E=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,M=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,q=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,O=1e7,S=7,F=9007199254740991,A=l.length-1,Z=h.length-1,D={toStringTag:N};function R(n){var e,i,t,r=n.length-1,o="",s=n[0];if(r>0){for(o+=s,e=1;e<r;e++)t=n[e]+"",i=S-t.length,i&&(o+=V(i)),o+=t;s=n[e],t=s+"",i=S-t.length,i&&(o+=V(i))}else if(0===s)return"0";for(;s%10===0;)s/=10;return o+s}function k(n,e,i){if(n!==~~n||n<e||n>i)throw Error(w+n)}function P(n,e,i,t){var r,o,s,u;for(o=n[0];o>=10;o/=10)--e;return--e<0?(e+=S,r=0):(r=Math.ceil((e+1)/S),e%=S),o=y(10,S-e),u=n[r]%o|0,null==t?e<3?(0==e?u=u/100|0:1==e&&(u=u/10|0),s=i<4&&99999==u||i>3&&49999==u||5e4==u||0==u):s=(i<4&&u+1==o||i>3&&u+1==o/2)&&(n[r+1]/o/100|0)==y(10,e-2)-1||(u==o/2||0==u)&&0==(n[r+1]/o/100|0):e<4?(0==e?u=u/1e3|0:1==e?u=u/100|0:2==e&&(u=u/10|0),s=(t||i<4)&&9999==u||!t&&i>3&&4999==u):s=((t||i<4)&&u+1==o||!t&&i>3&&u+1==o/2)&&(n[r+1]/o/1e3|0)==y(10,e-3)-1,s}function T(n,e,i){for(var t,r,o=[0],s=0,u=n.length;s<u;){for(r=o.length;r--;)o[r]*=e;for(o[0]+=a.indexOf(n.charAt(s++)),t=0;t<o.length;t++)o[t]>i-1&&(void 0===o[t+1]&&(o[t+1]=0),o[t+1]+=o[t]/i|0,o[t]%=i)}return o.reverse()}function _(n,e){var i,t,r;if(e.isZero())return e;t=e.d.length,t<32?(i=Math.ceil(t/3),r=(1/en(4,i)).toString()):(i=16,r="2.3283064365386962890625e-10"),n.precision+=i,e=nn(n,1,e.times(r),new n(1));for(var o=i;o--;){var s=e.times(e);e=s.times(s).minus(s).times(8).plus(1)}return n.precision-=i,e}D.absoluteValue=D.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),U(n)},D.ceil=function(){return U(new this.constructor(this),this.e+1,2)},D.clampedTo=D.clamp=function(n,e){var i,t=this,r=t.constructor;if(n=new r(n),e=new r(e),!n.s||!e.s)return new r(NaN);if(n.gt(e))throw Error(w+e);return i=t.cmp(n),i<0?n:t.cmp(e)>0?e:new r(t)},D.comparedTo=D.cmp=function(n){var e,i,t,r,o=this,s=o.d,u=(n=new o.constructor(n)).d,c=o.s,f=n.s;if(!s||!u)return c&&f?c!==f?c:s===u?0:!s^c<0?1:-1:NaN;if(!s[0]||!u[0])return s[0]?c:u[0]?-f:0;if(c!==f)return c;if(o.e!==n.e)return o.e>n.e^c<0?1:-1;for(t=s.length,r=u.length,e=0,i=t<r?t:r;e<i;++e)if(s[e]!==u[e])return s[e]>u[e]^c<0?1:-1;return t===r?0:t>r^c<0?1:-1},D.cosine=D.cos=function(){var n,e,i=this,t=i.constructor;return i.d?i.d[0]?(n=t.precision,e=t.rounding,t.precision=n+Math.max(i.e,i.sd())+S,t.rounding=1,i=_(t,tn(t,i)),t.precision=n,t.rounding=e,U(2==u||3==u?i.neg():i,n,e,!0)):new t(1):new t(NaN)},D.cubeRoot=D.cbrt=function(){var n,e,i,t,r,o,s,u,c,f,a=this,l=a.constructor;if(!a.isFinite()||a.isZero())return new l(a);for(p=!1,o=a.s*y(a.s*a,1/3),o&&Math.abs(o)!=1/0?t=new l(o.toString()):(i=R(a.d),n=a.e,(o=(n-i.length+1)%3)&&(i+=1==o||-2==o?"0":"00"),o=y(i,1/3),n=b((n+1)/3)-(n%3==(n<0?-1:2)),o==1/0?i="5e"+n:(i=o.toExponential(),i=i.slice(0,i.indexOf("e")+1)+n),t=new l(i),t.s=a.s),s=(n=l.precision)+3;;)if(u=t,c=u.times(u).times(u),f=c.plus(a),t=L(f.plus(a).times(u),f.plus(c),s+2,1),R(u.d).slice(0,s)===(i=R(t.d)).slice(0,s)){if(i=i.slice(s-3,s+1),"9999"!=i&&(r||"4999"!=i)){+i&&(+i.slice(1)||"5"!=i.charAt(0))||(U(t,n+1,1),e=!t.times(t).times(t).eq(a));break}if(!r&&(U(u,n+1,0),u.times(u).times(u).eq(a))){t=u;break}s+=4,r=1}return p=!0,U(t,n,l.rounding,e)},D.decimalPlaces=D.dp=function(){var n,e=this.d,i=NaN;if(e){if(n=e.length-1,i=(n-b(this.e/S))*S,n=e[n],n)for(;n%10==0;n/=10)i--;i<0&&(i=0)}return i},D.dividedBy=D.div=function(n){return L(this,new this.constructor(n))},D.dividedToIntegerBy=D.divToInt=function(n){var e=this,i=e.constructor;return U(L(e,new i(n),0,1,1),i.precision,i.rounding)},D.equals=D.eq=function(n){return 0===this.cmp(n)},D.floor=function(){return U(new this.constructor(this),this.e+1,3)},D.greaterThan=D.gt=function(n){return this.cmp(n)>0},D.greaterThanOrEqualTo=D.gte=function(n){var e=this.cmp(n);return 1==e||0===e},D.hyperbolicCosine=D.cosh=function(){var n,e,i,t,r,o=this,s=o.constructor,u=new s(1);if(!o.isFinite())return new s(o.s?1/0:NaN);if(o.isZero())return u;i=s.precision,t=s.rounding,s.precision=i+Math.max(o.e,o.sd())+4,s.rounding=1,r=o.d.length,r<32?(n=Math.ceil(r/3),e=(1/en(4,n)).toString()):(n=16,e="2.3283064365386962890625e-10"),o=nn(s,1,o.times(e),new s(1),!0);for(var c,f=n,a=new s(8);f--;)c=o.times(o),o=u.minus(c.times(a.minus(c.times(a))));return U(o,s.precision=i,s.rounding=t,!0)},D.hyperbolicSine=D.sinh=function(){var n,e,i,t,r=this,o=r.constructor;if(!r.isFinite()||r.isZero())return new o(r);if(e=o.precision,i=o.rounding,o.precision=e+Math.max(r.e,r.sd())+4,o.rounding=1,t=r.d.length,t<3)r=nn(o,2,r,r,!0);else{n=1.4*Math.sqrt(t),n=n>16?16:0|n,r=r.times(1/en(5,n)),r=nn(o,2,r,r,!0);for(var s,u=new o(5),c=new o(16),f=new o(20);n--;)s=r.times(r),r=r.times(u.plus(s.times(c.times(s).plus(f))))}return o.precision=e,o.rounding=i,U(r,e,i,!0)},D.hyperbolicTangent=D.tanh=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+7,t.rounding=1,L(i.sinh(),i.cosh(),t.precision=n,t.rounding=e)):new t(i.s)},D.inverseCosine=D.acos=function(){var n,e=this,i=e.constructor,t=e.abs().cmp(1),r=i.precision,o=i.rounding;return-1!==t?0===t?e.isNeg()?B(i,r,o):new i(0):new i(NaN):e.isZero()?B(i,r+4,o).times(.5):(i.precision=r+6,i.rounding=1,e=e.asin(),n=B(i,r+4,o).times(.5),i.precision=r,i.rounding=o,n.minus(e))},D.inverseHyperbolicCosine=D.acosh=function(){var n,e,i=this,t=i.constructor;return i.lte(1)?new t(i.eq(1)?0:NaN):i.isFinite()?(n=t.precision,e=t.rounding,t.precision=n+Math.max(Math.abs(i.e),i.sd())+4,t.rounding=1,p=!1,i=i.times(i).minus(1).sqrt().plus(i),p=!0,t.precision=n,t.rounding=e,i.ln()):new t(i)},D.inverseHyperbolicSine=D.asinh=function(){var n,e,i=this,t=i.constructor;return!i.isFinite()||i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+2*Math.max(Math.abs(i.e),i.sd())+6,t.rounding=1,p=!1,i=i.times(i).plus(1).sqrt().plus(i),p=!0,t.precision=n,t.rounding=e,i.ln())},D.inverseHyperbolicTangent=D.atanh=function(){var n,e,i,t,r=this,o=r.constructor;return r.isFinite()?r.e>=0?new o(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(n=o.precision,e=o.rounding,t=r.sd(),Math.max(t,n)<2*-r.e-1?U(new o(r),n,e,!0):(o.precision=i=t-r.e,r=L(r.plus(1),new o(1).minus(r),i+n,1),o.precision=n+4,o.rounding=1,r=r.ln(),o.precision=n,o.rounding=e,r.times(.5))):new o(NaN)},D.inverseSine=D.asin=function(){var n,e,i,t,r=this,o=r.constructor;return r.isZero()?new o(r):(e=r.abs().cmp(1),i=o.precision,t=o.rounding,-1!==e?0===e?(n=B(o,i+4,t).times(.5),n.s=r.s,n):new o(NaN):(o.precision=i+6,o.rounding=1,r=r.div(new o(1).minus(r.times(r)).sqrt().plus(1)).atan(),o.precision=i,o.rounding=t,r.times(2)))},D.inverseTangent=D.atan=function(){var n,e,i,t,r,o,s,u,c,f=this,a=f.constructor,l=a.precision,h=a.rounding;if(f.isFinite()){if(f.isZero())return new a(f);if(f.abs().eq(1)&&l+4<=Z)return s=B(a,l+4,h).times(.25),s.s=f.s,s}else{if(!f.s)return new a(NaN);if(l+4<=Z)return s=B(a,l+4,h).times(.5),s.s=f.s,s}for(a.precision=u=l+10,a.rounding=1,i=Math.min(28,u/S+2|0),n=i;n;--n)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(p=!1,e=Math.ceil(u/S),t=1,c=f.times(f),s=new a(f),r=f;-1!==n;)if(r=r.times(c),o=s.minus(r.div(t+=2)),r=r.times(c),s=o.plus(r.div(t+=2)),void 0!==s.d[e])for(n=e;s.d[n]===o.d[n]&&n--;);return i&&(s=s.times(2<<i-1)),p=!0,U(s,a.precision=l,a.rounding=h,!0)},D.isFinite=function(){return!!this.d},D.isInteger=D.isInt=function(){return!!this.d&&b(this.e/S)>this.d.length-2},D.isNaN=function(){return!this.s},D.isNegative=D.isNeg=function(){return this.s<0},D.isPositive=D.isPos=function(){return this.s>0},D.isZero=function(){return!!this.d&&0===this.d[0]},D.lessThan=D.lt=function(n){return this.cmp(n)<0},D.lessThanOrEqualTo=D.lte=function(n){return this.cmp(n)<1},D.logarithm=D.log=function(n){var e,i,t,r,o,s,u,c,f=this,a=f.constructor,l=a.precision,h=a.rounding,d=5;if(null==n)n=new a(10),e=!0;else{if(n=new a(n),i=n.d,n.s<0||!i||!i[0]||n.eq(1))return new a(NaN);e=n.eq(10)}if(i=f.d,f.s<0||!i||!i[0]||f.eq(1))return new a(i&&!i[0]?-1/0:1!=f.s?NaN:i?0:1/0);if(e)if(i.length>1)o=!0;else{for(r=i[0];r%10===0;)r/=10;o=1!==r}if(p=!1,u=l+d,s=G(f,u),t=e?H(a,u+10):G(n,u),c=L(s,t,u,1),P(c.d,r=l,h))do{if(u+=10,s=G(f,u),t=e?H(a,u+10):G(n,u),c=L(s,t,u,1),!o){+R(c.d).slice(r+1,r+15)+1==1e14&&(c=U(c,l+1,0));break}}while(P(c.d,r+=10,h));return p=!0,U(c,l,h)},D.minus=D.sub=function(n){var e,i,t,r,o,s,u,c,f,a,l,h,d=this,g=d.constructor;if(n=new g(n),!d.d||!n.d)return d.s&&n.s?d.d?n.s=-n.s:n=new g(n.d||d.s!==n.s?d:NaN):n=new g(NaN),n;if(d.s!=n.s)return n.s=-n.s,d.plus(n);if(f=d.d,h=n.d,u=g.precision,c=g.rounding,!f[0]||!h[0]){if(h[0])n.s=-n.s;else{if(!f[0])return new g(3===c?-0:0);n=new g(d)}return p?U(n,u,c):n}if(i=b(n.e/S),a=b(d.e/S),f=f.slice(),o=a-i,o){for(l=o<0,l?(e=f,o=-o,s=h.length):(e=h,i=a,s=f.length),t=Math.max(Math.ceil(u/S),s)+2,o>t&&(o=t,e.length=1),e.reverse(),t=o;t--;)e.push(0);e.reverse()}else{for(t=f.length,s=h.length,l=t<s,l&&(s=t),t=0;t<s;t++)if(f[t]!=h[t]){l=f[t]<h[t];break}o=0}for(l&&(e=f,f=h,h=e,n.s=-n.s),s=f.length,t=h.length-s;t>0;--t)f[s++]=0;for(t=h.length;t>o;){if(f[--t]<h[t]){for(r=t;r&&0===f[--r];)f[r]=O-1;--f[r],f[t]+=O}f[t]-=h[t]}for(;0===f[--s];)f.pop();for(;0===f[0];f.shift())--i;return f[0]?(n.d=f,n.e=C(f,i),p?U(n,u,c):n):new g(3===c?-0:0)},D.modulo=D.mod=function(n){var e,i=this,t=i.constructor;return n=new t(n),!i.d||!n.s||n.d&&!n.d[0]?new t(NaN):!n.d||i.d&&!i.d[0]?U(new t(i),t.precision,t.rounding):(p=!1,9==t.modulo?(e=L(i,n.abs(),0,3,1),e.s*=n.s):e=L(i,n,0,t.modulo,1),e=e.times(n),p=!0,i.minus(e))},D.naturalExponential=D.exp=function(){return z(this)},D.naturalLogarithm=D.ln=function(){return G(this)},D.negated=D.neg=function(){var n=new this.constructor(this);return n.s=-n.s,U(n)},D.plus=D.add=function(n){var e,i,t,r,o,s,u,c,f,a,l=this,h=l.constructor;if(n=new h(n),!l.d||!n.d)return l.s&&n.s?l.d||(n=new h(n.d||l.s===n.s?l:NaN)):n=new h(NaN),n;if(l.s!=n.s)return n.s=-n.s,l.minus(n);if(f=l.d,a=n.d,u=h.precision,c=h.rounding,!f[0]||!a[0])return a[0]||(n=new h(l)),p?U(n,u,c):n;if(o=b(l.e/S),t=b(n.e/S),f=f.slice(),r=o-t,r){for(r<0?(i=f,r=-r,s=a.length):(i=a,t=o,s=f.length),o=Math.ceil(u/S),s=o>s?o+1:s+1,r>s&&(r=s,i.length=1),i.reverse();r--;)i.push(0);i.reverse()}for(s=f.length,r=a.length,s-r<0&&(r=s,i=a,a=f,f=i),e=0;r;)e=(f[--r]=f[r]+a[r]+e)/O|0,f[r]%=O;for(e&&(f.unshift(e),++t),s=f.length;0==f[--s];)f.pop();return n.d=f,n.e=C(f,t),p?U(n,u,c):n},D.precision=D.sd=function(n){var e,i=this;if(void 0!==n&&n!==!!n&&1!==n&&0!==n)throw Error(w+n);return i.d?(e=$(i.d),n&&i.e+1>e&&(e=i.e+1)):e=NaN,e},D.round=function(){var n=this,e=n.constructor;return U(new e(n),n.e+1,e.rounding)},D.sine=D.sin=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+Math.max(i.e,i.sd())+S,t.rounding=1,i=Y(t,tn(t,i)),t.precision=n,t.rounding=e,U(u>2?i.neg():i,n,e,!0)):new t(NaN)},D.squareRoot=D.sqrt=function(){var n,e,i,t,r,o,s=this,u=s.d,c=s.e,f=s.s,a=s.constructor;if(1!==f||!u||!u[0])return new a(!f||f<0&&(!u||u[0])?NaN:u?s:1/0);for(p=!1,f=Math.sqrt(+s),0==f||f==1/0?(e=R(u),(e.length+c)%2==0&&(e+="0"),f=Math.sqrt(e),c=b((c+1)/2)-(c<0||c%2),f==1/0?e="5e"+c:(e=f.toExponential(),e=e.slice(0,e.indexOf("e")+1)+c),t=new a(e)):t=new a(f.toString()),i=(c=a.precision)+3;;)if(o=t,t=o.plus(L(s,o,i+2,1)).times(.5),R(o.d).slice(0,i)===(e=R(t.d)).slice(0,i)){if(e=e.slice(i-3,i+1),"9999"!=e&&(r||"4999"!=e)){+e&&(+e.slice(1)||"5"!=e.charAt(0))||(U(t,c+1,1),n=!t.times(t).eq(s));break}if(!r&&(U(o,c+1,0),o.times(o).eq(s))){t=o;break}i+=4,r=1}return p=!0,U(t,c,a.rounding,n)},D.tangent=D.tan=function(){var n,e,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(n=t.precision,e=t.rounding,t.precision=n+10,t.rounding=1,i=i.sin(),i.s=1,i=L(i,new t(1).minus(i.times(i)).sqrt(),n+10,0),t.precision=n,t.rounding=e,U(2==u||4==u?i.neg():i,n,e,!0)):new t(NaN)},D.times=D.mul=function(n){var e,i,t,r,o,s,u,c,f,a=this,l=a.constructor,h=a.d,d=(n=new l(n)).d;if(n.s*=a.s,!h||!h[0]||!d||!d[0])return new l(!n.s||h&&!h[0]&&!d||d&&!d[0]&&!h?NaN:h&&d?0*n.s:n.s/0);for(i=b(a.e/S)+b(n.e/S),c=h.length,f=d.length,c<f&&(o=h,h=d,d=o,s=c,c=f,f=s),o=[],s=c+f,t=s;t--;)o.push(0);for(t=f;--t>=0;){for(e=0,r=c+t;r>t;)u=o[r]+d[t]*h[r-t-1]+e,o[r--]=u%O|0,e=u/O|0;o[r]=(o[r]+e)%O|0}for(;!o[--s];)o.pop();return e?++i:o.shift(),n.d=o,n.e=C(o,i),p?U(n,l.precision,l.rounding):n},D.toBinary=function(n,e){return rn(this,2,n,e)},D.toDecimalPlaces=D.toDP=function(n,e){var i=this,t=i.constructor;return i=new t(i),void 0===n?i:(k(n,0,f),void 0===e?e=t.rounding:k(e,0,8),U(i,n+i.e+1,e))},D.toExponential=function(n,e){var i,t=this,r=t.constructor;return void 0===n?i=I(t,!0):(k(n,0,f),void 0===e?e=r.rounding:k(e,0,8),t=U(new r(t),n+1,e),i=I(t,!0,n+1)),t.isNeg()&&!t.isZero()?"-"+i:i},D.toFixed=function(n,e){var i,t,r=this,o=r.constructor;return void 0===n?i=I(r):(k(n,0,f),void 0===e?e=o.rounding:k(e,0,8),t=U(new o(r),n+r.e+1,e),i=I(t,!1,n+t.e+1)),r.isNeg()&&!r.isZero()?"-"+i:i},D.toFraction=function(n){var e,i,t,r,o,s,u,c,f,a,l,h,d=this,g=d.d,m=d.constructor;if(!g)return new m(d);if(f=i=new m(1),t=c=new m(0),e=new m(t),o=e.e=$(g)-d.e-1,s=o%S,e.d[0]=y(10,s<0?S+s:s),null==n)n=o>0?e:f;else{if(u=new m(n),!u.isInt()||u.lt(f))throw Error(w+u);n=u.gt(e)?o>0?e:f:u}for(p=!1,u=new m(R(g)),a=m.precision,m.precision=o=g.length*S*2;;){if(l=L(u,e,0,1,1),r=i.plus(l.times(t)),1==r.cmp(n))break;i=t,t=r,r=f,f=c.plus(l.times(r)),c=r,r=e,e=u.minus(l.times(r)),u=r}return r=L(n.minus(i),t,0,1,1),c=c.plus(r.times(f)),i=i.plus(r.times(t)),c.s=f.s=d.s,h=L(f,t,o,1).minus(d).abs().cmp(L(c,i,o,1).minus(d).abs())<1?[f,t]:[c,i],m.precision=a,p=!0,h},D.toHexadecimal=D.toHex=function(n,e){return rn(this,16,n,e)},D.toNearest=function(n,e){var i=this,t=i.constructor;if(i=new t(i),null==n){if(!i.d)return i;n=new t(1),e=t.rounding}else{if(n=new t(n),void 0===e?e=t.rounding:k(e,0,8),!i.d)return n.s?i:n;if(!n.d)return n.s&&(n.s=i.s),n}return n.d[0]?(p=!1,i=L(i,n,0,e,1).times(n),p=!0,U(i)):(n.s=i.s,i=n),i},D.toNumber=function(){return+this},D.toOctal=function(n,e){return rn(this,8,n,e)},D.toPower=D.pow=function(n){var e,i,t,r,o,s,u=this,c=u.constructor,f=+(n=new c(n));if(!u.d||!n.d||!u.d[0]||!n.d[0])return new c(y(+u,f));if(u=new c(u),u.eq(1))return u;if(t=c.precision,o=c.rounding,n.eq(1))return U(u,t,o);if(e=b(n.e/S),e>=n.d.length-1&&(i=f<0?-f:f)<=F)return r=j(c,u,i,t),n.s<0?new c(1).div(r):U(r,t,o);if(s=u.s,s<0){if(e<n.d.length-1)return new c(NaN);if(0==(1&n.d[e])&&(s=1),0==u.e&&1==u.d[0]&&1==u.d.length)return u.s=s,u}return i=y(+u,f),e=0!=i&&isFinite(i)?new c(i+"").e:b(f*(Math.log("0."+R(u.d))/Math.LN10+u.e+1)),e>c.maxE+1||e<c.minE-1?new c(e>0?s/0:0):(p=!1,c.rounding=u.s=1,i=Math.min(12,(e+"").length),r=z(n.times(G(u,t+i)),t),r.d&&(r=U(r,t+5,1),P(r.d,t,o)&&(e=t+10,r=U(z(n.times(G(u,e+i)),e),e+5,1),+R(r.d).slice(t+1,t+15)+1==1e14&&(r=U(r,t+1,0)))),r.s=s,p=!0,c.rounding=o,U(r,t,o))},D.toPrecision=function(n,e){var i,t=this,r=t.constructor;return void 0===n?i=I(t,t.e<=r.toExpNeg||t.e>=r.toExpPos):(k(n,1,f),void 0===e?e=r.rounding:k(e,0,8),t=U(new r(t),n,e),i=I(t,n<=t.e||t.e<=r.toExpNeg,n)),t.isNeg()&&!t.isZero()?"-"+i:i},D.toSignificantDigits=D.toSD=function(n,e){var i=this,t=i.constructor;return void 0===n?(n=t.precision,e=t.rounding):(k(n,1,f),void 0===e?e=t.rounding:k(e,0,8)),U(new t(i),n,e)},D.toString=function(){var n=this,e=n.constructor,i=I(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+i:i},D.truncated=D.trunc=function(){return U(new this.constructor(this),this.e+1,1)},D.valueOf=D.toJSON=function(){var n=this,e=n.constructor,i=I(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+i:i};var L=function(){function n(n,e,i){var t,r=0,o=n.length;for(n=n.slice();o--;)t=n[o]*e+r,n[o]=t%i|0,r=t/i|0;return r&&n.unshift(r),n}function e(n,e,i,t){var r,o;if(i!=t)o=i>t?1:-1;else for(r=o=0;r<i;r++)if(n[r]!=e[r]){o=n[r]>e[r]?1:-1;break}return o}function i(n,e,i,t){for(var r=0;i--;)n[i]-=r,r=n[i]<e[i]?1:0,n[i]=r*t+n[i]-e[i];for(;!n[0]&&n.length>1;)n.shift()}return function(t,r,o,u,c,f){var a,l,h,d,p,g,w,m,v,N,y,x,E,M,q,F,A,Z,D,R,k=t.constructor,P=t.s==r.s?1:-1,T=t.d,_=r.d;if(!T||!T[0]||!_||!_[0])return new k(t.s&&r.s&&(T?!_||T[0]!=_[0]:_)?T&&0==T[0]||!_?0*P:P/0:NaN);for(f?(p=1,l=t.e-r.e):(f=O,p=S,l=b(t.e/p)-b(r.e/p)),D=_.length,A=T.length,v=new k(P),N=v.d=[],h=0;_[h]==(T[h]||0);h++);if(_[h]>(T[h]||0)&&l--,null==o?(M=o=k.precision,u=k.rounding):M=c?o+(t.e-r.e)+1:o,M<0)N.push(1),g=!0;else{if(M=M/p+2|0,h=0,1==D){for(d=0,_=_[0],M++;(h<A||d)&&M--;h++)q=d*f+(T[h]||0),N[h]=q/_|0,d=q%_|0;g=d||h<A}else{for(d=f/(_[0]+1)|0,d>1&&(_=n(_,d,f),T=n(T,d,f),D=_.length,A=T.length),F=D,y=T.slice(0,D),x=y.length;x<D;)y[x++]=0;R=_.slice(),R.unshift(0),Z=_[0],_[1]>=f/2&&++Z;do{d=0,a=e(_,y,D,x),a<0?(E=y[0],D!=x&&(E=E*f+(y[1]||0)),d=E/Z|0,d>1?(d>=f&&(d=f-1),w=n(_,d,f),m=w.length,x=y.length,a=e(w,y,m,x),1==a&&(d--,i(w,D<m?R:_,m,f))):(0==d&&(a=d=1),w=_.slice()),m=w.length,m<x&&w.unshift(0),i(y,w,x,f),-1==a&&(x=y.length,a=e(_,y,D,x),a<1&&(d++,i(y,D<x?R:_,x,f))),x=y.length):0===a&&(d++,y=[0]),N[h++]=d,a&&y[0]?y[x++]=T[F]||0:(y=[T[F]],x=1)}while((F++<A||void 0!==y[0])&&M--);g=void 0!==y[0]}N[0]||N.shift()}if(1==p)v.e=l,s=g;else{for(h=1,d=N[0];d>=10;d/=10)h++;v.e=h+l*p-1,U(v,c?o+v.e+1:o,u,g)}return v}}();function U(n,e,i,t){var r,o,s,u,c,f,a,l,h,d=n.constructor;n:if(null!=e){if(l=n.d,!l)return n;for(r=1,u=l[0];u>=10;u/=10)r++;if(o=e-r,o<0)o+=S,s=e,a=l[h=0],c=a/y(10,r-s-1)%10|0;else if(h=Math.ceil((o+1)/S),u=l.length,h>=u){if(!t)break n;for(;u++<=h;)l.push(0);a=c=0,r=1,o%=S,s=o-S+1}else{for(a=u=l[h],r=1;u>=10;u/=10)r++;o%=S,s=o-S+r,c=s<0?0:a/y(10,r-s-1)%10|0}if(t=t||e<0||void 0!==l[h+1]||(s<0?a:a%y(10,r-s-1)),f=i<4?(c||t)&&(0==i||i==(n.s<0?3:2)):c>5||5==c&&(4==i||t||6==i&&(o>0?s>0?a/y(10,r-s):0:l[h-1])%10&1||i==(n.s<0?8:7)),e<1||!l[0])return l.length=0,f?(e-=n.e+1,l[0]=y(10,(S-e%S)%S),n.e=-e||0):l[0]=n.e=0,n;if(0==o?(l.length=h,u=1,h--):(l.length=h+1,u=y(10,S-o),l[h]=s>0?(a/y(10,r-s)%y(10,s)|0)*u:0),f)for(;;){if(0==h){for(o=1,s=l[0];s>=10;s/=10)o++;for(s=l[0]+=u,u=1;s>=10;s/=10)u++;o!=u&&(n.e++,l[0]==O&&(l[0]=1));break}if(l[h]+=u,l[h]!=O)break;l[h--]=0,u=1}for(o=l.length;0===l[--o];)l.pop()}return p&&(n.e>d.maxE?(n.d=null,n.e=NaN):n.e<d.minE&&(n.e=0,n.d=[0])),n}function I(n,e,i){if(!n.isFinite())return K(n);var t,r=n.e,o=R(n.d),s=o.length;return e?(i&&(t=i-s)>0?o=o.charAt(0)+"."+o.slice(1)+V(t):s>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(n.e<0?"e":"e+")+n.e):r<0?(o="0."+V(-r-1)+o,i&&(t=i-s)>0&&(o+=V(t))):r>=s?(o+=V(r+1-s),i&&(t=i-r-1)>0&&(o=o+"."+V(t))):((t=r+1)<s&&(o=o.slice(0,t)+"."+o.slice(t)),i&&(t=i-s)>0&&(r+1===s&&(o+="."),o+=V(t))),o}function C(n,e){var i=n[0];for(e*=S;i>=10;i/=10)e++;return e}function H(n,e,i){if(e>A)throw p=!0,i&&(n.precision=i),Error(m);return U(new n(l),e,1,!0)}function B(n,e,i){if(e>Z)throw Error(m);return U(new n(h),e,i,!0)}function $(n){var e=n.length-1,i=e*S+1;if(e=n[e],e){for(;e%10==0;e/=10)i--;for(e=n[0];e>=10;e/=10)i++}return i}function V(n){for(var e="";n--;)e+="0";return e}function j(n,e,i,t){var r,o=new n(1),s=Math.ceil(t/S+4);for(p=!1;;){if(i%2&&(o=o.times(e),on(o.d,s)&&(r=!0)),i=b(i/2),0===i){i=o.d.length-1,r&&0===o.d[i]&&++o.d[i];break}e=e.times(e),on(e.d,s)}return p=!0,o}function J(n){return 1&n.d[n.d.length-1]}function W(n,e,i){for(var t,r=new n(e[0]),o=0;++o<e.length;){if(t=new n(e[o]),!t.s){r=t;break}r[i](t)&&(r=t)}return r}function z(n,e){var i,t,r,o,s,u,c,f=0,a=0,l=0,h=n.constructor,d=h.rounding,g=h.precision;if(!n.d||!n.d[0]||n.e>17)return new h(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);null==e?(p=!1,c=g):c=e,u=new h(.03125);while(n.e>-2)n=n.times(u),l+=5;for(t=Math.log(y(2,l))/Math.LN10*2+5|0,c+=t,i=o=s=new h(1),h.precision=c;;){if(o=U(o.times(n),c,1),i=i.times(++a),u=s.plus(L(o,i,c,1)),R(u.d).slice(0,c)===R(s.d).slice(0,c)){r=l;while(r--)s=U(s.times(s),c,1);if(null!=e)return h.precision=g,s;if(!(f<3&&P(s.d,c-t,d,f)))return U(s,h.precision=g,d,p=!0);h.precision=c+=10,i=o=u=new h(1),a=0,f++}s=u}}function G(n,e){var i,t,r,o,s,u,c,f,a,l,h,d=1,g=10,w=n,m=w.d,v=w.constructor,N=v.rounding,b=v.precision;if(w.s<0||!m||!m[0]||!w.e&&1==m[0]&&1==m.length)return new v(m&&!m[0]?-1/0:1!=w.s?NaN:m?0:w);if(null==e?(p=!1,a=b):a=e,v.precision=a+=g,i=R(m),t=i.charAt(0),!(Math.abs(o=w.e)<15e14))return f=H(v,a+2,b).times(o+""),w=G(new v(t+"."+i.slice(1)),a-g).plus(f),v.precision=b,null==e?U(w,b,N,p=!0):w;while(t<7&&1!=t||1==t&&i.charAt(1)>3)w=w.times(n),i=R(w.d),t=i.charAt(0),d++;for(o=w.e,t>1?(w=new v("0."+i),o++):w=new v(t+"."+i.slice(1)),l=w,c=s=w=L(w.minus(1),w.plus(1),a,1),h=U(w.times(w),a,1),r=3;;){if(s=U(s.times(h),a,1),f=c.plus(L(s,new v(r),a,1)),R(f.d).slice(0,a)===R(c.d).slice(0,a)){if(c=c.times(2),0!==o&&(c=c.plus(H(v,a+2,b).times(o+""))),c=L(c,new v(d),a,1),null!=e)return v.precision=b,c;if(!P(c.d,a-g,N,u))return U(c,v.precision=b,N,p=!0);v.precision=a+=g,f=s=w=L(l.minus(1),l.plus(1),a,1),h=U(w.times(w),a,1),r=u=1}c=f,r+=2}}function K(n){return String(n.s*n.s/0)}function Q(n,e){var i,t,r;for((i=e.indexOf("."))>-1&&(e=e.replace(".","")),(t=e.search(/e/i))>0?(i<0&&(i=t),i+=+e.slice(t+1),e=e.substring(0,t)):i<0&&(i=e.length),t=0;48===e.charCodeAt(t);t++);for(r=e.length;48===e.charCodeAt(r-1);--r);if(e=e.slice(t,r),e){if(r-=t,n.e=i=i-t-1,n.d=[],t=(i+1)%S,i<0&&(t+=S),t<r){for(t&&n.d.push(+e.slice(0,t)),r-=S;t<r;)n.d.push(+e.slice(t,t+=S));e=e.slice(t),t=S-e.length}else t-=r;for(;t--;)e+="0";n.d.push(+e),p&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function X(n,e){var i,t,r,s,u,c,f,a,l;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),q.test(e))return Q(n,e)}else if("Infinity"===e||"NaN"===e)return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(E.test(e))i=16,e=e.toLowerCase();else if(x.test(e))i=2;else{if(!M.test(e))throw Error(w+e);i=8}for(s=e.search(/p/i),s>0?(f=+e.slice(s+1),e=e.substring(2,s)):e=e.slice(2),s=e.indexOf("."),u=s>=0,t=n.constructor,u&&(e=e.replace(".",""),c=e.length,s=c-s,r=j(t,new t(i),s,2*s)),a=T(e,i,O),l=a.length-1,s=l;0===a[s];--s)a.pop();return s<0?new t(0*n.s):(n.e=C(a,l),n.d=a,p=!1,u&&(n=L(n,r,4*c)),f&&(n=n.times(Math.abs(f)<54?y(2,f):o.pow(2,f))),p=!0,n)}function Y(n,e){var i,t=e.d.length;if(t<3)return e.isZero()?e:nn(n,2,e,e);i=1.4*Math.sqrt(t),i=i>16?16:0|i,e=e.times(1/en(5,i)),e=nn(n,2,e,e);for(var r,o=new n(5),s=new n(16),u=new n(20);i--;)r=e.times(e),e=e.times(o.plus(r.times(s.times(r).minus(u))));return e}function nn(n,e,i,t,r){var o,s,u,c,f=n.precision,a=Math.ceil(f/S);for(p=!1,c=i.times(i),u=new n(t);;){if(s=L(u.times(c),new n(e++*e++),f,1),u=r?t.plus(s):t.minus(s),t=L(s.times(c),new n(e++*e++),f,1),s=u.plus(t),void 0!==s.d[a]){for(o=a;s.d[o]===u.d[o]&&o--;);if(-1==o)break}o=u,u=t,t=s,s=o}return p=!0,s.d.length=a+1,s}function en(n,e){var i=n;while(--e)i*=n;return i}function tn(n,e){var i,t=e.s<0,r=B(n,n.precision,1),o=r.times(.5);if(e=e.abs(),e.lte(o))return u=t?4:1,e;if(i=e.divToInt(r),i.isZero())u=t?3:2;else{if(e=e.minus(i.times(r)),e.lte(o))return u=J(i)?t?2:3:t?4:1,e;u=J(i)?t?1:4:t?3:2}return e.minus(r).abs()}function rn(n,e,i,t){var r,o,u,c,l,h,d,p,g,w=n.constructor,m=void 0!==i;if(m?(k(i,1,f),void 0===t?t=w.rounding:k(t,0,8)):(i=w.precision,t=w.rounding),n.isFinite()){for(d=I(n),u=d.indexOf("."),m?(r=2,16==e?i=4*i-3:8==e&&(i=3*i-2)):r=e,u>=0&&(d=d.replace(".",""),g=new w(1),g.e=d.length-u,g.d=T(I(g),10,r),g.e=g.d.length),p=T(d,10,r),o=l=p.length;0==p[--l];)p.pop();if(p[0]){if(u<0?o--:(n=new w(n),n.d=p,n.e=o,n=L(n,g,i,t,0,r),p=n.d,o=n.e,h=s),u=p[i],c=r/2,h=h||void 0!==p[i+1],h=t<4?(void 0!==u||h)&&(0===t||t===(n.s<0?3:2)):u>c||u===c&&(4===t||h||6===t&&1&p[i-1]||t===(n.s<0?8:7)),p.length=i,h)for(;++p[--i]>r-1;)p[i]=0,i||(++o,p.unshift(1));for(l=p.length;!p[l-1];--l);for(u=0,d="";u<l;u++)d+=a.charAt(p[u]);if(m){if(l>1)if(16==e||8==e){for(u=16==e?4:3,--l;l%u;l++)d+="0";for(p=T(d,r,e),l=p.length;!p[l-1];--l);for(u=1,d="1.";u<l;u++)d+=a.charAt(p[u])}else d=d.charAt(0)+"."+d.slice(1);d=d+(o<0?"p":"p+")+o}else if(o<0){for(;++o;)d="0"+d;d="0."+d}else if(++o>l)for(o-=l;o--;)d+="0";else o<l&&(d=d.slice(0,o)+"."+d.slice(o))}else d=m?"0p+0":"0";d=(16==e?"0x":2==e?"0b":8==e?"0o":"")+d}else d=K(n);return n.s<0?"-"+d:d}function on(n,e){if(n.length>e)return n.length=e,!0}function sn(n){return new this(n).abs()}function un(n){return new this(n).acos()}function cn(n){return new this(n).acosh()}function fn(n,e){return new this(n).plus(e)}function an(n){return new this(n).asin()}function ln(n){return new this(n).asinh()}function hn(n){return new this(n).atan()}function dn(n){return new this(n).atanh()}function pn(n,e){n=new this(n),e=new this(e);var i,t=this.precision,r=this.rounding,o=t+4;return n.s&&e.s?n.d||e.d?!e.d||n.isZero()?(i=e.s<0?B(this,t,r):new this(0),i.s=n.s):!n.d||e.isZero()?(i=B(this,o,1).times(.5),i.s=n.s):e.s<0?(this.precision=o,this.rounding=1,i=this.atan(L(n,e,o,1)),e=B(this,o,1),this.precision=t,this.rounding=r,i=n.s<0?i.minus(e):i.plus(e)):i=this.atan(L(n,e,o,1)):(i=B(this,o,1).times(e.s>0?.25:.75),i.s=n.s):i=new this(NaN),i}function gn(n){return new this(n).cbrt()}function wn(n){return U(n=new this(n),n.e+1,2)}function mn(n,e,i){return new this(n).clamp(e,i)}function vn(n){if(!n||"object"!==typeof n)throw Error(g+"Object expected");var e,i,t,r=!0===n.defaults,o=["precision",1,f,"rounding",0,8,"toExpNeg",-c,0,"toExpPos",0,c,"maxE",0,c,"minE",-c,0,"modulo",0,9];for(e=0;e<o.length;e+=3)if(i=o[e],r&&(this[i]=d[i]),void 0!==(t=n[i])){if(!(b(t)===t&&t>=o[e+1]&&t<=o[e+2]))throw Error(w+i+": "+t);this[i]=t}if(i="crypto",r&&(this[i]=d[i]),void 0!==(t=n[i])){if(!0!==t&&!1!==t&&0!==t&&1!==t)throw Error(w+i+": "+t);if(t){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error(v);this[i]=!0}else this[i]=!1}return this}function Nn(n){return new this(n).cos()}function bn(n){return new this(n).cosh()}function yn(n){var e,i,t;function r(n){var e,i,t,o=this;if(!(o instanceof r))return new r(n);if(o.constructor=r,On(n))return o.s=n.s,void(p?!n.d||n.e>r.maxE?(o.e=NaN,o.d=null):n.e<r.minE?(o.e=0,o.d=[0]):(o.e=n.e,o.d=n.d.slice()):(o.e=n.e,o.d=n.d?n.d.slice():n.d));if(t=typeof n,"number"===t){if(0===n)return o.s=1/n<0?-1:1,o.e=0,void(o.d=[0]);if(n<0?(n=-n,o.s=-1):o.s=1,n===~~n&&n<1e7){for(e=0,i=n;i>=10;i/=10)e++;return void(p?e>r.maxE?(o.e=NaN,o.d=null):e<r.minE?(o.e=0,o.d=[0]):(o.e=e,o.d=[n]):(o.e=e,o.d=[n]))}return 0*n!==0?(n||(o.s=NaN),o.e=NaN,void(o.d=null)):Q(o,n.toString())}if("string"!==t)throw Error(w+n);return 45===(i=n.charCodeAt(0))?(n=n.slice(1),o.s=-1):(43===i&&(n=n.slice(1)),o.s=1),q.test(n)?Q(o,n):X(o,n)}if(r.prototype=D,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.EUCLID=9,r.config=r.set=vn,r.clone=yn,r.isDecimal=On,r.abs=sn,r.acos=un,r.acosh=cn,r.add=fn,r.asin=an,r.asinh=ln,r.atan=hn,r.atanh=dn,r.atan2=pn,r.cbrt=gn,r.ceil=wn,r.clamp=mn,r.cos=Nn,r.cosh=bn,r.div=xn,r.exp=En,r.floor=Mn,r.hypot=qn,r.ln=Sn,r.log=Fn,r.log10=Zn,r.log2=An,r.max=Dn,r.min=Rn,r.mod=kn,r.mul=Pn,r.pow=Tn,r.random=_n,r.round=Ln,r.sign=Un,r.sin=In,r.sinh=Cn,r.sqrt=Hn,r.sub=Bn,r.sum=$n,r.tan=Vn,r.tanh=jn,r.trunc=Jn,void 0===n&&(n={}),n&&!0!==n.defaults)for(t=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<t.length;)n.hasOwnProperty(i=t[e++])||(n[i]=this[i]);return r.config(n),r}function xn(n,e){return new this(n).div(e)}function En(n){return new this(n).exp()}function Mn(n){return U(n=new this(n),n.e+1,3)}function qn(){var n,e,i=new this(0);for(p=!1,n=0;n<arguments.length;)if(e=new this(arguments[n++]),e.d)i.d&&(i=i.plus(e.times(e)));else{if(e.s)return p=!0,new this(1/0);i=e}return p=!0,i.sqrt()}function On(n){return n instanceof o||n&&n.toStringTag===N||!1}function Sn(n){return new this(n).ln()}function Fn(n,e){return new this(n).log(e)}function An(n){return new this(n).log(2)}function Zn(n){return new this(n).log(10)}function Dn(){return W(this,arguments,"lt")}function Rn(){return W(this,arguments,"gt")}function kn(n,e){return new this(n).mod(e)}function Pn(n,e){return new this(n).mul(e)}function Tn(n,e){return new this(n).pow(e)}function _n(n){var e,i,t,r,o=0,s=new this(1),u=[];if(void 0===n?n=this.precision:k(n,1,f),t=Math.ceil(n/S),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(t));o<t;)r=e[o],r>=429e7?e[o]=crypto.getRandomValues(new Uint32Array(1))[0]:u[o++]=r%1e7;else{if(!crypto.randomBytes)throw Error(v);for(e=crypto.randomBytes(t*=4);o<t;)r=e[o]+(e[o+1]<<8)+(e[o+2]<<16)+((127&e[o+3])<<24),r>=214e7?crypto.randomBytes(4).copy(e,o):(u.push(r%1e7),o+=4);o=t/4}else for(;o<t;)u[o++]=1e7*Math.random()|0;for(t=u[--o],n%=S,t&&n&&(r=y(10,S-n),u[o]=(t/r|0)*r);0===u[o];o--)u.pop();if(o<0)i=0,u=[0];else{for(i=-1;0===u[0];i-=S)u.shift();for(t=1,r=u[0];r>=10;r/=10)t++;t<S&&(i-=S-t)}return s.e=i,s.d=u,s}function Ln(n){return U(n=new this(n),n.e+1,this.rounding)}function Un(n){return n=new this(n),n.d?n.d[0]?n.s:0*n.s:n.s||NaN}function In(n){return new this(n).sin()}function Cn(n){return new this(n).sinh()}function Hn(n){return new this(n).sqrt()}function Bn(n,e){return new this(n).sub(e)}function $n(){var n=0,e=arguments,i=new this(e[n]);for(p=!1;i.s&&++n<e.length;)i=i.plus(e[n]);return p=!0,U(i,this.precision,this.rounding)}function Vn(n){return new this(n).tan()}function jn(n){return new this(n).tanh()}function Jn(n){return U(n=new this(n),n.e+1,1)}o=yn(d),o.prototype.constructor=o,o["default"]=o.Decimal=o,l=new o(l),h=new o(h),t=function(){return o}.call(e,i,e,n),void 0===t||(n.exports=t)})()},"4c53":function(n,e,i){"use strict";var t=i("23e7"),r=i("857a"),o=i("af03");t({target:"String",proto:!0,forced:o("sub")},{sub:function(){return r(this,"sub","","")}})},"53ca":function(n,e,i){"use strict";i.d(e,"a",(function(){return t}));i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0");function t(n){return t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(n)}},"857a":function(n,e,i){var t=i("1d80"),r=i("577e"),o=/"/g;n.exports=function(n,e,i,s){var u=r(t(n)),c="<"+e;return""!==i&&(c+=" "+i+'="'+r(s).replace(o,"&quot;")+'"'),c+">"+u+"</"+e+">"}},af03:function(n,e,i){var t=i("d039");n.exports=function(n){return t((function(){var e=""[n]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b680:function(n,e,i){"use strict";var t=i("23e7"),r=i("a691"),o=i("408a"),s=i("1148"),u=i("d039"),c=1..toFixed,f=Math.floor,a=function(n,e,i){return 0===e?i:e%2===1?a(n,e-1,i*n):a(n*n,e/2,i)},l=function(n){var e=0,i=n;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},h=function(n,e,i){var t=-1,r=i;while(++t<6)r+=e*n[t],n[t]=r%1e7,r=f(r/1e7)},d=function(n,e){var i=6,t=0;while(--i>=0)t+=n[i],n[i]=f(t/e),t=t%e*1e7},p=function(n){var e=6,i="";while(--e>=0)if(""!==i||0===e||0!==n[e]){var t=String(n[e]);i=""===i?t:i+s.call("0",7-t.length)+t}return i},g=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){c.call({})}));t({target:"Number",proto:!0,forced:g},{toFixed:function(n){var e,i,t,u,c=o(this),f=r(n),g=[0,0,0,0,0,0],w="",m="0";if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(w="-",c=-c),c>1e-21)if(e=l(c*a(2,69,1))-69,i=e<0?c*a(2,-e,1):c/a(2,e,1),i*=4503599627370496,e=52-e,e>0){h(g,0,i),t=f;while(t>=7)h(g,1e7,0),t-=7;h(g,a(10,t,1),0),t=e-1;while(t>=23)d(g,1<<23),t-=23;d(g,1<<t),h(g,1,1),d(g,2),m=p(g)}else h(g,0,i),h(g,1<<-e,0),m=p(g)+s.call("0",f);return f>0?(u=m.length,m=w+(u<=f?"0."+s.call("0",f-u)+m:m.slice(0,u-f)+"."+m.slice(u-f))):m=w+m,m}})},bee2:function(n,e,i){"use strict";function t(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function r(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}i.d(e,"a",(function(){return r}))},d28b:function(n,e,i){var t=i("746f");t("iterator")},d4ec:function(n,e,i){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}i.d(e,"a",(function(){return t}))},e01a:function(n,e,i){"use strict";var t=i("23e7"),r=i("83ab"),o=i("da84"),s=i("5135"),u=i("861d"),c=i("9bf2").f,f=i("e893"),a=o.Symbol;if(r&&"function"==typeof a&&(!("description"in a.prototype)||void 0!==a().description)){var l={},h=function(){var n=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new a(n):void 0===n?a():a(n);return""===n&&(l[e]=!0),e};f(h,a);var d=h.prototype=a.prototype;d.constructor=h;var p=d.toString,g="Symbol(test)"==String(a("test")),w=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var n=u(this)?this.valueOf():this,e=p.call(n);if(s(l,n))return"";var i=g?e.slice(7,-1):e.replace(w,"$1");return""===i?void 0:i}}),t({global:!0,forced:!0},{Symbol:h})}}}]);
//# sourceMappingURL=chunk-21eb9bf8.cb83d55a.js.map
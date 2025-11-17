import{r as et,j as Wl}from"./index-D3rC_cd8.js";/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pc="128",Dn={ROTATE:0,DOLLY:1,PAN:2},Nn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ql=0,Hr=1,jl=2,Ic=1,Xl=2,Ni=3,Ws=0,st=1,qs=2,Dc=1,Fi=0,Bi=1,Vr=2,Wr=3,qr=4,Yl=5,ti=100,Zl=101,Jl=102,jr=103,Xr=104,$l=200,Ql=201,Kl=202,ed=203,Nc=204,zc=205,td=206,nd=207,id=208,sd=209,ad=210,rd=0,od=1,cd=2,Ya=3,ld=4,dd=5,ud=6,hd=7,js=0,pd=1,fd=2,Oi=0,md=1,gd=2,vd=3,xd=4,yd=5,Fc=300,or=301,cr=302,Yr=303,Zr=304,lr=306,dr=307,Za=1e3,Nt=1001,Ja=1002,mt=1003,Jr=1004,$r=1005,At=1006,_d=1007,ur=1008,hr=1009,bd=1010,wd=1011,zs=1012,Md=1013,Ns=1014,fn=1015,Fs=1016,Ed=1017,Sd=1018,Ad=1019,Gi=1020,Td=1021,Cn=1022,Ft=1023,Cd=1024,Ld=1025,ri=1026,Vi=1027,Rd=1028,Pd=1029,Id=1030,Dd=1031,Nd=1032,zd=1033,Qr=33776,Kr=33777,eo=33778,to=33779,no=35840,io=35841,so=35842,ao=35843,Fd=36196,ro=37492,oo=37496,Bd=37808,Od=37809,Gd=37810,Ud=37811,kd=37812,Hd=37813,Vd=37814,Wd=37815,qd=37816,jd=37817,Xd=37818,Yd=37819,Zd=37820,Jd=37821,$d=36492,Qd=37840,Kd=37841,eu=37842,tu=37843,nu=37844,iu=37845,su=37846,au=37847,ru=37848,ou=37849,cu=37850,lu=37851,du=37852,uu=37853,hu=2200,pu=2201,fu=2202,Bs=2300,Os=2301,sa=2302,ni=2400,ii=2401,Gs=2402,pr=2500,Bc=2501,mu=0,Zi=3e3,Oc=3001,gu=3007,vu=3002,xu=3003,yu=3004,_u=3005,bu=3006,wu=3200,Mu=3201,ui=0,Eu=1,aa=7680,Su=519,Wi=35044,Us=35048,co="300 es";class yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const ct=[];for(let r=0;r<256;r++)ct[r]=(r<16?"0":"")+r.toString(16);const ra=Math.PI/180,$a=180/Math.PI;function Wt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ct[r&255]+ct[r>>8&255]+ct[r>>16&255]+ct[r>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[n&255]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]).toUpperCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function Au(r,e){return(r%e+e)%e}function oa(r,e,t){return(1-t)*r+t*e}function lo(r){return(r&r-1)===0&&r!==0}function Tu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Cu(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class se{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}se.prototype.isVector2=!0;class lt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],h=n[7],u=n[2],p=n[5],m=n[8],v=i[0],x=i[3],g=i[6],f=i[1],M=i[4],b=i[7],w=i[2],y=i[5],I=i[8];return s[0]=a*v+o*f+c*w,s[3]=a*x+o*M+c*y,s[6]=a*g+o*b+c*I,s[1]=l*v+d*f+h*w,s[4]=l*x+d*M+h*y,s[7]=l*g+d*b+h*I,s[2]=u*v+p*f+m*w,s[5]=u*x+p*M+m*y,s[8]=u*g+p*b+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*s*d+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=d*a-o*l,u=o*c-d*s,p=l*s-a*c,m=t*h+n*u+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(i*l-d*n)*v,e[2]=(o*n-i*a)*v,e[3]=u*v,e[4]=(d*t-i*c)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],c=i[1],l=i[4],d=i[7];return i[0]=t*s+n*c,i[3]=t*a+n*l,i[6]=t*o+n*d,i[1]=-n*s+t*c,i[4]=-n*a+t*l,i[7]=-n*o+t*d,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}lt.prototype.isMatrix3=!0;let zn;class hi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zn===void 0&&(zn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),zn.width=e.width,zn.height=e.height;const n=zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let Lu=0;class ut extends yn{constructor(e=ut.DEFAULT_IMAGE,t=ut.DEFAULT_MAPPING,n=Nt,i=Nt,s=At,a=ur,o=Ft,c=hr,l=1,d=Zi){super(),Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Wt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Wt()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ca(i[a].image)):s.push(ca(i[a]))}else s=ca(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}ut.DEFAULT_IMAGE=void 0;ut.DEFAULT_MAPPING=Fc;ut.prototype.isTexture=!0;function ca(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hi.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Ge{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],d=c[4],h=c[8],u=c[1],p=c[5],m=c[9],v=c[2],x=c[6],g=c[10];if(Math.abs(d-u)<.01&&Math.abs(h-v)<.01&&Math.abs(m-x)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+v)<.1&&Math.abs(m+x)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,b=(p+1)/2,w=(g+1)/2,y=(d+u)/4,I=(h+v)/4,z=(m+x)/4;return M>b&&M>w?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=y/n,s=I/n):b>w?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=y/i,s=z/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=I/s,i=z/s),this.set(n,i,s,t),this}let f=Math.sqrt((x-m)*(x-m)+(h-v)*(h-v)+(u-d)*(u-d));return Math.abs(f)<.001&&(f=1),this.x=(x-m)/f,this.y=(h-v)/f,this.z=(u-d)/f,this.w=Math.acos((l+p+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}Ge.prototype.isVector4=!0;class Ln extends yn{constructor(e,t,n){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Ge(0,0,e,t),this.scissorTest=!1,this.viewport=new Ge(0,0,e,t),n=n||{},this.texture=new ut(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:At,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ln.prototype.isWebGLRenderTarget=!0;class Ru extends Ln{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Ru.prototype.isWebGLMultisampleRenderTarget=!0;let dt=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],d=n[i+2],h=n[i+3];const u=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(h!==v||c!==u||l!==p||d!==m){let x=1-o;const g=c*u+l*p+d*m+h*v,f=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const w=Math.sqrt(M),y=Math.atan2(w,g*f);x=Math.sin(x*y)/w,o=Math.sin(o*y)/w}const b=o*f;if(c=c*x+u*b,l=l*x+p*b,d=d*x+m*b,h=h*x+v*b,x===1-o){const w=1/Math.sqrt(c*c+l*l+d*d+h*h);c*=w,l*=w,d*=w,h*=w}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],d=n[i+3],h=s[a],u=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+d*h+c*p-l*u,e[t+1]=c*m+d*u+l*h-o*p,e[t+2]=l*m+d*p+o*u-c*h,e[t+3]=d*m-o*h-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(i/2),h=o(s/2),u=c(n/2),p=c(i/2),m=c(s/2);switch(a){case"XYZ":this._x=u*d*h+l*p*m,this._y=l*p*h-u*d*m,this._z=l*d*m+u*p*h,this._w=l*d*h-u*p*m;break;case"YXZ":this._x=u*d*h+l*p*m,this._y=l*p*h-u*d*m,this._z=l*d*m-u*p*h,this._w=l*d*h+u*p*m;break;case"ZXY":this._x=u*d*h-l*p*m,this._y=l*p*h+u*d*m,this._z=l*d*m+u*p*h,this._w=l*d*h-u*p*m;break;case"ZYX":this._x=u*d*h-l*p*m,this._y=l*p*h+u*d*m,this._z=l*d*m-u*p*h,this._w=l*d*h+u*p*m;break;case"YZX":this._x=u*d*h+l*p*m,this._y=l*p*h+u*d*m,this._z=l*d*m-u*p*h,this._w=l*d*h-u*p*m;break;case"XZY":this._x=u*d*h-l*p*m,this._y=l*p*h-u*d*m,this._z=l*d*m+u*p*h,this._w=l*d*h+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(d-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+i*l-s*c,this._y=i*d+a*c+s*o-n*l,this._z=s*d+a*l+n*c-i*o,this._w=a*d-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),h=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};dt.prototype.isQuaternion=!0;class L{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,d=c*n+o*t-s*i,h=c*i+s*n-a*t,u=-s*t-a*n-o*i;return this.x=l*c+u*-s+d*-o-h*-a,this.y=d*c+u*-a+h*-s-l*-o,this.z=h*c+u*-o+l*-a-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}L.prototype.isVector3=!0;const la=new L,uo=new dt;class Et{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){const d=e[c],h=e[c+1],u=e[c+2];d<t&&(t=d),h<n&&(n=h),u<i&&(i=u),d>s&&(s=d),h>a&&(a=h),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){const d=e.getX(c),h=e.getY(c),u=e.getZ(c);d<t&&(t=d),h<n&&(n=h),u<i&&(i=u),d>s&&(s=d),h>a&&(a=h),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new L),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new L),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),da.copy(t.boundingBox),da.applyMatrix4(e.matrixWorld),this.union(da));const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new L),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_i),es.subVectors(this.max,_i),Fn.subVectors(e.a,_i),Bn.subVectors(e.b,_i),On.subVectors(e.c,_i),an.subVectors(Bn,Fn),rn.subVectors(On,Bn),En.subVectors(Fn,On);let t=[0,-an.z,an.y,0,-rn.z,rn.y,0,-En.z,En.y,an.z,0,-an.x,rn.z,0,-rn.x,En.z,0,-En.x,-an.y,an.x,0,-rn.y,rn.x,0,-En.y,En.x,0];return!ua(t,Fn,Bn,On,es)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,Fn,Bn,On,es))?!1:(ts.crossVectors(an,rn),t=[ts.x,ts.y,ts.z],ua(t,Fn,Bn,On,es))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new L),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Et.prototype.isBox3=!0;const Zt=[new L,new L,new L,new L,new L,new L,new L,new L],yi=new L,da=new Et,Fn=new L,Bn=new L,On=new L,an=new L,rn=new L,En=new L,_i=new L,es=new L,ts=new L,Sn=new L;function ua(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Sn.fromArray(r,s);const o=i.x*Math.abs(Sn.x)+i.y*Math.abs(Sn.y)+i.z*Math.abs(Sn.z),c=e.dot(Sn),l=t.dot(Sn),d=n.dot(Sn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Pu=new Et,ho=new L,ha=new L,pa=new L;let pi=class{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new L),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Et),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){pa.subVectors(e,this.center);const t=pa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(pa.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return ha.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ho.copy(e.center).add(ha)),this.expandByPoint(ho.copy(e.center).sub(ha)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Jt=new L,fa=new L,ns=new L,on=new L,ma=new L,is=new L,ga=new L;let Pn=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new L),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new L),t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.direction).multiplyScalar(t).add(this.origin),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fa.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),on.copy(this.origin).sub(fa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ns),o=on.dot(this.direction),c=-on.dot(ns),l=on.lengthSq(),d=Math.abs(1-a*a);let h,u,p,m;if(d>0)if(h=a*c-o,u=a*o-c,m=s*d,h>=0)if(u>=-m)if(u<=m){const v=1/d;h*=v,u*=v,p=h*(h+a*u+2*o)+u*(a*h+u+2*c)+l}else u=s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*c)+l;else u=-s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*c)+l;else u<=-m?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+u*(u+2*c)+l):u<=m?(h=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+u*(u+2*c)+l);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ns).multiplyScalar(u).add(fa),p}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),i=Jt.dot(Jt)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,i,s){ma.subVectors(t,e),is.subVectors(n,e),ga.crossVectors(ma,is);let a=this.direction.dot(ga),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;on.subVectors(this.origin,e);const c=o*this.direction.dot(is.crossVectors(on,is));if(c<0)return null;const l=o*this.direction.dot(ma.cross(on));if(l<0||c+l>a)return null;const d=-o*on.dot(ga);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ye{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,c,l,d,h,u,p,m,v,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=d,g[10]=h,g[14]=u,g[3]=p,g[7]=m,g[11]=v,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gn.setFromMatrixColumn(e,0).length(),s=1/Gn.setFromMatrixColumn(e,1).length(),a=1/Gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,p=a*h,m=o*d,v=o*h;t[0]=c*d,t[4]=-c*h,t[8]=l,t[1]=p+m*l,t[5]=u-v*l,t[9]=-o*c,t[2]=v-u*l,t[6]=m+p*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*d,p=c*h,m=l*d,v=l*h;t[0]=u+v*o,t[4]=m*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=p*o-m,t[6]=v+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*d,p=c*h,m=l*d,v=l*h;t[0]=u-v*o,t[4]=-a*h,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*d,t[9]=v-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*d,p=a*h,m=o*d,v=o*h;t[0]=c*d,t[4]=m*l-p,t[8]=u*l+v,t[1]=c*h,t[5]=v*l+u,t[9]=p*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,p=a*l,m=o*c,v=o*l;t[0]=c*d,t[4]=v-u*h,t[8]=m*h+p,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=p*h+m,t[10]=u-v*h}else if(e.order==="XZY"){const u=a*c,p=a*l,m=o*c,v=o*l;t[0]=c*d,t[4]=-h,t[8]=l*d,t[1]=u*h+v,t[5]=a*d,t[9]=p*h-m,t[2]=m*h-p,t[6]=o*d,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Iu,e,Du)}lookAt(e,t,n){const i=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),cn.crossVectors(n,bt),cn.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),cn.crossVectors(n,bt)),cn.normalize(),ss.crossVectors(bt,cn),i[0]=cn.x,i[4]=ss.x,i[8]=bt.x,i[1]=cn.y,i[5]=ss.y,i[9]=bt.y,i[2]=cn.z,i[6]=ss.z,i[10]=bt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],h=n[5],u=n[9],p=n[13],m=n[2],v=n[6],x=n[10],g=n[14],f=n[3],M=n[7],b=n[11],w=n[15],y=i[0],I=i[4],z=i[8],B=i[12],F=i[1],G=i[5],O=i[9],S=i[13],R=i[2],P=i[6],C=i[10],Z=i[14],$=i[3],Y=i[7],re=i[11],ae=i[15];return s[0]=a*y+o*F+c*R+l*$,s[4]=a*I+o*G+c*P+l*Y,s[8]=a*z+o*O+c*C+l*re,s[12]=a*B+o*S+c*Z+l*ae,s[1]=d*y+h*F+u*R+p*$,s[5]=d*I+h*G+u*P+p*Y,s[9]=d*z+h*O+u*C+p*re,s[13]=d*B+h*S+u*Z+p*ae,s[2]=m*y+v*F+x*R+g*$,s[6]=m*I+v*G+x*P+g*Y,s[10]=m*z+v*O+x*C+g*re,s[14]=m*B+v*S+x*Z+g*ae,s[3]=f*y+M*F+b*R+w*$,s[7]=f*I+M*G+b*P+w*Y,s[11]=f*z+M*O+b*C+w*re,s[15]=f*B+M*S+b*Z+w*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],h=e[6],u=e[10],p=e[14],m=e[3],v=e[7],x=e[11],g=e[15];return m*(+s*c*h-i*l*h-s*o*u+n*l*u+i*o*p-n*c*p)+v*(+t*c*p-t*l*u+s*a*u-i*a*p+i*l*d-s*c*d)+x*(+t*l*h-t*o*p-s*a*h+n*a*p+s*o*d-n*l*d)+g*(-i*o*d-t*c*h+t*o*u+i*a*h-n*a*u+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],h=e[9],u=e[10],p=e[11],m=e[12],v=e[13],x=e[14],g=e[15],f=h*x*l-v*u*l+v*c*p-o*x*p-h*c*g+o*u*g,M=m*u*l-d*x*l-m*c*p+a*x*p+d*c*g-a*u*g,b=d*v*l-m*h*l+m*o*p-a*v*p-d*o*g+a*h*g,w=m*h*c-d*v*c-m*o*u+a*v*u+d*o*x-a*h*x,y=t*f+n*M+i*b+s*w;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/y;return e[0]=f*I,e[1]=(v*u*s-h*x*s-v*i*p+n*x*p+h*i*g-n*u*g)*I,e[2]=(o*x*s-v*c*s+v*i*l-n*x*l-o*i*g+n*c*g)*I,e[3]=(h*c*s-o*u*s-h*i*l+n*u*l+o*i*p-n*c*p)*I,e[4]=M*I,e[5]=(d*x*s-m*u*s+m*i*p-t*x*p-d*i*g+t*u*g)*I,e[6]=(m*c*s-a*x*s-m*i*l+t*x*l+a*i*g-t*c*g)*I,e[7]=(a*u*s-d*c*s+d*i*l-t*u*l-a*i*p+t*c*p)*I,e[8]=b*I,e[9]=(m*h*s-d*v*s-m*n*p+t*v*p+d*n*g-t*h*g)*I,e[10]=(a*v*s-m*o*s+m*n*l-t*v*l-a*n*g+t*o*g)*I,e[11]=(d*o*s-a*h*s-d*n*l+t*h*l+a*n*p-t*o*p)*I,e[12]=w*I,e[13]=(d*v*i-m*h*i+m*n*u-t*v*u-d*n*x+t*h*x)*I,e[14]=(m*o*i-a*v*i-m*n*c+t*v*c+a*n*x-t*o*x)*I,e[15]=(a*h*i-d*o*i+d*n*c-t*h*c-a*n*u+t*o*u)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,d*o+n,d*c-i*a,0,l*c-i*o,d*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,h=o+o,u=s*l,p=s*d,m=s*h,v=a*d,x=a*h,g=o*h,f=c*l,M=c*d,b=c*h,w=n.x,y=n.y,I=n.z;return i[0]=(1-(v+g))*w,i[1]=(p+b)*w,i[2]=(m-M)*w,i[3]=0,i[4]=(p-b)*y,i[5]=(1-(u+g))*y,i[6]=(x+f)*y,i[7]=0,i[8]=(m+M)*I,i[9]=(x-f)*I,i[10]=(1-(u+v))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Gn.set(i[0],i[1],i[2]).length();const a=Gn.set(i[4],i[5],i[6]).length(),o=Gn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Lt.copy(this);const l=1/s,d=1/a,h=1/o;return Lt.elements[0]*=l,Lt.elements[1]*=l,Lt.elements[2]*=l,Lt.elements[4]*=d,Lt.elements[5]*=d,Lt.elements[6]*=d,Lt.elements[8]*=h,Lt.elements[9]*=h,Lt.elements[10]*=h,t.setFromRotationMatrix(Lt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,c=2*s/(t-e),l=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i),u=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=d,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,c=1/(t-e),l=1/(n-i),d=1/(a-s),h=(t+e)*c,u=(n+i)*l,p=(a+s)*d;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*d,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ye.prototype.isMatrix4=!0;const Gn=new L,Lt=new ye,Iu=new L(0,0,0),Du=new L(1,1,1),cn=new L,ss=new L,bt=new L,po=new ye,fo=new dt;class fi{constructor(e=0,t=0,n=0,i=fi.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],d=i[9],h=i[2],u=i[6],p=i[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return po.makeRotationFromQuaternion(e),this.setFromRotationMatrix(po,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return fo.setFromEuler(this),this.setFromQuaternion(fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new L(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}fi.prototype.isEuler=!0;fi.DefaultOrder="XYZ";fi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Gc{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let Nu=0;const mo=new L,Un=new dt,$t=new ye,as=new L,bi=new L,zu=new L,Fu=new dt,go=new L(1,0,0),vo=new L(0,1,0),xo=new L(0,0,1),Bu={type:"added"},yo={type:"removed"};class Fe extends yn{constructor(){super(),Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Wt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DefaultUp.clone();const e=new L,t=new fi,n=new dt,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new lt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Fe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.multiply(Un),this}rotateOnWorldAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.premultiply(Un),this}rotateX(e){return this.rotateOnAxis(go,e)}rotateY(e){return this.rotateOnAxis(vo,e)}rotateZ(e){return this.rotateOnAxis(xo,e)}translateOnAxis(e,t){return mo.copy(e).applyQuaternion(this.quaternion),this.position.add(mo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(go,e)}translateY(e){return this.translateOnAxis(vo,e)}translateZ(e){return this.translateOnAxis(xo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(bi,as,this.up):$t.lookAt(as,bi,this.up),this.quaternion.setFromRotationMatrix($t),i&&($t.extractRotation(i.matrixWorld),Un.setFromRotationMatrix($t),this.quaternion.premultiply(Un.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yo)),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(yo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new L),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new dt),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,zu),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new L),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Fu,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new L),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),p=a(e.animations);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p)}return n.object=i,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Fe.DefaultUp=new L(0,1,0);Fe.DefaultMatrixAutoUpdate=!0;Fe.prototype.isObject3D=!0;const va=new L,Ou=new L,Gu=new lt;class Ht{constructor(e=new L(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=va.subVectors(n,t).cross(Ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new L),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new L);const n=e.delta(va),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new L),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gu.getNormalMatrix(e),i=this.coplanarPoint(va).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Ht.prototype.isPlane=!0;const Rt=new L,Qt=new L,xa=new L,Kt=new L,kn=new L,Hn=new L,_o=new L,ya=new L,_a=new L,ba=new L;class nt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new L),i.subVectors(n,t),Rt.subVectors(e,t),i.cross(Rt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Rt.subVectors(i,t),Qt.subVectors(n,t),xa.subVectors(e,t);const a=Rt.dot(Rt),o=Rt.dot(Qt),c=Rt.dot(xa),l=Qt.dot(Qt),d=Qt.dot(xa),h=a*l-o*o;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new L),h===0)return s.set(-2,-1,-1);const u=1/h,p=(l*c-o*d)*u,m=(a*d-o*c)*u;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kt),Kt.x>=0&&Kt.y>=0&&Kt.x+Kt.y<=1}static getUV(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Kt),c.set(0,0),c.addScaledVector(s,Kt.x),c.addScaledVector(a,Kt.y),c.addScaledVector(o,Kt.z),c}static isFrontFacing(e,t,n,i){return Rt.subVectors(n,t),Qt.subVectors(e,t),Rt.cross(Qt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rt.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Rt.cross(Qt).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new L),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Ht),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return nt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return nt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new L);const n=this.a,i=this.b,s=this.c;let a,o;kn.subVectors(i,n),Hn.subVectors(s,n),ya.subVectors(e,n);const c=kn.dot(ya),l=Hn.dot(ya);if(c<=0&&l<=0)return t.copy(n);_a.subVectors(e,i);const d=kn.dot(_a),h=Hn.dot(_a);if(d>=0&&h<=d)return t.copy(i);const u=c*h-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(kn,a);ba.subVectors(e,s);const p=kn.dot(ba),m=Hn.dot(ba);if(m>=0&&p<=m)return t.copy(s);const v=p*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Hn,o);const x=d*m-p*h;if(x<=0&&h-d>=0&&p-m>=0)return _o.subVectors(s,i),o=(h-d)/(h-d+(p-m)),t.copy(i).addScaledVector(_o,o);const g=1/(x+v+u);return a=v*g,o=u*g,t.copy(n).addScaledVector(kn,a).addScaledVector(Hn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Uu=0;function rt(){Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Wt(),this.name="",this.type="Material",this.fog=!0,this.blending=Bi,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Nc,this.blendDst=zc,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}rt.prototype=Object.assign(Object.create(yn.prototype),{constructor:rt,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(r){if(r!==void 0)for(const e in r){const t=r[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===Dc;continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t}},toJSON:function(r){const e=r===void 0||typeof r=="string";e&&(r={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(r).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(r).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(r).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(r).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(r).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(r).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(r).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(r).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(r).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(r).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(r).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(r).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(r).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(r).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(r).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(r).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(r).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(t.blending=this.blending),this.side!==Ws&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function n(i){const s=[];for(const a in i){const o=i[a];delete o.metadata,s.push(o)}return s}if(e){const i=n(r.textures),s=n(r.images);i.length>0&&(t.textures=i),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(r){this.name=r.name,this.fog=r.fog,this.blending=r.blending,this.side=r.side,this.vertexColors=r.vertexColors,this.opacity=r.opacity,this.transparent=r.transparent,this.blendSrc=r.blendSrc,this.blendDst=r.blendDst,this.blendEquation=r.blendEquation,this.blendSrcAlpha=r.blendSrcAlpha,this.blendDstAlpha=r.blendDstAlpha,this.blendEquationAlpha=r.blendEquationAlpha,this.depthFunc=r.depthFunc,this.depthTest=r.depthTest,this.depthWrite=r.depthWrite,this.stencilWriteMask=r.stencilWriteMask,this.stencilFunc=r.stencilFunc,this.stencilRef=r.stencilRef,this.stencilFuncMask=r.stencilFuncMask,this.stencilFail=r.stencilFail,this.stencilZFail=r.stencilZFail,this.stencilZPass=r.stencilZPass,this.stencilWrite=r.stencilWrite;const e=r.clippingPlanes;let t=null;if(e!==null){const n=e.length;t=new Array(n);for(let i=0;i!==n;++i)t[i]=e[i].clone()}return this.clippingPlanes=t,this.clipIntersection=r.clipIntersection,this.clipShadows=r.clipShadows,this.shadowSide=r.shadowSide,this.colorWrite=r.colorWrite,this.precision=r.precision,this.polygonOffset=r.polygonOffset,this.polygonOffsetFactor=r.polygonOffsetFactor,this.polygonOffsetUnits=r.polygonOffsetUnits,this.dithering=r.dithering,this.alphaTest=r.alphaTest,this.alphaToCoverage=r.alphaToCoverage,this.premultipliedAlpha=r.premultipliedAlpha,this.visible=r.visible,this.toneMapped=r.toneMapped,this.userData=JSON.parse(JSON.stringify(r.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(rt.prototype,"needsUpdate",{set:function(r){r===!0&&this.version++}});const Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pt={h:0,s:0,l:0},rs={h:0,s:0,l:0};function wa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ea(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class ve{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Au(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=wa(s,i,e+1/3),this.g=wa(s,i,e),this.b=wa(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(i[1])/360,c=parseInt(i[2],10)/100,l=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(o,c,l)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Uc[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),a=Math.min(t,n,i);let o,c;const l=(a+s)/2;if(a===s)o=0,c=0;else{const d=s-a;switch(c=l<=.5?d/(s+a):d/(2-s-a),s){case t:o=(n-i)/d+(n<i?6:0);break;case n:o=(i-t)/d+2;break;case i:o=(t-n)/d+4;break}o/=6}return e.h=o,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Pt),Pt.h+=e,Pt.s+=t,Pt.l+=n,this.setHSL(Pt.h,Pt.s,Pt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pt),e.getHSL(rs);const n=oa(Pt.h,rs.h,t),i=oa(Pt.s,rs.s,t),s=oa(Pt.l,rs.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ve.NAMES=Uc;ve.prototype.isColor=!0;ve.prototype.r=1;ve.prototype.g=1;ve.prototype.b=1;class fr extends rt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}}fr.prototype.isMeshBasicMaterial=!0;const Ve=new L,os=new se;class at{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Wi,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new ve),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new se),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new L),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new Ge),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ve.fromBufferAttribute(this,t),Ve.applyMatrix3(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.applyMatrix4(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.applyNormalMatrix(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ve.x=this.getX(t),Ve.y=this.getY(t),Ve.z=this.getZ(t),Ve.transformDirection(e),this.setXYZ(t,Ve.x,Ve.y,Ve.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wi&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}at.prototype.isBufferAttribute=!0;class kc extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hc extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ku extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}ku.prototype.isFloat16BufferAttribute=!0;class Ze extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}}function Vc(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}let Hu=0;const Ot=new ye,Sa=new Fe,Vn=new L,wt=new Et,wi=new Et,it=new L;class Ue extends yn{constructor(){super(),Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Wt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vc(e)>65535?Hc:kc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Et);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(it.addVectors(wt.min,wi.min),wt.expandByPoint(it),it.addVectors(wt.max,wi.max),wt.expandByPoint(it)):(wt.expandByPoint(wi.min),wt.expandByPoint(wi.max))}wt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)it.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(it));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)it.fromBufferAttribute(o,l),c&&(Vn.fromBufferAttribute(e,l),it.add(Vn)),i=Math.max(i,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new at(new Float32Array(4*o),4));const c=t.tangent.array,l=[],d=[];for(let F=0;F<o;F++)l[F]=new L,d[F]=new L;const h=new L,u=new L,p=new L,m=new se,v=new se,x=new se,g=new L,f=new L;function M(F,G,O){h.fromArray(i,F*3),u.fromArray(i,G*3),p.fromArray(i,O*3),m.fromArray(a,F*2),v.fromArray(a,G*2),x.fromArray(a,O*2),u.sub(h),p.sub(h),v.sub(m),x.sub(m);const S=1/(v.x*x.y-x.x*v.y);isFinite(S)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(p,-v.y).multiplyScalar(S),f.copy(p).multiplyScalar(v.x).addScaledVector(u,-x.x).multiplyScalar(S),l[F].add(g),l[G].add(g),l[O].add(g),d[F].add(f),d[G].add(f),d[O].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let F=0,G=b.length;F<G;++F){const O=b[F],S=O.start,R=O.count;for(let P=S,C=S+R;P<C;P+=3)M(n[P+0],n[P+1],n[P+2])}const w=new L,y=new L,I=new L,z=new L;function B(F){I.fromArray(s,F*3),z.copy(I);const G=l[F];w.copy(G),w.sub(I.multiplyScalar(I.dot(G))).normalize(),y.crossVectors(z,G);const S=y.dot(d[F])<0?-1:1;c[F*4]=w.x,c[F*4+1]=w.y,c[F*4+2]=w.z,c[F*4+3]=S}for(let F=0,G=b.length;F<G;++F){const O=b[F],S=O.start,R=O.count;for(let P=S,C=S+R;P<C;P+=3)B(n[P+0]),B(n[P+1]),B(n[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new L,s=new L,a=new L,o=new L,c=new L,l=new L,d=new L,h=new L;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),v=e.getX(u+1),x=e.getX(u+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),d.subVectors(a,s),h.subVectors(i,s),d.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),o.add(d),c.add(d),l.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),h.subVectors(i,s),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],c=o.array,l=o.itemSize*t,d=Math.min(c.length,a.length-l);for(let h=0,u=l;h<d;h++,u++)a[u]=c[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,h=o.normalized,u=new l.constructor(c.length*d);let p=0,m=0;for(let v=0,x=c.length;v<x;v++){p=c[v]*d;for(let g=0;g<d;g++)u[m++]=l[p++]}return new at(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ue,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,h=l.length;d<h;d++){const u=l[d],p=e(u,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let h=0,u=l.length;h<u;h++){const p=l[h];d.push(p.toJSON(e.data))}d.length>0&&(i[c]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new Ue().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],h=s[l];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ue.prototype.isBufferGeometry=!0;const bo=new ye,Wn=new Pn,Aa=new pi,ln=new L,dn=new L,un=new L,Ta=new L,Ca=new L,La=new L,cs=new L,ls=new L,ds=new L,us=new se,hs=new se,ps=new se,Ra=new L,fs=new L;class Mt extends Fe{constructor(e=new Ue,t=new fr){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),e.ray.intersectsSphere(Aa)===!1)||(bo.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(bo),n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,c=n.attributes.position,l=n.morphAttributes.position,d=n.morphTargetsRelative,h=n.attributes.uv,u=n.attributes.uv2,p=n.groups,m=n.drawRange;if(o!==null)if(Array.isArray(i))for(let v=0,x=p.length;v<x;v++){const g=p[v],f=i[g.materialIndex],M=Math.max(g.start,m.start),b=Math.min(g.start+g.count,m.start+m.count);for(let w=M,y=b;w<y;w+=3){const I=o.getX(w),z=o.getX(w+1),B=o.getX(w+2);a=ms(this,f,e,Wn,c,l,d,h,u,I,z,B),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=v,f=x;g<f;g+=3){const M=o.getX(g),b=o.getX(g+1),w=o.getX(g+2);a=ms(this,i,e,Wn,c,l,d,h,u,M,b,w),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let v=0,x=p.length;v<x;v++){const g=p[v],f=i[g.materialIndex],M=Math.max(g.start,m.start),b=Math.min(g.start+g.count,m.start+m.count);for(let w=M,y=b;w<y;w+=3){const I=w,z=w+1,B=w+2;a=ms(this,f,e,Wn,c,l,d,h,u,I,z,B),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const v=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let g=v,f=x;g<f;g+=3){const M=g,b=g+1,w=g+2;a=ms(this,i,e,Wn,c,l,d,h,u,M,b,w),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Mt.prototype.isMesh=!0;function Vu(r,e,t,n,i,s,a,o){let c;if(e.side===st?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side!==qs,o),c===null)return null;fs.copy(o),fs.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(fs);return l<t.near||l>t.far?null:{distance:l,point:fs.clone(),object:r}}function ms(r,e,t,n,i,s,a,o,c,l,d,h){ln.fromBufferAttribute(i,l),dn.fromBufferAttribute(i,d),un.fromBufferAttribute(i,h);const u=r.morphTargetInfluences;if(e.morphTargets&&s&&u){cs.set(0,0,0),ls.set(0,0,0),ds.set(0,0,0);for(let m=0,v=s.length;m<v;m++){const x=u[m],g=s[m];x!==0&&(Ta.fromBufferAttribute(g,l),Ca.fromBufferAttribute(g,d),La.fromBufferAttribute(g,h),a?(cs.addScaledVector(Ta,x),ls.addScaledVector(Ca,x),ds.addScaledVector(La,x)):(cs.addScaledVector(Ta.sub(ln),x),ls.addScaledVector(Ca.sub(dn),x),ds.addScaledVector(La.sub(un),x)))}ln.add(cs),dn.add(ls),un.add(ds)}r.isSkinnedMesh&&e.skinning&&(r.boneTransform(l,ln),r.boneTransform(d,dn),r.boneTransform(h,un));const p=Vu(r,e,t,n,ln,dn,un,Ra);if(p){o&&(us.fromBufferAttribute(o,l),hs.fromBufferAttribute(o,d),ps.fromBufferAttribute(o,h),p.uv=nt.getUV(Ra,ln,dn,un,us,hs,ps,new se)),c&&(us.fromBufferAttribute(c,l),hs.fromBufferAttribute(c,d),ps.fromBufferAttribute(c,h),p.uv2=nt.getUV(Ra,ln,dn,un,us,hs,ps,new se));const m={a:l,b:d,c:h,normal:new L,materialIndex:0};nt.getNormal(ln,dn,un,m.normal),p.face=m}return p}class mr extends Ue{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],h=[];let u=0,p=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(h,2));function m(v,x,g,f,M,b,w,y,I,z,B){const F=b/I,G=w/z,O=b/2,S=w/2,R=y/2,P=I+1,C=z+1;let Z=0,$=0;const Y=new L;for(let re=0;re<C;re++){const ae=re*G-S;for(let ne=0;ne<P;ne++){const fe=ne*F-O;Y[v]=fe*f,Y[x]=ae*M,Y[g]=R,l.push(Y.x,Y.y,Y.z),Y[v]=0,Y[x]=0,Y[g]=y>0?1:-1,d.push(Y.x,Y.y,Y.z),h.push(ne/I),h.push(1-re/z),Z+=1}}for(let re=0;re<z;re++)for(let ae=0;ae<I;ae++){const ne=u+ae+P*re,fe=u+ae+P*(re+1),J=u+(ae+1)+P*(re+1),Re=u+(ae+1)+P*re;c.push(ne,fe,Re),c.push(fe,J,Re),$+=6}o.addGroup(p,$,B),p+=$,u+=Z}}}function ci(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ht(r){const e={};for(let t=0;t<r.length;t++){const n=ci(r[t]);for(const i in n)e[i]=n[i]}return e}const Wu={clone:ci,merge:ht};var qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends rt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=qu,this.fragmentShader=ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Rn.prototype.isShaderMaterial=!0;class gr extends Fe{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new L),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}gr.prototype.isCamera=!0;class _t extends gr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ra*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}_t.prototype.isPerspectiveCamera=!0;const qn=90,jn=1;class vr extends Fe{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new _t(qn,jn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);const s=new _t(qn,jn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(-1,0,0)),this.add(s);const a=new _t(qn,jn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new L(0,1,0)),this.add(a);const o=new _t(qn,jn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new L(0,-1,0)),this.add(o);const c=new _t(qn,jn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,1)),this.add(c);const l=new _t(qn,jn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,c,l]=this.children,d=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const u=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=u,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.xr.enabled=d}}class Xs extends ut{constructor(e,t,n,i,s,a,o,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:or,o=o!==void 0?o:Cn,super(e,t,n,i,s,a,o,c,l,d),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Xs.prototype.isCubeTexture=!0;class Wc extends Ln{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Xs(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:At,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Ft,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new mr(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:st,blending:Fi});s.uniforms.tEquirect.value=t;const a=new Mt(i,s),o=t.minFilter;return t.minFilter===ur&&(t.minFilter=At),new vr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}Wc.prototype.isWebGLCubeRenderTarget=!0;class qc extends ut{constructor(e,t,n,i,s,a,o,c,l,d,h,u){super(null,a,o,c,l,d,i,s,h,u),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=l!==void 0?l:mt,this.minFilter=d!==void 0?d:mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}qc.prototype.isDataTexture=!0;const Xn=new pi,gs=new L;class Ys{constructor(e=new Ht,t=new Ht,n=new Ht,i=new Ht,s=new Ht,a=new Ht){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],d=n[6],h=n[7],u=n[8],p=n[9],m=n[10],v=n[11],x=n[12],g=n[13],f=n[14],M=n[15];return t[0].setComponents(o-i,h-c,v-u,M-x).normalize(),t[1].setComponents(o+i,h+c,v+u,M+x).normalize(),t[2].setComponents(o+s,h+l,v+p,M+g).normalize(),t[3].setComponents(o-s,h-l,v-p,M-g).normalize(),t[4].setComponents(o-a,h-d,v-m,M-f).normalize(),t[5].setComponents(o+a,h+d,v+m,M+f).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(gs.x=i.normal.x>0?e.max.x:e.min.x,gs.y=i.normal.y>0?e.max.y:e.min.y,gs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jc(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Xu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,d){const h=l.array,u=l.usage,p=r.createBuffer();r.bindBuffer(d,p),r.bufferData(d,h,u),l.onUploadCallback();let m=5126;return h instanceof Float32Array?m=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:h instanceof Int16Array?m=5122:h instanceof Uint32Array?m=5125:h instanceof Int32Array?m=5124:h instanceof Int8Array?m=5120:h instanceof Uint8Array&&(m=5121),{buffer:p,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,d,h){const u=d.array,p=d.updateRange;r.bindBuffer(h,l),p.count===-1?r.bufferSubData(h,0,u):(t?r.bufferSubData(h,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):r.bufferSubData(h,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d&&(r.deleteBuffer(d.buffer),n.delete(l))}function c(l,d){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,d)):h.version<l.version&&(s(h.buffer,l,d),h.version=l.version)}return{get:a,remove:o,update:c}}class Yu extends Ue{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,d=c+1,h=e/o,u=t/c,p=[],m=[],v=[],x=[];for(let g=0;g<d;g++){const f=g*u-a;for(let M=0;M<l;M++){const b=M*h-s;m.push(b,-f,0),v.push(0,0,1),x.push(M/o),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let f=0;f<o;f++){const M=f+l*g,b=f+l*(g+1),w=f+1+l*(g+1),y=f+1+l*g;p.push(M,b,y),p.push(b,w,y)}this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(x,2))}}var Zu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Qu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eh="vec3 transformed = vec3( position );",th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nh=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,ih=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ph=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",_h=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ah=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Th=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Ph=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Ih=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dh=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Nh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,zh=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Fh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bh=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Oh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Uh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,kh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zh=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Jh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$h=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,np=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ap=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,op=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,_p=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cp=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Rp=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Pp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ip=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Dp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Np=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,zp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Fp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Op=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qp=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,df=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ff=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,gf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const Le={alphamap_fragment:Zu,alphamap_pars_fragment:Ju,alphatest_fragment:$u,aomap_fragment:Qu,aomap_pars_fragment:Ku,begin_vertex:eh,beginnormal_vertex:th,bsdfs:nh,bumpmap_pars_fragment:ih,clipping_planes_fragment:sh,clipping_planes_pars_fragment:ah,clipping_planes_pars_vertex:rh,clipping_planes_vertex:oh,color_fragment:ch,color_pars_fragment:lh,color_pars_vertex:dh,color_vertex:uh,common:hh,cube_uv_reflection_fragment:ph,defaultnormal_vertex:fh,displacementmap_pars_vertex:mh,displacementmap_vertex:gh,emissivemap_fragment:vh,emissivemap_pars_fragment:xh,encodings_fragment:yh,encodings_pars_fragment:_h,envmap_fragment:bh,envmap_common_pars_fragment:wh,envmap_pars_fragment:Mh,envmap_pars_vertex:Eh,envmap_physical_pars_fragment:zh,envmap_vertex:Sh,fog_vertex:Ah,fog_pars_vertex:Th,fog_fragment:Ch,fog_pars_fragment:Lh,gradientmap_pars_fragment:Rh,lightmap_fragment:Ph,lightmap_pars_fragment:Ih,lights_lambert_vertex:Dh,lights_pars_begin:Nh,lights_toon_fragment:Fh,lights_toon_pars_fragment:Bh,lights_phong_fragment:Oh,lights_phong_pars_fragment:Gh,lights_physical_fragment:Uh,lights_physical_pars_fragment:kh,lights_fragment_begin:Hh,lights_fragment_maps:Vh,lights_fragment_end:Wh,logdepthbuf_fragment:qh,logdepthbuf_pars_fragment:jh,logdepthbuf_pars_vertex:Xh,logdepthbuf_vertex:Yh,map_fragment:Zh,map_pars_fragment:Jh,map_particle_fragment:$h,map_particle_pars_fragment:Qh,metalnessmap_fragment:Kh,metalnessmap_pars_fragment:ep,morphnormal_vertex:tp,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:sp,normal_fragment_maps:ap,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:op,clearcoat_normal_fragment_maps:cp,clearcoat_pars_fragment:lp,packing:dp,premultiplied_alpha_fragment:up,project_vertex:hp,dithering_fragment:pp,dithering_pars_fragment:fp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:vp,shadowmap_pars_vertex:xp,shadowmap_vertex:yp,shadowmask_pars_fragment:_p,skinbase_vertex:bp,skinning_pars_vertex:wp,skinning_vertex:Mp,skinnormal_vertex:Ep,specularmap_fragment:Sp,specularmap_pars_fragment:Ap,tonemapping_fragment:Tp,tonemapping_pars_fragment:Cp,transmissionmap_fragment:Lp,transmissionmap_pars_fragment:Rp,uv_pars_fragment:Pp,uv_pars_vertex:Ip,uv_vertex:Dp,uv2_pars_fragment:Np,uv2_pars_vertex:zp,uv2_vertex:Fp,worldpos_vertex:Bp,background_frag:Op,background_vert:Gp,cube_frag:Up,cube_vert:kp,depth_frag:Hp,depth_vert:Vp,distanceRGBA_frag:Wp,distanceRGBA_vert:qp,equirect_frag:jp,equirect_vert:Xp,linedashed_frag:Yp,linedashed_vert:Zp,meshbasic_frag:Jp,meshbasic_vert:$p,meshlambert_frag:Qp,meshlambert_vert:Kp,meshmatcap_frag:ef,meshmatcap_vert:tf,meshtoon_frag:nf,meshtoon_vert:sf,meshphong_frag:af,meshphong_vert:rf,meshphysical_frag:of,meshphysical_vert:cf,normal_frag:lf,normal_vert:df,points_frag:uf,points_vert:hf,shadow_frag:pf,shadow_vert:ff,sprite_frag:mf,sprite_vert:gf},ce={common:{diffuse:{value:new ve(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new lt},uv2Transform:{value:new lt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ve(15658734)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new lt}}},Vt={basic:{uniforms:ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.fog,ce.lights,{emissive:{value:new ve(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:ht([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:ht([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ve(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:ht([ce.points,ce.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:ht([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:ht([ce.common,ce.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Le.normal_vert,fragmentShader:Le.normal_frag},sprite:{uniforms:ht([ce.sprite,ce.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:ht([ce.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:ht([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:ht([ce.lights,ce.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Vt.physical={uniforms:ht([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new se(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ve(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function vf(r,e,t,n,i){const s=new ve(0);let a=0,o,c,l=null,d=0,h=null;function u(m,v,x,g){let f=v.isScene===!0?v.background:null;f&&f.isTexture&&(f=e.get(f));const M=r.xr,b=M.getSession&&M.getSession();b&&b.environmentBlendMode==="additive"&&(f=null),f===null?p(s,a):f&&f.isColor&&(p(f,1),g=!0),(r.autoClear||g)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),f&&(f.isCubeTexture||f.mapping===lr)?(c===void 0&&(c=new Mt(new mr(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:ci(Vt.cube.uniforms),vertexShader:Vt.cube.vertexShader,fragmentShader:Vt.cube.fragmentShader,side:st,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,y,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=f,c.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f._needsFlipEnvMap?-1:1,(l!==f||d!==f.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,l=f,d=f.version,h=r.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new Mt(new Yu(2,2),new Rn({name:"BackgroundMaterial",uniforms:ci(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:Ws,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=f,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),(l!==f||d!==f.version||h!==r.toneMapping)&&(o.material.needsUpdate=!0,l=f,d=f.version,h=r.toneMapping),m.unshift(o,o.geometry,o.material,0,0,null))}function p(m,v){t.buffers.color.setClear(m.r,m.g,m.b,v,i)}return{getClearColor:function(){return s},setClearColor:function(m,v=1){s.set(m),a=v,p(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,p(s,a)},render:u}}function xf(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=v(null);let l=c;function d(S,R,P,C,Z){let $=!1;if(a){const Y=m(C,P,R);l!==Y&&(l=Y,u(l.object)),$=x(C,Z),$&&g(C,Z)}else{const Y=R.wireframe===!0;(l.geometry!==C.id||l.program!==P.id||l.wireframe!==Y)&&(l.geometry=C.id,l.program=P.id,l.wireframe=Y,$=!0)}S.isInstancedMesh===!0&&($=!0),Z!==null&&t.update(Z,34963),$&&(I(S,R,P,C),Z!==null&&r.bindBuffer(34963,t.get(Z).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function u(S){return n.isWebGL2?r.bindVertexArray(S):s.bindVertexArrayOES(S)}function p(S){return n.isWebGL2?r.deleteVertexArray(S):s.deleteVertexArrayOES(S)}function m(S,R,P){const C=P.wireframe===!0;let Z=o[S.id];Z===void 0&&(Z={},o[S.id]=Z);let $=Z[R.id];$===void 0&&($={},Z[R.id]=$);let Y=$[C];return Y===void 0&&(Y=v(h()),$[C]=Y),Y}function v(S){const R=[],P=[],C=[];for(let Z=0;Z<i;Z++)R[Z]=0,P[Z]=0,C[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:P,attributeDivisors:C,object:S,attributes:{},index:null}}function x(S,R){const P=l.attributes,C=S.attributes;let Z=0;for(const $ in C){const Y=P[$],re=C[$];if(Y===void 0||Y.attribute!==re||Y.data!==re.data)return!0;Z++}return l.attributesNum!==Z||l.index!==R}function g(S,R){const P={},C=S.attributes;let Z=0;for(const $ in C){const Y=C[$],re={};re.attribute=Y,Y.data&&(re.data=Y.data),P[$]=re,Z++}l.attributes=P,l.attributesNum=Z,l.index=R}function f(){const S=l.newAttributes;for(let R=0,P=S.length;R<P;R++)S[R]=0}function M(S){b(S,0)}function b(S,R){const P=l.newAttributes,C=l.enabledAttributes,Z=l.attributeDivisors;P[S]=1,C[S]===0&&(r.enableVertexAttribArray(S),C[S]=1),Z[S]!==R&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](S,R),Z[S]=R)}function w(){const S=l.newAttributes,R=l.enabledAttributes;for(let P=0,C=R.length;P<C;P++)R[P]!==S[P]&&(r.disableVertexAttribArray(P),R[P]=0)}function y(S,R,P,C,Z,$){n.isWebGL2===!0&&(P===5124||P===5125)?r.vertexAttribIPointer(S,R,P,Z,$):r.vertexAttribPointer(S,R,P,C,Z,$)}function I(S,R,P,C){if(n.isWebGL2===!1&&(S.isInstancedMesh||C.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();const Z=C.attributes,$=P.getAttributes(),Y=R.defaultAttributeValues;for(const re in $){const ae=$[re];if(ae>=0){const ne=Z[re];if(ne!==void 0){const fe=ne.normalized,J=ne.itemSize,Re=t.get(ne);if(Re===void 0)continue;const Se=Re.buffer,ge=Re.type,me=Re.bytesPerElement;if(ne.isInterleavedBufferAttribute){const Ce=ne.data,Me=Ce.stride,Te=ne.offset;Ce&&Ce.isInstancedInterleavedBuffer?(b(ae,Ce.meshPerAttribute),C._maxInstanceCount===void 0&&(C._maxInstanceCount=Ce.meshPerAttribute*Ce.count)):M(ae),r.bindBuffer(34962,Se),y(ae,J,ge,fe,Me*me,Te*me)}else ne.isInstancedBufferAttribute?(b(ae,ne.meshPerAttribute),C._maxInstanceCount===void 0&&(C._maxInstanceCount=ne.meshPerAttribute*ne.count)):M(ae),r.bindBuffer(34962,Se),y(ae,J,ge,fe,0,0)}else if(re==="instanceMatrix"){const fe=t.get(S.instanceMatrix);if(fe===void 0)continue;const J=fe.buffer,Re=fe.type;b(ae+0,1),b(ae+1,1),b(ae+2,1),b(ae+3,1),r.bindBuffer(34962,J),r.vertexAttribPointer(ae+0,4,Re,!1,64,0),r.vertexAttribPointer(ae+1,4,Re,!1,64,16),r.vertexAttribPointer(ae+2,4,Re,!1,64,32),r.vertexAttribPointer(ae+3,4,Re,!1,64,48)}else if(re==="instanceColor"){const fe=t.get(S.instanceColor);if(fe===void 0)continue;const J=fe.buffer,Re=fe.type;b(ae,1),r.bindBuffer(34962,J),r.vertexAttribPointer(ae,3,Re,!1,12,0)}else if(Y!==void 0){const fe=Y[re];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(ae,fe);break;case 3:r.vertexAttrib3fv(ae,fe);break;case 4:r.vertexAttrib4fv(ae,fe);break;default:r.vertexAttrib1fv(ae,fe)}}}}w()}function z(){G();for(const S in o){const R=o[S];for(const P in R){const C=R[P];for(const Z in C)p(C[Z].object),delete C[Z];delete R[P]}delete o[S]}}function B(S){if(o[S.id]===void 0)return;const R=o[S.id];for(const P in R){const C=R[P];for(const Z in C)p(C[Z].object),delete C[Z];delete R[P]}delete o[S.id]}function F(S){for(const R in o){const P=o[R];if(P[S.id]===void 0)continue;const C=P[S.id];for(const Z in C)p(C[Z].object),delete C[Z];delete P[S.id]}}function G(){O(),l!==c&&(l=c,u(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:G,resetDefaultState:O,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:f,enableAttribute:M,disableUnusedAttributes:w}}function yf(r,e,t,n){const i=n.isWebGL2;let s;function a(l){s=l}function o(l,d){r.drawArrays(s,l,d),t.update(d,s,1)}function c(l,d,h){if(h===0)return;let u,p;if(i)u=r,p="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](s,l,d,h),t.update(d,s,h)}this.setMode=a,this.render=o,this.renderInstances=c}function _f(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(y){if(y==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),h=r.getParameter(35660),u=r.getParameter(3379),p=r.getParameter(34076),m=r.getParameter(34921),v=r.getParameter(36347),x=r.getParameter(36348),g=r.getParameter(36349),f=h>0,M=a||e.has("OES_texture_float"),b=f&&M,w=a?r.getParameter(36183):0;return{isWebGL2:a,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:d,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:f,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:w}}function bf(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ht,o=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u,p){const m=h.length!==0||u||n!==0||i;return i=u,t=d(h,p,0),n=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,u,p){const m=h.clippingPlanes,v=h.clipIntersection,x=h.clipShadows,g=r.get(h);if(!i||m===null||m.length===0||s&&!x)s?d(null):l();else{const f=s?0:n,M=f*4;let b=g.clippingState||null;c.value=b,b=d(m,u,M,p);for(let w=0;w!==M;++w)b[w]=t[w];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=f}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,p,m){const v=h!==null?h.length:0;let x=null;if(v!==0){if(x=c.value,m!==!0||x===null){const g=p+v*4,f=u.matrixWorldInverse;o.getNormalMatrix(f),(x===null||x.length<g)&&(x=new Float32Array(g));for(let M=0,b=p;M!==v;++M,b+=4)a.copy(h[M]).applyMatrix4(f,o),a.normal.toArray(x,b),x[b+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function wf(r){let e=new WeakMap;function t(a,o){return o===Yr?a.mapping=or:o===Zr&&(a.mapping=cr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yr||o===Zr)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=r.getRenderTarget(),d=new Wc(c.height/2);return d.fromEquirectangularTexture(r,a),e.set(a,d),r.setRenderTarget(l),a.addEventListener("dispose",i),t(d.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}function Mf(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ef(r,e,t,n){const i={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const m in u)e.update(u[m],34962);const p=h.morphAttributes;for(const m in p){const v=p[m];for(let x=0,g=v.length;x<g;x++)e.update(v[x],34962)}}function l(h){const u=[],p=h.index,m=h.attributes.position;let v=0;if(p!==null){const f=p.array;v=p.version;for(let M=0,b=f.length;M<b;M+=3){const w=f[M+0],y=f[M+1],I=f[M+2];u.push(w,y,y,I,I,w)}}else{const f=m.array;v=m.version;for(let M=0,b=f.length/3-1;M<b;M+=3){const w=M+0,y=M+1,I=M+2;u.push(w,y,y,I,I,w)}}const x=new(Vc(u)>65535?Hc:kc)(u,1);x.version=v;const g=s.get(h);g&&e.remove(g),s.set(h,x)}function d(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:d}}function Sf(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}let o,c;function l(u){o=u.type,c=u.bytesPerElement}function d(u,p){r.drawElements(s,p,o,u*c),t.update(p,s,1)}function h(u,p,m){if(m===0)return;let v,x;if(i)v=r,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,p,o,u*c,m),t.update(p,s,m)}this.setMode=a,this.setIndex=l,this.render=d,this.renderInstances=h}function Af(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Tf(r,e){return r[0]-e[0]}function Cf(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Lf(r){const e={},t=new Float32Array(8),n=[];for(let s=0;s<8;s++)n[s]=[s,0];function i(s,a,o,c){const l=s.morphTargetInfluences,d=l===void 0?0:l.length;let h=e[a.id];if(h===void 0){h=[];for(let x=0;x<d;x++)h[x]=[x,0];e[a.id]=h}for(let x=0;x<d;x++){const g=h[x];g[0]=x,g[1]=l[x]}h.sort(Cf);for(let x=0;x<8;x++)x<d&&h[x][1]?(n[x][0]=h[x][0],n[x][1]=h[x][1]):(n[x][0]=Number.MAX_SAFE_INTEGER,n[x][1]=0);n.sort(Tf);const u=o.morphTargets&&a.morphAttributes.position,p=o.morphNormals&&a.morphAttributes.normal;let m=0;for(let x=0;x<8;x++){const g=n[x],f=g[0],M=g[1];f!==Number.MAX_SAFE_INTEGER&&M?(u&&a.getAttribute("morphTarget"+x)!==u[f]&&a.setAttribute("morphTarget"+x,u[f]),p&&a.getAttribute("morphNormal"+x)!==p[f]&&a.setAttribute("morphNormal"+x,p[f]),t[x]=M,m+=M):(u&&a.hasAttribute("morphTarget"+x)===!0&&a.deleteAttribute("morphTarget"+x),p&&a.hasAttribute("morphNormal"+x)===!0&&a.deleteAttribute("morphNormal"+x),t[x]=0)}const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(r,"morphTargetBaseInfluence",v),c.getUniforms().setValue(r,"morphTargetInfluences",t)}return{update:i}}function Rf(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,h=e.get(c,d);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Xc extends ut{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Xc.prototype.isDataTexture2DArray=!0;class Yc extends ut{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Yc.prototype.isDataTexture3D=!0;const Zc=new ut,Pf=new Xc,If=new Yc,Jc=new Xs,wo=[],Mo=[],Eo=new Float32Array(16),So=new Float32Array(9),Ao=new Float32Array(4);function mi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=wo[i];if(s===void 0&&(s=new Float32Array(i),wo[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function gt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function $c(r,e){let t=Mo[e];t===void 0&&(t=new Int32Array(e),Mo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Df(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Nf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;r.uniform2fv(this.addr,e),pt(t,e)}}function zf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;r.uniform3fv(this.addr,e),pt(t,e)}}function Ff(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;r.uniform4fv(this.addr,e),pt(t,e)}}function Bf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(gt(t,n))return;Ao.set(n),r.uniformMatrix2fv(this.addr,!1,Ao),pt(t,n)}}function Of(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(gt(t,n))return;So.set(n),r.uniformMatrix3fv(this.addr,!1,So),pt(t,n)}}function Gf(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(gt(t,n))return;Eo.set(n),r.uniformMatrix4fv(this.addr,!1,Eo),pt(t,n)}}function Uf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function kf(r,e){const t=this.cache;gt(t,e)||(r.uniform2iv(this.addr,e),pt(t,e))}function Hf(r,e){const t=this.cache;gt(t,e)||(r.uniform3iv(this.addr,e),pt(t,e))}function Vf(r,e){const t=this.cache;gt(t,e)||(r.uniform4iv(this.addr,e),pt(t,e))}function Wf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function qf(r,e){const t=this.cache;gt(t,e)||(r.uniform2uiv(this.addr,e),pt(t,e))}function jf(r,e){const t=this.cache;gt(t,e)||(r.uniform3uiv(this.addr,e),pt(t,e))}function Xf(r,e){const t=this.cache;gt(t,e)||(r.uniform4uiv(this.addr,e),pt(t,e))}function Yf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Zc,i)}function Zf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||If,i)}function Jf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Jc,i)}function $f(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pf,i)}function Qf(r){switch(r){case 5126:return Df;case 35664:return Nf;case 35665:return zf;case 35666:return Ff;case 35674:return Bf;case 35675:return Of;case 35676:return Gf;case 5124:case 35670:return Uf;case 35667:case 35671:return kf;case 35668:case 35672:return Hf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return qf;case 36295:return jf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return $f}}function Kf(r,e){r.uniform1fv(this.addr,e)}function em(r,e){const t=mi(e,this.size,2);r.uniform2fv(this.addr,t)}function tm(r,e){const t=mi(e,this.size,3);r.uniform3fv(this.addr,t)}function nm(r,e){const t=mi(e,this.size,4);r.uniform4fv(this.addr,t)}function im(r,e){const t=mi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sm(r,e){const t=mi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function am(r,e){const t=mi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rm(r,e){r.uniform1iv(this.addr,e)}function om(r,e){r.uniform2iv(this.addr,e)}function cm(r,e){r.uniform3iv(this.addr,e)}function lm(r,e){r.uniform4iv(this.addr,e)}function dm(r,e){r.uniform1uiv(this.addr,e)}function um(r,e){r.uniform2uiv(this.addr,e)}function hm(r,e){r.uniform3uiv(this.addr,e)}function pm(r,e){r.uniform4uiv(this.addr,e)}function fm(r,e,t){const n=e.length,i=$c(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||Zc,i[s])}function mm(r,e,t){const n=e.length,i=$c(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||Jc,i[s])}function gm(r){switch(r){case 5126:return Kf;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return am;case 5124:case 35670:return rm;case 35667:case 35671:return om;case 35668:case 35672:return cm;case 35669:case 35673:return lm;case 5125:return dm;case 36294:return um;case 36295:return hm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35680:case 36300:case 36308:case 36293:return mm}}function vm(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=Qf(e.type)}function Qc(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=gm(e.type)}Qc.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),pt(e,r)};function Kc(r){this.id=r,this.seq=[],this.map={}}Kc.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,e[a.id],t)}};const Pa=/(\w+)(\])?(\[|\.)?/g;function To(r,e){r.seq.push(e),r.map[e.id]=e}function xm(r,e,t){const n=r.name,i=n.length;for(Pa.lastIndex=0;;){const s=Pa.exec(n),a=Pa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){To(t,l===void 0?new vm(o,r,e):new Qc(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Kc(o),To(t,h)),t=h}}}function mn(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);xm(i,s,this)}}mn.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};mn.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};mn.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}};mn.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function Co(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let ym=0;function _m(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function el(r){switch(r){case Zi:return["Linear","( value )"];case Oc:return["sRGB","( value )"];case vu:return["RGBE","( value )"];case yu:return["RGBM","( value, 7.0 )"];case _u:return["RGBM","( value, 16.0 )"];case bu:return["RGBD","( value, 256.0 )"];case gu:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case xu:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Lo(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=r.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+_m(s)}function Mi(r,e){const t=el(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function bm(r,e){const t=el(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function wm(r,e){let t;switch(e){case md:t="Linear";break;case gd:t="Reinhard";break;case vd:t="OptimizedCineon";break;case xd:t="ACESFilmic";break;case yd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Mm(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zi).join(`
`)}function Em(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sm(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const a=r.getActiveAttrib(e,i).name;t[a]=r.getAttribLocation(e,a)}return t}function zi(r){return r!==""}function Ro(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Po(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(r){return r.replace(Am,Tm)}function Tm(r,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Qa(t)}const Cm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Io(r){return r.replace(Lm,tl).replace(Cm,Rm)}function Rm(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),tl(r,e,t,n)}function tl(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Do(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Im(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case or:case cr:e="ENVMAP_TYPE_CUBE";break;case lr:case dr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case cr:case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function Nm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case js:e="ENVMAP_BLENDING_MULTIPLY";break;case pd:e="ENVMAP_BLENDING_MIX";break;case fd:e="ENVMAP_BLENDING_ADD";break}return e}function zm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Pm(t),l=Im(t),d=Dm(t),h=Nm(t),u=r.gammaFactor>0?r.gammaFactor:1,p=t.isWebGL2?"":Mm(t),m=Em(s),v=i.createProgram();let x,g,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[m].filter(zi).join(`
`),x.length>0&&(x+=`
`),g=[p,m].filter(zi).join(`
`),g.length>0&&(g+=`
`)):(x=[Do(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+u,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),g=[p,Do(t),"#define SHADER_NAME "+t.shaderName,m,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?Le.tonemapping_pars_fragment:"",t.toneMapping!==Oi?wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Le.encodings_pars_fragment,t.map?Mi("mapTexelToLinear",t.mapEncoding):"",t.matcap?Mi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Mi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Mi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Mi("lightMapTexelToLinear",t.lightMapEncoding):"",bm("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),a=Qa(a),a=Ro(a,t),a=Po(a,t),o=Qa(o),o=Ro(o,t),o=Po(o,t),a=Io(a),o=Io(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,x=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===co?"":"out highp vec4 pc_fragColor;",t.glslVersion===co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=f+x+a,b=f+g+o,w=Co(i,35633,M),y=Co(i,35632,b);if(i.attachShader(v,w),i.attachShader(v,y),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),r.debug.checkShaderErrors){const B=i.getProgramInfoLog(v).trim(),F=i.getShaderInfoLog(w).trim(),G=i.getShaderInfoLog(y).trim();let O=!0,S=!0;if(i.getProgramParameter(v,35714)===!1){O=!1;const R=Lo(i,w,"vertex"),P=Lo(i,y,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(v,35715),"gl.getProgramInfoLog",B,R,P)}else B!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",B):(F===""||G==="")&&(S=!1);S&&(this.diagnostics={runnable:O,programLog:B,vertexShader:{log:F,prefix:x},fragmentShader:{log:G,prefix:g}})}i.deleteShader(w),i.deleteShader(y);let I;this.getUniforms=function(){return I===void 0&&(I=new mn(i,v)),I};let z;return this.getAttributes=function(){return z===void 0&&(z=Sm(i,v)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=ym++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=y,this}function Fm(r,e,t,n,i,s){const a=[],o=n.isWebGL2,c=n.logarithmicDepthBuffer,l=n.floatVertexTextures,d=n.maxVertexUniforms,h=n.vertexTextures;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function v(y){const z=y.skeleton.bones;if(l)return 1024;{const F=Math.floor((d-20)/4),G=Math.min(F,z.length);return G<z.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+z.length+" bones. This GPU supports "+G+"."),0):G}}function x(y){let I;return y&&y.isTexture?I=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),I=y.texture.encoding):I=Zi,I}function g(y,I,z,B,F){const G=B.fog,O=y.isMeshStandardMaterial?B.environment:null,S=e.get(y.envMap||O),R=p[y.type],P=F.isSkinnedMesh?v(F):0;y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let C,Z;if(R){const re=Vt[R];C=re.vertexShader,Z=re.fragmentShader}else C=y.vertexShader,Z=y.fragmentShader;const $=r.getRenderTarget();return{isWebGL2:o,shaderID:R,shaderName:y.type,vertexShader:C,fragmentShader:Z,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:h,outputEncoding:$!==null?x($.texture):r.outputEncoding,map:!!y.map,mapEncoding:x(y.map),matcap:!!y.matcap,matcapEncoding:x(y.matcap),envMap:!!S,envMapMode:S&&S.mapping,envMapEncoding:x(S),envMapCubeUV:!!S&&(S.mapping===lr||S.mapping===dr),lightMap:!!y.lightMap,lightMapEncoding:x(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:x(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Eu,tangentSpaceNormalMap:y.normalMapType===ui,clearcoatMap:!!y.clearcoatMap,clearcoatRoughnessMap:!!y.clearcoatRoughnessMap,clearcoatNormalMap:!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,alphaMap:!!y.alphaMap,gradientMap:!!y.gradientMap,sheen:!!y.sheen,transmissionMap:!!y.transmissionMap,combine:y.combine,vertexTangents:y.normalMap&&y.vertexTangents,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&F.geometry&&F.geometry.attributes.color&&F.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.transmissionMap)&&!!y.displacementMap,fog:!!G,useFog:y.fog,fogExp2:G&&G.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:c,skinning:y.skinning&&P>0,maxBones:P,useVertexTexture:l,morphTargets:y.morphTargets,morphNormals:y.morphNormals,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:Oi,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,alphaTest:y.alphaTest,doubleSided:y.side===qs,flipSided:y.side===st,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:o||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:o||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:o||t.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const I=[];if(y.shaderID?I.push(y.shaderID):(I.push(y.fragmentShader),I.push(y.vertexShader)),y.defines!==void 0)for(const z in y.defines)I.push(z),I.push(y.defines[z]);if(y.isRawShaderMaterial===!1){for(let z=0;z<m.length;z++)I.push(y[m[z]]);I.push(r.outputEncoding),I.push(r.gammaFactor)}return I.push(y.customProgramCacheKey),I.join()}function M(y){const I=p[y.type];let z;if(I){const B=Vt[I];z=Wu.clone(B.uniforms)}else z=y.uniforms;return z}function b(y,I){let z;for(let B=0,F=a.length;B<F;B++){const G=a[B];if(G.cacheKey===I){z=G,++z.usedTimes;break}}return z===void 0&&(z=new zm(r,I,y,i),a.push(z)),z}function w(y){if(--y.usedTimes===0){const I=a.indexOf(y);a[I]=a[a.length-1],a.pop(),y.destroy()}}return{getParameters:g,getProgramCacheKey:f,getUniforms:M,acquireProgram:b,releaseProgram:w,programs:a}}function Bm(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Om(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function No(r){const e=[];let t=0;const n=[],i=[],s={id:-1};function a(){t=0,n.length=0,i.length=0}function o(u,p,m,v,x,g){let f=e[t];const M=r.get(m);return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,program:M.program||s,groupOrder:v,renderOrder:u.renderOrder,z:x,group:g},e[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.program=M.program||s,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=x,f.group=g),t++,f}function c(u,p,m,v,x,g){const f=o(u,p,m,v,x,g);(m.transparent===!0?i:n).push(f)}function l(u,p,m,v,x,g){const f=o(u,p,m,v,x,g);(m.transparent===!0?i:n).unshift(f)}function d(u,p){n.length>1&&n.sort(u||Om),i.length>1&&i.sort(p||Gm)}function h(){for(let u=t,p=e.length;u<p;u++){const m=e[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:n,transparent:i,init:a,push:c,unshift:l,finish:h,sort:d}}function Um(r){let e=new WeakMap;function t(i,s){let a;return e.has(i)===!1?(a=new No(r),e.set(i,[a])):s>=e.get(i).length?(a=new No(r),e.get(i).push(a)):a=e.get(i)[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function km(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ve};break;case"SpotLight":t={position:new L,direction:new L,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function Hm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Vm=0;function Wm(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function qm(r,e){const t=new km,n=Hm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)i.probe.push(new L);const s=new L,a=new ye,o=new ye;function c(d){let h=0,u=0,p=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let m=0,v=0,x=0,g=0,f=0,M=0,b=0,w=0;d.sort(Wm);for(let I=0,z=d.length;I<z;I++){const B=d[I],F=B.color,G=B.intensity,O=B.distance,S=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=F.r*G,u+=F.g*G,p+=F.b*G;else if(B.isLightProbe)for(let R=0;R<9;R++)i.probe[R].addScaledVector(B.sh.coefficients[R],G);else if(B.isDirectionalLight){const R=t.get(B);if(R.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const P=B.shadow,C=n.get(B);C.shadowBias=P.bias,C.shadowNormalBias=P.normalBias,C.shadowRadius=P.radius,C.shadowMapSize=P.mapSize,i.directionalShadow[m]=C,i.directionalShadowMap[m]=S,i.directionalShadowMatrix[m]=B.shadow.matrix,M++}i.directional[m]=R,m++}else if(B.isSpotLight){const R=t.get(B);if(R.position.setFromMatrixPosition(B.matrixWorld),R.color.copy(F).multiplyScalar(G),R.distance=O,R.coneCos=Math.cos(B.angle),R.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),R.decay=B.decay,B.castShadow){const P=B.shadow,C=n.get(B);C.shadowBias=P.bias,C.shadowNormalBias=P.normalBias,C.shadowRadius=P.radius,C.shadowMapSize=P.mapSize,i.spotShadow[x]=C,i.spotShadowMap[x]=S,i.spotShadowMatrix[x]=B.shadow.matrix,w++}i.spot[x]=R,x++}else if(B.isRectAreaLight){const R=t.get(B);R.color.copy(F).multiplyScalar(G),R.halfWidth.set(B.width*.5,0,0),R.halfHeight.set(0,B.height*.5,0),i.rectArea[g]=R,g++}else if(B.isPointLight){const R=t.get(B);if(R.color.copy(B.color).multiplyScalar(B.intensity),R.distance=B.distance,R.decay=B.decay,B.castShadow){const P=B.shadow,C=n.get(B);C.shadowBias=P.bias,C.shadowNormalBias=P.normalBias,C.shadowRadius=P.radius,C.shadowMapSize=P.mapSize,C.shadowCameraNear=P.camera.near,C.shadowCameraFar=P.camera.far,i.pointShadow[v]=C,i.pointShadowMap[v]=S,i.pointShadowMatrix[v]=B.shadow.matrix,b++}i.point[v]=R,v++}else if(B.isHemisphereLight){const R=t.get(B);R.skyColor.copy(B.color).multiplyScalar(G),R.groundColor.copy(B.groundColor).multiplyScalar(G),i.hemi[f]=R,f++}}g>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;const y=i.hash;(y.directionalLength!==m||y.pointLength!==v||y.spotLength!==x||y.rectAreaLength!==g||y.hemiLength!==f||y.numDirectionalShadows!==M||y.numPointShadows!==b||y.numSpotShadows!==w)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotShadowMatrix.length=w,y.directionalLength=m,y.pointLength=v,y.spotLength=x,y.rectAreaLength=g,y.hemiLength=f,y.numDirectionalShadows=M,y.numPointShadows=b,y.numSpotShadows=w,i.version=Vm++)}function l(d,h){let u=0,p=0,m=0,v=0,x=0;const g=h.matrixWorldInverse;for(let f=0,M=d.length;f<M;f++){const b=d[f];if(b.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),u++}else if(b.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),m++}else if(b.isRectAreaLight){const w=i.rectArea[v];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),o.identity(),a.copy(b.matrixWorld),a.premultiply(g),o.extractRotation(a),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),p++}else if(b.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(g),w.direction.normalize(),x++}}}return{setup:c,setupView:l,state:i}}function zo(r,e){const t=new qm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(){t.setup(n)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function jm(r,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new zo(r,e),t.set(s,[o])):a>=t.get(s).length?(o=new zo(r,e),t.get(s).push(o)):o=t.get(s)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class nl extends rt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=wu,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}nl.prototype.isMeshDepthMaterial=!0;class il extends rt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}il.prototype.isMeshDistanceMaterial=!0;var Xm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function sl(r,e,t){let n=new Ys;const i=new se,s=new se,a=new Ge,o=[],c=[],l={},d=t.maxTextureSize,h={0:st,1:Ws,2:qs},u=new Rn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Ym,fragmentShader:Xm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new Ue;m.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mt(m,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic,this.render=function(y,I,z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;const B=r.getRenderTarget(),F=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Fi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let S=0,R=y.length;S<R;S++){const P=y[S],C=P.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;i.copy(C.mapSize);const Z=C.getFrameExtents();if(i.multiply(Z),s.copy(C.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/Z.x),i.x=s.x*Z.x,C.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/Z.y),i.y=s.y*Z.y,C.mapSize.y=s.y)),C.map===null&&!C.isPointLightShadow&&this.type===Ni){const Y={minFilter:At,magFilter:At,format:Ft};C.map=new Ln(i.x,i.y,Y),C.map.texture.name=P.name+".shadowMap",C.mapPass=new Ln(i.x,i.y,Y),C.camera.updateProjectionMatrix()}if(C.map===null){const Y={minFilter:mt,magFilter:mt,format:Ft};C.map=new Ln(i.x,i.y,Y),C.map.texture.name=P.name+".shadowMap",C.camera.updateProjectionMatrix()}r.setRenderTarget(C.map),r.clear();const $=C.getViewportCount();for(let Y=0;Y<$;Y++){const re=C.getViewport(Y);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),O.viewport(a),C.updateMatrices(P,Y),n=C.getFrustum(),w(I,z,C.camera,P,this.type)}!C.isPointLightShadow&&this.type===Ni&&g(C,z),C.needsUpdate=!1}x.needsUpdate=!1,r.setRenderTarget(B,F,G)};function g(y,I){const z=e.update(v);u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(I,null,z,u,v,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(I,null,z,p,v,null)}function f(y,I,z){const B=y<<0|I<<1|z<<2;let F=o[B];return F===void 0&&(F=new nl({depthPacking:Mu,morphTargets:y,skinning:I}),o[B]=F),F}function M(y,I,z){const B=y<<0|I<<1|z<<2;let F=c[B];return F===void 0&&(F=new il({morphTargets:y,skinning:I}),c[B]=F),F}function b(y,I,z,B,F,G,O){let S=null,R=f,P=y.customDepthMaterial;if(B.isPointLight===!0&&(R=M,P=y.customDistanceMaterial),P===void 0){let C=!1;z.morphTargets===!0&&(C=I.morphAttributes&&I.morphAttributes.position&&I.morphAttributes.position.length>0);let Z=!1;y.isSkinnedMesh===!0&&(z.skinning===!0?Z=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",y));const $=y.isInstancedMesh===!0;S=R(C,Z,$)}else S=P;if(r.localClippingEnabled&&z.clipShadows===!0&&z.clippingPlanes.length!==0){const C=S.uuid,Z=z.uuid;let $=l[C];$===void 0&&($={},l[C]=$);let Y=$[Z];Y===void 0&&(Y=S.clone(),$[Z]=Y),S=Y}return S.visible=z.visible,S.wireframe=z.wireframe,O===Ni?S.side=z.shadowSide!==null?z.shadowSide:z.side:S.side=z.shadowSide!==null?z.shadowSide:h[z.side],S.clipShadows=z.clipShadows,S.clippingPlanes=z.clippingPlanes,S.clipIntersection=z.clipIntersection,S.wireframeLinewidth=z.wireframeLinewidth,S.linewidth=z.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0&&(S.referencePosition.setFromMatrixPosition(B.matrixWorld),S.nearDistance=F,S.farDistance=G),S}function w(y,I,z,B,F){if(y.visible===!1)return;if(y.layers.test(I.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&F===Ni)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld);const S=e.update(y),R=y.material;if(Array.isArray(R)){const P=S.groups;for(let C=0,Z=P.length;C<Z;C++){const $=P[C],Y=R[$.materialIndex];if(Y&&Y.visible){const re=b(y,S,Y,B,z.near,z.far,F);r.renderBufferDirect(z,null,S,re,y,$)}}}else if(R.visible){const P=b(y,S,R,B,z.near,z.far,F);r.renderBufferDirect(z,null,S,P,y,null)}}const O=y.children;for(let S=0,R=O.length;S<R;S++)w(O[S],I,z,B,F)}}function Zm(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const te=new Ge;let ie=null;const pe=new Ge(0,0,0,0);return{setMask:function(ee){ie!==ee&&!D&&(r.colorMask(ee,ee,ee,ee),ie=ee)},setLocked:function(ee){D=ee},setClear:function(ee,xe,Ie,ze,ot){ot===!0&&(ee*=ze,xe*=ze,Ie*=ze),te.set(ee,xe,Ie,ze),pe.equals(te)===!1&&(r.clearColor(ee,xe,Ie,ze),pe.copy(te))},reset:function(){D=!1,ie=null,pe.set(-1,0,0,0)}}}function s(){let D=!1,te=null,ie=null,pe=null;return{setTest:function(ee){ee?ne(2929):fe(2929)},setMask:function(ee){te!==ee&&!D&&(r.depthMask(ee),te=ee)},setFunc:function(ee){if(ie!==ee){if(ee)switch(ee){case rd:r.depthFunc(512);break;case od:r.depthFunc(519);break;case cd:r.depthFunc(513);break;case Ya:r.depthFunc(515);break;case ld:r.depthFunc(514);break;case dd:r.depthFunc(518);break;case ud:r.depthFunc(516);break;case hd:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);ie=ee}},setLocked:function(ee){D=ee},setClear:function(ee){pe!==ee&&(r.clearDepth(ee),pe=ee)},reset:function(){D=!1,te=null,ie=null,pe=null}}}function a(){let D=!1,te=null,ie=null,pe=null,ee=null,xe=null,Ie=null,ze=null,ot=null;return{setTest:function(Xe){D||(Xe?ne(2960):fe(2960))},setMask:function(Xe){te!==Xe&&!D&&(r.stencilMask(Xe),te=Xe)},setFunc:function(Xe,Xt,Ct){(ie!==Xe||pe!==Xt||ee!==Ct)&&(r.stencilFunc(Xe,Xt,Ct),ie=Xe,pe=Xt,ee=Ct)},setOp:function(Xe,Xt,Ct){(xe!==Xe||Ie!==Xt||ze!==Ct)&&(r.stencilOp(Xe,Xt,Ct),xe=Xe,Ie=Xt,ze=Ct)},setLocked:function(Xe){D=Xe},setClear:function(Xe){ot!==Xe&&(r.clearStencil(Xe),ot=Xe)},reset:function(){D=!1,te=null,ie=null,pe=null,ee=null,xe=null,Ie=null,ze=null,ot=null}}}const o=new i,c=new s,l=new a;let d={},h=null,u={},p=null,m=!1,v=null,x=null,g=null,f=null,M=null,b=null,w=null,y=!1,I=null,z=null,B=null,F=null,G=null;const O=r.getParameter(35661);let S=!1,R=0;const P=r.getParameter(7938);P.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(P)[1]),S=R>=1):P.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),S=R>=2);let C=null,Z={};const $=new Ge(0,0,r.canvas.width,r.canvas.height),Y=new Ge(0,0,r.canvas.width,r.canvas.height);function re(D,te,ie){const pe=new Uint8Array(4),ee=r.createTexture();r.bindTexture(D,ee),r.texParameteri(D,10241,9728),r.texParameteri(D,10240,9728);for(let xe=0;xe<ie;xe++)r.texImage2D(te+xe,0,6408,1,1,0,6408,5121,pe);return ee}const ae={};ae[3553]=re(3553,3553,1),ae[34067]=re(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ne(2929),c.setFunc(Ya),Te(!1),V(Hr),ne(2884),Ce(Fi);function ne(D){d[D]!==!0&&(r.enable(D),d[D]=!0)}function fe(D){d[D]!==!1&&(r.disable(D),d[D]=!1)}function J(D){D!==h&&(r.bindFramebuffer(36160,D),h=D)}function Re(D,te){te===null&&h!==null&&(te=h),u[D]!==te&&(r.bindFramebuffer(D,te),u[D]=te,n&&(D===36009&&(u[36160]=te),D===36160&&(u[36009]=te)))}function Se(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const ge={[ti]:32774,[Zl]:32778,[Jl]:32779};if(n)ge[jr]=32775,ge[Xr]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(ge[jr]=D.MIN_EXT,ge[Xr]=D.MAX_EXT)}const me={[$l]:0,[Ql]:1,[Kl]:768,[Nc]:770,[ad]:776,[id]:774,[td]:772,[ed]:769,[zc]:771,[sd]:775,[nd]:773};function Ce(D,te,ie,pe,ee,xe,Ie,ze){if(D===Fi){m===!0&&(fe(3042),m=!1);return}if(m===!1&&(ne(3042),m=!0),D!==Yl){if(D!==v||ze!==y){if((x!==ti||M!==ti)&&(r.blendEquation(32774),x=ti,M=ti),ze)switch(D){case Bi:r.blendFuncSeparate(1,771,1,771);break;case Vr:r.blendFunc(1,1);break;case Wr:r.blendFuncSeparate(0,0,769,771);break;case qr:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Bi:r.blendFuncSeparate(770,771,1,771);break;case Vr:r.blendFunc(770,1);break;case Wr:r.blendFunc(0,769);break;case qr:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,f=null,b=null,w=null,v=D,y=ze}return}ee=ee||te,xe=xe||ie,Ie=Ie||pe,(te!==x||ee!==M)&&(r.blendEquationSeparate(ge[te],ge[ee]),x=te,M=ee),(ie!==g||pe!==f||xe!==b||Ie!==w)&&(r.blendFuncSeparate(me[ie],me[pe],me[xe],me[Ie]),g=ie,f=pe,b=xe,w=Ie),v=D,y=null}function Me(D,te){D.side===qs?fe(2884):ne(2884);let ie=D.side===st;te&&(ie=!ie),Te(ie),D.blending===Bi&&D.transparent===!1?Ce(Fi):Ce(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),o.setMask(D.colorWrite);const pe=D.stencilWrite;l.setTest(pe),pe&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),W(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(32926):fe(32926)}function Te(D){I!==D&&(D?r.frontFace(2304):r.frontFace(2305),I=D)}function V(D){D!==ql?(ne(2884),D!==z&&(D===Hr?r.cullFace(1029):D===jl?r.cullFace(1028):r.cullFace(1032))):fe(2884),z=D}function k(D){D!==B&&(S&&r.lineWidth(D),B=D)}function W(D,te,ie){D?(ne(32823),(F!==te||G!==ie)&&(r.polygonOffset(te,ie),F=te,G=ie)):fe(32823)}function K(D){D?ne(3089):fe(3089)}function j(D){D===void 0&&(D=33984+O-1),C!==D&&(r.activeTexture(D),C=D)}function T(D,te){C===null&&j();let ie=Z[C];ie===void 0&&(ie={type:void 0,texture:void 0},Z[C]=ie),(ie.type!==D||ie.texture!==te)&&(r.bindTexture(D,te||ae[D]),ie.type=D,ie.texture=te)}function E(){const D=Z[C];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function H(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(D){$.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function _e(D){Y.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function N(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},C=null,Z={},h=null,u={},p=null,m=!1,v=null,x=null,g=null,f=null,M=null,b=null,w=null,y=!1,I=null,z=null,B=null,F=null,G=null,$.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:ne,disable:fe,bindFramebuffer:Re,bindXRFramebuffer:J,useProgram:Se,setBlending:Ce,setMaterial:Me,setFlipSided:Te,setCullFace:V,setLineWidth:k,setPolygonOffset:W,setScissorTest:K,activeTexture:j,bindTexture:T,unbindTexture:E,compressedTexImage2D:H,texImage2D:X,texImage3D:oe,scissor:de,viewport:_e,reset:N}}function Jm(r,e,t,n,i,s,a){const o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,d=i.maxTextureSize,h=i.maxSamples,u=new WeakMap;let p,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,E){return m?new OffscreenCanvas(T,E):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function x(T,E,H,X){let oe=1;if((T.width>X||T.height>X)&&(oe=X/Math.max(T.width,T.height)),oe<1||E===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const de=E?Cu:Math.floor,_e=de(oe*T.width),N=de(oe*T.height);p===void 0&&(p=v(_e,N));const D=H?v(_e,N):p;return D.width=_e,D.height=N,D.getContext("2d").drawImage(T,0,0,_e,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+_e+"x"+N+")."),D}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function g(T){return lo(T.width)&&lo(T.height)}function f(T){return o?!1:T.wrapS!==Nt||T.wrapT!==Nt||T.minFilter!==mt&&T.minFilter!==At}function M(T,E){return T.generateMipmaps&&E&&T.minFilter!==mt&&T.minFilter!==At}function b(T,E,H,X){r.generateMipmap(T);const oe=n.get(E);oe.__maxMipLevel=Math.log2(Math.max(H,X))}function w(T,E,H){if(o===!1)return E;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=E;return E===6403&&(H===5126&&(X=33326),H===5131&&(X=33325),H===5121&&(X=33321)),E===6407&&(H===5126&&(X=34837),H===5131&&(X=34843),H===5121&&(X=32849)),E===6408&&(H===5126&&(X=34836),H===5131&&(X=34842),H===5121&&(X=32856)),(X===33325||X===33326||X===34842||X===34836)&&e.get("EXT_color_buffer_float"),X}function y(T){return T===mt||T===Jr||T===$r?9728:9729}function I(T){const E=T.target;E.removeEventListener("dispose",I),B(E),E.isVideoTexture&&u.delete(E),a.memory.textures--}function z(T){const E=T.target;E.removeEventListener("dispose",z),F(E),a.memory.textures--}function B(T){const E=n.get(T);E.__webglInit!==void 0&&(r.deleteTexture(E.__webglTexture),n.remove(T))}function F(T){const E=T.texture,H=n.get(T),X=n.get(E);if(T){if(X.__webglTexture!==void 0&&r.deleteTexture(X.__webglTexture),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)r.deleteFramebuffer(H.__webglFramebuffer[oe]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[oe]);else r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer&&r.deleteRenderbuffer(H.__webglColorRenderbuffer),H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer);n.remove(E),n.remove(T)}}let G=0;function O(){G=0}function S(){const T=G;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),G+=1,T}function R(T,E){const H=n.get(T);if(T.isVideoTexture&&V(T),T.version>0&&H.__version!==T.version){const X=T.image;if(X===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(H,T,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,H.__webglTexture)}function P(T,E){const H=n.get(T);if(T.version>0&&H.__version!==T.version){ne(H,T,E);return}t.activeTexture(33984+E),t.bindTexture(35866,H.__webglTexture)}function C(T,E){const H=n.get(T);if(T.version>0&&H.__version!==T.version){ne(H,T,E);return}t.activeTexture(33984+E),t.bindTexture(32879,H.__webglTexture)}function Z(T,E){const H=n.get(T);if(T.version>0&&H.__version!==T.version){fe(H,T,E);return}t.activeTexture(33984+E),t.bindTexture(34067,H.__webglTexture)}const $={[Za]:10497,[Nt]:33071,[Ja]:33648},Y={[mt]:9728,[Jr]:9984,[$r]:9986,[At]:9729,[_d]:9985,[ur]:9987};function re(T,E,H){if(H?(r.texParameteri(T,10242,$[E.wrapS]),r.texParameteri(T,10243,$[E.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,$[E.wrapR]),r.texParameteri(T,10240,Y[E.magFilter]),r.texParameteri(T,10241,Y[E.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(E.wrapS!==Nt||E.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,y(E.magFilter)),r.texParameteri(T,10241,y(E.minFilter)),E.minFilter!==mt&&E.minFilter!==At&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");if(E.type===fn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Fs&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(T,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function ae(T,E){T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",I),T.__webglTexture=r.createTexture(),a.memory.textures++)}function ne(T,E,H){let X=3553;E.isDataTexture2DArray&&(X=35866),E.isDataTexture3D&&(X=32879),ae(T,E),t.activeTexture(33984+H),t.bindTexture(X,T.__webglTexture),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const oe=f(E)&&g(E.image)===!1,de=x(E.image,oe,!1,d),_e=g(de)||o,N=s.convert(E.format);let D=s.convert(E.type),te=w(E.internalFormat,N,D);re(X,E,_e);let ie;const pe=E.mipmaps;if(E.isDepthTexture)te=6402,o?E.type===fn?te=36012:E.type===Ns?te=33190:E.type===Gi?te=35056:te=33189:E.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ri&&te===6402&&E.type!==zs&&E.type!==Ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=zs,D=s.convert(E.type)),E.format===Vi&&te===6402&&(te=34041,E.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Gi,D=s.convert(E.type))),t.texImage2D(3553,0,te,de.width,de.height,0,N,D,null);else if(E.isDataTexture)if(pe.length>0&&_e){for(let ee=0,xe=pe.length;ee<xe;ee++)ie=pe[ee],t.texImage2D(3553,ee,te,ie.width,ie.height,0,N,D,ie.data);E.generateMipmaps=!1,T.__maxMipLevel=pe.length-1}else t.texImage2D(3553,0,te,de.width,de.height,0,N,D,de.data),T.__maxMipLevel=0;else if(E.isCompressedTexture){for(let ee=0,xe=pe.length;ee<xe;ee++)ie=pe[ee],E.format!==Ft&&E.format!==Cn?N!==null?t.compressedTexImage2D(3553,ee,te,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,ee,te,ie.width,ie.height,0,N,D,ie.data);T.__maxMipLevel=pe.length-1}else if(E.isDataTexture2DArray)t.texImage3D(35866,0,te,de.width,de.height,de.depth,0,N,D,de.data),T.__maxMipLevel=0;else if(E.isDataTexture3D)t.texImage3D(32879,0,te,de.width,de.height,de.depth,0,N,D,de.data),T.__maxMipLevel=0;else if(pe.length>0&&_e){for(let ee=0,xe=pe.length;ee<xe;ee++)ie=pe[ee],t.texImage2D(3553,ee,te,N,D,ie);E.generateMipmaps=!1,T.__maxMipLevel=pe.length-1}else t.texImage2D(3553,0,te,N,D,de),T.__maxMipLevel=0;M(E,_e)&&b(X,E,de.width,de.height),T.__version=E.version,E.onUpdate&&E.onUpdate(E)}function fe(T,E,H){if(E.image.length!==6)return;ae(T,E),t.activeTexture(33984+H),t.bindTexture(34067,T.__webglTexture),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const X=E&&(E.isCompressedTexture||E.image[0].isCompressedTexture),oe=E.image[0]&&E.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!X&&!oe?de[ee]=x(E.image[ee],!1,!0,l):de[ee]=oe?E.image[ee].image:E.image[ee];const _e=de[0],N=g(_e)||o,D=s.convert(E.format),te=s.convert(E.type),ie=w(E.internalFormat,D,te);re(34067,E,N);let pe;if(X){for(let ee=0;ee<6;ee++){pe=de[ee].mipmaps;for(let xe=0;xe<pe.length;xe++){const Ie=pe[xe];E.format!==Ft&&E.format!==Cn?D!==null?t.compressedTexImage2D(34069+ee,xe,ie,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+ee,xe,ie,Ie.width,Ie.height,0,D,te,Ie.data)}}T.__maxMipLevel=pe.length-1}else{pe=E.mipmaps;for(let ee=0;ee<6;ee++)if(oe){t.texImage2D(34069+ee,0,ie,de[ee].width,de[ee].height,0,D,te,de[ee].data);for(let xe=0;xe<pe.length;xe++){const ze=pe[xe].image[ee].image;t.texImage2D(34069+ee,xe+1,ie,ze.width,ze.height,0,D,te,ze.data)}}else{t.texImage2D(34069+ee,0,ie,D,te,de[ee]);for(let xe=0;xe<pe.length;xe++){const Ie=pe[xe];t.texImage2D(34069+ee,xe+1,ie,D,te,Ie.image[ee])}}T.__maxMipLevel=pe.length}M(E,N)&&b(34067,E,_e.width,_e.height),T.__version=E.version,E.onUpdate&&E.onUpdate(E)}function J(T,E,H,X){const oe=E.texture,de=s.convert(oe.format),_e=s.convert(oe.type),N=w(oe.internalFormat,de,_e);X===32879||X===35866?t.texImage3D(X,0,N,E.width,E.height,E.depth,0,de,_e,null):t.texImage2D(X,0,N,E.width,E.height,0,de,_e,null),t.bindFramebuffer(36160,T),r.framebufferTexture2D(36160,H,X,n.get(oe).__webglTexture,0),t.bindFramebuffer(36160,null)}function Re(T,E,H){if(r.bindRenderbuffer(36161,T),E.depthBuffer&&!E.stencilBuffer){let X=33189;if(H){const oe=E.depthTexture;oe&&oe.isDepthTexture&&(oe.type===fn?X=36012:oe.type===Ns&&(X=33190));const de=Te(E);r.renderbufferStorageMultisample(36161,de,X,E.width,E.height)}else r.renderbufferStorage(36161,X,E.width,E.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(E.depthBuffer&&E.stencilBuffer){if(H){const X=Te(E);r.renderbufferStorageMultisample(36161,X,35056,E.width,E.height)}else r.renderbufferStorage(36161,34041,E.width,E.height);r.framebufferRenderbuffer(36160,33306,36161,T)}else{const X=E.texture,oe=s.convert(X.format),de=s.convert(X.type),_e=w(X.internalFormat,oe,de);if(H){const N=Te(E);r.renderbufferStorageMultisample(36161,N,_e,E.width,E.height)}else r.renderbufferStorage(36161,_e,E.width,E.height)}r.bindRenderbuffer(36161,null)}function Se(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),R(E.depthTexture,0);const X=n.get(E.depthTexture).__webglTexture;if(E.depthTexture.format===ri)r.framebufferTexture2D(36160,36096,3553,X,0);else if(E.depthTexture.format===Vi)r.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function ge(T){const E=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Se(E.__webglFramebuffer,T)}else if(H){E.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(36160,E.__webglFramebuffer[X]),E.__webglDepthbuffer[X]=r.createRenderbuffer(),Re(E.__webglDepthbuffer[X],T,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Re(E.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function me(T){const E=T.texture,H=n.get(T),X=n.get(E);T.addEventListener("dispose",z),X.__webglTexture=r.createTexture(),X.__version=E.version,a.memory.textures++;const oe=T.isWebGLCubeRenderTarget===!0,de=T.isWebGLMultisampleRenderTarget===!0,_e=E.isDataTexture3D||E.isDataTexture2DArray,N=g(T)||o;if(o&&E.format===Cn&&(E.type===fn||E.type===Fs)&&(E.format=Ft,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),oe){H.__webglFramebuffer=[];for(let D=0;D<6;D++)H.__webglFramebuffer[D]=r.createFramebuffer()}else if(H.__webglFramebuffer=r.createFramebuffer(),de)if(o){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer);const D=s.convert(E.format),te=s.convert(E.type),ie=w(E.internalFormat,D,te),pe=Te(T);r.renderbufferStorageMultisample(36161,pe,ie,T.width,T.height),t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,H.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(oe){t.bindTexture(34067,X.__webglTexture),re(34067,E,N);for(let D=0;D<6;D++)J(H.__webglFramebuffer[D],T,36064,34069+D);M(E,N)&&b(34067,E,T.width,T.height),t.bindTexture(34067,null)}else{let D=3553;_e&&(o?D=E.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(D,X.__webglTexture),re(D,E,N),J(H.__webglFramebuffer,T,36064,D),M(E,N)&&b(3553,E,T.width,T.height),t.bindTexture(3553,null)}T.depthBuffer&&ge(T)}function Ce(T){const E=T.texture,H=g(T)||o;if(M(E,H)){const X=T.isWebGLCubeRenderTarget?34067:3553,oe=n.get(E).__webglTexture;t.bindTexture(X,oe),b(X,E,T.width,T.height),t.bindTexture(X,null)}}function Me(T){if(T.isWebGLMultisampleRenderTarget)if(o){const E=T.width,H=T.height;let X=16384;T.depthBuffer&&(X|=256),T.stencilBuffer&&(X|=1024);const oe=n.get(T);t.bindFramebuffer(36008,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,oe.__webglFramebuffer),r.blitFramebuffer(0,0,E,H,0,0,E,H,X,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,oe.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Te(T){return o&&T.isWebGLMultisampleRenderTarget?Math.min(h,T.samples):0}function V(T){const E=a.render.frame;u.get(T)!==E&&(u.set(T,E),T.update())}let k=!1,W=!1;function K(T,E){T&&T.isWebGLRenderTarget&&(k===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),k=!0),T=T.texture),R(T,E)}function j(T,E){T&&T.isWebGLCubeRenderTarget&&(W===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),W=!0),T=T.texture),Z(T,E)}this.allocateTextureUnit=S,this.resetTextureUnits=O,this.setTexture2D=R,this.setTexture2DArray=P,this.setTexture3D=C,this.setTextureCube=Z,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Me,this.safeSetTexture2D=K,this.safeSetTextureCube=j}function $m(r,e,t){const n=t.isWebGL2;function i(s){let a;if(s===hr)return 5121;if(s===Ed)return 32819;if(s===Sd)return 32820;if(s===Ad)return 33635;if(s===bd)return 5120;if(s===wd)return 5122;if(s===zs)return 5123;if(s===Md)return 5124;if(s===Ns)return 5125;if(s===fn)return 5126;if(s===Fs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Td)return 6406;if(s===Cn)return 6407;if(s===Ft)return 6408;if(s===Cd)return 6409;if(s===Ld)return 6410;if(s===ri)return 6402;if(s===Vi)return 34041;if(s===Rd)return 6403;if(s===Pd)return 36244;if(s===Id)return 33319;if(s===Dd)return 33320;if(s===Nd)return 36248;if(s===zd)return 36249;if(s===Qr||s===Kr||s===eo||s===to)if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===to)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===no||s===io||s===so||s===ao)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===no)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===io)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===so)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ao)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===ro||s===oo)&&(a=e.get("WEBGL_compressed_texture_etc"),a!==null)){if(s===ro)return a.COMPRESSED_RGB8_ETC2;if(s===oo)return a.COMPRESSED_RGBA8_ETC2_EAC}if(s===Bd||s===Od||s===Gd||s===Ud||s===kd||s===Hd||s===Vd||s===Wd||s===qd||s===jd||s===Xd||s===Yd||s===Zd||s===Jd||s===Qd||s===Kd||s===eu||s===tu||s===nu||s===iu||s===su||s===au||s===ru||s===ou||s===cu||s===lu||s===du||s===uu)return a=e.get("WEBGL_compressed_texture_astc"),a!==null?s:null;if(s===$d)return a=e.get("EXT_texture_compression_bptc"),a!==null?s:null;if(s===Gi)return n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class al extends _t{constructor(e=[]){super(),this.cameras=e}}al.prototype.isArrayCamera=!0;class si extends Fe{constructor(){super(),this.type="Group"}}si.prototype.isGroup=!0;const Qm={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qm))),l&&e.hand){a=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n);if(l.joints[v.jointName]===void 0){const f=new si;f.matrixAutoUpdate=!1,f.visible=!1,l.joints[v.jointName]=f,l.add(f)}const g=l.joints[v.jointName];x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=x.radius),g.visible=x!==null}const d=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,m=.005;l.inputState.pinching&&u>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}}class Km extends yn{constructor(e,t){super();const n=this,i=e.state;let s=null,a=1,o=null,c="local-floor",l=null;const d=[],h=new Map,u=new _t;u.layers.enable(1),u.viewport=new Ge;const p=new _t;p.layers.enable(2),p.viewport=new Ge;const m=[u,p],v=new al;v.layers.enable(1),v.layers.enable(2);let x=null,g=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let S=d[O];return S===void 0&&(S=new Ia,d[O]=S),S.getTargetRaySpace()},this.getControllerGrip=function(O){let S=d[O];return S===void 0&&(S=new Ia,d[O]=S),S.getGripSpace()},this.getHand=function(O){let S=d[O];return S===void 0&&(S=new Ia,d[O]=S),S.getHandSpace()};function f(O){const S=h.get(O.inputSource);S&&S.dispatchEvent({type:O.type,data:O.inputSource})}function M(){h.forEach(function(O,S){O.disconnect(S)}),h.clear(),x=null,g=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){c=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){s.addEventListener("select",f),s.addEventListener("selectstart",f),s.addEventListener("selectend",f),s.addEventListener("squeeze",f),s.addEventListener("squeezestart",f),s.addEventListener("squeezeend",f),s.addEventListener("end",M),s.addEventListener("inputsourceschange",b);const S=t.getContextAttributes();S.xrCompatible!==!0&&await t.makeXRCompatible();const R={antialias:S.antialias,alpha:S.alpha,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a},P=new XRWebGLLayer(s,t,R);s.updateRenderState({baseLayer:P}),o=await s.requestReferenceSpace(c),G.setContext(s),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function b(O){const S=s.inputSources;for(let R=0;R<d.length;R++)h.set(S[R],d[R]);for(let R=0;R<O.removed.length;R++){const P=O.removed[R],C=h.get(P);C&&(C.dispatchEvent({type:"disconnected",data:P}),h.delete(P))}for(let R=0;R<O.added.length;R++){const P=O.added[R],C=h.get(P);C&&C.dispatchEvent({type:"connected",data:P})}}const w=new L,y=new L;function I(O,S,R){w.setFromMatrixPosition(S.matrixWorld),y.setFromMatrixPosition(R.matrixWorld);const P=w.distanceTo(y),C=S.projectionMatrix.elements,Z=R.projectionMatrix.elements,$=C[14]/(C[10]-1),Y=C[14]/(C[10]+1),re=(C[9]+1)/C[5],ae=(C[9]-1)/C[5],ne=(C[8]-1)/C[0],fe=(Z[8]+1)/Z[0],J=$*ne,Re=$*fe,Se=P/(-ne+fe),ge=Se*-ne;S.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(ge),O.translateZ(Se),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const me=$+Se,Ce=Y+Se,Me=J-ge,Te=Re+(P-ge),V=re*Y/Ce*me,k=ae*Y/Ce*me;O.projectionMatrix.makePerspective(Me,Te,V,k,me,Ce)}function z(O,S){S===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(S.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.getCamera=function(O){v.near=p.near=u.near=O.near,v.far=p.far=u.far=O.far,(x!==v.near||g!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),x=v.near,g=v.far);const S=O.parent,R=v.cameras;z(v,S);for(let C=0;C<R.length;C++)z(R[C],S);O.matrixWorld.copy(v.matrixWorld),O.matrix.copy(v.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const P=O.children;for(let C=0,Z=P.length;C<Z;C++)P[C].updateMatrixWorld(!0);return R.length===2?I(v,u,p):v.projectionMatrix.copy(u.projectionMatrix),v};let B=null;function F(O,S){if(l=S.getViewerPose(o),l!==null){const P=l.views,C=s.renderState.baseLayer;i.bindXRFramebuffer(C.framebuffer);let Z=!1;P.length!==v.cameras.length&&(v.cameras.length=0,Z=!0);for(let $=0;$<P.length;$++){const Y=P[$],re=C.getViewport(Y),ae=m[$];ae.matrix.fromArray(Y.transform.matrix),ae.projectionMatrix.fromArray(Y.projectionMatrix),ae.viewport.set(re.x,re.y,re.width,re.height),$===0&&v.matrix.copy(ae.matrix),Z===!0&&v.cameras.push(ae)}}const R=s.inputSources;for(let P=0;P<d.length;P++){const C=d[P],Z=R[P];C.update(Z,S,o)}B&&B(O,S)}const G=new jc;G.setAnimationLoop(F),this.setAnimationLoop=function(O){B=O},this.dispose=function(){}}}function eg(r){function e(g,f){g.fogColor.value.copy(f.color),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function t(g,f,M,b){f.isMeshBasicMaterial?n(g,f):f.isMeshLambertMaterial?(n(g,f),c(g,f)):f.isMeshToonMaterial?(n(g,f),d(g,f)):f.isMeshPhongMaterial?(n(g,f),l(g,f)):f.isMeshStandardMaterial?(n(g,f),f.isMeshPhysicalMaterial?u(g,f):h(g,f)):f.isMeshMatcapMaterial?(n(g,f),p(g,f)):f.isMeshDepthMaterial?(n(g,f),m(g,f)):f.isMeshDistanceMaterial?(n(g,f),v(g,f)):f.isMeshNormalMaterial?(n(g,f),x(g,f)):f.isLineBasicMaterial?(i(g,f),f.isLineDashedMaterial&&s(g,f)):f.isPointsMaterial?a(g,f,M,b):f.isSpriteMaterial?o(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map),f.alphaMap&&(g.alphaMap.value=f.alphaMap),f.specularMap&&(g.specularMap.value=f.specularMap);const M=r.get(f).envMap;if(M){g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M._needsFlipEnvMap?-1:1,g.reflectivity.value=f.reflectivity,g.refractionRatio.value=f.refractionRatio;const y=r.get(M).__maxMipLevel;y!==void 0&&(g.maxMipLevel.value=y)}f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity);let b;f.map?b=f.map:f.specularMap?b=f.specularMap:f.displacementMap?b=f.displacementMap:f.normalMap?b=f.normalMap:f.bumpMap?b=f.bumpMap:f.roughnessMap?b=f.roughnessMap:f.metalnessMap?b=f.metalnessMap:f.alphaMap?b=f.alphaMap:f.emissiveMap?b=f.emissiveMap:f.clearcoatMap?b=f.clearcoatMap:f.clearcoatNormalMap?b=f.clearcoatNormalMap:f.clearcoatRoughnessMap&&(b=f.clearcoatRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),g.uvTransform.value.copy(b.matrix));let w;f.aoMap?w=f.aoMap:f.lightMap&&(w=f.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uv2Transform.value.copy(w.matrix))}function i(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity}function s(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function a(g,f,M,b){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*M,g.scale.value=b*.5,f.map&&(g.map.value=f.map),f.alphaMap&&(g.alphaMap.value=f.alphaMap);let w;f.map?w=f.map:f.alphaMap&&(w=f.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map),f.alphaMap&&(g.alphaMap.value=f.alphaMap);let M;f.map?M=f.map:f.alphaMap&&(M=f.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix))}function c(g,f){f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap)}function l(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap),f.bumpMap&&(g.bumpMap.value=f.bumpMap,g.bumpScale.value=f.bumpScale,f.side===st&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,g.normalScale.value.copy(f.normalScale),f.side===st&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap),f.bumpMap&&(g.bumpMap.value=f.bumpMap,g.bumpScale.value=f.bumpScale,f.side===st&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,g.normalScale.value.copy(f.normalScale),f.side===st&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias)}function h(g,f){g.roughness.value=f.roughness,g.metalness.value=f.metalness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap),f.bumpMap&&(g.bumpMap.value=f.bumpMap,g.bumpScale.value=f.bumpScale,f.side===st&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,g.normalScale.value.copy(f.normalScale),f.side===st&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),r.get(f).envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function u(g,f){h(g,f),g.reflectivity.value=f.reflectivity,g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.sheen&&g.sheen.value.copy(f.sheen),f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),g.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===st&&g.clearcoatNormalScale.value.negate()),g.transmission.value=f.transmission,f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap)}function p(g,f){f.matcap&&(g.matcap.value=f.matcap),f.bumpMap&&(g.bumpMap.value=f.bumpMap,g.bumpScale.value=f.bumpScale,f.side===st&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,g.normalScale.value.copy(f.normalScale),f.side===st&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias)}function m(g,f){f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias)}function v(g,f){f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),g.referencePosition.value.copy(f.referencePosition),g.nearDistance.value=f.nearDistance,g.farDistance.value=f.farDistance}function x(g,f){f.bumpMap&&(g.bumpMap.value=f.bumpMap,g.bumpScale.value=f.bumpScale,f.side===st&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,g.normalScale.value.copy(f.normalScale),f.side===st&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function tg(){const r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return r.style.display="block",r}function ke(r){r=r||{};const e=r.canvas!==void 0?r.canvas:tg(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,c=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",d=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h=null,u=null;const p=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Zi,this.physicallyCorrectLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1;const v=this;let x=!1,g=0,f=0,M=null,b=-1,w=null;const y=new Ge,I=new Ge;let z=null,B=e.width,F=e.height,G=1,O=null,S=null;const R=new Ge(0,0,B,F),P=new Ge(0,0,B,F);let C=!1;const Z=new Ys;let $=!1,Y=!1;const re=new ye,ae=new L,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return M===null?G:1}let J=t;function Re(A,q){for(let U=0;U<A.length;U++){const Q=A[U],le=e.getContext(Q,q);if(le!==null)return le}return null}try{const A={alpha:n,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:d};if(e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",Ie,!1),J===null){const q=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&q.shift(),J=Re(q,A),J===null)throw Re(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Se,ge,me,Ce,Me,Te,V,k,W,K,j,T,E,H,X,oe,de,_e,N,D,te,ie;function pe(){Se=new Mf(J),ge=new _f(J,Se,r),Se.init(ge),te=new $m(J,Se,ge),me=new Zm(J,Se,ge),Ce=new Af,Me=new Bm,Te=new Jm(J,Se,me,Me,ge,te,Ce),V=new wf(v),k=new Xu(J,ge),ie=new xf(J,Se,k,ge),W=new Ef(J,k,Ce,ie),K=new Rf(J,W,k,Ce),_e=new Lf(J),X=new bf(Me),j=new Fm(v,V,Se,ge,ie,X),T=new eg(Me),E=new Um(Me),H=new jm(Se,ge),de=new vf(v,V,me,K,o),oe=new sl(v,K,ge),N=new yf(J,Se,Ce,ge),D=new Sf(J,Se,Ce,ge),Ce.programs=j.programs,v.capabilities=ge,v.extensions=Se,v.properties=Me,v.renderLists=E,v.shadowMap=oe,v.state=me,v.info=Ce}pe();const ee=new Km(v,J);this.xr=ee,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const A=Se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(B,F,!1))},this.getSize=function(A){return A===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),A=new se),A.set(B,F)},this.setSize=function(A,q,U){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,F=q,e.width=Math.floor(A*G),e.height=Math.floor(q*G),U!==!1&&(e.style.width=A+"px",e.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),A=new se),A.set(B*G,F*G).floor()},this.setDrawingBufferSize=function(A,q,U){B=A,F=q,G=U,e.width=Math.floor(A*U),e.height=Math.floor(q*U),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),A=new Ge),A.copy(y)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,q,U,Q){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,q,U,Q),me.viewport(y.copy(R).multiplyScalar(G).floor())},this.getScissor=function(A){return A.copy(P)},this.setScissor=function(A,q,U,Q){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,q,U,Q),me.scissor(I.copy(P).multiplyScalar(G).floor())},this.getScissorTest=function(){return C},this.setScissorTest=function(A){me.setScissorTest(C=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){S=A},this.getClearColor=function(A){return A===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),A=new ve),A.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(A,q,U){let Q=0;(A===void 0||A)&&(Q|=16384),(q===void 0||q)&&(Q|=256),(U===void 0||U)&&(Q|=1024),J.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",Ie,!1),E.dispose(),H.dispose(),Me.dispose(),V.dispose(),K.dispose(),ie.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",zr),ee.removeEventListener("sessionend",Fr),bn.stop()};function xe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=Ce.autoReset,q=oe.enabled,U=oe.autoUpdate,Q=oe.needsUpdate,le=oe.type;pe(),Ce.autoReset=A,oe.enabled=q,oe.autoUpdate=U,oe.needsUpdate=Q,oe.type=le}function ze(A){const q=A.target;q.removeEventListener("dispose",ze),ot(q)}function ot(A){Xe(A),Me.remove(A)}function Xe(A){const q=Me.get(A).programs;q!==void 0&&q.forEach(function(U){j.releaseProgram(U)})}function Xt(A,q){A.render(function(U){v.renderBufferImmediate(U,q)})}this.renderBufferImmediate=function(A,q){ie.initAttributes();const U=Me.get(A);A.hasPositions&&!U.position&&(U.position=J.createBuffer()),A.hasNormals&&!U.normal&&(U.normal=J.createBuffer()),A.hasUvs&&!U.uv&&(U.uv=J.createBuffer()),A.hasColors&&!U.color&&(U.color=J.createBuffer());const Q=q.getAttributes();A.hasPositions&&(J.bindBuffer(34962,U.position),J.bufferData(34962,A.positionArray,35048),ie.enableAttribute(Q.position),J.vertexAttribPointer(Q.position,3,5126,!1,0,0)),A.hasNormals&&(J.bindBuffer(34962,U.normal),J.bufferData(34962,A.normalArray,35048),ie.enableAttribute(Q.normal),J.vertexAttribPointer(Q.normal,3,5126,!1,0,0)),A.hasUvs&&(J.bindBuffer(34962,U.uv),J.bufferData(34962,A.uvArray,35048),ie.enableAttribute(Q.uv),J.vertexAttribPointer(Q.uv,2,5126,!1,0,0)),A.hasColors&&(J.bindBuffer(34962,U.color),J.bufferData(34962,A.colorArray,35048),ie.enableAttribute(Q.color),J.vertexAttribPointer(Q.color,3,5126,!1,0,0)),ie.disableUnusedAttributes(),J.drawArrays(4,0,A.count),A.count=0},this.renderBufferDirect=function(A,q,U,Q,le,Pe){q===null&&(q=ne);const be=le.isMesh&&le.matrixWorld.determinant()<0,Ae=kr(A,q,Q,le);me.setMaterial(Q,be);let He=U.index;const Ee=U.attributes.position;if(He===null){if(Ee===void 0||Ee.count===0)return}else if(He.count===0)return;let De=1;Q.wireframe===!0&&(He=W.getWireframeAttribute(U),De=2),(Q.morphTargets||Q.morphNormals)&&_e.update(le,U,Q,Ae),ie.setup(le,Q,Ae,U,He);let we,Be=N;He!==null&&(we=k.get(He),Be=D,Be.setIndex(we));const Bt=He!==null?He.count:Ee.count,ft=U.drawRange.start*De,wn=U.drawRange.count*De,Ke=Pe!==null?Pe.start*De:0,Mn=Pe!==null?Pe.count*De:1/0,Je=Math.max(ft,Ke),ia=Math.min(Bt,ft+wn,Ke+Mn)-1,vt=Math.max(0,ia-Je+1);if(vt!==0){if(le.isMesh)Q.wireframe===!0?(me.setLineWidth(Q.wireframeLinewidth*fe()),Be.setMode(1)):Be.setMode(4);else if(le.isLine){let Yt=Q.linewidth;Yt===void 0&&(Yt=1),me.setLineWidth(Yt*fe()),le.isLineSegments?Be.setMode(1):le.isLineLoop?Be.setMode(2):Be.setMode(3)}else le.isPoints?Be.setMode(0):le.isSprite&&Be.setMode(4);if(le.isInstancedMesh)Be.renderInstances(Je,vt,le.count);else if(U.isInstancedBufferGeometry){const Yt=Math.min(U.instanceCount,U._maxInstanceCount);Be.renderInstances(Je,vt,Yt)}else Be.render(Je,vt)}},this.compile=function(A,q){u=H.get(A),u.init(),A.traverseVisible(function(U){U.isLight&&U.layers.test(q.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights(),A.traverse(function(U){const Q=U.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const Pe=Q[le];na(Pe,A,U)}else na(Q,A,U)})};let Ct=null;function Ul(A){Ct&&Ct(A)}function zr(){bn.stop()}function Fr(){bn.start()}const bn=new jc;bn.setAnimationLoop(Ul),typeof window<"u"&&bn.setContext(window),this.setAnimationLoop=function(A){Ct=A,ee.setAnimationLoop(A),A===null?bn.stop():bn.start()},ee.addEventListener("sessionstart",zr),ee.addEventListener("sessionend",Fr),this.render=function(A,q){let U,Q;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),U=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),Q=arguments[3]),q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(q=ee.getCamera(q)),A.isScene===!0&&A.onBeforeRender(v,A,q,U||M),u=H.get(A,m.length),u.init(),m.push(u),re.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Z.setFromProjectionMatrix(re),Y=this.localClippingEnabled,$=X.init(this.clippingPlanes,Y,q),h=E.get(A,p.length),h.init(),p.push(h),Br(A,q,0,v.sortObjects),h.finish(),v.sortObjects===!0&&h.sort(O,S),$===!0&&X.beginShadows();const le=u.state.shadowsArray;oe.render(le,A,q),u.setupLights(),u.setupLightsView(q),$===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),U!==void 0&&this.setRenderTarget(U),de.render(h,A,q,Q);const Pe=h.opaque,be=h.transparent;Pe.length>0&&Or(Pe,A,q),be.length>0&&Or(be,A,q),M!==null&&(Te.updateRenderTargetMipmap(M),Te.updateMultisampleRenderTarget(M)),A.isScene===!0&&A.onAfterRender(v,A,q),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1),ie.resetDefaultState(),b=-1,w=null,m.pop(),m.length>0?u=m[m.length-1]:u=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function Br(A,q,U,Q){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)U=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){Q&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(re);const be=K.update(A),Ae=A.material;Ae.visible&&h.push(A,be,Ae,U,ae.z,null)}}else if(A.isImmediateRenderObject)Q&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(re),h.push(A,null,A.material,U,ae.z,null);else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ce.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ce.render.frame),!A.frustumCulled||Z.intersectsObject(A))){Q&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(re);const be=K.update(A),Ae=A.material;if(Array.isArray(Ae)){const He=be.groups;for(let Ee=0,De=He.length;Ee<De;Ee++){const we=He[Ee],Be=Ae[we.materialIndex];Be&&Be.visible&&h.push(A,be,Be,U,ae.z,we)}}else Ae.visible&&h.push(A,be,Ae,U,ae.z,null)}}const Pe=A.children;for(let be=0,Ae=Pe.length;be<Ae;be++)Br(Pe[be],q,U,Q)}function Or(A,q,U){const Q=q.isScene===!0?q.overrideMaterial:null;for(let le=0,Pe=A.length;le<Pe;le++){const be=A[le],Ae=be.object,He=be.geometry,Ee=Q===null?be.material:Q,De=be.group;if(U.isArrayCamera){const we=U.cameras;for(let Be=0,Bt=we.length;Be<Bt;Be++){const ft=we[Be];Ae.layers.test(ft.layers)&&(me.viewport(y.copy(ft.viewport)),u.setupLightsView(ft),Gr(Ae,q,ft,He,Ee,De))}}else Gr(Ae,q,U,He,Ee,De)}}function Gr(A,q,U,Q,le,Pe){if(A.onBeforeRender(v,q,U,Q,le,Pe),A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),A.isImmediateRenderObject){const be=kr(U,q,le,A);me.setMaterial(le),ie.reset(),Xt(A,be)}else v.renderBufferDirect(U,q,Q,le,A,Pe);A.onAfterRender(v,q,U,Q,le,Pe)}function na(A,q,U){q.isScene!==!0&&(q=ne);const Q=Me.get(A),le=u.state.lights,Pe=u.state.shadowsArray,be=le.state.version,Ae=j.getParameters(A,le.state,Pe,q,U),He=j.getProgramCacheKey(Ae);let Ee=Q.programs;Q.environment=A.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=V.get(A.envMap||Q.environment),Ee===void 0&&(A.addEventListener("dispose",ze),Ee=new Map,Q.programs=Ee);let De=Ee.get(He);if(De!==void 0){if(Q.currentProgram===De&&Q.lightsStateVersion===be)return Ur(A,Ae),De}else Ae.uniforms=j.getUniforms(A),A.onBuild(Ae,v),A.onBeforeCompile(Ae,v),De=j.acquireProgram(Ae,He),Ee.set(He,De),Q.uniforms=Ae.uniforms;const we=Q.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(we.clippingPlanes=X.uniform),Ur(A,Ae),Q.needsLights=Hl(A),Q.lightsStateVersion=be,Q.needsLights&&(we.ambientLightColor.value=le.state.ambient,we.lightProbe.value=le.state.probe,we.directionalLights.value=le.state.directional,we.directionalLightShadows.value=le.state.directionalShadow,we.spotLights.value=le.state.spot,we.spotLightShadows.value=le.state.spotShadow,we.rectAreaLights.value=le.state.rectArea,we.ltc_1.value=le.state.rectAreaLTC1,we.ltc_2.value=le.state.rectAreaLTC2,we.pointLights.value=le.state.point,we.pointLightShadows.value=le.state.pointShadow,we.hemisphereLights.value=le.state.hemi,we.directionalShadowMap.value=le.state.directionalShadowMap,we.directionalShadowMatrix.value=le.state.directionalShadowMatrix,we.spotShadowMap.value=le.state.spotShadowMap,we.spotShadowMatrix.value=le.state.spotShadowMatrix,we.pointShadowMap.value=le.state.pointShadowMap,we.pointShadowMatrix.value=le.state.pointShadowMatrix);const Be=De.getUniforms(),Bt=mn.seqWithValue(Be.seq,we);return Q.currentProgram=De,Q.uniformsList=Bt,De}function Ur(A,q){const U=Me.get(A);U.outputEncoding=q.outputEncoding,U.instancing=q.instancing,U.numClippingPlanes=q.numClippingPlanes,U.numIntersection=q.numClipIntersection,U.vertexAlphas=q.vertexAlphas}function kr(A,q,U,Q){q.isScene!==!0&&(q=ne),Te.resetTextureUnits();const le=q.fog,Pe=U.isMeshStandardMaterial?q.environment:null,be=M===null?v.outputEncoding:M.texture.encoding,Ae=V.get(U.envMap||Pe),He=U.vertexColors===!0&&Q.geometry&&Q.geometry.attributes.color&&Q.geometry.attributes.color.itemSize===4,Ee=Me.get(U),De=u.state.lights;if($===!0&&(Y===!0||A!==w)){const Je=A===w&&U.id===b;X.setState(U,A,Je)}let we=!1;U.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==De.state.version||Ee.outputEncoding!==be||Q.isInstancedMesh&&Ee.instancing===!1||!Q.isInstancedMesh&&Ee.instancing===!0||Ee.envMap!==Ae||U.fog&&Ee.fog!==le||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==X.numPlanes||Ee.numIntersection!==X.numIntersection)||Ee.vertexAlphas!==He)&&(we=!0):(we=!0,Ee.__version=U.version);let Be=Ee.currentProgram;we===!0&&(Be=na(U,q,Q));let Bt=!1,ft=!1,wn=!1;const Ke=Be.getUniforms(),Mn=Ee.uniforms;if(me.useProgram(Be.program)&&(Bt=!0,ft=!0,wn=!0),U.id!==b&&(b=U.id,ft=!0),Bt||w!==A){if(Ke.setValue(J,"projectionMatrix",A.projectionMatrix),ge.logarithmicDepthBuffer&&Ke.setValue(J,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),w!==A&&(w=A,ft=!0,wn=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Je=Ke.map.cameraPosition;Je!==void 0&&Je.setValue(J,ae.setFromMatrixPosition(A.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ke.setValue(J,"isOrthographic",A.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||U.skinning)&&Ke.setValue(J,"viewMatrix",A.matrixWorldInverse)}if(U.skinning){Ke.setOptional(J,Q,"bindMatrix"),Ke.setOptional(J,Q,"bindMatrixInverse");const Je=Q.skeleton;if(Je){const ia=Je.bones;if(ge.floatVertexTextures){if(Je.boneTexture===null){let vt=Math.sqrt(ia.length*4);vt=Tu(vt),vt=Math.max(vt,4);const Yt=new Float32Array(vt*vt*4);Yt.set(Je.boneMatrices);const Vl=new qc(Yt,vt,vt,Ft,fn);Je.boneMatrices=Yt,Je.boneTexture=Vl,Je.boneTextureSize=vt}Ke.setValue(J,"boneTexture",Je.boneTexture,Te),Ke.setValue(J,"boneTextureSize",Je.boneTextureSize)}else Ke.setOptional(J,Je,"boneMatrices")}}return(ft||Ee.receiveShadow!==Q.receiveShadow)&&(Ee.receiveShadow=Q.receiveShadow,Ke.setValue(J,"receiveShadow",Q.receiveShadow)),ft&&(Ke.setValue(J,"toneMappingExposure",v.toneMappingExposure),Ee.needsLights&&kl(Mn,wn),le&&U.fog&&T.refreshFogUniforms(Mn,le),T.refreshMaterialUniforms(Mn,U,G,F),mn.upload(J,Ee.uniformsList,Mn,Te)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(mn.upload(J,Ee.uniformsList,Mn,Te),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ke.setValue(J,"center",Q.center),Ke.setValue(J,"modelViewMatrix",Q.modelViewMatrix),Ke.setValue(J,"normalMatrix",Q.normalMatrix),Ke.setValue(J,"modelMatrix",Q.matrixWorld),Be}function kl(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Hl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return M},this.setRenderTarget=function(A,q=0,U=0){M=A,g=q,f=U,A&&Me.get(A).__webglFramebuffer===void 0&&Te.setupRenderTarget(A);let Q=null,le=!1,Pe=!1;if(A){const be=A.texture;(be.isDataTexture3D||be.isDataTexture2DArray)&&(Pe=!0);const Ae=Me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Q=Ae[q],le=!0):A.isWebGLMultisampleRenderTarget?Q=Me.get(A).__webglMultisampledFramebuffer:Q=Ae,y.copy(A.viewport),I.copy(A.scissor),z=A.scissorTest}else y.copy(R).multiplyScalar(G).floor(),I.copy(P).multiplyScalar(G).floor(),z=C;if(me.bindFramebuffer(36160,Q),me.viewport(y),me.scissor(I),me.setScissorTest(z),le){const be=Me.get(A.texture);J.framebufferTexture2D(36160,36064,34069+q,be.__webglTexture,U)}else if(Pe){const be=Me.get(A.texture),Ae=q||0;J.framebufferTextureLayer(36160,36064,be.__webglTexture,U||0,Ae)}},this.readRenderTargetPixels=function(A,q,U,Q,le,Pe,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae){me.bindFramebuffer(36160,Ae);try{const He=A.texture,Ee=He.format,De=He.type;if(Ee!==Ft&&te.convert(Ee)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const we=De===Fs&&(Se.has("EXT_color_buffer_half_float")||ge.isWebGL2&&Se.has("EXT_color_buffer_float"));if(De!==hr&&te.convert(De)!==J.getParameter(35738)&&!(De===fn&&(ge.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!we){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J.checkFramebufferStatus(36160)===36053?q>=0&&q<=A.width-Q&&U>=0&&U<=A.height-le&&J.readPixels(q,U,Q,le,te.convert(Ee),te.convert(De),Pe):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const He=M!==null?Me.get(M).__webglFramebuffer:null;me.bindFramebuffer(36160,He)}}},this.copyFramebufferToTexture=function(A,q,U=0){const Q=Math.pow(2,-U),le=Math.floor(q.image.width*Q),Pe=Math.floor(q.image.height*Q),be=te.convert(q.format);Te.setTexture2D(q,0),J.copyTexImage2D(3553,U,be,A.x,A.y,le,Pe,0),me.unbindTexture()},this.copyTextureToTexture=function(A,q,U,Q=0){const le=q.image.width,Pe=q.image.height,be=te.convert(U.format),Ae=te.convert(U.type);Te.setTexture2D(U,0),J.pixelStorei(37440,U.flipY),J.pixelStorei(37441,U.premultiplyAlpha),J.pixelStorei(3317,U.unpackAlignment),q.isDataTexture?J.texSubImage2D(3553,Q,A.x,A.y,le,Pe,be,Ae,q.image.data):q.isCompressedTexture?J.compressedTexSubImage2D(3553,Q,A.x,A.y,q.mipmaps[0].width,q.mipmaps[0].height,be,q.mipmaps[0].data):J.texSubImage2D(3553,Q,A.x,A.y,be,Ae,q.image),Q===0&&U.generateMipmaps&&J.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(A,q,U,Q,le=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:Pe,height:be,data:Ae}=U.image,He=te.convert(Q.format),Ee=te.convert(Q.type);let De;if(Q.isDataTexture3D)Te.setTexture3D(Q,0),De=32879;else if(Q.isDataTexture2DArray)Te.setTexture2DArray(Q,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,Q.flipY),J.pixelStorei(37441,Q.premultiplyAlpha),J.pixelStorei(3317,Q.unpackAlignment);const we=J.getParameter(3314),Be=J.getParameter(32878),Bt=J.getParameter(3316),ft=J.getParameter(3315),wn=J.getParameter(32877);J.pixelStorei(3314,Pe),J.pixelStorei(32878,be),J.pixelStorei(3316,A.min.x),J.pixelStorei(3315,A.min.y),J.pixelStorei(32877,A.min.z),J.texSubImage3D(De,le,q.x,q.y,q.z,A.max.x-A.min.x+1,A.max.y-A.min.y+1,A.max.z-A.min.z+1,He,Ee,Ae),J.pixelStorei(3314,we),J.pixelStorei(32878,Be),J.pixelStorei(3316,Bt),J.pixelStorei(3315,ft),J.pixelStorei(32877,wn),le===0&&Q.generateMipmaps&&J.generateMipmap(De),me.unbindTexture()},this.initTexture=function(A){Te.setTexture2D(A,0),me.unbindTexture()},this.resetState=function(){g=0,f=0,M=null,me.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ng extends ke{}ng.prototype.isWebGL1Renderer=!0;class Zs{constructor(e,t=1,n=1e3){this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new Zs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}Zs.prototype.isFog=!0;class xr extends Fe{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}xr.prototype.isScene=!0;class In{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Wt(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new In(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}In.prototype.isInterleavedBuffer=!0;const Ye=new L;class qi{constructor(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyMatrix4(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyNormalMatrix(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.transformDirection(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}qi.prototype.isInterleavedBufferAttribute=!0;class yr extends rt{constructor(e){super(),this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}yr.prototype.isSpriteMaterial=!0;let Yn;const Ei=new L,Zn=new L,Jn=new L,$n=new se,Si=new se,rl=new ye,vs=new L,Ai=new L,xs=new L,Fo=new se,Da=new se,Bo=new se;class oi extends Fe{constructor(e){if(super(),this.type="Sprite",Yn===void 0){Yn=new Ue;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new In(t,5);Yn.setIndex([0,1,2,0,2,3]),Yn.setAttribute("position",new qi(n,3,0,!1)),Yn.setAttribute("uv",new qi(n,2,3,!1))}this.geometry=Yn,this.material=e!==void 0?e:new yr,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zn.setFromMatrixScale(this.matrixWorld),rl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Jn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zn.multiplyScalar(-Jn.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;ys(vs.set(-.5,-.5,0),Jn,a,Zn,i,s),ys(Ai.set(.5,-.5,0),Jn,a,Zn,i,s),ys(xs.set(.5,.5,0),Jn,a,Zn,i,s),Fo.set(0,0),Da.set(1,0),Bo.set(1,1);let o=e.ray.intersectTriangle(vs,Ai,xs,!1,Ei);if(o===null&&(ys(Ai.set(-.5,.5,0),Jn,a,Zn,i,s),Da.set(0,1),o=e.ray.intersectTriangle(vs,xs,Ai,!1,Ei),o===null))return;const c=e.ray.origin.distanceTo(Ei);c<e.near||c>e.far||t.push({distance:c,point:Ei.clone(),uv:nt.getUV(Ei,vs,Ai,xs,Fo,Da,Bo,new se),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}oi.prototype.isSprite=!0;function ys(r,e,t,n,i,s){$n.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Si.x=s*$n.x-i*$n.y,Si.y=i*$n.x+s*$n.y):Si.copy($n),r.copy(e),r.x+=Si.x,r.y+=Si.y,r.applyMatrix4(rl)}const Oo=new L,Go=new Ge,Uo=new Ge,ig=new L,ko=new ye;class ol extends Mt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ye,this.bindMatrixInverse=new ye}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ge,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Go.fromBufferAttribute(i.attributes.skinIndex,e),Uo.fromBufferAttribute(i.attributes.skinWeight,e),Oo.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Uo.getComponent(s);if(a!==0){const o=Go.getComponent(s);ko.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ig.copy(Oo).applyMatrix4(ko),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}ol.prototype.isSkinnedMesh=!0;class sg extends Fe{constructor(){super(),this.type="Bone"}}sg.prototype.isBone=!0;const Ho=new ye,Vo=new ye,_s=[],Ti=new Mt;class ag extends Mt{constructor(e,t,n){super(e,t),this.instanceMatrix=new at(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ti.geometry=this.geometry,Ti.material=this.material,Ti.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Ho),Vo.multiplyMatrices(n,Ho),Ti.matrixWorld=Vo,Ti.raycast(e,_s);for(let a=0,o=_s.length;a<o;a++){const c=_s[a];c.instanceId=s,c.object=this,t.push(c)}_s.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new at(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}ag.prototype.isInstancedMesh=!0;class gi extends rt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new ve(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}gi.prototype.isLineBasicMaterial=!0;const Wo=new L,qo=new L,jo=new ye,Na=new Pn,bs=new pi;class Js extends Fe{constructor(e=new Ue,t=new gi){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Wo.fromBufferAttribute(t,i-1),qo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wo.distanceTo(qo);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=s,e.ray.intersectsSphere(bs)===!1)return;jo.copy(i).invert(),Na.copy(e.ray).applyMatrix4(jo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new L,d=new L,h=new L,u=new L,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const m=n.index,x=n.attributes.position;if(m!==null){const g=Math.max(0,a.start),f=Math.min(m.count,a.start+a.count);for(let M=g,b=f-1;M<b;M+=p){const w=m.getX(M),y=m.getX(M+1);if(l.fromBufferAttribute(x,w),d.fromBufferAttribute(x,y),Na.distanceSqToSegment(l,d,u,h)>c)continue;u.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(u);z<e.near||z>e.far||t.push({distance:z,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),f=Math.min(x.count,a.start+a.count);for(let M=g,b=f-1;M<b;M+=p){if(l.fromBufferAttribute(x,M),d.fromBufferAttribute(x,M+1),Na.distanceSqToSegment(l,d,u,h)>c)continue;u.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(u);y<e.near||y>e.far||t.push({distance:y,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Js.prototype.isLine=!0;const Xo=new L,Yo=new L;class _r extends Js{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Xo.fromBufferAttribute(t,i),Yo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xo.distanceTo(Yo);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}_r.prototype.isLineSegments=!0;class rg extends Js{constructor(e,t){super(e,t),this.type="LineLoop"}}rg.prototype.isLineLoop=!0;class cl extends rt{constructor(e){super(),this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}cl.prototype.isPointsMaterial=!0;const Zo=new ye,Ka=new Pn,ws=new pi,Ms=new L;class og extends Fe{constructor(e=new Ue,t=new cl){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=s,e.ray.intersectsSphere(ws)===!1)return;Zo.copy(i).invert(),Ka.copy(e.ray).applyMatrix4(Zo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o;if(n.isBufferGeometry){const l=n.index,h=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=u,v=p;m<v;m++){const x=l.getX(m);Ms.fromBufferAttribute(h,x),Jo(Ms,x,c,i,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=u,v=p;m<v;m++)Ms.fromBufferAttribute(h,m),Jo(Ms,m,c,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}og.prototype.isPoints=!0;function Jo(r,e,t,n,i,s,a){const o=Ka.distanceSqToPoint(r);if(o<t){const c=new L;Ka.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class cg extends ut{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.format=o!==void 0?o:Cn,this.minFilter=a!==void 0?a:At,this.magFilter=s!==void 0?s:At,this.generateMipmaps=!1;const d=this;function h(){d.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}cg.prototype.isVideoTexture=!0;class lg extends ut{constructor(e,t,n,i,s,a,o,c,l,d,h,u){super(null,a,o,c,l,d,i,s,h,u),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}lg.prototype.isCompressedTexture=!0;class ll extends ut{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.needsUpdate=!0}}ll.prototype.isCanvasTexture=!0;class dg extends ut{constructor(e,t,n,i,s,a,o,c,l,d){if(d=d!==void 0?d:ri,d!==ri&&d!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ri&&(n=zs),n===void 0&&d===Vi&&(n=Gi),super(null,i,s,a,o,c,d,n,l),this.image={width:e,height:t},this.magFilter=o!==void 0?o:mt,this.minFilter=c!==void 0?c:mt,this.flipY=!1,this.generateMipmaps=!1}}dg.prototype.isDepthTexture=!0;const ug={triangulate:function(r,e,t){t=t||2;const n=e&&e.length,i=n?e[0]*t:r.length;let s=dl(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,d,h,u,p;if(n&&(s=gg(r,e,s,t)),r.length>80*t){o=l=r[0],c=d=r[1];for(let m=t;m<i;m+=t)h=r[m],u=r[m+1],h<o&&(o=h),u<c&&(c=u),h>l&&(l=h),u>d&&(d=u);p=Math.max(l-o,d-c),p=p!==0?1/p:0}return ji(s,a,t,o,c,p),a}};function dl(r,e,t,n,i){let s,a;if(i===Tg(r,e,t,n)>0)for(s=e;s<t;s+=n)a=$o(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=$o(s,r[s],r[s+1],a);return a&&$s(a,a.next)&&(Yi(a),a=a.next),a}function vn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&($s(t,t.next)||je(t.prev,t,t.next)===0)){if(Yi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ji(r,e,t,n,i,s,a){if(!r)return;!a&&s&&bg(r,n,i,s);let o=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?pg(r,n,i,s):hg(r)){e.push(c.i/t),e.push(r.i/t),e.push(l.i/t),Yi(r),r=l.next,o=l.next;continue}if(r=l,r===o){a?a===1?(r=fg(vn(r),e,t),ji(r,e,t,n,i,s,2)):a===2&&mg(r,e,t,n,i,s):ji(vn(r),e,t,n,i,s,1);break}}}function hg(r){const e=r.prev,t=r,n=r.next;if(je(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(ai(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&je(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function pg(r,e,t,n){const i=r.prev,s=r,a=r.next;if(je(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,c=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,l=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,d=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,h=er(o,c,e,t,n),u=er(l,d,e,t,n);let p=r.prevZ,m=r.nextZ;for(;p&&p.z>=h&&m&&m.z<=u;){if(p!==r.prev&&p!==r.next&&ai(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&je(p.prev,p,p.next)>=0||(p=p.prevZ,m!==r.prev&&m!==r.next&&ai(i.x,i.y,s.x,s.y,a.x,a.y,m.x,m.y)&&je(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;p&&p.z>=h;){if(p!==r.prev&&p!==r.next&&ai(i.x,i.y,s.x,s.y,a.x,a.y,p.x,p.y)&&je(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;m&&m.z<=u;){if(m!==r.prev&&m!==r.next&&ai(i.x,i.y,s.x,s.y,a.x,a.y,m.x,m.y)&&je(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function fg(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!$s(i,s)&&ul(i,n,n.next,s)&&Xi(i,s)&&Xi(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Yi(n),Yi(n.next),n=r=s),n=n.next}while(n!==r);return vn(n)}function mg(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Eg(a,o)){let c=hl(a,o);a=vn(a,a.next),c=vn(c,c.next),ji(a,e,t,n,i,s),ji(c,e,t,n,i,s);return}o=o.next}a=a.next}while(a!==r)}function gg(r,e,t,n){const i=[];let s,a,o,c,l;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:r.length,l=dl(r,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Mg(l));for(i.sort(vg),s=0;s<i.length;s++)xg(i[s],t),t=vn(t,t.next);return t}function vg(r,e){return r.x-e.x}function xg(r,e){if(e=yg(r,e),e){const t=hl(e,r);vn(e,e.next),vn(t,t.next)}}function yg(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s){if(s=u,u===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===s)return a;const o=a,c=a.x,l=a.y;let d=1/0,h;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&ai(i<l?n:s,i,c,l,i<l?s:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),Xi(t,r)&&(h<d||h===d&&(t.x>a.x||t.x===a.x&&_g(a,t)))&&(a=t,d=h)),t=t.next;while(t!==o);return a}function _g(r,e){return je(r.prev,r,e.prev)<0&&je(e.next,r,r.next)<0}function bg(r,e,t,n){let i=r;do i.z===null&&(i.z=er(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,wg(i)}function wg(r){let e,t,n,i,s,a,o,c,l=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,l*=2}while(a>1);return r}function er(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Mg(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ai(r,e,t,n,i,s,a,o){return(i-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(i-a)*(n-o)>=0}function Eg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Sg(r,e)&&(Xi(r,e)&&Xi(e,r)&&Ag(r,e)&&(je(r.prev,r,e.prev)||je(r,e.prev,e))||$s(r,e)&&je(r.prev,r,r.next)>0&&je(e.prev,e,e.next)>0)}function je(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function $s(r,e){return r.x===e.x&&r.y===e.y}function ul(r,e,t,n){const i=Ss(je(r,e,t)),s=Ss(je(r,e,n)),a=Ss(je(t,n,r)),o=Ss(je(t,n,e));return!!(i!==s&&a!==o||i===0&&Es(r,t,e)||s===0&&Es(r,n,e)||a===0&&Es(t,r,n)||o===0&&Es(t,e,n))}function Es(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ss(r){return r>0?1:r<0?-1:0}function Sg(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&ul(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Xi(r,e){return je(r.prev,r,r.next)<0?je(r,e,r.next)>=0&&je(r,r.prev,e)>=0:je(r,e,r.prev)<0||je(r,r.next,e)<0}function Ag(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function hl(r,e){const t=new tr(r.i,r.x,r.y),n=new tr(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function $o(r,e,t,n){const i=new tr(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Yi(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function tr(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tg(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class gn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return gn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Qo(e),Ko(n,e);let a=e.length;t.forEach(Qo);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Ko(n,t[c]);const o=ug.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Qo(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Ko(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Qs extends Ue{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Ze(i,3)),this.setAttribute("uv",new Ze(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:100,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:6,m=t.bevelSize!==void 0?t.bevelSize:p-2,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,f=t.UVGenerator!==void 0?t.UVGenerator:Cg;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let M,b=!1,w,y,I,z;g&&(M=g.getSpacedPoints(d),b=!0,u=!1,w=g.computeFrenetFrames(d,!1),y=new L,I=new L,z=new L),u||(x=0,p=0,m=0,v=0);const B=o.extractPoints(l);let F=B.shape;const G=B.holes;if(!gn.isClockWise(F)){F=F.reverse();for(let V=0,k=G.length;V<k;V++){const W=G[V];gn.isClockWise(W)&&(G[V]=W.reverse())}}const S=gn.triangulateShape(F,G),R=F;for(let V=0,k=G.length;V<k;V++){const W=G[V];F=F.concat(W)}function P(V,k,W){return k||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().multiplyScalar(W).add(V)}const C=F.length,Z=S.length;function $(V,k,W){let K,j,T;const E=V.x-k.x,H=V.y-k.y,X=W.x-V.x,oe=W.y-V.y,de=E*E+H*H,_e=E*oe-H*X;if(Math.abs(_e)>Number.EPSILON){const N=Math.sqrt(de),D=Math.sqrt(X*X+oe*oe),te=k.x-H/N,ie=k.y+E/N,pe=W.x-oe/D,ee=W.y+X/D,xe=((pe-te)*oe-(ee-ie)*X)/(E*oe-H*X);K=te+E*xe-V.x,j=ie+H*xe-V.y;const Ie=K*K+j*j;if(Ie<=2)return new se(K,j);T=Math.sqrt(Ie/2)}else{let N=!1;E>Number.EPSILON?X>Number.EPSILON&&(N=!0):E<-Number.EPSILON?X<-Number.EPSILON&&(N=!0):Math.sign(H)===Math.sign(oe)&&(N=!0),N?(K=-H,j=E,T=Math.sqrt(de)):(K=E,j=H,T=Math.sqrt(de/2))}return new se(K/T,j/T)}const Y=[];for(let V=0,k=R.length,W=k-1,K=V+1;V<k;V++,W++,K++)W===k&&(W=0),K===k&&(K=0),Y[V]=$(R[V],R[W],R[K]);const re=[];let ae,ne=Y.concat();for(let V=0,k=G.length;V<k;V++){const W=G[V];ae=[];for(let K=0,j=W.length,T=j-1,E=K+1;K<j;K++,T++,E++)T===j&&(T=0),E===j&&(E=0),ae[K]=$(W[K],W[T],W[E]);re.push(ae),ne=ne.concat(ae)}for(let V=0;V<x;V++){const k=V/x,W=p*Math.cos(k*Math.PI/2),K=m*Math.sin(k*Math.PI/2)+v;for(let j=0,T=R.length;j<T;j++){const E=P(R[j],Y[j],K);ge(E.x,E.y,-W)}for(let j=0,T=G.length;j<T;j++){const E=G[j];ae=re[j];for(let H=0,X=E.length;H<X;H++){const oe=P(E[H],ae[H],K);ge(oe.x,oe.y,-W)}}}const fe=m+v;for(let V=0;V<C;V++){const k=u?P(F[V],ne[V],fe):F[V];b?(I.copy(w.normals[0]).multiplyScalar(k.x),y.copy(w.binormals[0]).multiplyScalar(k.y),z.copy(M[0]).add(I).add(y),ge(z.x,z.y,z.z)):ge(k.x,k.y,0)}for(let V=1;V<=d;V++)for(let k=0;k<C;k++){const W=u?P(F[k],ne[k],fe):F[k];b?(I.copy(w.normals[V]).multiplyScalar(W.x),y.copy(w.binormals[V]).multiplyScalar(W.y),z.copy(M[V]).add(I).add(y),ge(z.x,z.y,z.z)):ge(W.x,W.y,h/d*V)}for(let V=x-1;V>=0;V--){const k=V/x,W=p*Math.cos(k*Math.PI/2),K=m*Math.sin(k*Math.PI/2)+v;for(let j=0,T=R.length;j<T;j++){const E=P(R[j],Y[j],K);ge(E.x,E.y,h+W)}for(let j=0,T=G.length;j<T;j++){const E=G[j];ae=re[j];for(let H=0,X=E.length;H<X;H++){const oe=P(E[H],ae[H],K);b?ge(oe.x,oe.y+M[d-1].y,M[d-1].x+W):ge(oe.x,oe.y,h+W)}}}J(),Re();function J(){const V=i.length/3;if(u){let k=0,W=C*k;for(let K=0;K<Z;K++){const j=S[K];me(j[2]+W,j[1]+W,j[0]+W)}k=d+x*2,W=C*k;for(let K=0;K<Z;K++){const j=S[K];me(j[0]+W,j[1]+W,j[2]+W)}}else{for(let k=0;k<Z;k++){const W=S[k];me(W[2],W[1],W[0])}for(let k=0;k<Z;k++){const W=S[k];me(W[0]+C*d,W[1]+C*d,W[2]+C*d)}}n.addGroup(V,i.length/3-V,0)}function Re(){const V=i.length/3;let k=0;Se(R,k),k+=R.length;for(let W=0,K=G.length;W<K;W++){const j=G[W];Se(j,k),k+=j.length}n.addGroup(V,i.length/3-V,1)}function Se(V,k){let W=V.length;for(;--W>=0;){const K=W;let j=W-1;j<0&&(j=V.length-1);for(let T=0,E=d+x*2;T<E;T++){const H=C*T,X=C*(T+1),oe=k+K+H,de=k+j+H,_e=k+j+X,N=k+K+X;Ce(oe,de,_e,N)}}}function ge(V,k,W){c.push(V),c.push(k),c.push(W)}function me(V,k,W){Me(V),Me(k),Me(W);const K=i.length/3,j=f.generateTopUV(n,i,K-3,K-2,K-1);Te(j[0]),Te(j[1]),Te(j[2])}function Ce(V,k,W,K){Me(V),Me(k),Me(K),Me(k),Me(W),Me(K);const j=i.length/3,T=f.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);Te(T[0]),Te(T[1]),Te(T[3]),Te(T[1]),Te(T[2]),Te(T[3])}function Me(V){i.push(c[V*3+0]),i.push(c[V*3+1]),i.push(c[V*3+2])}function Te(V){s.push(V.x),s.push(V.y)}}}toJSON(){const e=Ue.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return Lg(t,n,e)}}const Cg={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],d=e[i*3+1];return[new se(s,a),new se(o,c),new se(l,d)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],d=e[n*3+1],h=e[n*3+2],u=e[i*3],p=e[i*3+1],m=e[i*3+2],v=e[s*3],x=e[s*3+1],g=e[s*3+2];return Math.abs(o-d)<.01?[new se(a,1-c),new se(l,1-h),new se(u,1-m),new se(v,1-g)]:[new se(o,1-c),new se(d,1-h),new se(p,1-m),new se(x,1-g)]}};function Lg(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Rg extends Ue{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let d=0;d<e.length;d++)l(e[d]),this.addGroup(o,c,d),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ze(i,3)),this.setAttribute("normal",new Ze(s,3)),this.setAttribute("uv",new Ze(a,2));function l(d){const h=i.length/3,u=d.extractPoints(t);let p=u.shape;const m=u.holes;gn.isClockWise(p)===!1&&(p=p.reverse());for(let x=0,g=m.length;x<g;x++){const f=m[x];gn.isClockWise(f)===!0&&(m[x]=f.reverse())}const v=gn.triangulateShape(p,m);for(let x=0,g=m.length;x<g;x++){const f=m[x];p=p.concat(f)}for(let x=0,g=p.length;x<g;x++){const f=p[x];i.push(f.x,f.y,0),s.push(0,0,1),a.push(f.x,f.y)}for(let x=0,g=v.length;x<g;x++){const f=v[x],M=f[0]+h,b=f[1]+h,w=f[2]+h;n.push(M,b,w),c+=3}}}toJSON(){const e=Ue.prototype.toJSON.call(this),t=this.parameters.shapes;return Pg(t,e)}}function Pg(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Ig extends Ue{constructor(e=1,t=8,n=6,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const d=[],h=new L,u=new L,p=[],m=[],v=[],x=[];for(let g=0;g<=n;g++){const f=[],M=g/n;let b=0;g==0&&a==0?b=.5/t:g==n&&c==Math.PI&&(b=-.5/t);for(let w=0;w<=t;w++){const y=w/t;h.x=-e*Math.cos(i+y*s)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(i+y*s)*Math.sin(a+M*o),m.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),x.push(y+b,1-M),f.push(l++)}d.push(f)}for(let g=0;g<n;g++)for(let f=0;f<t;f++){const M=d[g][f+1],b=d[g][f],w=d[g+1][f],y=d[g+1][f+1];(g!==0||a>0)&&p.push(M,b,y),(g!==n-1||c<Math.PI)&&p.push(b,w,y)}this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(x,2))}}class Dg extends rt{constructor(e){super(),this.type="ShadowMaterial",this.color=new ve(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Dg.prototype.isShadowMaterial=!0;class Ng extends Rn{constructor(e){super(e),this.type="RawShaderMaterial"}}Ng.prototype.isRawShaderMaterial=!0;class pl extends rt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}}pl.prototype.isMeshStandardMaterial=!0;class zg extends pl{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=yt(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new ve).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}}zg.prototype.isMeshPhysicalMaterial=!0;class nr extends rt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new ve(16777215),this.specular=new ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}nr.prototype.isMeshPhongMaterial=!0;class Fg extends rt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}Fg.prototype.isMeshToonMaterial=!0;class Bg extends rt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Bg.prototype.isMeshNormalMaterial=!0;class Og extends rt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}Og.prototype.isMeshLambertMaterial=!0;class Gg extends rt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ui,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Gg.prototype.isMeshMatcapMaterial=!0;class Ug extends gi{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Ug.prototype.isLineDashedMaterial=!0;const qe={arraySlice:function(r,e,t){return qe.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],d=l.getValueSize(),h=[],u=[];for(let p=0;p<l.times.length;++p){const m=l.times[p]*i;if(!(m<t||m>=n)){h.push(l.times[p]);for(let v=0;v<d;++v)u.push(l.values[p*d+v])}}h.length!==0&&(l.times=qe.convertArray(h,l.times.constructor),l.values=qe.convertArray(u,l.values.constructor),a.push(l))}s.tracks=a;let o=1/0;for(let c=0;c<s.tracks.length;++c)o>s.tracks[c].times[0]&&(o=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=r.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===c});if(l===void 0)continue;let d=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=h/3);let u=0;const p=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=p/3);const m=o.times.length-1;let v;if(s<=o.times[0]){const g=d,f=h-d;v=qe.arraySlice(o.values,g,f)}else if(s>=o.times[m]){const g=m*h+d,f=g+h-d;v=qe.arraySlice(o.values,g,f)}else{const g=o.createInterpolant(),f=d,M=h-d;g.evaluate(s),v=qe.arraySlice(g.resultBuffer,f,M)}c==="quaternion"&&new dt().fromArray(v).normalize().conjugate().toArray(v);const x=l.times.length;for(let g=0;g<x;++g){const f=g*p+u;if(c==="quaternion")dt.multiplyQuaternionsFlat(l.values,f,v,0,l.values,f);else{const M=p-u*2;for(let b=0;b<M;++b)l.values[f+b]-=v[b]}}}return r.blendMode=Bc,r}};class xn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}xn.prototype.beforeStart_=xn.prototype.copySampleValue_;xn.prototype.afterEnd_=xn.prototype.copySampleValue_;class kg extends xn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ni,endingEnd:ni}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ii:s=e,o=2*t-n;break;case Gs:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ii:a=e,c=2*n-t;break;case Gs:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),v=m*m,x=v*m,g=-u*x+2*u*v-u*m,f=(1+u)*x+(-1.5-2*u)*v+(-.5+u)*m+1,M=(-1-p)*x+(1.5+p)*v+.5*m,b=p*x-p*v;for(let w=0;w!==o;++w)s[w]=g*a[d+w]+f*a[l+w]+M*a[c+w]+b*a[h+w];return s}}class fl extends xn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==o;++u)s[u]=a[l+u]*h+a[c+u]*d;return s}}class Hg extends xn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class jt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qe.convertArray(t,this.TimeBufferType),this.values=qe.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qe.convertArray(e.times,Array),values:qe.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case sa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return sa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=qe.arraySlice(n,s,a),this.values=qe.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&qe.isTypedArray(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=qe.arraySlice(this.times),t=qe.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===sa,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,u=h-n,p=h+n;for(let m=0;m!==n;++m){const v=t[h+m];if(v!==t[u+m]||v!==t[p+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=qe.arraySlice(e,0,a),this.values=qe.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=qe.arraySlice(this.times,0),t=qe.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=Os;class vi extends jt{}vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Bs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;class ml extends jt{}ml.prototype.ValueTypeName="color";class ks extends jt{}ks.prototype.ValueTypeName="number";class Vg extends xn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let d=l+o;l!==d;l+=4)dt.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Ji extends jt{InterpolantFactoryMethodLinear(e){return new Vg(this.times,this.values,this.getValueSize(),e)}}Ji.prototype.ValueTypeName="quaternion";Ji.prototype.DefaultInterpolation=Os;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class xi extends jt{}xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Bs;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends jt{}Hs.prototype.ValueTypeName="vector";class ec{constructor(e,t=-1,n,i=pr){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(qg(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(jt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const d=qe.getKeyframeOrder(c);c=qe.sortedArray(c,1,d),l=qe.sortedArray(l,1,d),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new ks(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(s);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,p,m,v){if(p.length!==0){const x=[],g=[];qe.flattenJSON(p,x,g,m),x.length!==0&&v.push(new h(u,x,g))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const u=l[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let v=0;v<u[m].morphTargets.length;v++)p[u[m].morphTargets[v]]=-1;for(const v in p){const x=[],g=[];for(let f=0;f!==u[m].morphTargets.length;++f){const M=u[m];x.push(M.time),g.push(M.morphTarget===v?1:0)}i.push(new ks(".morphTargetInfluence["+v+"]",x,g))}c=p.length*a}else{const p=".bones["+t[h].name+"]";n(Hs,p+".position",u,"pos",i),n(Ji,p+".quaternion",u,"rot",i),n(Hs,p+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ks;case"vector":case"vector2":case"vector3":case"vector4":return Hs;case"color":return ml;case"quaternion":return Ji;case"bool":case"boolean":return vi;case"string":return xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function qg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wg(r.type);if(r.times===void 0){const t=[],n=[];qe.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const li={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class jg{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return l.push(d,h),this},this.removeHandler=function(d){const h=l.indexOf(d);return h!==-1&&l.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=l.length;h<u;h+=2){const p=l[h],m=l[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return m}return null}}}const Xg=new jg;class _n{constructor(e){this.manager=e!==void 0?e:Xg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const It={};class Yg extends _n{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=li.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;if(It[e]!==void 0){It[e].push({onLoad:t,onProgress:n,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,c=e.match(o);let l;if(c){const d=c[1],h=!!c[2];let u=c[3];u=decodeURIComponent(u),h&&(u=atob(u));try{let p;const m=(this.responseType||"").toLowerCase();switch(m){case"arraybuffer":case"blob":const v=new Uint8Array(u.length);for(let g=0;g<u.length;g++)v[g]=u.charCodeAt(g);m==="blob"?p=new Blob([v.buffer],{type:d}):p=v.buffer;break;case"document":p=new DOMParser().parseFromString(u,d);break;case"json":p=JSON.parse(u);break;default:p=u;break}setTimeout(function(){t&&t(p),s.manager.itemEnd(e)},0)}catch(p){setTimeout(function(){i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)},0)}}else{It[e]=[],It[e].push({onLoad:t,onProgress:n,onError:i}),l=new XMLHttpRequest,l.open("GET",e,!0),l.addEventListener("load",function(d){const h=this.response,u=It[e];if(delete It[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),li.add(e,h);for(let p=0,m=u.length;p<m;p++){const v=u[p];v.onLoad&&v.onLoad(h)}s.manager.itemEnd(e)}else{for(let p=0,m=u.length;p<m;p++){const v=u[p];v.onError&&v.onError(d)}s.manager.itemError(e),s.manager.itemEnd(e)}},!1),l.addEventListener("progress",function(d){const h=It[e];for(let u=0,p=h.length;u<p;u++){const m=h[u];m.onProgress&&m.onProgress(d)}},!1),l.addEventListener("error",function(d){const h=It[e];delete It[e];for(let u=0,p=h.length;u<p;u++){const m=h[u];m.onError&&m.onError(d)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),l.addEventListener("abort",function(d){const h=It[e];delete It[e];for(let u=0,p=h.length;u<p;u++){const m=h[u];m.onError&&m.onError(d)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),this.responseType!==void 0&&(l.responseType=this.responseType),this.withCredentials!==void 0&&(l.withCredentials=this.withCredentials),l.overrideMimeType&&l.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const d in this.requestHeader)l.setRequestHeader(d,this.requestHeader[d]);l.send(null)}return s.manager.itemStart(e),l}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class gl extends _n{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=li.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=document.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1),li.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Zg extends _n{constructor(e){super(e)}load(e,t,n,i){const s=new Xs,a=new gl(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(e[l],function(d){s.images[l]=d,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}}class Jg extends _n{constructor(e){super(e)}load(e,t,n,i){const s=new ut,a=new gl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o;const c=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;s.format=c?Cn:Ft,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Tt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const d=n[i],u=n[i+1]-d,p=(a-d)/u;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new se:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],s=[],a=[],o=new L,c=new ye;for(let p=0;p<=e;p++){const m=p/e;i[p]=this.getTangentAt(m,new L),i[p].normalize()}s[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const d=Math.abs(i[0].x),h=Math.abs(i[0].y),u=Math.abs(i[0].z);d<=l&&(l=d,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(yt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,m))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(yt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],p*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ks extends Tt{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const n=t||new se,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*d-p*h+this.aX,l=u*h+p*d+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Ks.prototype.isEllipseCurve=!0;class vl extends Ks{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.type="ArcCurve"}}vl.prototype.isArcCurve=!0;function br(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,d,h){let u=(a-s)/l-(o-s)/(l+d)+(o-a)/d,p=(o-a)/d-(c-a)/(d+h)+(c-o)/h;u*=d,p*=d,i(a,o,u,p)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const As=new L,za=new br,Fa=new br,Ba=new br;class xl extends Tt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,d;this.closed||o>0?l=i[(o-1)%s]:(As.subVectors(i[0],i[1]).add(i[0]),l=As);const h=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?d=i[(o+2)%s]:(As.subVectors(i[s-1],i[s-2]).add(i[s-1]),d=As),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p);v<1e-4&&(v=1),m<1e-4&&(m=v),x<1e-4&&(x=v),za.initNonuniformCatmullRom(l.x,h.x,u.x,d.x,m,v,x),Fa.initNonuniformCatmullRom(l.y,h.y,u.y,d.y,m,v,x),Ba.initNonuniformCatmullRom(l.z,h.z,u.z,d.z,m,v,x)}else this.curveType==="catmullrom"&&(za.initCatmullRom(l.x,h.x,u.x,d.x,this.tension),Fa.initCatmullRom(l.y,h.y,u.y,d.y,this.tension),Ba.initCatmullRom(l.z,h.z,u.z,d.z,this.tension));return n.set(za.calc(c),Fa.calc(c),Ba.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}xl.prototype.isCatmullRomCurve3=!0;function tc(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,c=r*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*r+t}function $g(r,e){const t=1-r;return t*t*e}function Qg(r,e){return 2*(1-r)*r*e}function Kg(r,e){return r*r*e}function Ui(r,e,t,n){return $g(r,e)+Qg(r,t)+Kg(r,n)}function ev(r,e){const t=1-r;return t*t*t*e}function tv(r,e){const t=1-r;return 3*t*t*r*e}function nv(r,e){return 3*(1-r)*r*r*e}function iv(r,e){return r*r*r*e}function ki(r,e,t,n,i){return ev(r,e)+tv(r,t)+nv(r,n)+iv(r,i)}class wr extends Tt{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ki(e,i.x,s.x,a.x,o.x),ki(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}wr.prototype.isCubicBezierCurve=!0;class yl extends Tt{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ki(e,i.x,s.x,a.x,o.x),ki(e,i.y,s.y,a.y,o.y),ki(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}yl.prototype.isCubicBezierCurve3=!0;class ea extends Tt{constructor(e=new se,t=new se){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new se;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ea.prototype.isLineCurve=!0;class sv extends Tt{constructor(e=new L,t=new L){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mr extends Tt{constructor(e=new se,t=new se,n=new se){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ui(e,i.x,s.x,a.x),Ui(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Mr.prototype.isQuadraticBezierCurve=!0;class _l extends Tt{constructor(e=new L,t=new L,n=new L){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ui(e,i.x,s.x,a.x),Ui(e,i.y,s.y,a.y),Ui(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}_l.prototype.isQuadraticBezierCurve3=!0;class Er extends Tt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],d=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(tc(o,c.x,l.x,d.x,h.x),tc(o,c.y,l.y,d.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}Er.prototype.isSplineCurve=!0;var av=Object.freeze({__proto__:null,ArcCurve:vl,CatmullRomCurve3:xl,CubicBezierCurve:wr,CubicBezierCurve3:yl,EllipseCurve:Ks,LineCurve:ea,LineCurve3:sv,QuadraticBezierCurve:Mr,QuadraticBezierCurve3:_l,SplineCurve:Er});class rv extends Tt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ea(t,e))}getPoint(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const s=n[i]-t,a=this.curves[i],o=a.getLength(),c=o===0?0:1-s/o;return a.getPointAt(c)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a&&a.isEllipseCurve?e*2:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const d=c[l];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new av[i.type]().fromJSON(i))}return this}}class ir extends rv{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ea(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Mr(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new wr(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Er(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){const l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+l,t+d,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){const l=new Ks(e,t,n,i,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}let Sr=class extends ir{constructor(e){super(e),this.uuid=Wt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ir().fromJSON(i))}return this}};class qt extends Fe{constructor(e,t=1){super(),this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}qt.prototype.isLight=!0;class ov extends qt{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.groundColor=new ve(t)}copy(e){return qt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}ov.prototype.isHemisphereLight=!0;const nc=new ye,ic=new L,sc=new L;class Ar{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(ic),sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sc),t.updateMatrixWorld(),nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bl extends Ar{constructor(){super(new _t(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=$a*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}bl.prototype.isSpotLightShadow=!0;class cv extends qt{constructor(e,t,n=0,i=Math.PI/3,s=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.shadow=new bl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}cv.prototype.isSpotLight=!0;const ac=new ye,Ci=new L,Oa=new L;class wl extends Ar{constructor(){super(new _t(90,1,.5,500)),this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ci.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ci),Oa.copy(n.position),Oa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oa),n.updateMatrixWorld(),i.makeTranslation(-Ci.x,-Ci.y,-Ci.z),ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac)}}wl.prototype.isPointLightShadow=!0;class lv extends qt{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}lv.prototype.isPointLight=!0;class Ml extends gr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Ml.prototype.isOrthographicCamera=!0;class El extends Ar{constructor(){super(new Ml(-5,5,5,-5,.5,500))}}El.prototype.isDirectionalLightShadow=!0;class Sl extends qt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.target=new Fe,this.shadow=new El}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Sl.prototype.isDirectionalLight=!0;class Al extends qt{constructor(e,t){super(e,t),this.type="AmbientLight"}}Al.prototype.isAmbientLight=!0;class dv extends qt{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}dv.prototype.isRectAreaLight=!0;class Tl{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}Tl.prototype.isSphericalHarmonics3=!0;class Tr extends qt{constructor(e=new Tl,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Tr.prototype.isLightProbe=!0;class uv{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class hv extends Ue{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}hv.prototype.isInstancedBufferGeometry=!0;class pv extends at{constructor(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}pv.prototype.isInstancedBufferAttribute=!0;class fv extends _n{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=li.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){li.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}fv.prototype.isImageBitmapLoader=!0;let Ts;const mv={getContext:function(){return Ts===void 0&&(Ts=new(window.AudioContext||window.webkitAudioContext)),Ts},setContext:function(r){Ts=r}};class gv extends _n{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Yg(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const c=o.slice(0);mv.getContext().decodeAudioData(c,function(d){t(d)})}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}}class vv extends Tr{constructor(e,t,n=1){super(void 0,n);const i=new ve().set(e),s=new ve().set(t),a=new L(i.r,i.g,i.b),o=new L(s.r,s.g,s.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(c),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(l)}}vv.prototype.isHemisphereLightProbe=!0;class xv extends Tr{constructor(e,t=1){super(void 0,t);const n=new ve().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}xv.prototype.isAmbientLightProbe=!0;class yv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rc(){return(typeof performance>"u"?Date:performance).now()}class _v extends Fe{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class bv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){dt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;dt.multiplyQuaternionsFlat(e,a,e,t,e,n),dt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Cr="\\[\\]\\.:\\/",wv=new RegExp("["+Cr+"]","g"),Lr="[^"+Cr+"]",Mv="[^"+Cr.replace("\\.","")+"]",Ev=/((?:WC+[\/:])*)/.source.replace("WC",Lr),Sv=/(WCOD+)?/.source.replace("WCOD",Mv),Av=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lr),Tv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lr),Cv=new RegExp("^"+Ev+Sv+Av+Tv+"$"),Lv=["material","materials","bones"];class Rv{constructor(e,t,n){const i=n||Oe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Oe{constructor(e,t,n){this.path=t,this.parsedPath=n||Oe.parseTrackName(t),this.node=Oe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Oe.Composite(e,t,n):new Oe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wv,"")}static parseTrackName(e){const t=Cv.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Lv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Oe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Oe.Composite=Rv;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Pv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:ni,endingEnd:ni};for(let l=0;l!==a;++l){const d=s[l].createInterpolant(null);o[l]=d,d.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=pu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;if(c<0||n===0)return;this._startTime=null,t=n*c}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Bc:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(a),l[d].accumulateAdditive(o);break;case pr:default:for(let d=0,h=c.length;d!==h;++d)c[d].evaluate(a),l[d].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===fu;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===hu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ii,i.endingEnd=ii):(e?i.endingStart=this.zeroSlopeAtStart?ii:ni:i.endingStart=Gs,t?i.endingEnd=this.zeroSlopeAtEnd?ii:ni:i.endingEnd=Gs)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}class Iv extends yn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let d=l[c];d===void 0&&(d={},l[c]=d);for(let h=0;h!==s;++h){const u=i[h],p=u.name;let m=d[p];if(m!==void 0)a[h]=m;else{if(m=a[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,p));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;m=new bv(Oe.create(n,p,v),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,p),a[h]=m}o[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],d=e._byClipCacheIndex;l._byClipCacheIndex=d,c[d]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new fl(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?ec.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=pr),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const d=new Pv(this,a,t,n);return this._bindAction(d,l),this._addInactiveAction(d,o,s),d}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ec.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const d=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=d,t[d]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}Iv.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Dv extends In{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}Dv.prototype.isInstancedInterleavedBuffer=!0;class Nv{constructor(e,t,n=0,i=1/0){this.ray=new Pn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Gc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return sr(e,this,n,t),n.sort(oc),n}intersectObjects(e,t=!1,n=[]){for(let i=0,s=e.length;i<s;i++)sr(e[i],this,n,t);return n.sort(oc),n}}function oc(r,e){return r.distance-e.distance}function sr(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)sr(i[s],e,t,!0)}}class cc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zv extends Fe{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}zv.prototype.isImmediateRenderObject=!0;const hn=new L,Cs=new ye,Ga=new ye;class Fv extends _r{constructor(e){const t=Cl(e),n=new Ue,i=[],s=[],a=new ve(0,0,1),o=new ve(0,1,0);for(let l=0;l<t.length;l++){const d=t[l];d.parent&&d.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Ze(i,3)),n.setAttribute("color",new Ze(s,3));const c=new gi({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ga.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Cs.multiplyMatrices(Ga,o.matrixWorld),hn.setFromMatrixPosition(Cs),i.setXYZ(a,hn.x,hn.y,hn.z),Cs.multiplyMatrices(Ga,o.parent.matrixWorld),hn.setFromMatrixPosition(Cs),i.setXYZ(a+1,hn.x,hn.y,hn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Cl(r){const e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Cl(r.children[t]));return e}class Bv extends _r{constructor(e=10,t=10,n=4473924,i=8947848){n=new ve(n),i=new ve(i);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let u=0,p=0,m=-o;u<=t;u++,m+=a){c.push(-o,0,m,o,0,m),c.push(m,0,-o,m,0,o);const v=u===s?n:i;v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3}const d=new Ue;d.setAttribute("position",new Ze(c,3)),d.setAttribute("color",new Ze(l,3));const h=new gi({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}}const Ov=new Float32Array(1);new Int32Array(Ov.buffer);const Gv=new fr({side:st,depthWrite:!1,depthTest:!1});new Mt(new mr,Gv);Tt.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Tt.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};ir.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};Bv.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Fv.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};_n.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),uv.extractUrlBase(r)};_n.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Et.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Et.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Et.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Et.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Et.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};pi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ys.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};lt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};lt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};lt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};lt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};lt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};lt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};ye.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};ye.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};ye.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new L().setFromMatrixColumn(this,3)};ye.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};ye.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ye.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ye.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ye.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ye.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};ye.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ye.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ye.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ye.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ye.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ye.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ye.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ye.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ye.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};ye.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Ht.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};dt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};dt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Pn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Pn.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};Pn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};nt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};nt.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};nt.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};nt.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};nt.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};nt.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),nt.getBarycoord(r,e,t,n,i)};nt.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),nt.getNormal(r,e,t,n)};Sr.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};Sr.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Qs(this,r)};Sr.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Rg(this,r)};se.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};se.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};se.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};L.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};L.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};L.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};L.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};L.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};L.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};L.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};L.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};L.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ge.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Ge.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Fe.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Fe.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Fe.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};Fe.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Fe.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Fe.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Mt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Mt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),mu},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});ol.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};_t.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(qt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(at.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Us},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Us)}}});at.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Us:Wi),this};at.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},at.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ue.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Ue.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new at(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};Ue.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};Ue.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ue.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ue.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Ue.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Ue.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});In.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Us:Wi),this};In.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Qs.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Qs.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Qs.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};xr.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(rt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ve}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Dc}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}}});Object.defineProperties(Rn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});ke.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};ke.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};ke.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};ke.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};ke.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};ke.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};ke.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};ke.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};ke.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};ke.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};ke.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};ke.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};ke.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};ke.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};ke.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};ke.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};ke.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};ke.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};ke.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};ke.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};ke.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};ke.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};ke.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};ke.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};ke.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(ke.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Oc:Zi}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(sl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Ln.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});_v.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new gv().load(r,function(n){e.setBuffer(n)}),this};vr.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};vr.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};hi.crossOrigin=void 0;hi.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Jg;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};hi.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Zg;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};hi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};hi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);class zt{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new _);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new _);const n=this.elements,i=e.x,s=e.y,a=e.z;return t.x=n[0]*i+n[1]*s+n[2]*a,t.y=n[3]*i+n[4]*s+n[5]*a,t.z=n[6]*i+n[7]*s+n[8]*a,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new zt);const n=this.elements,i=e.elements,s=t.elements,a=n[0],o=n[1],c=n[2],l=n[3],d=n[4],h=n[5],u=n[6],p=n[7],m=n[8],v=i[0],x=i[1],g=i[2],f=i[3],M=i[4],b=i[5],w=i[6],y=i[7],I=i[8];return s[0]=a*v+o*f+c*w,s[1]=a*x+o*M+c*y,s[2]=a*g+o*b+c*I,s[3]=l*v+d*f+h*w,s[4]=l*x+d*M+h*y,s[5]=l*g+d*b+h*I,s[6]=u*v+p*f+m*w,s[7]=u*x+p*M+m*y,s[8]=u*g+p*b+m*I,t}scale(e,t){t===void 0&&(t=new zt);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new _);const n=3,i=4,s=[];let a,o;for(a=0;a<n*i;a++)s.push(0);for(a=0;a<3;a++)for(o=0;o<3;o++)s[a+i*o]=this.elements[a+3*o];s[3]=e.x,s[7]=e.y,s[11]=e.z;let c=3;const l=c;let d;const h=4;let u;do{if(a=l-c,s[a+i*a]===0){for(o=a+1;o<l;o++)if(s[a+i*o]!==0){d=h;do u=h-d,s[u+i*a]+=s[u+i*o];while(--d);break}}if(s[a+i*a]!==0)for(o=a+1;o<l;o++){const p=s[a+i*o]/s[a+i*a];d=h;do u=h-d,s[u+i*o]=u<=a?0:s[u+i*o]-s[u+i*a]*p;while(--d)}}while(--c);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new zt);const t=3,n=6,i=Uv;let s,a;for(s=0;s<3;s++)for(a=0;a<3;a++)i[s+n*a]=this.elements[s+3*a];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let o=3;const c=o;let l;const d=n;let h;do{if(s=c-o,i[s+n*s]===0){for(a=s+1;a<c;a++)if(i[s+n*a]!==0){l=d;do h=d-l,i[h+n*s]+=i[h+n*a];while(--l);break}}if(i[s+n*s]!==0)for(a=s+1;a<c;a++){const u=i[s+n*a]/i[s+n*s];l=d;do h=d-l,i[h+n*a]=h<=s?0:i[h+n*a]-i[h+n*s]*u;while(--l)}}while(--o);s=2;do{a=s-1;do{const u=i[s+n*a]/i[s+n*s];l=n;do h=n-l,i[h+n*a]=i[h+n*a]-i[h+n*s]*u;while(--l)}while(a--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do h=n-l,i[h+n*s]=i[h+n*s]*u;while(--l)}while(s--);s=2;do{a=2;do{if(h=i[t+a+n*s],isNaN(h)||h===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,a,h)}while(a--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,a=t+t,o=n+n,c=i+i,l=t*a,d=t*o,h=t*c,u=n*o,p=n*c,m=i*c,v=s*a,x=s*o,g=s*c,f=this.elements;return f[0]=1-(u+m),f[1]=d-g,f[2]=h+x,f[3]=d+g,f[4]=1-(l+m),f[5]=p-v,f[6]=h-x,f[7]=p+v,f[8]=1-(l+u),this}transpose(e){e===void 0&&(e=new zt);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Uv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class _{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new _);const n=e.x,i=e.y,s=e.z,a=this.x,o=this.y,c=this.z;return t.x=o*s-c*i,t.y=c*n-a*s,t.z=a*i-o*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new _(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new _(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new zt([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new _);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z;return Math.sqrt((s-t)*(s-t)+(a-n)*(a-n)+(o-i)*(o-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z;return(s-t)*(s-t)+(a-n)*(a-n)+(o-i)*(o-i)}scale(e,t){t===void 0&&(t=new _);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new _),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new _),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new _),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=kv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const a=Hv;Math.abs(i.x)<.9?(a.set(1,0,0),i.cross(a,e)):(a.set(0,1,0),i.cross(a,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,a=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=a+(e.z-a)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(lc),lc.almostEquals(e,t)}clone(){return new _(this.x,this.y,this.z)}}_.ZERO=new _(0,0,0);_.UNIT_X=new _(1,0,0);_.UNIT_Y=new _(0,1,0);_.UNIT_Z=new _(0,0,1);const kv=new _,Hv=new _,lc=new _;class St{constructor(e){e===void 0&&(e={}),this.lowerBound=new _,this.upperBound=new _,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,a=this.upperBound,o=n;s.copy(e[0]),o&&o.vmult(s,s),a.copy(s);for(let c=1;c<e.length;c++){let l=e[c];o&&(o.vmult(l,dc),l=dc),l.x>a.x&&(a.x=l.x),l.x<s.x&&(s.x=l.x),l.y>a.y&&(a.y=l.y),l.y<s.y&&(s.y=l.y),l.z>a.z&&(a.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(a,a)),i&&(s.x-=i,s.y-=i,s.z-=i,a.x+=i,a.y+=i,a.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new St().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,a=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return a&&o&&c}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,a,o,c){const l=this.lowerBound,d=this.upperBound;e.copy(l),t.set(d.x,l.y,l.z),n.set(d.x,d.y,l.z),i.set(l.x,d.y,d.z),s.set(d.x,l.y,d.z),a.set(l.x,d.y,l.z),o.set(l.x,l.y,d.z),c.copy(d)}toLocalFrame(e,t){const n=uc,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],d=n[6],h=n[7];this.getCorners(i,s,a,o,c,l,d,h);for(let u=0;u!==8;u++){const p=n[u];e.pointToLocal(p,p)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=uc,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],d=n[6],h=n[7];this.getCorners(i,s,a,o,c,l,d,h);for(let u=0;u!==8;u++){const p=n[u];e.pointToWorld(p,p)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,a=1/t.z,o=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,d=(this.upperBound.y-n.y)*s,h=(this.lowerBound.z-n.z)*a,u=(this.upperBound.z-n.z)*a,p=Math.max(Math.max(Math.min(o,c),Math.min(l,d)),Math.min(h,u)),m=Math.min(Math.min(Math.max(o,c),Math.max(l,d)),Math.max(h,u));return!(m<0||p>m)}}const dc=new _,uc=[new _,new _,new _,new _,new _,new _,new _,new _];class hc{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const a=s;s=i,i=a}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Ll{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class Qe{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new _),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Vv,i=Wv;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Qe);const n=this.x,i=this.y,s=this.z,a=this.w,o=e.x,c=e.y,l=e.z,d=e.w;return t.x=n*d+a*o+i*l-s*c,t.y=i*d+a*c+s*o-n*l,t.z=s*d+a*l+n*c-i*o,t.w=a*d-n*o-i*c-s*l,t}inverse(e){e===void 0&&(e=new Qe);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const a=1/(t*t+n*n+i*i+s*s);return e.x*=a,e.y*=a,e.z*=a,e.w*=a,e}conjugate(e){return e===void 0&&(e=new Qe),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new _);const n=e.x,i=e.y,s=e.z,a=this.x,o=this.y,c=this.z,l=this.w,d=l*n+o*s-c*i,h=l*i+c*n-a*s,u=l*s+a*i-o*n,p=-a*n-o*i-c*s;return t.x=d*l+p*-a+h*-c-u*-o,t.y=h*l+p*-o+u*-a-d*-c,t.z=u*l+p*-c+d*-o-h*-a,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const a=this.x,o=this.y,c=this.z,l=this.w;switch(t){case"YZX":const d=a*o+c*l;if(d>.499&&(n=2*Math.atan2(a,l),i=Math.PI/2,s=0),d<-.499&&(n=-2*Math.atan2(a,l),i=-Math.PI/2,s=0),n===void 0){const h=a*a,u=o*o,p=c*c;n=Math.atan2(2*o*l-2*a*c,1-2*u-2*p),i=Math.asin(2*d),s=Math.atan2(2*a*l-2*o*c,1-2*h-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),a=Math.cos(t/2),o=Math.cos(n/2),c=Math.sin(e/2),l=Math.sin(t/2),d=Math.sin(n/2);return i==="XYZ"?(this.x=c*a*o+s*l*d,this.y=s*l*o-c*a*d,this.z=s*a*d+c*l*o,this.w=s*a*o-c*l*d):i==="YXZ"?(this.x=c*a*o+s*l*d,this.y=s*l*o-c*a*d,this.z=s*a*d-c*l*o,this.w=s*a*o+c*l*d):i==="ZXY"?(this.x=c*a*o-s*l*d,this.y=s*l*o+c*a*d,this.z=s*a*d+c*l*o,this.w=s*a*o-c*l*d):i==="ZYX"?(this.x=c*a*o-s*l*d,this.y=s*l*o+c*a*d,this.z=s*a*d-c*l*o,this.w=s*a*o+c*l*d):i==="YZX"?(this.x=c*a*o+s*l*d,this.y=s*l*o+c*a*d,this.z=s*a*d-c*l*o,this.w=s*a*o-c*l*d):i==="XZY"&&(this.x=c*a*o-s*l*d,this.y=s*l*o-c*a*d,this.z=s*a*d+c*l*o,this.w=s*a*o+c*l*d),this}clone(){return new Qe(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Qe);const i=this.x,s=this.y,a=this.z,o=this.w;let c=e.x,l=e.y,d=e.z,h=e.w,u,p,m,v,x;return p=i*c+s*l+a*d+o*h,p<0&&(p=-p,c=-c,l=-l,d=-d,h=-h),1-p>1e-6?(u=Math.acos(p),m=Math.sin(u),v=Math.sin((1-t)*u)/m,x=Math.sin(t*u)/m):(v=1-t,x=t),n.x=v*i+x*c,n.y=v*s+x*l,n.z=v*a+x*d,n.w=v*o+x*h,n}integrate(e,t,n,i){i===void 0&&(i=new Qe);const s=e.x*n.x,a=e.y*n.y,o=e.z*n.z,c=this.x,l=this.y,d=this.z,h=this.w,u=t*.5;return i.x+=u*(s*h+a*d-o*l),i.y+=u*(a*h+o*c-s*d),i.z+=u*(o*h+s*l-a*c),i.w+=u*(-s*c-a*l-o*d),i}}const Vv=new _,Wv=new _,qv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ue{constructor(e){e===void 0&&(e={}),this.id=ue.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ue.idCounter=0;ue.types=qv;class Ne{constructor(e){e===void 0&&(e={}),this.position=new _,this.quaternion=new Qe,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Ne.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Ne.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new _),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new _),n.vsub(e,i),t.conjugate(pc),pc.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new _),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new _),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new _),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const pc=new Qe;class Hi extends ue{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:a}=e;super({type:ue.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new _;for(let s=0;s!==e.length;s++){const a=e[s],o=a.length;for(let c=0;c!==o;c++){const l=(c+1)%o;t[a[c]].vsub(t[a[l]],i),i.normalize();let d=!1;for(let h=0;h!==n.length;h++)if(n[h].almostEquals(i)||n[h].almostEquals(i)){d=!0;break}d||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new _;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],a=this.vertices[n[2]];Hi.computeNormal(i,s,a,t)}static computeNormal(e,t,n,i){const s=new _,a=new _;t.vsub(e,a),n.vsub(t,s),s.cross(a,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,a,o,c,l){const d=new _;let h=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){d.copy(n.faceNormals[m]),s.vmult(d,d);const v=d.dot(a);v>u&&(u=v,h=m)}const p=[];for(let m=0;m<n.faces[h].length;m++){const v=n.vertices[n.faces[h][m]],x=new _;x.copy(v),s.vmult(x,x),i.vadd(x,x),p.push(x)}h>=0&&this.clipFaceAgainstHull(a,e,t,p,o,c,l)}findSeparatingAxis(e,t,n,i,s,a,o,c){const l=new _,d=new _,h=new _,u=new _,p=new _,m=new _;let v=Number.MAX_VALUE;const x=this;if(x.uniqueAxes)for(let g=0;g!==x.uniqueAxes.length;g++){n.vmult(x.uniqueAxes[g],l);const f=x.testSepAxis(l,e,t,n,i,s);if(f===!1)return!1;f<v&&(v=f,a.copy(l))}else{const g=o?o.length:x.faces.length;for(let f=0;f<g;f++){const M=o?o[f]:f;l.copy(x.faceNormals[M]),n.vmult(l,l);const b=x.testSepAxis(l,e,t,n,i,s);if(b===!1)return!1;b<v&&(v=b,a.copy(l))}}if(e.uniqueAxes)for(let g=0;g!==e.uniqueAxes.length;g++){s.vmult(e.uniqueAxes[g],d);const f=x.testSepAxis(d,e,t,n,i,s);if(f===!1)return!1;f<v&&(v=f,a.copy(d))}else{const g=c?c.length:e.faces.length;for(let f=0;f<g;f++){const M=c?c[f]:f;d.copy(e.faceNormals[M]),s.vmult(d,d);const b=x.testSepAxis(d,e,t,n,i,s);if(b===!1)return!1;b<v&&(v=b,a.copy(d))}}for(let g=0;g!==x.uniqueEdges.length;g++){n.vmult(x.uniqueEdges[g],u);for(let f=0;f!==e.uniqueEdges.length;f++)if(s.vmult(e.uniqueEdges[f],p),u.cross(p,m),!m.almostZero()){m.normalize();const M=x.testSepAxis(m,e,t,n,i,s);if(M===!1)return!1;M<v&&(v=M,a.copy(m))}}return i.vsub(t,h),h.dot(a)>0&&a.negate(a),!0}testSepAxis(e,t,n,i,s,a){const o=this;Hi.project(o,e,n,i,Ua),Hi.project(t,e,s,a,ka);const c=Ua[0],l=Ua[1],d=ka[0],h=ka[1];if(c<h||d<l)return!1;const u=c-h,p=d-l;return u<p?u:p}calculateLocalInertia(e,t){const n=new _,i=new _;this.computeLocalAABB(i,n);const s=n.x-i.x,a=n.y-i.y,o=n.z-i.z;t.x=1/12*e*(2*a*2*a+2*o*2*o),t.y=1/12*e*(2*s*2*s+2*o*2*o),t.z=1/12*e*(2*a*2*a+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,a,o){const c=new _,l=new _,d=new _,h=new _,u=new _,p=new _,m=new _,v=new _,x=this,g=[],f=i,M=g;let b=-1,w=Number.MAX_VALUE;for(let F=0;F<x.faces.length;F++){c.copy(x.faceNormals[F]),n.vmult(c,c);const G=c.dot(e);G<w&&(w=G,b=F)}if(b<0)return;const y=x.faces[b];y.connectedFaces=[];for(let F=0;F<x.faces.length;F++)for(let G=0;G<x.faces[F].length;G++)y.indexOf(x.faces[F][G])!==-1&&F!==b&&y.connectedFaces.indexOf(F)===-1&&y.connectedFaces.push(F);const I=y.length;for(let F=0;F<I;F++){const G=x.vertices[y[F]],O=x.vertices[y[(F+1)%I]];G.vsub(O,l),d.copy(l),n.vmult(d,d),t.vadd(d,d),h.copy(this.faceNormals[b]),n.vmult(h,h),t.vadd(h,h),d.cross(h,u),u.negate(u),p.copy(G),n.vmult(p,p),t.vadd(p,p);const S=y.connectedFaces[F];m.copy(this.faceNormals[S]);const R=this.getPlaneConstantOfFace(S);v.copy(m),n.vmult(v,v);const P=R-v.dot(t);for(this.clipFaceAgainstPlane(f,M,v,P);f.length;)f.shift();for(;M.length;)f.push(M.shift())}m.copy(this.faceNormals[b]);const z=this.getPlaneConstantOfFace(b);v.copy(m),n.vmult(v,v);const B=z-v.dot(t);for(let F=0;F<f.length;F++){let G=v.dot(f[F])+B;if(G<=s&&(console.log(`clamped: depth=${G} to minDist=${s}`),G=s),G<=a){const O=f[F];if(G<=1e-6){const S={point:O,normal:v,depth:G};o.push(S)}}}}clipFaceAgainstPlane(e,t,n,i){let s,a;const o=e.length;if(o<2)return t;let c=e[e.length-1],l=e[0];s=n.dot(c)+i;for(let d=0;d<o;d++){if(l=e[d],a=n.dot(l)+i,s<0)if(a<0){const h=new _;h.copy(l),t.push(h)}else{const h=new _;c.lerp(l,s/(s-a),h),t.push(h)}else if(a<0){const h=new _;c.lerp(l,s/(s-a),h),t.push(h),t.push(l)}c=l,s=a}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new _);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new _);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let a,o,c,l,d,h,u=new _;for(let p=0;p<s.length;p++){u.copy(s[p]),t.vmult(u,u),e.vadd(u,u);const m=u;(a===void 0||m.x<a)&&(a=m.x),(l===void 0||m.x>l)&&(l=m.x),(o===void 0||m.y<o)&&(o=m.y),(d===void 0||m.y>d)&&(d=m.y),(c===void 0||m.z<c)&&(c=m.z),(h===void 0||m.z>h)&&(h=m.z)}n.set(a,o,c),i.set(l,d,h)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new _);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const a=i[s];t.vmult(a,a)}for(let s=0;s<this.faceNormals.length;s++){const a=this.faceNormals[s];t.vmult(a,a)}}if(e)for(let s=0;s<n;s++){const a=i[s];a.vadd(e,a)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=new _;this.getAveragePointLocal(s);for(let a=0;a<this.faces.length;a++){let o=i[a];const c=t[n[a][0]],l=new _;e.vsub(c,l);const d=o.dot(l),h=new _;s.vsub(c,h);const u=o.dot(h);if(d<0&&u>0||d>0&&u<0)return!1}return-1}static project(e,t,n,i,s){const a=e.vertices.length,o=jv;let c=0,l=0;const d=Xv,h=e.vertices;d.setZero(),Ne.vectorToLocalFrame(n,i,t,o),Ne.pointToLocalFrame(n,i,d,d);const u=d.dot(o);l=c=h[0].dot(o);for(let p=1;p<a;p++){const m=h[p].dot(o);m>c&&(c=m),m<l&&(l=m)}if(l-=u,c-=u,l>c){const p=l;l=c,c=p}s[0]=c,s[1]=l}}const Ua=[],ka=[];new _;const jv=new _,Xv=new _;class Rr extends ue{constructor(e){super({type:ue.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=_,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new Hi({vertices:s,faces:a,axes:o});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new _),Rr.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let a=0;a<s.length;a++)pn.set(s[a][0],s[a][1],s[a][2]),t.vmult(pn,pn),e.vadd(pn,pn),n(pn.x,pn.y,pn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Gt[0].set(s.x,s.y,s.z),Gt[1].set(-s.x,s.y,s.z),Gt[2].set(-s.x,-s.y,s.z),Gt[3].set(-s.x,-s.y,-s.z),Gt[4].set(s.x,-s.y,-s.z),Gt[5].set(s.x,s.y,-s.z),Gt[6].set(-s.x,s.y,-s.z),Gt[7].set(s.x,-s.y,s.z);const a=Gt[0];t.vmult(a,a),e.vadd(a,a),i.copy(a),n.copy(a);for(let o=1;o<8;o++){const c=Gt[o];t.vmult(c,c),e.vadd(c,c);const l=c.x,d=c.y,h=c.z;l>i.x&&(i.x=l),d>i.y&&(i.y=d),h>i.z&&(i.z=h),l<n.x&&(n.x=l),d<n.y&&(n.y=d),h<n.z&&(n.z=h)}}}const pn=new _,Gt=[new _,new _,new _,new _,new _,new _,new _,new _],Pr={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ir={AWAKE:0,SLEEPY:1,SLEEPING:2};class he extends Ll{constructor(e){e===void 0&&(e={}),super(),this.id=he.idCounter++,this.index=-1,this.world=null,this.vlambda=new _,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new _,this.previousPosition=new _,this.interpolatedPosition=new _,this.initPosition=new _,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new _,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new _,this.force=new _;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?he.STATIC:he.DYNAMIC,typeof e.type==typeof he.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=he.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new _,this.quaternion=new Qe,this.initQuaternion=new Qe,this.previousQuaternion=new Qe,this.interpolatedQuaternion=new Qe,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new _,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new _,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new _,this.invInertia=new _,this.invInertiaWorld=new zt,this.invMassSolve=0,this.invInertiaSolve=new _,this.invInertiaWorldSolve=new zt,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new _(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new _(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new St,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new _,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=he.AWAKE,this.wakeUpAfterNarrowphase=!1,e===he.SLEEPING&&this.dispatchEvent(he.wakeupEvent)}sleep(){this.sleepState=he.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===he.AWAKE&&n<i?(this.sleepState=he.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(he.sleepyEvent)):t===he.SLEEPY&&n>i?this.wakeUp():t===he.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(he.sleepEvent))}}updateSolveMassProperties(){this.sleepState===he.SLEEPING||this.type===he.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new _),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new _),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new _),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new _),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new _,s=new Qe;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const a=e[s];a.updateBoundingSphereRadius();const o=t[s].length(),c=a.boundingSphereRadius;o+c>i&&(i=o+c)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=Yv,a=Zv,o=this.quaternion,c=this.aabb,l=Jv;for(let d=0;d!==i;d++){const h=e[d];o.vmult(t[d],s),s.vadd(this.position,s),o.mult(n[d],a),h.calculateWorldAABB(s,a,l.lowerBound,l.upperBound),d===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=$v,i=Qv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new _),this.type!==he.DYNAMIC)return;this.sleepState===he.SLEEPING&&this.wakeUp();const n=Kv;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new _),this.type!==he.DYNAMIC)return;const n=ex,i=tx;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===he.DYNAMIC&&(this.sleepState===he.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new _),this.type!==he.DYNAMIC)return;this.sleepState===he.SLEEPING&&this.wakeUp();const n=t,i=nx;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=ix;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new _),this.type!==he.DYNAMIC)return;const n=sx,i=ax;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=rx;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Rr.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new _;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===he.DYNAMIC||this.type===he.KINEMATIC)||this.sleepState===he.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,a=this.position,o=this.force,c=this.torque,l=this.quaternion,d=this.invMass,h=this.invInertiaWorld,u=this.linearFactor,p=d*e;i.x+=o.x*p*u.x,i.y+=o.y*p*u.y,i.z+=o.z*p*u.z;const m=h.elements,v=this.angularFactor,x=c.x*v.x,g=c.y*v.y,f=c.z*v.z;s.x+=e*(m[0]*x+m[1]*g+m[2]*f),s.y+=e*(m[3]*x+m[4]*g+m[5]*f),s.z+=e*(m[6]*x+m[7]*g+m[8]*f),a.x+=i.x*e,a.y+=i.y*e,a.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}he.idCounter=0;he.COLLIDE_EVENT_NAME="collide";he.DYNAMIC=Pr.DYNAMIC;he.STATIC=Pr.STATIC;he.KINEMATIC=Pr.KINEMATIC;he.AWAKE=Ir.AWAKE;he.SLEEPY=Ir.SLEEPY;he.SLEEPING=Ir.SLEEPING;he.wakeupEvent={type:"wakeup"};he.sleepyEvent={type:"sleepy"};he.sleepEvent={type:"sleep"};const Yv=new _,Zv=new Qe,Jv=new St,$v=new zt,Qv=new zt;new zt;const Kv=new _,ex=new _,tx=new _,nx=new _,ix=new _,sx=new _,ax=new _,rx=new _;class ox{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&he.STATIC)!==0||e.sleepState===he.SLEEPING)&&((t.type&he.STATIC)!==0||t.sleepState===he.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=cx;t.position.vsub(e.position,s);const a=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<a&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=lx,i=dx,s=ux,a=e.length;for(let o=0;o!==a;o++)i[o]=e[o],s[o]=t[o];e.length=0,t.length=0;for(let o=0;o!==a;o++){const c=i[o].id,l=s[o].id,d=c<l?`${c},${l}`:`${l},${c}`;n[d]=o,n.keys.push(d)}for(let o=0;o!==n.keys.length;o++){const c=n.keys.pop(),l=n[c];e.push(i[l]),t.push(s[l]),delete n[c]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new _;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const cx=new _;new _;new Qe;new _;const lx={keys:[]},dx=[],ux=[];new _;new _;new _;class hx extends ox{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let a,o;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)a=i[c],o=i[l],this.needBroadphaseCollision(a,o)&&this.intersectionTest(a,o,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class Vs{constructor(){this.rayFromWorld=new _,this.rayToWorld=new _,this.hitNormalWorld=new _,this.hitPointWorld=new _,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,a,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=a,this.distance=o}}let Rl,Pl,Il,Dl,Nl,zl,Fl;const Dr={CLOSEST:1,ANY:2,ALL:4};Rl=ue.types.SPHERE;Pl=ue.types.PLANE;Il=ue.types.BOX;Dl=ue.types.CYLINDER;Nl=ue.types.CONVEXPOLYHEDRON;zl=ue.types.HEIGHTFIELD;Fl=ue.types.TRIMESH;class $e{get[Rl](){return this._intersectSphere}get[Pl](){return this._intersectPlane}get[Il](){return this._intersectBox}get[Dl](){return this._intersectConvex}get[Nl](){return this._intersectConvex}get[zl](){return this._intersectHeightfield}get[Fl](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new _),t===void 0&&(t=new _),this.from=e.clone(),this.to=t.clone(),this.direction=new _,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=$e.ANY,this.result=new Vs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||$e.ANY,this.result=t.result||new Vs,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(fc),Ha.length=0,e.broadphase.aabbQuery(e,fc,Ha),this.intersectBodies(Ha),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=px,s=fx;for(let a=0,o=e.shapes.length;a<o;a++){const c=e.shapes[a];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[a],s),e.quaternion.vmult(e.shapeOffsets[a],i),i.vadd(e.position,i),this.intersectShape(c,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(Cx(s,this.direction,n)>e.boundingSphereRadius)return;const o=this[e.type];o&&o.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const a=this.from,o=this.to,c=this.direction,l=new _(0,0,1);t.vmult(l,l);const d=new _;a.vsub(n,d);const h=d.dot(l);o.vsub(n,d);const u=d.dot(l);if(h*u>0||a.distanceTo(o)<h)return;const p=l.dot(c);if(Math.abs(p)<this.precision)return;const m=new _,v=new _,x=new _;a.vsub(n,m);const g=-l.dot(m)/p;c.scale(g,v),a.vadd(v,x),this.reportIntersection(l,x,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const a=mx;a.from.copy(this.from),a.to.copy(this.to),Ne.pointToLocalFrame(n,t,a.from,a.from),Ne.pointToLocalFrame(n,t,a.to,a.to),a.updateDirection();const o=gx;let c,l,d,h;c=l=0,d=h=e.data.length-1;const u=new St;a.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),c=Math.max(c,o[0]),l=Math.max(l,o[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),d=Math.min(d,o[0]+1),h=Math.min(h,o[1]+1);for(let p=c;p<d;p++)for(let m=l;m<h;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,m,u),!!u.overlapsRay(a)){if(e.getConvexTrianglePillar(p,m,!1),Ne.pointToWorldFrame(n,t,e.pillarOffset,Ls),this._intersectConvex(e.pillarConvex,t,Ls,i,s,mc),this.result.shouldStop)return;e.getConvexTrianglePillar(p,m,!0),Ne.pointToWorldFrame(n,t,e.pillarOffset,Ls),this._intersectConvex(e.pillarConvex,t,Ls,i,s,mc)}}}_intersectSphere(e,t,n,i,s){const a=this.from,o=this.to,c=e.radius,l=(o.x-a.x)**2+(o.y-a.y)**2+(o.z-a.z)**2,d=2*((o.x-a.x)*(a.x-n.x)+(o.y-a.y)*(a.y-n.y)+(o.z-a.z)*(a.z-n.z)),h=(a.x-n.x)**2+(a.y-n.y)**2+(a.z-n.z)**2-c**2,u=d**2-4*l*h,p=vx,m=xx;if(!(u<0))if(u===0)a.lerp(o,u,p),p.vsub(n,m),m.normalize(),this.reportIntersection(m,p,s,i,-1);else{const v=(-d-Math.sqrt(u))/(2*l),x=(-d+Math.sqrt(u))/(2*l);if(v>=0&&v<=1&&(a.lerp(o,v,p),p.vsub(n,m),m.normalize(),this.reportIntersection(m,p,s,i,-1)),this.result.shouldStop)return;x>=0&&x<=1&&(a.lerp(o,x,p),p.vsub(n,m),m.normalize(),this.reportIntersection(m,p,s,i,-1))}}_intersectConvex(e,t,n,i,s,a){const o=yx,c=gc,l=a&&a.faceList||null,d=e.faces,h=e.vertices,u=e.faceNormals,p=this.direction,m=this.from,v=this.to,x=m.distanceTo(v),g=l?l.length:d.length,f=this.result;for(let M=0;!f.shouldStop&&M<g;M++){const b=l?l[M]:M,w=d[b],y=u[b],I=t,z=n;c.copy(h[w[0]]),I.vmult(c,c),c.vadd(z,c),c.vsub(m,c),I.vmult(y,o);const B=p.dot(o);if(Math.abs(B)<this.precision)continue;const F=o.dot(c)/B;if(!(F<0)){p.scale(F,xt),xt.vadd(m,xt),Dt.copy(h[w[0]]),I.vmult(Dt,Dt),z.vadd(Dt,Dt);for(let G=1;!f.shouldStop&&G<w.length-1;G++){Ut.copy(h[w[G]]),kt.copy(h[w[G+1]]),I.vmult(Ut,Ut),I.vmult(kt,kt),z.vadd(Ut,Ut),z.vadd(kt,kt);const O=xt.distanceTo(m);!($e.pointInTriangle(xt,Dt,Ut,kt)||$e.pointInTriangle(xt,Ut,Dt,kt))||O>x||this.reportIntersection(o,xt,s,i,b)}}}}_intersectTrimesh(e,t,n,i,s,a){const o=_x,c=Ax,l=Tx,d=gc,h=bx,u=wx,p=Mx,m=Sx,v=Ex,x=e.indices;e.vertices;const g=this.from,f=this.to,M=this.direction;l.position.copy(n),l.quaternion.copy(t),Ne.vectorToLocalFrame(n,t,M,h),Ne.pointToLocalFrame(n,t,g,u),Ne.pointToLocalFrame(n,t,f,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,p.vsub(u,h),h.normalize();const b=u.distanceSquared(p);e.tree.rayQuery(this,l,c);for(let w=0,y=c.length;!this.result.shouldStop&&w!==y;w++){const I=c[w];e.getNormal(I,o),e.getVertex(x[I*3],Dt),Dt.vsub(u,d);const z=h.dot(o),B=o.dot(d)/z;if(B<0)continue;h.scale(B,xt),xt.vadd(u,xt),e.getVertex(x[I*3+1],Ut),e.getVertex(x[I*3+2],kt);const F=xt.distanceSquared(u);!($e.pointInTriangle(xt,Ut,Dt,kt)||$e.pointInTriangle(xt,Dt,Ut,kt))||F>b||(Ne.vectorToWorldFrame(t,o,v),Ne.pointToWorldFrame(n,t,xt,m),this.reportIntersection(v,m,s,i,I))}c.length=0}reportIntersection(e,t,n,i,s){const a=this.from,o=this.to,c=a.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case $e.ALL:this.hasHit=!0,l.set(a,o,e,t,n,i,c),l.hasHit=!0,this.callback(l);break;case $e.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(a,o,e,t,n,i,c));break;case $e.ANY:this.hasHit=!0,l.hasHit=!0,l.set(a,o,e,t,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Tn),n.vsub(t,Li),e.vsub(t,Va);const s=Tn.dot(Tn),a=Tn.dot(Li),o=Tn.dot(Va),c=Li.dot(Li),l=Li.dot(Va);let d,h;return(d=c*o-a*l)>=0&&(h=s*l-a*o)>=0&&d+h<s*c-a*a}}$e.CLOSEST=Dr.CLOSEST;$e.ANY=Dr.ANY;$e.ALL=Dr.ALL;const fc=new St,Ha=[],Li=new _,Va=new _,px=new _,fx=new Qe,xt=new _,Dt=new _,Ut=new _,kt=new _;new _;new Vs;const mc={faceList:[0]},Ls=new _,mx=new $e,gx=[],vx=new _,xx=new _,yx=new _;new _;new _;const gc=new _,_x=new _,bx=new _,wx=new _,Mx=new _,Ex=new _,Sx=new _;new St;const Ax=[],Tx=new Ne,Tn=new _,Rs=new _;function Cx(r,e,t){t.vsub(r,Tn);const n=Tn.dot(e);return e.scale(n,Rs),Rs.vadd(r,Rs),t.distanceTo(Rs)}class Bl{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class ta{constructor(e,t,n){n===void 0&&(n={}),n=Bl.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=t,this.id=ta.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(e&&e.wakeUp(),t&&t.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){const e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!0}disable(){const e=this.equations;for(let t=0;t<e.length;t++)e[t].enabled=!1}}ta.idCounter=0;class vc{constructor(){this.spatial=new _,this.rotational=new _}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class $i{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=$i.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new vc,this.jacobianElementB=new vc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,a=n;this.a=4/(a*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(a*a*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),a=this.computeGiMf();return-s*e-i*t-a*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,a=i.position;return e.spatial.dot(s)+t.spatial.dot(a)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,a=i.velocity,o=n.angularVelocity,c=i.angularVelocity;return e.multiplyVectors(s,o)+t.multiplyVectors(a,c)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,a=i.vlambda,o=n.wlambda,c=i.wlambda;return e.multiplyVectors(s,o)+t.multiplyVectors(a,c)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,a=n.torque,o=i.force,c=i.torque,l=n.invMassSolve,d=i.invMassSolve;return s.scale(l,xc),o.scale(d,yc),n.invInertiaWorldSolve.vmult(a,_c),i.invInertiaWorldSolve.vmult(c,bc),e.multiplyVectors(xc,_c)+t.multiplyVectors(yc,bc)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,a=i.invMassSolve,o=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+a;return o.vmult(e.rotational,Ps),l+=Ps.dot(e.rotational),c.vmult(t.rotational,Ps),l+=Ps.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,a=Lx;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,a),i.wlambda.addScaledVector(e,a,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,a),s.wlambda.addScaledVector(e,a,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}$i.idCounter=0;const xc=new _,yc=new _,_c=new _,bc=new _,Ps=new _,Lx=new _;class Ol extends $i{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new _,this.rj=new _,this.ni=new _}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,a=this.ri,o=this.rj,c=Rx,l=Px,d=i.velocity,h=i.angularVelocity;i.force,i.torque;const u=s.velocity,p=s.angularVelocity;s.force,s.torque;const m=Ix,v=this.jacobianElementA,x=this.jacobianElementB,g=this.ni;a.cross(g,c),o.cross(g,l),g.negate(v.spatial),c.negate(v.rotational),x.spatial.copy(g),x.rotational.copy(l),m.copy(s.position),m.vadd(o,m),m.vsub(i.position,m),m.vsub(a,m);const f=g.dot(m),M=this.restitution+1,b=M*u.dot(g)-M*d.dot(g)+p.dot(l)-h.dot(c),w=this.computeGiMf();return-f*t-b*n-e*w}getImpactVelocityAlongNormal(){const e=Dx,t=Nx,n=zx,i=Fx,s=Bx;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const Rx=new _,Px=new _,Ix=new _,Dx=new _,Nx=new _,zx=new _,Fx=new _,Bx=new _;new _;new _;new _;new _;new _;new _;class Ox extends ta{constructor(e,t,n,i){i===void 0&&(i=1e6),super(e,t),typeof n>"u"&&(n=e.position.distanceTo(t.position)),this.distance=n;const s=this.distanceEquation=new Ol(e,t);this.equations.push(s),s.minForce=-i,s.maxForce=i}update(){const e=this.bodyA,t=this.bodyB,n=this.distanceEquation,i=this.distance*.5,s=n.ni;t.position.vsub(e.position,s),s.normalize(),s.scale(i,n.ri),s.scale(-i,n.rj)}}new _;new _;new _;new _;class wc extends $i{constructor(e,t,n){super(e,t,-n,n),this.ri=new _,this.rj=new _,this.t=new _}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Gx,a=Ux,o=this.t;n.cross(o,s),i.cross(o,a);const c=this.jacobianElementA,l=this.jacobianElementB;o.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(o),l.rotational.copy(a);const d=this.computeGW(),h=this.computeGiMf();return-d*t-e*h}}const Gx=new _,Ux=new _;class Qi{constructor(e,t,n){n=Bl.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Qi.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Qi.idCounter=0;class Ki{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Ki.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Ki.idCounter=0;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new $e;new _;new _;new _;new _(1,0,0),new _(0,1,0),new _(0,0,1);new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;class kx extends ue{constructor(e){if(super({type:ue.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new _);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,a=["x","y","z"];for(let o=0;o<a.length;o++){const c=a[o];n[c]=e[c]-s,i[c]=e[c]+s}}}new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new _;new St;new _;new St;new _;new _;new _;new _;new _;new _;new _;new St;new _;new Ne;new St;class Hx{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Vx extends Hx{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,a=this.equations,o=a.length,c=t.bodies,l=c.length,d=e;let h,u,p,m,v,x;if(o!==0)for(let b=0;b!==l;b++)c[b].updateSolveMassProperties();const g=qx,f=jx,M=Wx;g.length=o,f.length=o,M.length=o;for(let b=0;b!==o;b++){const w=a[b];M[b]=0,f[b]=w.computeB(d),g[b]=1/w.computeC()}if(o!==0){for(let y=0;y!==l;y++){const I=c[y],z=I.vlambda,B=I.wlambda;z.set(0,0,0),B.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let y=0;y!==o;y++){const I=a[y];h=f[y],u=g[y],x=M[y],v=I.computeGWlambda(),p=u*(h-v-I.eps*x),x+p<I.minForce?p=I.minForce-x:x+p>I.maxForce&&(p=I.maxForce-x),M[y]+=p,m+=p>0?p:-p,I.addToWlambda(p)}if(m*m<s)break}for(let y=0;y!==l;y++){const I=c[y],z=I.velocity,B=I.angularVelocity;I.vlambda.vmul(I.linearFactor,I.vlambda),z.vadd(I.vlambda,z),I.wlambda.vmul(I.angularFactor,I.wlambda),B.vadd(I.wlambda,B)}let b=a.length;const w=1/d;for(;b--;)a[b].multiplier=M[b]*w}return n}}const Wx=[],qx=[],jx=[];class Xx{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Yx extends Xx{constructor(){super(...arguments),this.type=_}constructObject(){return new _}}const We={sphereSphere:ue.types.SPHERE,spherePlane:ue.types.SPHERE|ue.types.PLANE,boxBox:ue.types.BOX|ue.types.BOX,sphereBox:ue.types.SPHERE|ue.types.BOX,planeBox:ue.types.PLANE|ue.types.BOX,convexConvex:ue.types.CONVEXPOLYHEDRON,sphereConvex:ue.types.SPHERE|ue.types.CONVEXPOLYHEDRON,planeConvex:ue.types.PLANE|ue.types.CONVEXPOLYHEDRON,boxConvex:ue.types.BOX|ue.types.CONVEXPOLYHEDRON,sphereHeightfield:ue.types.SPHERE|ue.types.HEIGHTFIELD,boxHeightfield:ue.types.BOX|ue.types.HEIGHTFIELD,convexHeightfield:ue.types.CONVEXPOLYHEDRON|ue.types.HEIGHTFIELD,sphereParticle:ue.types.PARTICLE|ue.types.SPHERE,planeParticle:ue.types.PLANE|ue.types.PARTICLE,boxParticle:ue.types.BOX|ue.types.PARTICLE,convexParticle:ue.types.PARTICLE|ue.types.CONVEXPOLYHEDRON,cylinderCylinder:ue.types.CYLINDER,sphereCylinder:ue.types.SPHERE|ue.types.CYLINDER,planeCylinder:ue.types.PLANE|ue.types.CYLINDER,boxCylinder:ue.types.BOX|ue.types.CYLINDER,convexCylinder:ue.types.CONVEXPOLYHEDRON|ue.types.CYLINDER,heightfieldCylinder:ue.types.HEIGHTFIELD|ue.types.CYLINDER,particleCylinder:ue.types.PARTICLE|ue.types.CYLINDER,sphereTrimesh:ue.types.SPHERE|ue.types.TRIMESH,planeTrimesh:ue.types.PLANE|ue.types.TRIMESH};class Zx{get[We.sphereSphere](){return this.sphereSphere}get[We.spherePlane](){return this.spherePlane}get[We.boxBox](){return this.boxBox}get[We.sphereBox](){return this.sphereBox}get[We.planeBox](){return this.planeBox}get[We.convexConvex](){return this.convexConvex}get[We.sphereConvex](){return this.sphereConvex}get[We.planeConvex](){return this.planeConvex}get[We.boxConvex](){return this.boxConvex}get[We.sphereHeightfield](){return this.sphereHeightfield}get[We.boxHeightfield](){return this.boxHeightfield}get[We.convexHeightfield](){return this.convexHeightfield}get[We.sphereParticle](){return this.sphereParticle}get[We.planeParticle](){return this.planeParticle}get[We.boxParticle](){return this.boxParticle}get[We.convexParticle](){return this.convexParticle}get[We.cylinderCylinder](){return this.convexConvex}get[We.sphereCylinder](){return this.sphereConvex}get[We.planeCylinder](){return this.planeConvex}get[We.boxCylinder](){return this.boxConvex}get[We.convexCylinder](){return this.convexConvex}get[We.heightfieldCylinder](){return this.heightfieldCylinder}get[We.particleCylinder](){return this.particleCylinder}get[We.sphereTrimesh](){return this.sphereTrimesh}get[We.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Yx,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,a){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=t):o=new Ol(e,t),o.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;o.restitution=c.restitution,o.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||e.material,d=i.material||t.material;return l&&d&&l.restitution>=0&&d.restitution>=0&&(o.restitution=l.restitution*d.restitution),o.si=s||n,o.sj=a||i,o}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,a=e.sj,o=this.world,c=this.currentContactMaterial;let l=c.friction;const d=s.material||n.material,h=a.material||i.material;if(d&&h&&d.friction>=0&&h.friction>=0&&(l=d.friction*h.friction),l>0){const u=l*(o.frictionGravity||o.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const m=this.frictionEquationPool,v=m.length?m.pop():new wc(n,i,u*p),x=m.length?m.pop():new wc(n,i,u*p);return v.bi=x.bi=n,v.bj=x.bj=i,v.minForce=x.minForce=-u*p,v.maxForce=x.maxForce=u*p,v.ri.copy(e.ri),v.rj.copy(e.rj),x.ri.copy(e.ri),x.rj.copy(e.rj),e.ni.tangents(v.t,x.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,o.dt),x.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,o.dt),v.enabled=x.enabled=e.enabled,t.push(v,x),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];An.setZero(),Qn.setZero(),Kn.setZero();const s=t.bi;t.bj;for(let o=0;o!==e;o++)t=this.result[this.result.length-1-o],t.bi!==s?(An.vadd(t.ni,An),Qn.vadd(t.ri,Qn),Kn.vadd(t.rj,Kn)):(An.vsub(t.ni,An),Qn.vadd(t.rj,Qn),Kn.vadd(t.ri,Kn));const a=1/e;Qn.scale(a,n.ri),Kn.scale(a,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),An.normalize(),An.tangents(n.t,i.t)}getContacts(e,t,n,i,s,a,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=a;const c=Qx,l=Kx,d=Jx,h=$x;for(let u=0,p=e.length;u!==p;u++){const m=e[u],v=t[u];let x=null;m.material&&v.material&&(x=n.getContactMaterial(m.material,v.material)||null);const g=m.type&he.KINEMATIC&&v.type&he.STATIC||m.type&he.STATIC&&v.type&he.KINEMATIC||m.type&he.KINEMATIC&&v.type&he.KINEMATIC;for(let f=0;f<m.shapes.length;f++){m.quaternion.mult(m.shapeOrientations[f],c),m.quaternion.vmult(m.shapeOffsets[f],d),d.vadd(m.position,d);const M=m.shapes[f];for(let b=0;b<v.shapes.length;b++){v.quaternion.mult(v.shapeOrientations[b],l),v.quaternion.vmult(v.shapeOffsets[b],h),h.vadd(v.position,h);const w=v.shapes[b];if(!(M.collisionFilterMask&w.collisionFilterGroup&&w.collisionFilterMask&M.collisionFilterGroup)||d.distanceTo(h)>M.boundingSphereRadius+w.boundingSphereRadius)continue;let y=null;M.material&&w.material&&(y=n.getContactMaterial(M.material,w.material)||null),this.currentContactMaterial=y||x||n.defaultContactMaterial;const I=M.type|w.type,z=this[I];if(z){let B=!1;M.type<w.type?B=z.call(this,M,w,d,h,c,l,m,v,M,w,g):B=z.call(this,w,M,h,d,l,c,v,m,M,w,g),B&&g&&(n.shapeOverlapKeeper.set(M.id,w.id),n.bodyOverlapKeeper.set(m.id,v.id))}}}}}sphereSphere(e,t,n,i,s,a,o,c,l,d,h){if(h)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(o,c,e,t,l,d);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,s,a,o,c,l,d,h){const u=this.createContactEquation(o,c,e,t,l,d);if(u.ni.set(0,0,1),a.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,Is),u.ni.scale(u.ni.dot(Is),Mc),Is.vsub(Mc,u.rj),-Is.dot(u.ni)<=e.radius){if(h)return!0;const p=u.ri,m=u.rj;p.vadd(n,p),p.vsub(o.position,p),m.vadd(i,m),m.vsub(c.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,s,a,o,c,l,d,h){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,a,o,c,e,t,h)}sphereBox(e,t,n,i,s,a,o,c,l,d,h){const u=this.v3pool,p=Sy;n.vsub(i,Ds),t.getSideNormals(p,a);const m=e.radius;let v=!1;const x=Ty,g=Cy,f=Ly;let M=null,b=0,w=0,y=0,I=null;for(let C=0,Z=p.length;C!==Z&&v===!1;C++){const $=wy;$.copy(p[C]);const Y=$.length();$.normalize();const re=Ds.dot($);if(re<Y+m&&re>0){const ae=My,ne=Ey;ae.copy(p[(C+1)%3]),ne.copy(p[(C+2)%3]);const fe=ae.length(),J=ne.length();ae.normalize(),ne.normalize();const Re=Ds.dot(ae),Se=Ds.dot(ne);if(Re<fe&&Re>-fe&&Se<J&&Se>-J){const ge=Math.abs(re-Y-m);if((I===null||ge<I)&&(I=ge,w=Re,y=Se,M=Y,x.copy($),g.copy(ae),f.copy(ne),b++,h))return!0}}}if(b){v=!0;const C=this.createContactEquation(o,c,e,t,l,d);x.scale(-m,C.ri),C.ni.copy(x),C.ni.negate(C.ni),x.scale(M,x),g.scale(w,g),x.vadd(g,x),f.scale(y,f),x.vadd(f,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(o.position,C.ri),C.rj.vadd(i,C.rj),C.rj.vsub(c.position,C.rj),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult)}let z=u.get();const B=Ay;for(let C=0;C!==2&&!v;C++)for(let Z=0;Z!==2&&!v;Z++)for(let $=0;$!==2&&!v;$++)if(z.set(0,0,0),C?z.vadd(p[0],z):z.vsub(p[0],z),Z?z.vadd(p[1],z):z.vsub(p[1],z),$?z.vadd(p[2],z):z.vsub(p[2],z),i.vadd(z,B),B.vsub(n,B),B.lengthSquared()<m*m){if(h)return!0;v=!0;const Y=this.createContactEquation(o,c,e,t,l,d);Y.ri.copy(B),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(m,Y.ri),Y.rj.copy(z),Y.ri.vadd(n,Y.ri),Y.ri.vsub(o.position,Y.ri),Y.rj.vadd(i,Y.rj),Y.rj.vsub(c.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}u.release(z),z=null;const F=u.get(),G=u.get(),O=u.get(),S=u.get(),R=u.get(),P=p.length;for(let C=0;C!==P&&!v;C++)for(let Z=0;Z!==P&&!v;Z++)if(C%3!==Z%3){p[Z].cross(p[C],F),F.normalize(),p[C].vadd(p[Z],G),O.copy(n),O.vsub(G,O),O.vsub(i,O);const $=O.dot(F);F.scale($,S);let Y=0;for(;Y===C%3||Y===Z%3;)Y++;R.copy(n),R.vsub(S,R),R.vsub(G,R),R.vsub(i,R);const re=Math.abs($),ae=R.length();if(re<p[Y].length()&&ae<m){if(h)return!0;v=!0;const ne=this.createContactEquation(o,c,e,t,l,d);G.vadd(S,ne.rj),ne.rj.copy(ne.rj),R.negate(ne.ni),ne.ni.normalize(),ne.ri.copy(ne.rj),ne.ri.vadd(i,ne.ri),ne.ri.vsub(n,ne.ri),ne.ri.normalize(),ne.ri.scale(m,ne.ri),ne.ri.vadd(n,ne.ri),ne.ri.vsub(o.position,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(c.position,ne.rj),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult)}}u.release(F,G,O,S,R)}planeBox(e,t,n,i,s,a,o,c,l,d,h){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,a,o,c,e,t,h)}convexConvex(e,t,n,i,s,a,o,c,l,d,h,u,p){const m=Wy;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,a,m,u,p)){const v=[],x=qy;e.clipAgainstHull(n,s,t,i,a,m,-100,100,v);let g=0;for(let f=0;f!==v.length;f++){if(h)return!0;const M=this.createContactEquation(o,c,e,t,l,d),b=M.ri,w=M.rj;m.negate(M.ni),v[f].normal.negate(x),x.scale(v[f].depth,x),v[f].point.vadd(x,b),w.copy(v[f].point),b.vsub(n,b),w.vsub(i,w),b.vadd(n,b),b.vsub(o.position,b),w.vadd(i,w),w.vsub(c.position,w),this.result.push(M),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(e,t,n,i,s,a,o,c,l,d,h){const u=this.v3pool;n.vsub(i,Ry);const p=t.faceNormals,m=t.faces,v=t.vertices,x=e.radius;let g=!1;for(let f=0;f!==v.length;f++){const M=v[f],b=Ny;a.vmult(M,b),i.vadd(b,b);const w=Dy;if(b.vsub(n,w),w.lengthSquared()<x*x){if(h)return!0;g=!0;const y=this.createContactEquation(o,c,e,t,l,d);y.ri.copy(w),y.ri.normalize(),y.ni.copy(y.ri),y.ri.scale(x,y.ri),b.vsub(i,y.rj),y.ri.vadd(n,y.ri),y.ri.vsub(o.position,y.ri),y.rj.vadd(i,y.rj),y.rj.vsub(c.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult);return}}for(let f=0,M=m.length;f!==M&&g===!1;f++){const b=p[f],w=m[f],y=zy;a.vmult(b,y);const I=Fy;a.vmult(v[w[0]],I),I.vadd(i,I);const z=By;y.scale(-x,z),n.vadd(z,z);const B=Oy;z.vsub(I,B);const F=B.dot(y),G=Gy;if(n.vsub(I,G),F<0&&G.dot(y)>0){const O=[];for(let S=0,R=w.length;S!==R;S++){const P=u.get();a.vmult(v[w[S]],P),i.vadd(P,P),O.push(P)}if(by(O,y,n)){if(h)return!0;g=!0;const S=this.createContactEquation(o,c,e,t,l,d);y.scale(-x,S.ri),y.negate(S.ni);const R=u.get();y.scale(-F,R);const P=u.get();y.scale(-x,P),n.vsub(i,S.rj),S.rj.vadd(P,S.rj),S.rj.vadd(R,S.rj),S.rj.vadd(i,S.rj),S.rj.vsub(c.position,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(o.position,S.ri),u.release(R),u.release(P),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);for(let C=0,Z=O.length;C!==Z;C++)u.release(O[C]);return}else for(let S=0;S!==w.length;S++){const R=u.get(),P=u.get();a.vmult(v[w[(S+1)%w.length]],R),a.vmult(v[w[(S+2)%w.length]],P),i.vadd(R,R),i.vadd(P,P);const C=Py;P.vsub(R,C);const Z=Iy;C.unit(Z);const $=u.get(),Y=u.get();n.vsub(R,Y);const re=Y.dot(Z);Z.scale(re,$),$.vadd(R,$);const ae=u.get();if($.vsub(n,ae),re>0&&re*re<C.lengthSquared()&&ae.lengthSquared()<x*x){if(h)return!0;const ne=this.createContactEquation(o,c,e,t,l,d);$.vsub(i,ne.rj),$.vsub(n,ne.ni),ne.ni.normalize(),ne.ni.scale(x,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(c.position,ne.rj),ne.ri.vadd(n,ne.ri),ne.ri.vsub(o.position,ne.ri),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult);for(let fe=0,J=O.length;fe!==J;fe++)u.release(O[fe]);u.release(R),u.release(P),u.release($),u.release(ae),u.release(Y);return}u.release(R),u.release(P),u.release($),u.release(ae),u.release(Y)}for(let S=0,R=O.length;S!==R;S++)u.release(O[S])}}}planeConvex(e,t,n,i,s,a,o,c,l,d,h){const u=Uy,p=ky;p.set(0,0,1),s.vmult(p,p);let m=0;const v=Hy;for(let x=0;x!==t.vertices.length;x++)if(u.copy(t.vertices[x]),a.vmult(u,u),i.vadd(u,u),u.vsub(n,v),p.dot(v)<=0){if(h)return!0;const f=this.createContactEquation(o,c,e,t,l,d),M=Vy;p.scale(p.dot(v),M),u.vsub(M,M),M.vsub(n,f.ri),f.ni.copy(p),u.vsub(i,f.rj),f.ri.vadd(n,f.ri),f.ri.vsub(o.position,f.ri),f.rj.vadd(i,f.rj),f.rj.vsub(c.position,f.rj),this.result.push(f),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(f,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(e,t,n,i,s,a,o,c,l,d,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,a,o,c,e,t,h)}sphereHeightfield(e,t,n,i,s,a,o,c,l,d,h){const u=t.data,p=e.radius,m=t.elementSize,v=i0,x=n0;Ne.pointToLocalFrame(i,a,n,x);let g=Math.floor((x.x-p)/m)-1,f=Math.ceil((x.x+p)/m)+1,M=Math.floor((x.y-p)/m)-1,b=Math.ceil((x.y+p)/m)+1;if(f<0||b<0||g>u.length||M>u[0].length)return;g<0&&(g=0),f<0&&(f=0),M<0&&(M=0),b<0&&(b=0),g>=u.length&&(g=u.length-1),f>=u.length&&(f=u.length-1),b>=u[0].length&&(b=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const w=[];t.getRectMinMax(g,M,f,b,w);const y=w[0],I=w[1];if(x.z-p>I||x.z+p<y)return;const z=this.result;for(let B=g;B<f;B++)for(let F=M;F<b;F++){const G=z.length;let O=!1;if(t.getConvexTrianglePillar(B,F,!1),Ne.pointToWorldFrame(i,a,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,n,v,s,a,o,c,e,t,h)),h&&O||(t.getConvexTrianglePillar(B,F,!0),Ne.pointToWorldFrame(i,a,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,n,v,s,a,o,c,e,t,h)),h&&O))return!0;if(z.length-G>2)return}}boxHeightfield(e,t,n,i,s,a,o,c,l,d,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,a,o,c,e,t,h)}convexHeightfield(e,t,n,i,s,a,o,c,l,d,h){const u=t.data,p=t.elementSize,m=e.boundingSphereRadius,v=e0,x=t0,g=Ky;Ne.pointToLocalFrame(i,a,n,g);let f=Math.floor((g.x-m)/p)-1,M=Math.ceil((g.x+m)/p)+1,b=Math.floor((g.y-m)/p)-1,w=Math.ceil((g.y+m)/p)+1;if(M<0||w<0||f>u.length||b>u[0].length)return;f<0&&(f=0),M<0&&(M=0),b<0&&(b=0),w<0&&(w=0),f>=u.length&&(f=u.length-1),M>=u.length&&(M=u.length-1),w>=u[0].length&&(w=u[0].length-1),b>=u[0].length&&(b=u[0].length-1);const y=[];t.getRectMinMax(f,b,M,w,y);const I=y[0],z=y[1];if(!(g.z-m>z||g.z+m<I))for(let B=f;B<M;B++)for(let F=b;F<w;F++){let G=!1;if(t.getConvexTrianglePillar(B,F,!1),Ne.pointToWorldFrame(i,a,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(G=this.convexConvex(e,t.pillarConvex,n,v,s,a,o,c,null,null,h,x,null)),h&&G||(t.getConvexTrianglePillar(B,F,!0),Ne.pointToWorldFrame(i,a,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(G=this.convexConvex(e,t.pillarConvex,n,v,s,a,o,c,null,null,h,x,null)),h&&G))return!0}}sphereParticle(e,t,n,i,s,a,o,c,l,d,h){const u=Zy;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(h)return!0;const m=this.createContactEquation(c,o,t,e,l,d);u.normalize(),m.rj.copy(u),m.rj.scale(e.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(e,t,n,i,s,a,o,c,l,d,h){const u=jy;u.set(0,0,1),o.quaternion.vmult(u,u);const p=Xy;if(i.vsub(o.position,p),u.dot(p)<=0){if(h)return!0;const v=this.createContactEquation(c,o,t,e,l,d);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const x=Yy;u.scale(u.dot(i),x),i.vsub(x,x),v.rj.copy(x),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(e,t,n,i,s,a,o,c,l,d,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,a,o,c,e,t,h)}convexParticle(e,t,n,i,s,a,o,c,l,d,h){let u=-1;const p=$y,m=Qy;let v=null;const x=Jy;if(x.copy(i),x.vsub(n,x),s.conjugate(Ec),Ec.vmult(x,x),e.pointIsInside(x)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let g=0,f=e.faces.length;g!==f;g++){const M=[e.worldVertices[e.faces[g][0]]],b=e.worldFaceNormals[g];i.vsub(M[0],Sc);const w=-b.dot(Sc);if(v===null||Math.abs(w)<Math.abs(v)){if(h)return!0;v=w,u=g,p.copy(b)}}if(u!==-1){const g=this.createContactEquation(c,o,t,e,l,d);p.scale(v,m),m.vadd(i,m),m.vsub(n,m),g.rj.copy(m),p.negate(g.ni),g.ri.set(0,0,0);const f=g.ri,M=g.rj;f.vadd(i,f),f.vsub(c.position,f),M.vadd(n,M),M.vsub(o.position,M),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,a,o,c,l,d,h){return this.convexHeightfield(t,e,i,n,a,s,c,o,l,d,h)}particleCylinder(e,t,n,i,s,a,o,c,l,d,h){return this.convexParticle(t,e,i,n,a,s,c,o,l,d,h)}sphereTrimesh(e,t,n,i,s,a,o,c,l,d,h){const u=oy,p=cy,m=ly,v=dy,x=uy,g=hy,f=gy,M=ry,b=sy,w=vy;Ne.pointToLocalFrame(i,a,n,x);const y=e.radius;f.lowerBound.set(x.x-y,x.y-y,x.z-y),f.upperBound.set(x.x+y,x.y+y,x.z+y),t.getTrianglesInAABB(f,w);const I=ay,z=e.radius*e.radius;for(let S=0;S<w.length;S++)for(let R=0;R<3;R++)if(t.getVertex(t.indices[w[S]*3+R],I),I.vsub(x,b),b.lengthSquared()<=z){if(M.copy(I),Ne.pointToWorldFrame(i,a,M,I),I.vsub(n,b),h)return!0;let P=this.createContactEquation(o,c,e,t,l,d);P.ni.copy(b),P.ni.normalize(),P.ri.copy(P.ni),P.ri.scale(e.radius,P.ri),P.ri.vadd(n,P.ri),P.ri.vsub(o.position,P.ri),P.rj.copy(I),P.rj.vsub(c.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}for(let S=0;S<w.length;S++)for(let R=0;R<3;R++){t.getVertex(t.indices[w[S]*3+R],u),t.getVertex(t.indices[w[S]*3+(R+1)%3],p),p.vsub(u,m),x.vsub(p,g);const P=g.dot(m);x.vsub(u,g);let C=g.dot(m);if(C>0&&P<0&&(x.vsub(u,g),v.copy(m),v.normalize(),C=g.dot(v),v.scale(C,g),g.vadd(u,g),g.distanceTo(x)<e.radius)){if(h)return!0;const $=this.createContactEquation(o,c,e,t,l,d);g.vsub(x,$.ni),$.ni.normalize(),$.ni.scale(e.radius,$.ri),$.ri.vadd(n,$.ri),$.ri.vsub(o.position,$.ri),Ne.pointToWorldFrame(i,a,g,g),g.vsub(c.position,$.rj),Ne.vectorToWorldFrame(a,$.ni,$.ni),Ne.vectorToWorldFrame(a,$.ri,$.ri),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}}const B=py,F=fy,G=my,O=iy;for(let S=0,R=w.length;S!==R;S++){t.getTriangleVertices(w[S],B,F,G),t.getNormal(w[S],O),x.vsub(B,g);let P=g.dot(O);if(O.scale(P,g),x.vsub(g,g),P=g.distanceTo(x),$e.pointInTriangle(g,B,F,G)&&P<e.radius){if(h)return!0;let C=this.createContactEquation(o,c,e,t,l,d);g.vsub(x,C.ni),C.ni.normalize(),C.ni.scale(e.radius,C.ri),C.ri.vadd(n,C.ri),C.ri.vsub(o.position,C.ri),Ne.pointToWorldFrame(i,a,g,g),g.vsub(c.position,C.rj),Ne.vectorToWorldFrame(a,C.ni,C.ni),Ne.vectorToWorldFrame(a,C.ri,C.ri),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult)}}w.length=0}planeTrimesh(e,t,n,i,s,a,o,c,l,d,h){const u=new _,p=ey;p.set(0,0,1),s.vmult(p,p);for(let m=0;m<t.vertices.length/3;m++){t.getVertex(m,u);const v=new _;v.copy(u),Ne.pointToWorldFrame(i,a,v,u);const x=ty;if(u.vsub(n,x),p.dot(x)<=0){if(h)return!0;const f=this.createContactEquation(o,c,e,t,l,d);f.ni.copy(p);const M=ny;p.scale(x.dot(p),M),u.vsub(M,M),f.ri.copy(M),f.ri.vsub(o.position,f.ri),f.rj.copy(u),f.rj.vsub(c.position,f.rj),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}}}const An=new _,Qn=new _,Kn=new _,Jx=new _,$x=new _,Qx=new Qe,Kx=new Qe,ey=new _,ty=new _,ny=new _,iy=new _,sy=new _;new _;const ay=new _,ry=new _,oy=new _,cy=new _,ly=new _,dy=new _,uy=new _,hy=new _,py=new _,fy=new _,my=new _,gy=new St,vy=[],Is=new _,Mc=new _,xy=new _,yy=new _,_y=new _;function by(r,e,t){let n=null;const i=r.length;for(let s=0;s!==i;s++){const a=r[s],o=xy;r[(s+1)%i].vsub(a,o);const c=yy;o.cross(e,c);const l=_y;t.vsub(a,l);const d=c.dot(l);if(n===null||d>0&&n===!0||d<=0&&n===!1){n===null&&(n=d>0);continue}else return!1}return!0}const Ds=new _,wy=new _,My=new _,Ey=new _,Sy=[new _,new _,new _,new _,new _,new _],Ay=new _,Ty=new _,Cy=new _,Ly=new _,Ry=new _,Py=new _,Iy=new _,Dy=new _,Ny=new _,zy=new _,Fy=new _,By=new _,Oy=new _,Gy=new _;new _;new _;const Uy=new _,ky=new _,Hy=new _,Vy=new _,Wy=new _,qy=new _,jy=new _,Xy=new _,Yy=new _,Zy=new _,Ec=new Qe,Jy=new _;new _;const $y=new _,Sc=new _,Qy=new _,Ky=new _,e0=new _,t0=[0],n0=new _,i0=new _;class Ac{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let a=i.length-1;a>=s;a--)i[a+1]=i[a];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,a=i.length;let o=0;for(let c=0;c<s;c++){let l=!1;const d=n[c];for(;d>i[o];)o++;l=d===i[o],l||Tc(e,d)}o=0;for(let c=0;c<a;c++){let l=!1;const d=i[c];for(;d>n[o];)o++;l=n[o]===d,l||Tc(t,d)}}}function Tc(r,e){r.push((e&4294901760)>>16,e&65535)}const Wa=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class s0{constructor(){this.data={keys:[]}}get(e,t){const n=Wa(e,t);return this.data[n]}set(e,t,n){const i=Wa(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Wa(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class a0 extends Ll{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new _,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new _,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new hx,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Vx,this.constraints=[],this.narrowphase=new Zx(this),this.collisionMatrix=new hc,this.collisionMatrixPrevious=new hc,this.bodyOverlapKeeper=new Ac,this.shapeOverlapKeeper=new Ac,this.contactmaterials=[],this.contactMaterialTable=new s0,this.defaultMaterial=new Ki("default"),this.defaultContactMaterial=new Qi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Vs?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=$e.ALL,n.from=e,n.to=t,n.callback=i,qa.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=$e.ANY,n.from=e,n.to=t,n.result=i,qa.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=$e.CLOSEST,n.from=e,n.to=t,n.result=i,qa.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof he&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const a=i[s];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=tt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=tt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(tt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const a=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){const c=this.bodies[o];c.previousPosition.lerp(c.position,a,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,a,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=d0,i=u0,s=this.bodies.length,a=this.bodies,o=this.solver,c=this.gravity,l=this.doProfiling,d=this.profile,h=he.DYNAMIC;let u=-1/0;const p=this.constraints,m=l0;c.length();const v=c.x,x=c.y,g=c.z;let f=0;for(l&&(u=tt.now()),f=0;f!==s;f++){const S=a[f];if(S.type===h){const R=S.force,P=S.mass;R.x+=P*v,R.y+=P*x,R.z+=P*g}}for(let S=0,R=this.subsystems.length;S!==R;S++)this.subsystems[S].update();l&&(u=tt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(d.broadphase=tt.now()-u);let M=p.length;for(f=0;f!==M;f++){const S=p[f];if(!S.collideConnected)for(let R=n.length-1;R>=0;R-=1)(S.bodyA===n[R]&&S.bodyB===i[R]||S.bodyB===n[R]&&S.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),l&&(u=tt.now());const b=c0,w=t.length;for(f=0;f!==w;f++)b.push(t[f]);t.length=0;const y=this.frictionEquations.length;for(f=0;f!==y;f++)m.push(this.frictionEquations[f]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,b,this.frictionEquations,m),l&&(d.narrowphase=tt.now()-u),l&&(u=tt.now()),f=0;f<this.frictionEquations.length;f++)o.addEquation(this.frictionEquations[f]);const I=t.length;for(let S=0;S!==I;S++){const R=t[S],P=R.bi,C=R.bj,Z=R.si,$=R.sj;let Y;if(P.material&&C.material?Y=this.getContactMaterial(P.material,C.material)||this.defaultContactMaterial:Y=this.defaultContactMaterial,Y.friction,P.material&&C.material&&(P.material.friction>=0&&C.material.friction>=0&&P.material.friction*C.material.friction,P.material.restitution>=0&&C.material.restitution>=0&&(R.restitution=P.material.restitution*C.material.restitution)),o.addEquation(R),P.allowSleep&&P.type===he.DYNAMIC&&P.sleepState===he.SLEEPING&&C.sleepState===he.AWAKE&&C.type!==he.STATIC){const re=C.velocity.lengthSquared()+C.angularVelocity.lengthSquared(),ae=C.sleepSpeedLimit**2;re>=ae*2&&(P.wakeUpAfterNarrowphase=!0)}if(C.allowSleep&&C.type===he.DYNAMIC&&C.sleepState===he.SLEEPING&&P.sleepState===he.AWAKE&&P.type!==he.STATIC){const re=P.velocity.lengthSquared()+P.angularVelocity.lengthSquared(),ae=P.sleepSpeedLimit**2;re>=ae*2&&(C.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(P,C,!0),this.collisionMatrixPrevious.get(P,C)||(Ri.body=C,Ri.contact=R,P.dispatchEvent(Ri),Ri.body=P,C.dispatchEvent(Ri)),this.bodyOverlapKeeper.set(P.id,C.id),this.shapeOverlapKeeper.set(Z.id,$.id)}for(this.emitContactEvents(),l&&(d.makeContactConstraints=tt.now()-u,u=tt.now()),f=0;f!==s;f++){const S=a[f];S.wakeUpAfterNarrowphase&&(S.wakeUp(),S.wakeUpAfterNarrowphase=!1)}for(M=p.length,f=0;f!==M;f++){const S=p[f];S.update();for(let R=0,P=S.equations.length;R!==P;R++){const C=S.equations[R];o.addEquation(C)}}o.solve(e,this),l&&(d.solve=tt.now()-u),o.removeAllEquations();const z=Math.pow;for(f=0;f!==s;f++){const S=a[f];if(S.type&h){const R=z(1-S.linearDamping,e),P=S.velocity;P.scale(R,P);const C=S.angularVelocity;if(C){const Z=z(1-S.angularDamping,e);C.scale(Z,C)}}}this.dispatchEvent(o0),l&&(u=tt.now());const F=this.stepnumber%(this.quatNormalizeSkip+1)===0,G=this.quatNormalizeFast;for(f=0;f!==s;f++)a[f].integrate(e,F,G);this.clearForces(),this.broadphase.dirty=!0,l&&(d.integrate=tt.now()-u),this.stepnumber+=1,this.dispatchEvent(r0);let O=!0;if(this.allowSleep)for(O=!1,f=0;f!==s;f++){const S=a[f];S.sleepTick(this.time),S.sleepState!==he.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(en,tn),e){for(let s=0,a=en.length;s<a;s+=2)Pi.bodyA=this.getBodyById(en[s]),Pi.bodyB=this.getBodyById(en[s+1]),this.dispatchEvent(Pi);Pi.bodyA=Pi.bodyB=null}if(t){for(let s=0,a=tn.length;s<a;s+=2)Ii.bodyA=this.getBodyById(tn[s]),Ii.bodyB=this.getBodyById(tn[s+1]),this.dispatchEvent(Ii);Ii.bodyA=Ii.bodyB=null}en.length=tn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(en,tn),n){for(let s=0,a=en.length;s<a;s+=2){const o=this.getShapeById(en[s]),c=this.getShapeById(en[s+1]);nn.shapeA=o,nn.shapeB=c,o&&(nn.bodyA=o.body),c&&(nn.bodyB=c.body),this.dispatchEvent(nn)}nn.bodyA=nn.bodyB=nn.shapeA=nn.shapeB=null}if(i){for(let s=0,a=tn.length;s<a;s+=2){const o=this.getShapeById(tn[s]),c=this.getShapeById(tn[s+1]);sn.shapeA=o,sn.shapeB=c,o&&(sn.bodyA=o.body),c&&(sn.bodyB=c.body),this.dispatchEvent(sn)}sn.bodyA=sn.bodyB=sn.shapeA=sn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new St;const qa=new $e,tt=globalThis.performance||{};if(!tt.now){let r=Date.now();tt.timing&&tt.timing.navigationStart&&(r=tt.timing.navigationStart),tt.now=()=>Date.now()-r}new _;const r0={type:"postStep"},o0={type:"preStep"},Ri={type:he.COLLIDE_EVENT_NAME,body:null,contact:null},c0=[],l0=[],d0=[],u0=[],en=[],tn=[],Pi={type:"beginContact",bodyA:null,bodyB:null},Ii={type:"endContact",bodyA:null,bodyB:null},nn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},sn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Cc={type:"change"},ja={type:"start"},Xa={type:"end"};class h0 extends yn{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dn.ROTATE,MIDDLE:Dn.DOLLY,RIGHT:Dn.PAN},this.touches={ONE:Nn.ROTATE,TWO:Nn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.listenToKeyEvents=function(N){N.addEventListener("keydown",H),this._domElementKeyEvents=N},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Cc),n.update(),s=i.NONE},this.update=(function(){const N=new L,D=new dt().setFromUnitVectors(e.up,new L(0,1,0)),te=D.clone().invert(),ie=new L,pe=new dt,ee=2*Math.PI;return function(){const Ie=n.object.position;N.copy(Ie).sub(n.target),N.applyQuaternion(D),o.setFromVector3(N),n.autoRotate&&s===i.NONE&&I(w()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ze=n.minAzimuthAngle,ot=n.maxAzimuthAngle;return isFinite(ze)&&isFinite(ot)&&(ze<-Math.PI?ze+=ee:ze>Math.PI&&(ze-=ee),ot<-Math.PI?ot+=ee:ot>Math.PI&&(ot-=ee),ze<=ot?o.theta=Math.max(ze,Math.min(ot,o.theta)):o.theta=o.theta>(ze+ot)/2?Math.max(ze,o.theta):Math.min(ot,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),N.setFromSpherical(o),N.applyQuaternion(te),Ie.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0)),l=1,h||ie.distanceToSquared(n.object.position)>a||8*(1-pe.dot(n.object.quaternion))>a?(n.dispatchEvent(Cc),ie.copy(n.object.position),pe.copy(n.object.quaternion),h=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",_e),n.domElement.removeEventListener("pointerdown",V),n.domElement.removeEventListener("wheel",E),n.domElement.removeEventListener("touchstart",X),n.domElement.removeEventListener("touchend",de),n.domElement.removeEventListener("touchmove",oe),n.domElement.ownerDocument.removeEventListener("pointermove",k),n.domElement.ownerDocument.removeEventListener("pointerup",W),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",H)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new cc,c=new cc;let l=1;const d=new L;let h=!1;const u=new se,p=new se,m=new se,v=new se,x=new se,g=new se,f=new se,M=new se,b=new se;function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function I(N){c.theta-=N}function z(N){c.phi-=N}const B=(function(){const N=new L;return function(te,ie){N.setFromMatrixColumn(ie,0),N.multiplyScalar(-te),d.add(N)}})(),F=(function(){const N=new L;return function(te,ie){n.screenSpacePanning===!0?N.setFromMatrixColumn(ie,1):(N.setFromMatrixColumn(ie,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(te),d.add(N)}})(),G=(function(){const N=new L;return function(te,ie){const pe=n.domElement;if(n.object.isPerspectiveCamera){const ee=n.object.position;N.copy(ee).sub(n.target);let xe=N.length();xe*=Math.tan(n.object.fov/2*Math.PI/180),B(2*te*xe/pe.clientHeight,n.object.matrix),F(2*ie*xe/pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(te*(n.object.right-n.object.left)/n.object.zoom/pe.clientWidth,n.object.matrix),F(ie*(n.object.top-n.object.bottom)/n.object.zoom/pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function O(N){n.object.isPerspectiveCamera?l/=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*N)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function S(N){n.object.isPerspectiveCamera?l*=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/N)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(N){u.set(N.clientX,N.clientY)}function P(N){f.set(N.clientX,N.clientY)}function C(N){v.set(N.clientX,N.clientY)}function Z(N){p.set(N.clientX,N.clientY),m.subVectors(p,u).multiplyScalar(n.rotateSpeed);const D=n.domElement;I(2*Math.PI*m.x/D.clientHeight),z(2*Math.PI*m.y/D.clientHeight),u.copy(p),n.update()}function $(N){M.set(N.clientX,N.clientY),b.subVectors(M,f),b.y>0?O(y()):b.y<0&&S(y()),f.copy(M),n.update()}function Y(N){x.set(N.clientX,N.clientY),g.subVectors(x,v).multiplyScalar(n.panSpeed),G(g.x,g.y),v.copy(x),n.update()}function re(N){N.deltaY<0?S(y()):N.deltaY>0&&O(y()),n.update()}function ae(N){let D=!1;switch(N.code){case n.keys.UP:G(0,n.keyPanSpeed),D=!0;break;case n.keys.BOTTOM:G(0,-n.keyPanSpeed),D=!0;break;case n.keys.LEFT:G(n.keyPanSpeed,0),D=!0;break;case n.keys.RIGHT:G(-n.keyPanSpeed,0),D=!0;break}D&&(N.preventDefault(),n.update())}function ne(N){if(N.touches.length==1)u.set(N.touches[0].pageX,N.touches[0].pageY);else{const D=.5*(N.touches[0].pageX+N.touches[1].pageX),te=.5*(N.touches[0].pageY+N.touches[1].pageY);u.set(D,te)}}function fe(N){if(N.touches.length==1)v.set(N.touches[0].pageX,N.touches[0].pageY);else{const D=.5*(N.touches[0].pageX+N.touches[1].pageX),te=.5*(N.touches[0].pageY+N.touches[1].pageY);v.set(D,te)}}function J(N){const D=N.touches[0].pageX-N.touches[1].pageX,te=N.touches[0].pageY-N.touches[1].pageY,ie=Math.sqrt(D*D+te*te);f.set(0,ie)}function Re(N){n.enableZoom&&J(N),n.enablePan&&fe(N)}function Se(N){n.enableZoom&&J(N),n.enableRotate&&ne(N)}function ge(N){if(N.touches.length==1)p.set(N.touches[0].pageX,N.touches[0].pageY);else{const te=.5*(N.touches[0].pageX+N.touches[1].pageX),ie=.5*(N.touches[0].pageY+N.touches[1].pageY);p.set(te,ie)}m.subVectors(p,u).multiplyScalar(n.rotateSpeed);const D=n.domElement;I(2*Math.PI*m.x/D.clientHeight),z(2*Math.PI*m.y/D.clientHeight),u.copy(p)}function me(N){if(N.touches.length==1)x.set(N.touches[0].pageX,N.touches[0].pageY);else{const D=.5*(N.touches[0].pageX+N.touches[1].pageX),te=.5*(N.touches[0].pageY+N.touches[1].pageY);x.set(D,te)}g.subVectors(x,v).multiplyScalar(n.panSpeed),G(g.x,g.y),v.copy(x)}function Ce(N){const D=N.touches[0].pageX-N.touches[1].pageX,te=N.touches[0].pageY-N.touches[1].pageY,ie=Math.sqrt(D*D+te*te);M.set(0,ie),b.set(0,Math.pow(M.y/f.y,n.zoomSpeed)),O(b.y),f.copy(M)}function Me(N){n.enableZoom&&Ce(N),n.enablePan&&me(N)}function Te(N){n.enableZoom&&Ce(N),n.enableRotate&&ge(N)}function V(N){if(n.enabled!==!1)switch(N.pointerType){case"mouse":case"pen":K(N);break}}function k(N){if(n.enabled!==!1)switch(N.pointerType){case"mouse":case"pen":j(N);break}}function W(N){switch(N.pointerType){case"mouse":case"pen":T();break}}function K(N){N.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus();let D;switch(N.button){case 0:D=n.mouseButtons.LEFT;break;case 1:D=n.mouseButtons.MIDDLE;break;case 2:D=n.mouseButtons.RIGHT;break;default:D=-1}switch(D){case Dn.DOLLY:if(n.enableZoom===!1)return;P(N),s=i.DOLLY;break;case Dn.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;C(N),s=i.PAN}else{if(n.enableRotate===!1)return;R(N),s=i.ROTATE}break;case Dn.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;R(N),s=i.ROTATE}else{if(n.enablePan===!1)return;C(N),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",k),n.domElement.ownerDocument.addEventListener("pointerup",W),n.dispatchEvent(ja))}function j(N){if(n.enabled!==!1)switch(N.preventDefault(),s){case i.ROTATE:if(n.enableRotate===!1)return;Z(N);break;case i.DOLLY:if(n.enableZoom===!1)return;$(N);break;case i.PAN:if(n.enablePan===!1)return;Y(N);break}}function T(N){n.domElement.ownerDocument.removeEventListener("pointermove",k),n.domElement.ownerDocument.removeEventListener("pointerup",W),n.enabled!==!1&&(n.dispatchEvent(Xa),s=i.NONE)}function E(N){n.enabled===!1||n.enableZoom===!1||s!==i.NONE&&s!==i.ROTATE||(N.preventDefault(),n.dispatchEvent(ja),re(N),n.dispatchEvent(Xa))}function H(N){n.enabled===!1||n.enablePan===!1||ae(N)}function X(N){if(n.enabled!==!1){switch(N.preventDefault(),N.touches.length){case 1:switch(n.touches.ONE){case Nn.ROTATE:if(n.enableRotate===!1)return;ne(N),s=i.TOUCH_ROTATE;break;case Nn.PAN:if(n.enablePan===!1)return;fe(N),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Nn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Re(N),s=i.TOUCH_DOLLY_PAN;break;case Nn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(N),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ja)}}function oe(N){if(n.enabled!==!1)switch(N.preventDefault(),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;me(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(N),n.update();break;default:s=i.NONE}}function de(N){n.enabled!==!1&&(n.dispatchEvent(Xa),s=i.NONE)}function _e(N){n.enabled!==!1&&N.preventDefault()}n.domElement.addEventListener("contextmenu",_e),n.domElement.addEventListener("pointerdown",V),n.domElement.addEventListener("wheel",E,{passive:!1}),n.domElement.addEventListener("touchstart",X,{passive:!1}),n.domElement.addEventListener("touchend",de),n.domElement.addEventListener("touchmove",oe,{passive:!1}),this.update()}}const Gl={"quintal-vivo":`
QUINTAL VIVO
PAUSAS, BRINCARES E RESPIROS

CAMADA PEDAGÓGICA:
Nome da experiência: Quintal Vivo – Pausas, Brincares e Respiros da Infância
Eixo: Tempo, Corpo e Imaginação
Intencionalidade pedagógica:
Favorecer a fruição do tempo livre como dimensão essencial da infância. A proposta oferece às crianças a possibilidade de
experimentar o ócio como espaço fértil para brincar, descansar, imaginar, contemplar e estar consigo mesmas e com o coletivo,
sem pressão de desempenho. O ócio vivo é entendido como direito pedagógico: oportunidade de experimentar o corpo, o
espaço e a vida em sua simplicidade, resgatando a alegria de simplesmente existir.
Temas transversais: Saúde, ludicidade, bem-estar, convivência ética, diversidade cultural.
BNCC:
• Competência Geral 8: Autoconhecimento e autocuidado.
• Competência Geral 9: Empatia e cooperação.
• Competência Geral 10: Responsabilidade e cidadania.
• Campos de Experiência (EI): “O eu, o outro e o nós" e "Corpo, gestos e movimentos".
• EF: Educação Física (EF15EF02 - práticas de relaxamento; EF35EF04 – criação e adaptação de jogos e brincadeiras).

CAMADA PRÁTICA:
• Idades atendidas: 2 a 10 anos.
• Quantidade de crianças:
Mínimo: 6 alunos | Máximo: 15 alunos
Duração: Flexível
• Necessidade de apoio pedagógico: O educador atua
como mediador etnográfico, observando e registrando
narrativas, gestos e criações, intervindo apenas quando
necessário para garantir segurança e acolhimento.
• Recursos necessários da Escola: Espaço externo ou
interno amplo, acolhedor e seguro (quintal, pátio, sala
multiuso).
• Recursos que a LABirintar provê: Educador com formação
em ludicidade e práticas integrativas; materiais não
estruturados (tecidos, almofadas, cordas, caixas, objetos
naturais).
• Protocolos de segurança:
- Supervisão atenta sem excesso de intervenção.
- Espaço preparado para garantir segurança (sem objetos
perigosos).
- Respeito ao tempo e ritmo de cada criança.

CAMADA ESTÉTICA:
• Materialidades e práticas:
- Espaço preparado com almofadas, tecidos, objetos não
estruturados e elementos da natureza.
- Momentos de brincar livre (cabanas, invenções espontâneas,
jogos criados pelas crianças).
- Momentos de respiro e contemplação (escuta de sons, pausas
de silêncio, deitar-se e olhar o céu).
- Rituais simples: escuta do vento, observação do céu, mandalas
naturais.
• Experiência estética desejada: Encantamento pelo simples;
percepção poética do tempo; prazer de brincar sem regras e
de respirar sem pressa; beleza do encontro silencioso e da
invenção livre.
• Conceitos trabalhados:
- Fruição do tempo e do espaço
- Autonomia e autocuidado
- Imaginação livre e simbólica
- Cooperação espontânea
- Escuta sensível (de si, do outro e do ambiente)
• Produto final: Não há produto material esperado pelo
educador.
• Documentação pedagógica:
- Escuta etnográfica pelo educador: registros escritos,
fotográficos e narrativos das falas, gestos e invenções que
emergem espontaneamente.
- Produções visuais e escritas das crianças.
- Relatório narrativo automatizado via Nina, integrando registros
etnográficos às fotos e descrições.
`,"circuito-acrobatico-circense":`
CIRCUITO ACROBÁTICO CIRCENSE

CAMADA PEDAGÓGICA:
Eixo: Corpo e Movimento
Intencionalidade pedagógica:
Favorecer a consciência corporal, o equilíbrio e a cooperação por meio da linguagem do circo, explorando o corpo
como potência criativa, lúdica e coletiva. A experiência desenvolve autonomia, coragem e confiança, enquanto resgata
uma arte popular que valoriza diversidade, brasilidade e imaginação.
Temas transversais: Cultura, diversidade, saúde, ética, ludicidade.
BNCC:
• Competência Geral 3: Repertório cultural.
• Competência Geral 8: Autoconhecimento e autocuidado.
• Campos de Experiência (El): "O corpo, gestos e movimentos" e "Traços, sons, cores e formas".
• EF: Educação Física (habilidades EF35EF01, EF15EF02).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos (com adaptações para cada faixa etária).
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Sim, 1 assistente pedagógico é recomendado para
garantir segurança durante os exercícios e manejo de
equipamentos.
• Recursos necessários da Escola:
- Quadra, pátio ou gramado amplo, com espaço livre de
obstáculos.
- Pé-direito alto em caso de uso interno.
• Recursos que a LABirintar provê:
Educador empreendedor circense, kit de malabares
(bolas, claves, fitas), slackline, trapézio de solo, trave de
equilíbrio portátil, colchonetes.
• Protocolos de segurança:
- Supervisão contínua em todos os aparelhos.
- Uso obrigatório de colchonetes em atividades de
altura.
- Adaptação das técnicas conforme faixa etária.
- Circuitos organizados com rotatividade e pausas.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
- Trapézio de solo, slackline, trave de equilíbrio, bolas,
claves, fitas de malabares, cordas, colchonetes, cones.
• Experiência estética desejada:
Vivência do corpo como arte em movimento;
encantamento pelo imaginário circense; prazer lúdico e
estético da criação coletiva.
• Dinâmica das aulas:
- Acolhida e aquecimento lúdico (5-10 min)
- Introdução a um elemento circense do dia
- Experimentação guiada em circuito com diferentes
estações
- Momento coletivo de demonstração e apreciação
- Fechamento com roda de conversa sobre descobertas
• Produto final:
- Mostra circense ao final do semestre, com circuito
aberto para famílias e comunidade escolar.
• Documentação pedagógica:
- Registro fotográfico e audiovisual de ensaios e
apresentações
- Relatos reflexivos das crianças (oral, desenho, escrita)
- Relatório narrativo automatizado via plataforma Nina
com fotos e principais conquistas dos encontros.
`,teatro:`
TEATRO

CAMADA PEDAGÓGICA:
Eixo: Arte, Cultura e Expressão
Intencionalidade pedagógica:
Promover a expressão artística, a criatividade e a comunicação por meio da linguagem teatral. A experiência possibilita
à criança experimentar diferentes papéis, exercitar empatia, colaboração e imaginação, fortalecendo sua presença
individual e coletiva.
Temas transversais: Arte e cultura, cidadania, diversidade, ética, comunicação.
BNCC:
• Competência Geral 4: Comunicação.
• Competência Geral 3: Repertório cultural.
• Competência Geral 9: Empatia e cooperação.
• Campos de Experiência (EI): “O eu, o outro e o nós” e "Escuta, fala, pensamento e imaginação”.
• EF: Arte (habilidades EF15AR06, EF35AR08).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Não obrigatória, mas recomendável em turmas grandes
para apoio de bastidores e organização.
• Recursos necessários da Escola:
Sala ampla, auditório Ou espaço que permita
movimentação livre; cadeiras ou bancos; iluminação
básica.
• Recursos que a LABirintar provê:
Educador empreendedor, materiais de improvisação
(tecidos, adereços simples), roteiro de jogos teatrais e
dinâmicas de grupo.
• Protocolos de segurança:
- Garantir espaço livre de obstáculos durante jogos de
movimento.
- Supervisão contínua em exercícios de contato físico.
- Cuidado com iluminação e uso de materiais
cenográficos.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Tecidos, máscaras, adereços simples, objetos cotidianos
ressignificados, elementos de cenário improvisado.
• Experiência estética desejada:
Explorar o encantamento da cena, a invenção de
histórias e a potência da coletividade; proporcionar
vivência de palco como espaço de imaginação e
transformação.
• Dinâmica das aulas:
- Acolhida e aquecimento corporal/vocal
- Jogos teatrais e improvisações coletivas
- Construção de pequenas cenas em grupos
- Apresentação interna das cenas
- Roda de conversa e apreciação coletiva
• Produto final:
Apresentação teatral ao final do semestre (aberta às
famílias e comunidade escolar), com cenas criadas pelos
próprios alunos.
• Documentação pedagógica:
- Registros fotográficos e audiovisuais de ensaios e
apresentações
- Diário de bordo coletivo com impressões dos alunos
- Relatório narrativo via plataforma Nina sobre processos
e resultados
`,"danca-e-percussao":`
DANÇA E PERCUSSÃO

CAMADA PEDAGÓGICA:
Eixo: Arte, Cultura e Expressão
Intencionalidade pedagógica:
Favorecer a expressão corporal e rítmica por meio da dança integrada à percussão. A experiência valoriza a
musicalidade, a cultura popular e a coletividade, permitindo que as crianças explorem o corpo como instrumento e o
ritmo como linguagem de conexão.
Temas transversais: Cultura, diversidade, identidade, corporeidade, música e artes.
BNCC:
• Competência Geral 3: Repertório cultural.
• Competência Geral 4: Comunicação.
• Competência Geral 9: Empatia e cooperação.
• Campos de Experiência (EI): “Corpo, gestos e movimentos” e “Traços, sons, cores e formas”.
• EF: Arte (habilidades EF15AR08, EF35AR05).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Não obrigatória, mas recomendável em turmas grandes
para apoio na organização e acompanhamento rítmico.
• Recursos necessários da Escola:
Sala ampla ou quadra coberta; espaço que permita
movimentação coletiva; sistema de som simples (caixa
amplificada ou caixa de percussão).
• Recursos que a LABirintar provê:
Educador empreendedor, instrumentos de percussão
(tambores, caixas, pandeiros, chocalhos), adereços para
dança, playlists e sequências musicais.
• Protocolos de segurança:
- Espaço livre de obstáculos e com piso adequado.
- Uso de instrumentos adaptados ao tamanho das
crianças.
- Intervalos para evitar esforço excessivo de voz e corpo.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Tambores, pandeiros, chocalhos, instrumentos de
percussão variados, tecidos e adereços para dança.
• Experiência estética desejada:
Vivência da dança como festa coletiva; pulsação do
ritmo como forma de pertencimento; integração entre
corpo, som e movimento.
• Dinâmica das aulas:
- Acolhida com roda rítmica
- Jogos corporais de aquecimento e percepção rítmica
- Introdução a passos de dança e padrões rítmicos
- Integração dança-percussão em pequenos grupos
- Apresentação interna e roda de fechamento
• Produto final:
Mostra cultural ao final do semestre, com coreografia
coletiva acompanhada de percussão ao vivo feita pelas
crianças.
• Documentação pedagógica:
- Registro audiovisual de ensaios e apresentações
- Produção de diário rítmico e corporal (desenhos,
relatos)
- Relatório narrativo via Nina, com trechos em vídeo e
fotos
`,"brincadeiras-musicais":`
BRINCADEIRAS MUSICAIS

CAMADA PEDAGÓGICA:
Eixo: Arte, Cultura e Expressão
Intencionalidade pedagógica:
Explorar o universo sonoro e rítmico por meio de jogos e cantigas, valorizando a tradição oral e a musicalidade como
formas de expressão e vínculo coletivo. A experiência desperta sensibilidade artística, amplia repertório cultural e
desenvolve atenção, memória e cooperação.
Temas transversais: Cultura popular, diversidade, ludicidade, oralidade, música e movimento.
BNCC:
• Competência Geral 3: Repertório cultural.
• Competência Geral 4: Comunicação.
• Competência Geral 8: Autoconhecimento e autocuidado.
• Campos de Experiência (EI): “O eu, o outro e o nós”, “Escuta, fala, pensamento e imaginação”, “Corpo, gestos e
movimentos".
• Arte (habilidades EF15AR11, EF35AR06).

CAMADA PRÁTICA:
• Idades atendidas:
2 a 10 anos (com adaptações de repertório por faixa
etária).
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Não obrigatória, mas recomendável com crianças
pequenas (2-5 anos).
• Recursos necessários da Escola:
Sala ampla ou pátio coberto; espaço circular para rodas.
• Recursos que a LABirintar provê:
Educador empreendedor, instrumentos simples
(chocalhos, tambores pequenos, triângulos, claves),
repertório de cantigas e brincadeiras tradicionais.
• Protocolos de segurança:
- Supervisão no uso de instrumentos pequenos para
evitar ingestão acidental (faixa etária menor).
- Espaço sem obstáculos para corridas e rodas.
- Volume sonoro adequado à saúde auditiva das
crianças.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Instrumentos de percussão simples, objetos do cotidiano
ressignificados (latinhas, sementes, garrafas PET), vOZ,
corpo e palmas.
• Experiência estética desejada:
Alegria compartilhada do canto coletivo, ritmo pulsando
no corpo, resgate da memória cultural das brincadeiras
tradicionais.
• Dinâmica das aulas:
- Acolhida com canção de abertura
- Brincadeiras rítmicas em roda
- Jogos corporais de percussão (palmas, batidas, passos)
- Introdução de instrumentos simples nas cantigas
- Fechamento com roda de relaxamento e despedida
musical
• Produto final:
Apresentação coletiva de cantigas e jogos musicais em
roda, aberta às famílias e comunidade escolar.
• Documentação pedagógica:
- Registros audiovisuais das rodas e jogos
- Produção de áudios das crianças cantando
- Relatório narrativo via Nina, com trechos sonoros e
fotos.
`,improvisacao:`
IMPROVISAÇÃO

CAMADA PEDAGÓGICA:
Eixo: Corpo e Movimento
Intencionalidade pedagógica:
Favorecer a espontaneidade, a criatividade e a escuta ativa por meio de jogos de improvisação teatral. A experiência
fortalece a autoconfiança, o trabalho em grupo e a capacidade de lidar com o inesperado, estimulando narrativas
coletivas, expressão corporal e oralidade de forma lúdica.
Temas transversais: Oralidade, arte, convivência ética, ludicidade, diversidade.
BNCC:
• Competência Geral 4: Comunicação.
• Competência Geral 8: Autoconhecimento e autocuidado.
• Competência Geral 9: Empatia e cooperação.
• EF: Arte (teatro e expressão cênica), Língua Portuguesa (oralidade).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos (com adaptações para cada faixa etária).
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Não obrigatório, mas recomendado em turmas maiores para
apoio na mediação de grupos.
• Recursos necessários da Escola:
Sala ampla ou pátio coberto, espaço livre para
movimentação, cadeiras para exercícios de cena.
• Recursos que a LABirintar provê:
Educador empreendedor especialista em teatro e
improvisação, repertório de jogos teatrais, materiais de apoio
didático, materiais simples (papéis, canetas, objetos
cotidianos).
• Protocolos de segurança:
- Regras de respeito mútuo e de não violência física.
- Atenção a limites corporais individuais.
- Supervisão constante durante exercícios de contato e
deslocamento.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Corpo, voz, expressão facial, objetos cotidianos para
improviso.
• Experiência estética desejada:
Vivência do prazer de criar coletivamente sem roteiro,
descoberta do inesperado como potência criativa,
encantamento com a escuta e a construção de cenas em
grupo.
• Dinâmica das aulas:
- Acolhida e aquecimento lúdico (5-10 min).
- Jogos de improvisação guiados pelo educador.
- Criação de pequenas cenas coletivas.
- Apresentação e apreciação entre os grupos.
- Roda de conversa para refletir sobre descobertas.
• Produto final:
Mostra de improvisação ao final do semestre, com
apresentação aberta às famílias e comunidade escolar.
• Documentação pedagógica:
- Registro fotográfico e audiovisual de jogos e cenas.
- Relatos reflexivos das crianças (oral, desenho, escrita).
- Relatório narrativo via plataforma Nina com fotos e principais
conquistas de cada encontro.
`,"projeto-crio-livros":`
PROJETO CRIO LIVROS

CAMADA PEDAGÓGICA:
Eixo: Artes Visuais, Expressão e Linguagens
Intencionalidade pedagógica:
Favorecer a expressão criativa, a autoria e a relação afetiva com os livros. As crianças exploram o universo do livro não
apenas como leitores, mas como criadores, experimentando formatos, materiais e técnicas que ampliam a noção de
narrativa: livros com palavras, sem palavras, feitos de imagem, textura, cor e invenção. A prática desenvolve
imaginação, coordenação motora fina e o prazer pela leitura e pela escrita.
Temas transversais: Cultura, artes, memória, linguagem, cidadania.
BNCC:
• Competência Geral 1: Conhecimento.
• Competência Geral 3: Repertório cultural.
• Competência Geral 4: Comunicação.
• EF: Língua Portuguesa (produção de textos e narrativas), Arte (expressão visual e material), História (memória e
identidade).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos (com adaptações para cada faixa etária).
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Opcional; recomendado para turmas maiores no apoio às
técnicas artesanais.
• Recursos necessários da Escola:
Mesas amplas, espaço de artes.
• Recursos que a LABirintar provê:
Educador empreendedor especialista em artes visuais e livros
artesanais, papéis variados, linhas, agulhas grossas, materiais
de colagem, materiais básicos de desenho e pintura, tesouras
e cola. exemplares de livros ilustrados inspiradores.
• Protocolos de segurança:
- Orientação no uso de tesouras e agulhas.
- Cuidado com tintas e colas (não tóxicas).
- Acompanhamento próximo em atividades manuais
delicadas.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Papéis de diferentes texturas, tecidos, linhas, tintas, colas,
ilustrações e objetos reaproveitados para colagem.
• Experiência estética desejada:
Encantamento pelo livro como objeto artístico e afetivo;
prazer de inventar histórias visuais ou escritas; orgulho da
autoria e da criação coletiva.
• Dinâmica das aulas:
- Acolhida e apresentação de livros ilustrados inspiradores.
- Introdução a uma técnica artesanal (dobra, costura, colagem
etc.).
- Criação de páginas ou pequenos livros individuais e
coletivos.
- Momento de troca e leitura/olhar compartilhado.
- Registro e guarda em portfólios coletivos.
• Produto final:
Mostra "Livros que Inventamos" - exposição coletiva de
livros artesanais criados pelas crianças, aberta às famílias e
comunidade escolar.
• Documentação pedagógica:
- Portfólios com fotos dos livros e relatos do processo criativo.
- Registros audiovisuais dos encontros.
- Relatório narrativo via plataforma Nina com reflexões sobre
autoria e expressão.
`,fotografia:`
FOTOGRAFIA

CAMADA PEDAGÓGICA:
Eixo: Cidade e Cultura Viva
Intencionalidade pedagógica:
Utilizar a fotografia como linguagem de expressão, memória e criação, estimulando nas crianças a capacidade de
observar com atenção, atribuir sentidos ao que veem e produzir narrativas visuais. A prática integra técnica e poética: a
luz e o enquadramento tornam-se caminhos para desenvolver sensibilidade, pensamento crítico e repertório estético.
O ato de fotografar conecta cotidiano, território e identidade.
Temas transversais: Cultura digital, memória, identidade, pertencimento, narrativa visual.
BNCC:
• Competência Geral 1: Conhecimento.
• Competência Geral 3: Repertório cultural.
• Competência Geral 5: Cultura digital.
• Competência Geral 8: Autoconhecimento e autocuidado.
• EF: Arte (linguagens visuais e digitais), Língua Portuguesa (produção de sentido e narrativas), Ciências Humanas
(memória, identidade, cultura).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Não obrigatório, mas enriquecedor para apoiar saídas
fotográficas e organização de exposição.
• Recursos necessários da Escola:
Sala para projeção e reflexão, painéis para exposição,
possibilidade de passeios curtos pelo entorno, autorização
das famílias para saídas no entorno.
• Recursos que a LABirintar provê:
Educador empreendedor especializado em fotografia,
curadoria de desafios visuais, material digital de apoio,
parcerias para impressão de imagens (quando possível),
acesso a celulares ou câmeras simples (mesmo
compartilhados).
• Protocolos de segurança:
- Uso responsável de celulares/câmeras.
- Orientações sobre privacidade e autorização de imagem.
- Acompanhamento de adultos em saídas externas curtas.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Celulares, câmeras simples, papéis fotográficos, painéis de
exposição, softwares/apps gratuitos de edição (Snapseed,
Canva).
• Experiência estética desejada:
Transformar o olhar em narrativa. A fotografia como gesto
poético: registrar amigos, detalhes da cidade, texturas da
natureza, cenas cotidianas. Valorizar a beleza de enxergar o
que muitas vezes passa despercebido.
• Dinâmica das aulas:
- Breve inspiração inicial (poema, imagem ou questão
disparadora).
- Introdução a um elemento da fotografia (luz, ângulo,
composição, cor).
- Prática fotográfica individual ou em pequenos grupos.
- Compartilhamento e leitura coletiva das imagens.
- Registro reflexivo em portfólio pessoal.
• Produto final:
Mostra coletiva com exposição fotográfica física e/ou digital
aberta à comunidade escolar.
• Documentação pedagógica:
- Portfólio individual com as fotos produzidas.
- Relatos reflexivos das crianças sobre seus registros.
- Relatório narrativo via plataforma Nina com ênfase na
construção de identidade e repertório cultural.
`,"parkour-brasil":`
PARKOUR BRASIL

CAMADA PEDAGÓGICA:
Eixo: Corpo, Movimento e Expressão
Intencionalidade pedagógica:
Explorar o corpo em movimento a partir da prática do parkour, favorecendo autonomia, consciência corporal,
criatividade motora e superação de desafios. O parkour não é apenas “pular obstáculos”, mas uma filosofia de
movimento que ensina resiliência, foco e cuidado com o ambiente. A prática valoriza a cidade como cenário educativo,
transformando muros, praças e estruturas em espaços de expressão e convivência.
Temas transversais: Saúde, bem-estar, cultura urbana, cidadania, sustentabilidade.
BNCC:
• Competência Geral 1: Conhecimento.
• Competência Geral 7: Argumentação.
• Competência Geral 8: Autoconhecimento e autocuidado.
• EF: Educação Física (corpo, movimento, jogos e práticas corporais urbanas), Arte (expressão corporal).
• Ciências Humanas: Cidade e território como espaço educativo.

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Não obrigatório, mas recomendado em turmas grandes para
acompanhamento da segurança durante os circuitos.
• Recursos necessários da Escola:
Espaço amplo (quadra, pátio ou área externa) com estruturas
seguras para saltos e circuitos adaptados. Possibilidade de
saídas supervisionadas em espaços urbanos próximos.
• Recursos que a LABirintar provê:
Educador empreendedor com formação em parkour,
metodologia baseada em segurança e progressão de
movimentos, materiais para montagem de obstáculos
modulares, colchonetes de segurança (quando aplicável).
• Protocolos de segurança:
- Prática sempre supervisionada por educador especializado.
- Progressão gradual dos movimentos, respeitando limites
individuais.
- Uso de tênis adequados e roupas confortáveis.
- Orientação sobre respeito ao espaço urbano e cuidado
coletivo.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Obstáculos modulares, estruturas da escola/cidade (muros
baixos, bancos, corrimões), colchões, registros fotográficos e
audiovisuais dos movimentos.
• Experiência estética desejada:
Sentir o corpo em fluidez, experimentando a liberdade do
movimento e o prazer de superar barreiras. A estética do
parkour está na leveza, na criatividade e na apropriação
poética do espaço urbano como lugar de expressão.
• Dinâmica das aulas:
- Aquecimento e consciência corporal.
- Introdução de uma técnica ou movimento (rolamentos,
saltos, equilíbrio).
- Circuito prático com desafios crescentes.
- Reflexão coletiva sobre superação e cuidado com o espaço
urbano.
- Registro fotográfico/vídeo dos movimentos e
aprendizagens.
• Produto final:
Mostra coletiva "Parkour Brasil", com circuito aberto para
comunidade escolar e exibição de registros audiovisuais das
práticas.
• Documentação pedagógica:
- Portfólios fotográficos e em vídeo das práticas.
- Narrativas coletivas sobre superação de desafios.
- Relatório narrativo via plataforma Nina sobre corpo, cidade e
movimento.
`,"esportes-urbanos":`
ESPORTES URBANOS

CAMADA PEDAGÓGICA:
Eixo: Fazeres Manuais
Intencionalidade pedagógica:
Promover o desenvolvimento corporal, a autoconfiança e a expressão por meio de práticas esportivas urbanas. A
experiência convida crianças e adolescentes a explorar o equilíbrio, a coordenação motora e a superação pessoal em
atividades como skate e slackline. Além da prática física, busca-se valorizar a cultura urbana como linguagem legítima
de convivência, arte e esporte, incentivando a cooperação, a resiliência e o respeito ao espaço público.
Temas transversais: Corpo e saúde, cultura urbana, sustentabilidade (uso de espaços públicos), convivência e
protagonismo juvenil, direito ao lazer.
BNCC:
• Competência Geral 1: Conhecimento.
• Competência Geral 3: Repertório cultural.
• Competência Geral 8: Autoconhecimento e autocuidado.
• Competência Geral 9: Empatia e cooperação.
• EF: Educação Física (habilidades EF35EF04, EF67EF02, EF67EF07).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Sim, especialmente para suporte na segurança, montagem
dos equipamentos e organização do grupo.
• Recursos necessários da Escola:
Espaço aberto e seguro (quadra, pátio ou área externa plana),
preferencialmente com piso liso para o skate e área com
árvores/pontos de fixação para o slackline.
• Recursos que a LABirintar provê:
Educador empreendedor especializado em práticas corporais
urbanas, skates, patins, capacetes e equipamentos de
proteção, kits de slackline, colchonetes de segurança
(quando aplicável).
• Protocolos de segurança:
- Uso obrigatório de capacete e proteções (cotoveleiras,
joelheiras, munhequeiras).
- Supervisão constante em manobras e atividades de risco.
- Limite de alunos por equipamento.
- Orientações prévias sobre quedas seguras e autocontrole.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Skates, patins, proteções, cordas, colchonetes, espaços
urbanos (muros, praças, pátios escolares).
• Experiência estética desejada:
Vivenciar a liberdade do corpo em movimento, experimentar
o equilíbrio entre risco e cuidado, e perceber a potência
criativa da cultura urbana como expressão. O foco é
transformar o espaço escolar em cenário vivo de esporte, arte
e convivência.
• Dinâmica das aulas:
- Acolhida e aquecimento coletivo.
- Orientações sobre segurança e introdução da prática do dia.
- Vivência em rodízio: grupos alternando entre skate, slackline
e jogos de movimento.
- Momento de superação e partilha das conquistas individuais
e coletivas.
- Alongamento, fechamento e organização do espaço.
• Produto final:
- Apresentação de manobras, desafios coletivos de equilíbrio
e pequenas performances.
- Evento aberto: "Vivência de Esportes Urbanos" com famílias
e comunidade.
• Documentação pedagógica:
- Registros fotográficos e audiovisuais de evolução dos
alunos.
- Produção de mural ou diário coletivo de conquistas.
- Relatório narrativo via plataforma Nina com imagens e
relatos reflexivos.
`,"marcenaria-criativa":`
MARCENARIA CRIATIVA

CAMADA PEDAGÓGICA:
Eixo: Fazeres Manuais
Intencionalidade pedagógica:
Desenvolver habilidades de criação manual e consciência material por meio do trabalho com madeira. A experiência
incentiva autonomia, planejamento e cuidado, estimulando a inventividade, o pensamento construtivo e o respeito ao
processo artesanal. Além de objetos utilitários e expressivos, as crianças terão contato com restos e tocos de madeira
reaproveitados, aprendendo a transformá-los em brinquedos de encaixe moldáveis, que podem virar diferentes
criações conforme a imaginação de cada um.
Temas transversais: Sustentabilidade, criatividade, tecnologia e trabalho, cultura do fazer, direito ao brincar.
BNCC:
• Competência Geral 1: Conhecimento.
• Competência Geral 6: Trabalho e projeto de vida.
• Competência Geral 7: Argumentação (na apresentação dos projetos).
• EF: Arte e Tecnologia (habilidades EF15AR20, EF35TE01).

CAMADA PRÁTICA:
• Idades atendidas: 6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Sim, 1 assistente pedagógico é altamente recomendado para
garantir segurança no uso das ferramentas e apoiar o manejo
do grupo.
• Recursos necessários da Escola:
Espaço ventilado e iluminado, com bancadas ou mesas
firmes; local seguro para armazenamento dos kits de
ferramentas.
• Recursos que a LABirintar provê:
Educador empreendedor, kit de marcenaria individual e
coletivo (ferramentas manuais básicas: serrotes, martelos,
lixas, parafusadeiras leves, pregos, parafusos, tintas e
materiais de acabamento...), madeiras reaproveitadas, tocos e
retalhos de madeira).
• Protocolos de segurança:
- Uso supervisionado de ferramentas.
- Óculos e luvas de proteção quando necessário.
- Organização do espaço antes e depois da atividade.
- Limite de idade para uso de determinados instrumentos.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Madeira de reaproveitamento, ferramentas manuais, tintas,
pregos, parafusos, cordas, elementos naturais (galhos,
sementes), restos e tocos de madeira como matéria-prima
para brinquedos.
• Experiência estética desejada:
Vivenciar a transformação da matéria-prima em criação única;
perceber o valor do trabalho manual; experimentar a beleza
do "feito à mão".
• Dinâmica das aulas:
- Acolhida e apresentação do desafio do dia.
- Orientações de segurança e demonstração de técnicas.
- Tempo de criação em pequenos grupos ou individual
(incluindo exploração livre de tocos e encaixes).
- Momento de partilha das criações.
- Organização coletiva do espaço.
• Produto final:
- Peças de marcenaria criativa (brinquedos de encaixe,
suportes, pequenas esculturas, instrumentos simples).
- Mostra coletiva aberta às famílias e comunidade escolar.
• Documentação pedagógica:
- Registro fotográfico das etapas de criação.
- Produção de portfólio das peças finais.
- Relatório narrativo via plataforma Nina com imagens e
descrições.
`,origami:`
ORIGAMI
DOBRAS QUE CONTAM HISTÓRIAS

CAMADA PEDAGÓGICA:
Eixo: Fazeres Manuais
Intencionalidade pedagógica:
Explorar a arte do origami como prática de concentração, imaginação e narrativa visual. A cada dobra, as crianças são
convidadas a transformar papel em poesia, inspiradas por histórias literárias e imagens fotográficas que provocam a
criação. Assim, ampliam sua sensibilidade estética, desenvolvem raciocínio espacial e cultivam a paciência e a
contemplação.
Temas transversais: Cultura, arte, matemática, narrativa, visualidade.
BNCC:
• Competência Geral 2: Pensamento científico, crítico e criativo.
• Competência Geral 3: Repertório cultural.
• Competência Geral 4: Comunicação.
• EF: Matemática (geometria, simetria, proporção), Arte (formas, cores, estética), Língua Portuguesa (Literatura,
narrativa), Fotografia como linguagem artística.

CAMADA PRÁTICA:
• Idades atendidas:
6 a 10 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Não obrigatório, mas recomendável em turmas maiores.
• Recursos necessários da Escola:
Mesas amplas, projetor, acesso a acervo livros de
contos/poesias.
• Recursos que a LABirintar provê:
Educador empreendedor, tesouras, papéis coloridos
variados, kit de papéis especiais, curadoria de textos
literários e fotografias inspiradoras, sequências de
dobras (diagramas).
• Protocolos de segurança:
- Orientação no uso de tesouras.
- Cuidado com organização do espaço e conservação
dos papéis.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Papéis coloridos e especiais, textos literários, fotografias
artísticas, registros escritos e visuais das criações.
• Experiência estética desejada:
As crianças leem um poema ou um trecho literário, observam
uma fotografia, e a partir desse estímulo criam origamis. O
resultado é um atravessamento entre palavra, imagem e
dobra - uma narrativa visual que nasce do encontro entre
literatura, fotografia e arte manual.
• Dinâmica das aulas:
- Roda de leitura de um texto literário breve ou exibição de
uma fotografia inspiradora.
- Conversa sobre as imagens, sentimentos e ideias evocadas.
- Orientação da dobra de um origami relacionado à inspiração
do dia.
- Produção coletiva e experimentação criativa.
- Partilha das produções, com registro fotográfico e escrita de
pequenas legendas ou narrativas para acompanhar cada
criação.
• Produto final:
Mostra "Dobras Narradas" - instalação com origamis
acompanhados de trechos literários e fotografias, compondo
uma narrativa visual coletiva.
• Documentação pedagógica:
- Fotografias das produções e etapas de criação.
- Livro coletivo com origamis acompanhados de poemas ou
textos escritos pelas crianças.
- Relatório narrativo via plataforma Nina integrando palavra,
imagem e dobra.
`,"modelagem-3d":`
MODELAGEM 3D

CAMADA PEDAGÓGICA:
Eixo: Fazeres Manuais (com integração tecnológica)
Intencionalidade pedagógica:
Explorar a criação de objetos em ambiente digital, desenvolvendo pensamento espacial, criatividade e noções de
design. A experiência aproxima as crianças do universo da tecnologia como ferramenta de expressão e construção,
unindo manualidade e inovação. O foco é aprender fazendo: projetar, modelar e visualizar formas que podem ganhar
vida em impressoras 3D ou em simulações digitais.
Temas transversais: Cultura digital, inovação, sustentabilidade (uso consciente de recursos), criatividade aplicada.
BNCC:
• Competência Geral 1: Conhecimento.
• Competência Geral 4: Comunicação.
• Competência Geral 5: Cultura digital.
• Competência Geral 6: Trabalho e projeto de vida.
• EF: Matemática (geometria, proporções), Arte (design e criação), Ciências da Natureza e Tecnologia.

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Não obrigatória, mas desejável para apoio técnico em
turmas maiores.
• Recursos necessários da Escola:
Sala, acesso à internet, projetor para demonstrações.
• Recursos que a LABirintar provê:
Educador empreendedor, softwares de modelagem 3D
gratuitos (Tinkercad, SketchUp, Blender iniciante),
suporte técnico, tutoriais ilustrados; 1 computador por
aluno (modelo de locação), impressora 3D.
• Protocolos de segurança:
- Supervisão no uso da internet.
- Orientação para ergonomia (postura, pausas visuais).
- No caso de impressão 3D, manuseio apenas por adulto
responsável.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Computadores, softwares de modelagem, eventualmente
impressoras 3D, papéis para esboços, cadernos de ideias.
• Experiência estética desejada:
A magia de ver um desenho se transformar em objeto digital
tridimensional, podendo ser manipulado, rotacionado e até
impresso. O encanto da criação imaginária se tornando
tangível.
• Dinâmica das aulas:
- Acolhida com breve desafio de observação de formas no
cotidiano
- Introdução a ferramentas de modelagem (desenho,
extrusão, texturas)
- Criação de objetos digitais simples (formas geométricas,
personagens, objetos cotidianos)
- Compartilhamento dos projetos no grupo
- Em alguns encontros: impressão 3D de um objeto ou
simulação em realidade aumentada
- Encerramento com reflexão sobre processo e
aprendizagens
• Produto final:
Portfólio digital com os objetos criados ao longo do
semestre, podendo incluir protótipos impressos em 3D.
• Documentação pedagógica:
- Capturas de tela e vídeos das modelagens
- Portfólio digital coletivo dos alunos
- Relatório narrativo via plataforma Nina com imagens dos
projetos
`,"paes-artesanais":`
MÃOS NA MASSA
PÃES ARTESANAIS

CAMADA PEDAGÓGICA:
Eixo: Fazeres Manuais
Intencionalidade pedagógica:
Convidar as crianças a mergulhar no universo da panificação como prática cultural, sensorial e coletiva. Ao amassar,
modelar, observar a fermentação e partilhar o pão, vivenciam valores de paciência, cuidado, nutrição e afeto. O pão é
tratado como alimento simbólico, que une famílias e comunidades, trazendo memória, história e pertencimento.
Temas transversais: Cultura alimentar, sustentabilidade, saúde, coletividade, memória afetiva.
BNCC:
• Competência Geral 1: Conhecimento.
• Competência Geral 5: Cultura digital (registros das receitas, fotos, vídeos).
• Competência Geral 8: Autoconhecimento e autocuidado.
• Competência Geral 9: Empatia e cooperação.
• EF: Ciências da Natureza (processos físicos/químicos), Arte (experimentação e criação), Educação Física
(coordenação motora fina).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Recomendável 1 apoio em turmas grandes, especialmente
nas etapas de manuseio de forno e utensílios.
• Recursos necessários da Escola:
Cozinha pedagógica ou espaço com pia, mesas amplas e
acesso a forno elétrico/gás.
• Recursos que a LABirintar provê:
Educador empreendedor, utensílios básicos (bacias, colheres
de pau, panos, formas), ingredientes (farinhas variadas,
fermentos, sementes), fichas ilustradas de receitas, forno
elétrico (modelo locação)
• Protocolos de segurança:
- Orientação sobre higiene (lavagem de mãos, uso de avental
e touca).
- Manuseio do forno apenas pelo educador.
- Utensílios adequados à idade (sem lâminas afiadas para
menores).

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Farinha, água, fermento biológico e natural, sementes, ervas,
utensílios de cozinha, aventais e panos.
• Experiência estética desejada:
Sentir o cheiro, a textura e o calor do pão. Valorizar o tempo
da espera (fermentação), celebrar a transformação da massa
em alimento e viver o prazer da partilha coletiva.
• Dinâmica das aulas:
- Roda inicial com histórias e memórias do pão
- Apresentação de técnicas de panificação (pães simples,
integrais, fermentação natural, pães doces)
- Preparação da massa em grupos
- Fermentação e conversas sobre paciência e processos
naturais
- Finalização e partilha dos pães prontos
- Registros coletivos (escritos, desenhos, fotos)
• Produto final:
Variedade de pães ao longo do semestre (pão caseiro, pão
integral, pão de ervas, pão doce etc.).
Mostra "Mãos na Massa", com degustação compartilhada
entre crianças e famílias.
• Documentação pedagógica:
- Fotos e vídeos das etapas de panificação
- Caderno coletivo de receitas ilustrado pelas crianças
- Relatório narrativo via plataforma Nina com registros de
processos e produtos finais
`,"jogos-de-tabuleiro":`
CRIAÇÃO DE JOGOS DE
TABULEIRO

CAMADA PEDAGÓGICA:
Eixo: Jogos, Estratégias e Lógicas
Intencionalidade pedagógica:
Estimular a criatividade, o raciocínio lógico e o trabalho em equipe por meio da invenção de jogos de tabuleiro
originais. As crianças experimentam todas as etapas do processo criativo: imaginar, desenhar, testar e jogar. Além de
aprenderem sobre estratégia e regras, desenvolvem habilidades de comunicação, negociação e resolução de
problemas.
Temas transversais: Cultura do brincar, lógica, cooperação, pensamento crítico, criatividade.
BNCC:
• Competência Geral 1: Conhecimento.
• Competência Geral 2: Pensamento científico, crítico e criativo.
• Competência Geral 4: Comunicação.
• Competência Geral 6: Trabalho e projeto de vida.
• EF: Matemática (probabilidade, estatística), Arte (design visual), Língua Portuguesa (produção de textos de
regras).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Recomendável 1 apoio em grupos maiores para auxiliar
nos testes de jogo.
• Recursos necessários da Escola:
Espaço amplo com mesas.
• Recursos que a LABirintar provê:
Educador empreendedor, materiais para prototipagem
de jogos (dados, fichas, pinos, baralhos em branco,
impressões), referências de jogos clássicos para
inspiração; papelaria básica (cartolina, papel A3,
canetões).
• Protocolos de segurança:
- Cuidados com tesouras e estiletes.
- Supervisão em materiais pequenos (risco de ingestão
para crianças pequenas).

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Cartolinas, papéis, dados, pinos, cartas, cores e desenhos.
• Experiência estética desejada:
Ver uma ideia sair do papel e se transformar em um jogo
jogável, onde amigos e colegas interagem, se divertem e
testam estratégias. O encantamento do "eu inventei" se torna
motor da experiência.
• Dinâmica das aulas:
- Exploração inicial de jogos já existentes (análise de regras e
mecânicas).
- Roda de ideias e definição de temas de jogo.
- Prototipagem de tabuleiros, cartas e peças.
- Testes em grupo, ajustes de regras e melhorias.
- Criação da versão final dos jogos.
- Fechamento com feira/laboratório de jogos, em que todos
jogam os protótipos criados.
• Produto final:
Cada grupo produz um jogo de tabuleiro original, registrado
em manual simples de regras. Os jogos compõem uma
"Biblioteca de Jogos da Escola".
• Documentação pedagógica:
- Fotos e vídeos das etapas de criação.
- Registro das regras escritas pelos alunos.
- Relatório narrativo via plataforma Nina com imagens e
descrição dos jogos.
`,"jogos-digitais":`
CRIAÇÃO DE JOGOS DIGITAIS

CAMADA PEDAGÓGICA:
Eixo: Jogos, Estratégias e Lógicas
Intencionalidade pedagógica:
Utilizar o xadrez como ferramenta pedagógica para desenvolver habilidades cognitivas e socioemocionais
fundamentais para a vida. A prática vai além do jogo: ensina planejamento, visão de futuro, resiliência diante de
derrotas, empatia com o adversário e cooperação em contextos coletivos. O tabuleiro se torna metáfora para escolhas,
responsabilidades e convivência ética.
Temas transversais: Ética, cidadania, resolução de conflitos, autocontrole, pensamento lógico.
BNCC:
• Competência Geral 2: Pensamento científico, crítico e criativo.
• Competência Geral 6: Trabalho e projeto de vida.
• Competência Geral 8: Autoconhecimento e autocuidado.
• EF: Matemática (raciocínio lógico, sequências), Educação Física (jogos e convivência), Arte (xadrez como
linguagem simbólica e estética).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Apoio desejável para acompanhamento técnico em
turmas maiores.
• Recursos necessários da Escola:
Sala, acesso à internet, projetor para demonstrações.
• Recursos que a LABirintar provê:
Educador empreendedor, softwares de criação de jogos
digitais (ex.: Construct, Scratch, GameMaker), trilhas
didáticas, suporte técnico, recursos visuais e sonoros de
uso livre, 1 computador por aluno (modelo de locação).
• Protocolos de segurança:
- Supervisão no uso da internet e na escolha de recursos
visuais/sonoros.
- Orientações ergonômicas (postura, pausas).

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Computadores, softwares de jogos, tablets (quando
disponíveis), materiais de apoio (cadernos de roteiro,
storyboards).
• Experiência estética desejada:
A alegria de transformar uma ideia em um jogo interativo que
pode ser jogado por colegas, familiares e pela comunidade
escolar. O "eu inventei" ganha movimento, som e imagem.
• Dinâmica das aulas:
- Introdução ao mundo dos jogos digitais (exemplos e análise
de mecânicas).
- Brainstorming de ideias e definição de personagens,
cenários e objetivos.
- Criação de roteiros e storyboards.
- Programação visual e construção do jogo.
- Testes coletivos, ajustes e melhorias.
• Produto final:
- Jogos digitais autorais criados pelos estudantes,
organizados em uma galeria digital coletiva da escola.
- Fechamento com feira de jogos digitais, aberta a colegas e
famílias.
• Documentação pedagógica:
- Capturas de tela e vídeos dos jogos.
- Portfólio digital com os projetos desenvolvidos.
- Relatório narrativo via plataforma Nina com imagens,
reflexões e registros do processo.
`,"rpg-narrativas-coletivas":`
RPG E NARRATIVAS COLETIVAS

CAMADA PEDAGÓGICA:
Eixo: Jogos, Estratégias e Lógicas
Intencionalidade pedagógica:
Favorecer a imaginação, a empatia e a cooperação por meio da linguagem do RPG (Role Playing Game), em que cada
criança cria e interpreta personagens em histórias coletivas. A experiência estimula a oralidade, a escrita criativa, o
pensamento crítico e a resolução de problemas em grupo, transformando o ato de jogar em uma prática de
construção narrativa e ética.
Temas transversais: Oralidade, ética, convivência, cultura juvenil, ludicidade.
BNCC:
• Competência Geral 4: Comunicação.
• Competência Geral 7: Argumentação.
• Competência Geral 9: Empatia e cooperação.
• EF: Língua Portuguesa (oralidade, leitura e produção de textos narrativos), Arte (narrativas e ilustração), História
(identidade, coletividade).

CAMADA PRÁTICA:
• Idades atendidas:
11 a 17 anos (com adaptações por faixa etária).
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Não obrigatório, mas recomendado em turmas maiores para
apoio nas ilustrações e registros narrativos.
• Recursos necessários da Escola:
Sala ampla, com mesas organizadas em círculo ou formato
colaborativo.
• Recursos que a LABirintar provê:
Educador empreendedor especialista em RPG, dados (d20,
d6 etc.), fichas de personagens, materiais de apoio narrativo e
guia metodológico, papel, canetas e acesso a impressora
opcional para fichas.
• Protocolos de segurança:
- Mediação de conteúdos para adequar linguagem e temas à
faixa etária.
- Regras claras de respeito às histórias e personagens criados
pelos colegas.
- Supervisão contínua para manter ambiente colaborativo e
acolhedor.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Dados, fichas de personagens, ilustrações, mapas
desenhados coletivamente, narrativas orais e escritas.
• Experiência estética desejada:
Vivência da criação coletiva de mundos e personagens;
encantamento pelo "faz de conta" estruturado; prazer de
inventar histórias compartilhadas que ganham vida nas falas e
decisões dos jogadores.
• Dinâmica das aulas:
- Acolhida e explicação do desafio narrativo do dia.
- Criação ou desenvolvimento de personagens e cenário.
- Sessão guiada de RPG com improvisação e uso de dados.
- Registro coletivo (mapas, ilustrações, trechos escritos).
- Roda de conversa sobre as descobertas narrativas.
• Produto final:
Livro coletivo de narrativas criadas durante a campanha,
ilustrado e apresentado em mostra final para famílias e
comunidade escolar.
• Documentação pedagógica:
- Registro fotográfico e audiovisual de sessões de RPG.
- Portfólio com fichas de personagens, mapas e narrativas.
- Relatório narrativo via plataforma Nina com principais
momentos de cada encontro.
`,"xadrez-para-a-vida":`
XADREZ PARA A VIDA

CAMADA PEDAGÓGICA:
Eixo: Jogos, Estratégias e Lógicas
Intencionalidade pedagógica:
Convidar as crianças a se tornarem criadoras, e não apenas consumidoras, de tecnologia. Por meio da programação
visual e da lógica de jogos, desenvolvem pensamento computacional, criatividade e trabalho colaborativo. A
experiência estimula autonomia, resolução de problemas e expressão estética em ambientes digitais, transformando
ideias em jogos jogáveis.
Temas transversais: Cultura digital, inovação, criatividade, pensamento lógico.
BNCC:
• Competência Geral 1: Conhecimento.
• Competência Geral 2: Pensamento científico, crítico e criativo.
• Competência Geral 4: Comunicação.
• Competência Geral 5: Cultura digital.
• EF: Matemática (lógica, algoritmos), Arte (design visual e sonoro), Língua Portuguesa (narrativas e roteiros).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Não obrigatório, mas enriquecedor em turmas grandes
(auxiliar para acompanhamento de jogos simultâneos).
• Recursos necessários da Escola:
Sala com mesas amplas, espaço para roda de conversa.
• Recursos que a LABirintar provê:
Educador empreendedor especializado, metodologia
que integra xadrez e habilidades de vida, materiais de
apoio (fichas, desafios, exercícios reflexivos), jogos de
xadrez suficientes para os grupos.
• Protocolos de segurança:
- Organização dos jogos para evitar dispersão.
- Mediação de conflitos e valorização da ética do jogo
limpo ("fair play").

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Tabuleiros de xadrez, peças, fichas de desafios, cadernos de
registro.
• Experiência estética desejada:
Cada partida é um exercício de contemplação e imaginação:
prever movimentos, experimentar caminhos, aceitar erros e
aprender com eles. A beleza do jogo está no silêncio
concentrado e na celebração da estratégia bem construída,
transformando o xadrez em metáfora poética da vida.
• Dinâmica das aulas:
- Breve reflexão inicial sobre um valor ou habilidade de vida
(ex: paciência, foco, resiliência).
- Introdução de uma tática ou desafio do xadrez.
- Prática em duplas ou grupos, com mediação do educador.
- Roda de conversa conectando vivências do jogo às
situações da vida real.
- Registro coletivo das aprendizagens em mural ou
caderno.
• Produto final:
Exposição "Estratégias da Vida" – mural com registros, frases
e reflexões produzidas pelas crianças junto a tabuleiros
montados para jogos com a comunidade.
• Documentação pedagógica:
- Fotografias das partidas e momentos coletivos.
- Caderno coletivo com anotações e reflexões das crianças.
- Relatório narrativo via plataforma Nina destacando as
conexões entre xadrez e habilidades para a vida.
`,"robotica-sustentavel":`
ROBÓTICA SUSTENTÁVEL

CAMADA PEDAGÓGICA:
Eixo: Tecnologias Sustentáveis e Criativas
Intencionalidade pedagógica:
Integrar princípios da robótica com sustentabilidade, propondo que as crianças construam protótipos e invenções a
partir de sucata eletrônica, materiais recicláveis e componentes básicos. A experiência desenvolve pensamento lógico,
criatividade, consciência ecológica e senso de inovação responsável.
Temas transversais: Sustentabilidade, inovação, cultura digital, cidadania, ciência e tecnologia.
BNCC:
• Competência Geral 2: Pensamento científico, crítico e criativo.
• Competência Geral 5: Cultura digital.
• Competência Geral 6: Trabalho e projeto de vida.
• EF: Ciências da Natureza (energia, eletricidade, meio ambiente), Matemática (lógica, medidas), Tecnologia e
Arte (design de protótipos).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Apoio técnico e pedagógico em turmas maiores ou nos
encontros de prototipagem mais complexos.
• Recursos necessários da Escola:
Espaço adequado para manuseio de ferramentas leves
e sucatas, kits básicos de eletrônica (pilhas, motores,
leds, sensores simples).
• Recursos que a LABirintar provê:
Educador empreendedor, metodologia de robótica
sustentável, kits de componentes básicos, materiais
recicláveis selecionados, instruções para atividades
seguras e criativas.
• Protocolos de segurança:
- Orientação no uso de ferramentas simples (tesouras,
chaves de fenda, pistola de cola quente).
- Supervisão constante durante montagem de circuitos
elétricos básicos.
- Uso de óculos de proteção quando necessário.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Sucata eletrônica, materiais recicláveis, motores e LEDs,
papéis, tintas e elementos de design.
• Experiência estética desejada:
O encantamento de transformar "lixo" em tecnologia viva:
carrinhos que se movem, pequenos robôs com sensores,
peças que brilham e interagem. O exercício criativo mostra
que inovação pode nascer do reuso e da consciência
ecológica.
• Dinâmica das aulas:
- Introdução à robótica e ao conceito de sustentabilidade.
- Exploração de materiais recicláveis e componentes
eletrônicos.
- Prototipagem de invenções (robôs simples, carrinhos,
dispositivos criativos).
- Testes, ajustes e compartilhamento dos resultados.
- Reflexão sobre impacto ambiental e soluções criativas para
problemas do cotidiano.
• Produto final:
Exposição "Robôs Sustentáveis" - mostra interativa com
protótipos criados pelas crianças, aberta à comunidade
escolar.
• Documentação pedagógica:
- Registros fotográficos e audiovisuais do processo de
prototipagem.
- Portfólios digitais com esquemas dos projetos.
- Relatório narrativo via plataforma Nina com reflexões sobre
tecnologia e sustentabilidade.
`,"drone-educativo":`
DRONE EDUCATIVO

CAMADA PEDAGÓGICA:
Eixo: Tecnologias Criativas e Sustentáveis
Intencionalidade pedagógica:
Explorar o uso de drones como recurso educativo, unindo ciência, tecnologia, artes visuais e consciência ambiental. A
prática desenvolve coordenação, percepção espacial, pensamento lógico e noções básicas de programação, além de
estimular o olhar crítico sobre a cidade e o território escolar, ampliando perspectivas.
Temas transversais: Ciência, tecnologia, sustentabilidade, cultura digital, cidadania.
BNCC:
• Competência Geral 2: Pensamento científico, crítico e criativo.
• Competência Geral 5: Cultura digital.
• Competência Geral 10: Responsabilidade e cidadania.
• EF: Ciências (fenômenos físicos e tecnológicos), Geografia (território e espaço), Arte (produção audiovisual).

CAMADA PRÁTICA:
• Idades atendidas:
11 a 17 anos (com adaptações por faixa etária).
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Sim, é recomendado 1 assistente pedagógico para apoiar na
segurança das atividades externas e no manejo dos
equipamentos.
• Recursos necessários da Escola:
Espaço aberto e seguro (quadra, pátio ou campo),
tomadas para recarga, sala multimídia para visualização e
edição de registros.
• Recursos que a LABirintar provê:
Educador empreendedor especialista em drones, drones
educativos, tablets ou notebooks com softwares de controle
e edição de vídeo, materiais de registro audiovisual.
• Protocolos de segurança:
- Uso restrito a áreas amplas e seguras, longe de cabos ou
áreas de risco.
- Pilotagem sempre supervisionada por educador
responsável.
- Limite de altura e perímetro para voos.
- Revezamento de uso, para evitar fadiga e acidentes.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Drones, tablets ou controles remotos, softwares de
programação básica, câmera dos drones para filmagem e
fotografia aérea.
• Experiência estética desejada:
Encantamento pelo novo olhar da escola e da cidade a partir
do alto, prazer em registrar imagens inéditas, criação
audiovisual como expressão criativa e tecnológica.
• Dinâmica das aulas:
- Acolhida e explicação sobre o uso seguro e educativo dos
drones.
- Demonstração e primeiros voos guiados.
- Atividade prática: pilotagem e registro de imagens.
- Edição básica e criação de narrativas audiovisuais.
- Roda de conversa sobre descobertas e aprendizados.
• Produto final:
Mostra "Olhares Aéreos", com exibição dos curtas
audiovisuais produzidos pelas crianças, aberta para famílias e
comunidade escolar.
• Documentação pedagógica:
- Registros fotográficos e vídeos captados pelos drones.
- Portfólios digitais com imagens editadas pelas crianças.
- Relatório narrativo automatizado via Nina com principais
conquistas de cada encontro.
`,"maker-verde":`
MAKER VERDE

CAMADA PEDAGÓGICA:
Eixo: Tecnologias Sustentáveis e Criativas
Intencionalidade pedagógica:
Estimular o espírito inventivo e sustentável, promovendo a curiosidade, a experimentação e a consciência ecológica. A oficina
convida crianças e adolescentes a transformar materiais cotidianos e recicláveis em criações originais, conectando ciência, arte e
natureza. O processo valoriza a autonomia, a colaboração e a prototipagem como forma de aprender fazendo. O percurso é um
laboratório de invenção, onde cada material pode ganhar nova vida - seja como brinquedo, objeto criativo ou solução para
pequenos desafios da vida cotidiana.
Temas transversais: Sustentabilidade, inovação, cultura maker, tecnologia e trabalho, direito ao brincar, cidadania ambiental.
BNCC:
• Competência Geral 1: Conhecimento.
• Competência Geral 2: Pensamento científico, crítico e criativo.
• Competência Geral 5: Cultura digital.
• Competência Geral 6: Trabalho e projeto de vida.
• EF: Ciências e Tecnologia (habilidades EF04C107, EF05CI08, EF35TE01); Arte e Inovação (EF15AR20).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Sim. 1 assistente pedagógico recomendado para apoiar o
grupo e supervisionar o uso seguro dos materiais.
• Recursos necessários da Escola:
Espaço aberto ou ventilado, com mesas firmes; área de
armazenamento para materiais; ponto de energia elétrica
simples.
• Recursos que a LABirintar provê:
Educador empreendedor, kit básico de eletrônica criativa
(LEDs, pilhas, motores simples), sucatas limpas (plástico,
papelão, tampinhas), ferramentas manuais leves (tesouras
sem ponta, cola quente com supervisão, fitas adesivas,
estiletes limitados a faixa etária adequada), além de
elementos naturais (sementes, galhos, pedras).
• Protocolos de segurança:
- Uso supervisionado de ferramentas e cola quente.
- Organização dos materiais antes e depois da atividade.
- Uso de óculos de proteção em atividades de corte.
- Regras de faixa etária para o manuseio de estiletes e
equipamentos.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Sucata limpa, embalagens diversas, papelão, componentes
eletrônicos simples, elementos naturais (sementes, folhas,
galhos), cola, fitas e tintas.
• Experiência estética desejada:
Descobrir a beleza da transformação e perceber que o que
parecia lixo pode virar invenção viva. A experiência estética está
no ato de recombinar materiais, dar novas funções a objetos e
integrar natureza e tecnologia em criações abertas à imaginação.
• Dinâmica das aulas:
- Acolhida e provocação inicial (um desafio inventivo ou exemplo
inspirador).
- Orientações de segurança e demonstração de possibilidades
de uso dos materiais.
- Tempo de criação individual ou em grupos, com livre
exploração maker.
- Testagem, ajustes e apresentação das invenções.
- Reflexão coletiva sobre sustentabilidade e futuro das
invenções.
- Organização compartilhada do espaço.
• Produto final:
- Protótipos inventivos sustentáveis (brinquedos de sucata,
objetos de design, mini-soluções criativas para problemas do
cotidiano).
- Exposição aberta à comunidade escolar: "Mostra de Invenções
Verdes".
• Documentação pedagógica:
- Registro fotográfico e audiovisual do processo.
- Produção de diário coletivo das invenções, com desenhos e
descrições.
- Relatório narrativo via plataforma Nina com imagens e
sínteses reflexivas.
`,"projeto-cidade-vamos":`
PROJETO CIDADE VAMOS
PERCURSOS E CARTOGRAFIAS URBANAS

CAMADA PEDAGÓGICA:
Eixo: Cidade e Cultura Viva
Intencionalidade pedagógica:
Reconhecer a cidade como espaço educador, vivo e pulsante. Por meio de caminhadas curtas, explorações do
entorno da escola e criação de cartografias afetivas, as crianças aprendem a observar, se orientar e se relacionar com
os espaços coletivos. O projeto valoriza a cultura local, promove vínculos de pertencimento e amplia a noção de
cidadania e sustentabilidade urbana.
Temas transversais: Cidades educadoras, geografia afetiva, mobilidade, sustentabilidade, cidadania, memória.
BNCC:
• Competência Geral 1: Conhecimento.
• Competência Geral 3: Repertório cultural.
• Competência Geral 7: Argumentação.
• Competência Geral 9: Empatia e cooperação.
• EF: Geografia (território, espaço urbano, mapas), História (memórias locais), Arte (cartografia criativa e
fotografia), Ciências (meio ambiente, sustentabilidade).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Necessário apoio para acompanhamento nos passeios
externos e registro da experiência.
• Recursos necessários da Escola:
Autorização das famílias para saídas no entorno, kits de
registro (papel, pranchetas, lápis, celular/câmera para fotos).
• Recursos que a LABirintar provê:
Educador empreendedor, metodologia de cartografia afetiva,
materiais para mapas criativos (papel kraft, adesivos,
marcadores coloridos).
• Protocolos de segurança:
- Planejamento prévio dos trajetos (locais próximos e
seguros).
- Crianças sempre em grupo, com educadores e apoio.
- Contato emergencial com a escola.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Mapas, desenhos, fotografias, narrativas orais, cartografias
afetivas coletivas em grandes papéis.
• Experiência estética desejada:
Sentir a cidade como um corpo vivo a ser explorado e
ressignificado. A cada passo, as crianças descobrem beleza e
significado em praças, ruas, esquinas, trajetos cotidianos.
Produzir mapas e registros visuais transforma o território em obra
coletiva.
• Dinâmica das aulas:
- Conversa inicial sobre a cidade e a ideia de espaço educador.
- Saída pelo entorno para observação, registro de elementos,
coleta de impressões.
- Produção de cartografias afetivas (mapas criativos que
mesclam realidade e imaginação).
- Compartilhamento das descobertas em roda de conversa.
- Sistematização em mural coletivo de mapas, fotos e memórias.
• Produto final:
Exposição "Cartografias das Infâncias", com mapas afetivos,
fotografias e relatos das crianças sobre o território.
• Documentação pedagógica:
- Fotos e vídeos dos passeios.
- Mapas produzidos coletivamente.
- Relatórios narrativos via plataforma Nina com registros de falas,
percepções e descobertas.
`,"cozinhas-e-infancias":`
COZINHAS E INFÂNCIAS

CAMADA PEDAGÓGICA:
Eixo: Cidade e Cultura Viva
Intencionalidade pedagógica:
Explorar a cozinha como espaço de criação, memória e partilha. Ao preparar receitas simples ligadas à cultura familiar
e ao território, as crianças aprendem sobre tradição, afeto, nutrição e pertencimento. Cozinhar em grupo se torna
exercício de convivência, cuidado e curiosidade, ampliando repertórios culturais e alimentares.
Temas transversais: Cultura alimentar, sustentabilidade, memória, convivência, saúde.
BNCC:
• Competência Geral 1: Conhecimento.
• Competência Geral 3: Repertório cultural.
• Competência Geral 8: Autoconhecimento e autocuidado.
• Competência Geral 9: Empatia e cooperação.
• EF: Ciências da Natureza (alimentos e nutrição), Arte (estética e sensorialidade), História (tradições culturais).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Recomendável 1 apoio para segurança no manuseio de
alimentos e materiais.
• Recursos necessários da Escola:
Espaço com pia e bancadas ou sala adaptada para culinária
educativa.
• Recursos que a LABirintar provê:
Educador empreendedor, lista de receitas selecionadas, kit
pedagógico com utensílios básicos seguros para crianças,
fogão/forno simples (ou elétrico), utensílios básicos,
ingredientes acessíveis. orientação de higiene e segurança
alimentar.
• Protocolos de segurança:
- Orientações de higiene antes, durante e após a atividade.
- Uso de utensílios adequados à idade.
- Supervisão constante no uso de fogo e facas.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Ingredientes diversos, utensílios de cozinha, cadernos de
receitas, registros fotográficos e escritos.
• Experiência estética desejada:
Sentir o cheiro, a textura e o sabor de algo preparado pelas
próprias mãos, associando a prática a memórias afetivas e
culturais. O gesto de cozinhar se torna também uma forma de
brincar, criar e expressar identidade.
• Dinâmica das aulas:
- Acolhida e roda de conversa sobre memórias de comida e
receitas de família.
- Apresentação da receita do dia, ingredientes e contexto
cultural.
- Preparo coletivo, com divisão de tarefas e cooperação.
- Momento de degustação e partilha.
- Registro em caderno de receitas coletivo ou diário de bordo
da turma.
• Produto final:
Livro coletivo de receitas das crianças, com histórias,
desenhos e registros fotográficos, além de um evento de
partilha de sabores com as famílias.
• Documentação pedagógica:
- Fotos e vídeos das etapas do preparo.
- Registros escritos e ilustrados no caderno de receitas.
- Relatório narrativo via plataforma Nina com trechos das
memórias culinárias e reflexões das crianças.
`,"arte-de-rua":`
ARTE DE RUA NA MINHA ESCOLA

CAMADA PEDAGÓGICA:
Eixo: Cidade e Cultura Viva
Intencionalidade pedagógica:
Reconhecer a arte urbana como expressão legítima de identidade, memória e transformação social. Valorizar
linguagens gráficas e musicais das culturas de rua - lambe-lambe, grafite, serigrafia, fanzine, carimbos, batalhas de
rima e rap - como práticas educativas que despertam criatividade, senso crítico, pertencimento e engajamento
comunitário. A experiência articula corpo, palavra e imagem como ferramentas de expressão política, poética e
estética.
Temas transversais: Cultura de juventudes, cidadania, diversidade, identidade, artes visuais, música, linguagem.
BNCC:
• Competência Geral 3: Repertório cultural.
• Competência Geral 6: Trabalho e projeto de vida.
• Competência Geral 8: Autoconhecimento e autocuidado.
• EF: Arte (artes visuais, música, teatro).
• LP: Oralidade, produção textual e poética.
• Ciências Humanas: Direitos, cidadania e territórios culturais.

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Não obrigatório, mas enriquecedor em atividades de grande
produção coletiva e eventos (pocket shows, murais).
• Recursos necessários da Escola:
Espaço externo para pintura e intervenção gráfica (paredes
autorizadas, muros, painéis de madeira), sala multiuso para
oficinas gráficas, caixas de som para pocket shows.
• Recursos que a LABirintar provê:
Educadores empreendedores especializados (artes gráficas,
música/rap), curadoria de materiais (papéis, tintas, telas de
serigrafia, sprays, microfone portátil), metodologia integrando
artes gráficas e expressão musical.
• Protocolos de segurança:
- Orientação no uso de sprays e tintas.
- Garantia de espaços autorizados para grafite.
- Respeito às criações individuais e coletivas.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Lambes, cartazes, murais, estênceis, sprays, telas de serigrafia,
carimbos, papéis de fanzine, microfones, beats de rap.
• Experiência estética desejada:
A escola se transforma em galeria viva e palco aberto. Os muros,
cartazes e fanzines expressam vozes coletivas, enquanto as
batalhas de rima e pocket shows de rap trazem potência da
palavra falada e ritmada. A arte urbana assume seu lugar como
estética do cotidiano, colorindo e sonorizando o espaço escolar.
• Dinâmica das aulas:
- Introdução histórica e cultural das linguagens urbanas.
- Oficina prática (gráfica ou musical).
- Criação coletiva de obras (murais, lambe-lambe, fanzines,
rimas).
- Troca e reflexão sobre o impacto social e cultural da arte
urbana.
- Preparação para pocket show de rap ou exposição gráfica.
• Produto final:
Evento "Arte de Rua na Minha Escola", com:
- Exposição coletiva de lambe-lambe, fanzines, carimbos e
grafite.
- Pocket show de rap e batalha de rimas aberta à comunidade.
• Documentação pedagógica:
- Fotografias e vídeos das produções gráficas e musicais.
- Catálogo digital dos fanzines e cartazes criados.
- Relatório narrativo via plataforma Nina conectando arte urbana,
e cidadania.
`,"empreender-sonhos":`
EMPREENDER SONHOS

CAMADA PEDAGÓGICA:
Eixo: Cuidar de si, do outro e do mundo
Intencionalidade pedagógica:
Inspirada nas ideias de Fernando Dolabela, a experiência entende o empreendedorismo não apenas como abrir
negócios, mas como a capacidade de sonhar, projetar e transformar ideias em realidade com impacto no coletivo.
Para crianças de 7 a 10 anos, o foco está em estimular imaginação, cooperação, liderança positiva e responsabilidade,
transformando pequenos projetos em experiências de vida.
Princípios pedagógicos (Dolabela adaptado): Todo ser humano é um empreendedor em potencial./ Empreender é
sonhar e realizar, com coragem e colaboração./ O exercício do projeto fortalece autonomia, criatividade e visão de
futuro.
Temas transversais: Autonomia, cidadania, responsabilidade, cooperação.
BNCC:
• Competência Geral 6: Trabalho e projeto de vida.
• Competência Geral 8: Autoconhecimento e autocuidado.
• Competência Geral 10: Responsabilidade e cidadania.
• EF: Matemática (organização e planejamento), Língua Portuguesa (comunicação e registro), Arte (expressão
criativa).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 8 alunos
Máximo: 20 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Sim, para auxiliar na mediação de grupos e nas etapas de
apresentação de projetos.
• Recursos necessários da Escola:
Espaço para rodas de conversa e oficinas.
• Recursos que a LABirintar provê:
Educador empreendedor, metodologia lúdica adaptada de
Dolabela (mapa de sonhos, mural de ideias, jogo do projeto),
fichas visuais para planejamento simples, materiais diversos
(papel, cartolina, lápis, sucata para protótipos).
• Protocolos de segurança:
- Organização dos grupos de acordo com idade.
- Mediação de conflitos na hora de decidir coletivamente.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Papéis, cartazes, murais de sonhos, colagens, sucata para
prototipagem, fotografias e vídeos dos projetos.
• Experiência estética desejada:
A criança experimenta o prazer de imaginar algo e vê-lo ganhar
forma: um jogo criado em grupo, uma mini campanha na escola,
uma feira de trocas ou uma apresentação artística. O processo é
coletivo, divertido e formativo - cada criança aprende que suas
ideias têm valor e podem transformar o mundo ao seu redor.
• Dinâmica das aulas:
- Roda de sonhos: cada criança compartilha algo que gostaria de
criar ou transformar.
- Seleção de ideias em grupo e construção do "Mural dos Sonhos".
- Planejamento lúdico: usar fichas com ícones (quem, como,
quando, com o quê).
- Prototipagem com materiais simples.
- Apresentação das ideias/projetos à turma, famílias ou
comunidade escolar.
• Produto final:
Feira "Sonhos em Ação" - exposição dos projetos criados, em
formato de maquetes, protótipos, apresentações ou ações
realizadas.
• Documentação pedagógica:
- Portfólios ilustrados com etapas do projeto.
- Registros audiovisuais das criações e apresentações.
- Relatório narrativo via plataforma Nina, destacando a visão
empreendedora como competência de vida.
`,"educacao-financeira":`
EDUCAÇÃO FINANCEIRA

CAMADA PEDAGÓGICA:
Eixo: Cuidar de si, do outro e do mundo
Intencionalidade pedagógica:
Apresentar a educação financeira como prática de consciência, responsabilidade e sustentabilidade, entendendo o
dinheiro como parte de um sistema maior: tempo, energia, natureza e recursos que precisam ser bem cuidados. A
proposta valoriza a ideia de que planejar é também sonhar, e que decisões financeiras refletem valores e visão de
futuro.
Temas transversais: Sustentabilidade, cidadania, responsabilidade social, planejamento.
BNCC:
• Competência Geral 6: Trabalho e projeto de vida.
• Competência Geral 7: Argumentação (tomada de decisão consciente).
• Competência Geral 8: Autoconhecimento e autocuidado.
• EF: Matemática (números, operações, proporções), Ciências Humanas (consumo, sociedade, economia), Arte
(representação de valores e escolhas).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Não obrigatório, mas enriquecedor em práticas de simulação
(ex: jogos coletivos de troca).
• Recursos necessários da Escola:
Espaço para jogos de simulação.
• Recursos que a LABirintar provê:
Educador empreendedor, kits lúdicos de simulação financeira
(moedas fictícias, baralhos de situações), roteiros de
atividades, materiais de registro, um computador por aluno
(modelo - locação).
• Protocolos de segurança:
- Organização de jogos para evitar comparações competitivas
nocivas.
- Mediação constante para reforçar a ideia de cooperação e
não apenas de "ganhar".

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Jogos de tabuleiro adaptados, moedas e notas fictícias, fichas de
troca, materiais recicláveis para simulações de compra e venda,
cartazes e murais.
• Experiência estética desejada:
A criança vivencia de forma lúdica o que significa planejar,
escolher e cuidar de recursos. As simulações trazem dilemas
reais: economizar para um sonho coletivo, decidir entre gastar ou
poupar, cuidar de uma horta como "ativo" de longo prazo. Tudo
com leveza, criatividade e imaginação.
• Dinâmica das aulas:
- Atividade inicial com um dilema ou história (ex: "Como ajudar
uma comunidade a cuidar de seus recursos?").
- Simulação ou jogo lúdico sobre troca, poupança, gasto,
investimento em sonhos.
- Discussão coletiva: quais escolhas foram feitas? O que
significaram?
- Produção de registros visuais (desenhos, tabelas simples,
mapas de sonhos).
- Fechamento conectando escolhas financeiras a valores de
vida.
• Produto final:
Olimpíada de Educação Financeira como forma de
celebração.
• Documentação pedagógica:
- Fotografias das simulações.
- Portfólio coletivo com dilemas resolvidos em grupo.
- Relatório narrativo via plataforma Nina, destacando como as
crianças relacionaram finanças a vida, cuidado e futuro.
`,mindfulness:`
MINDFULNESS E BEM-ESTAR

CAMADA PEDAGÓGICA:
Eixo: Cuidar de Si, do Outro e do Mundo
Intencionalidade pedagógica:
Promover práticas de atenção plena que favoreçam o equilíbrio emocional, o autoconhecimento e a consciência
corporal. A experiência ajuda as crianças a desenvolverem habilidades de foco, regulação da ansiedade, empatia e
capacidade de viver o momento presente, fortalecendo competências socioemocionais fundamentais para a vida.
Temas transversais: Saúde, ética, convivência, sustentabilidade, cidadania.
BNCC:
• Competência Geral 8: Autoconhecimento e autocuidado.
• Competência Geral 9: Empatia e cooperação.
• Competência Geral 10: Responsabilidade e cidadania.
• EF: Educação Física (habilidades EF15EF02 – consciência corporal, EF35EF05 – equilíbrio emocional).

CAMADA PRÁTICA:
• Idades atendidas:
6 a 14 anos (com adaptações para cada faixa etária).
• Quantidade mínima/máxima:
Mínimo: 6 alunos
Máximo: 12 alunos
• Duração:
1 encontro semanal de 1h
Trilha semestral de 16 encontros
• Necessidade de apoio pedagógico:
Não obrigatório, mas recomendado em turmas maiores para
apoiar mediação emocional.
• Recursos necessários da Escola:
Sala tranquila ou espaço aberto silencioso.
• Recursos que a LABirintar provê:
Educador empreendedor com formação em mindfulness,
roteiros de práticas guiadas, materiais de apoio (sinos
tibetanos, instrumentos leves, cartões de emoções),
colchonetes ou almofadas, som ambiente simples.
• Protocolos de segurança:
- Criação de um ambiente respeitoso e silencioso.
- Acolhimento das emoções emergentes, sem julgamento.
- Adaptação das práticas conforme faixa etária e
necessidades individuais.

CAMADA ESTÉTICA:
• Materialidades que envolvem este fazer:
Colchonetes, almofadas, instrumentos sonoros suaves,
recursos visuais de apoio (imagens, cartões, mandalas).
• Experiência est(ética) desejada:
Sensação de calma, presença e equilíbrio; encantamento pelo
silêncio compartilhado; prazer de descobrir o próprio corpo e
a respiração como instrumentos de bem-estar.
• Dinâmica das aulas:
- Acolhida e preparação do ambiente (5 min).
- Prática de respiração guiada ou exercício de foco.
- Vivência principal (atenção plena em movimento, meditação
curta, exercício de empatia).
- Momento de partilha sobre sentimentos e percepções.
- Fechamento com ritual coletivo (ex.: respiração final, som
suave).
• Produto final:
Mostra "Diário da Atenção Plena" - exposição de registros
individuais (desenhos, relatos, mandalas) e vivência aberta
com as famílias.
• Documentação pedagógica:
- Registro fotográfico e audiovisual das práticas (com respeito
à privacidade).
- Produção de diários pessoais de bem-estar (desenhos,
frases, relatos).
- Relatório narrativo automatizado via Nina com reflexões e
conquistas emocionais.
`},Nr=[{nome:"Adriana Bragotto",especialidade:"Costura",indicou:"Babi Rubira"},{nome:"Alex Uzueli",especialidade:"Marcenaria",indicou:"Maria Lívia"},{nome:"Ana Medeiros",especialidade:"Dança",indicou:"Danilo Alves"},{nome:"André Montilha",especialidade:"Marcenaria",indicou:"Babi Rubira"},{nome:"Andrea Peres",especialidade:"Marcenaria",indicou:"Babi Rubira"},{nome:"Ariela",especialidade:"Educação Alimentar",indicou:"Luiz Camacho"},{nome:"Babi Rubira",especialidade:"Marcenaria",indicou:"Maria Lívia"},{nome:"Beca Chang",especialidade:"Cerâmica",indicou:"Andrea Peres"},{nome:"Carlos Candido",especialidade:"Drone Educativo",indicou:"Gustavo Santos"},{nome:"Carol Zanet",especialidade:"Meditação e Mindfullness",indicou:"Luiz Camacho"},{nome:"Cesar Fabiano Lopes",especialidade:"Circo",indicou:"Silvinha Lopes"},{nome:"Chico Maciel",especialidade:"Marcenaria",indicou:"Andrea Peres"},{nome:"Claudia Bavagnoli",especialidade:"Tapeçaria",indicou:"Andrea Peres"},{nome:"Cristiane Velasco",especialidade:"Contação de Histórias",indicou:"Maria Lívia"},{nome:"Dani Storto",especialidade:"Literatura",indicou:"Luiz Camacho"},{nome:"Danilo Alves",especialidade:"Parkour",indicou:"Luiz Camacho"},{nome:"Edu Moreira",especialidade:"Empreendedorismo",indicou:"Maria Lívia"},{nome:"Elisa Lunardi",especialidade:"Cultura das Infâncias",indicou:"Tati Garrido"},{nome:"Everton França",especialidade:"Criação de Jogos Digitais",indicou:"Leonardo Galvão"},{nome:"Felipe Almeida",especialidade:"Panificação",indicou:"Maria Lívia"},{nome:"Felipe Corsini",especialidade:"Marcenaria",indicou:"Babi Rubira"},{nome:"Flora Barcellos",especialidade:"Dança",indicou:"Dani Storto"},{nome:"Fran Busico",especialidade:"Meditação e Mindfullness",indicou:"Luiz Camacho"},{nome:"Giulliana Gardner",especialidade:"Literatura",indicou:"Everton França"},{nome:"Guilherme Federighi",especialidade:"Sustentabilidade",indicou:"Rex"},{nome:"Gustavo Santos",especialidade:"Tecnologia",indicou:"Maria Lívia"},{nome:"Iris Carano",especialidade:"Criação de Jogos Digitais",indicou:"Leonardo Galvão"},{nome:"João Venturini",especialidade:"Xadrez",indicou:"Túlio Vidal"},{nome:"José Carlos",especialidade:"Criação de Jogos Digitais",indicou:"Leonardo Galvão"},{nome:"Keli Rodrigues",especialidade:"Criação de Jogos de Tabuleiro",indicou:"Lucas Lorena"},{nome:"Kristina Gonçalves",especialidade:"Teatro",indicou:"Edu Moreira"},{nome:"Leo Oshiro",especialidade:"Corpo e Movimento",indicou:"Maria Lívia"},{nome:"Leonardo Galvão",especialidade:"Criação de Jogos Digitais",indicou:"Lucas Lorena"},{nome:"Livia Raizer",especialidade:"Xadrez",indicou:"João Venturini"},{nome:"Lucas Lorena",especialidade:"Criação de Jogos de Tabuleiro",indicou:"Edu Moreira"},{nome:"Luiz Camacho",especialidade:"Pedagogia",indicou:"Maria Lívia"},{nome:"Marco Novais",especialidade:"Marcenaria",indicou:"Maria Lívia"},{nome:"Marcos de Moraes",especialidade:"Criação de Jogos Digitais",indicou:"Lucas Lorena"},{nome:"Maria Lívia",especialidade:"Pedagogia",indicou:""},{nome:"May",especialidade:"Arte de rua",indicou:"Livia Raizer"},{nome:"Michelle Galindo",especialidade:"Improvisação",indicou:"Maria Lívia"},{nome:"Michelle Zeitel",especialidade:"Práticas Inclusivas",indicou:"Lucas Lorena"},{nome:"Rex",especialidade:"Cidade Educadora",indicou:"Luiz Camacho"},{nome:"Samir",especialidade:"Marcenaria",indicou:"Babi Rubira"},{nome:"Silvinha Lopes",especialidade:"Dança",indicou:"Luiz Camacho"},{nome:"Tati Garrido",especialidade:"Cultura das Infâncias",indicou:"Maria Lívia"},{nome:"Theo Grahl",especialidade:"Fotografia",indicou:"Babi Rubira"},{nome:"Túlio Vidal",especialidade:"Panificação",indicou:"Edu Moreira"},{nome:"Mateus",especialidade:"Panificação",indicou:"Everton França"},{nome:"Beátriz Kovacsik",especialidade:"Teatro",indicou:"Babi Rubira"},{nome:"Thiago Sgambato",especialidade:"Teatro",indicou:"Andrea Peres"},{nome:"Laura",especialidade:"Joalheria",indicou:"Babi Rubira"},{nome:"Ricardo Sylos",especialidade:"Arquitetura",indicou:"Andrea Peres"},{nome:"Yuri Correa Piratello",especialidade:"Jogos de tabuleiro",indicou:"Lucas Lorena"},{nome:"Ricardo Dadu",especialidade:"Jogos de tabuleiro",indicou:"Lucas Lorena"},{nome:"Nanda Sales",especialidade:"Jogos de Tabuleiro",indicou:"Felipe"},{nome:"Marco",especialidade:"Jogos de Tabuleiro",indicou:"Nanda Sales"},{nome:"Claudia Rossi",especialidade:"Tecnologias",indicou:"Maria Lívia"},{nome:"Julia Keneucke",especialidade:"Dança",indicou:"Marcos de Moraes"},{nome:"Alex Pena",especialidade:"Jogos de Tabuleiro",indicou:"Lucas Lorena"},{nome:"Lourdes Atié",especialidade:"Sociologia",indicou:"Maria Lívia"},{nome:"Felipe",especialidade:"Casa Cultural",indicou:"Livia Raizer"},{nome:"Lucimara",especialidade:"",indicou:"Mateus"},{nome:"Renato",especialidade:"",indicou:"Mateus"},{nome:"Deise",especialidade:"",indicou:"Mateus"},{nome:"Luiz Paulo",especialidade:"",indicou:"Mateus"}],ar=r=>r.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-"),p0={Marcenaria:"Marcenaria Criativa","Drone Educativo":"Drone Educativo","Meditação e Mindfullness":"Mindfulness e Bem-Estar",Circo:"Circuito Acrobático Circense",Parkour:"Parkour Brasil",Empreendedorismo:"Empreender Sonhos","Criação de Jogos Digitais":"Criação de Jogos Digitais",Panificação:"Pães Artesanais",Xadrez:"Xadrez para a Vida","Criação de Jogos de Tabuleiro":"Criação de Jogos de Tabuleiro","Jogos de tabuleiro":"Criação de Jogos de Tabuleiro","Arte de rua":"Arte de Rua na Minha Escola",Improvisação:"Improvisação","Cidade Educadora":"Projeto Cidade Vamos",Fotografia:"Fotografia",Teatro:"Teatro",Tecnologias:"Tecnologia","Cultura das Infâncias":"Cultura das Infâncias","Contação de Histórias":"Contação de Histórias","Educação Alimentar":"Educação Alimentar","Corpo e Movimento":"Corpo e Movimento","Práticas Inclusivas":"Práticas Inclusivas",Costura:"Costura",Dança:"Dança e Percussão",Cerâmica:"Cerâmica",Tapeçaria:"Tapeçaria",Literatura:"Literatura",Sustentabilidade:"Sustentabilidade",Joalheria:"Joalheria",Arquitetura:"Arquitetura",Sociologia:"Sociologia","Casa Cultural":"Casa Cultural"},f0=[{id:"quintal-vivo",name:"Quintal Vivo"},{id:"circuito-acrobatico-circense",name:"Circuito Acrobático Circense"},{id:"teatro",name:"Teatro"},{id:"danca-e-percussao",name:"Dança e Percussão"},{id:"brincadeiras-musicais",name:"Brincadeiras Musicais"},{id:"improvisacao",name:"Improvisação"},{id:"projeto-crio-livros",name:"Projeto Crio Livros"},{id:"fotografia",name:"Fotografia"},{id:"parkour-brasil",name:"Parkour Brasil"},{id:"esportes-urbanos",name:"Esportes Urbanos"},{id:"marcenaria-criativa",name:"Marcenaria Criativa"},{id:"origami",name:"Origami"},{id:"modelagem-3d",name:"Modelagem 3D"},{id:"paes-artesanais",name:"Pães Artesanais"},{id:"jogos-de-tabuleiro",name:"Criação de Jogos de Tabuleiro"},{id:"jogos-digitais",name:"Criação de Jogos Digitais"},{id:"rpg-narrativas-coletivas",name:"RPG e Narrativas Coletivas"},{id:"xadrez-para-a-vida",name:"Xadrez para a Vida"},{id:"robotica-sustentavel",name:"Robótica Sustentável"},{id:"drone-educativo",name:"Drone Educativo"},{id:"maker-verde",name:"Maker Verde"},{id:"projeto-cidade-vamos",name:"Projeto Cidade Vamos"},{id:"cozinhas-e-infancias",name:"Cozinhas e Infâncias"},{id:"arte-de-rua",name:"Arte de Rua na Minha Escola"},{id:"empreender-sonhos",name:"Empreender Sonhos"},{id:"educacao-financeira",name:"Educação Financeira"},{id:"mindfulness",name:"Mindfulness e Bem-Estar"}],di=new Map;f0.forEach(r=>{di.set(r.name,{...r,content:Gl[r.id]||`Conteúdo para ${r.name} em breve.`,specialists:[]})});const m0=new Set(Nr.map(r=>{var e;return(e=r.nome)==null?void 0:e.trim()}).filter(Boolean)),g0=new Set(Nr.map(r=>{var e;return(e=r.indicou)==null?void 0:e.trim()}).filter(Boolean)),rr=new Set;g0.forEach(r=>{m0.has(r)||rr.add(r)});Nr.forEach(r=>{var a,o,c;const e=(a=r.especialidade)==null?void 0:a.trim(),t=(o=r.nome)==null?void 0:o.trim();if(!t)return;const n={id:ar(t),name:t,indicatedBy:((c=r.indicou)==null?void 0:c.trim())||void 0};if(!e)return;const i=p0[e]||e;let s=di.get(i);if(!s){const l=ar(i);s={id:l,name:i,content:Gl[l]||`A ${i} é uma área de grande potencial na LABirintar, conectando educadores talentosos a escolas que buscam inovação. Em breve, teremos mais detalhes sobre esta ficha pedagógica.`,specialists:[]},di.set(i,s)}s.specialists.some(l=>l.name.toLowerCase()===n.name.toLowerCase())||s.specialists.push(n)});if(rr.size>0){const r={id:"rede-externa",name:"Rede Externa",content:"Pessoas que indicaram talentos para a LABirintar mas não são educadores formais da rede. Eles representam a força e o alcance da nossa comunidade.",specialists:[]};rr.forEach(e=>{Array.from(di.values()).some(n=>n.specialists.some(i=>i.name===e))||r.specialists.push({id:ar(e),name:e,isExternal:!0})}),r.specialists.length>0&&di.set(r.name,r)}const Di=Array.from(di.values()).filter(r=>r.specialists.length>0),v0=.5,x0=10,y0=.01,_0=15,b0=1,w0=.5,M0=150,ei=70,E0=1.1,Lc=.02,S0=.2,A0=.12,T0=16734554,C0=11721941,L0=11453927,R0=(r,e,t,n,i,s)=>{r.beginPath(),r.moveTo(e+s,t),r.lineTo(e+n-s,t),r.quadraticCurveTo(e+n,t,e+n,t+s),r.lineTo(e+n,t+i-s),r.quadraticCurveTo(e+n,t+i,e+n-s,t+i),r.lineTo(e+s,t+i),r.quadraticCurveTo(e,t+i,e,t+i-s),r.lineTo(e,t+s),r.quadraticCurveTo(e,t,e+s,t),r.closePath()},Rc=(r,e,t=24,n="#ffffff",i="rgba(0, 0, 0, 0.4)")=>{const s=document.createElement("canvas"),a=s.getContext("2d");if(!a)return new oi;const o=`Bold ${t}px Arvo, serif`;a.font=o;const l=a.measureText(r).width;s.width=l+20,s.height=t+10,a.font=o,a.fillStyle=i,R0(a,0,0,s.width,s.height,8),a.fill(),a.textAlign="center",a.textBaseline="middle",a.fillStyle=n,a.fillText(r,s.width/2,s.height/2);const d=new ll(s),h=new yr({map:d,transparent:!0}),u=new oi(h),p=e?.03:.05;return u.scale.set(s.width*p,s.height*p,1),u.userData={isLabel:!0},u},F0=({onSpecialtyClick:r,isPreview:e=!1,searchQuery:t=""})=>{const n=et.useRef(null),i=et.useRef([]),s=et.useRef([]),a=et.useRef([]),o=et.useRef(new Map),c=et.useRef(null),l=et.useRef(null),d=et.useRef(),h=et.useRef(),u=et.useRef(),p=et.useRef(new Nv),m=et.useRef(new se),v=et.useRef(!1),x=et.useRef(),g=et.useMemo(()=>Di.flatMap(b=>b.specialists.map(w=>({...w,specialtyId:b.id}))),[]),f=et.useCallback(b=>i.current.find(w=>w.id===b),[]),M=et.useCallback(()=>{const b=new Map;g.forEach(w=>b.set(w.id,new Set)),g.forEach(w=>{var y,I;if(w.indicatedBy){const z=g.find(B=>B.name===w.indicatedBy);z&&((y=b.get(w.id))==null||y.add(z.id),(I=b.get(z.id))==null||I.add(w.id))}}),o.current=b},[g]);return et.useEffect(()=>{const b=t.toLowerCase().trim();if(!i.current.length)return;const w=new Map;if(b){const z=new Set;Di.forEach(G=>{G.name.toLowerCase().includes(b)&&G.specialists.forEach(O=>z.add(O.id))}),g.forEach(G=>{G.name.toLowerCase().includes(b)&&z.add(G.id)});const B=[];z.forEach(G=>{B.push({id:G,level:0}),w.set(G,0)});let F=0;for(;F<B.length;){const{id:G,level:O}=B[F++];if(O>=1)continue;const S=o.current.get(G);S&&S.forEach(R=>{w.has(R)||(w.set(R,O+1),B.push({id:R,level:O+1}))})}}const y={0:1,1:1,2:.95,3:.9},I=w.size>0;i.current.forEach(z=>{const B=z.mesh.material,F=w.get(z.id),G=F!==void 0;B.opacity=I?G?y[F]:.1:1,z.mesh.children.forEach(O=>{O instanceof oi&&(O.material.opacity=B.opacity>.15?1:.05)})}),a.current.forEach(z=>{const B=z.memberIds.some(F=>w.has(F));z.sprite.material.opacity=I?B?1:.05:1}),s.current.forEach(z=>{const B=z.constraint,F=f(B.bodyA.userData.id),G=f(B.bodyB.userData.id),O=z.line.material,S=I?F&&G&&w.has(F.id)&&w.has(G.id):!0;O.opacity=S?.8:.05})},[t,g,f]),et.useEffect(()=>{const b=n.current;if(!b)return;M();const w=new Map;g.forEach(V=>{var k;w.set(V.id,((k=o.current.get(V.id))==null?void 0:k.size)||0)});const y=new xr;h.current=y,y.fog=new Zs(1118481,70,150);const I=new si;y.add(I),u.current=I;const z=new _t(75,b.clientWidth/b.clientHeight,.1,1e3);d.current=z,z.position.z=50;const B=new ke({antialias:!0,alpha:!0});B.setSize(b.clientWidth,b.clientHeight),B.setPixelRatio(window.devicePixelRatio),B.setClearColor(0,0),b.appendChild(B.domElement),l.current=B;const F=new h0(z,B.domElement);e?F.enabled=!1:(F.enableDamping=!0,F.dampingFactor=.05,F.minDistance=20,F.maxDistance=150),y.add(new Al(16777215,.8));const G=new Sl(16777215,1);G.position.set(5,10,7.5),y.add(G);const O=new a0({gravity:new _(0,0,0)}),S=new Ki("nodeMaterial");O.addContactMaterial(new Qi(S,S,{friction:.3,restitution:.5}));const R=new nr({color:T0,shininess:30,transparent:!0}),P=new nr({color:C0,shininess:30,transparent:!0}),C=new gi({color:L0,transparent:!0,opacity:.6}),Z=(V,k,W)=>{const K=w.get(V.id)||0,j=v0+Math.log1p(K)*.9,T=new Ig(j,16,8),E=(V.isExternal?P:R).clone(),H=new Mt(T,E);if(H.position.copy(k),H.userData={id:V.id,isSpecialty:!1,data:V},!e){const N=Rc(V.name,e,18,"#f4f0e8");N.position.y=j+.3,H.add(N)}I.add(H);const X=1+Math.log1p(K)*3,oe=new kx(j),de=new he({mass:X,material:S,linearDamping:.8,angularDamping:.8});de.addShape(oe),de.position.set(k.x,k.y,k.z),de.userData={id:V.id},O.addBody(de);const _e={id:V.id,mesh:H,body:de,isSpecialty:!1,specialtyId:W};return i.current.push(_e),_e},$=(V,k,W,K)=>{const j=new Ue().setFromPoints([V.mesh.position,k.mesh.position]),T=new Js(j,C.clone());I.add(T);const E=new Ox(V.body,k.body,W,K);O.addConstraint(E),s.current.push({line:T,constraint:E})},Y=()=>{for(let k=0;k<i.current.length;k++){const W=i.current[k],K=W.body.position.clone().negate().scale(y0*W.body.mass);W.body.applyForce(K);const j=W.body.position,T=new _;Math.abs(j.x)>ei&&(T.x=-20*(j.x-Math.sign(j.x)*ei)),Math.abs(j.y)>ei&&(T.y=-20*(j.y-Math.sign(j.y)*ei)),Math.abs(j.z)>ei&&(T.z=-20*(j.z-Math.sign(j.z)*ei)),W.body.applyForce(T);for(let E=k+1;E<i.current.length;E++){const H=i.current[E],X=new _;W.body.position.vsub(H.body.position,X);const oe=X.lengthSquared();if(oe>.01){const de=x0/oe;X.normalize();const _e=X.scale(de);W.body.applyForce(_e),H.body.applyForce(_e.negate())}}}const V=a.current.map(k=>{const W=k.memberIds.map(f).filter(j=>!!j);if(W.length===0)return null;const K=new _;return W.forEach(j=>K.vadd(j.body.position,K)),K.scale(1/W.length,K),{center:K,nodes:W}}).filter(k=>!!k);V.forEach(({center:k,nodes:W})=>{W.forEach(K=>{const j=k.vsub(K.body.position).scale(w0*K.body.mass);K.body.applyForce(j)})});for(let k=0;k<V.length;k++)for(let W=k+1;W<V.length;W++){const{center:K,nodes:j}=V[k],{center:T,nodes:E}=V[W],H=new _;K.vsub(T,H);const X=H.lengthSquared();if(X>1){const oe=M0/X;H.normalize();const de=H.scale(oe);j.forEach(_e=>_e.body.applyForce(de)),E.forEach(_e=>_e.body.applyForce(de.negate()))}}},re=new Map;Di.forEach((V,k)=>{const W=k/Di.length*Math.PI*2,K=25+Math.random()*5,j=new L(Math.cos(W)*K,(Math.random()-.5)*10,Math.sin(W)*K);if(!e){const T=Rc(V.name,e,16,"#000000","rgba(255, 164, 0, 0.8)");I.add(T),a.current.push({id:V.id,name:V.name,sprite:T,memberIds:V.specialists.map(E=>E.id)})}V.specialists.forEach((T,E)=>{const H=E/V.specialists.length*Math.PI*2,X=3+Math.random()*1.5,oe=new L(j.x+Math.cos(H)*X,j.y+(Math.random()-.5)*2,j.z+Math.sin(H)*X),de=Z(T,oe,V.id);re.set(T.id,de)})}),g.forEach(V=>{var k;if(V.indicatedBy){const W=re.get(V.id),K=re.get(((k=g.find(j=>j.name===V.indicatedBy))==null?void 0:k.id)||"");W&&K&&$(W,K,_0,b0)}});const ae=new yv,ne=new Et,fe=new L,J=new L,Re=new L,Se=new L,ge=()=>{c.current=requestAnimationFrame(ge);const V=Math.min(ae.getDelta(),.1);if(Y(),O.step(1/60,V,5),u.current&&!v.current&&!e&&(u.current.rotation.y+=S0*V,u.current.rotation.x+=A0*V),i.current.forEach(k=>{k.mesh.position.lerp(new L(k.body.position.x,k.body.position.y,k.body.position.z),.5)}),a.current.forEach(k=>{const W=k.memberIds.map(f).filter(K=>!!K);if(W.length>0)if(W.length===1){const K=W[0],j=K.mesh.position,T=K.mesh.geometry.parameters.radius,E=new L(j.x,j.y-T-.5,j.z);k.sprite.position.copy(E)}else{const K=new L;W.forEach(j=>K.add(j.mesh.position)),K.divideScalar(W.length),k.sprite.position.copy(K)}}),s.current.forEach(k=>{const W=k.constraint,K=f(W.bodyA.userData.id),j=f(W.bodyB.userData.id);if(K&&j){const T=k.line.geometry.attributes.position;T.setXYZ(0,K.mesh.position.x,K.mesh.position.y,K.mesh.position.z),T.setXYZ(1,j.mesh.position.x,j.mesh.position.y,j.mesh.position.z),T.needsUpdate=!0}}),i.current.length>0&&!e&&u.current&&d.current){const k=d.current;if(ne.setFromObject(u.current),!ne.isEmpty()&&(ne.getCenter(fe),ne.getSize(J),Math.max(J.x,J.y)>1)){const K=k.fov*(Math.PI/180),j=k.aspect,T=J.y/2/Math.tan(K/2),E=J.x/2/(Math.tan(K/2)*j),H=Math.max(E,T)*E0;Se.subVectors(k.position,F.target).normalize(),Re.copy(fe).addScaledVector(Se,Math.max(H,F.minDistance)),k.position.lerp(Re,Lc),F.target.lerp(fe,Lc)}}F.update(),B.render(y,z)},me=()=>{if(n.current&&l.current&&d.current){const{clientWidth:V,clientHeight:k}=n.current;l.current.setSize(V,k),d.current.aspect=V/k,d.current.updateProjectionMatrix()}},Ce=V=>{var K;if(!n.current||!d.current||!u.current||e)return;const k=n.current.getBoundingClientRect();m.current.x=(V.clientX-k.left)/k.width*2-1,m.current.y=-((V.clientY-k.top)/k.height)*2+1,p.current.setFromCamera(m.current,d.current);const W=p.current.intersectObjects(u.current.children,!0);for(const j of W){let T=j.object;if(T.userData.isLabel&&T.parent&&(T=T.parent),T instanceof oi&&T.userData.isLabel){const E=(K=a.current.find(H=>H.sprite===T))==null?void 0:K.id;if(E){const H=Di.find(X=>X.id===E);if(H&&H.content&&T.material.opacity>.5){r(H.content);return}}}}},Me=()=>{v.current=!0,x.current&&clearTimeout(x.current)},Te=()=>{x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{v.current=!1},5e3)};return F.addEventListener("start",Me),F.addEventListener("end",Te),window.addEventListener("resize",me),b.addEventListener("click",Ce),ge(),()=>{var V,k;F.removeEventListener("start",Me),F.removeEventListener("end",Te),window.removeEventListener("resize",me),b.removeEventListener("click",Ce),x.current&&clearTimeout(x.current),c.current&&cancelAnimationFrame(c.current),i.current.forEach(W=>{var K;(K=u.current)==null||K.remove(W.mesh),W.mesh.traverse(j=>{var T,E,H,X;(j instanceof Mt||j instanceof oi)&&((T=j.geometry)==null||T.dispose(),(H=(E=j.material)==null?void 0:E.map)==null||H.dispose(),(X=j.material)==null||X.dispose())}),O.removeBody(W.body)}),a.current.forEach(W=>{var K,j;(K=u.current)==null||K.remove(W.sprite),(j=W.sprite.material.map)==null||j.dispose(),W.sprite.material.dispose()}),s.current.forEach(W=>{var K;(K=u.current)==null||K.remove(W.line),W.line.geometry.dispose(),W.line.material.dispose(),O.removeConstraint(W.constraint)}),l.current&&((V=n.current)!=null&&V.contains(l.current.domElement))&&n.current.removeChild(l.current.domElement),(k=l.current)==null||k.dispose(),i.current=[],s.current=[],a.current=[]}},[r,e,g,M,f]),Wl.jsx("div",{ref:n,className:"w-full h-full"})};export{F0 as default};

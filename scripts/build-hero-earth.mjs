import fs from 'node:fs';
// Build-time only: Natural Earth public-domain coastline data. No browser dependency.
const source='https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson';
const response=await fetch(source);if(!response.ok)throw Error(`Geography download: ${response.status}`);
const data=await response.json();
const rad=Math.PI/180,lat0=18*rad,lon0=0,r=290,cx=440,cy=350;
function project([lon,lat]){const p=lat*rad,l=(lon-lon0)*rad;let x=Math.cos(p)*Math.sin(l),y=Math.cos(lat0)*Math.sin(p)-Math.sin(lat0)*Math.cos(p)*Math.cos(l);const z=Math.sin(lat0)*Math.sin(p)+Math.cos(lat0)*Math.cos(p)*Math.cos(l);if(z<0){const n=Math.hypot(x,y);x/=n;y/=n;}return [cx+r*x,cy-r*y,z];}
function dense(ring){const out=[];for(let i=1;i<ring.length;i++){const a=ring[i-1],b=ring[i];let dx=b[0]-a[0];if(dx>180)dx-=360;if(dx< -180)dx+=360;const n=Math.max(1,Math.ceil(Math.max(Math.abs(dx),Math.abs(b[1]-a[1]))));for(let j=0;j<n;j++)out.push([a[0]+dx*j/n,a[1]+(b[1]-a[1])*j/n]);}return out;}
const paths=[];for(const f of data.features){const polygons=f.geometry.type==='Polygon'?[f.geometry.coordinates]:f.geometry.coordinates;for(const poly of polygons){const pts=dense(poly[0]).map(project);if(!pts.some(p=>p[2]>0))continue;paths.push('M'+pts.map(p=>p.slice(0,2).map(v=>v.toFixed(1)).join(',')).join('L')+'Z');}}
function line(points){let d='',pen=false;for(const coord of points){const [x,y,z]=project(coord);if(z<0){pen=false;continue;}d+=(pen?'L':'M')+x.toFixed(1)+','+y.toFixed(1);pen=true;}return d;}
const grid=[];for(let lon=-180;lon<180;lon+=30)grid.push(line(Array.from({length:181},(_,i)=>[lon,i-90])));for(let lat=-60;lat<=60;lat+=30)grid.push(line(Array.from({length:361},(_,i)=>[i-180,lat])));
const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 720"><defs>
<radialGradient id="ocean" cx="30%" cy="25%" r="80%"><stop stop-color="#104c78"/><stop offset=".55" stop-color="#06294a"/><stop offset="1" stop-color="#020d20"/></radialGradient>
<linearGradient id="land" x2=".8" y2="1"><stop stop-color="#3183a7"/><stop offset=".5" stop-color="#155071"/><stop offset="1" stop-color="#07213c"/></linearGradient>
<radialGradient id="shade" cx="28%" cy="25%" r="80%"><stop offset=".35" stop-color="#010917" stop-opacity="0"/><stop offset="1" stop-color="#010917" stop-opacity=".8"/></radialGradient>
<radialGradient id="air"><stop offset=".93" stop-color="#30bcf4" stop-opacity="0"/><stop offset=".975" stop-color="#30bcf4" stop-opacity=".22"/><stop offset="1" stop-color="#76d9ff" stop-opacity=".6"/></radialGradient>
<clipPath id="sphere"><circle cx="440" cy="350" r="290"/></clipPath></defs>
<circle cx="440" cy="350" r="294" fill="none" stroke="#28b8ff" stroke-opacity=".09" stroke-width="7"/>
<circle cx="440" cy="350" r="290" fill="url(#ocean)"/>
<g clip-path="url(#sphere)"><path d="${paths.join('')}" fill="url(#land)" stroke="#63c7e8" stroke-opacity=".55" stroke-width=".7" stroke-linejoin="round"/>
<path d="${grid.join('')}" fill="none" stroke="#50bce6" stroke-opacity=".15" stroke-width=".6"/>
<circle cx="440" cy="350" r="290" fill="url(#shade)"/></g>
<circle cx="440" cy="350" r="290" fill="url(#air)" stroke="#65d4ff" stroke-opacity=".45" stroke-width=".9"/>
</svg>`;
fs.writeFileSync('src/assets/images/digital-earth.svg',svg);
console.log(`Generated geographic Earth: ${paths.length} visible land polygons, ${Buffer.byteLength(svg)} bytes`);

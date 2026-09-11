# Digital Earth source

`digital-earth.svg` is generated from Natural Earth's public-domain 1:110m land polygons:
https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson

Rebuild using `node scripts/build-hero-earth.mjs` (network needed only for this optional asset-authoring step).
The website serves the finished SVG locally and performs no geographic processing or external requests.

Projection: orthographic, centered on longitude 0 and latitude 18 degrees north. Hidden hemisphere points are projected to the limb; coastlines are sampled at one-degree intervals. Africa, Europe, the Atlantic and portions of surrounding continents are visible. Graticules use the same spherical projection. The SVG includes ocean lighting, coastline illumination, directional shading and a cyan atmosphere.

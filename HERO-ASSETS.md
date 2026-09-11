# Hero robot asset

Tool: built-in image_gen. Selected output: src/assets/images/hero-robot-v1.png.
Mask: src/assets/images/hero-robot-mask.svg. Integration: src/data/heroVisualAssets.ts.

Generation prompt:
Use case: stylized-concept. Create a standalone transparent PNG asset for an existing website hero. The attached website screenshot is ONLY a reference for the robot on the right: recreate its premium realistic silver and graphite humanoid design, smooth metallic cranial shell, cyan illuminated eyes, circular blue ear mechanism, intricately engineered neck and upper torso, restrained blue rim illumination. Robot only, NO human, NO portrait, NO website, NO text or AI letters, NO globe, NO panels. Three-quarter view facing screen-right as in reference; head and torso through waist, arms naturally down. Entire head and shoulders fully inside image with small margins, portrait aspect ratio. Genuine transparent alpha background, no baked-in dark backdrop, no shadow halo, no checkerboard. Sharp high-quality product render, professional elegant futuristic aesthetic, not cartoon. This will be placed behind/right of the user's unchanged real portrait. Do not reproduce or generate any person.

The generator produced RGB artwork with a baked-in checkerboard despite the transparency request. A second background-extraction attempt also returned RGB, so the original, sharper render is used with a local SVG silhouette mask rather than claiming it has alpha transparency. No generated human is used. The original portrait source remains unchanged.

The robot layer sits behind the original portrait, with its own bottom fade. Robot-specific responsive rules move the system panel away and reduce decoration on narrow screens. The existing globe, content, statistics, technology marquee and other sections are preserved.

Visual browser verification remains unavailable in this session. The mask and composition should be reviewed in a browser at desktop, tablet and mobile widths before final visual sign-off.

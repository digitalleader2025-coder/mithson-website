# MITHSON 3D WEBSITE — Root Skills

## Architecture
- React + Vite + React Router + Three.js + React Three Fiber + Drei.
- GSAP for ScrollTrigger animations, Framer Motion for page transitions and micro-interactions.
- Components are shared from `src/shared/`.
- Content is centralized in `src/content/`.

## Working with 3D
- Use `SceneWrapper` from `src/shared/3d/` for all `<Canvas>` elements to ensure consistent Suspense boundaries and Error Fallbacks.
- Use `ProductViewer` for rendering product images/models. It auto-upgrades from a 2.5D image to a real 3D GLB model when the user provides one in the `models/` directory.

## Future Requirements
- If the user provides GLB models, drop them into `src/pages/Products/<Product>/models/product.glb`. No code changes required!
- If the user provides product JPGs, drop them into `src/pages/Products/<Product>/assets/hero.jpg` etc.
- Do NOT remove existing requirements when appending new ones.

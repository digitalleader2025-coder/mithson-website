import rigImage from '../../assets/decor/offshore-rig.webp';

/**
 * The hero's backdrop: a pale blue wash with an offshore platform standing behind the film.
 * The platform is a decorative stock picture, printed in Mithson's blue and faded well back:
 * it is not a Mithson installation, so it is hidden from screen readers and never captioned
 * as one. Narrow screens drop it and keep the wash alone, so the heading always reads first.
 */
export default function HeroBackdrop() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art-wash" />
      <img className="hero-art-rig" src={rigImage} alt="" loading="lazy" decoding="async" />
    </div>
  );
}

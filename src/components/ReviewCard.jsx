/**
 * @copyright 2025 AnchorMovies
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import PropTypes from "prop-types";

const ratings = Array.from({ length: 5 }, () => ({
  icon: "star",
  style: {
    fontVariationSettings: "'FILL' 1",
    fontFamily: "'Material Symbols Rounded'",
    display: "inline-block",
    lineHeight: "1",
  },
}));

const ReviewCard = ({ content, imgSrc, name, company }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex-col lg:min-w-[420px]">
      {/* Stars */}
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            className="material-symbols-rounded text-yellow-300"
            style={{
              fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              fontSize: "20px",
              lineHeight: 1,
              ...style, // if custom per-star style needed
            }}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* Review Content */}
      <p className="text-zinc-400 mb-8">{content}</p>

      {/* Reviewer Info */}
      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg overflow-hidden w-[44px] h-[44px]">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </figure>
        <div>
          <p className="text-white">{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

// ✅ Fix: "PropTypes" not "PropTypes" (case-sensitive!)
ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;

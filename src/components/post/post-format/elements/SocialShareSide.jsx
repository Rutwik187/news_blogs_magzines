import { useEffect, useState } from "react";

const SocialShareSide = () => {
  const [windowPath, setwindowPath] = useState(null);

  useEffect(() => {
    
    setwindowPath(window.location.href);
  }, []);

  return (
    <div className="post-details__social-share mt-2">
      <ul className="social-share social-share__with-bg social-share__vertical">
        <li>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${windowPath}`}
          >
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href={`https://twitter.com/intent/tweet?text=${windowPath}`}>
            <i className="fa-brands fa-x-twitter" />
          </a>
        </li>
        <li>
          <a
            href={`https://pinterest.com/pin/create/button/?url=${windowPath}`}
          >
            <i className="fab fa-pinterest-p" />
          </a>
        </li>
        <li>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${windowPath}`}
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialShareSide;

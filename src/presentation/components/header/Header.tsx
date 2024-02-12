import "./header.css";
import Container from "../container";

function Header() {
  return (
    <div className="header">
      <Container>
        <a href="https://rapiddweller.com/" target="_blank">
          <img
            width="400"
            height="109"
            src="https://rapiddweller.com/wp-content/uploads/2023/06/cropped-rapiddweller_logo_white400w.png"
            data-src="https://rapiddweller.com/wp-content/uploads/2023/06/cropped-rapiddweller_logo_white400w.png"
            loading="lazy"
            className="logo"
            alt="rapiddweller white logo"
            decoding="async"
            data-srcset="https://rapiddweller.com/wp-content/uploads/2023/06/cropped-rapiddweller_logo_white400w.png 400w, https://rapiddweller.com/wp-content/uploads/2023/06/cropped-rapiddweller_logo_white400w-300x82.png 300w"
            data-sizes="(max-width: 400px) 100vw, 400px"
            sizes="(max-width: 400px) 100vw, 400px"
            srcSet="https://rapiddweller.com/wp-content/uploads/2023/06/cropped-rapiddweller_logo_white400w.png 400w, https://rapiddweller.com/wp-content/uploads/2023/06/cropped-rapiddweller_logo_white400w-300x82.png 300w"
            data-was-processed="true"
          />
        </a>
      </Container>
    </div>
  );
}

export default Header;

import React, { useEffect, useRef, useReducer } from 'react';
import './Slides.css'
import image1 from './pics/image1.jpeg'
import image2 from './pics/image2.jpeg'
import image3 from './pics/image3.jpeg'
import image4 from './pics/image4.jpeg'
import image5 from './pics/image5.jpeg'

const Slides = () => {
  const initialState = {
    slideIndex: 0
  };

  const slides = [
    {
      title: "Colorful Expressions",
      subtitle: "Peru",
      description: "Adventure is never far away",
      image: image1
    },
    {
      title: "Street Vision",
      subtitle: "France",
      description: "Let your dreams come true",
      image: image2
    },
    {
      title: "Skater Gurl",
      subtitle: "Australia",
      description: "Urban Skater Life",
      image: image3
    },
    {
      title: "Vibrant Witch",
      subtitle: "Italy",
      description: "A piece of Dark Beauty",
      image: image4
    },
    {
      title: "Nature's Calling",
      subtitle: "Chile",
      description: "Will you answer",
      image: image5
    }
  ];

  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex: state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
      };
    }
  };

  const useTilt = (active) => {
    const ref = useRef(null);

    useEffect(() => {
      if (!ref.current || !active) {
        return;
      }

      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };

      let el = ref.current;

      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;

        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };

      el.addEventListener("mousemove", handleMouseMove);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);

    return ref;
  };

  const Slide = ({ slide, offset }) => {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
        }}
      >
        <div
          className="slideBackground"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        />
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        >
          <div className="slideContentInner">
            <h2 className="slideTitle">{slide.title}</h2>
            <h3 className="slideSubtitle">{slide.subtitle}</h3>
            <p className="slideDescription">{slide.description}</p>
          </div>
        </div>
      </div>
    );
  };

  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    <div className = "slideContainer">
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
    </div>
  );
};

export default Slides;
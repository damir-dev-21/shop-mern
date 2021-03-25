import React, { Component } from "react";
import Slider from "react-slick";
import left from "../assets/images/other/left.png";
import right from "../assets/images/other/right.png";

import { Card } from "./Card";

export class ProductCategory extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true  ,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="products-screen__body__item">
        <div className="product__title">
          <p>{this.props.nameCategory}</p>
          <div className="line"></div>
        </div>
        <div className="product__slider">
          <div className="arrows">
            <div>
              <img src={left} alt="left" onClick={this.previous} />
            </div>
            <div>
              <img src={right} alt="right" onClick={this.next} />
            </div>
          </div>
        </div>
        <Slider
          {...settings}
          ref={(c) => (this.slider = c)}
          className="product__content"
        >
          {this.props.products.map((item, index) => {
            return (
              <Card
                title={item.title}
                price={item.price}
                size={item.size}
                img={item.image}
                id={item.id}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

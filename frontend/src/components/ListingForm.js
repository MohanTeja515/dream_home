import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrap = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-top: 1.8rem;
    margin-left: 2.2rem;
    font-size: 24px;
    color: #000;
  }
`

const ListingLink = styled(Link)`
  text-decoration: none;
  color: white;
`

const ListingForm = (props) => {
  const [formData, setFormData] = useState({
    sale_type: "For Sale",
    price: "$0+",
    bedrooms: "0+",
    home_type: "House",
    bathrooms: "0+",
    sqft: "1000+",
    days_listed: "1 or less",
    has_photos: "1+",
    open_house: "False",
    keywords: "",
  });

  const {
    sale_type,
    price,
    bedrooms,
    home_type,
    bathrooms,
    sqft,
    days_listed,
    has_photos,
    open_house,
    keywords,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const getData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/listings/search/`,
        {
          sale_type,
          price,
          bedrooms,
          home_type,
          bathrooms,
          sqft,
          days_listed,
          has_photos,
          open_house,
          keywords,
        },
        config
      );
      props.setListings(res.data);
      window.scrollTo(0, 0);
    } catch (err) {
      window.scrollTo(0, 0);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    getData();
  };

  return (
    <form className="listingform" onSubmit={(e) => onSubmit(e)}>
      <div className="row">
        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="sale_type">
              Sale or Rent
            </label>
            <select
              className="listingform__select"
              name="sale_type"
              onChange={(e) => onChange(e)}
              value={sale_type}
            >
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="sqft">
              Sqft
            </label>
            <select
              className="listingform__select"
              name="sqft"
              onChange={(e) => onChange(e)}
              value={sqft}
            >
              <option>1000+</option>
              <option>1200+</option>
              <option>1500+</option>
              <option>2000+</option>
              <option>Any</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="price">
              Minimum Price
            </label>
            <select
              className="listingform__select"
              name="price"
              onChange={(e) => onChange(e)}
              value={price}
            >
              <option>$0+</option>
              <option>$200,000+</option>
              <option>$400,000+</option>
              <option>$600,000+</option>
              <option>$800,000+</option>
              <option>$1,000,000+</option>
              <option>$1,200,000+</option>
              <option>$1,500,000+</option>
              <option>Any</option>
            </select>
          </div>
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="days_listed">
              Days Listed
            </label>
            <select
              className="listingform__select"
              name="days_listed"
              onChange={(e) => onChange(e)}
              value={days_listed}
            >
              <option>1 or less</option>
              <option>2 or less</option>
              <option>5 or less</option>
              <option>10 or less</option>
              <option>20 or less</option>
              <option>Any</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="bedrooms">
              Bedrooms
            </label>
            <select
              className="listingform__select"
              name="bedrooms"
              onChange={(e) => onChange(e)}
              value={bedrooms}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
            </select>
          </div>
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="has_photos">
              Has Photos
            </label>
            <select
              className="listingform__select"
              name="has_photos"
              onChange={(e) => onChange(e)}
              value={has_photos}
            >
              <option>1+</option>
              <option>3+</option>
              <option>5+</option>
              <option>10+</option>
              <option>15+</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="home_type">
              Home Type
            </label>
            <select
              className="listingform__select"
              name="home_type"
              onChange={(e) => onChange(e)}
              value={home_type}
            >
              <option>Individual House</option>
              <option>Apartment</option>
              <option>Gated Comunity</option>
            </select>
          </div>
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="keywords">
              Keywords
            </label>
            <input
              className="listingform__input"
              name="keywords"
              type="text"
              onChange={(e) => onChange(e)}
              value={keywords}
            />
          </div>
        </div>

        <div className="col-1-of-6">
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="bathrooms">
              Baths
            </label>
            <select
              className="listingform__select"
              name="bathrooms"
              onChange={(e) => onChange(e)}
              value={bathrooms}
            >
              <option>0+</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>
          <div className="listingform__section">
            <label className="listingform__label" htmlFor="sale_type">
              Open House
            </label>
            <select
              className="listingform__select"
              name="open_house"
              onChange={(e) => onChange(e)}
              value={open_house}
            >
              <option>True</option>
              <option>False</option>
            </select>
          </div>
        </div>

        <div className="col-1-of-6">
          <Wrap>
          <button className="listingform__button listingform__button--primary">
            Filter
          </button>
          <h1>OR</h1>
          </Wrap>
          <button className="listingform__button listingform__button--primary">
            <ListingLink to = '/filter'>Display All Listings</ListingLink>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ListingForm;

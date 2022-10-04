import React from 'react';
import { Nav } from '../../Nav/Nav';
import { FaqDropdown } from './FaqDropdown/FaqDropdown';
import { RentalBanner, Rental_Banner } from './RentalBanner/RentalsBanner';

export const Rentals = () => {
  return (
    <>
        <Nav/>
        <RentalBanner/>
        <FaqDropdown/>
    </>
  )
}

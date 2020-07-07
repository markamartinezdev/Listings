const location = {
  city: 'Hollywood',
  state: 'florida',
  zip: 33024,
  latLng: {
    lat: 26.1450,
    lng: -80.1500
  }
}

// Create random listings
const listings = () => {
  let listings = []

  const listingImages = [
    'https://www.thehousedesigners.com/images/plans/LJD/uploads/7263/1881_RightAngle_Railing_THD.jpg',
    'https://freshome.com/wp-content/uploads/2018/09/contemporary-exterior.jpg',
    'https://assets.architecturaldesigns.com/plan_assets/325002316/large/500063VV_01_1556635118.jpg?1556635119',
    'https://upload.wikimedia.org/wikipedia/commons/1/16/Large_Salinas_house.jpg',
    'https://media-cdn.tripadvisor.com/media/photo-s/18/06/27/98/the-up-house.jpg',
    'https://cdn.homes.com/x2/@v=1678575883@/71146/6/652/ML81798652/ML81798652_1.jpg?resize=1&width=700&height=440&aspect=1',
    'https://images.familyhomeplans.com/plans/75134/75134-b600.jpg',
  ]

  for(let l = 0; l < 25; l++) {
    const lat = parseFloat('26.1' + Math.floor(Math.random() * 12))
    const lng = parseFloat('-80.1' + Math.floor(Math.random() * 1000))

    listings.push({
      id: l,
      mls: 255488+l,
      price: Math.floor(Math.random() * 1000000),
      rooms: Math.floor(Math.random() * 6) + 1,
      baths: Math.floor(Math.random() * 5) + .5,
      sqft: Math.floor(Math.random() * 1500),
      type: 'sale',
      images: [listingImages[Math.floor(Math.random() * 7)]],
      location: {
        address: `${Math.floor(Math.random() * 99999)} nw ${Math.floor(Math.random() * 30) + 5}th st`,
        city: location.city,
        state: location.state,
        zipCode: location.zip,
        latLang: {lat, lng}
      },
      alert: Math.random() * 3 >= 2 ? "new" : null
    }) 
  }

  return listings
}

export default {
  listings,
  location
}

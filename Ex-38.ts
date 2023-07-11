function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
  }
  
  describe_city("Karachi"); // City in the default country
  describe_city("New York", "United States"); // City in a different country
  describe_city("London", "United Kingdom"); // City in a different country
  
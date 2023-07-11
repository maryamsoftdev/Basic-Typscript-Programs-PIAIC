function store_car_info(manufacturer: string, modelName: string, ...kwargs: any[]): object {
    let carInfo: any = {
      manufacturer: manufacturer,
      modelName: modelName
    };
  
    for (let i = 0; i < kwargs.length; i += 2) {
      let key = kwargs[i];
      let value = kwargs[i + 1];
      carInfo[key] = value;
    }
  
    return carInfo;
  }
  
  let car_ = store_car_info("Toyota", "Camry", "color", "Silver", "year", 2022);
  
  console.log(car_);
  
function createCar(manufacturer: string, modelName: string, ...options: any[]): Record<string, any>
{
    const carInfo: Record<string, any> = {
      manufacturer,
      modelName,
    };
  
    // Process additional options
    for (let i = 0; i < options.length; i += 2) 
    {
      const key = options[i];
      const value = options[i + 1];
      carInfo[key] = value;
    }
  
    return carInfo;
  }
  
const carInfo = createCar("Toyota", "Camry", "color", "blue", "year", 2023);
console.log(carInfo);
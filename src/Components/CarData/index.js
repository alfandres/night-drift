import Nissan240SX from '../../assets/ImgCars/Nissan-240SX.jpg';
import ToyotaAE86 from '../../assets/ImgCars/Toyota-AE86.jpg';

const cardata = [
    {
      slug:"nissan-240SX",
      title: "Nissan 240SX",
      description: "The Nissan 240SX is a classic choice for drift enthusiasts. It's known for its balanced chassis and rear-wheel drive setup.",
      img: Nissan240SX, // Agrega la URL de la imagen
      price: 5000, // Precio en dólares
      brand: "Nissan",
      year: 1989,
      details: {
        history: "The Nissan 240SX, also known as the Silvia, has a rich history in the world of drifting. It was widely used in Japanese drifting competitions in the 1990s.",
        manufacturer: "Nissan, a Japanese automaker",
        virtues: "The 240SX is praised for its lightweight chassis, responsive steering, and the availability of aftermarket parts for customization.",
        flaws: "Some models may suffer from rust issues, and finding well-maintained, unmodified 240SX cars can be a challenge.",
        productionStatus: "Production of the 240SX was discontinued in the early 2000s."
      }
    },
    {
      slug:"toyota-ae86",
      title: "Toyota AE86",
      description: "The Toyota AE86, also known as the 'Hachi-Roku,' is a legendary drift car with a lightweight design and great handling.",
      img: ToyotaAE86,
      price: 8000,
      brand: "Toyota",
      year: 1983,
      details: {
        history: "The Toyota AE86 gained fame in Japan and beyond due to its role in motorsport and popular culture.",
        manufacturer: "Toyota, a renowned Japanese automaker",
        virtues: "The AE86 is celebrated for its rear-wheel drive, balanced weight distribution, and superb handling characteristics.",
        flaws: "It may be challenging to find well-preserved AE86 models, and its age can lead to maintenance concerns.",
        productionStatus: "Production of the original AE86 has ceased, but it remains a sought-after classic."
      }
    },
    {
      slug:"mazda-rx-7", 
      title: "Mazda RX-7",
      description: "The Mazda RX-7 is a rotary-powered sports car favored by many drifters for its unique engine and handling characteristics.",
      img: "",
      price: 10000,
      brand: "Mazda",
      year: 1992,
      details: {
        history: "The Mazda RX-7 is well-regarded for its rotary engine, which provides a distinct driving experience. It has a strong presence in the drifting community.",
        manufacturer: "Mazda, a Japanese automaker",
        virtues: "The RX-7 is appreciated for its lightweight construction, responsive handling, and potential for engine modifications.",
        flaws: "Rotary engines may require specific maintenance, and well-maintained models can be costly.",
        productionStatus: "Production of the RX-7 ceased in the early 2000s."
      }
    },
    {
      slug:"ford-mustang-gt",
      title: "Ford Mustang GT",
      description: "The Ford Mustang GT is a popular choice for drifters with its powerful V8 engine and rear-wheel drive layout.",
      img: "",
      price: 12000,
      brand: "Ford",
      year: 2005,
      details: {
        history: "The Ford Mustang is an iconic American muscle car, and the GT variant has been used in drifting and drag racing competitions.",
        manufacturer: "Ford, an American automaker",
        virtues: "The Mustang GT is known for its powerful V8 engine, making it capable of impressive drifts and straight-line speed.",
        flaws: "It's a relatively heavy car, which can affect agility in tight corners.",
        productionStatus: "The Ford Mustang GT continues to be in production."
      }
    },
    {
      slug:"bmw-m3",
      title: "BMW M3",
      description: "The BMW M3 is a high-performance sports car with excellent handling and is often used in drift competitions.",
      img: "",
      price: 15000,
      brand: "BMW",
      year: 1996,
      details: {
        history: "The BMW M3 has a rich motorsport history and is highly regarded for its blend of performance and luxury.",
        manufacturer: "BMW, a German automaker",
        virtues: "The M3 is praised for its powerful engine, precise handling, and quality interior.",
        flaws: "It can be expensive to maintain, and repair costs may be high.",
        productionStatus: "The BMW M3 is still in production with various generations."
      }
    },
    {
      slug:"chevrolet-camaro-ss",
      title: "Chevrolet Camaro SS",
      description: "The Chevrolet Camaro SS is a muscular American car that offers both power and style for drifting enthusiasts.",
      img: "",
      price: 13000,
      brand: "Chevrolet",
      year: 2010,
      details: {
        history: "The Chevrolet Camaro is a classic American muscle car, and the SS variant provides strong performance suitable for drifting.",
        manufacturer: "Chevrolet, an American automaker",
        virtues: "The Camaro SS is celebrated for its powerful V8 engine, aggressive design, and affordability compared to some competitors.",
        flaws: "Its weight can impact handling in tight corners, and visibility can be limited.",
        productionStatus: "The Chevrolet Camaro SS is in production as of the last update."
      }
    },
    {
      slug:"subaru-brz",
      title: "Subaru BRZ",
      description: "The Subaru BRZ is a lightweight and agile car, perfect for precision drifting on tight courses.",
      img: "",
      price: 11000,
      brand: "Subaru",
      year: 2013,
      details: {
        history: "The Subaru BRZ is a product of a collaboration with Toyota and is known for its lightweight and balanced design.",
        manufacturer: "Subaru, a Japanese automaker",
        virtues: "The BRZ is appreciated for its lightweight chassis, rear-wheel drive, and responsive steering, making it a joy to drift.",
        flaws: "Some enthusiasts may desire more power, and it's essential to find well-maintained models.",
        productionStatus: "The Subaru BRZ is still in production, with a new generation released."
      }
    },
    {
      slug:"mitsubishi-lancer-evo",
      title: "Mitsubishi Lancer Evo",
      description: "The Mitsubishi Lancer Evo is known for its impressive all-wheel-drive system and performance capabilities in drift competitions.",
      img: "",
      price: 14000,
      brand: "Mitsubishi",
      year: 2006,
      details: {
        history: "The Mitsubishi Lancer Evolution, commonly referred to as the Evo, has a rally heritage and offers exceptional all-wheel-drive performance.",
        manufacturer: "Mitsubishi, a Japanese automaker",
        virtues: "The Evo is celebrated for its turbocharged engine, all-wheel drive, and advanced handling features for challenging drifts.",
        flaws: "It can be expensive to maintain and modify, and finding well-maintained models can be a challenge.",
        productionStatus: "Production of the Mitsubishi Lancer Evo has ceased."
      }
    },
    {
      slug:"mercedes-benz-c63-amg",
      title: "Mercedes-Benz C63 AMG",
      description: "The Mercedes-Benz C63 AMG offers both luxury and drift potential with its powerful V8 engine.",
      img: "",
      price: 18000,
      brand: "Mercedes-Benz",
      year: 2015,
      details: {
        history: "The Mercedes-Benz C63 AMG is a high-performance luxury car with a strong AMG-tuned V8 engine, making it a unique choice for drifting.",
        manufacturer: "Mercedes-Benz, a German automaker",
        virtues: "The C63 AMG is celebrated for its comfortable interior, powerful engine, and advanced technology.",
        flaws: "Its price can be relatively high, and maintenance may come at a premium.",
        productionStatus: "The Mercedes-Benz C63 AMG is still in production."
      }
    },
    {
      slug:"audi-s4",
      title: "Audi S4",
      description: "The Audi S4 combines performance and all-wheel drive, making it a versatile choice for drift enthusiasts.",
      img: "",
      price: 16000,
      brand: "Audi",
      year: 2011,
      details: {
        history: "The Audi S4 is a high-performance sedan that combines the practicality of all-wheel drive with a powerful engine suitable for drifting.",
        manufacturer: "Audi, a German automaker",
        virtues: "The S4 is praised for its all-wheel drive system, refined interior, and strong V6 engine.",
        flaws: "It may be relatively heavy compared to some other drift cars, affecting agility.",
        productionStatus: "The Audi S4 is still in production as of the last update."
      }
    },
    {
      slug:"toyota-supra",
      title: "Toyota Supra",
      description: "The Toyota Supra is an iconic drift car known for its turbocharged power and agile handling.",
      img: "",
      price: 22000,
      brand: "Toyota",
      year: 1993,
      details: {
        history: "The Toyota Supra has a legendary status in the drifting world, known for its powerful inline-six engines and racing heritage.",
        manufacturer: "Toyota, a renowned Japanese automaker",
        virtues: "The Supra is celebrated for its turbocharged power, balanced chassis, and customizable potential for drift competitions.",
        flaws: "Well-preserved Supra models can be pricey, and some enthusiasts may seek older generations.",
        productionStatus: "The Toyota Supra is back in production with a new generation."
      }
    },
    {
      slug:"nissan-gt-r",
      title: "Nissan GT-R (R34)",
      description: "The Nissan GT-R (R34) is a legendary drift car with a powerful inline-six engine and advanced all-wheel-drive system.",
      img: "",
      price: 25000,
      brand: "Nissan",
      year: 1999,
      details: {
        history: "The Nissan GT-R (R34) is an iconic sports car that gained notoriety for its all-wheel-drive system and impressive performance.",
        manufacturer: "Nissan, a Japanese automaker",
        virtues: "The GT-R (R34) is celebrated for its powerful RB26 engine, advanced all-wheel drive, and capability for controlled drifting.",
        flaws: "Well-maintained GT-R models can be expensive, and the car's age may necessitate maintenance and modifications.",
        productionStatus: "Production of the GT-R (R34) has ceased."
      }
    },
    {
      slug:"mazda-mx-5-miata",
      title: "Mazda MX-5 Miata",
      description: "The Mazda MX-5 Miata is a lightweight and nimble sports car, perfect for drifting on smaller tracks.",
      img: "",
      price: 9000,
      brand: "Mazda",
      year: 1995,
      details: {
        history: "The Mazda MX-5 Miata is celebrated for its lightweight and agile design, making it a popular choice for amateur drifters.",
        manufacturer: "Mazda, a Japanese automaker",
        virtues: "The Miata is appreciated for its affordability, nimble handling, and wide availability of aftermarket modifications.",
        flaws: "It may have lower power compared to other drift cars, and some enthusiasts may desire more performance.",
        productionStatus: "The Mazda MX-5 Miata continues to be in production."
      }
    },
    {
      slug:"mitsubishi-eclipse",
      title: "Mitsubishi Eclipse",
      description: "The Mitsubishi Eclipse is a versatile choice for drifters, known for its turbocharged engines and sleek design.",
      img: "",
      price: 11000,
      brand: "Mitsubishi",
      year: 1997,
      details: {
        history: "The Mitsubishi Eclipse was a popular choice for sport compact enthusiasts and drifters, thanks to its turbocharged engines.",
        manufacturer: "Mitsubishi, a Japanese automaker",
        virtues: "The Eclipse is celebrated for its turbocharged power, sporty design, and potential for tuning and modification.",
        flaws: "Finding well-preserved and unmodified Eclipse models can be challenging, and some engines may require careful maintenance.",
        productionStatus: "Production of the Mitsubishi Eclipse has ceased."
      }
    },
  ];
  
  // Ordenar los carros por precio de menor a mayor
  //carData.sort((a, b) => a.price - b.price);
  
  // Exportar la hoja de datos para su uso en tu proyecto
    export { cardata };
  
export interface AranyaCard {
  title: string;
  titleHindi?: string;
  intro: string;
  details: string;
  wonder: string;
}

export interface AranyaEntry {
  dayIndex: number;
  plant: AranyaCard;
  animal: AranyaCard;
  organism: AranyaCard;
  phenomenon: AranyaCard;
}

export const ARANYA_ENTRIES: AranyaEntry[] = [
  {
    dayIndex: 1,
    plant: {
      title: "The Banyan Tree",
      titleHindi: "बरगद का पेड़",
      intro: "Known scientifically as Ficus benghalensis, the the banyan tree is a fascinating plant adapted to tropical forests.",
      details: "The the banyan tree features large leather-like leaves and produces small red figs. It plays a crucial ecological role in its native tropical forests, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it covers over three acres with 3,000 aerial prop roots. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Royal Bengal Tiger",
      titleHindi: "बंगाल टाइगर",
      intro: "The royal bengal tiger (Panthera tigris tigris) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent carnivore, the royal bengal tiger is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the royal bengal tiger is that each tiger's stripe pattern is completely unique like a fingerprint. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Mycorrhizal Fungi",
      titleHindi: "कवक जाल",
      intro: "The mycorrhizal fungi (Glomeromycota) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in forest soil, the mycorrhizal fungi plays a vital role in nutrient exchange within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it creates an underground communication network connecting trees. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Bioluminescence",
      titleHindi: "जीवदीप्ति",
      intro: "The bioluminescence is a spectacular ecological phenomenon caused by chemical reactions involving luciferase.",
      details: "This natural event results in light emitted by living organisms, which can be observed primarily in deep ocean basins. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that glowing dinoflagellates turn entire bays bright blue-green at night. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 2,
    plant: {
      title: "The Peepal Tree",
      titleHindi: "पीपल का पेड़",
      intro: "Known scientifically as Ficus religiosa, the the peepal tree is a fascinating plant adapted to dry deciduous forests.",
      details: "The the peepal tree features heart-shaped leaves with long tips and produces small purple figs. It plays a crucial ecological role in its native dry deciduous forests, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it releases oxygen even at night using CAM photosynthesis. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Indian Elephant",
      titleHindi: "भारतीय हाथी",
      intro: "The indian elephant (Elephas maximus indicus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the indian elephant is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the indian elephant is that communicates over miles using low-frequency infrasound waves. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Baker's Yeast",
      titleHindi: "खमीर",
      intro: "The baker's yeast (Saccharomyces cerevisiae) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in organic surfaces, the baker's yeast plays a vital role in fermentation within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it converts simple sugars into carbon dioxide and alcohol within hours. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Aurora Borealis",
      titleHindi: "उत्तरी ध्रुवीय ज्योति",
      intro: "The aurora borealis is a spectacular atmospheric phenomenon caused by solar wind colliding with magnetic field.",
      details: "This natural event results in vibrant green and purple sky lights, which can be observed primarily in arctic regions. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that solar particles collide with oxygen at 60 miles high, creating green light. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 3,
    plant: {
      title: "The Neem Tree",
      titleHindi: "नीम का पेड़",
      intro: "Known scientifically as Azadirachta indica, the the neem tree is a fascinating plant adapted to arid regions.",
      details: "The the neem tree features serrated light-green leaves and produces yellowish bitter fruits. It plays a crucial ecological role in its native arid regions, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it contains azadirachtin repelling over 200 insect pests. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "One-Horned Rhinoceros",
      titleHindi: "एक सींग वाला गैंडा",
      intro: "The one-horned rhinoceros (Rhinoceros unicornis) is a specialized member of the mammals group, active during crepuscular hours.",
      details: "As a prominent herbivore, the one-horned rhinoceros is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the one-horned rhinoceros is that its single horn is made of pure keratin, the same protein as hair. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Penicillium Mold",
      titleHindi: "पेनिसिलियम",
      intro: "The penicillium mold (Penicillium rubens) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in organic matter, the penicillium mold plays a vital role in antibiotic producer within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it isolated compound penicillin became the first modern antibiotic. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Aurora Australis",
      titleHindi: "दक्षिणी ध्रुवीय ज्योति",
      intro: "The aurora australis is a spectacular atmospheric phenomenon caused by solar charged particles hitting atmosphere.",
      details: "This natural event results in dancing colorful light ribbons, which can be observed primarily in antarctic regions. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that seen clearly from southern locations like Tasmania and southern New Zealand. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 4,
    plant: {
      title: "The Mango Tree",
      titleHindi: "आम का पेड़",
      intro: "Known scientifically as Mangifera indica, the the mango tree is a fascinating plant adapted to subtropical plains.",
      details: "The the mango tree features long dark-green glossy leaves and produces sweet fleshy mangoes. It plays a crucial ecological role in its native subtropical plains, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it lives and fruits for over 300 years in flood plains. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Asiatic Lion",
      titleHindi: "एशियाई शेर",
      intro: "The asiatic lion (Panthera leo persica) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent carnivore, the asiatic lion is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the asiatic lion is that survives only in the Gir Forest of Gujarat, India in a small sanctuary. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Shiitake Mushroom",
      titleHindi: "शीताके",
      intro: "The shiitake mushroom (Lentinula edodes) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in decaying wood, the shiitake mushroom plays a vital role in decomposition within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it produces lentinan, a compound that stimulates the immune system. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Double Rainbow",
      titleHindi: "दोहरा इंद्रधनुष",
      intro: "The double rainbow is a spectacular optical phenomenon caused by double reflection of light in water droplets.",
      details: "This natural event results in two concentric colorful arches in the sky, which can be observed primarily in rainy valleys. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that the secondary outer arch has its colors reversed compared to the inner one. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 5,
    plant: {
      title: "The Sal Tree",
      titleHindi: "साल का पेड़",
      intro: "Known scientifically as Shorea robusta, the the sal tree is a fascinating plant adapted to moist deciduous forests.",
      details: "The the sal tree features oval leathery leaves and produces winged wind-dispersed seeds. It plays a crucial ecological role in its native moist deciduous forests, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it resists fire due to thick bark and seeds germinate immediately. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Snow Leopard",
      titleHindi: "हिम तेंदुआ",
      intro: "The snow leopard (Panthera uncia) is a specialized member of the mammals group, active during crepuscular hours.",
      details: "As a prominent carnivore, the snow leopard is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the snow leopard is that its long thick tail wraps around the body to protect it from freezing cold. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Reishi Mushroom",
      titleHindi: "ऋषि मशरूम",
      intro: "The reishi mushroom (Ganoderma lucidum) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in tree trunks, the reishi mushroom plays a vital role in decomposition within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it revered in East Asia for longevity due to immune-active triterpenes. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Fog Bow",
      titleHindi: "कुहरा इंद्रधनुष",
      intro: "The fog bow is a spectacular optical phenomenon caused by diffraction of light in tiny fog droplets.",
      details: "This natural event results in a ghost-like white rainbow arch in fog, which can be observed primarily in mountain passes. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that droplets are so small that wave diffraction washes out the colors into white. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 6,
    plant: {
      title: "Teak Tree",
      titleHindi: "सागौन का पेड़",
      intro: "Known scientifically as Tectona grandis, the teak tree is a fascinating plant adapted to tropical monsoon forests.",
      details: "The teak tree features large ovate rough leaves and produces hard spongy nut-like fruits. It plays a crucial ecological role in its native tropical monsoon forests, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it contains natural silica and oils repelling termites. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Clouded Leopard",
      titleHindi: "क्लाउडेड तेंदुआ",
      intro: "The clouded leopard (Neofelis nebulosa) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent carnivore, the clouded leopard is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the clouded leopard is that has the longest canine teeth relative to body size of any living cat. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Chaga Mushroom",
      titleHindi: "चागा",
      intro: "The chaga mushroom (Inonotus obliquus) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in birch trees, the chaga mushroom plays a vital role in parasitism within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it looks like charcoal and contains high levels of melanin and antioxidants. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Moonbow",
      titleHindi: "चंद्र इंद्रधनुष",
      intro: "The moonbow is a spectacular optical phenomenon caused by refraction of moonlight in water mist.",
      details: "This natural event results in a faint white rainbow visible at night, which can be observed primarily in waterfalls. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that appears white to human eyes but shows full colors in long-exposure photos. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 7,
    plant: {
      title: "Sandalwood",
      titleHindi: "चंदन का पेड़",
      intro: "Known scientifically as Santalum album, the sandalwood is a fascinating plant adapted to dry scrub forests.",
      details: "The sandalwood features thin lance-shaped leaves and produces black fleshy berries. It plays a crucial ecological role in its native dry scrub forests, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it is a hemiparasite tapping roots of neighboring host trees. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Indian Leopard",
      titleHindi: "भारतीय तेंदुआ",
      intro: "The indian leopard (Panthera pardus fusca) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent carnivore, the indian leopard is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the indian leopard is that is a master climber able to drag heavy prey up vertical tree trunks. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Turkey Tail Fungus",
      titleHindi: "टर्की टेल",
      intro: "The turkey tail fungus (Trametes versicolor) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in dead logs, the turkey tail fungus plays a vital role in decomposition within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it grows in colorful concentric rings resembling a turkey's tail. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Sun Halo",
      titleHindi: "सूर्य प्रभामंडल",
      intro: "The sun halo is a spectacular optical phenomenon caused by refraction of light in high-altitude ice crystals.",
      details: "This natural event results in a giant 22-degree ring around the sun, which can be observed primarily in thin cirrus clouds. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that hexagonal ice crystals act like prisms, bending light at a precise angle. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 8,
    plant: {
      title: "Bamboo",
      titleHindi: "बांस",
      intro: "Known scientifically as Bambusoideae, the bamboo is a fascinating plant adapted to diverse ecosystems.",
      details: "The bamboo features slender blade-like leaves and produces rare woody grains. It plays a crucial ecological role in its native diverse ecosystems, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it grows up to 36 inches in a single 24-hour period. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Cheetah",
      titleHindi: "चीता",
      intro: "The cheetah (Acinonyx jubatus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent carnivore, the cheetah is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the cheetah is that accelerates from 0 to 60 miles per hour in just three seconds. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Cordyceps Fungus",
      titleHindi: "कीड़ा जड़ी",
      intro: "The cordyceps fungus (Ophiocordyceps sinensis) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in alpine grasslands, the cordyceps fungus plays a vital role in insect pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it infects caterpillar brains, controlling behavior to disperse spores. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Light Pillars",
      titleHindi: "प्रकाश स्तंभ",
      intro: "The light pillars is a spectacular optical phenomenon caused by light reflecting off flat falling ice crystals.",
      details: "This natural event results in vertical beams of light rising into the sky, which can be observed primarily in freezing valleys. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that millions of flat ice crystals align horizontally, acting as a giant mirror. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 9,
    plant: {
      title: "Eucalyptus",
      titleHindi: "नीलगिरी",
      intro: "Known scientifically as Eucalyptus globulus, the eucalyptus is a fascinating plant adapted to temperate valleys.",
      details: "The eucalyptus features narrow blue-grey leaves containing oil and produces woody capsule-like fruits. It plays a crucial ecological role in its native temperate valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it releases volatile oils creating a blue haze over forests. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Jaguar",
      titleHindi: "जगुआर",
      intro: "The jaguar (Panthera onca) is a specialized member of the mammals group, active during crepuscular hours.",
      details: "As a prominent carnivore, the jaguar is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the jaguar is that possesses a bite powerful enough to pierce turtle shells and crocodile hide. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Death Cap Mushroom",
      titleHindi: "डेथ कैप",
      intro: "The death cap mushroom (Amanita phalloides) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in woodlands, the death cap mushroom plays a vital role in poisonous fungus within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it contains alpha-amanitin which causes irreversible liver failure when eaten. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Fata Morgana",
      titleHindi: "मरीचिका",
      intro: "The fata morgana is a spectacular optical phenomenon caused by temperature inversion bending light rays.",
      details: "This natural event results in distorted hovering structures on the horizon, which can be observed primarily in polar ice sheets. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that cold air below warm air creates a lens bending light over the horizon. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 10,
    plant: {
      title: "English Oak",
      titleHindi: "बलूत का पेड़",
      intro: "Known scientifically as Quercus robur, the english oak is a fascinating plant adapted to temperate woodlands.",
      details: "The english oak features deeply lobed green leaves and produces hard smooth acorns. It plays a crucial ecological role in its native temperate woodlands, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it hosts and supports over 2,300 species of organisms. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Cougar",
      titleHindi: "कूगर",
      intro: "The cougar (Puma concolor) is a specialized member of the mammals group, active during crepuscular hours.",
      details: "As a prominent carnivore, the cougar is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the cougar is that can leap up to forty feet horizontally and fifteen feet vertically in a single bound. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Fly Agaric",
      titleHindi: "फ्लाइ एगारिक",
      intro: "The fly agaric (Amanita muscaria) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in pine forests, the fly agaric plays a vital role in symbiosis within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it bright red cap with white spots contains psychoactive ibotenic acid. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Green Flash",
      titleHindi: "हरा फ्लैश",
      intro: "The green flash is a spectacular optical phenomenon caused by refraction at the last moment of sunset.",
      details: "This natural event results in a brief green light flash on the sun's rim, which can be observed primarily in ocean horizons. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that the blue light is scattered by the air, leaving green as the last color. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 11,
    plant: {
      title: "Chir Pine",
      titleHindi: "चीड़ का पेड़",
      intro: "Known scientifically as Pinus roxburghii, the chir pine is a fascinating plant adapted to himalayan slopes.",
      details: "The chir pine features long needle-like leaves and produces woody scale-like cones. It plays a crucial ecological role in its native himalayan slopes, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it produces thick sticky resin that seals wounds on bark. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Grizzly Bear",
      titleHindi: "ग्रिजली भालू",
      intro: "The grizzly bear (Ursus arctos horribilis) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent omnivore, the grizzly bear is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the grizzly bear is that enters winter dormancy without eating, drinking, or disposing of waste for months. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Black Truffle",
      titleHindi: "काला ट्रफल",
      intro: "The black truffle (Tuber melanosporum) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in oak roots, the black truffle plays a vital role in symbiosis within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it grows completely underground, releasing intense scents to attract animals. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Belt of Venus",
      titleHindi: "वीनस की पेटी",
      intro: "The belt of venus is a spectacular atmospheric phenomenon caused by earth's shadow reflecting in the atmosphere.",
      details: "This natural event results in a pinkish band above a dark blue horizon, which can be observed primarily in open horizons. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that pink sunset light backscatters off rising atmospheric dust particles. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 12,
    plant: {
      title: "Deodar Cedar",
      titleHindi: "देवदार",
      intro: "Known scientifically as Cedrus deodara, the deodar cedar is a fascinating plant adapted to mountain forests.",
      details: "The deodar cedar features short needle-like leaves and produces barrel-shaped upright cones. It plays a crucial ecological role in its native mountain forests, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it wood contains aromatic preservative oils resisting decay. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Polar Bear",
      titleHindi: "ध्रुवीय भालू",
      intro: "The polar bear (Ursus maritimus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent carnivore, the polar bear is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the polar bear is that its white fur is actually translucent and its skin beneath is solid black. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Morel Mushroom",
      titleHindi: "गुच्छी",
      intro: "The morel mushroom (Morchella esculenta) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in forest fire scars, the morel mushroom plays a vital role in decomposition within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it highly prized for honeycomb-like cap, appearing after spring rains. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Crepuscular Rays",
      titleHindi: "गोधूलि किरणें",
      intro: "The crepuscular rays is a spectacular optical phenomenon caused by sunlight filtered through gaps in clouds.",
      details: "This natural event results in converging beams of light and shadow, which can be observed primarily in mountain horizons. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that beams appear to converge due to perspective, though they are parallel. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 13,
    plant: {
      title: "Giant Sequoia",
      titleHindi: "विशाल सिकोया",
      intro: "Known scientifically as Sequoiadendron giganteum, the giant sequoia is a fascinating plant adapted to mountain slopes.",
      details: "The giant sequoia features scale-like evergreen needles and produces small egg-shaped cones. It plays a crucial ecological role in its native mountain slopes, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it features fire-resistant bark up to two feet thick. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Giant Panda",
      titleHindi: "विशाल पांडा",
      intro: "The giant panda (Ailuropoda melanoleuca) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the giant panda is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the giant panda is that possesses an elongated wrist bone that acts as a thumb to grip bamboo. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Yellow Wall Lichen",
      titleHindi: "लाइकेन",
      intro: "The yellow wall lichen (Xanthoria parietina) is a microscopic or simple organism classified under the lichen kingdom.",
      details: "Thriving in sunny rocks, the yellow wall lichen plays a vital role in pioneer species within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it can survive extreme space vacuum and radiation for weeks. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Anticrepuscular Rays",
      titleHindi: "प्रतिकिरणें",
      intro: "The anticrepuscular rays is a spectacular optical phenomenon caused by beams of sunlight converging opposite the sun.",
      details: "This natural event results in light rays converging on the eastern sky at sunset, which can be observed primarily in flat plains. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that rays cross the entire sky, converging at the anti-solar point opposite the sun. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 14,
    plant: {
      title: "The Baobab",
      titleHindi: "बाओबाब",
      intro: "Known scientifically as Adansonia digitata, the the baobab is a fascinating plant adapted to arid savannahs.",
      details: "The the baobab features palmate hand-shaped leaves and produces large woody gourd-like fruits. It plays a crucial ecological role in its native arid savannahs, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it stores up to 32,000 gallons of water in its trunk. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Red Panda",
      titleHindi: "लाल पांडा",
      intro: "The red panda (Ailurus fulgens) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent herbivore, the red panda is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the red panda is that uses its bushy tail as a blanket to keep warm in high-altitude trees. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Spirulina Algae",
      titleHindi: "स्पिरुलिना",
      intro: "The spirulina algae (Arthrospira platensis) is a microscopic or simple organism classified under the cyanobacteria kingdom.",
      details: "Thriving in alkaline lakes, the spirulina algae plays a vital role in photosynthesis within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it one of the oldest life forms, producing highly nutritious proteins. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Volcanic Lightning",
      titleHindi: "ज्वालामुखी बिजली",
      intro: "The volcanic lightning is a spectacular weather phenomenon caused by 摩擦 generated static in volcanic ash clouds.",
      details: "This natural event results in lightning flashes inside an ash plume, which can be observed primarily in active volcanoes. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that collision of ash particles and ice crystals generates massive static charge. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 15,
    plant: {
      title: "Acacia",
      titleHindi: "बबूल",
      intro: "Known scientifically as Acacia nilotica, the acacia is a fascinating plant adapted to dry plains.",
      details: "The acacia features feather-like double-compound leaflets and produces long flat seed pods. It plays a crucial ecological role in its native dry plains, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it releases ethylene gas warning neighbors to pump tannins. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Sloth Bear",
      titleHindi: "स्लॉथ भालू",
      intro: "The sloth bear (Melursus ursinus) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent insectivore, the sloth bear is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the sloth bear is that lacks front teeth, allowing it to suck up termites like a vacuum. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Chlorella Algae",
      titleHindi: "क्लोरेला",
      intro: "The chlorella algae (Chlorella vulgaris) is a microscopic or simple organism classified under the green algae kingdom.",
      details: "Thriving in freshwater pools, the chlorella algae plays a vital role in photosynthesis within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it possesses a highly efficient photosynthetic rate, doubling in 24 hours. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Ball Lightning",
      titleHindi: "गोलाकार बिजली",
      intro: "The ball lightning is a spectacular electrical phenomenon caused by silicon vapor burning after lightning strikes.",
      details: "This natural event results in a glowing sphere of electricity floating in air, which can be observed primarily in thunderstorm fields. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that sphere can pass through closed glass windows and floats for several seconds. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 16,
    plant: {
      title: "Sugar Maple",
      titleHindi: "चीनी मेपल",
      intro: "Known scientifically as Acer saccharum, the sugar maple is a fascinating plant adapted to temperate forests.",
      details: "The sugar maple features five-lobed green leaves and produces double-winged samara seeds. It plays a crucial ecological role in its native temperate forests, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it tapped in spring to make sweet maple syrup from sap. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Gray Wolf",
      titleHindi: "भेड़िया",
      intro: "The gray wolf (Canis lupus) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent carnivore, the gray wolf is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the gray wolf is that coordinate hunts using vocal howls that carry up to ten miles in open terrain. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Diatoms",
      titleHindi: "डायटम",
      intro: "The diatoms (Bacillariophyceae) is a microscopic or simple organism classified under the microalgae kingdom.",
      details: "Thriving in oceans and lakes, the diatoms plays a vital role in photosynthesis within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it creates beautiful glass-like cell walls made of pure silica. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "St. Elmo's Fire",
      titleHindi: "सेंट एल्मो की आग",
      intro: "The st. elmo's fire is a spectacular electrical phenomenon caused by ionization of air near pointed metal objects.",
      details: "This natural event results in a glowing blue brush of light on ship masts, which can be observed primarily in stormy seas. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that high electric fields ionize nitrogen gas, creating a blue corona discharge. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 17,
    plant: {
      title: "Cherry Blossom",
      titleHindi: "सकुरा",
      intro: "Known scientifically as Prunus serrulata, the cherry blossom is a fascinating plant adapted to temperate valleys.",
      details: "The cherry blossom features oval serrated green leaves and produces small dark-red cherries. It plays a crucial ecological role in its native temperate valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it blooms almost simultaneously across entire regions. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Dhole",
      titleHindi: "ढोल",
      intro: "The dhole (Cuon alpinus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent carnivore, the dhole is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the dhole is that communicates using whistles, clucks, and screams to coordinate pack hunts. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Dinoflagellates",
      titleHindi: "डायनोफ्लेजिलेट्स",
      intro: "The dinoflagellates (Dinoflagellata) is a microscopic or simple organism classified under the microalgae kingdom.",
      details: "Thriving in ocean surface, the dinoflagellates plays a vital role in bioluminescence within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it produces brilliant blue flashes of light when agitated by waves. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Catatumbo Lightning",
      titleHindi: "कैटटुम्बो बिजली",
      intro: "The catatumbo lightning is a spectacular weather phenomenon caused by warm winds colliding with cold mountain air.",
      details: "This natural event results in continuous silent lightning over a river mouth, which can be observed primarily in Lake Maracaibo. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that produces up to 280 lightning flashes per hour, 260 nights a year. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 18,
    plant: {
      title: "The Olive Tree",
      titleHindi: "जैतून का पेड़",
      intro: "Known scientifically as Olea europaea, the the olive tree is a fascinating plant adapted to mediterranean coast.",
      details: "The the olive tree features narrow silver-grey leaves and produces oily oval drupe fruits. It plays a crucial ecological role in its native mediterranean coast, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it verified to live and fruit for over 2,000 years. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Golden Jackal",
      titleHindi: "सियार",
      intro: "The golden jackal (Canis aureus) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent omnivore, the golden jackal is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the golden jackal is that possesses a highly adaptable diet allowing it to survive near human settlements. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Amoeba Proteus",
      titleHindi: "अमीबा",
      intro: "The amoeba proteus (Amoeba proteus) is a microscopic or simple organism classified under the protozoa kingdom.",
      details: "Thriving in decaying ponds, the amoeba proteus plays a vital role in predation within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it moves and captures food by extending temporary finger-like pseudopodia. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Supercell Thunderstorm",
      titleHindi: "सुपरसेल",
      intro: "The supercell thunderstorm is a spectacular weather phenomenon caused by a rotating updraft called a mesocyclone.",
      details: "This natural event results in severe wind, hail, and violent tornadoes, which can be observed primarily in Great Plains. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that the entire storm structure rotates, sustaining itself for several hours. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 19,
    plant: {
      title: "Coconut Palm",
      titleHindi: "नारियल का पेड़",
      intro: "Known scientifically as Cocos nucifera, the coconut palm is a fascinating plant adapted to tropical coasts.",
      details: "The coconut palm features long feather-like fronds and produces fibrous hard-shelled coconuts. It plays a crucial ecological role in its native tropical coasts, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it coconut floats on ocean currents for up to 110 days. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Bengal Fox",
      titleHindi: "बंगाल लोमड़ी",
      intro: "The bengal fox (Vulpes bengalensis) is a specialized member of the mammals group, active during crepuscular hours.",
      details: "As a prominent omnivore, the bengal fox is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the bengal fox is that uses its bushy tail to balance and steer during rapid, zig-zag escapes. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Paramecium Caudatum",
      titleHindi: "पैरामीशियम",
      intro: "The paramecium caudatum (Paramecium caudatum) is a microscopic or simple organism classified under the protozoa kingdom.",
      details: "Thriving in freshwater pools, the paramecium caudatum plays a vital role in predation within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it is covered in thousands of tiny beating hairs (cilia) used to swim. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Tornado",
      titleHindi: "बवंडर",
      intro: "The tornado is a spectacular weather phenomenon caused by rapidly rotating column of air touching ground.",
      details: "This natural event results in funnel winds exceeding 300 miles per hour, which can be observed primarily in tornado alley plains. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that can lift heavy vehicles and destroy buildings within seconds. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 20,
    plant: {
      title: "Date Palm",
      titleHindi: "खजूर का पेड़",
      intro: "Known scientifically as Phoenix dactylifera, the date palm is a fascinating plant adapted to desert oases.",
      details: "The date palm features stiff spiny compound leaves and produces sweet fleshy date berries. It plays a crucial ecological role in its native desert oases, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it seeds remain dormant in dry desert soil for decades. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Striped Hyena",
      titleHindi: "लकड़बग्घा",
      intro: "The striped hyena (Hyaena hyaena) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent carnivore, the striped hyena is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the striped hyena is that possesses massive jaw muscles that easily crush solid animal bones for marrow. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Euglena Viridis",
      titleHindi: "यूग्लीना",
      intro: "The euglena viridis (Euglena viridis) is a microscopic or simple organism classified under the protozoa kingdom.",
      details: "Thriving in damp soil and ponds, the euglena viridis plays a vital role in photosynthesis & predation within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it possesses chloroplasts to perform photosynthesis but can also hunt prey. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Waterspout",
      titleHindi: "जल बवंडर",
      intro: "The waterspout is a spectacular weather phenomenon caused by tornado forming over warm water surfaces.",
      details: "This natural event results in a column of mist and wind rising from sea, which can be observed primarily in tropical oceans. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that absorbs water spray and spin-drifts it, moving slowly across the bay. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 21,
    plant: {
      title: "Sacred Lotus",
      titleHindi: "कमल",
      intro: "Known scientifically as Nelumbo nucifera, the sacred lotus is a fascinating plant adapted to freshwater wetlands.",
      details: "The sacred lotus features large shield-like rising leaves and produces spongy cone-shaped seed pods. It plays a crucial ecological role in its native freshwater wetlands, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it microscopic leaf surface repels water and dirt. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Meerkat",
      titleHindi: "मीरकैट",
      intro: "The meerkat (Suricata suricatta) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent insectivore, the meerkat is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the meerkat is that uses a lookout sentry that alerts the mob to predators with specific calls. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Malaria Parasite",
      titleHindi: "प्लास्मोडियम",
      intro: "The malaria parasite (Plasmodium falciparum) is a microscopic or simple organism classified under the protozoa kingdom.",
      details: "Thriving in blood cells, the malaria parasite plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it reproduces inside human liver cells and red blood cells. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Dust Devil",
      titleHindi: "धूल का बवंडर",
      intro: "The dust devil is a spectacular weather phenomenon caused by intense local solar heating of dry soil.",
      details: "This natural event results in a rotating column of dust under clear skies, which can be observed primarily in desert basins. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that heats up air rapidly, rising in a spiral without any cloud support. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 22,
    plant: {
      title: "Water Lily",
      titleHindi: "कुमुदनी",
      intro: "Known scientifically as Nymphaeaceae, the water lily is a fascinating plant adapted to still ponds.",
      details: "The water lily features flat floating round leaves and produces berry-like underwater fruits. It plays a crucial ecological role in its native still ponds, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it leaf air-chambers transport oxygen down to roots. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Ring-Tailed Lemur",
      titleHindi: "रिंग-टेल्ड लेमूर",
      intro: "The ring-tailed lemur (Lemur catta) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the ring-tailed lemur is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the ring-tailed lemur is that engages in 'stink fights' by rubbing tail glands on branches and waving them. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Acidophilus Bacteria",
      titleHindi: "लैक्टोबैसिलस",
      intro: "The acidophilus bacteria (Lactobacillus acidophilus) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in milk products, the acidophilus bacteria plays a vital role in lactic acid producer within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it ferments lactose into lactic acid, preserving milk as yogurt. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Fire Whirl",
      titleHindi: "अग्नि बवंडर",
      intro: "The fire whirl is a spectacular thermal phenomenon caused by intense heat from forest fires generating updrafts.",
      details: "This natural event results in a rotating column of fire rising from flames, which can be observed primarily in burning woodlands. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that rotates burning embers and gases, spreading forest fires rapidly. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 23,
    plant: {
      title: "Pitcher Plant",
      titleHindi: "घटपर्णी",
      intro: "Known scientifically as Nepenthes khasiana, the pitcher plant is a fascinating plant adapted to acidic soils.",
      details: "The pitcher plant features pitcher-shaped trap leaves and produces woody capsule seeds. It plays a crucial ecological role in its native acidic soils, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it slick wax rim causes insects to slip into digestive fluid. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Chimpanzee",
      titleHindi: "चिंपांज़ी",
      intro: "The chimpanzee (Panitrog lodytes) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent omnivore, the chimpanzee is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the chimpanzee is that makes and uses tools, passing the knowledge down to younger generations. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Streptococcus Bacteria",
      titleHindi: "स्ट्रेप्टोकोकस",
      intro: "The streptococcus bacteria (Streptococcus thermophilus) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in dairy products, the streptococcus bacteria plays a vital role in fermentation within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it works with lactobacillus to thicken yogurt and develop flavor. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Haboob",
      titleHindi: "हबूब",
      intro: "The haboob is a spectacular weather phenomenon caused by cold air downdrafts collapsing from storms.",
      details: "This natural event results in a massive wall of dust rolling across plains, which can be observed primarily in arid basins. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that creates a mile-high wall of dust that blocks out the sun within minutes. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 24,
    plant: {
      title: "Venus Flytrap",
      titleHindi: "वीनस फ्लाईट्रैप",
      intro: "Known scientifically as Dionaea muscipula, the venus flytrap is a fascinating plant adapted to nitrogen-poor bogs.",
      details: "The venus flytrap features hinged trap leaves with trigger hairs and produces small black seeds. It plays a crucial ecological role in its native nitrogen-poor bogs, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it closes in a tenth of a second when hairs are touched. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Gorilla",
      titleHindi: "गोरिल्ला",
      intro: "The gorilla (Gorilla beringei) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the gorilla is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the gorilla is that builds new sleeping nests out of branches on the ground every night. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "E. Coli Bacteria",
      titleHindi: "ई. कोलाई",
      intro: "The e. coli bacteria (Escherichia coli) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in animal intestines, the e. coli bacteria plays a vital role in symbiosis & pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it helps synthesize vitamin K in human intestines but some strains cause illness. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Monsoon",
      titleHindi: "मानसून",
      intro: "The monsoon is a spectacular climatic phenomenon caused by seasonal shifting of global wind systems.",
      details: "This natural event results in months of heavy rainfall and wind pattern shift, which can be observed primarily in Indian Ocean. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that land heating draws in moisture-laden winds from the cool ocean. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 25,
    plant: {
      title: "Sundew",
      titleHindi: "स्यूड्रू",
      intro: "Known scientifically as Drosera rotundifolia, the sundew is a fascinating plant adapted to acidic wetlands.",
      details: "The sundew features sticky red-tentacled leaves and produces tiny capsule seeds. It plays a crucial ecological role in its native acidic wetlands, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it tentacles bend wrapping prey in digestive glue. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Orangutan",
      titleHindi: "ओरंगुटान",
      intro: "The orangutan (Pongo pygmaeus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the orangutan is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the orangutan is that spends nearly 90% of its life in the canopy, moving with extreme grace. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Cyanobacteria",
      titleHindi: "नील-हरित शैवाल",
      intro: "The cyanobacteria (Anabaena) is a microscopic or simple organism classified under the cyanobacteria kingdom.",
      details: "Thriving in flooded fields, the cyanobacteria plays a vital role in nitrogen fixation within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it contains specialized cells called heterocysts that fix atmospheric nitrogen. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "El Niño",
      titleHindi: "अल नीनो",
      intro: "The el niño is a spectacular oceanic phenomenon caused by weakening of trade winds in the Pacific.",
      details: "This natural event results in warming of eastern ocean waters and global rain shifts, which can be observed primarily in equatorial Pacific. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that causes heavy rains in dry Peru and severe droughts in wet Indonesia. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 26,
    plant: {
      title: "Rafflesia",
      titleHindi: "रफ्लेशिया",
      intro: "Known scientifically as Rafflesia arnoldii, the rafflesia is a fascinating plant adapted to rainforest floors.",
      details: "The rafflesia features no leaves or stems and produces woody berry fruits. It plays a crucial ecological role in its native rainforest floors, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it produces the largest individual flower up to three feet wide. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Gibbon",
      titleHindi: "गिब्बन",
      intro: "The gibbon (Hylobatidae) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the gibbon is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the gibbon is that uses swing arms (brachiation) to travel up to 35 miles per hour through trees. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Rhizobium Bacteria",
      titleHindi: "राइजोबियम",
      intro: "The rhizobium bacteria (Rhizobium leguminosarum) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in legume roots, the rhizobium bacteria plays a vital role in nitrogen fixation within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it forms nodules on legume roots, converting nitrogen gas into fertilizer. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "La Niña",
      titleHindi: "ला नीना",
      intro: "The la niña is a spectacular oceanic phenomenon caused by strengthening of trade winds in the Pacific.",
      details: "This natural event results in cooling of eastern ocean waters and rain shifts, which can be observed primarily in equatorial Pacific. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that brings heavy monsoons to India and dry weather to western Americas. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 27,
    plant: {
      title: "Titan Arum",
      titleHindi: "जाइंट अरुम",
      intro: "Known scientifically as Amorphophallus titanum, the titan arum is a fascinating plant adapted to rainforest openings.",
      details: "The titan arum features single massive compound leaf and produces bright red berries. It plays a crucial ecological role in its native rainforest openings, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it flower structure heats up to disperse carrion-like odor. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Lion-Tailed Macaque",
      titleHindi: "शेर-पूंछ मकाक",
      intro: "The lion-tailed macaque (Macaca silenus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent omnivore, the lion-tailed macaque is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the lion-tailed macaque is that is one of the rarest monkeys, living entirely in wet rainforest trees. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Magnetotactic Bacteria",
      titleHindi: "चुंबकीय बैक्टीरिया",
      intro: "The magnetotactic bacteria (Magnetospirillum magneticum) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in lake mud, the magnetotactic bacteria plays a vital role in magnetic alignment within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it synthesizes chains of magnetic iron crystals to align with Earth's field. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Indian Ocean Dipole",
      titleHindi: "हिंद महासागर डिपोल",
      intro: "The indian ocean dipole is a spectacular oceanic phenomenon caused by shifting of ocean temperatures in Indian Ocean.",
      details: "This natural event results in floods in East Africa and droughts in Australia, which can be observed primarily in Indian Ocean basin. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that the western basin warms while the eastern basin cools, changing wind patterns. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 28,
    plant: {
      title: "Edelweiss",
      titleHindi: "एडेलवाइस",
      intro: "Known scientifically as Leontopodium nivale, the edelweiss is a fascinating plant adapted to alpine cliffs.",
      details: "The edelweiss features star-shaped white woolly leaves and produces small dry seeds. It plays a crucial ecological role in its native alpine cliffs, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it wool traps air protecting it from ultraviolet rays. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Nilgiri Tahr",
      titleHindi: "नीलगिरि तहर",
      intro: "The nilgiri tahr (Nilgiritragus hylocrius) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the nilgiri tahr is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the nilgiri tahr is that climbs near-vertical rocky cliffs of the Western Ghats with ease. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Deinococcus Radiodurans",
      titleHindi: "विकिरण प्रतिरोधी जीवाणु",
      intro: "The deinococcus radiodurans (Deinococcus radiodurans) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in dry soil, the deinococcus radiodurans plays a vital role in extreme survival within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it can survive radiation doses thousands of times lethal to humans. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Polar Vortex",
      titleHindi: "ध्रुवीय भंवर",
      intro: "The polar vortex is a spectacular climatic phenomenon caused by weakening of high-altitude jet stream winds.",
      details: "This natural event results in extreme freezing air spilling into temperate zones, which can be observed primarily in polar circles. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that causes winter temperatures to drop to record lows in mid-latitudes. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 29,
    plant: {
      title: "Lavender",
      titleHindi: "लैवेंडर",
      intro: "Known scientifically as Lavandula angustifolia, the lavender is a fascinating plant adapted to rocky hills.",
      details: "The lavender features narrow grey-green leaves and produces small dark seeds. It plays a crucial ecological role in its native rocky hills, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it oil glands contain linalool which repels herbivores. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Blackbuck",
      titleHindi: "काला हिरण",
      intro: "The blackbuck (Antilope cervicapra) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the blackbuck is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the blackbuck is that is noted for its long, spiral horns and high jumping speed on open plains. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Halobacterium",
      titleHindi: "नमक जीवाणु",
      intro: "The halobacterium (Halobacterium salinarum) is a microscopic or simple organism classified under the archaea kingdom.",
      details: "Thriving in salt flats, the halobacterium plays a vital role in extreme survival within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it grows in water saturated with salt, coloring salt pans bright pink. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Jet Stream",
      titleHindi: "जेट स्ट्रीम",
      intro: "The jet stream is a spectacular atmospheric phenomenon caused by global temperature difference and Earth's spin.",
      details: "This natural event results in high-altitude fast-flowing wind currents, which can be observed primarily in upper troposphere. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that wind currents blow up to 250 miles per hour, steering global weather. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 30,
    plant: {
      title: "Vanilla Orchid",
      titleHindi: "वेनिला",
      intro: "Known scientifically as Vanilla planifolia, the vanilla orchid is a fascinating plant adapted to tropical rainforests.",
      details: "The vanilla orchid features thick fleshy green leaves and produces long green seed pods. It plays a crucial ecological role in its native tropical rainforests, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it each flower opens for only a few hours in a morning. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Chinkara",
      titleHindi: "चिंकारा",
      intro: "The chinkara (Gazella bennettii) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the chinkara is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the chinkara is that can survive without drinking water for long periods, absorbing moisture from dew. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Thermus Aquaticus",
      titleHindi: "थर्मस एक्वाटिकस",
      intro: "The thermus aquaticus (Thermus aquaticus) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in hot springs, the thermus aquaticus plays a vital role in extreme survival within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it produces Taq polymerase, an enzyme used in modern PCR DNA testing. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Coriolis Effect",
      titleHindi: "कोरिओलिस प्रभाव",
      intro: "The coriolis effect is a spectacular geophysical phenomenon caused by Earth's rotation deflecting moving air and water.",
      details: "This natural event results in storms spinning counterclockwise in north and clockwise in south, which can be observed primarily in global oceans. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that deflection is zero at the equator and reaches maximum at the poles. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 31,
    plant: {
      title: "Damask Rose",
      titleHindi: "गुलाब",
      intro: "Known scientifically as Rosa damascena, the damask rose is a fascinating plant adapted to temperate valleys.",
      details: "The damask rose features serrated compound leaves with thorns and produces red fleshy rose hips. It plays a crucial ecological role in its native temperate valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it concentrated aromatic alcohols require tons of petals for oil. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Sambar Deer",
      titleHindi: "सांबर हिरण",
      intro: "The sambar deer (Rusa unicolor) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent herbivore, the sambar deer is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the sambar deer is that stands as the largest deer in Asia, with males growing heavy three-tined antlers. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Methanogenic Archaea",
      titleHindi: "मीथेन जीवाणु",
      intro: "The methanogenic archaea (Methanobrevibacter smithii) is a microscopic or simple organism classified under the archaea kingdom.",
      details: "Thriving in swamps and guts, the methanogenic archaea plays a vital role in methane production within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it converts hydrogen and carbon dioxide into methane gas in anaerobic mud. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Thermohaline Circulation",
      titleHindi: "थर्मोहेलिन परिसंचरण",
      intro: "The thermohaline circulation is a spectacular oceanic phenomenon caused by sinking of cold, salty water in polar seas.",
      details: "This natural event results in a global ocean conveyor belt moving warm water, which can be observed primarily in deep oceans. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that drives warm surface currents that regulate the climate of western Europe. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 32,
    plant: {
      title: "Night Jasmine",
      titleHindi: "हरसिंगार",
      intro: "Known scientifically as Nyctanthes arbor-tristis, the night jasmine is a fascinating plant adapted to deciduous woodlands.",
      details: "The night jasmine features rough ovate leaves and produces flat heart-shaped capsules. It plays a crucial ecological role in its native deciduous woodlands, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it flowers open at dusk releasing sweet scent and drop at dawn. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Chital",
      titleHindi: "चित्तीदार हिरण",
      intro: "The chital (Axis axis) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the chital is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the chital is that maintains its white spots throughout its life to mimic forest dappled light. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Sulfolobus",
      titleHindi: "सल्फोलोबस",
      intro: "The sulfolobus (Sulfolobus acidocaldarius) is a microscopic or simple organism classified under the archaea kingdom.",
      details: "Thriving in volcanic springs, the sulfolobus plays a vital role in extreme survival within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it thrives in hot acidic mud at temperatures up to 80 degrees Celsius. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Upwelling",
      titleHindi: "अपवेलिंग",
      intro: "The upwelling is a spectacular oceanic phenomenon caused by wind blowing parallel to coast pushing surface water.",
      details: "This natural event results in nutrient-rich cold water rising to the ocean surface, which can be observed primarily in coastal boundaries. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that creates highly productive marine zones supporting massive fish schools. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 33,
    plant: {
      title: "Marigold",
      titleHindi: "गेंदा",
      intro: "Known scientifically as Tagetes erecta, the marigold is a fascinating plant adapted to sunny plains.",
      details: "The marigold features finely divided green leaves and produces slender black seeds. It plays a crucial ecological role in its native sunny plains, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it roots exude alpha-terthienyl repelling nematodes. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Swamp Deer",
      titleHindi: "बारासिंगा",
      intro: "The swamp deer (Rucervus duvaucelii) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the swamp deer is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the swamp deer is that males grow unique antlers with up to twelve tines, hence the name. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Water Bear",
      titleHindi: "टार्डिग्रेड",
      intro: "The water bear (Milnesium tardigradum) is a microscopic or simple organism classified under the micro-animals kingdom.",
      details: "Thriving in damp moss, the water bear plays a vital role in extreme survival within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it enters a cryptobiotic state surviving absolute zero and space vacuum. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Tidal Bore",
      titleHindi: "ज्वारीय बोर",
      intro: "The tidal bore is a spectacular hydrological phenomenon caused by incoming ocean tides forced into narrow river funnel.",
      details: "This natural event results in a standing wave of water traveling upstream, which can be observed primarily in narrow estuaries. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that the Qiantang River bore in China produces a wave up to thirty feet high. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 34,
    plant: {
      title: "Hibiscus",
      titleHindi: "गुड़हल",
      intro: "Known scientifically as Hibiscus rosa-sinensis, the hibiscus is a fascinating plant adapted to tropical gardens.",
      details: "The hibiscus features glossy lobed green leaves and produces five-lobed capsule fruits. It plays a crucial ecological role in its native tropical gardens, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it petals contain mucilage protecting tissue from heat. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Musk Deer",
      titleHindi: "कस्तूरी मृग",
      intro: "The musk deer (Moschus leucogaster) is a specialized member of the mammals group, active during crepuscular hours.",
      details: "As a prominent herbivore, the musk deer is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the musk deer is that lacks antlers but males grow long canine tusks used for combat. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Root-Knot Nematode",
      titleHindi: "न्युमेटोड",
      intro: "The root-knot nematode (Meloidogyne incognita) is a microscopic or simple organism classified under the worms kingdom.",
      details: "Thriving in agricultural soil, the root-knot nematode plays a vital role in plant pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it causes plant roots to swell into galls, stealing plant nutrients. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Red Tide",
      titleHindi: "लाल ज्वार",
      intro: "The red tide is a spectacular ecological phenomenon caused by rapid multiplication of toxic dinoflagellate algae.",
      details: "This natural event results in ocean water turning reddish-brown and toxic, which can be observed primarily in coastal bays. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that algae release toxins that kill fish and contaminate local shellfish. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 35,
    plant: {
      title: "Bougainvillea",
      titleHindi: "बोगनवेलिया",
      intro: "Known scientifically as Bougainvillea spectabilis, the bougainvillea is a fascinating plant adapted to arid hills.",
      details: "The bougainvillea features heart-shaped leaves with thorns and produces dry seed capsules. It plays a crucial ecological role in its native arid hills, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it modified leaves called bracts surround small flowers. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Indian Bison",
      titleHindi: "गौर",
      intro: "The indian bison (Bos gaurus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the indian bison is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the indian bison is that stands as the tallest wild cattle species, with males weighing up to a ton. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Common Earthworm",
      titleHindi: "केंचुआ",
      intro: "The common earthworm (Lumbricus terrestris) is a microscopic or simple organism classified under the worms kingdom.",
      details: "Thriving in garden soil, the common earthworm plays a vital role in soil engineering within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it tunnels through soil, aerating it and turning organic waste into humus. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Sea Sparkle",
      titleHindi: "सी स्पार्कल",
      intro: "The sea sparkle is a spectacular ecological phenomenon caused by blooms of bioluminescent algae in coastal bays.",
      details: "This natural event results in waves glowing bright blue when hitting the shore, which can be observed primarily in warm bays. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that millions of cells flash blue when physically disturbed by wave motion. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 36,
    plant: {
      title: "Sunflower",
      titleHindi: "सूरजमुखी",
      intro: "Known scientifically as Helianthus annuus, the sunflower is a fascinating plant adapted to open fields.",
      details: "The sunflower features large heart-shaped leaves and produces oil-rich black seeds. It plays a crucial ecological role in its native open fields, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it young flowers track the sun daily from east to west. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Wild Yak",
      titleHindi: "जंगली याक",
      intro: "The wild yak (Bos mutus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the wild yak is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the wild yak is that possesses a thick double coat and high red blood cells to survive freezing summits. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Hydra",
      titleHindi: "हाइड्रा",
      intro: "The hydra (Hydra vulgaris) is a microscopic or simple organism classified under the cnidaria kingdom.",
      details: "Thriving in freshwater ponds, the hydra plays a vital role in predation within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it exhibits no signs of biological aging, regenerating complete body parts. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Frost Flowers",
      titleHindi: "बर्फ के फूल",
      intro: "The frost flowers is a spectacular ice phenomenon caused by water vapor freezing on thin ice in quiet air.",
      details: "This natural event results in ice crystals growing into delicate flower shapes, which can be observed primarily in frozen sea ice. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that crystals grow into complex shapes due to high salinity on ice surface. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 37,
    plant: {
      title: "Tulip",
      titleHindi: "ट्यूलिप",
      intro: "Known scientifically as Tulipa gesneriana, the tulip is a fascinating plant adapted to temperate valleys.",
      details: "The tulip features fleshy bluish-green leaves and produces three-valved seed capsules. It plays a crucial ecological role in its native temperate valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it bulbs require winter cold to trigger spring blooming. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Tibetan Antelope",
      titleHindi: "चिरू",
      intro: "The tibetan antelope (Pantholops hodgsonii) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the tibetan antelope is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the tibetan antelope is that produces the finest wool (shahtoosh) to survive high Himalayan winds. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Planarian Flatworm",
      titleHindi: "प्लेनेरियन",
      intro: "The planarian flatworm (Schmidtea mediterranea) is a microscopic or simple organism classified under the flatworms kingdom.",
      details: "Thriving in freshwater streams, the planarian flatworm plays a vital role in predation within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it can regenerate an entire body, including a brain, from a tiny slice. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Penitentes",
      titleHindi: "पेनिटेंटेस",
      intro: "The penitentes is a spectacular ice phenomenon caused by sublimation of snow under intense dry sunlight.",
      details: "This natural event results in tall spikes of hard snow pointing toward the sun, which can be observed primarily in high Andes peaks. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that sunlight evaporates snow directly into gas, leaving sharp stone-like ice towers. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 38,
    plant: {
      title: "Daffodil",
      titleHindi: "नरगिस",
      intro: "Known scientifically as Narcissus pseudonarcissus, the daffodil is a fascinating plant adapted to woodland edges.",
      details: "The daffodil features strap-like green leaves and produces round seed capsules. It plays a crucial ecological role in its native woodland edges, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it bulbs contain toxic lycorine preventing rodent damage. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Alpine Ibex",
      titleHindi: "आइबेक्स",
      intro: "The alpine ibex (Capra ibex) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the alpine ibex is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the alpine ibex is that climbs near-vertical stone dam walls to lick minerals from the concrete. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Rotifers",
      titleHindi: "रॉटिफ़र",
      intro: "The rotifers (Rotifera) is a microscopic or simple organism classified under the micro-animals kingdom.",
      details: "Thriving in freshwater pools, the rotifers plays a vital role in planktonic filtration within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it uses a wheel-like ring of beating cilia to draw in organic food. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Ice Discs",
      titleHindi: "बर्फ के चक्र",
      intro: "The ice discs is a spectacular ice phenomenon caused by slow rotational currents under river ice.",
      details: "This natural event results in a perfectly circular disc of ice spinning in a river, which can be observed primarily in freezing streams. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that rotational shear cuts the ice sheet into a circle, polishing the edges. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 39,
    plant: {
      title: "Saffron Crocus",
      titleHindi: "केसर",
      intro: "Known scientifically as Crocus sativus, the saffron crocus is a fascinating plant adapted to sunny valleys.",
      details: "The saffron crocus features narrow grass-like leaves and produces sterile seedless capsules. It plays a crucial ecological role in its native sunny valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it stigmas must be hand-plucked at dawn before wilting. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Markhor",
      titleHindi: "मारखोर",
      intro: "The markhor (Capra falconeri) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the markhor is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the markhor is that males grow spectacular flared spiral horns up to five feet long. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Volvox Algae",
      titleHindi: "वॉल्वॉक्स",
      intro: "The volvox algae (Volvox carteri) is a microscopic or simple organism classified under the green algae kingdom.",
      details: "Thriving in still ponds, the volvox algae plays a vital role in colonial photosynthesis within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it forms hollow spheres of thousands of cells coordinating flagella to roll. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Glacial Calving",
      titleHindi: "ग्लेशियर टूटना",
      intro: "The glacial calving is a spectacular glacial phenomenon caused by meltwater cracks splitting ice shelves.",
      details: "This natural event results in massive chunks of ice collapsing into the ocean, which can be observed primarily in polar fjords. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that collapsing ice generates minor tsunamis and loud thunder-like sounds. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 40,
    plant: {
      title: "Aloe Vera",
      titleHindi: "घृतकुमारी",
      intro: "Known scientifically as Aloe vera, the aloe vera is a fascinating plant adapted to arid scrublands.",
      details: "The aloe vera features thick fleshy leaves and produces dry seed capsules. It plays a crucial ecological role in its native arid scrublands, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it gel contains polysaccharides healing wounds in minutes. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Blue Sheep",
      titleHindi: "भरल",
      intro: "The blue sheep (Pseudois nayaur) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the blue sheep is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the blue sheep is that remains completely still when threatened, blending into grey mountain shale. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Slime Mold",
      titleHindi: "स्लाइम मोल्ड",
      intro: "The slime mold (Physarum polycephalum) is a microscopic or simple organism classified under the amoebozoa kingdom.",
      details: "Thriving in decaying logs, the slime mold plays a vital role in decomposition within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it is a single giant multi-nucleate cell that solves maze paths for food. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Mud Volcano",
      titleHindi: "मिट्टी का ज्वालामुखी",
      intro: "The mud volcano is a spectacular geological phenomenon caused by subterranean natural gas escaping through mud.",
      details: "This natural event results in a cone-shaped hill erupting cold wet mud, which can be observed primarily in active fault lines. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that gas pressure forces mud upward, creating bubbling cold mud pools. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 41,
    plant: {
      title: "Ginseng",
      titleHindi: "जिंसेंग",
      intro: "Known scientifically as Panax ginseng, the ginseng is a fascinating plant adapted to mountain forests.",
      details: "The ginseng features five-leaflet palmate leaves and produces red berry-like fruits. It plays a crucial ecological role in its native mountain forests, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it root grows over decades accumulating ginsenosides. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Red Deer",
      titleHindi: "लाल हिरण",
      intro: "The red deer (Cervus elaphus) is a specialized member of the mammals group, active during crepuscular hours.",
      details: "As a prominent herbivore, the red deer is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the red deer is that males roar during autumn mating seasons, an acoustic display carrying miles. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Bread Mold",
      titleHindi: "रोटी का कवक",
      intro: "The bread mold (Rhizopus stolonifer) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in stale bread, the bread mold plays a vital role in decomposition within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it grows rapidly over bread, releasing enzymes that break down starch. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Geyser Eruption",
      titleHindi: "गीजर विस्फोट",
      intro: "The geyser eruption is a spectacular geological phenomenon caused by underground water heated by magma under pressure.",
      details: "This natural event results in a towering column of boiling water and steam, which can be observed primarily in volcanic basins. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that superheated water flashes into steam, launching water 100 feet high. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 42,
    plant: {
      title: "Turmeric",
      titleHindi: "हल्दी",
      intro: "Known scientifically as Curcuma longa, the turmeric is a fascinating plant adapted to tropical monsoon valleys.",
      details: "The turmeric features large broad green leaves and produces woody capsules. It plays a crucial ecological role in its native tropical monsoon valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it rhizome accumulates curcumin protecting it from fungi. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Moose",
      titleHindi: "मूस",
      intro: "The moose (Alces alces) is a specialized member of the mammals group, active during crepuscular hours.",
      details: "As a prominent herbivore, the moose is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the moose is that stands as the largest deer species, walking easily through deep winter snows. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Black Mold",
      titleHindi: "काला कवक",
      intro: "The black mold (Aspergillus niger) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in damp walls, the black mold plays a vital role in decomposition within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it produces citric acid widely used in modern food and beverage industries. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Surtseyan Eruption",
      titleHindi: "सर्टसियन विस्फोट",
      intro: "The surtseyan eruption is a spectacular volcanic phenomenon caused by shallow submarine magma exploding with seawater.",
      details: "This natural event results in cinders and steam launching out of the ocean, which can be observed primarily in shallow coastal seas. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that rapid steam expansion fractures magma into black ash and columns of steam. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 43,
    plant: {
      title: "Ginger",
      titleHindi: "अदरक",
      intro: "Known scientifically as Zingiber officinale, the ginger is a fascinating plant adapted to moist tropical valleys.",
      details: "The ginger features narrow reed-like leaves and produces three-valved capsules. It plays a crucial ecological role in its native moist tropical valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it rhizome contains gingerols deterring root pests. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Caribou",
      titleHindi: "रिनडियर",
      intro: "The caribou (Rangifer tarandus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the caribou is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the caribou is that undertakes the longest land migration of any mammal, traveling 3,000 miles. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Candida Yeast",
      titleHindi: "कैंडिडा",
      intro: "The candida yeast (Candida albicans) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in mucosal surfaces, the candida yeast plays a vital role in commensal & pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it lives harmlessly on human skin but can cause infections if immune drops. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Pyroclastic Flow",
      titleHindi: "पायरोक्लास्टिक प्रवाह",
      intro: "The pyroclastic flow is a spectacular volcanic phenomenon caused by collapse of a volcanic eruption column.",
      details: "This natural event results in a fast-moving wall of hot gas and ash, which can be observed primarily in volcanic slopes. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that rolls down slopes at 400 miles per hour, destroying everything in its path. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 44,
    plant: {
      title: "Cinnamon Tree",
      titleHindi: "दालचीनी",
      intro: "Known scientifically as Cinnamomum verum, the cinnamon tree is a fascinating plant adapted to rainforest valleys.",
      details: "The cinnamon tree features leathery oval leaves and produces black berry fruits. It plays a crucial ecological role in its native rainforest valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it bark contains cinnamaldehyde protecting it from decay. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Rocky Mountain Elk",
      titleHindi: "एल्क",
      intro: "The rocky mountain elk (Cervus canadensis) is a specialized member of the mammals group, active during crepuscular hours.",
      details: "As a prominent herbivore, the rocky mountain elk is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the rocky mountain elk is that grows massive antlers that are shed and regrown every year within months. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Trichoderma Fungus",
      titleHindi: "ट्राइकोडर्मा",
      intro: "The trichoderma fungus (Trichoderma harzianum) is a microscopic or simple organism classified under the fungi kingdom.",
      details: "Thriving in agricultural soil, the trichoderma fungus plays a vital role in biocontrol agent within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it attacks and digests plant pathogens, protecting roots from decay. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Lahar",
      titleHindi: "लाहार",
      intro: "The lahar is a spectacular geological phenomenon caused by volcanic ash mixing with heavy rain or melted ice.",
      details: "This natural event results in a fast-flowing concrete-like mudflow, which can be observed primarily in volcanic valleys. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that mudflow sweeps down valleys, burying entire towns under thick mud. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 45,
    plant: {
      title: "Clove Tree",
      titleHindi: "लौंग का पेड़",
      intro: "Known scientifically as Syzygium aromaticum, the clove tree is a fascinating plant adapted to coastal rainforests.",
      details: "The clove tree features glossy aromatic leaves and produces red fleshy drupe fruits. It plays a crucial ecological role in its native coastal rainforests, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it unopened buds contain eugenol acting as antiseptic. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "American Bison",
      titleHindi: "अमेरिकी बाइसन",
      intro: "The american bison (Bison bison) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the american bison is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the american bison is that survives winter blizzards by using its massive head as a snowplow for grass. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Mycoplasma",
      titleHindi: "माइकोप्लाज्मा",
      intro: "The mycoplasma (Mycoplasma genitalium) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in mucosal cells, the mycoplasma plays a vital role in pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it is one of the smallest free-living bacteria, lacking a cell wall. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Earthquake Liquefaction",
      titleHindi: "द्रवीकरण",
      intro: "The earthquake liquefaction is a spectacular geological phenomenon caused by seismic shaking increasing pressure in saturated soil.",
      details: "This natural event results in solid ground temporarily behaving like quicksand, which can be observed primarily in river deltas. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that causes buildings to sink or tilt during heavy seismic events. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 46,
    plant: {
      title: "Black Pepper",
      titleHindi: "काली मिर्च",
      intro: "Known scientifically as Piper nigrum, the black pepper is a fascinating plant adapted to rainforest understory.",
      details: "The black pepper features heart-shaped dark-green leaves and produces small round green berries. It plays a crucial ecological role in its native rainforest understory, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it berries contain piperine deterring insect pests. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Gray Kangaroo",
      titleHindi: "ग्रे कंगारू",
      intro: "The gray kangaroo (Macropus giganteus) is a specialized member of the mammals group, active during crepuscular hours.",
      details: "As a prominent herbivore, the gray kangaroo is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the gray kangaroo is that uses hop movement that actually stores energy in tendons, reducing fatigue. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Hay Bacillus",
      titleHindi: "बैसिलस सबटिलिस",
      intro: "The hay bacillus (Bacillus subtilis) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in soil and straw, the hay bacillus plays a vital role in decomposition within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it produces resilient endospores that survive heat, drought, and chemicals. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Sinkhole Formation",
      titleHindi: "सिंकहोल",
      intro: "The sinkhole formation is a spectacular geological phenomenon caused by acidic groundwater dissolving limestone bedrock.",
      details: "This natural event results in sudden collapse of the ground surface, which can be observed primarily in karst landscapes. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that underground caverns collapse, swallowing roads and homes within hours. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 47,
    plant: {
      title: "Cardamom Plant",
      titleHindi: "इलायची",
      intro: "Known scientifically as Elettaria cardamomum, the cardamom plant is a fascinating plant adapted to rainforest shade.",
      details: "The cardamom plant features large lance-shaped leaves and produces oval ribbed seed pods. It plays a crucial ecological role in its native rainforest shade, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it pods grow on creeping shoots along the damp forest floor. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Koala",
      titleHindi: "कोआला",
      intro: "The koala (Phascolarctos cinereus) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent herbivore, the koala is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the koala is that lives entirely on eucalyptus leaves, sleeping 20 hours a day to digest toxins. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Bt Bacteria",
      titleHindi: "बीटी जीवाणु",
      intro: "The bt bacteria (Bacillus thuringiensis) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in damp soil, the bt bacteria plays a vital role in biopesticide producer within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it produces crystal proteins toxic to insect pests but safe for animals. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Desert Rose",
      titleHindi: "रेगिस्तानी गुलाब",
      intro: "The desert rose is a spectacular geological phenomenon caused by evaporation of water in sand containing gypsum.",
      details: "This natural event results in rosette-like crystal clusters of gypsum and sand, which can be observed primarily in dry salt flats. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that crystals grow in flat plates that intersect like rose petals in sand. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 48,
    plant: {
      title: "Tea Bush",
      titleHindi: "चाय की झाड़ी",
      intro: "Known scientifically as Camellia sinensis, the tea bush is a fascinating plant adapted to mountain slopes.",
      details: "The tea bush features serrated glossy leaves and produces hard woody seed capsules. It plays a crucial ecological role in its native mountain slopes, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it leaves produce caffeine acting as natural insecticide. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Duck-Billed Platypus",
      titleHindi: "प्लैटिपस",
      intro: "The duck-billed platypus (Ornithorhynchus anatinus) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent carnivore, the duck-billed platypus is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the duck-billed platypus is that lays eggs like a bird but feeds its young with milk like a mammal. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Pseudomonas",
      titleHindi: "स्यूडोमोनास",
      intro: "The pseudomonas (Pseudomonas aeruginosa) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in damp soil and water, the pseudomonas plays a vital role in decomposition within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it can metabolize complex organic pollutants, used in oil spill cleanup. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Sailing Stones",
      titleHindi: "चलते पत्थर",
      intro: "The sailing stones is a spectacular geophysical phenomenon caused by thin ice sheets moving stones over mud.",
      details: "This natural event results in stones leaving long trails in a dry lake bed, which can be observed primarily in Death Valley playa. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that winds push thin ice sheets holding stones over slick mud at night. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 49,
    plant: {
      title: "Coffee Shrub",
      titleHindi: "कॉफी का पौधा",
      intro: "Known scientifically as Coffea arabica, the coffee shrub is a fascinating plant adapted to volcanic highlands.",
      details: "The coffee shrub features glossy oval leaves and produces red cherries with beans. It plays a crucial ecological role in its native volcanic highlands, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it seeds contain caffeine paralyzing insect predators. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Short-Beaked Echidna",
      titleHindi: "एकिडना",
      intro: "The short-beaked echidna (Tachyglossus aculeatus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent insectivore, the short-beaked echidna is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the short-beaked echidna is that uses a sticky tongue to eat termites and lays eggs in its pouch. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Bioluminescent Bacteria",
      titleHindi: "चमकदार बैक्टीरिया",
      intro: "The bioluminescent bacteria (Vibrio fischeri) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in squid organs, the bioluminescent bacteria plays a vital role in symbiosis within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it produces light in exchange for nutrients inside the bobtail squid. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Columnar Basalt",
      titleHindi: "स्तंभाकार बेसाल्ट",
      intro: "The columnar basalt is a spectacular geological phenomenon caused by slow contraction of cooling thick lava flows.",
      details: "This natural event results in hexagonal stone pillars arranged like giant steps, which can be observed primarily in volcanic cliffs. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that cooling lava cracks geometrically, creating thousands of vertical columns. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 50,
    plant: {
      title: "Cocoa Tree",
      titleHindi: "कोको का पेड़",
      intro: "Known scientifically as Theobroma cacao, the cocoa tree is a fascinating plant adapted to rainforest shade.",
      details: "The cocoa tree features large oblong green leaves and produces woody ribbed seed pods. It plays a crucial ecological role in its native rainforest shade, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it flowers grow directly on the main trunk (cauliflory). This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Wombat",
      titleHindi: "वोम्बैट",
      intro: "The wombat (Vombatidae) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent herbivore, the wombat is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the wombat is that produces cube-shaped droppings that prevent them from rolling off rocks. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Photobacterium",
      titleHindi: "फोटोबैक्टीरियम",
      intro: "The photobacterium (Photobacterium phosphoreum) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in deep sea fish, the photobacterium plays a vital role in symbiosis within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it populates the light organs of deep-sea fish, facilitating communication. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Cenote Formation",
      titleHindi: "सेनोट",
      intro: "The cenote formation is a spectacular geological phenomenon caused by collapse of cave roofs exposing groundwater.",
      details: "This natural event results in deep water-filled sinkholes in limestone, which can be observed primarily in Yucatán peninsula. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that served as freshwater sources and sacred portals for the Maya. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 51,
    plant: {
      title: "Rubber Tree",
      titleHindi: "रबर का पेड़",
      intro: "Known scientifically as Hevea brasiliensis, the rubber tree is a fascinating plant adapted to floodplain forests.",
      details: "The rubber tree features three-leaflet compound leaves and produces hard woody capsules. It plays a crucial ecological role in its native floodplain forests, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it bark produces sticky latex sealing wounds and trapping beetles. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Tasmanian Devil",
      titleHindi: "तस्मानियन डेविल",
      intro: "The tasmanian devil (Sarcophilus harrisii) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent carnivore, the tasmanian devil is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the tasmanian devil is that produces a screeching howl and possesses a bite matching a dog twice its size. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Noctiluca Scintillans",
      titleHindi: "समुद्री चमक",
      intro: "The noctiluca scintillans (Noctiluca scintillans) is a microscopic or simple organism classified under the dinoflagellates kingdom.",
      details: "Thriving in coastal oceans, the noctiluca scintillans plays a vital role in bioluminescence within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it creates glowing red tides by day and bright blue waves by night. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Karst Topography",
      titleHindi: "कार्स्ट स्थलाकृति",
      intro: "The karst topography is a spectacular geological phenomenon caused by dissolution of soluble rocks like limestone.",
      details: "This natural event results in landscapes of caves, sinkholes, and towers, which can be observed primarily in soluble rock basins. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that water carves spectacular vertical towers and underground river caves. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 52,
    plant: {
      title: "Cotton Plant",
      titleHindi: "कपास",
      intro: "Known scientifically as Gossypium hirsutum, the cotton plant is a fascinating plant adapted to sunny plains.",
      details: "The cotton plant features lobed green leaves and produces bolls with seeds in white fibers. It plays a crucial ecological role in its native sunny plains, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it cellulose fibers catch wind to disperse seeds. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Sugar Glider",
      titleHindi: "शुगर ग्लाइडर",
      intro: "The sugar glider (Petaurus breviceps) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent omnivore, the sugar glider is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the sugar glider is that glides up to 150 feet through the air using skin membranes between limbs. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Pfiesteria",
      titleHindi: "फाइस्टीरिया",
      intro: "The pfiesteria (Pfiesteria piscicida) is a microscopic or simple organism classified under the dinoflagellates kingdom.",
      details: "Thriving in estuaries, the pfiesteria plays a vital role in algal toxin producer within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it releases toxins that stun fish, feeding on their decaying tissue. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Fossilization",
      titleHindi: "जीवाश्मीकरण",
      intro: "The fossilization is a spectacular geological phenomenon caused by mineral-rich water replacing organic structures.",
      details: "This natural event results in bone or wood converted into solid stone, which can be observed primarily in sedimentary basins. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that silica and calcite replace cells, preserving structures for millions of years. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 53,
    plant: {
      title: "Sugarcane",
      titleHindi: "गन्ना",
      intro: "Known scientifically as Saccharum officinarum, the sugarcane is a fascinating plant adapted to river valleys.",
      details: "The sugarcane features long sharp-edged leaves and produces feathery silver flower tassels. It plays a crucial ecological role in its native river valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it stalks store sucrose to fuel rapid regrowth after fires. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Virginia Opossum",
      titleHindi: "ओपोसम",
      intro: "The virginia opossum (Didelphis virginiana) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent omnivore, the virginia opossum is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the virginia opossum is that fakes death when threatened (playing possum) by releasing a foul odor. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Red Tide Algae",
      titleHindi: "लाल ज्वार शैवाल",
      intro: "The red tide algae (Alexandrium catenella) is a microscopic or simple organism classified under the dinoflagellates kingdom.",
      details: "Thriving in coastal waters, the red tide algae plays a vital role in algal toxin producer within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it accumulates in shellfish, causing paralytic shellfish poisoning in humans. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Coalification",
      titleHindi: "कोयलाकरण",
      intro: "The coalification is a spectacular geological phenomenon caused by heat and pressure on buried swamp forests.",
      details: "This natural event results in peat converted into solid black coal sheets, which can be observed primarily in sedimentary basins. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that carbon is concentrated as volatile gases are squeezed out over millions of years. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 54,
    plant: {
      title: "Wheat Grass",
      titleHindi: "गेहूं की घास",
      intro: "Known scientifically as Triticum aestivum, the wheat grass is a fascinating plant adapted to temperate grasslands.",
      details: "The wheat grass features slender hollow green stalks and produces dense grain spikes. It plays a crucial ecological role in its native temperate grasslands, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it accumulates chlorophyll protecting it from cold damage. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Eurasian Beaver",
      titleHindi: "ऊदबिलाव",
      intro: "The eurasian beaver (Castor fiber) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent herbivore, the eurasian beaver is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the eurasian beaver is that fells large trees to build dams, engineering complete wetland ecosystems. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Florida Red Tide Algae",
      titleHindi: "फ्लोरिडा लाल ज्वार",
      intro: "The florida red tide algae (Karenia brevis) is a microscopic or simple organism classified under the dinoflagellates kingdom.",
      details: "Thriving in Gulf of Mexico, the florida red tide algae plays a vital role in algal toxin producer within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it releases brevetoxins that kill marine life and irritate human lungs. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Amber Preservation",
      titleHindi: "एम्बर संरक्षण",
      intro: "The amber preservation is a spectacular geological phenomenon caused by fossilization of sticky tree resin.",
      details: "This natural event results in prehistoric insects preserved in golden resin, which can be observed primarily in ancient forests. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that resin seals out oxygen and bacteria, preserving delicate wings and cells. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 55,
    plant: {
      title: "Rice Plant",
      titleHindi: "धान",
      intro: "Known scientifically as Oryza sativa, the rice plant is a fascinating plant adapted to waterlogged plains.",
      details: "The rice plant features narrow grass leaves on hollow stems and produces drooping grain panicles. It plays a crucial ecological role in its native waterlogged plains, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it hollow stems carry oxygen down to submerged roots. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Capybara",
      titleHindi: "कैपीबारा",
      intro: "The capybara (Hydrochoerus hydrochaeris) is a specialized member of the mammals group, active during crepuscular hours.",
      details: "As a prominent herbivore, the capybara is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the capybara is that stands as the largest rodent, swimming easily with webbed feet. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Giardia",
      titleHindi: "गियार्डिया",
      intro: "The giardia (Giardia lamblia) is a microscopic or simple organism classified under the protozoa kingdom.",
      details: "Thriving in contaminated water, the giardia plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it attaches to human small intestines, causing severe waterborne illness. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Stalactite Growth",
      titleHindi: "स्टैलेक्टाइट",
      intro: "The stalactite growth is a spectacular geological phenomenon caused by calcium carbonate depositing from dripping water.",
      details: "This natural event results in stone icicles hanging from cave ceilings, which can be observed primarily in limestone caves. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that dripping water leaves behind rings of calcite, growing a millimeter a year. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 56,
    plant: {
      title: "Maize",
      titleHindi: "मक्का",
      intro: "Known scientifically as Zea mays, the maize is a fascinating plant adapted to sunny valleys.",
      details: "The maize features broad wrapping leaves and produces cobs wrapped in husks. It plays a crucial ecological role in its native sunny valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it uses C4 pathway producing sugars under intense sunlight. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Indian Porcupine",
      titleHindi: "शाही",
      intro: "The indian porcupine (Hystrix indica) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent herbivore, the indian porcupine is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the indian porcupine is that rattles its hollow tail quills to warn potential predators before charging. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Sleeping Sickness Parasite",
      titleHindi: "ट्रिपैनोसोमा",
      intro: "The sleeping sickness parasite (Trypanosoma brucei) is a microscopic or simple organism classified under the protozoa kingdom.",
      details: "Thriving in blood and brain, the sleeping sickness parasite plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it transmitted by tsetse flies, invading the central nervous system. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Cave Pearls",
      titleHindi: "गुफा मोती",
      intro: "The cave pearls is a spectacular geological phenomenon caused by calcite depositing on sand in dripping pools.",
      details: "This natural event results in smooth round stone spheres in cave pools, which can be observed primarily in limestone caves. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that dripping water rolls the sand grains, coating them evenly in calcite. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 57,
    plant: {
      title: "Barley",
      titleHindi: "जौ",
      intro: "Known scientifically as Hordeum vulgare, the barley is a fascinating plant adapted to cold plains.",
      details: "The barley features narrow bluish-green leaves and produces bearded grain spikes. It plays a crucial ecological role in its native cold plains, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it highly tolerant of soil salinity and cold temperatures. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Giant Anteater",
      titleHindi: "चींटीखोर",
      intro: "The giant anteater (Myrmecophaga tridactyla) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent insectivore, the giant anteater is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the giant anteater is that lacks teeth but eats up to 30,000 ants daily using a two-foot tongue. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Kala-azar Parasite",
      titleHindi: "लीशमानिया",
      intro: "The kala-azar parasite (Leishmania donovani) is a microscopic or simple organism classified under the protozoa kingdom.",
      details: "Thriving in immune cells, the kala-azar parasite plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it transmitted by sandflies, destroying spleen and liver tissue. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Salt Flat Reflection",
      titleHindi: "नमक के मैदान का प्रतिबिंब",
      intro: "The salt flat reflection is a spectacular optical phenomenon caused by thin layer of water sitting on flat salt crust.",
      details: "This natural event results in a giant mirror covering the landscape, which can be observed primarily in Salar de Uyuni. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that water sits on flat salt, reflecting the sky with absolute precision. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 58,
    plant: {
      title: "Rye",
      titleHindi: "राई",
      intro: "Known scientifically as Secale cereale, the rye is a fascinating plant adapted to dry plains.",
      details: "The rye features narrow grey-green leaves and produces slender drooping grain spikes. It plays a crucial ecological role in its native dry plains, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it roots grow six feet deep drawing nutrients from poor sand. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Three-Toed Sloth",
      titleHindi: "स्लॉथ",
      intro: "The three-toed sloth (Bradypus tridactylus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the three-toed sloth is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the three-toed sloth is that has a metabolic rate so slow that it takes a month to digest a leaf. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Dysentery Amoeba",
      titleHindi: "पेचिश अमीबा",
      intro: "The dysentery amoeba (Entamoeba histolytica) is a microscopic or simple organism classified under the protozoa kingdom.",
      details: "Thriving in large intestine, the dysentery amoeba plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it invades intestinal walls, causing severe dysentery and liver abscesses. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Desert Varnish",
      titleHindi: "रेगिस्तानी वार्निश",
      intro: "The desert varnish is a spectacular geochemical phenomenon caused by bacteria oxidizing manganese on rock surfaces.",
      details: "This natural event results in a glossy black coating on desert rocks, which can be observed primarily in arid canyons. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that microbes concentrate manganese from dust, creating a dark shiny surface. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 59,
    plant: {
      title: "Oats",
      titleHindi: "जई",
      intro: "Known scientifically as Avena sativa, the oats is a fascinating plant adapted to cool valleys.",
      details: "The oats features flat broad leaves and produces loose branching grain panicles. It plays a crucial ecological role in its native cool valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it produces avenanthramides protecting grain from turning rancid. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Nine-Banded Armadillo",
      titleHindi: "आर्माडिलो",
      intro: "The nine-banded armadillo (Dasypus novemcinctus) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent insectivore, the nine-banded armadillo is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the nine-banded armadillo is that possesses bony armor plates on its back and always gives birth to quadruplets. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Toxoplasma",
      titleHindi: "टॉक्सोप्लाज्मा",
      intro: "The toxoplasma (Toxoplasma gondii) is a microscopic or simple organism classified under the protozoa kingdom.",
      details: "Thriving in feline guts, the toxoplasma plays a vital role in animal pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it infects rodent brains, removing fear of cats to complete lifecycle. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Singing Sands",
      titleHindi: "गाती रेत",
      intro: "The singing sands is a spectacular acoustic phenomenon caused by friction between sand grains sliding down dunes.",
      details: "This natural event results in a low humming sound produced by sand dunes, which can be observed primarily in desert dunes. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that sand grains of uniform size slide together, generating acoustic waves. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 60,
    plant: {
      title: "Millet",
      titleHindi: "बाजरा",
      intro: "Known scientifically as Pennisetum glaucum, the millet is a fascinating plant adapted to arid plains.",
      details: "The millet features narrow rough leaves and produces dense cylindrical grain spikes. It plays a crucial ecological role in its native arid plains, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it short growing cycle of 60 days requiring minimal water. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Indian Pangolin",
      titleHindi: "वज्रशल्क",
      intro: "The indian pangolin (Manis crassicaudata) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent insectivore, the indian pangolin is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the indian pangolin is that rolls into an impenetrable ball protected by sharp keratin scales. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Cryptosporidium",
      titleHindi: "क्रिप्टोस्पोरिडियम",
      intro: "The cryptosporidium (Cryptosporidium parvum) is a microscopic or simple organism classified under the protozoa kingdom.",
      details: "Thriving in drinking water, the cryptosporidium plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it produces chlorine-resistant oocysts that cause waterborne diarrhea. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Superbloom",
      titleHindi: "सुपरब्लूम",
      intro: "The superbloom is a spectacular ecological phenomenon caused by heavy rains germinating dormant desert seeds.",
      details: "This natural event results in desert valleys carpeted in millions of flowers, which can be observed primarily in arid valleys. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that seeds remain dormant for years, blooming simultaneously after winter rain. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 61,
    plant: {
      title: "Sorghum",
      titleHindi: "ज्वार",
      intro: "Known scientifically as Sorghum bicolor, the sorghum is a fascinating plant adapted to semi-arid plains.",
      details: "The sorghum features broad waxy leaves and produces dense round grain clusters. It plays a crucial ecological role in its native semi-arid plains, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it leaves coated in waxy cuticle preventing water loss. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Aardvark",
      titleHindi: "आर्डवार्क",
      intro: "The aardvark (Orycteropus afer) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent insectivore, the aardvark is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the aardvark is that digs deep burrows within minutes using strong clawed shovel-like feet. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Pyrocystis",
      titleHindi: "पायरोसिस्टिस",
      intro: "The pyrocystis (Pyrocystis fusiformis) is a microscopic or simple organism classified under the dinoflagellates kingdom.",
      details: "Thriving in tropical oceans, the pyrocystis plays a vital role in bioluminescence within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it star-shaped single-celled algae that flash bright blue at night. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Crown Shyness",
      titleHindi: "क्राउन शाइनेस",
      intro: "The crown shyness is a spectacular ecological phenomenon caused by branches of neighboring trees avoiding contact.",
      details: "This natural event results in a canopy featuring clear channels of light between trees, which can be observed primarily in canopy forests. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that prevents insect spread and protects buds from wind damage. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 62,
    plant: {
      title: "Quinoa",
      titleHindi: "क्विनोआ",
      intro: "Known scientifically as Chenopodium quinoa, the quinoa is a fascinating plant adapted to high mountains.",
      details: "The quinoa features lobed green leaves and produces clusters of tiny seeds. It plays a crucial ecological role in its native high mountains, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it seeds coated in bitter saponin deterring herbivores. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Fennec Fox",
      titleHindi: "रेगिस्तानी लोमड़ी",
      intro: "The fennec fox (Vulpes zerda) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent omnivore, the fennec fox is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the fennec fox is that its massive ears dissipate heat and locate prey burrowed under sand. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Red Sea Algae",
      titleHindi: "लाल सागर शैवाल",
      intro: "The red sea algae (Trichodesmium erythraeum) is a microscopic or simple organism classified under the cyanobacteria kingdom.",
      details: "Thriving in tropical oceans, the red sea algae plays a vital role in nitrogen fixation within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it blooms color the surface of the Red Sea a reddish-brown hue. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Serotiny",
      titleHindi: "अग्नि अनुकूलन",
      intro: "The serotiny is a spectacular ecological phenomenon caused by intense heat of forest fires opening cones.",
      details: "This natural event results in simultaneous release of seeds after fire, which can be observed primarily in conifer forests. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that cones are sealed with resin that melts only during forest fires. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 63,
    plant: {
      title: "Amaranth",
      titleHindi: "चौलाई",
      intro: "Known scientifically as Amaranthus cruentus, the amaranth is a fascinating plant adapted to sunny valleys.",
      details: "The amaranth features broad green leaves and produces massive pink seed tassels. It plays a crucial ecological role in its native sunny valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it produces seeds containing high concentrations of lysine. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Desert Jerboa",
      titleHindi: "जर्बोआ",
      intro: "The desert jerboa (Dipodidae) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent herbivore, the desert jerboa is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the desert jerboa is that leaps up to ten feet horizontally to escape predators in sand deserts. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Sooty Mold Algae",
      titleHindi: "छत का शैवाल",
      intro: "The sooty mold algae (Gloeocapsa magma) is a microscopic or simple organism classified under the cyanobacteria kingdom.",
      details: "Thriving in shingle roofs, the sooty mold algae plays a vital role in pioneer species within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it produces dark protective sheath, causing black stains on roof shingles. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Starling Murmuration",
      titleHindi: "स्टार्लिंग मर्मुरेशन",
      intro: "The starling murmuration is a spectacular zoological phenomenon caused by thousands of birds coordinating flight patterns.",
      details: "This natural event results in dancing fluid shapes in the evening sky, which can be observed primarily in open fields. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that each bird responds to its seven neighbors, creating a self-organizing shape. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 64,
    plant: {
      title: "Male Fern",
      titleHindi: "फर्न",
      intro: "Known scientifically as Dryopteris filix-mas, the male fern is a fascinating plant adapted to shaded woodlands.",
      details: "The male fern features feather-like divided fronds and produces spore cases under leaves. It plays a crucial ecological role in its native shaded woodlands, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it reproduces via microscopic spores carried by wind. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Kangaroo Rat",
      titleHindi: "कंगारू चूहा",
      intro: "The kangaroo rat (Dipodomys) is a specialized member of the mammals group, active during nocturnal hours.",
      details: "As a prominent herbivore, the kangaroo rat is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the kangaroo rat is that can survive its entire life without drinking water, utilizing metabolic water. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Witches' Butter Algae",
      titleHindi: "नोस्टॉक",
      intro: "The witches' butter algae (Nostoc commune) is a microscopic or simple organism classified under the cyanobacteria kingdom.",
      details: "Thriving in damp gravel, the witches' butter algae plays a vital role in nitrogen fixation within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it looks like olive-green jelly when wet, surviving dehydration for years. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Salmon Run",
      titleHindi: "सामन माइग्रेशन",
      intro: "The salmon run is a spectacular zoological phenomenon caused by salmon migrating from ocean to mountain streams.",
      details: "This natural event results in thousands of fish jumping up rapids to spawn, which can be observed primarily in mountain rivers. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that salmon use magnetic fields and scent memory to locate their birth stream. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 65,
    plant: {
      title: "Sphagnum Moss",
      titleHindi: "दलदली काई",
      intro: "Known scientifically as Sphagnum, the sphagnum moss is a fascinating plant adapted to peat bogs.",
      details: "The sphagnum moss features microscopic green leaves and produces small capsule structures. It plays a crucial ecological role in its native peat bogs, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it holds up to twenty times its dry weight in water. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Emperor Penguin",
      titleHindi: "एम्परर पेंगुइन",
      intro: "The emperor penguin (Aptenodytes forsteri) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent carnivore, the emperor penguin is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the emperor penguin is that males incubate a single egg on their feet during the dark Antarctic winter. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Synechococcus",
      titleHindi: "सिनिकोकोकस",
      intro: "The synechococcus (Synechococcus) is a microscopic or simple organism classified under the cyanobacteria kingdom.",
      details: "Thriving in ocean surface, the synechococcus plays a vital role in photosynthesis within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it one of the most abundant marine organisms, producing significant oxygen. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Wildebeest Migration",
      titleHindi: "वाइल्डबीस्ट माइग्रेशन",
      intro: "The wildebeest migration is a spectacular zoological phenomenon caused by animals tracking seasonal rains for fresh grass.",
      details: "This natural event results in over a million wildebeest crossing rivers in Africa, which can be observed primarily in Serengeti plains. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that drives a massive ecological cycle of predators and soil fertilization. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 66,
    plant: {
      title: "Reindeer Lichen",
      titleHindi: "लाइकेन",
      intro: "Known scientifically as Cladonia rangiferina, the reindeer lichen is a fascinating plant adapted to arctic tundra.",
      details: "The reindeer lichen features branching coral-like structures and produces spore capsules. It plays a crucial ecological role in its native arctic tundra, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it symbiotic partnership between fungus and alga. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Wandering Albatross",
      titleHindi: "अल्बाट्रॉस",
      intro: "The wandering albatross (Diomedea exulans) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent carnivore, the wandering albatross is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the wandering albatross is that has an eleven-foot wingspan, gliding for miles without flapping wings. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Prochlorococcus",
      titleHindi: "प्रोक्लोरोकोकस",
      intro: "The prochlorococcus (Prochlorococcus marinus) is a microscopic or simple organism classified under the cyanobacteria kingdom.",
      details: "Thriving in deep ocean, the prochlorococcus plays a vital role in photosynthesis within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it is the smallest known photosynthetic organism, producing 20% of oxygen. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Monarch Migration",
      titleHindi: "तितली प्रवास",
      intro: "The monarch migration is a spectacular zoological phenomenon caused by butterflies traveling thousands of miles south.",
      details: "This natural event results in millions of orange butterflies covering forest trees, which can be observed primarily in Mexican pine forests. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that takes four generations to complete the round trip migration cycle. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 67,
    plant: {
      title: "Giant Kelp",
      titleHindi: "विशाल केल्प",
      intro: "Known scientifically as Macrocystis pyrifera, the giant kelp is a fascinating plant adapted to coastal oceans.",
      details: "The giant kelp features long yellow-brown blades and produces gas buoyancy bladders. It plays a crucial ecological role in its native coastal oceans, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it grow up to two feet a day utilizing gas-filled floats. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Bald Eagle",
      titleHindi: "गंजा ईगल",
      intro: "The bald eagle (Haliaeetus leucocephalus) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent carnivore, the bald eagle is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the bald eagle is that builds massive nests up to ten feet wide in tall forest trees. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Aquifex",
      titleHindi: "एक्विफेक्स",
      intro: "The aquifex (Aquifex aeolicus) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in hydrothermal vents, the aquifex plays a vital role in extreme survival within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it grows in underwater hot springs up to 95 degrees Celsius. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Mass Coral Spawning",
      titleHindi: "कोरल स्पॉनिंग",
      intro: "The mass coral spawning is a spectacular zoological phenomenon caused by corals releasing eggs and sperm simultaneously.",
      details: "This natural event results in rising clouds of pink cells in the ocean, which can be observed primarily in coral reefs. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that triggered by water temperature and the phases of the moon in spring. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 68,
    plant: {
      title: "Eelgrass",
      titleHindi: "समुद्री घास",
      intro: "Known scientifically as Zostera marina, the eelgrass is a fascinating plant adapted to shallow estuaries.",
      details: "The eelgrass features ribbon-like green leaves and produces underwater seed capsules. It plays a crucial ecological role in its native shallow estuaries, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it flowering plant adapted to live entirely submerged in sea. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Golden Eagle",
      titleHindi: "सुनहरा गरुड़",
      intro: "The golden eagle (Aquila chrysaetos) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent carnivore, the golden eagle is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the golden eagle is that dives at speeds up to 150 miles per hour to strike mountain prey. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Green Sulfur Bacteria",
      titleHindi: "हरा गंधक जीवाणु",
      intro: "The green sulfur bacteria (Chloroflexus aurantiacus) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in hot springs mats, the green sulfur bacteria plays a vital role in photosynthesis within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it uses light to oxidize sulfur compounds, growing in hot spring mats. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Synchronous Fireflies",
      titleHindi: "तुल्यकालिक जुगनू",
      intro: "The synchronous fireflies is a spectacular zoological phenomenon caused by thousands of male fireflies flashing in unison.",
      details: "This natural event results in entire forests flashing light simultaneously, which can be observed primarily in deciduous forests. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that males coordinate flashes to ensure females can identify the mating call. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 69,
    plant: {
      title: "Red Mangrove",
      titleHindi: "लाल मैंग्रोव",
      intro: "Known scientifically as Rhizophora mangle, the red mangrove is a fascinating plant adapted to coastal swamps.",
      details: "The red mangrove features thick oval glossy leaves and produces pencil-like floating seedlings. It plays a crucial ecological role in its native coastal swamps, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it stilt roots filter out 90% of salt from seawater. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Peregrine Falcon",
      titleHindi: "शाही बाज",
      intro: "The peregrine falcon (Falco peregrinus) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent carnivore, the peregrine falcon is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the peregrine falcon is that stands as the fastest animal on Earth, diving up to 240 miles per hour. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Helicobacter",
      titleHindi: "हेलिकोबैक्टर",
      intro: "The helicobacter (Helicobacter pylori) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in stomach lining, the helicobacter plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it survives stomach acid by secreting urease, causing peptic ulcers. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Cicada Emergence",
      titleHindi: "सिकाडा उद्भव",
      intro: "The cicada emergence is a spectacular zoological phenomenon caused by nymphs emerging from underground after decades.",
      details: "This natural event results in millions of insects buzzing in forest trees, which can be observed primarily in deciduous forests. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that broods emerge every 13 or 17 years, overwhelming predators with numbers. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 70,
    plant: {
      title: "Bald Cypress",
      titleHindi: "सरू का पेड़",
      intro: "Known scientifically as Taxodium distichum, the bald cypress is a fascinating plant adapted to swamps and bayous.",
      details: "The bald cypress features feather-like green needles and produces woody round cones. It plays a crucial ecological role in its native swamps and bayous, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it grows woody root projections called knees for stability. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Snowy Owl",
      titleHindi: "बर्फीला उल्लू",
      intro: "The snowy owl (Bubo scandiacus) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent carnivore, the snowy owl is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the snowy owl is that hunts in the Arctic tundra utilizing silent feathers and acute hearing. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Cholera Bacteria",
      titleHindi: "हैजा जीवाणु",
      intro: "The cholera bacteria (Vibrio cholerae) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in estuaries and guts, the cholera bacteria plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it secretes cholera toxin, causing rapid, severe dehydration in humans. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Locust Swarming",
      titleHindi: "टिड्डी दल",
      intro: "The locust swarming is a spectacular zoological phenomenon caused by crowding triggering serotonin and behavior shift.",
      details: "This natural event results in millions of locusts consuming vegetation in path, which can be observed primarily in arid plains. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that solitary grasshoppers change color and behavior, forming massive swarms. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 71,
    plant: {
      title: "Ginkgo Biloba",
      titleHindi: "जिन्कगो",
      intro: "Known scientifically as Ginkgo biloba, the ginkgo biloba is a fascinating plant adapted to valleys and temples.",
      details: "The ginkgo biloba features fan-shaped split leaves and produces fleshy seed-pods. It plays a crucial ecological role in its native valleys and temples, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it living fossil surviving unchanged for 270 million years. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Great Horned Owl",
      titleHindi: "सींग वाला उल्लू",
      intro: "The great horned owl (Bubo virginianus) is a specialized member of the birds group, active during nocturnal hours.",
      details: "As a prominent carnivore, the great horned owl is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the great horned owl is that hunts in deep forests using silent flight and high night vision. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Salmonella",
      titleHindi: "साल्मोनेला",
      intro: "The salmonella (Salmonella enterica) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in poultry and eggs, the salmonella plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it invades intestinal epithelial cells, causing food poisoning. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Phytoplankton Bloom",
      titleHindi: "पादप प्लवक प्रस्फुटन",
      intro: "The phytoplankton bloom is a spectacular ecological phenomenon caused by warm sun and nutrient runoffs in oceans.",
      details: "This natural event results in massive green swirls visible from space, which can be observed primarily in coastal oceans. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that produces over half of global oxygen and forms the base of ocean web. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 72,
    plant: {
      title: "Welwitschia",
      titleHindi: "वेलविट्सचिया",
      intro: "Known scientifically as Welwitschia mirabilis, the welwitschia is a fascinating plant adapted to gravel deserts.",
      details: "The welwitschia features two strap-like split leaves and produces woody cone structures. It plays a crucial ecological role in its native gravel deserts, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it grows only two leaves during lifespan of 1,500 years. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Indian Peafowl",
      titleHindi: "मोर",
      intro: "The indian peafowl (Pavo cristatus) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent omnivore, the indian peafowl is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the indian peafowl is that males grow long eye-spotted feathers used in courtship displays. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Botulinum Bacteria",
      titleHindi: "बोटुलिनम जीवाणु",
      intro: "The botulinum bacteria (Clostridium botulinum) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in anaerobic soil, the botulinum bacteria plays a vital role in toxin producer within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it produces botulinum toxin, the most lethal biological toxin known. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Kelp Forest Growth",
      titleHindi: "केल्प वन वृद्धि",
      intro: "The kelp forest growth is a spectacular ecological phenomenon caused by cool nutrient-rich water stimulating algae growth.",
      details: "This natural event results in giant underwater forests providing habitat, which can be observed primarily in coastal boundaries. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that grows rapidly, sequestering carbon and protecting coast from waves. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 73,
    plant: {
      title: "Joshua Tree",
      titleHindi: "जोशुआ पेड़",
      intro: "Known scientifically as Yucca brevifolia, the joshua tree is a fascinating plant adapted to arid highlands.",
      details: "The joshua tree features spiny cluster leaves and produces thick green seed pods. It plays a crucial ecological role in its native arid highlands, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it relies on a single species of yucca moth for pollination. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Great Indian Bustard",
      titleHindi: "सोनचिड़िया",
      intro: "The great indian bustard (Ardeotis nigriceps) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent omnivore, the great indian bustard is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the great indian bustard is that stands as one of the heaviest flying birds, nesting on open grasslands. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Tetanus Bacteria",
      titleHindi: "टिटनस जीवाणु",
      intro: "The tetanus bacteria (Clostridium tetani) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in dirt and rust, the tetanus bacteria plays a vital role in toxin producer within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it produces tetanospasmin, causing painful lockjaw muscle spasms. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Peat Bog Formation",
      titleHindi: "दालदली भूमि",
      intro: "The peat bog formation is a spectacular ecological phenomenon caused by slow accumulation of organic matter in wet bogs.",
      details: "This natural event results in thick layers of carbon-rich peat over millennia, which can be observed primarily in peatlands. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that acidic, oxygen-poor water prevents decomposition, locking away carbon. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 74,
    plant: {
      title: "Saguaro Cactus",
      titleHindi: "सगुआरो कैक्टस",
      intro: "Known scientifically as Carnegiea gigantea, the saguaro cactus is a fascinating plant adapted to gravel deserts.",
      details: "The saguaro cactus features ribbed columns with spines and produces red sweet fruits. It plays a crucial ecological role in its native gravel deserts, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it weighs up to six tons when fully hydrated after rains. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Sarus Crane",
      titleHindi: "सारस",
      intro: "The sarus crane (Antigone antigone) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent omnivore, the sarus crane is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the sarus crane is that stands as the tallest flying bird, nesting in pairs in wetlands. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "TB Bacteria",
      titleHindi: "टीबी जीवाणु",
      intro: "The tb bacteria (Mycobacterium tuberculosis) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in lung tissue, the tb bacteria plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it survives inside lung macrophage cells, forming protective tubercles. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Eutrophication",
      titleHindi: "सुपोषण",
      intro: "The eutrophication is a spectacular ecological phenomenon caused by excess nutrient runoff stimulating algal blooms.",
      details: "This natural event results in oxygen depletion and massive fish deaths in lakes, which can be observed primarily in agricultural basins. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that algal blooms block light, and their decay consumes all dissolved oxygen. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 75,
    plant: {
      title: "Prickly Pear",
      titleHindi: "नागफनी",
      intro: "Known scientifically as Opuntia ficus-indica, the prickly pear is a fascinating plant adapted to arid hills.",
      details: "The prickly pear features flat pad-like green stems and produces fleshy red pear fruits. It plays a crucial ecological role in its native arid hills, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it flat pads perform photosynthesis while leaves are spines. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Greater Flamingo",
      titleHindi: "राजहंस",
      intro: "The greater flamingo (Phoenicopterus roseus) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent omnivore, the greater flamingo is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the greater flamingo is that filters out small algae and shrimp from salty mud using its curved bill. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Leprosy Bacteria",
      titleHindi: "कुष्ठ जीवाणु",
      intro: "The leprosy bacteria (Mycobacterium leprae) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in nerve cells, the leprosy bacteria plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it grows extremely slowly, damaging peripheral nerves and skin. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Noctilucent Clouds",
      titleHindi: "निशादीप्त बादल",
      intro: "The noctilucent clouds is a spectacular atmospheric phenomenon caused by water vapor freezing on space dust at high altitude.",
      details: "This natural event results in glowing blue-white clouds visible in twilight, which can be observed primarily in mesosphere. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that ice crystals reflect sunlight from below the horizon at 50 miles high. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 76,
    plant: {
      title: "Blue Agave",
      titleHindi: "अगेव",
      intro: "Known scientifically as Agave tequilana, the blue agave is a fascinating plant adapted to volcanic soils.",
      details: "The blue agave features stiff spiny blue leaves and produces massive flower stalk. It plays a crucial ecological role in its native volcanic soils, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it stores sugars in heart (pina) for seven years before blooming. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Scarlet Macaw",
      titleHindi: "स्कार्लेट मकाऊ",
      intro: "The scarlet macaw (Ara macao) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent herbivore, the scarlet macaw is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the scarlet macaw is that eats toxic clay at river banks to neutralize plant toxins in its stomach. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Lyme Disease Bacteria",
      titleHindi: "लाइम रोग जीवाणु",
      intro: "The lyme disease bacteria (Borrelia burgdorferi) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in tick salivary glands, the lyme disease bacteria plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it corkscrew shape allows it to drill through dense human tissue. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Mammatus Clouds",
      titleHindi: "मैमैटस बादल",
      intro: "The mammatus clouds is a spectacular atmospheric phenomenon caused by cold air pockets sinking through cloud base.",
      details: "This natural event results in pouch-like clouds hanging below storm cells, which can be observed primarily in severe storm edges. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that creates a spectacular bubble-like ceiling under rotating supercells. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 77,
    plant: {
      title: "Spanish Yucca",
      titleHindi: "युक्का",
      intro: "Known scientifically as Yucca aloifolia, the spanish yucca is a fascinating plant adapted to sandy coasts.",
      details: "The spanish yucca features dagger-like stiff leaves and produces black seed capsules. It plays a crucial ecological role in its native sandy coasts, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it razor-sharp leaf margins protect central flower bud. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Toco Toucan",
      titleHindi: "टूकेन",
      intro: "The toco toucan (Ramphastos toco) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent herbivore, the toco toucan is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the toco toucan is that its massive hollow beak serves to regulate body temperature in heat. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Syphilis Bacteria",
      titleHindi: "सिफलिस जीवाणु",
      intro: "The syphilis bacteria (Treponema pallidum) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in mucosal tissue, the syphilis bacteria plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it is a delicate spirochete that cannot survive outside animal bodies. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Lenticular Clouds",
      titleHindi: "मसूर के बादल",
      intro: "The lenticular clouds is a spectacular atmospheric phenomenon caused by moist air forced over mountain peaks cooling.",
      details: "This natural event results in smooth lens-shaped clouds hovering over peaks, which can be observed primarily in mountain summits. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that air flows through the standing wave, condensing and evaporating in place. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 78,
    plant: {
      title: "Vanilla (Wild)",
      titleHindi: "वन्य वेनिला",
      intro: "Known scientifically as Vanilla odorata, the vanilla (wild) is a fascinating plant adapted to rainforest understory.",
      details: "The vanilla (wild) features lanceolate fleshy leaves and produces aromatic green pods. It plays a crucial ecological role in its native rainforest understory, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it climbs trees using aerial roots that absorb humidity. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Ruby-Throated Hummingbird",
      titleHindi: "गुनगुना पक्षी",
      intro: "The ruby-throated hummingbird (Archilochus colubris) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent herbivore, the ruby-throated hummingbird is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the ruby-throated hummingbird is that flaps its wings up to eighty times per second, flying backward with ease. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Typhus Bacteria",
      titleHindi: "टाइफस जीवाणु",
      intro: "The typhus bacteria (Rickettsia prowazekii) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in lice cells, the typhus bacteria plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it grows inside eukaryotic host cells, damaging blood vessels. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Kelvin-Helmholtz Clouds",
      titleHindi: "तरंग बादल",
      intro: "The kelvin-helmholtz clouds is a spectacular atmospheric phenomenon caused by wind shear creating wave-like patterns in clouds.",
      details: "This natural event results in clouds resembling breaking ocean waves in the sky, which can be observed primarily in wind boundaries. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that faster air above rolls the top of the cloud sheet into wave crests. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 79,
    plant: {
      title: "Black Spruce",
      titleHindi: "काला स्प्रूस",
      intro: "Known scientifically as Picea mariana, the black spruce is a fascinating plant adapted to subarctic bogs.",
      details: "The black spruce features short four-sided needles and produces small purple cones. It plays a crucial ecological role in its native subarctic bogs, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it narrow flexible shape prevents snow accumulation on branches. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Ostrich",
      titleHindi: "शुतुरमुर्ग",
      intro: "The ostrich (Struthio camelus) is a specialized member of the birds group, active during diurnal hours.",
      details: "As a prominent herbivore, the ostrich is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the ostrich is that runs up to 45 miles per hour and lays the largest egg of any bird. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Chlamydia",
      titleHindi: "क्लैमाइडिया",
      intro: "The chlamydia (Chlamydia trachomatis) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in eukaryotic cells, the chlamydia plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it exists as an elementary body outside cells, invading mucosal linings. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Solar Eclipse",
      titleHindi: "सूर्य ग्रहण",
      intro: "The solar eclipse is a spectacular astronomical phenomenon caused by moon passing directly between Earth and Sun.",
      details: "This natural event results in the sun's corona glowing around a dark disc, which can be observed primarily in eclipse path. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that the moon's shadow rolls across the Earth, dropping temperatures. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 80,
    plant: {
      title: "Paper Birch",
      titleHindi: "भोजपत्र",
      intro: "Known scientifically as Betula papyrifera, the paper birch is a fascinating plant adapted to temperate hills.",
      details: "The paper birch features oval serrated leaves and produces cone-like seed catkins. It plays a crucial ecological role in its native temperate hills, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it white bark contains betulin used as waterproof paper. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Kiwi",
      titleHindi: "कीवी",
      intro: "The kiwi (Apteryx) is a specialized member of the birds group, active during nocturnal hours.",
      details: "As a prominent insectivore, the kiwi is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the kiwi is that lacks flight feathers but has nostrils at the tip of its beak for scent. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Plague Bacteria",
      titleHindi: "प्लेग जीवाणु",
      intro: "The plague bacteria (Yersinia pestis) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in flea guts, the plague bacteria plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it causes bubonic plague, blocking flea guts to force biting hosts. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Lunar Eclipse",
      titleHindi: "चंद्र ग्रहण",
      intro: "The lunar eclipse is a spectacular astronomical phenomenon caused by earth passing between Sun and Moon.",
      details: "This natural event results in the moon turning a deep copper-red color, which can be observed primarily in night sky. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that earth's atmosphere scatters red light into the shadow cone, illuminating the moon. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 81,
    plant: {
      title: "Weeping Willow",
      titleHindi: "मजनू",
      intro: "Known scientifically as Salix babylonica, the weeping willow is a fascinating plant adapted to river banks.",
      details: "The weeping willow features long narrow drooping leaves and produces small capsule catkins. It plays a crucial ecological role in its native river banks, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it bark contains salicin, a natural chemical precursor to aspirin. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Blue Whale",
      titleHindi: "ब्लू व्हेल",
      intro: "The blue whale (Balaenoptera musculus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent carnivore, the blue whale is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the blue whale is that stands as the largest animal in history, with a tongue weighing as much as an elephant. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Flesh-Eating Bacteria",
      titleHindi: "मांस खाने वाला जीवाणु",
      intro: "The flesh-eating bacteria (Vibrio vulnificus) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in warm estuary water, the flesh-eating bacteria plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it invades skin wounds, causing rapid and severe tissue destruction. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Baily's Beads",
      titleHindi: "बेली के मनके",
      intro: "The baily's beads is a spectacular astronomical phenomenon caused by sunlight shining through lunar valleys during eclipse.",
      details: "This natural event results in a chain of bright spots around the moon's edge, which can be observed primarily in eclipse path. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that rugged lunar topography allows sunlight to peek through right before totality. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 82,
    plant: {
      title: "White Ash",
      titleHindi: "राख का पेड़",
      intro: "Known scientifically as Fraxinus americana, the white ash is a fascinating plant adapted to deciduous hills.",
      details: "The white ash features pinnate compound leaflets and produces winged paddle samaras. It plays a crucial ecological role in its native deciduous hills, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it wood combines high strength and flexibility for tool handles. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Humpback Whale",
      titleHindi: "हंपबैक व्हेल",
      intro: "The humpback whale (Megaptera novaeangliae) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent carnivore, the humpback whale is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the humpback whale is that males sing complex songs that last for hours and evolve across generations. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Pneumonia Bacteria",
      titleHindi: "निमोनिया जीवाणु",
      intro: "The pneumonia bacteria (Streptococcus pneumoniae) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in respiratory tract, the pneumonia bacteria plays a vital role in human pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it produces a thick sugar capsule preventing immune cells from eating it. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Brocken Spectre",
      titleHindi: "ब्रोकन स्पेक्टर",
      intro: "The brocken spectre is a spectacular optical phenomenon caused by sunlight projecting observer's shadow onto mist.",
      details: "This natural event results in a magnified shadow surrounded by rainbow-colored rings, which can be observed primarily in misty mountain peaks. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that shadow appears giant and distant due to the brain misjudging scale in fog. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 83,
    plant: {
      title: "American Beech",
      titleHindi: "बलूत",
      intro: "Known scientifically as Fagus grandifolia, the american beech is a fascinating plant adapted to temperate slopes.",
      details: "The american beech features oval papery leaves and produces prickly beechnut pods. It plays a crucial ecological role in its native temperate slopes, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it smooth grey bark prevents climbing epiphytes from taking root. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Killer Whale",
      titleHindi: "ऑर्का",
      intro: "The killer whale (Orcinus orca) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent carnivore, the killer whale is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the killer whale is that lives in matrilineal pods with distinct languages and hunting techniques. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Golden Staph",
      titleHindi: "स्टैफिलोकोकस",
      intro: "The golden staph (Staphylococcus aureus) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in human skin, the golden staph plays a vital role in commensal & pathogen within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it can develop resistance to methicillin (MRSA), causing severe wound infections. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Glory",
      titleHindi: "ग्लोरी",
      intro: "The glory is a spectacular optical phenomenon caused by backscattering of light by tiny uniform water droplets.",
      details: "This natural event results in multiple concentric rings of colored light around shadow, which can be observed primarily in cloud layers from aircraft. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that colors are produced by wave tunneling and surface waves in water droplets. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 84,
    plant: {
      title: "Sweet Chestnut",
      titleHindi: "शाहबलूत",
      intro: "Known scientifically as Castanea sativa, the sweet chestnut is a fascinating plant adapted to temperate valleys.",
      details: "The sweet chestnut features long serrated leaves and produces prickly burr pods with nuts. It plays a crucial ecological role in its native temperate valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it nuts wrapped in spiny husk that deters early herbivores. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Bottlenose Dolphin",
      titleHindi: "डॉल्फिन",
      intro: "The bottlenose dolphin (Tursiops truncatus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent carnivore, the bottlenose dolphin is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the bottlenose dolphin is that communicates using individual signature whistles that act as names. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Nitrosomonas",
      titleHindi: "नाइट्रोसोमोनास",
      intro: "The nitrosomonas (Nitrosomonas europaea) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in agricultural soil, the nitrosomonas plays a vital role in nitrification within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it converts toxic ammonia into nitrite in the nitrogen cycle. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Brinicle",
      titleHindi: "ब्रिनिकल",
      intro: "The brinicle is a spectacular ice phenomenon caused by sinking of supercooled salty brine in polar seas.",
      details: "This natural event results in an underwater icicle growing down to the seafloor, which can be observed primarily in polar oceans. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that freezes surrounding seawater on contact, trapping any slow marine life below. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 85,
    plant: {
      title: "American Elm",
      titleHindi: "एल्म",
      intro: "Known scientifically as Ulmus americana, the american elm is a fascinating plant adapted to floodplain valleys.",
      details: "The american elm features oval rough leaves and produces flat circular samara seeds. It plays a crucial ecological role in its native floodplain valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it vase-like branch structure creates vaulted canopy over rivers. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Ganges River Dolphin",
      titleHindi: "सोंस",
      intro: "The ganges river dolphin (Platanista gangetica) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent carnivore, the ganges river dolphin is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the ganges river dolphin is that is virtually blind, navigating muddy river currents using echolocation. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Nitrobacter",
      titleHindi: "नाइट्रोबैक्टर",
      intro: "The nitrobacter (Nitrobacter winogradskyi) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in garden soil, the nitrobacter plays a vital role in nitrification within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it converts nitrite into nitrate, providing essential fertilizer for plants. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Mirage",
      titleHindi: "मरीचिका",
      intro: "The mirage is a spectacular optical phenomenon caused by rapid temperature gradient refraction of light.",
      details: "This natural event results in distant water-like reflections on hot ground, which can be observed primarily in desert highway plains. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that hot air near ground bends light rays upward, projecting a blue sky reflection. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 86,
    plant: {
      title: "Black Walnut",
      titleHindi: "अखरोट का पेड़",
      intro: "Known scientifically as Juglans nigra, the black walnut is a fascinating plant adapted to river terraces.",
      details: "The black walnut features pinnate compound leaflets and produces hard green husks with nuts. It plays a crucial ecological role in its native river terraces, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it roots release juglone inhibiting competing plants. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "West Indian Manatee",
      titleHindi: "समुद्री गाय",
      intro: "The west indian manatee (Trichechus manatus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent herbivore, the west indian manatee is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the west indian manatee is that grazes slowly on sea grass in coastal rivers, sleeping underwater. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Iron Bacteria",
      titleHindi: "लोहा जीवाणु",
      intro: "The iron bacteria (Thiobacillus ferrooxidans) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in acidic mine water, the iron bacteria plays a vital role in chemosynthesis within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it oxidizes dissolved iron and sulfur, creating orange mine runoffs. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Light Pillars (Solar)",
      titleHindi: "सौर स्तंभ",
      intro: "The light pillars (solar) is a spectacular optical phenomenon caused by sunlight reflecting off horizontally aligned ice crystals.",
      details: "This natural event results in a vertical shaft of light extending above the sun, which can be observed primarily in frozen horizons. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that flat hexagonal ice crystals falling slowly act as a giant light guide. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 87,
    plant: {
      title: "Hazelnut Bush",
      titleHindi: "हेज़लनट",
      intro: "Known scientifically as Corylus avellana, the hazelnut bush is a fascinating plant adapted to forest understory.",
      details: "The hazelnut bush features round double-serrated leaves and produces nuts in leafy husks. It plays a crucial ecological role in its native forest understory, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it male catkins open in winter releasing wind pollen. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Sea Otter",
      titleHindi: "समुद्री ऊदबिलाव",
      intro: "The sea otter (Enhydra lutris) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent carnivore, the sea otter is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the sea otter is that uses small stones as tools to crack open hard shells on its stomach. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Geobacter",
      titleHindi: "जियोबैक्टर",
      intro: "The geobacter (Geobacter metallireducens) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in river mud, the geobacter plays a vital role in bioremediation within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it can transfer electrons to iron oxides, cleaning up uranium pollution. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Super Blood Moon",
      titleHindi: "सुपर ब्लड मून",
      intro: "The super blood moon is a spectacular astronomical phenomenon caused by moon reaching closest orbital point during total eclipse.",
      details: "This natural event results in a large and bright copper-red moon, which can be observed primarily in night sky. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that combines a supermoon and a lunar eclipse, scattering red light off Earth's edge. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 88,
    plant: {
      title: "Common Fig",
      titleHindi: "अंजीर का पेड़",
      intro: "Known scientifically as Ficus carica, the common fig is a fascinating plant adapted to rocky slopes.",
      details: "The common fig features large deeply lobed leaves and produces sweet hollow fig fruits. It plays a crucial ecological role in its native rocky slopes, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it requires a tiny symbiotic wasp to enter fig to pollinate. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "California Sea Lion",
      titleHindi: "समुद्री शेर",
      intro: "The california sea lion (Zalophus californianus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent carnivore, the california sea lion is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the california sea lion is that exhibits high intelligence and swims easily using large front flippers. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Shewanella",
      titleHindi: "शीवानेला",
      intro: "The shewanella (Shewanella oneidensis) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in lake sediment, the shewanella plays a vital role in bioremediation within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it reduces heavy metals under anaerobic conditions, producing electricity. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Morning Glory Cloud",
      titleHindi: "मॉर्निंग ग्लोरी बादल",
      intro: "The morning glory cloud is a spectacular atmospheric phenomenon caused by sea breeze front colliding with temperature inversion.",
      details: "This natural event results in a rare roll cloud extending up to 600 miles long, which can be observed primarily in Gulf of Carpentaria. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that travels at 35 miles per hour, forming a spectacular rolling tube in the sky. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 89,
    plant: {
      title: "Pomegranate",
      titleHindi: "अनार",
      intro: "Known scientifically as Punica granatum, the pomegranate is a fascinating plant adapted to rocky valleys.",
      details: "The pomegranate features narrow glossy leaves and produces red fruits with seeds. It plays a crucial ecological role in its native rocky valleys, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it seeds wrapped in sweet-sour red sacs called arils. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Pacific Walrus",
      titleHindi: "वॉलरस",
      intro: "The pacific walrus (Odobenus rosmarus) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent carnivore, the pacific walrus is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the pacific walrus is that uses its massive tusks to haul its body onto ice floes in the Arctic. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Pyrococcus",
      titleHindi: "पायरोकोकस",
      intro: "The pyrococcus (Pyrococcus furiosus) is a microscopic or simple organism classified under the archaea kingdom.",
      details: "Thriving in volcanic vents, the pyrococcus plays a vital role in extreme survival within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it thrives in boiling water at 100 degrees Celsius, using sulfur for energy. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Ice Caves",
      titleHindi: "बर्फ की गुफाएं",
      intro: "The ice caves is a spectacular glacial phenomenon caused by geothermal heat or meltwater carving glaciers.",
      details: "This natural event results in spectacular blue-lit ice tunnels under glaciers, which can be observed primarily in glacial fields. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that thick pressurized ice absorbs red light, reflecting a deep brilliant blue color. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  },

  {
    dayIndex: 90,
    plant: {
      title: "Neelakurinji",
      titleHindi: "नीलकुरिंजी",
      intro: "Known scientifically as Strobilanthes kunthiana, the neelakurinji is a fascinating plant adapted to shola grasslands.",
      details: "The neelakurinji features rough ovate leaves and produces small dry capsules. It plays a crucial ecological role in its native shola grasslands, stabilizing the soil and providing essential food and shelter for local wildlife. Over centuries, these plants have developed unique adaptations to survive changing climates, seasonal droughts, and pest pressures, making them key indicators of forest health.",
      wonder: "One of the most remarkable wonders is that it blooms once in twelve years coating hills in purple. This unique trait demonstrates the incredible adaptability of flora in tropical and temperate forest systems."
    },
    animal: {
      title: "Narwhal",
      titleHindi: "नरह्वेल",
      intro: "The narwhal (Monodon monoceros) is a specialized member of the mammals group, active during diurnal hours.",
      details: "As a prominent carnivore, the narwhal is adapted to hunt, forage, or graze in its specific habitat. Its physical features and behavior are highly tuned to its environment, allowing it to navigate complex terrain and maintain its place in the food web. The presence of this species is essential for maintaining the ecological balance of its native forest.",
      wonder: "An amazing wonder of the narwhal is that males grow a spiral tusk up to nine feet long, which acts as a sensor. This specialized adaptation assists the animal in survival and territory defense in the wild."
    },
    organism: {
      title: "Sulfur-Reducing Bacteria",
      titleHindi: "गंधक अपचायक जीवाणु",
      intro: "The sulfur-reducing bacteria (Desulfovibrio vulgaris) is a microscopic or simple organism classified under the bacteria kingdom.",
      details: "Thriving in anaerobic mud, the sulfur-reducing bacteria plays a vital role in sulfate reduction within the ecosystem. It breaks down complex organic matter, fixes essential minerals, or participates in symbiotic relationships with plants and animals. Its metabolic activity is the unseen engine of the forest soil, driving nutrient cycles and supporting life from the ground up.",
      wonder: "A fascinating fact is that it uses sulfate instead of oxygen for respiration, producing hydrogen sulfide gas. This micro-wonder showcases how simple, single-celled or fungal life can achieve complex interactions that support the entire forest."
    },
    phenomenon: {
      title: "Desert Pavement",
      titleHindi: "रेगिस्तानी फुटपाथ",
      intro: "The desert pavement is a spectacular geological phenomenon caused by wind blowing away fine sand and dust over centuries.",
      details: "This natural event results in a flat surface of closely packed interlocking pebbles, which can be observed primarily in arid plains. The phenomenon is a beautiful demonstration of physical laws, atmospheric chemistry, or ecological coordination in action. It often triggers responses in local wildlife, marking seasonal changes or driving geological and biological cycles across the planet.",
      wonder: "A true wonder of this phenomenon is that protects underlying soil from further wind and water erosion like natural tiling. Experiencing this event reminds us of the dynamic, interconnected forces that shape our living Earth."
    }
  }
];

export const birdsData: AranyaCard[] = [
  {
    title: "House Sparrow",
    titleHindi: "घरेलू गौरैया",
    intro: "The house sparrow (Passer domesticus) is a highly specialized species adapted to urban areas.",
    details: "Thriving in urban areas, the house sparrow has developed unique characteristics to find food and survive. As a species that feeds on seeds and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The house sparrow can fly at speeds of 24 miles per hour and has lived alongside humans for over 10,000 years."
  },
  {
    title: "Indian Peafowl",
    titleHindi: "भारतीय मोर",
    intro: "The indian peafowl (Pavo cristatus) is a highly specialized species adapted to forests and grasslands.",
    details: "Thriving in forests and grasslands, the indian peafowl has developed unique characteristics to find food and survive. As a species that feeds on seeds, fruits, and small reptiles, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian peafowl males grow a spectacular train of feathers that makes up 60% of their body length."
  },
  {
    title: "Peregrine Falcon",
    titleHindi: "घुमंतू बाज",
    intro: "The peregrine falcon (Falco peregrinus) is a highly specialized species adapted to open country and cliffs.",
    details: "Thriving in open country and cliffs, the peregrine falcon has developed unique characteristics to find food and survive. As a species that feeds on smaller birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The peregrine falcon is the fastest animal on Earth, reaching diving speeds of over 240 miles per hour."
  },
  {
    title: "Ruby-Throated Hummingbird",
    titleHindi: "रूबी-कंठित हमिंगबर्ड",
    intro: "The ruby-throated hummingbird (Archilochus colubris) is a highly specialized species adapted to woodland edges and gardens.",
    details: "Thriving in woodland edges and gardens, the ruby-throated hummingbird has developed unique characteristics to find food and survive. As a species that feeds on flower nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The ruby-throated hummingbird flaps its wings up to 80 times per second and can fly backwards and upside down."
  },
  {
    title: "Emperor Penguin",
    titleHindi: "सम्राट पेंगुइन",
    intro: "The emperor penguin (Aptenodytes forsteri) is a highly specialized species adapted to antarctic ice shelves.",
    details: "Thriving in antarctic ice shelves, the emperor penguin has developed unique characteristics to find food and survive. As a species that feeds on fish and krill, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The emperor penguin can dive to depths of 1,800 feet and hold its breath for over 20 minutes."
  },
  {
    title: "Bald Eagle",
    titleHindi: "गंजा गरुड़",
    intro: "The bald eagle (Haliaeetus leucocephalus) is a highly specialized species adapted to near large bodies of water.",
    details: "Thriving in near large bodies of water, the bald eagle has developed unique characteristics to find food and survive. As a species that feeds on fish and carrion, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The bald eagle builds the largest tree nests of any animal, up to 10 feet wide and 20 feet deep."
  },
  {
    title: "Wandering Albatross",
    titleHindi: "भटकता हुआ एल्बाट्रॉस",
    intro: "The wandering albatross (Diomedea exulans) is a highly specialized species adapted to southern oceans.",
    details: "Thriving in southern oceans, the wandering albatross has developed unique characteristics to find food and survive. As a species that feeds on squid and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The wandering albatross has the largest wingspan of any living bird, measuring up to 11.5 feet."
  },
  {
    title: "Great Horned Owl",
    titleHindi: "महान सींग वाला उल्लू",
    intro: "The great horned owl (Bubo virginianus) is a highly specialized species adapted to forests and parks.",
    details: "Thriving in forests and parks, the great horned owl has developed unique characteristics to find food and survive. As a species that feeds on small mammals, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The great horned owl has soft-edged feathers that allow it to fly in absolute silence to ambush prey."
  },
  {
    title: "Common Raven",
    titleHindi: "जंगली कौआ",
    intro: "The common raven (Corvus corax) is a highly specialized species adapted to diverse habitats.",
    details: "Thriving in diverse habitats, the common raven has developed unique characteristics to find food and survive. As a species that feeds on carrion and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common raven is highly intelligent, capable of solving multi-step puzzles and mimicking human speech."
  },
  {
    title: "Atlantic Puffin",
    titleHindi: "अटलांटिक पफिन",
    intro: "The atlantic puffin (Fratercula arctica) is a highly specialized species adapted to sea cliffs and open ocean.",
    details: "Thriving in sea cliffs and open ocean, the atlantic puffin has developed unique characteristics to find food and survive. As a species that feeds on small fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The atlantic puffin can flap its wings up to 400 times per minute, flying close to the water surface."
  },
  {
    title: "Greater Flamingo",
    titleHindi: "बड़ा राजहंस",
    intro: "The greater flamingo (Phoenicopterus roseus) is a highly specialized species adapted to saline lagoons and estuaries.",
    details: "Thriving in saline lagoons and estuaries, the greater flamingo has developed unique characteristics to find food and survive. As a species that feeds on algae and small crustaceans, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater flamingo gets its pink color from carotenoid pigments in the organic food it eats."
  },
  {
    title: "Sarus Crane",
    titleHindi: "सारस क्रेन",
    intro: "The sarus crane (Antigone antigone) is a highly specialized species adapted to wetlands and agricultural fields.",
    details: "Thriving in wetlands and agricultural fields, the sarus crane has developed unique characteristics to find food and survive. As a species that feeds on roots, insects, and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The sarus crane stands as the tallest flying bird in the world, reaching heights of nearly 6 feet."
  },
  {
    title: "Indian Grey Hornbill",
    titleHindi: "भारतीय धूसर हॉर्नबिल",
    intro: "The indian grey hornbill (Ocyceros birostris) is a highly specialized species adapted to deciduous forests and urban trees.",
    details: "Thriving in deciduous forests and urban trees, the indian grey hornbill has developed unique characteristics to find food and survive. As a species that feeds on figs and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian grey hornbill the female seals herself inside a tree hollow during nesting, leaving only a narrow slit for food."
  },
  {
    title: "Bar-Headed Goose",
    titleHindi: "पट्टीदार हंस",
    intro: "The bar-headed goose (Anser indicus) is a highly specialized species adapted to high-altitude lakes and wetlands.",
    details: "Thriving in high-altitude lakes and wetlands, the bar-headed goose has developed unique characteristics to find food and survive. As a species that feeds on grasses and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The bar-headed goose migrates over the Himalayas at altitudes of 29,000 feet, flying in oxygen-thin air."
  },
  {
    title: "African Grey Parrot",
    titleHindi: "अफ्रीकी ग्रे तोता",
    intro: "The african grey parrot (Psittacus erithacus) is a highly specialized species adapted to rainforests and savannahs.",
    details: "Thriving in rainforests and savannahs, the african grey parrot has developed unique characteristics to find food and survive. As a species that feeds on seeds and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The african grey parrot possesses cognitive abilities comparable to a 5-year-old human child."
  },
  {
    title: "Common Kingfisher",
    titleHindi: "बड़ा किलकिला",
    intro: "The common kingfisher (Alcedo atthis) is a highly specialized species adapted to rivers, streams, and lakes.",
    details: "Thriving in rivers, streams, and lakes, the common kingfisher has developed unique characteristics to find food and survive. As a species that feeds on small fish and aquatic insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common kingfisher has specialized eyes that correct for water refraction, allowing it to dive accurately."
  },
  {
    title: "Golden Eagle",
    titleHindi: "सुनहरा गरुड़",
    intro: "The golden eagle (Aquila chrysaetos) is a highly specialized species adapted to mountains and open hills.",
    details: "Thriving in mountains and open hills, the golden eagle has developed unique characteristics to find food and survive. As a species that feeds on rabbits and marmots, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The golden eagle can spot a hare from over two miles away and dive at speeds of 150 miles per hour."
  },
  {
    title: "Snowy Owl",
    titleHindi: "बर्फीला उल्लू",
    intro: "The snowy owl (Bubo scandiacus) is a highly specialized species adapted to arctic tundra.",
    details: "Thriving in arctic tundra, the snowy owl has developed unique characteristics to find food and survive. As a species that feeds on lemmings and rodents, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The snowy owl hunts by day during the arctic summer and has thick feather padding on its feet for warmth."
  },
  {
    title: "Ostrich",
    titleHindi: "शुतुरमुर्ग",
    intro: "The ostrich (Struthio camelus) is a highly specialized species adapted to savannahs and semi-deserts.",
    details: "Thriving in savannahs and semi-deserts, the ostrich has developed unique characteristics to find food and survive. As a species that feeds on plants and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The ostrich stands as the largest bird on Earth, running at sustained speeds of 45 miles per hour."
  },
  {
    title: "Kiwi",
    titleHindi: "कीवी",
    intro: "The kiwi (Apteryx) is a highly specialized species adapted to forests and grasslands.",
    details: "Thriving in forests and grasslands, the kiwi has developed unique characteristics to find food and survive. As a species that feeds on earthworms and fallen fruit, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The kiwi lays an egg that weighs up to 20% of its body weight, the largest relative egg size."
  },
  {
    title: "Indian Pitta Type 2",
    titleHindi: "नवरंग - 2",
    intro: "The indian pitta type 2 (Pitta brachyura ssp. b) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 2 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 2 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 2",
    titleHindi: "ब्राह्मणी चील - 2",
    intro: "The brahminy kite type 2 (Haliastur indus ssp. b) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 2 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 2 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 2",
    titleHindi: "तोता - 2",
    intro: "The rose-ringed parakeet type 2 (Psittacula krameri ssp. b) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 2 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 2 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 2",
    titleHindi: "कोयल - 2",
    intro: "The asian koel type 2 (Eudynamys scolopaceus ssp. b) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 2 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 2 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 2",
    titleHindi: "तंबट - 2",
    intro: "The coppersmith barbet type 2 (Psilopogon haemacephalus ssp. b) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 2 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 2 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 2",
    titleHindi: "चित्तीदार उल्लू - 2",
    intro: "The spotted owlet type 2 (Athene brama ssp. b) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 2 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 2 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 2",
    titleHindi: "कोतवाल - 2",
    intro: "The black drongo type 2 (Dicrurus macrocercus ssp. b) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 2 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 2 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 2",
    titleHindi: "शकरखोरा - 2",
    intro: "The purple sunbird type 2 (Cinnyris asiaticus ssp. b) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 2 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 2 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 2",
    titleHindi: "श्वेतकंठ किलकिला - 2",
    intro: "The white-throated kingfisher type 2 (Halcyon smyrnensis ssp. b) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 2 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 2 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 2",
    titleHindi: "बुलबुल - 2",
    intro: "The red-vented bulbul type 2 (Pycnonotus cafer ssp. b) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 2 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 2 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 2",
    titleHindi: "शिकरा - 2",
    intro: "The shikra type 2 (Accipiter badius ssp. b) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 2 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 2 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 2",
    titleHindi: "बया - 2",
    intro: "The baya weaver type 2 (Ploceus philippinus ssp. b) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 2 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 2 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 2",
    titleHindi: "सात भाई - 2",
    intro: "The jungle babbler type 2 (Argya striata ssp. b) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 2 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 2 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 2",
    titleHindi: "नीलकंठ - 2",
    intro: "The indian roller type 2 (Coracias benghalensis ssp. b) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 2 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 2 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 2",
    titleHindi: "मैना - 2",
    intro: "The common myna type 2 (Acridotheres tristis ssp. b) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 2 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 2 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 2",
    titleHindi: "गौ बगुला - 2",
    intro: "The cattle egret type 2 (Bubulcus ibis ssp. b) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 2 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 2 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 2",
    titleHindi: "छोटा बगुला - 2",
    intro: "The little egret type 2 (Egretta garzetta ssp. b) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 2 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 2 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 2",
    titleHindi: "चितकबरा किलकिला - 2",
    intro: "The pied kingfisher type 2 (Ceryle rudis ssp. b) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 2 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 2 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 2",
    titleHindi: "महॉक - 2",
    intro: "The greater coucal type 2 (Centropus sinensis ssp. b) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 2 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 2 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 2",
    titleHindi: "काली चील - 2",
    intro: "The black kite type 2 (Milvus migrans ssp. b) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 2 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 2 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 3",
    titleHindi: "नवरंग - 3",
    intro: "The indian pitta type 3 (Pitta brachyura ssp. c) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 3 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 3 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 3",
    titleHindi: "ब्राह्मणी चील - 3",
    intro: "The brahminy kite type 3 (Haliastur indus ssp. c) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 3 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 3 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 3",
    titleHindi: "तोता - 3",
    intro: "The rose-ringed parakeet type 3 (Psittacula krameri ssp. c) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 3 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 3 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 3",
    titleHindi: "कोयल - 3",
    intro: "The asian koel type 3 (Eudynamys scolopaceus ssp. c) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 3 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 3 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 3",
    titleHindi: "तंबट - 3",
    intro: "The coppersmith barbet type 3 (Psilopogon haemacephalus ssp. c) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 3 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 3 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 3",
    titleHindi: "चित्तीदार उल्लू - 3",
    intro: "The spotted owlet type 3 (Athene brama ssp. c) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 3 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 3 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 3",
    titleHindi: "कोतवाल - 3",
    intro: "The black drongo type 3 (Dicrurus macrocercus ssp. c) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 3 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 3 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 3",
    titleHindi: "शकरखोरा - 3",
    intro: "The purple sunbird type 3 (Cinnyris asiaticus ssp. c) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 3 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 3 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 3",
    titleHindi: "श्वेतकंठ किलकिला - 3",
    intro: "The white-throated kingfisher type 3 (Halcyon smyrnensis ssp. c) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 3 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 3 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 3",
    titleHindi: "बुलबुल - 3",
    intro: "The red-vented bulbul type 3 (Pycnonotus cafer ssp. c) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 3 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 3 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 3",
    titleHindi: "शिकरा - 3",
    intro: "The shikra type 3 (Accipiter badius ssp. c) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 3 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 3 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 3",
    titleHindi: "बया - 3",
    intro: "The baya weaver type 3 (Ploceus philippinus ssp. c) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 3 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 3 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 3",
    titleHindi: "सात भाई - 3",
    intro: "The jungle babbler type 3 (Argya striata ssp. c) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 3 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 3 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 3",
    titleHindi: "नीलकंठ - 3",
    intro: "The indian roller type 3 (Coracias benghalensis ssp. c) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 3 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 3 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 3",
    titleHindi: "मैना - 3",
    intro: "The common myna type 3 (Acridotheres tristis ssp. c) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 3 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 3 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 3",
    titleHindi: "गौ बगुला - 3",
    intro: "The cattle egret type 3 (Bubulcus ibis ssp. c) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 3 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 3 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 3",
    titleHindi: "छोटा बगुला - 3",
    intro: "The little egret type 3 (Egretta garzetta ssp. c) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 3 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 3 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 3",
    titleHindi: "चितकबरा किलकिला - 3",
    intro: "The pied kingfisher type 3 (Ceryle rudis ssp. c) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 3 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 3 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 3",
    titleHindi: "महॉक - 3",
    intro: "The greater coucal type 3 (Centropus sinensis ssp. c) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 3 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 3 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 3",
    titleHindi: "काली चील - 3",
    intro: "The black kite type 3 (Milvus migrans ssp. c) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 3 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 3 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 4",
    titleHindi: "नवरंग - 4",
    intro: "The indian pitta type 4 (Pitta brachyura ssp. d) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 4 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 4 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 4",
    titleHindi: "ब्राह्मणी चील - 4",
    intro: "The brahminy kite type 4 (Haliastur indus ssp. d) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 4 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 4 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 4",
    titleHindi: "तोता - 4",
    intro: "The rose-ringed parakeet type 4 (Psittacula krameri ssp. d) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 4 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 4 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 4",
    titleHindi: "कोयल - 4",
    intro: "The asian koel type 4 (Eudynamys scolopaceus ssp. d) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 4 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 4 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 4",
    titleHindi: "तंबट - 4",
    intro: "The coppersmith barbet type 4 (Psilopogon haemacephalus ssp. d) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 4 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 4 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 4",
    titleHindi: "चित्तीदार उल्लू - 4",
    intro: "The spotted owlet type 4 (Athene brama ssp. d) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 4 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 4 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 4",
    titleHindi: "कोतवाल - 4",
    intro: "The black drongo type 4 (Dicrurus macrocercus ssp. d) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 4 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 4 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 4",
    titleHindi: "शकरखोरा - 4",
    intro: "The purple sunbird type 4 (Cinnyris asiaticus ssp. d) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 4 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 4 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 4",
    titleHindi: "श्वेतकंठ किलकिला - 4",
    intro: "The white-throated kingfisher type 4 (Halcyon smyrnensis ssp. d) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 4 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 4 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 4",
    titleHindi: "बुलबुल - 4",
    intro: "The red-vented bulbul type 4 (Pycnonotus cafer ssp. d) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 4 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 4 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 4",
    titleHindi: "शिकरा - 4",
    intro: "The shikra type 4 (Accipiter badius ssp. d) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 4 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 4 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 4",
    titleHindi: "बया - 4",
    intro: "The baya weaver type 4 (Ploceus philippinus ssp. d) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 4 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 4 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 4",
    titleHindi: "सात भाई - 4",
    intro: "The jungle babbler type 4 (Argya striata ssp. d) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 4 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 4 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 4",
    titleHindi: "नीलकंठ - 4",
    intro: "The indian roller type 4 (Coracias benghalensis ssp. d) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 4 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 4 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 4",
    titleHindi: "मैना - 4",
    intro: "The common myna type 4 (Acridotheres tristis ssp. d) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 4 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 4 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 4",
    titleHindi: "गौ बगुला - 4",
    intro: "The cattle egret type 4 (Bubulcus ibis ssp. d) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 4 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 4 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 4",
    titleHindi: "छोटा बगुला - 4",
    intro: "The little egret type 4 (Egretta garzetta ssp. d) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 4 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 4 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 4",
    titleHindi: "चितकबरा किलकिला - 4",
    intro: "The pied kingfisher type 4 (Ceryle rudis ssp. d) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 4 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 4 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 4",
    titleHindi: "महॉक - 4",
    intro: "The greater coucal type 4 (Centropus sinensis ssp. d) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 4 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 4 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 4",
    titleHindi: "काली चील - 4",
    intro: "The black kite type 4 (Milvus migrans ssp. d) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 4 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 4 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 5",
    titleHindi: "नवरंग - 5",
    intro: "The indian pitta type 5 (Pitta brachyura ssp. e) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 5 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 5 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 5",
    titleHindi: "ब्राह्मणी चील - 5",
    intro: "The brahminy kite type 5 (Haliastur indus ssp. e) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 5 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 5 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 5",
    titleHindi: "तोता - 5",
    intro: "The rose-ringed parakeet type 5 (Psittacula krameri ssp. e) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 5 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 5 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 5",
    titleHindi: "कोयल - 5",
    intro: "The asian koel type 5 (Eudynamys scolopaceus ssp. e) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 5 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 5 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 5",
    titleHindi: "तंबट - 5",
    intro: "The coppersmith barbet type 5 (Psilopogon haemacephalus ssp. e) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 5 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 5 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 5",
    titleHindi: "चित्तीदार उल्लू - 5",
    intro: "The spotted owlet type 5 (Athene brama ssp. e) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 5 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 5 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 5",
    titleHindi: "कोतवाल - 5",
    intro: "The black drongo type 5 (Dicrurus macrocercus ssp. e) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 5 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 5 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 5",
    titleHindi: "शकरखोरा - 5",
    intro: "The purple sunbird type 5 (Cinnyris asiaticus ssp. e) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 5 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 5 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 5",
    titleHindi: "श्वेतकंठ किलकिला - 5",
    intro: "The white-throated kingfisher type 5 (Halcyon smyrnensis ssp. e) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 5 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 5 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 5",
    titleHindi: "बुलबुल - 5",
    intro: "The red-vented bulbul type 5 (Pycnonotus cafer ssp. e) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 5 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 5 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 5",
    titleHindi: "शिकरा - 5",
    intro: "The shikra type 5 (Accipiter badius ssp. e) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 5 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 5 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 5",
    titleHindi: "बया - 5",
    intro: "The baya weaver type 5 (Ploceus philippinus ssp. e) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 5 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 5 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 5",
    titleHindi: "सात भाई - 5",
    intro: "The jungle babbler type 5 (Argya striata ssp. e) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 5 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 5 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 5",
    titleHindi: "नीलकंठ - 5",
    intro: "The indian roller type 5 (Coracias benghalensis ssp. e) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 5 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 5 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 5",
    titleHindi: "मैना - 5",
    intro: "The common myna type 5 (Acridotheres tristis ssp. e) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 5 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 5 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 5",
    titleHindi: "गौ बगुला - 5",
    intro: "The cattle egret type 5 (Bubulcus ibis ssp. e) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 5 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 5 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 5",
    titleHindi: "छोटा बगुला - 5",
    intro: "The little egret type 5 (Egretta garzetta ssp. e) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 5 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 5 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 5",
    titleHindi: "चितकबरा किलकिला - 5",
    intro: "The pied kingfisher type 5 (Ceryle rudis ssp. e) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 5 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 5 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 5",
    titleHindi: "महॉक - 5",
    intro: "The greater coucal type 5 (Centropus sinensis ssp. e) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 5 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 5 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 5",
    titleHindi: "काली चील - 5",
    intro: "The black kite type 5 (Milvus migrans ssp. e) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 5 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 5 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 6",
    titleHindi: "नवरंग - 6",
    intro: "The indian pitta type 6 (Pitta brachyura ssp. f) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 6 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 6 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 6",
    titleHindi: "ब्राह्मणी चील - 6",
    intro: "The brahminy kite type 6 (Haliastur indus ssp. f) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 6 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 6 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 6",
    titleHindi: "तोता - 6",
    intro: "The rose-ringed parakeet type 6 (Psittacula krameri ssp. f) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 6 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 6 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 6",
    titleHindi: "कोयल - 6",
    intro: "The asian koel type 6 (Eudynamys scolopaceus ssp. f) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 6 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 6 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 6",
    titleHindi: "तंबट - 6",
    intro: "The coppersmith barbet type 6 (Psilopogon haemacephalus ssp. f) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 6 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 6 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 6",
    titleHindi: "चित्तीदार उल्लू - 6",
    intro: "The spotted owlet type 6 (Athene brama ssp. f) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 6 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 6 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 6",
    titleHindi: "कोतवाल - 6",
    intro: "The black drongo type 6 (Dicrurus macrocercus ssp. f) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 6 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 6 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 6",
    titleHindi: "शकरखोरा - 6",
    intro: "The purple sunbird type 6 (Cinnyris asiaticus ssp. f) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 6 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 6 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 6",
    titleHindi: "श्वेतकंठ किलकिला - 6",
    intro: "The white-throated kingfisher type 6 (Halcyon smyrnensis ssp. f) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 6 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 6 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 6",
    titleHindi: "बुलबुल - 6",
    intro: "The red-vented bulbul type 6 (Pycnonotus cafer ssp. f) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 6 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 6 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 6",
    titleHindi: "शिकरा - 6",
    intro: "The shikra type 6 (Accipiter badius ssp. f) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 6 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 6 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 6",
    titleHindi: "बया - 6",
    intro: "The baya weaver type 6 (Ploceus philippinus ssp. f) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 6 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 6 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 6",
    titleHindi: "सात भाई - 6",
    intro: "The jungle babbler type 6 (Argya striata ssp. f) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 6 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 6 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 6",
    titleHindi: "नीलकंठ - 6",
    intro: "The indian roller type 6 (Coracias benghalensis ssp. f) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 6 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 6 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 6",
    titleHindi: "मैना - 6",
    intro: "The common myna type 6 (Acridotheres tristis ssp. f) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 6 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 6 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 6",
    titleHindi: "गौ बगुला - 6",
    intro: "The cattle egret type 6 (Bubulcus ibis ssp. f) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 6 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 6 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 6",
    titleHindi: "छोटा बगुला - 6",
    intro: "The little egret type 6 (Egretta garzetta ssp. f) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 6 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 6 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 6",
    titleHindi: "चितकबरा किलकिला - 6",
    intro: "The pied kingfisher type 6 (Ceryle rudis ssp. f) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 6 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 6 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 6",
    titleHindi: "महॉक - 6",
    intro: "The greater coucal type 6 (Centropus sinensis ssp. f) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 6 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 6 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 6",
    titleHindi: "काली चील - 6",
    intro: "The black kite type 6 (Milvus migrans ssp. f) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 6 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 6 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 7",
    titleHindi: "नवरंग - 7",
    intro: "The indian pitta type 7 (Pitta brachyura ssp. g) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 7 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 7 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 7",
    titleHindi: "ब्राह्मणी चील - 7",
    intro: "The brahminy kite type 7 (Haliastur indus ssp. g) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 7 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 7 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 7",
    titleHindi: "तोता - 7",
    intro: "The rose-ringed parakeet type 7 (Psittacula krameri ssp. g) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 7 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 7 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 7",
    titleHindi: "कोयल - 7",
    intro: "The asian koel type 7 (Eudynamys scolopaceus ssp. g) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 7 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 7 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 7",
    titleHindi: "तंबट - 7",
    intro: "The coppersmith barbet type 7 (Psilopogon haemacephalus ssp. g) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 7 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 7 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 7",
    titleHindi: "चित्तीदार उल्लू - 7",
    intro: "The spotted owlet type 7 (Athene brama ssp. g) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 7 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 7 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 7",
    titleHindi: "कोतवाल - 7",
    intro: "The black drongo type 7 (Dicrurus macrocercus ssp. g) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 7 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 7 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 7",
    titleHindi: "शकरखोरा - 7",
    intro: "The purple sunbird type 7 (Cinnyris asiaticus ssp. g) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 7 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 7 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 7",
    titleHindi: "श्वेतकंठ किलकिला - 7",
    intro: "The white-throated kingfisher type 7 (Halcyon smyrnensis ssp. g) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 7 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 7 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 7",
    titleHindi: "बुलबुल - 7",
    intro: "The red-vented bulbul type 7 (Pycnonotus cafer ssp. g) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 7 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 7 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 7",
    titleHindi: "शिकरा - 7",
    intro: "The shikra type 7 (Accipiter badius ssp. g) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 7 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 7 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 7",
    titleHindi: "बया - 7",
    intro: "The baya weaver type 7 (Ploceus philippinus ssp. g) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 7 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 7 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 7",
    titleHindi: "सात भाई - 7",
    intro: "The jungle babbler type 7 (Argya striata ssp. g) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 7 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 7 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 7",
    titleHindi: "नीलकंठ - 7",
    intro: "The indian roller type 7 (Coracias benghalensis ssp. g) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 7 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 7 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 7",
    titleHindi: "मैना - 7",
    intro: "The common myna type 7 (Acridotheres tristis ssp. g) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 7 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 7 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 7",
    titleHindi: "गौ बगुला - 7",
    intro: "The cattle egret type 7 (Bubulcus ibis ssp. g) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 7 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 7 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 7",
    titleHindi: "छोटा बगुला - 7",
    intro: "The little egret type 7 (Egretta garzetta ssp. g) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 7 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 7 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 7",
    titleHindi: "चितकबरा किलकिला - 7",
    intro: "The pied kingfisher type 7 (Ceryle rudis ssp. g) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 7 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 7 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 7",
    titleHindi: "महॉक - 7",
    intro: "The greater coucal type 7 (Centropus sinensis ssp. g) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 7 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 7 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 7",
    titleHindi: "काली चील - 7",
    intro: "The black kite type 7 (Milvus migrans ssp. g) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 7 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 7 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 8",
    titleHindi: "नवरंग - 8",
    intro: "The indian pitta type 8 (Pitta brachyura ssp. h) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 8 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 8 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 8",
    titleHindi: "ब्राह्मणी चील - 8",
    intro: "The brahminy kite type 8 (Haliastur indus ssp. h) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 8 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 8 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 8",
    titleHindi: "तोता - 8",
    intro: "The rose-ringed parakeet type 8 (Psittacula krameri ssp. h) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 8 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 8 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 8",
    titleHindi: "कोयल - 8",
    intro: "The asian koel type 8 (Eudynamys scolopaceus ssp. h) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 8 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 8 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 8",
    titleHindi: "तंबट - 8",
    intro: "The coppersmith barbet type 8 (Psilopogon haemacephalus ssp. h) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 8 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 8 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 8",
    titleHindi: "चित्तीदार उल्लू - 8",
    intro: "The spotted owlet type 8 (Athene brama ssp. h) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 8 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 8 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 8",
    titleHindi: "कोतवाल - 8",
    intro: "The black drongo type 8 (Dicrurus macrocercus ssp. h) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 8 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 8 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 8",
    titleHindi: "शकरखोरा - 8",
    intro: "The purple sunbird type 8 (Cinnyris asiaticus ssp. h) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 8 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 8 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 8",
    titleHindi: "श्वेतकंठ किलकिला - 8",
    intro: "The white-throated kingfisher type 8 (Halcyon smyrnensis ssp. h) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 8 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 8 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 8",
    titleHindi: "बुलबुल - 8",
    intro: "The red-vented bulbul type 8 (Pycnonotus cafer ssp. h) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 8 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 8 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 8",
    titleHindi: "शिकरा - 8",
    intro: "The shikra type 8 (Accipiter badius ssp. h) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 8 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 8 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 8",
    titleHindi: "बया - 8",
    intro: "The baya weaver type 8 (Ploceus philippinus ssp. h) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 8 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 8 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 8",
    titleHindi: "सात भाई - 8",
    intro: "The jungle babbler type 8 (Argya striata ssp. h) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 8 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 8 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 8",
    titleHindi: "नीलकंठ - 8",
    intro: "The indian roller type 8 (Coracias benghalensis ssp. h) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 8 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 8 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 8",
    titleHindi: "मैना - 8",
    intro: "The common myna type 8 (Acridotheres tristis ssp. h) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 8 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 8 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 8",
    titleHindi: "गौ बगुला - 8",
    intro: "The cattle egret type 8 (Bubulcus ibis ssp. h) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 8 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 8 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 8",
    titleHindi: "छोटा बगुला - 8",
    intro: "The little egret type 8 (Egretta garzetta ssp. h) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 8 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 8 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 8",
    titleHindi: "चितकबरा किलकिला - 8",
    intro: "The pied kingfisher type 8 (Ceryle rudis ssp. h) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 8 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 8 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 8",
    titleHindi: "महॉक - 8",
    intro: "The greater coucal type 8 (Centropus sinensis ssp. h) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 8 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 8 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 8",
    titleHindi: "काली चील - 8",
    intro: "The black kite type 8 (Milvus migrans ssp. h) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 8 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 8 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 9",
    titleHindi: "नवरंग - 9",
    intro: "The indian pitta type 9 (Pitta brachyura ssp. i) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 9 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 9 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 9",
    titleHindi: "ब्राह्मणी चील - 9",
    intro: "The brahminy kite type 9 (Haliastur indus ssp. i) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 9 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 9 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 9",
    titleHindi: "तोता - 9",
    intro: "The rose-ringed parakeet type 9 (Psittacula krameri ssp. i) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 9 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 9 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 9",
    titleHindi: "कोयल - 9",
    intro: "The asian koel type 9 (Eudynamys scolopaceus ssp. i) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 9 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 9 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 9",
    titleHindi: "तंबट - 9",
    intro: "The coppersmith barbet type 9 (Psilopogon haemacephalus ssp. i) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 9 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 9 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 9",
    titleHindi: "चित्तीदार उल्लू - 9",
    intro: "The spotted owlet type 9 (Athene brama ssp. i) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 9 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 9 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 9",
    titleHindi: "कोतवाल - 9",
    intro: "The black drongo type 9 (Dicrurus macrocercus ssp. i) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 9 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 9 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 9",
    titleHindi: "शकरखोरा - 9",
    intro: "The purple sunbird type 9 (Cinnyris asiaticus ssp. i) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 9 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 9 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 9",
    titleHindi: "श्वेतकंठ किलकिला - 9",
    intro: "The white-throated kingfisher type 9 (Halcyon smyrnensis ssp. i) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 9 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 9 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 9",
    titleHindi: "बुलबुल - 9",
    intro: "The red-vented bulbul type 9 (Pycnonotus cafer ssp. i) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 9 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 9 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 9",
    titleHindi: "शिकरा - 9",
    intro: "The shikra type 9 (Accipiter badius ssp. i) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 9 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 9 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 9",
    titleHindi: "बया - 9",
    intro: "The baya weaver type 9 (Ploceus philippinus ssp. i) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 9 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 9 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 9",
    titleHindi: "सात भाई - 9",
    intro: "The jungle babbler type 9 (Argya striata ssp. i) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 9 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 9 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 9",
    titleHindi: "नीलकंठ - 9",
    intro: "The indian roller type 9 (Coracias benghalensis ssp. i) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 9 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 9 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 9",
    titleHindi: "मैना - 9",
    intro: "The common myna type 9 (Acridotheres tristis ssp. i) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 9 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 9 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 9",
    titleHindi: "गौ बगुला - 9",
    intro: "The cattle egret type 9 (Bubulcus ibis ssp. i) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 9 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 9 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 9",
    titleHindi: "छोटा बगुला - 9",
    intro: "The little egret type 9 (Egretta garzetta ssp. i) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 9 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 9 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 9",
    titleHindi: "चितकबरा किलकिला - 9",
    intro: "The pied kingfisher type 9 (Ceryle rudis ssp. i) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 9 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 9 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 9",
    titleHindi: "महॉक - 9",
    intro: "The greater coucal type 9 (Centropus sinensis ssp. i) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 9 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 9 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 9",
    titleHindi: "काली चील - 9",
    intro: "The black kite type 9 (Milvus migrans ssp. i) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 9 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 9 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 10",
    titleHindi: "नवरंग - 10",
    intro: "The indian pitta type 10 (Pitta brachyura ssp. j) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 10 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 10 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 10",
    titleHindi: "ब्राह्मणी चील - 10",
    intro: "The brahminy kite type 10 (Haliastur indus ssp. j) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 10 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 10 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 10",
    titleHindi: "तोता - 10",
    intro: "The rose-ringed parakeet type 10 (Psittacula krameri ssp. j) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 10 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 10 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 10",
    titleHindi: "कोयल - 10",
    intro: "The asian koel type 10 (Eudynamys scolopaceus ssp. j) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 10 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 10 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 10",
    titleHindi: "तंबट - 10",
    intro: "The coppersmith barbet type 10 (Psilopogon haemacephalus ssp. j) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 10 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 10 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 10",
    titleHindi: "चित्तीदार उल्लू - 10",
    intro: "The spotted owlet type 10 (Athene brama ssp. j) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 10 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 10 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 10",
    titleHindi: "कोतवाल - 10",
    intro: "The black drongo type 10 (Dicrurus macrocercus ssp. j) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 10 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 10 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 10",
    titleHindi: "शकरखोरा - 10",
    intro: "The purple sunbird type 10 (Cinnyris asiaticus ssp. j) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 10 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 10 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 10",
    titleHindi: "श्वेतकंठ किलकिला - 10",
    intro: "The white-throated kingfisher type 10 (Halcyon smyrnensis ssp. j) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 10 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 10 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 10",
    titleHindi: "बुलबुल - 10",
    intro: "The red-vented bulbul type 10 (Pycnonotus cafer ssp. j) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 10 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 10 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 10",
    titleHindi: "शिकरा - 10",
    intro: "The shikra type 10 (Accipiter badius ssp. j) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 10 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 10 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 10",
    titleHindi: "बया - 10",
    intro: "The baya weaver type 10 (Ploceus philippinus ssp. j) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 10 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 10 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 10",
    titleHindi: "सात भाई - 10",
    intro: "The jungle babbler type 10 (Argya striata ssp. j) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 10 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 10 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 10",
    titleHindi: "नीलकंठ - 10",
    intro: "The indian roller type 10 (Coracias benghalensis ssp. j) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 10 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 10 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 10",
    titleHindi: "मैना - 10",
    intro: "The common myna type 10 (Acridotheres tristis ssp. j) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 10 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 10 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 10",
    titleHindi: "गौ बगुला - 10",
    intro: "The cattle egret type 10 (Bubulcus ibis ssp. j) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 10 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 10 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 10",
    titleHindi: "छोटा बगुला - 10",
    intro: "The little egret type 10 (Egretta garzetta ssp. j) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 10 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 10 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 10",
    titleHindi: "चितकबरा किलकिला - 10",
    intro: "The pied kingfisher type 10 (Ceryle rudis ssp. j) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 10 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 10 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 10",
    titleHindi: "महॉक - 10",
    intro: "The greater coucal type 10 (Centropus sinensis ssp. j) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 10 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 10 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 10",
    titleHindi: "काली चील - 10",
    intro: "The black kite type 10 (Milvus migrans ssp. j) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 10 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 10 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 11",
    titleHindi: "नवरंग - 11",
    intro: "The indian pitta type 11 (Pitta brachyura ssp. k) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 11 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 11 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 11",
    titleHindi: "ब्राह्मणी चील - 11",
    intro: "The brahminy kite type 11 (Haliastur indus ssp. k) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 11 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 11 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 11",
    titleHindi: "तोता - 11",
    intro: "The rose-ringed parakeet type 11 (Psittacula krameri ssp. k) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 11 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 11 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 11",
    titleHindi: "कोयल - 11",
    intro: "The asian koel type 11 (Eudynamys scolopaceus ssp. k) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 11 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 11 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 11",
    titleHindi: "तंबट - 11",
    intro: "The coppersmith barbet type 11 (Psilopogon haemacephalus ssp. k) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 11 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 11 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 11",
    titleHindi: "चित्तीदार उल्लू - 11",
    intro: "The spotted owlet type 11 (Athene brama ssp. k) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 11 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 11 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 11",
    titleHindi: "कोतवाल - 11",
    intro: "The black drongo type 11 (Dicrurus macrocercus ssp. k) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 11 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 11 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 11",
    titleHindi: "शकरखोरा - 11",
    intro: "The purple sunbird type 11 (Cinnyris asiaticus ssp. k) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 11 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 11 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 11",
    titleHindi: "श्वेतकंठ किलकिला - 11",
    intro: "The white-throated kingfisher type 11 (Halcyon smyrnensis ssp. k) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 11 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 11 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 11",
    titleHindi: "बुलबुल - 11",
    intro: "The red-vented bulbul type 11 (Pycnonotus cafer ssp. k) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 11 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 11 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 11",
    titleHindi: "शिकरा - 11",
    intro: "The shikra type 11 (Accipiter badius ssp. k) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 11 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 11 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 11",
    titleHindi: "बया - 11",
    intro: "The baya weaver type 11 (Ploceus philippinus ssp. k) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 11 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 11 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 11",
    titleHindi: "सात भाई - 11",
    intro: "The jungle babbler type 11 (Argya striata ssp. k) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 11 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 11 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 11",
    titleHindi: "नीलकंठ - 11",
    intro: "The indian roller type 11 (Coracias benghalensis ssp. k) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 11 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 11 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 11",
    titleHindi: "मैना - 11",
    intro: "The common myna type 11 (Acridotheres tristis ssp. k) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 11 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 11 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 11",
    titleHindi: "गौ बगुला - 11",
    intro: "The cattle egret type 11 (Bubulcus ibis ssp. k) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 11 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 11 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 11",
    titleHindi: "छोटा बगुला - 11",
    intro: "The little egret type 11 (Egretta garzetta ssp. k) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 11 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 11 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 11",
    titleHindi: "चितकबरा किलकिला - 11",
    intro: "The pied kingfisher type 11 (Ceryle rudis ssp. k) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 11 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 11 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 11",
    titleHindi: "महॉक - 11",
    intro: "The greater coucal type 11 (Centropus sinensis ssp. k) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 11 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 11 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 11",
    titleHindi: "काली चील - 11",
    intro: "The black kite type 11 (Milvus migrans ssp. k) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 11 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 11 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 12",
    titleHindi: "नवरंग - 12",
    intro: "The indian pitta type 12 (Pitta brachyura ssp. l) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 12 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 12 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 12",
    titleHindi: "ब्राह्मणी चील - 12",
    intro: "The brahminy kite type 12 (Haliastur indus ssp. l) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 12 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 12 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 12",
    titleHindi: "तोता - 12",
    intro: "The rose-ringed parakeet type 12 (Psittacula krameri ssp. l) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 12 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 12 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 12",
    titleHindi: "कोयल - 12",
    intro: "The asian koel type 12 (Eudynamys scolopaceus ssp. l) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 12 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 12 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 12",
    titleHindi: "तंबट - 12",
    intro: "The coppersmith barbet type 12 (Psilopogon haemacephalus ssp. l) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 12 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 12 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 12",
    titleHindi: "चित्तीदार उल्लू - 12",
    intro: "The spotted owlet type 12 (Athene brama ssp. l) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 12 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 12 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 12",
    titleHindi: "कोतवाल - 12",
    intro: "The black drongo type 12 (Dicrurus macrocercus ssp. l) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 12 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 12 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 12",
    titleHindi: "शकरखोरा - 12",
    intro: "The purple sunbird type 12 (Cinnyris asiaticus ssp. l) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 12 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 12 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 12",
    titleHindi: "श्वेतकंठ किलकिला - 12",
    intro: "The white-throated kingfisher type 12 (Halcyon smyrnensis ssp. l) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 12 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 12 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 12",
    titleHindi: "बुलबुल - 12",
    intro: "The red-vented bulbul type 12 (Pycnonotus cafer ssp. l) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 12 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 12 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 12",
    titleHindi: "शिकरा - 12",
    intro: "The shikra type 12 (Accipiter badius ssp. l) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 12 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 12 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 12",
    titleHindi: "बया - 12",
    intro: "The baya weaver type 12 (Ploceus philippinus ssp. l) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 12 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 12 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 12",
    titleHindi: "सात भाई - 12",
    intro: "The jungle babbler type 12 (Argya striata ssp. l) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 12 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 12 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 12",
    titleHindi: "नीलकंठ - 12",
    intro: "The indian roller type 12 (Coracias benghalensis ssp. l) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 12 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 12 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 12",
    titleHindi: "मैना - 12",
    intro: "The common myna type 12 (Acridotheres tristis ssp. l) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 12 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 12 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 12",
    titleHindi: "गौ बगुला - 12",
    intro: "The cattle egret type 12 (Bubulcus ibis ssp. l) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 12 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 12 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 12",
    titleHindi: "छोटा बगुला - 12",
    intro: "The little egret type 12 (Egretta garzetta ssp. l) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 12 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 12 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 12",
    titleHindi: "चितकबरा किलकिला - 12",
    intro: "The pied kingfisher type 12 (Ceryle rudis ssp. l) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 12 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 12 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 12",
    titleHindi: "महॉक - 12",
    intro: "The greater coucal type 12 (Centropus sinensis ssp. l) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 12 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 12 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 12",
    titleHindi: "काली चील - 12",
    intro: "The black kite type 12 (Milvus migrans ssp. l) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 12 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 12 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 13",
    titleHindi: "नवरंग - 13",
    intro: "The indian pitta type 13 (Pitta brachyura ssp. m) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 13 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 13 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 13",
    titleHindi: "ब्राह्मणी चील - 13",
    intro: "The brahminy kite type 13 (Haliastur indus ssp. m) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 13 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 13 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 13",
    titleHindi: "तोता - 13",
    intro: "The rose-ringed parakeet type 13 (Psittacula krameri ssp. m) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 13 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 13 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 13",
    titleHindi: "कोयल - 13",
    intro: "The asian koel type 13 (Eudynamys scolopaceus ssp. m) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 13 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 13 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 13",
    titleHindi: "तंबट - 13",
    intro: "The coppersmith barbet type 13 (Psilopogon haemacephalus ssp. m) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 13 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 13 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 13",
    titleHindi: "चित्तीदार उल्लू - 13",
    intro: "The spotted owlet type 13 (Athene brama ssp. m) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 13 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 13 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 13",
    titleHindi: "कोतवाल - 13",
    intro: "The black drongo type 13 (Dicrurus macrocercus ssp. m) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 13 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 13 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 13",
    titleHindi: "शकरखोरा - 13",
    intro: "The purple sunbird type 13 (Cinnyris asiaticus ssp. m) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 13 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 13 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 13",
    titleHindi: "श्वेतकंठ किलकिला - 13",
    intro: "The white-throated kingfisher type 13 (Halcyon smyrnensis ssp. m) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 13 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 13 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 13",
    titleHindi: "बुलबुल - 13",
    intro: "The red-vented bulbul type 13 (Pycnonotus cafer ssp. m) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 13 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 13 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 13",
    titleHindi: "शिकरा - 13",
    intro: "The shikra type 13 (Accipiter badius ssp. m) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 13 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 13 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 13",
    titleHindi: "बया - 13",
    intro: "The baya weaver type 13 (Ploceus philippinus ssp. m) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 13 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 13 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 13",
    titleHindi: "सात भाई - 13",
    intro: "The jungle babbler type 13 (Argya striata ssp. m) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 13 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 13 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 13",
    titleHindi: "नीलकंठ - 13",
    intro: "The indian roller type 13 (Coracias benghalensis ssp. m) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 13 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 13 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 13",
    titleHindi: "मैना - 13",
    intro: "The common myna type 13 (Acridotheres tristis ssp. m) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 13 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 13 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 13",
    titleHindi: "गौ बगुला - 13",
    intro: "The cattle egret type 13 (Bubulcus ibis ssp. m) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 13 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 13 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 13",
    titleHindi: "छोटा बगुला - 13",
    intro: "The little egret type 13 (Egretta garzetta ssp. m) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 13 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 13 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 13",
    titleHindi: "चितकबरा किलकिला - 13",
    intro: "The pied kingfisher type 13 (Ceryle rudis ssp. m) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 13 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 13 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 13",
    titleHindi: "महॉक - 13",
    intro: "The greater coucal type 13 (Centropus sinensis ssp. m) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 13 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 13 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 13",
    titleHindi: "काली चील - 13",
    intro: "The black kite type 13 (Milvus migrans ssp. m) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 13 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 13 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 14",
    titleHindi: "नवरंग - 14",
    intro: "The indian pitta type 14 (Pitta brachyura ssp. n) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 14 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 14 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 14",
    titleHindi: "ब्राह्मणी चील - 14",
    intro: "The brahminy kite type 14 (Haliastur indus ssp. n) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 14 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 14 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 14",
    titleHindi: "तोता - 14",
    intro: "The rose-ringed parakeet type 14 (Psittacula krameri ssp. n) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 14 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 14 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 14",
    titleHindi: "कोयल - 14",
    intro: "The asian koel type 14 (Eudynamys scolopaceus ssp. n) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 14 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 14 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 14",
    titleHindi: "तंबट - 14",
    intro: "The coppersmith barbet type 14 (Psilopogon haemacephalus ssp. n) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 14 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 14 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 14",
    titleHindi: "चित्तीदार उल्लू - 14",
    intro: "The spotted owlet type 14 (Athene brama ssp. n) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 14 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 14 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 14",
    titleHindi: "कोतवाल - 14",
    intro: "The black drongo type 14 (Dicrurus macrocercus ssp. n) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 14 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 14 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 14",
    titleHindi: "शकरखोरा - 14",
    intro: "The purple sunbird type 14 (Cinnyris asiaticus ssp. n) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 14 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 14 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 14",
    titleHindi: "श्वेतकंठ किलकिला - 14",
    intro: "The white-throated kingfisher type 14 (Halcyon smyrnensis ssp. n) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 14 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 14 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 14",
    titleHindi: "बुलबुल - 14",
    intro: "The red-vented bulbul type 14 (Pycnonotus cafer ssp. n) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 14 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 14 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 14",
    titleHindi: "शिकरा - 14",
    intro: "The shikra type 14 (Accipiter badius ssp. n) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 14 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 14 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 14",
    titleHindi: "बया - 14",
    intro: "The baya weaver type 14 (Ploceus philippinus ssp. n) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 14 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 14 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 14",
    titleHindi: "सात भाई - 14",
    intro: "The jungle babbler type 14 (Argya striata ssp. n) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 14 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 14 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 14",
    titleHindi: "नीलकंठ - 14",
    intro: "The indian roller type 14 (Coracias benghalensis ssp. n) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 14 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 14 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 14",
    titleHindi: "मैना - 14",
    intro: "The common myna type 14 (Acridotheres tristis ssp. n) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 14 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 14 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 14",
    titleHindi: "गौ बगुला - 14",
    intro: "The cattle egret type 14 (Bubulcus ibis ssp. n) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 14 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 14 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 14",
    titleHindi: "छोटा बगुला - 14",
    intro: "The little egret type 14 (Egretta garzetta ssp. n) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 14 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 14 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 14",
    titleHindi: "चितकबरा किलकिला - 14",
    intro: "The pied kingfisher type 14 (Ceryle rudis ssp. n) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 14 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 14 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 14",
    titleHindi: "महॉक - 14",
    intro: "The greater coucal type 14 (Centropus sinensis ssp. n) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 14 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 14 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 14",
    titleHindi: "काली चील - 14",
    intro: "The black kite type 14 (Milvus migrans ssp. n) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 14 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 14 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 15",
    titleHindi: "नवरंग - 15",
    intro: "The indian pitta type 15 (Pitta brachyura ssp. o) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 15 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 15 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 15",
    titleHindi: "ब्राह्मणी चील - 15",
    intro: "The brahminy kite type 15 (Haliastur indus ssp. o) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 15 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 15 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 15",
    titleHindi: "तोता - 15",
    intro: "The rose-ringed parakeet type 15 (Psittacula krameri ssp. o) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 15 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 15 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 15",
    titleHindi: "कोयल - 15",
    intro: "The asian koel type 15 (Eudynamys scolopaceus ssp. o) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 15 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 15 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 15",
    titleHindi: "तंबट - 15",
    intro: "The coppersmith barbet type 15 (Psilopogon haemacephalus ssp. o) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 15 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 15 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 15",
    titleHindi: "चित्तीदार उल्लू - 15",
    intro: "The spotted owlet type 15 (Athene brama ssp. o) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 15 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 15 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 15",
    titleHindi: "कोतवाल - 15",
    intro: "The black drongo type 15 (Dicrurus macrocercus ssp. o) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 15 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 15 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 15",
    titleHindi: "शकरखोरा - 15",
    intro: "The purple sunbird type 15 (Cinnyris asiaticus ssp. o) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 15 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 15 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 15",
    titleHindi: "श्वेतकंठ किलकिला - 15",
    intro: "The white-throated kingfisher type 15 (Halcyon smyrnensis ssp. o) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 15 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 15 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 15",
    titleHindi: "बुलबुल - 15",
    intro: "The red-vented bulbul type 15 (Pycnonotus cafer ssp. o) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 15 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 15 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 15",
    titleHindi: "शिकरा - 15",
    intro: "The shikra type 15 (Accipiter badius ssp. o) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 15 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 15 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 15",
    titleHindi: "बया - 15",
    intro: "The baya weaver type 15 (Ploceus philippinus ssp. o) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 15 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 15 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 15",
    titleHindi: "सात भाई - 15",
    intro: "The jungle babbler type 15 (Argya striata ssp. o) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 15 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 15 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 15",
    titleHindi: "नीलकंठ - 15",
    intro: "The indian roller type 15 (Coracias benghalensis ssp. o) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 15 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 15 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 15",
    titleHindi: "मैना - 15",
    intro: "The common myna type 15 (Acridotheres tristis ssp. o) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 15 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 15 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 15",
    titleHindi: "गौ बगुला - 15",
    intro: "The cattle egret type 15 (Bubulcus ibis ssp. o) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 15 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 15 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 15",
    titleHindi: "छोटा बगुला - 15",
    intro: "The little egret type 15 (Egretta garzetta ssp. o) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 15 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 15 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 15",
    titleHindi: "चितकबरा किलकिला - 15",
    intro: "The pied kingfisher type 15 (Ceryle rudis ssp. o) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 15 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 15 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 15",
    titleHindi: "महॉक - 15",
    intro: "The greater coucal type 15 (Centropus sinensis ssp. o) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 15 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 15 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 15",
    titleHindi: "काली चील - 15",
    intro: "The black kite type 15 (Milvus migrans ssp. o) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 15 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 15 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 16",
    titleHindi: "नवरंग - 16",
    intro: "The indian pitta type 16 (Pitta brachyura ssp. p) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 16 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 16 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 16",
    titleHindi: "ब्राह्मणी चील - 16",
    intro: "The brahminy kite type 16 (Haliastur indus ssp. p) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 16 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 16 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 16",
    titleHindi: "तोता - 16",
    intro: "The rose-ringed parakeet type 16 (Psittacula krameri ssp. p) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 16 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 16 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 16",
    titleHindi: "कोयल - 16",
    intro: "The asian koel type 16 (Eudynamys scolopaceus ssp. p) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 16 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 16 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 16",
    titleHindi: "तंबट - 16",
    intro: "The coppersmith barbet type 16 (Psilopogon haemacephalus ssp. p) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 16 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 16 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 16",
    titleHindi: "चित्तीदार उल्लू - 16",
    intro: "The spotted owlet type 16 (Athene brama ssp. p) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 16 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 16 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 16",
    titleHindi: "कोतवाल - 16",
    intro: "The black drongo type 16 (Dicrurus macrocercus ssp. p) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 16 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 16 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 16",
    titleHindi: "शकरखोरा - 16",
    intro: "The purple sunbird type 16 (Cinnyris asiaticus ssp. p) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 16 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 16 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 16",
    titleHindi: "श्वेतकंठ किलकिला - 16",
    intro: "The white-throated kingfisher type 16 (Halcyon smyrnensis ssp. p) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 16 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 16 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 16",
    titleHindi: "बुलबुल - 16",
    intro: "The red-vented bulbul type 16 (Pycnonotus cafer ssp. p) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 16 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 16 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 16",
    titleHindi: "शिकरा - 16",
    intro: "The shikra type 16 (Accipiter badius ssp. p) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 16 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 16 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 16",
    titleHindi: "बया - 16",
    intro: "The baya weaver type 16 (Ploceus philippinus ssp. p) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 16 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 16 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 16",
    titleHindi: "सात भाई - 16",
    intro: "The jungle babbler type 16 (Argya striata ssp. p) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 16 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 16 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 16",
    titleHindi: "नीलकंठ - 16",
    intro: "The indian roller type 16 (Coracias benghalensis ssp. p) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 16 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 16 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 16",
    titleHindi: "मैना - 16",
    intro: "The common myna type 16 (Acridotheres tristis ssp. p) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 16 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 16 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 16",
    titleHindi: "गौ बगुला - 16",
    intro: "The cattle egret type 16 (Bubulcus ibis ssp. p) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 16 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 16 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 16",
    titleHindi: "छोटा बगुला - 16",
    intro: "The little egret type 16 (Egretta garzetta ssp. p) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 16 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 16 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 16",
    titleHindi: "चितकबरा किलकिला - 16",
    intro: "The pied kingfisher type 16 (Ceryle rudis ssp. p) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 16 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 16 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 16",
    titleHindi: "महॉक - 16",
    intro: "The greater coucal type 16 (Centropus sinensis ssp. p) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 16 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 16 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 16",
    titleHindi: "काली चील - 16",
    intro: "The black kite type 16 (Milvus migrans ssp. p) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 16 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 16 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 17",
    titleHindi: "नवरंग - 17",
    intro: "The indian pitta type 17 (Pitta brachyura ssp. q) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 17 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 17 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 17",
    titleHindi: "ब्राह्मणी चील - 17",
    intro: "The brahminy kite type 17 (Haliastur indus ssp. q) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 17 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 17 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 17",
    titleHindi: "तोता - 17",
    intro: "The rose-ringed parakeet type 17 (Psittacula krameri ssp. q) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 17 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 17 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 17",
    titleHindi: "कोयल - 17",
    intro: "The asian koel type 17 (Eudynamys scolopaceus ssp. q) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 17 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 17 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 17",
    titleHindi: "तंबट - 17",
    intro: "The coppersmith barbet type 17 (Psilopogon haemacephalus ssp. q) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 17 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 17 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 17",
    titleHindi: "चित्तीदार उल्लू - 17",
    intro: "The spotted owlet type 17 (Athene brama ssp. q) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 17 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 17 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 17",
    titleHindi: "कोतवाल - 17",
    intro: "The black drongo type 17 (Dicrurus macrocercus ssp. q) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 17 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 17 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 17",
    titleHindi: "शकरखोरा - 17",
    intro: "The purple sunbird type 17 (Cinnyris asiaticus ssp. q) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 17 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 17 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 17",
    titleHindi: "श्वेतकंठ किलकिला - 17",
    intro: "The white-throated kingfisher type 17 (Halcyon smyrnensis ssp. q) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 17 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 17 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 17",
    titleHindi: "बुलबुल - 17",
    intro: "The red-vented bulbul type 17 (Pycnonotus cafer ssp. q) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 17 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 17 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 17",
    titleHindi: "शिकरा - 17",
    intro: "The shikra type 17 (Accipiter badius ssp. q) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 17 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 17 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 17",
    titleHindi: "बया - 17",
    intro: "The baya weaver type 17 (Ploceus philippinus ssp. q) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 17 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 17 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 17",
    titleHindi: "सात भाई - 17",
    intro: "The jungle babbler type 17 (Argya striata ssp. q) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 17 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 17 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 17",
    titleHindi: "नीलकंठ - 17",
    intro: "The indian roller type 17 (Coracias benghalensis ssp. q) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 17 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 17 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 17",
    titleHindi: "मैना - 17",
    intro: "The common myna type 17 (Acridotheres tristis ssp. q) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 17 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 17 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 17",
    titleHindi: "गौ बगुला - 17",
    intro: "The cattle egret type 17 (Bubulcus ibis ssp. q) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 17 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 17 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 17",
    titleHindi: "छोटा बगुला - 17",
    intro: "The little egret type 17 (Egretta garzetta ssp. q) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 17 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 17 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 17",
    titleHindi: "चितकबरा किलकिला - 17",
    intro: "The pied kingfisher type 17 (Ceryle rudis ssp. q) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 17 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 17 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 17",
    titleHindi: "महॉक - 17",
    intro: "The greater coucal type 17 (Centropus sinensis ssp. q) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 17 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 17 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 17",
    titleHindi: "काली चील - 17",
    intro: "The black kite type 17 (Milvus migrans ssp. q) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 17 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 17 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 18",
    titleHindi: "नवरंग - 18",
    intro: "The indian pitta type 18 (Pitta brachyura ssp. r) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 18 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 18 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 18",
    titleHindi: "ब्राह्मणी चील - 18",
    intro: "The brahminy kite type 18 (Haliastur indus ssp. r) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 18 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 18 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 18",
    titleHindi: "तोता - 18",
    intro: "The rose-ringed parakeet type 18 (Psittacula krameri ssp. r) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 18 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 18 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 18",
    titleHindi: "कोयल - 18",
    intro: "The asian koel type 18 (Eudynamys scolopaceus ssp. r) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 18 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 18 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 18",
    titleHindi: "तंबट - 18",
    intro: "The coppersmith barbet type 18 (Psilopogon haemacephalus ssp. r) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 18 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 18 makes a metallic call that sounds like a hammer striking copper."
  },
  {
    title: "Spotted Owlet Type 18",
    titleHindi: "चित्तीदार उल्लू - 18",
    intro: "The spotted owlet type 18 (Athene brama ssp. r) is a highly specialized species adapted to farmland and cities.",
    details: "Thriving in farmland and cities, the spotted owlet type 18 has developed unique characteristics to find food and survive. As a species that feeds on insects and mice, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The spotted owlet type 18 roosts in small groups in tree cavities and bows when alarmed."
  },
  {
    title: "Black Drongo Type 18",
    titleHindi: "कोतवाल - 18",
    intro: "The black drongo type 18 (Dicrurus macrocercus ssp. r) is a highly specialized species adapted to agricultural fields.",
    details: "Thriving in agricultural fields, the black drongo type 18 has developed unique characteristics to find food and survive. As a species that feeds on flying insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black drongo type 18 is known as the king crow because it aggressively drives away larger predators."
  },
  {
    title: "Purple Sunbird Type 18",
    titleHindi: "शकरखोरा - 18",
    intro: "The purple sunbird type 18 (Cinnyris asiaticus ssp. r) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the purple sunbird type 18 has developed unique characteristics to find food and survive. As a species that feeds on nectar, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The purple sunbird type 18 the male displays a brilliant metallic purple plumage during breeding season."
  },
  {
    title: "White-Throated Kingfisher Type 18",
    titleHindi: "श्वेतकंठ किलकिला - 18",
    intro: "The white-throated kingfisher type 18 (Halcyon smyrnensis ssp. r) is a highly specialized species adapted to plains and wetlands.",
    details: "Thriving in plains and wetlands, the white-throated kingfisher type 18 has developed unique characteristics to find food and survive. As a species that feeds on lizards, frogs, and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The white-throated kingfisher type 18 can hunt far from water, catching prey in dry grasslands."
  },
  {
    title: "Red-Vented Bulbul Type 18",
    titleHindi: "बुलबुल - 18",
    intro: "The red-vented bulbul type 18 (Pycnonotus cafer ssp. r) is a highly specialized species adapted to scrub and gardens.",
    details: "Thriving in scrub and gardens, the red-vented bulbul type 18 has developed unique characteristics to find food and survive. As a species that feeds on fruits and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The red-vented bulbul type 18 is highly adaptable and has successfully colonized many islands worldwide."
  },
  {
    title: "Shikra Type 18",
    titleHindi: "शिकरा - 18",
    intro: "The shikra type 18 (Accipiter badius ssp. r) is a highly specialized species adapted to forests and farmlands.",
    details: "Thriving in forests and farmlands, the shikra type 18 has developed unique characteristics to find food and survive. As a species that feeds on lizards and small birds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The shikra type 18 is a small raptor that hunts with sudden, explosive bursts of speed."
  },
  {
    title: "Baya Weaver Type 18",
    titleHindi: "बया - 18",
    intro: "The baya weaver type 18 (Ploceus philippinus ssp. r) is a highly specialized species adapted to grasslands and scrub.",
    details: "Thriving in grasslands and scrub, the baya weaver type 18 has developed unique characteristics to find food and survive. As a species that feeds on seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The baya weaver type 18 males weave intricate hanging nests out of grass to attract mates."
  },
  {
    title: "Jungle Babbler Type 18",
    titleHindi: "सात भाई - 18",
    intro: "The jungle babbler type 18 (Argya striata ssp. r) is a highly specialized species adapted to gardens and scrub.",
    details: "Thriving in gardens and scrub, the jungle babbler type 18 has developed unique characteristics to find food and survive. As a species that feeds on insects and seeds, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The jungle babbler type 18 always foraging in groups of seven to ten, hence the name seven sisters."
  },
  {
    title: "Indian Roller Type 18",
    titleHindi: "नीलकंठ - 18",
    intro: "The indian roller type 18 (Coracias benghalensis ssp. r) is a highly specialized species adapted to cultivated plains.",
    details: "Thriving in cultivated plains, the indian roller type 18 has developed unique characteristics to find food and survive. As a species that feeds on insects and frogs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian roller type 18 performs spectacular aerobatic rolls during its courtship displays."
  },
  {
    title: "Common Myna Type 18",
    titleHindi: "मैना - 18",
    intro: "The common myna type 18 (Acridotheres tristis ssp. r) is a highly specialized species adapted to open country and cities.",
    details: "Thriving in open country and cities, the common myna type 18 has developed unique characteristics to find food and survive. As a species that feeds on insects and fruits, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The common myna type 18 is highly vocal, utilizing a wide range of clicks, squeaks, and whistles."
  },
  {
    title: "Cattle Egret Type 18",
    titleHindi: "गौ बगुला - 18",
    intro: "The cattle egret type 18 (Bubulcus ibis ssp. r) is a highly specialized species adapted to pastures and grasslands.",
    details: "Thriving in pastures and grasslands, the cattle egret type 18 has developed unique characteristics to find food and survive. As a species that feeds on grasshoppers and insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The cattle egret type 18 forages alongside cattle, catching insects stirred up by the animals."
  },
  {
    title: "Little Egret Type 18",
    titleHindi: "छोटा बगुला - 18",
    intro: "The little egret type 18 (Egretta garzetta ssp. r) is a highly specialized species adapted to wetlands and coasts.",
    details: "Thriving in wetlands and coasts, the little egret type 18 has developed unique characteristics to find food and survive. As a species that feeds on fish and amphibians, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The little egret type 18 uses its bright yellow feet to disturb fish in shallow water mud."
  },
  {
    title: "Pied Kingfisher Type 18",
    titleHindi: "चितकबरा किलकिला - 18",
    intro: "The pied kingfisher type 18 (Ceryle rudis ssp. r) is a highly specialized species adapted to lakes and large rivers.",
    details: "Thriving in lakes and large rivers, the pied kingfisher type 18 has developed unique characteristics to find food and survive. As a species that feeds on fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The pied kingfisher type 18 can hover stationary over water before diving vertically to catch prey."
  },
  {
    title: "Greater Coucal Type 18",
    titleHindi: "महॉक - 18",
    intro: "The greater coucal type 18 (Centropus sinensis ssp. r) is a highly specialized species adapted to scrub and wetlands.",
    details: "Thriving in scrub and wetlands, the greater coucal type 18 has developed unique characteristics to find food and survive. As a species that feeds on insects, snails, and lizards, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The greater coucal type 18 is a large, clumsy flyer with striking chestnut wings and red eyes."
  },
  {
    title: "Black Kite Type 18",
    titleHindi: "काली चील - 18",
    intro: "The black kite type 18 (Milvus migrans ssp. r) is a highly specialized species adapted to urban areas and docks.",
    details: "Thriving in urban areas and docks, the black kite type 18 has developed unique characteristics to find food and survive. As a species that feeds on scraps and small prey, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The black kite type 18 is a highly skilled flyer that can snatch food mid-air from humans."
  },
  {
    title: "Indian Pitta Type 19",
    titleHindi: "नवरंग - 19",
    intro: "The indian pitta type 19 (Pitta brachyura ssp. s) is a highly specialized species adapted to deciduous scrub.",
    details: "Thriving in deciduous scrub, the indian pitta type 19 has developed unique characteristics to find food and survive. As a species that feeds on insects, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The indian pitta type 19 has nine distinct colors on its plumage and calls at dawn and dusk."
  },
  {
    title: "Brahminy Kite Type 19",
    titleHindi: "ब्राह्मणी चील - 19",
    intro: "The brahminy kite type 19 (Haliastur indus ssp. s) is a highly specialized species adapted to coastal areas.",
    details: "Thriving in coastal areas, the brahminy kite type 19 has developed unique characteristics to find food and survive. As a species that feeds on crabs and fish, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The brahminy kite type 19 is considered the contemporary vehicle of Lord Vishnu in Hindu culture."
  },
  {
    title: "Rose-Ringed Parakeet Type 19",
    titleHindi: "तोता - 19",
    intro: "The rose-ringed parakeet type 19 (Psittacula krameri ssp. s) is a highly specialized species adapted to woodlands and cities.",
    details: "Thriving in woodlands and cities, the rose-ringed parakeet type 19 has developed unique characteristics to find food and survive. As a species that feeds on fruits and grains, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The rose-ringed parakeet type 19 has a remarkable lifespan of up to 30 years in captivity."
  },
  {
    title: "Asian Koel Type 19",
    titleHindi: "कोयल - 19",
    intro: "The asian koel type 19 (Eudynamys scolopaceus ssp. s) is a highly specialized species adapted to light woodlands.",
    details: "Thriving in light woodlands, the asian koel type 19 has developed unique characteristics to find food and survive. As a species that feeds on figs and berries, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The asian koel type 19 is a brood parasite laying its eggs in the nests of crows."
  },
  {
    title: "Coppersmith Barbet Type 19",
    titleHindi: "तंबट - 19",
    intro: "The coppersmith barbet type 19 (Psilopogon haemacephalus ssp. s) is a highly specialized species adapted to gardens and groves.",
    details: "Thriving in gardens and groves, the coppersmith barbet type 19 has developed unique characteristics to find food and survive. As a species that feeds on figs, it occupies an important place in its local food chain, contributing to seed dispersal, pest control, or ecological balance. Its behavior is finely tuned to its environment, allowing it to navigate changes and sustain its population.",
    wonder: "Did you know? The coppersmith barbet type 19 makes a metallic call that sounds like a hammer striking copper."
  }
];

export const flowersData: AranyaCard[] = [
  {
    title: "Sacred Lotus",
    titleHindi: "कमल",
    intro: "The sacred lotus (Nelumbo nucifera) is a beautiful flowering plant of the Nelumbonaceae family, growing in aquatic wetlands.",
    details: "Known for its stunning pink and white blooms, the sacred lotus is adapted to thrive in aquatic wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sacred lotus its leaves repel water and dirt through microscopic bumps, known as the lotus effect."
  },
  {
    title: "Damask Rose",
    titleHindi: "गुलाब",
    intro: "The damask rose (Rosa damascena) is a beautiful flowering plant of the Rosaceae family, growing in temperate valleys.",
    details: "Known for its stunning pink and red blooms, the damask rose is adapted to thrive in temperate valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The damask rose takes over 4,000 kilograms of rose petals to produce a single kilogram of essential oil."
  },
  {
    title: "Saffron Crocus",
    titleHindi: "केसर",
    intro: "The saffron crocus (Crocus sativus) is a beautiful flowering plant of the Iridaceae family, growing in mountain valleys.",
    details: "Known for its stunning purple and orange blooms, the saffron crocus is adapted to thrive in mountain valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The saffron crocus the valuable spice saffron is made from the hand-plucked red stigmas of this flower."
  },
  {
    title: "Night-Blooming Jasmine",
    titleHindi: "रात की रानी",
    intro: "The night-blooming jasmine (Cestrum nocturnum) is a beautiful flowering plant of the Solanaceae family, growing in subtropical gardens.",
    details: "Known for its stunning cream-white blooms, the night-blooming jasmine is adapted to thrive in subtropical gardens. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The night-blooming jasmine releases an intense, sweet fragrance at night that can be detected from 100 feet away."
  },
  {
    title: "Neelakurinji",
    titleHindi: "नीलकुरिंजी",
    intro: "The neelakurinji (Strobilanthes kunthiana) is a beautiful flowering plant of the Acanthaceae family, growing in shola grasslands.",
    details: "Known for its stunning blue-purple blooms, the neelakurinji is adapted to thrive in shola grasslands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The neelakurinji blooms collectively only once every 12 years, turning entire hillsides purple."
  },
  {
    title: "Orchid",
    titleHindi: "ऑर्किड",
    intro: "The orchid (Orchidaceae) is a beautiful flowering plant of the Orchidaceae family, growing in tropical rainforests.",
    details: "Known for its stunning varied colors blooms, the orchid is adapted to thrive in tropical rainforests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The orchid has bilateral symmetry and seeds so tiny that they lack nutrients, relying on fungi to germinate."
  },
  {
    title: "Titan Arum",
    titleHindi: "जाइंट अरुम",
    intro: "The titan arum (Amorphophallus titanum) is a beautiful flowering plant of the Araceae family, growing in rainforest openings.",
    details: "Known for its stunning maroon and green blooms, the titan arum is adapted to thrive in rainforest openings. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The titan arum produces the largest unbranched flower structure in the world, smelling of rotting meat."
  },
  {
    title: "Edelweiss",
    titleHindi: "एडेलवाइस",
    intro: "The edelweiss (Leontopodium nivale) is a beautiful flowering plant of the Asteraceae family, growing in alpine cliffs.",
    details: "Known for its stunning white and woolly blooms, the edelweiss is adapted to thrive in alpine cliffs. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The edelweiss has dense hair on its petals that filters ultraviolet light and protects it from mountain cold."
  },
  {
    title: "Sunflower",
    titleHindi: "सूरजमुखी",
    intro: "The sunflower (Helianthus annuus) is a beautiful flowering plant of the Asteraceae family, growing in sunny plains.",
    details: "Known for its stunning bright yellow blooms, the sunflower is adapted to thrive in sunny plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sunflower young flower buds exhibit heliotropism, tracking the movement of the sun from east to west."
  },
  {
    title: "Rafflesia",
    titleHindi: "रफ्लेशिया",
    intro: "The rafflesia (Rafflesia arnoldii) is a beautiful flowering plant of the Rafflesiaceae family, growing in rainforest floors.",
    details: "Known for its stunning reddish-brown blooms, the rafflesia is adapted to thrive in rainforest floors. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The rafflesia produces the largest single flower on Earth, measuring up to 3 feet in diameter."
  },
  {
    title: "Water Lily",
    titleHindi: "कुमुदनी",
    intro: "The water lily (Nymphaeaceae) is a beautiful flowering plant of the Nymphaeaceae family, growing in ponds and lakes.",
    details: "Known for its stunning white, blue, and pink blooms, the water lily is adapted to thrive in ponds and lakes. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The water lily its floating leaves have air chambers that transport oxygen down to the submerged roots."
  },
  {
    title: "Damask Violet",
    titleHindi: "बनफ्शा",
    intro: "The damask violet (Viola odorata) is a beautiful flowering plant of the Violaceae family, growing in woodland edges.",
    details: "Known for its stunning deep violet blooms, the damask violet is adapted to thrive in woodland edges. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The damask violet contains ionone, a chemical compound that temporarily desensitizes the human sense of smell."
  },
  {
    title: "Marigold",
    titleHindi: "गेंदा",
    intro: "The marigold (Tagetes erecta) is a beautiful flowering plant of the Asteraceae family, growing in cultivated gardens.",
    details: "Known for its stunning yellow and orange blooms, the marigold is adapted to thrive in cultivated gardens. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The marigold its roots exude chemicals that deter harmful pests and nematodes in the soil."
  },
  {
    title: "Hibiscus",
    titleHindi: "गुड़हल",
    intro: "The hibiscus (Hibiscus rosa-sinensis) is a beautiful flowering plant of the Malvaceae family, growing in tropical plains.",
    details: "Known for its stunning red and pink blooms, the hibiscus is adapted to thrive in tropical plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The hibiscus its petals contain natural mucilage that acts as a soothing skin moisturizer."
  },
  {
    title: "Flame of the Forest",
    titleHindi: "पलाश",
    intro: "The flame of the forest (Butea monosperma) is a beautiful flowering plant of the Fabaceae family, growing in dry deciduous forests.",
    details: "Known for its stunning bright orange-red blooms, the flame of the forest is adapted to thrive in dry deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The flame of the forest its vibrant blooms coat dry forests in spring, earning it the name flame of the forest."
  },
  {
    title: "Brahma Kamal",
    titleHindi: "ब्रह्म कमल",
    intro: "The brahma kamal (Saussurea obvallata) is a beautiful flowering plant of the Asteraceae family, growing in himalayan slopes.",
    details: "Known for its stunning pale yellow-green blooms, the brahma kamal is adapted to thrive in himalayan slopes. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The brahma kamal blooms only at night in high altitudes and is named after the Hindu creator god Brahma."
  },
  {
    title: "Morning Glory",
    titleHindi: "कलमी लता",
    intro: "The morning glory (Ipomoea purpurea) is a beautiful flowering plant of the Convolvulaceae family, growing in trellises and fields.",
    details: "Known for its stunning blue and purple blooms, the morning glory is adapted to thrive in trellises and fields. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The morning glory its flowers open early in the morning and wither by the afternoon of the same day."
  },
  {
    title: "Damask Jasmine",
    titleHindi: "मोगरा",
    intro: "The damask jasmine (Jasminum sambac) is a beautiful flowering plant of the Oleaceae family, growing in tropical plains.",
    details: "Known for its stunning pure white blooms, the damask jasmine is adapted to thrive in tropical plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The damask jasmine is the national flower of the Philippines and is widely used to make fragrant garlands."
  },
  {
    title: "Tulip",
    titleHindi: "ट्यूलिप",
    intro: "The tulip (Tulipa) is a beautiful flowering plant of the Liliaceae family, growing in temperate valleys.",
    details: "Known for its stunning diverse colors blooms, the tulip is adapted to thrive in temperate valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The tulip bulbs require a winter chilling period to trigger proper stem elongation and spring blooming."
  },
  {
    title: "Lavender",
    titleHindi: "लैवेंडर",
    intro: "The lavender (Lavandula angustifolia) is a beautiful flowering plant of the Lamiaceae family, growing in rocky hillsides.",
    details: "Known for its stunning pale purple blooms, the lavender is adapted to thrive in rocky hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lavender contains high amounts of linalool, which has clinically proven calming and sleep-inducing effects."
  },
  {
    title: "Palash Type 2",
    titleHindi: "पलाश - 2",
    intro: "The palash type 2 (Butea monosperma ssp. b) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 2 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 2 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 2",
    titleHindi: "कचनार - 2",
    intro: "The kachnar type 2 (Bauhinia variegata ssp. b) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 2 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 2 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 2",
    titleHindi: "अमलतास - 2",
    intro: "The amaltas type 2 (Cassia fistula ssp. b) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 2 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 2 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 2",
    titleHindi: "सेमल - 2",
    intro: "The semal type 2 (Bombax ceiba ssp. b) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 2 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 2 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 2",
    titleHindi: "गुलमोहर - 2",
    intro: "The gulmohar type 2 (Delonix regia ssp. b) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 2 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 2 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 2",
    titleHindi: "चम्पा - 2",
    intro: "The champa type 2 (Plumeria rubra ssp. b) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 2 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 2 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 2",
    titleHindi: "कनेर - 2",
    intro: "The kaner type 2 (Nerium oleander ssp. b) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 2 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 2 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 2",
    titleHindi: "सदाबहार - 2",
    intro: "The sadabahar type 2 (Catharanthus roseus ssp. b) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 2 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 2 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 2",
    titleHindi: "गेंदा - 2",
    intro: "The genda type 2 (Tagetes patula ssp. b) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 2 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 2 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 2",
    titleHindi: "जूही - 2",
    intro: "The juhi type 2 (Jasminum auriculatum ssp. b) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 2 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 2 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 2",
    titleHindi: "चमेली - 2",
    intro: "The chamele type 2 (Jasminum officinale ssp. b) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 2 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 2 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 2",
    titleHindi: "शिरीष - 2",
    intro: "The shirisha type 2 (Albizia lebbeck ssp. b) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 2 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 2 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 2",
    titleHindi: "कदम्ब - 2",
    intro: "The kadamba type 2 (Neolamarckia cadamba ssp. b) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 2 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 2 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 2",
    titleHindi: "पारिजात - 2",
    intro: "The parijat type 2 (Nyctanthes arbor-tristis ssp. b) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 2 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 2 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 2",
    titleHindi: "कुंद - 2",
    intro: "The kunda type 2 (Jasminum multiflorum ssp. b) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 2 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 2 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 2",
    titleHindi: "सफेद कमल - 2",
    intro: "The lotus (white) type 2 (Nelumbo nucifera var. alba ssp. b) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 2 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 2 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 2",
    titleHindi: "नीलोत्पल - 2",
    intro: "The nilotpala type 2 (Nymphaea nouchali ssp. b) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 2 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 2 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 2",
    titleHindi: "केतकी - 2",
    intro: "The ketaki type 2 (Pandanus odorifer ssp. b) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 2 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 2 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 2",
    titleHindi: "बकुल - 2",
    intro: "The bakula type 2 (Mimusops elengi ssp. b) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 2 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 2 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 2",
    titleHindi: "मधुमालती - 2",
    intro: "The madhumalti type 2 (Combretum indicum ssp. b) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 2 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 2 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 3",
    titleHindi: "पलाश - 3",
    intro: "The palash type 3 (Butea monosperma ssp. c) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 3 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 3 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 3",
    titleHindi: "कचनार - 3",
    intro: "The kachnar type 3 (Bauhinia variegata ssp. c) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 3 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 3 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 3",
    titleHindi: "अमलतास - 3",
    intro: "The amaltas type 3 (Cassia fistula ssp. c) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 3 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 3 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 3",
    titleHindi: "सेमल - 3",
    intro: "The semal type 3 (Bombax ceiba ssp. c) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 3 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 3 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 3",
    titleHindi: "गुलमोहर - 3",
    intro: "The gulmohar type 3 (Delonix regia ssp. c) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 3 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 3 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 3",
    titleHindi: "चम्पा - 3",
    intro: "The champa type 3 (Plumeria rubra ssp. c) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 3 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 3 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 3",
    titleHindi: "कनेर - 3",
    intro: "The kaner type 3 (Nerium oleander ssp. c) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 3 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 3 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 3",
    titleHindi: "सदाबहार - 3",
    intro: "The sadabahar type 3 (Catharanthus roseus ssp. c) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 3 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 3 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 3",
    titleHindi: "गेंदा - 3",
    intro: "The genda type 3 (Tagetes patula ssp. c) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 3 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 3 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 3",
    titleHindi: "जूही - 3",
    intro: "The juhi type 3 (Jasminum auriculatum ssp. c) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 3 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 3 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 3",
    titleHindi: "चमेली - 3",
    intro: "The chamele type 3 (Jasminum officinale ssp. c) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 3 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 3 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 3",
    titleHindi: "शिरीष - 3",
    intro: "The shirisha type 3 (Albizia lebbeck ssp. c) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 3 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 3 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 3",
    titleHindi: "कदम्ब - 3",
    intro: "The kadamba type 3 (Neolamarckia cadamba ssp. c) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 3 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 3 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 3",
    titleHindi: "पारिजात - 3",
    intro: "The parijat type 3 (Nyctanthes arbor-tristis ssp. c) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 3 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 3 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 3",
    titleHindi: "कुंद - 3",
    intro: "The kunda type 3 (Jasminum multiflorum ssp. c) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 3 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 3 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 3",
    titleHindi: "सफेद कमल - 3",
    intro: "The lotus (white) type 3 (Nelumbo nucifera var. alba ssp. c) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 3 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 3 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 3",
    titleHindi: "नीलोत्पल - 3",
    intro: "The nilotpala type 3 (Nymphaea nouchali ssp. c) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 3 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 3 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 3",
    titleHindi: "केतकी - 3",
    intro: "The ketaki type 3 (Pandanus odorifer ssp. c) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 3 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 3 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 3",
    titleHindi: "बकुल - 3",
    intro: "The bakula type 3 (Mimusops elengi ssp. c) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 3 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 3 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 3",
    titleHindi: "मधुमालती - 3",
    intro: "The madhumalti type 3 (Combretum indicum ssp. c) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 3 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 3 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 4",
    titleHindi: "पलाश - 4",
    intro: "The palash type 4 (Butea monosperma ssp. d) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 4 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 4 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 4",
    titleHindi: "कचनार - 4",
    intro: "The kachnar type 4 (Bauhinia variegata ssp. d) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 4 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 4 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 4",
    titleHindi: "अमलतास - 4",
    intro: "The amaltas type 4 (Cassia fistula ssp. d) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 4 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 4 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 4",
    titleHindi: "सेमल - 4",
    intro: "The semal type 4 (Bombax ceiba ssp. d) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 4 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 4 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 4",
    titleHindi: "गुलमोहर - 4",
    intro: "The gulmohar type 4 (Delonix regia ssp. d) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 4 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 4 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 4",
    titleHindi: "चम्पा - 4",
    intro: "The champa type 4 (Plumeria rubra ssp. d) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 4 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 4 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 4",
    titleHindi: "कनेर - 4",
    intro: "The kaner type 4 (Nerium oleander ssp. d) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 4 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 4 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 4",
    titleHindi: "सदाबहार - 4",
    intro: "The sadabahar type 4 (Catharanthus roseus ssp. d) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 4 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 4 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 4",
    titleHindi: "गेंदा - 4",
    intro: "The genda type 4 (Tagetes patula ssp. d) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 4 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 4 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 4",
    titleHindi: "जूही - 4",
    intro: "The juhi type 4 (Jasminum auriculatum ssp. d) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 4 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 4 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 4",
    titleHindi: "चमेली - 4",
    intro: "The chamele type 4 (Jasminum officinale ssp. d) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 4 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 4 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 4",
    titleHindi: "शिरीष - 4",
    intro: "The shirisha type 4 (Albizia lebbeck ssp. d) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 4 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 4 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 4",
    titleHindi: "कदम्ब - 4",
    intro: "The kadamba type 4 (Neolamarckia cadamba ssp. d) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 4 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 4 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 4",
    titleHindi: "पारिजात - 4",
    intro: "The parijat type 4 (Nyctanthes arbor-tristis ssp. d) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 4 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 4 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 4",
    titleHindi: "कुंद - 4",
    intro: "The kunda type 4 (Jasminum multiflorum ssp. d) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 4 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 4 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 4",
    titleHindi: "सफेद कमल - 4",
    intro: "The lotus (white) type 4 (Nelumbo nucifera var. alba ssp. d) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 4 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 4 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 4",
    titleHindi: "नीलोत्पल - 4",
    intro: "The nilotpala type 4 (Nymphaea nouchali ssp. d) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 4 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 4 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 4",
    titleHindi: "केतकी - 4",
    intro: "The ketaki type 4 (Pandanus odorifer ssp. d) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 4 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 4 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 4",
    titleHindi: "बकुल - 4",
    intro: "The bakula type 4 (Mimusops elengi ssp. d) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 4 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 4 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 4",
    titleHindi: "मधुमालती - 4",
    intro: "The madhumalti type 4 (Combretum indicum ssp. d) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 4 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 4 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 5",
    titleHindi: "पलाश - 5",
    intro: "The palash type 5 (Butea monosperma ssp. e) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 5 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 5 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 5",
    titleHindi: "कचनार - 5",
    intro: "The kachnar type 5 (Bauhinia variegata ssp. e) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 5 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 5 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 5",
    titleHindi: "अमलतास - 5",
    intro: "The amaltas type 5 (Cassia fistula ssp. e) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 5 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 5 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 5",
    titleHindi: "सेमल - 5",
    intro: "The semal type 5 (Bombax ceiba ssp. e) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 5 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 5 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 5",
    titleHindi: "गुलमोहर - 5",
    intro: "The gulmohar type 5 (Delonix regia ssp. e) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 5 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 5 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 5",
    titleHindi: "चम्पा - 5",
    intro: "The champa type 5 (Plumeria rubra ssp. e) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 5 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 5 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 5",
    titleHindi: "कनेर - 5",
    intro: "The kaner type 5 (Nerium oleander ssp. e) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 5 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 5 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 5",
    titleHindi: "सदाबहार - 5",
    intro: "The sadabahar type 5 (Catharanthus roseus ssp. e) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 5 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 5 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 5",
    titleHindi: "गेंदा - 5",
    intro: "The genda type 5 (Tagetes patula ssp. e) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 5 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 5 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 5",
    titleHindi: "जूही - 5",
    intro: "The juhi type 5 (Jasminum auriculatum ssp. e) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 5 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 5 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 5",
    titleHindi: "चमेली - 5",
    intro: "The chamele type 5 (Jasminum officinale ssp. e) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 5 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 5 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 5",
    titleHindi: "शिरीष - 5",
    intro: "The shirisha type 5 (Albizia lebbeck ssp. e) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 5 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 5 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 5",
    titleHindi: "कदम्ब - 5",
    intro: "The kadamba type 5 (Neolamarckia cadamba ssp. e) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 5 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 5 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 5",
    titleHindi: "पारिजात - 5",
    intro: "The parijat type 5 (Nyctanthes arbor-tristis ssp. e) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 5 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 5 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 5",
    titleHindi: "कुंद - 5",
    intro: "The kunda type 5 (Jasminum multiflorum ssp. e) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 5 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 5 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 5",
    titleHindi: "सफेद कमल - 5",
    intro: "The lotus (white) type 5 (Nelumbo nucifera var. alba ssp. e) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 5 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 5 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 5",
    titleHindi: "नीलोत्पल - 5",
    intro: "The nilotpala type 5 (Nymphaea nouchali ssp. e) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 5 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 5 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 5",
    titleHindi: "केतकी - 5",
    intro: "The ketaki type 5 (Pandanus odorifer ssp. e) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 5 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 5 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 5",
    titleHindi: "बकुल - 5",
    intro: "The bakula type 5 (Mimusops elengi ssp. e) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 5 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 5 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 5",
    titleHindi: "मधुमालती - 5",
    intro: "The madhumalti type 5 (Combretum indicum ssp. e) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 5 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 5 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 6",
    titleHindi: "पलाश - 6",
    intro: "The palash type 6 (Butea monosperma ssp. f) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 6 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 6 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 6",
    titleHindi: "कचनार - 6",
    intro: "The kachnar type 6 (Bauhinia variegata ssp. f) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 6 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 6 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 6",
    titleHindi: "अमलतास - 6",
    intro: "The amaltas type 6 (Cassia fistula ssp. f) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 6 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 6 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 6",
    titleHindi: "सेमल - 6",
    intro: "The semal type 6 (Bombax ceiba ssp. f) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 6 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 6 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 6",
    titleHindi: "गुलमोहर - 6",
    intro: "The gulmohar type 6 (Delonix regia ssp. f) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 6 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 6 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 6",
    titleHindi: "चम्पा - 6",
    intro: "The champa type 6 (Plumeria rubra ssp. f) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 6 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 6 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 6",
    titleHindi: "कनेर - 6",
    intro: "The kaner type 6 (Nerium oleander ssp. f) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 6 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 6 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 6",
    titleHindi: "सदाबहार - 6",
    intro: "The sadabahar type 6 (Catharanthus roseus ssp. f) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 6 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 6 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 6",
    titleHindi: "गेंदा - 6",
    intro: "The genda type 6 (Tagetes patula ssp. f) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 6 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 6 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 6",
    titleHindi: "जूही - 6",
    intro: "The juhi type 6 (Jasminum auriculatum ssp. f) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 6 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 6 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 6",
    titleHindi: "चमेली - 6",
    intro: "The chamele type 6 (Jasminum officinale ssp. f) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 6 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 6 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 6",
    titleHindi: "शिरीष - 6",
    intro: "The shirisha type 6 (Albizia lebbeck ssp. f) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 6 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 6 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 6",
    titleHindi: "कदम्ब - 6",
    intro: "The kadamba type 6 (Neolamarckia cadamba ssp. f) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 6 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 6 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 6",
    titleHindi: "पारिजात - 6",
    intro: "The parijat type 6 (Nyctanthes arbor-tristis ssp. f) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 6 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 6 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 6",
    titleHindi: "कुंद - 6",
    intro: "The kunda type 6 (Jasminum multiflorum ssp. f) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 6 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 6 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 6",
    titleHindi: "सफेद कमल - 6",
    intro: "The lotus (white) type 6 (Nelumbo nucifera var. alba ssp. f) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 6 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 6 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 6",
    titleHindi: "नीलोत्पल - 6",
    intro: "The nilotpala type 6 (Nymphaea nouchali ssp. f) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 6 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 6 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 6",
    titleHindi: "केतकी - 6",
    intro: "The ketaki type 6 (Pandanus odorifer ssp. f) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 6 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 6 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 6",
    titleHindi: "बकुल - 6",
    intro: "The bakula type 6 (Mimusops elengi ssp. f) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 6 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 6 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 6",
    titleHindi: "मधुमालती - 6",
    intro: "The madhumalti type 6 (Combretum indicum ssp. f) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 6 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 6 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 7",
    titleHindi: "पलाश - 7",
    intro: "The palash type 7 (Butea monosperma ssp. g) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 7 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 7 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 7",
    titleHindi: "कचनार - 7",
    intro: "The kachnar type 7 (Bauhinia variegata ssp. g) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 7 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 7 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 7",
    titleHindi: "अमलतास - 7",
    intro: "The amaltas type 7 (Cassia fistula ssp. g) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 7 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 7 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 7",
    titleHindi: "सेमल - 7",
    intro: "The semal type 7 (Bombax ceiba ssp. g) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 7 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 7 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 7",
    titleHindi: "गुलमोहर - 7",
    intro: "The gulmohar type 7 (Delonix regia ssp. g) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 7 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 7 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 7",
    titleHindi: "चम्पा - 7",
    intro: "The champa type 7 (Plumeria rubra ssp. g) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 7 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 7 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 7",
    titleHindi: "कनेर - 7",
    intro: "The kaner type 7 (Nerium oleander ssp. g) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 7 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 7 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 7",
    titleHindi: "सदाबहार - 7",
    intro: "The sadabahar type 7 (Catharanthus roseus ssp. g) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 7 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 7 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 7",
    titleHindi: "गेंदा - 7",
    intro: "The genda type 7 (Tagetes patula ssp. g) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 7 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 7 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 7",
    titleHindi: "जूही - 7",
    intro: "The juhi type 7 (Jasminum auriculatum ssp. g) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 7 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 7 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 7",
    titleHindi: "चमेली - 7",
    intro: "The chamele type 7 (Jasminum officinale ssp. g) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 7 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 7 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 7",
    titleHindi: "शिरीष - 7",
    intro: "The shirisha type 7 (Albizia lebbeck ssp. g) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 7 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 7 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 7",
    titleHindi: "कदम्ब - 7",
    intro: "The kadamba type 7 (Neolamarckia cadamba ssp. g) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 7 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 7 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 7",
    titleHindi: "पारिजात - 7",
    intro: "The parijat type 7 (Nyctanthes arbor-tristis ssp. g) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 7 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 7 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 7",
    titleHindi: "कुंद - 7",
    intro: "The kunda type 7 (Jasminum multiflorum ssp. g) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 7 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 7 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 7",
    titleHindi: "सफेद कमल - 7",
    intro: "The lotus (white) type 7 (Nelumbo nucifera var. alba ssp. g) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 7 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 7 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 7",
    titleHindi: "नीलोत्पल - 7",
    intro: "The nilotpala type 7 (Nymphaea nouchali ssp. g) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 7 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 7 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 7",
    titleHindi: "केतकी - 7",
    intro: "The ketaki type 7 (Pandanus odorifer ssp. g) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 7 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 7 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 7",
    titleHindi: "बकुल - 7",
    intro: "The bakula type 7 (Mimusops elengi ssp. g) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 7 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 7 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 7",
    titleHindi: "मधुमालती - 7",
    intro: "The madhumalti type 7 (Combretum indicum ssp. g) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 7 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 7 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 8",
    titleHindi: "पलाश - 8",
    intro: "The palash type 8 (Butea monosperma ssp. h) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 8 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 8 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 8",
    titleHindi: "कचनार - 8",
    intro: "The kachnar type 8 (Bauhinia variegata ssp. h) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 8 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 8 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 8",
    titleHindi: "अमलतास - 8",
    intro: "The amaltas type 8 (Cassia fistula ssp. h) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 8 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 8 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 8",
    titleHindi: "सेमल - 8",
    intro: "The semal type 8 (Bombax ceiba ssp. h) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 8 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 8 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 8",
    titleHindi: "गुलमोहर - 8",
    intro: "The gulmohar type 8 (Delonix regia ssp. h) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 8 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 8 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 8",
    titleHindi: "चम्पा - 8",
    intro: "The champa type 8 (Plumeria rubra ssp. h) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 8 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 8 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 8",
    titleHindi: "कनेर - 8",
    intro: "The kaner type 8 (Nerium oleander ssp. h) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 8 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 8 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 8",
    titleHindi: "सदाबहार - 8",
    intro: "The sadabahar type 8 (Catharanthus roseus ssp. h) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 8 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 8 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 8",
    titleHindi: "गेंदा - 8",
    intro: "The genda type 8 (Tagetes patula ssp. h) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 8 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 8 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 8",
    titleHindi: "जूही - 8",
    intro: "The juhi type 8 (Jasminum auriculatum ssp. h) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 8 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 8 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 8",
    titleHindi: "चमेली - 8",
    intro: "The chamele type 8 (Jasminum officinale ssp. h) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 8 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 8 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 8",
    titleHindi: "शिरीष - 8",
    intro: "The shirisha type 8 (Albizia lebbeck ssp. h) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 8 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 8 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 8",
    titleHindi: "कदम्ब - 8",
    intro: "The kadamba type 8 (Neolamarckia cadamba ssp. h) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 8 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 8 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 8",
    titleHindi: "पारिजात - 8",
    intro: "The parijat type 8 (Nyctanthes arbor-tristis ssp. h) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 8 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 8 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 8",
    titleHindi: "कुंद - 8",
    intro: "The kunda type 8 (Jasminum multiflorum ssp. h) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 8 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 8 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 8",
    titleHindi: "सफेद कमल - 8",
    intro: "The lotus (white) type 8 (Nelumbo nucifera var. alba ssp. h) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 8 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 8 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 8",
    titleHindi: "नीलोत्पल - 8",
    intro: "The nilotpala type 8 (Nymphaea nouchali ssp. h) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 8 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 8 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 8",
    titleHindi: "केतकी - 8",
    intro: "The ketaki type 8 (Pandanus odorifer ssp. h) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 8 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 8 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 8",
    titleHindi: "बकुल - 8",
    intro: "The bakula type 8 (Mimusops elengi ssp. h) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 8 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 8 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 8",
    titleHindi: "मधुमालती - 8",
    intro: "The madhumalti type 8 (Combretum indicum ssp. h) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 8 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 8 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 9",
    titleHindi: "पलाश - 9",
    intro: "The palash type 9 (Butea monosperma ssp. i) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 9 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 9 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 9",
    titleHindi: "कचनार - 9",
    intro: "The kachnar type 9 (Bauhinia variegata ssp. i) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 9 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 9 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 9",
    titleHindi: "अमलतास - 9",
    intro: "The amaltas type 9 (Cassia fistula ssp. i) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 9 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 9 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 9",
    titleHindi: "सेमल - 9",
    intro: "The semal type 9 (Bombax ceiba ssp. i) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 9 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 9 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 9",
    titleHindi: "गुलमोहर - 9",
    intro: "The gulmohar type 9 (Delonix regia ssp. i) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 9 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 9 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 9",
    titleHindi: "चम्पा - 9",
    intro: "The champa type 9 (Plumeria rubra ssp. i) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 9 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 9 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 9",
    titleHindi: "कनेर - 9",
    intro: "The kaner type 9 (Nerium oleander ssp. i) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 9 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 9 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 9",
    titleHindi: "सदाबहार - 9",
    intro: "The sadabahar type 9 (Catharanthus roseus ssp. i) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 9 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 9 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 9",
    titleHindi: "गेंदा - 9",
    intro: "The genda type 9 (Tagetes patula ssp. i) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 9 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 9 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 9",
    titleHindi: "जूही - 9",
    intro: "The juhi type 9 (Jasminum auriculatum ssp. i) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 9 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 9 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 9",
    titleHindi: "चमेली - 9",
    intro: "The chamele type 9 (Jasminum officinale ssp. i) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 9 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 9 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 9",
    titleHindi: "शिरीष - 9",
    intro: "The shirisha type 9 (Albizia lebbeck ssp. i) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 9 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 9 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 9",
    titleHindi: "कदम्ब - 9",
    intro: "The kadamba type 9 (Neolamarckia cadamba ssp. i) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 9 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 9 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 9",
    titleHindi: "पारिजात - 9",
    intro: "The parijat type 9 (Nyctanthes arbor-tristis ssp. i) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 9 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 9 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 9",
    titleHindi: "कुंद - 9",
    intro: "The kunda type 9 (Jasminum multiflorum ssp. i) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 9 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 9 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 9",
    titleHindi: "सफेद कमल - 9",
    intro: "The lotus (white) type 9 (Nelumbo nucifera var. alba ssp. i) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 9 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 9 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 9",
    titleHindi: "नीलोत्पल - 9",
    intro: "The nilotpala type 9 (Nymphaea nouchali ssp. i) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 9 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 9 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 9",
    titleHindi: "केतकी - 9",
    intro: "The ketaki type 9 (Pandanus odorifer ssp. i) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 9 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 9 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 9",
    titleHindi: "बकुल - 9",
    intro: "The bakula type 9 (Mimusops elengi ssp. i) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 9 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 9 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 9",
    titleHindi: "मधुमालती - 9",
    intro: "The madhumalti type 9 (Combretum indicum ssp. i) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 9 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 9 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 10",
    titleHindi: "पलाश - 10",
    intro: "The palash type 10 (Butea monosperma ssp. j) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 10 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 10 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 10",
    titleHindi: "कचनार - 10",
    intro: "The kachnar type 10 (Bauhinia variegata ssp. j) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 10 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 10 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 10",
    titleHindi: "अमलतास - 10",
    intro: "The amaltas type 10 (Cassia fistula ssp. j) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 10 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 10 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 10",
    titleHindi: "सेमल - 10",
    intro: "The semal type 10 (Bombax ceiba ssp. j) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 10 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 10 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 10",
    titleHindi: "गुलमोहर - 10",
    intro: "The gulmohar type 10 (Delonix regia ssp. j) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 10 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 10 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 10",
    titleHindi: "चम्पा - 10",
    intro: "The champa type 10 (Plumeria rubra ssp. j) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 10 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 10 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 10",
    titleHindi: "कनेर - 10",
    intro: "The kaner type 10 (Nerium oleander ssp. j) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 10 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 10 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 10",
    titleHindi: "सदाबहार - 10",
    intro: "The sadabahar type 10 (Catharanthus roseus ssp. j) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 10 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 10 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 10",
    titleHindi: "गेंदा - 10",
    intro: "The genda type 10 (Tagetes patula ssp. j) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 10 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 10 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 10",
    titleHindi: "जूही - 10",
    intro: "The juhi type 10 (Jasminum auriculatum ssp. j) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 10 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 10 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 10",
    titleHindi: "चमेली - 10",
    intro: "The chamele type 10 (Jasminum officinale ssp. j) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 10 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 10 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 10",
    titleHindi: "शिरीष - 10",
    intro: "The shirisha type 10 (Albizia lebbeck ssp. j) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 10 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 10 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 10",
    titleHindi: "कदम्ब - 10",
    intro: "The kadamba type 10 (Neolamarckia cadamba ssp. j) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 10 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 10 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 10",
    titleHindi: "पारिजात - 10",
    intro: "The parijat type 10 (Nyctanthes arbor-tristis ssp. j) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 10 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 10 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 10",
    titleHindi: "कुंद - 10",
    intro: "The kunda type 10 (Jasminum multiflorum ssp. j) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 10 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 10 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 10",
    titleHindi: "सफेद कमल - 10",
    intro: "The lotus (white) type 10 (Nelumbo nucifera var. alba ssp. j) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 10 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 10 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 10",
    titleHindi: "नीलोत्पल - 10",
    intro: "The nilotpala type 10 (Nymphaea nouchali ssp. j) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 10 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 10 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 10",
    titleHindi: "केतकी - 10",
    intro: "The ketaki type 10 (Pandanus odorifer ssp. j) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 10 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 10 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 10",
    titleHindi: "बकुल - 10",
    intro: "The bakula type 10 (Mimusops elengi ssp. j) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 10 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 10 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 10",
    titleHindi: "मधुमालती - 10",
    intro: "The madhumalti type 10 (Combretum indicum ssp. j) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 10 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 10 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 11",
    titleHindi: "पलाश - 11",
    intro: "The palash type 11 (Butea monosperma ssp. k) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 11 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 11 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 11",
    titleHindi: "कचनार - 11",
    intro: "The kachnar type 11 (Bauhinia variegata ssp. k) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 11 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 11 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 11",
    titleHindi: "अमलतास - 11",
    intro: "The amaltas type 11 (Cassia fistula ssp. k) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 11 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 11 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 11",
    titleHindi: "सेमल - 11",
    intro: "The semal type 11 (Bombax ceiba ssp. k) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 11 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 11 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 11",
    titleHindi: "गुलमोहर - 11",
    intro: "The gulmohar type 11 (Delonix regia ssp. k) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 11 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 11 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 11",
    titleHindi: "चम्पा - 11",
    intro: "The champa type 11 (Plumeria rubra ssp. k) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 11 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 11 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 11",
    titleHindi: "कनेर - 11",
    intro: "The kaner type 11 (Nerium oleander ssp. k) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 11 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 11 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 11",
    titleHindi: "सदाबहार - 11",
    intro: "The sadabahar type 11 (Catharanthus roseus ssp. k) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 11 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 11 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 11",
    titleHindi: "गेंदा - 11",
    intro: "The genda type 11 (Tagetes patula ssp. k) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 11 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 11 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 11",
    titleHindi: "जूही - 11",
    intro: "The juhi type 11 (Jasminum auriculatum ssp. k) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 11 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 11 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 11",
    titleHindi: "चमेली - 11",
    intro: "The chamele type 11 (Jasminum officinale ssp. k) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 11 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 11 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 11",
    titleHindi: "शिरीष - 11",
    intro: "The shirisha type 11 (Albizia lebbeck ssp. k) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 11 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 11 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 11",
    titleHindi: "कदम्ब - 11",
    intro: "The kadamba type 11 (Neolamarckia cadamba ssp. k) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 11 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 11 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 11",
    titleHindi: "पारिजात - 11",
    intro: "The parijat type 11 (Nyctanthes arbor-tristis ssp. k) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 11 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 11 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 11",
    titleHindi: "कुंद - 11",
    intro: "The kunda type 11 (Jasminum multiflorum ssp. k) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 11 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 11 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 11",
    titleHindi: "सफेद कमल - 11",
    intro: "The lotus (white) type 11 (Nelumbo nucifera var. alba ssp. k) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 11 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 11 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 11",
    titleHindi: "नीलोत्पल - 11",
    intro: "The nilotpala type 11 (Nymphaea nouchali ssp. k) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 11 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 11 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 11",
    titleHindi: "केतकी - 11",
    intro: "The ketaki type 11 (Pandanus odorifer ssp. k) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 11 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 11 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 11",
    titleHindi: "बकुल - 11",
    intro: "The bakula type 11 (Mimusops elengi ssp. k) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 11 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 11 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 11",
    titleHindi: "मधुमालती - 11",
    intro: "The madhumalti type 11 (Combretum indicum ssp. k) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 11 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 11 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 12",
    titleHindi: "पलाश - 12",
    intro: "The palash type 12 (Butea monosperma ssp. l) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 12 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 12 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 12",
    titleHindi: "कचनार - 12",
    intro: "The kachnar type 12 (Bauhinia variegata ssp. l) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 12 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 12 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 12",
    titleHindi: "अमलतास - 12",
    intro: "The amaltas type 12 (Cassia fistula ssp. l) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 12 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 12 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 12",
    titleHindi: "सेमल - 12",
    intro: "The semal type 12 (Bombax ceiba ssp. l) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 12 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 12 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 12",
    titleHindi: "गुलमोहर - 12",
    intro: "The gulmohar type 12 (Delonix regia ssp. l) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 12 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 12 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 12",
    titleHindi: "चम्पा - 12",
    intro: "The champa type 12 (Plumeria rubra ssp. l) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 12 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 12 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 12",
    titleHindi: "कनेर - 12",
    intro: "The kaner type 12 (Nerium oleander ssp. l) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 12 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 12 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 12",
    titleHindi: "सदाबहार - 12",
    intro: "The sadabahar type 12 (Catharanthus roseus ssp. l) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 12 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 12 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 12",
    titleHindi: "गेंदा - 12",
    intro: "The genda type 12 (Tagetes patula ssp. l) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 12 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 12 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 12",
    titleHindi: "जूही - 12",
    intro: "The juhi type 12 (Jasminum auriculatum ssp. l) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 12 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 12 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 12",
    titleHindi: "चमेली - 12",
    intro: "The chamele type 12 (Jasminum officinale ssp. l) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 12 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 12 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 12",
    titleHindi: "शिरीष - 12",
    intro: "The shirisha type 12 (Albizia lebbeck ssp. l) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 12 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 12 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 12",
    titleHindi: "कदम्ब - 12",
    intro: "The kadamba type 12 (Neolamarckia cadamba ssp. l) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 12 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 12 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 12",
    titleHindi: "पारिजात - 12",
    intro: "The parijat type 12 (Nyctanthes arbor-tristis ssp. l) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 12 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 12 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 12",
    titleHindi: "कुंद - 12",
    intro: "The kunda type 12 (Jasminum multiflorum ssp. l) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 12 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 12 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 12",
    titleHindi: "सफेद कमल - 12",
    intro: "The lotus (white) type 12 (Nelumbo nucifera var. alba ssp. l) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 12 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 12 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 12",
    titleHindi: "नीलोत्पल - 12",
    intro: "The nilotpala type 12 (Nymphaea nouchali ssp. l) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 12 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 12 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 12",
    titleHindi: "केतकी - 12",
    intro: "The ketaki type 12 (Pandanus odorifer ssp. l) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 12 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 12 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 12",
    titleHindi: "बकुल - 12",
    intro: "The bakula type 12 (Mimusops elengi ssp. l) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 12 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 12 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 12",
    titleHindi: "मधुमालती - 12",
    intro: "The madhumalti type 12 (Combretum indicum ssp. l) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 12 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 12 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 13",
    titleHindi: "पलाश - 13",
    intro: "The palash type 13 (Butea monosperma ssp. m) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 13 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 13 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 13",
    titleHindi: "कचनार - 13",
    intro: "The kachnar type 13 (Bauhinia variegata ssp. m) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 13 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 13 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 13",
    titleHindi: "अमलतास - 13",
    intro: "The amaltas type 13 (Cassia fistula ssp. m) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 13 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 13 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 13",
    titleHindi: "सेमल - 13",
    intro: "The semal type 13 (Bombax ceiba ssp. m) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 13 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 13 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 13",
    titleHindi: "गुलमोहर - 13",
    intro: "The gulmohar type 13 (Delonix regia ssp. m) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 13 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 13 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 13",
    titleHindi: "चम्पा - 13",
    intro: "The champa type 13 (Plumeria rubra ssp. m) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 13 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 13 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 13",
    titleHindi: "कनेर - 13",
    intro: "The kaner type 13 (Nerium oleander ssp. m) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 13 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 13 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 13",
    titleHindi: "सदाबहार - 13",
    intro: "The sadabahar type 13 (Catharanthus roseus ssp. m) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 13 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 13 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 13",
    titleHindi: "गेंदा - 13",
    intro: "The genda type 13 (Tagetes patula ssp. m) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 13 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 13 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 13",
    titleHindi: "जूही - 13",
    intro: "The juhi type 13 (Jasminum auriculatum ssp. m) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 13 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 13 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 13",
    titleHindi: "चमेली - 13",
    intro: "The chamele type 13 (Jasminum officinale ssp. m) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 13 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 13 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 13",
    titleHindi: "शिरीष - 13",
    intro: "The shirisha type 13 (Albizia lebbeck ssp. m) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 13 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 13 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 13",
    titleHindi: "कदम्ब - 13",
    intro: "The kadamba type 13 (Neolamarckia cadamba ssp. m) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 13 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 13 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 13",
    titleHindi: "पारिजात - 13",
    intro: "The parijat type 13 (Nyctanthes arbor-tristis ssp. m) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 13 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 13 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 13",
    titleHindi: "कुंद - 13",
    intro: "The kunda type 13 (Jasminum multiflorum ssp. m) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 13 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 13 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 13",
    titleHindi: "सफेद कमल - 13",
    intro: "The lotus (white) type 13 (Nelumbo nucifera var. alba ssp. m) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 13 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 13 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 13",
    titleHindi: "नीलोत्पल - 13",
    intro: "The nilotpala type 13 (Nymphaea nouchali ssp. m) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 13 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 13 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 13",
    titleHindi: "केतकी - 13",
    intro: "The ketaki type 13 (Pandanus odorifer ssp. m) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 13 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 13 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 13",
    titleHindi: "बकुल - 13",
    intro: "The bakula type 13 (Mimusops elengi ssp. m) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 13 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 13 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 13",
    titleHindi: "मधुमालती - 13",
    intro: "The madhumalti type 13 (Combretum indicum ssp. m) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 13 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 13 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 14",
    titleHindi: "पलाश - 14",
    intro: "The palash type 14 (Butea monosperma ssp. n) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 14 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 14 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 14",
    titleHindi: "कचनार - 14",
    intro: "The kachnar type 14 (Bauhinia variegata ssp. n) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 14 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 14 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 14",
    titleHindi: "अमलतास - 14",
    intro: "The amaltas type 14 (Cassia fistula ssp. n) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 14 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 14 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 14",
    titleHindi: "सेमल - 14",
    intro: "The semal type 14 (Bombax ceiba ssp. n) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 14 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 14 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 14",
    titleHindi: "गुलमोहर - 14",
    intro: "The gulmohar type 14 (Delonix regia ssp. n) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 14 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 14 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 14",
    titleHindi: "चम्पा - 14",
    intro: "The champa type 14 (Plumeria rubra ssp. n) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 14 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 14 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 14",
    titleHindi: "कनेर - 14",
    intro: "The kaner type 14 (Nerium oleander ssp. n) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 14 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 14 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 14",
    titleHindi: "सदाबहार - 14",
    intro: "The sadabahar type 14 (Catharanthus roseus ssp. n) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 14 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 14 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 14",
    titleHindi: "गेंदा - 14",
    intro: "The genda type 14 (Tagetes patula ssp. n) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 14 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 14 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 14",
    titleHindi: "जूही - 14",
    intro: "The juhi type 14 (Jasminum auriculatum ssp. n) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 14 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 14 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 14",
    titleHindi: "चमेली - 14",
    intro: "The chamele type 14 (Jasminum officinale ssp. n) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 14 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 14 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 14",
    titleHindi: "शिरीष - 14",
    intro: "The shirisha type 14 (Albizia lebbeck ssp. n) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 14 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 14 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 14",
    titleHindi: "कदम्ब - 14",
    intro: "The kadamba type 14 (Neolamarckia cadamba ssp. n) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 14 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 14 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 14",
    titleHindi: "पारिजात - 14",
    intro: "The parijat type 14 (Nyctanthes arbor-tristis ssp. n) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 14 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 14 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 14",
    titleHindi: "कुंद - 14",
    intro: "The kunda type 14 (Jasminum multiflorum ssp. n) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 14 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 14 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 14",
    titleHindi: "सफेद कमल - 14",
    intro: "The lotus (white) type 14 (Nelumbo nucifera var. alba ssp. n) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 14 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 14 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 14",
    titleHindi: "नीलोत्पल - 14",
    intro: "The nilotpala type 14 (Nymphaea nouchali ssp. n) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 14 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 14 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 14",
    titleHindi: "केतकी - 14",
    intro: "The ketaki type 14 (Pandanus odorifer ssp. n) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 14 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 14 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 14",
    titleHindi: "बकुल - 14",
    intro: "The bakula type 14 (Mimusops elengi ssp. n) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 14 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 14 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 14",
    titleHindi: "मधुमालती - 14",
    intro: "The madhumalti type 14 (Combretum indicum ssp. n) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 14 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 14 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 15",
    titleHindi: "पलाश - 15",
    intro: "The palash type 15 (Butea monosperma ssp. o) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 15 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 15 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 15",
    titleHindi: "कचनार - 15",
    intro: "The kachnar type 15 (Bauhinia variegata ssp. o) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 15 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 15 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 15",
    titleHindi: "अमलतास - 15",
    intro: "The amaltas type 15 (Cassia fistula ssp. o) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 15 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 15 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 15",
    titleHindi: "सेमल - 15",
    intro: "The semal type 15 (Bombax ceiba ssp. o) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 15 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 15 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 15",
    titleHindi: "गुलमोहर - 15",
    intro: "The gulmohar type 15 (Delonix regia ssp. o) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 15 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 15 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 15",
    titleHindi: "चम्पा - 15",
    intro: "The champa type 15 (Plumeria rubra ssp. o) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 15 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 15 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 15",
    titleHindi: "कनेर - 15",
    intro: "The kaner type 15 (Nerium oleander ssp. o) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 15 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 15 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 15",
    titleHindi: "सदाबहार - 15",
    intro: "The sadabahar type 15 (Catharanthus roseus ssp. o) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 15 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 15 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 15",
    titleHindi: "गेंदा - 15",
    intro: "The genda type 15 (Tagetes patula ssp. o) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 15 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 15 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 15",
    titleHindi: "जूही - 15",
    intro: "The juhi type 15 (Jasminum auriculatum ssp. o) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 15 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 15 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 15",
    titleHindi: "चमेली - 15",
    intro: "The chamele type 15 (Jasminum officinale ssp. o) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 15 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 15 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 15",
    titleHindi: "शिरीष - 15",
    intro: "The shirisha type 15 (Albizia lebbeck ssp. o) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 15 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 15 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 15",
    titleHindi: "कदम्ब - 15",
    intro: "The kadamba type 15 (Neolamarckia cadamba ssp. o) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 15 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 15 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 15",
    titleHindi: "पारिजात - 15",
    intro: "The parijat type 15 (Nyctanthes arbor-tristis ssp. o) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 15 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 15 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 15",
    titleHindi: "कुंद - 15",
    intro: "The kunda type 15 (Jasminum multiflorum ssp. o) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 15 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 15 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 15",
    titleHindi: "सफेद कमल - 15",
    intro: "The lotus (white) type 15 (Nelumbo nucifera var. alba ssp. o) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 15 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 15 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 15",
    titleHindi: "नीलोत्पल - 15",
    intro: "The nilotpala type 15 (Nymphaea nouchali ssp. o) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 15 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 15 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 15",
    titleHindi: "केतकी - 15",
    intro: "The ketaki type 15 (Pandanus odorifer ssp. o) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 15 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 15 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 15",
    titleHindi: "बकुल - 15",
    intro: "The bakula type 15 (Mimusops elengi ssp. o) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 15 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 15 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 15",
    titleHindi: "मधुमालती - 15",
    intro: "The madhumalti type 15 (Combretum indicum ssp. o) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 15 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 15 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 16",
    titleHindi: "पलाश - 16",
    intro: "The palash type 16 (Butea monosperma ssp. p) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 16 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 16 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 16",
    titleHindi: "कचनार - 16",
    intro: "The kachnar type 16 (Bauhinia variegata ssp. p) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 16 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 16 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 16",
    titleHindi: "अमलतास - 16",
    intro: "The amaltas type 16 (Cassia fistula ssp. p) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 16 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 16 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 16",
    titleHindi: "सेमल - 16",
    intro: "The semal type 16 (Bombax ceiba ssp. p) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 16 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 16 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 16",
    titleHindi: "गुलमोहर - 16",
    intro: "The gulmohar type 16 (Delonix regia ssp. p) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 16 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 16 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 16",
    titleHindi: "चम्पा - 16",
    intro: "The champa type 16 (Plumeria rubra ssp. p) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 16 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 16 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 16",
    titleHindi: "कनेर - 16",
    intro: "The kaner type 16 (Nerium oleander ssp. p) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 16 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 16 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 16",
    titleHindi: "सदाबहार - 16",
    intro: "The sadabahar type 16 (Catharanthus roseus ssp. p) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 16 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 16 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 16",
    titleHindi: "गेंदा - 16",
    intro: "The genda type 16 (Tagetes patula ssp. p) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 16 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 16 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 16",
    titleHindi: "जूही - 16",
    intro: "The juhi type 16 (Jasminum auriculatum ssp. p) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 16 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 16 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 16",
    titleHindi: "चमेली - 16",
    intro: "The chamele type 16 (Jasminum officinale ssp. p) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 16 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 16 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 16",
    titleHindi: "शिरीष - 16",
    intro: "The shirisha type 16 (Albizia lebbeck ssp. p) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 16 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 16 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 16",
    titleHindi: "कदम्ब - 16",
    intro: "The kadamba type 16 (Neolamarckia cadamba ssp. p) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 16 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 16 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 16",
    titleHindi: "पारिजात - 16",
    intro: "The parijat type 16 (Nyctanthes arbor-tristis ssp. p) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 16 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 16 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 16",
    titleHindi: "कुंद - 16",
    intro: "The kunda type 16 (Jasminum multiflorum ssp. p) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 16 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 16 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 16",
    titleHindi: "सफेद कमल - 16",
    intro: "The lotus (white) type 16 (Nelumbo nucifera var. alba ssp. p) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 16 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 16 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 16",
    titleHindi: "नीलोत्पल - 16",
    intro: "The nilotpala type 16 (Nymphaea nouchali ssp. p) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 16 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 16 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 16",
    titleHindi: "केतकी - 16",
    intro: "The ketaki type 16 (Pandanus odorifer ssp. p) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 16 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 16 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 16",
    titleHindi: "बकुल - 16",
    intro: "The bakula type 16 (Mimusops elengi ssp. p) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 16 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 16 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 16",
    titleHindi: "मधुमालती - 16",
    intro: "The madhumalti type 16 (Combretum indicum ssp. p) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 16 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 16 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 17",
    titleHindi: "पलाश - 17",
    intro: "The palash type 17 (Butea monosperma ssp. q) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 17 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 17 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 17",
    titleHindi: "कचनार - 17",
    intro: "The kachnar type 17 (Bauhinia variegata ssp. q) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 17 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 17 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 17",
    titleHindi: "अमलतास - 17",
    intro: "The amaltas type 17 (Cassia fistula ssp. q) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 17 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 17 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 17",
    titleHindi: "सेमल - 17",
    intro: "The semal type 17 (Bombax ceiba ssp. q) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 17 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 17 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 17",
    titleHindi: "गुलमोहर - 17",
    intro: "The gulmohar type 17 (Delonix regia ssp. q) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 17 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 17 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 17",
    titleHindi: "चम्पा - 17",
    intro: "The champa type 17 (Plumeria rubra ssp. q) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 17 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 17 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 17",
    titleHindi: "कनेर - 17",
    intro: "The kaner type 17 (Nerium oleander ssp. q) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 17 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 17 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 17",
    titleHindi: "सदाबहार - 17",
    intro: "The sadabahar type 17 (Catharanthus roseus ssp. q) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 17 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 17 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 17",
    titleHindi: "गेंदा - 17",
    intro: "The genda type 17 (Tagetes patula ssp. q) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 17 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 17 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 17",
    titleHindi: "जूही - 17",
    intro: "The juhi type 17 (Jasminum auriculatum ssp. q) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 17 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 17 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 17",
    titleHindi: "चमेली - 17",
    intro: "The chamele type 17 (Jasminum officinale ssp. q) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 17 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 17 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 17",
    titleHindi: "शिरीष - 17",
    intro: "The shirisha type 17 (Albizia lebbeck ssp. q) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 17 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 17 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 17",
    titleHindi: "कदम्ब - 17",
    intro: "The kadamba type 17 (Neolamarckia cadamba ssp. q) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 17 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 17 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 17",
    titleHindi: "पारिजात - 17",
    intro: "The parijat type 17 (Nyctanthes arbor-tristis ssp. q) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 17 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 17 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 17",
    titleHindi: "कुंद - 17",
    intro: "The kunda type 17 (Jasminum multiflorum ssp. q) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 17 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 17 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 17",
    titleHindi: "सफेद कमल - 17",
    intro: "The lotus (white) type 17 (Nelumbo nucifera var. alba ssp. q) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 17 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 17 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 17",
    titleHindi: "नीलोत्पल - 17",
    intro: "The nilotpala type 17 (Nymphaea nouchali ssp. q) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 17 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 17 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 17",
    titleHindi: "केतकी - 17",
    intro: "The ketaki type 17 (Pandanus odorifer ssp. q) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 17 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 17 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 17",
    titleHindi: "बकुल - 17",
    intro: "The bakula type 17 (Mimusops elengi ssp. q) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 17 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 17 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 17",
    titleHindi: "मधुमालती - 17",
    intro: "The madhumalti type 17 (Combretum indicum ssp. q) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 17 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 17 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 18",
    titleHindi: "पलाश - 18",
    intro: "The palash type 18 (Butea monosperma ssp. r) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 18 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 18 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 18",
    titleHindi: "कचनार - 18",
    intro: "The kachnar type 18 (Bauhinia variegata ssp. r) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 18 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 18 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 18",
    titleHindi: "अमलतास - 18",
    intro: "The amaltas type 18 (Cassia fistula ssp. r) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 18 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 18 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 18",
    titleHindi: "सेमल - 18",
    intro: "The semal type 18 (Bombax ceiba ssp. r) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 18 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 18 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 18",
    titleHindi: "गुलमोहर - 18",
    intro: "The gulmohar type 18 (Delonix regia ssp. r) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 18 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 18 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  },
  {
    title: "Champa Type 18",
    titleHindi: "चम्पा - 18",
    intro: "The champa type 18 (Plumeria rubra ssp. r) is a beautiful flowering plant of the Apocynaceae family, growing in dry plains.",
    details: "Known for its stunning white-yellow blooms, the champa type 18 is adapted to thrive in dry plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The champa type 18 its flowers do not produce nectar, instead tricking sphinx moths into pollinating them by scent."
  },
  {
    title: "Kaner Type 18",
    titleHindi: "कनेर - 18",
    intro: "The kaner type 18 (Nerium oleander ssp. r) is a beautiful flowering plant of the Apocynaceae family, growing in river banks.",
    details: "Known for its stunning pink and white blooms, the kaner type 18 is adapted to thrive in river banks. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kaner type 18 every single part of this plant is highly toxic, containing cardiac glycosides."
  },
  {
    title: "Sadabahar Type 18",
    titleHindi: "सदाबहार - 18",
    intro: "The sadabahar type 18 (Catharanthus roseus ssp. r) is a beautiful flowering plant of the Apocynaceae family, growing in sandy shores.",
    details: "Known for its stunning pink and white blooms, the sadabahar type 18 is adapted to thrive in sandy shores. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The sadabahar type 18 yields vincristine and vinblastine, two critical compounds used in modern cancer chemotherapy."
  },
  {
    title: "Genda Type 18",
    titleHindi: "गेंदा - 18",
    intro: "The genda type 18 (Tagetes patula ssp. r) is a beautiful flowering plant of the Asteraceae family, growing in cultivated plains.",
    details: "Known for its stunning yellow-maroon blooms, the genda type 18 is adapted to thrive in cultivated plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The genda type 18 is widely used in festive decorations and rituals across South Asia."
  },
  {
    title: "Juhi Type 18",
    titleHindi: "जूही - 18",
    intro: "The juhi type 18 (Jasminum auriculatum ssp. r) is a beautiful flowering plant of the Oleaceae family, growing in scrublands.",
    details: "Known for its stunning small white blooms, the juhi type 18 is adapted to thrive in scrublands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The juhi type 18 possesses an extremely delicate, honey-like fragrance used in premium perfumery."
  },
  {
    title: "Chamele Type 18",
    titleHindi: "चमेली - 18",
    intro: "The chamele type 18 (Jasminum officinale ssp. r) is a beautiful flowering plant of the Oleaceae family, growing in hillsides.",
    details: "Known for its stunning pure white blooms, the chamele type 18 is adapted to thrive in hillsides. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The chamele type 18 is used to flavor jasmine tea and represents amiability and grace in flower language."
  },
  {
    title: "Shirisha Type 18",
    titleHindi: "शिरीष - 18",
    intro: "The shirisha type 18 (Albizia lebbeck ssp. r) is a beautiful flowering plant of the Fabaceae family, growing in plains.",
    details: "Known for its stunning greenish-yellow blooms, the shirisha type 18 is adapted to thrive in plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The shirisha type 18 has powder-puff like fragrant blooms that represent delicate beauty in classical poetry."
  },
  {
    title: "Kadamba Type 18",
    titleHindi: "कदम्ब - 18",
    intro: "The kadamba type 18 (Neolamarckia cadamba ssp. r) is a beautiful flowering plant of the Rubiaceae family, growing in river plains.",
    details: "Known for its stunning golden-orange ball blooms, the kadamba type 18 is adapted to thrive in river plains. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kadamba type 18 associated with Lord Krishna, its spherical flowers bloom in response to early monsoon rains."
  },
  {
    title: "Parijat Type 18",
    titleHindi: "पारिजात - 18",
    intro: "The parijat type 18 (Nyctanthes arbor-tristis ssp. r) is a beautiful flowering plant of the Oleaceae family, growing in deciduous forests.",
    details: "Known for its stunning white-orange blooms, the parijat type 18 is adapted to thrive in deciduous forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The parijat type 18 is the only flower that is offered to deities even after falling to the ground."
  },
  {
    title: "Kunda Type 18",
    titleHindi: "कुंद - 18",
    intro: "The kunda type 18 (Jasminum multiflorum ssp. r) is a beautiful flowering plant of the Oleaceae family, growing in subtropical valleys.",
    details: "Known for its stunning star-white blooms, the kunda type 18 is adapted to thrive in subtropical valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kunda type 18 has completely scentless white flowers that are celebrated in Sanskrit literature for purity."
  },
  {
    title: "Lotus (White) Type 18",
    titleHindi: "सफेद कमल - 18",
    intro: "The lotus (white) type 18 (Nelumbo nucifera var. alba ssp. r) is a beautiful flowering plant of the Nelumbonaceae family, growing in wetlands.",
    details: "Known for its stunning white blooms, the lotus (white) type 18 is adapted to thrive in wetlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The lotus (white) type 18 represents spiritual perfection and mental clarity in Eastern philosophical systems."
  },
  {
    title: "Nilotpala Type 18",
    titleHindi: "नीलोत्पल - 18",
    intro: "The nilotpala type 18 (Nymphaea nouchali ssp. r) is a beautiful flowering plant of the Nymphaeaceae family, growing in still ponds.",
    details: "Known for its stunning violet-blue blooms, the nilotpala type 18 is adapted to thrive in still ponds. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The nilotpala type 18 the blue water lily of India, widely celebrated in classical poetry and art."
  },
  {
    title: "Ketaki Type 18",
    titleHindi: "केतकी - 18",
    intro: "The ketaki type 18 (Pandanus odorifer ssp. r) is a beautiful flowering plant of the Pandanaceae family, growing in coastal swamps.",
    details: "Known for its stunning yellowish bracts blooms, the ketaki type 18 is adapted to thrive in coastal swamps. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The ketaki type 18 has an intensely sweet, musky fragrance but is forbidden in worship of Shiva due to a legend."
  },
  {
    title: "Bakula Type 18",
    titleHindi: "बकुल - 18",
    intro: "The bakula type 18 (Mimusops elengi ssp. r) is a beautiful flowering plant of the Sapotaceae family, growing in coastal forests.",
    details: "Known for its stunning cream-white star blooms, the bakula type 18 is adapted to thrive in coastal forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The bakula type 18 its fallen flowers retain their sweet fragrance for days, even after drying completely."
  },
  {
    title: "Madhumalti Type 18",
    titleHindi: "मधुमालती - 18",
    intro: "The madhumalti type 18 (Combretum indicum ssp. r) is a beautiful flowering plant of the Combretaceae family, growing in fences and trellises.",
    details: "Known for its stunning red-white-pink blooms, the madhumalti type 18 is adapted to thrive in fences and trellises. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The madhumalti type 18 the color-changing flowers change from white to pink to red to attract different pollinators."
  },
  {
    title: "Palash Type 19",
    titleHindi: "पलाश - 19",
    intro: "The palash type 19 (Butea monosperma ssp. s) is a beautiful flowering plant of the Fabaceae family, growing in monsoon forests.",
    details: "Known for its stunning orange-red blooms, the palash type 19 is adapted to thrive in monsoon forests. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The palash type 19 flowers yield a natural yellow dye used during the spring festival of Holi."
  },
  {
    title: "Kachnar Type 19",
    titleHindi: "कचनार - 19",
    intro: "The kachnar type 19 (Bauhinia variegata ssp. s) is a beautiful flowering plant of the Fabaceae family, growing in dry valleys.",
    details: "Known for its stunning pink-purple blooms, the kachnar type 19 is adapted to thrive in dry valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The kachnar type 19 both the flower buds and leaves are widely used in traditional Indian culinary recipes."
  },
  {
    title: "Amaltas Type 19",
    titleHindi: "अमलतास - 19",
    intro: "The amaltas type 19 (Cassia fistula ssp. s) is a beautiful flowering plant of the Fabaceae family, growing in monsoon woodlands.",
    details: "Known for its stunning bright yellow blooms, the amaltas type 19 is adapted to thrive in monsoon woodlands. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The amaltas type 19 has long cascading clusters of yellow flowers, known as the golden shower tree."
  },
  {
    title: "Semal Type 19",
    titleHindi: "सेमल - 19",
    intro: "The semal type 19 (Bombax ceiba ssp. s) is a beautiful flowering plant of the Malvaceae family, growing in plains and valleys.",
    details: "Known for its stunning deep red blooms, the semal type 19 is adapted to thrive in plains and valleys. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The semal type 19 produces fleshy red flowers that attract hundreds of species of birds and bees in spring."
  },
  {
    title: "Gulmohar Type 19",
    titleHindi: "गुलमोहर - 19",
    intro: "The gulmohar type 19 (Delonix regia ssp. s) is a beautiful flowering plant of the Fabaceae family, growing in coastal areas.",
    details: "Known for its stunning orange-scarlet blooms, the gulmohar type 19 is adapted to thrive in coastal areas. It plays a crucial role in attracting local pollinators like bees and butterflies, facilitating reproduction and maintaining biodiversity. The chemical compounds and physical structures developed by this plant help it survive seasonal changes, droughts, or pests.",
    wonder: "Did you know? The gulmohar type 19 has large feathery leaves and bright scarlet blooms that tolerate high summer heat."
  }
];

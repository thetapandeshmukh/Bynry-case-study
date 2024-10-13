const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      password: "password123",
      image: "https://robohash.org/alice.png",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437
      },
      description: "Alice is a passionate software developer from California. With over five years of experience in full-stack development, she enjoys creating user-friendly applications that solve real-world problems. In her free time, Alice loves hiking in the beautiful California mountains and experimenting with new programming languages.",
      role: "user"
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      password: "securepass456",
      image: "https://robohash.org/bob.png",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.0060
      },
      description: "Bob is a seasoned UX designer based in New York City. With a keen eye for detail and a passion for creating intuitive user interfaces, he has helped numerous startups improve their product designs. Bob is an avid coffee enthusiast and enjoys exploring the city's diverse culinary scene in his spare time.",
      role: "user"
    },
    {
      id: 3,
      name: "Carol Martinez",
      email: "carol.martinez@example.com",
      password: "carol789pass",
      image: "https://robohash.org/Carol.png",
      coordinates: {
        latitude: 41.8781,
        longitude: -87.6298
      },
      description: "Carol is a data scientist from Chicago with a background in machine learning and artificial intelligence. She's passionate about using data to drive business decisions and improve user experiences. In her free time, Carol enjoys playing chess and volunteering at local coding bootcamps to mentor aspiring data scientists.",
      role: "user"
    },
    {
      id: 4,
      name: "David Lee",
      email: "david.lee@example.com",
      password: "davidpass101",
      image: "https://robohash.org/David.png",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194
      },
      description: "David is a product manager based in San Francisco. With a background in both engineering and business, he excels at bridging the gap between technical and non-technical teams. David is passionate about building products that make a positive impact on people's lives. In his spare time, he enjoys surfing and practicing mindfulness meditation.",
      role: "user"
    },
    {
      id: 5,
      name: "Eva Rodriguez",
      email: "eva.rodriguez@example.com",
      password: "evapass202",
      image: "https://robohash.org/Eva.png",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918
      },
      description: "Eva is a cybersecurity expert from Miami with a focus on network security and ethical hacking. She's dedicated to helping organizations protect their digital assets and educating people about online safety. Eva is fluent in three languages and enjoys salsa dancing and participating in hackathons during her free time.",
      role: "user"
    },
    {
      id: 6,
      name: "Frank Wright",
      email: "frank.wright@example.com",
      password: "frankpass123",
      image: "https://robohash.org/frank.png",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437
      },
      description: "Frank is a software engineer from Los Angeles. He specializes in backend development and enjoys working with cloud technologies. In his free time, he loves playing video games and hiking.",
      role: "user"
    },
    {
      id: 7,
      name: "Grace Lee",
      email: "grace.lee@example.com",
      password: "gracepass456",
      image: "https://robohash.org/grace.png",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.0060
      },
      description: "Grace is a graphic designer based in New York City. She has a passion for creating visually appealing designs and enjoys painting in her spare time.",
      role: "user"
    },
    {
      id: 8,
      name: "Henry Adams",
      email: "henry.adams@example.com",
      password: "henrypass789",
      image: "https://robohash.org/henry.png",
      coordinates: {
        latitude: 41.8781,
        longitude: -87.6298
      },
      description: "Henry is a marketing specialist from Chicago. He loves analyzing market trends and developing strategies to improve brand visibility.",
      role: "user"
    },
    {
      id: 9,
      name: "Isabella Garcia",
      email: "isabella.garcia@example.com",
      password: "isabella202",
      image: "https://robohash.org/isabella.png",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194
      },
      description: "Isabella is a content writer from San Francisco. She enjoys crafting engaging stories and has a passion for travel.",
      role: "user"
    },
    {
      id: 10,
      name: "Jack Wilson",
      email: "jack.wilson@example.com",
      password: "jackpass303",
      image: "https://robohash.org/jack.png",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918
      },
      description: "Jack is a financial analyst from Miami. He specializes in investment strategies and enjoys playing golf on weekends.",
      role: "user"
    },
    {
      id: 11,
      name: "Katherine Brown",
      email: "katherine.brown@example.com",
      password: "katherinepass404",
      image: "https://robohash.org/katherine.png",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437
      },
      description: "Katherine is a project manager from Los Angeles. She excels at coordinating teams and ensuring projects are completed on time.",
      role: "user"
    },
    {
      id: 12,
      name: "Liam Johnson",
      email: "liam.johnson@example.com",
      password: "liampass505",
      image: "https://robohash.org/liam.png",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.0060
      },
      description: "Liam is a web developer based in New York City. He enjoys building responsive websites and learning new programming languages.",
      role: "user"
    },
    {
      id: 13,
      name: "Mia Thompson",
      email: "mia.thompson@example.com",
      password: "miapass606",
      image: "https://robohash.org/mia.png",
      coordinates: {
        latitude: 41.8781,
        longitude: -87.6298
      },
      description: "Mia is a UX researcher from Chicago. She loves understanding user behavior and improving product usability.",
      role: "user"
    },
    {
      id: 14,
      name: "Noah Martinez",
      email: "noah.martinez@example.com",
      password: "noahpass707",
      image: "https://robohash.org/noah.png",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194
      },
      description: "Noah is a data analyst from San Francisco. He enjoys working with large datasets and finding insights to drive business decisions.",
      role: "user"
    },
    {
      id: 15,
      name: "Olivia Davis",
      email: "olivia.davis@example.com",
      password: "oliviapass808",
      image: "https://robohash.org/olivia.png",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918
      },
      description: "Olivia is a software tester from Miami. She enjoys ensuring software quality and has a keen eye for detail.",
      role: "user"
    },
    {
      id: 16,
      name: "Paul Wilson",
      email: "paul.wilson@example.com",
      password: "paulpass909",
      image: "https://robohash.org/paul.png",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437
      },
      description: "Paul is a systems architect from Los Angeles. He specializes in designing scalable systems and enjoys mentoring junior developers.",
      role: "user"
    },
    {
      id: 17,
      name: "Quinn Taylor",
      email: "quinn.taylor@example.com",
      password: "quinnpass1010",
      image: "https://robohash.org/quinn.png",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.0060
      },
      description: "Quinn is a mobile app developer based in New York City. She enjoys creating user-friendly applications for both iOS and Android.",
      role: "user"
    },
    {
      id: 18,
      name: "Ryan Anderson",
      email: "ryan.anderson@example.com",
      password: "ryanpass1111",
      image: "https://robohash.org/ryan.png",
      coordinates: {
        latitude: 41.8781,
        longitude: -87.6298
      },
      description: "Ryan is a network engineer from Chicago. He specializes in network security and enjoys playing basketball in his free time.",
      role: "user"
    },
    {
      id: 19,
      name: "Sophia White",
      email: "sophia.white@example.com",
      password: "sophiapass1212",
      image: "https://robohash.org/sophia.png",
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194
      },
      description: "Sophia is a digital marketer from San Francisco. She enjoys creating online campaigns and analyzing their performance.",
      role: "user"
    },
    {
      id: 20,
      name: "Thomas Harris",
      email: "thomas.harris@example.com",
      password: "thomaspass1313",
      image: "https://robohash.org/thomas.png",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918
      },
      description: "Thomas is a business analyst from Miami. He enjoys working with stakeholders to gather requirements and improve processes.",
      role: "user"
    }
  ]
  

export default users;

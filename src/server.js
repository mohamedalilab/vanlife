import { createServer, Model } from "miragejs";

createServer({
  models: {
    vans: Model,
    reviews: Model,
    transactions: Model,
  },

  seeds(server) {
    server.create("van", {
      id: "1",
      name: "Modest Explorer",
      price: 60,
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      // imageUrl: "./images/vans/modest-explorer.png",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
      type: "simple",
      hostId: "123",
    });
    server.create("van", {
      id: "2",
      name: "Beach Bum",
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      // imageUrl: "./images/vans/beach-bum.png",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
      type: "rugged",
      hostId: "123",
    });
    server.create("van", {
      id: "3",
      name: "Reliable Red",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      // imageUrl: "./images/vans/reliable-red.png",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
      type: "luxury",
      hostId: "456",
    });
    server.create("van", {
      id: "4",
      name: "Dreamfinder",
      price: 65,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      // imageUrl: "./images/vans/dream-finder.png",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
      type: "simple",
      hostId: "789",
    });
    server.create("van", {
      id: "5",
      name: "The Cruiser",
      price: 120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      // imageUrl: "./images/vans/the-cruiser.png",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
      type: "luxury",
      hostId: "789",
    });
    server.create("van", {
      id: "6",
      name: "Green Wonder",
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      // imageUrl: "./images/vans/green-wonder.png",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
      type: "rugged",
      hostId: "123",
    });

    // Reviews seed data
    server.create("review", {
      id: "1",
      vanId: "1",
      hostId: "123",
      reviewerName: "Elliot",
      rating: 5,
      reviewText: "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      date: "December 1, 2022",
    });
    server.create("review", {
      id: "2",
      vanId: "1",
      hostId: "123",
      reviewerName: "Sandy",
      rating: 5,
      reviewText: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      date: "November 23, 2022",
    });

    // Transactions seed data
    server.create("transaction", {
      id: "1",
      hostId: "123",
      amount: 720,
      date: "1/12/22",
    });
    server.create("transaction", {
      id: "2",
      hostId: "123",
      amount: 560,
      date: "10/11/22",
    });
    server.create("transaction", {
      id: "3",
      hostId: "123",
      amount: 980,
      date: "23/11/22",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/vans", (schema) => {
      return schema.vans.all();
    });

    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id;
      return schema.vans.find(id);
    });

    this.get("/host/vans", (schema) => {
      // Hard-code the hostId for now
      return schema.vans.where({ hostId: "123" });
    });

    this.get("/host/vans/:id", (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id;
      return schema.vans.findBy({ id, hostId: "123" });
    });

    this.get("/host/reviews", (schema) => {
      // Hard-code the hostId for now
      return schema.reviews.where({ hostId: "123" });
    });

    this.get("/host/income", () => {
      // Hard-code the hostId for now
      // Monthly income data
      const monthlyIncome = [
        { month: "June", monthAbbr: "Ju", income: 3800, isRecent: false },
        { month: "August", monthAbbr: "Au", income: 1200, isRecent: false },
        { month: "September", monthAbbr: "Se", income: 3000, isRecent: false },
        { month: "October", monthAbbr: "Oc", income: 2500, isRecent: false },
        { month: "November", monthAbbr: "No", income: 1500, isRecent: true },
        { month: "December", monthAbbr: "De", income: 800, isRecent: true },
      ];

      // Total income for last 30 days
      const totalIncome = 2260;

      return {
        monthlyIncome,
        totalIncome,
      };
    });

    this.get("/host/transactions", (schema) => {
      // Hard-code the hostId for now
      return schema.transactions.where({ hostId: "123" });
    });
  },
});

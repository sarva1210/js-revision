const people = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1527735543968-9ac0930becd4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Fullstack Developer",
    description: "Passionate about building modern and scalable applications.",
    tags: ["javascript", "fullstack", "backend"]
  },
  {
    fullName: "Meera Kapoor",
    image: "https://plus.unsplash.com/premium_photo-1674317323036-89b5082ed447?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "UI/UX Designer",
    description: "Creates beautiful and user-friendly designs.",
    tags: ["design", "ux", "creative"]
  },
  {
    fullName: "Rohan Verma",
    image: "https://plus.unsplash.com/premium_photo-1734093340226-811584a17683?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Content Creator",
    description: "Loves making creative and engaging content.",
    tags: ["video", "editing", "shortform"]
  },
  {
    fullName: "Sanya Arora",
    image: "https://plus.unsplash.com/premium_photo-1749833634296-1a0ae0cf47f0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Digital Marketer",
    description: "Helps brands grow with modern strategy.",
    tags: ["marketing", "seo", "ads"]
  },
  {
    fullName: "Kabir Sinha",
    image: "https://plus.unsplash.com/premium_photo-1738692725802-f64a80012a7c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Photographer",
    description: "Captures cinematic and aesthetic photos.",
    tags: ["photography", "portraits", "creative"]
  },
  {
    fullName: "henna Mehta",
    image: "https://plus.unsplash.com/premium_photo-1674317323036-89b5082ed447?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "UI/UX Designer",
    description: "Creates beautiful and user-friendly designs.",
    tags: ["design", "ux", "creative"]
  },
];

const container = document.getElementById("cardContainer");
let output = "";

people.forEach((person) => {
  output += `
    <div class="card">
      <img src="${person.image}" alt="">

      <div class="info">
        <h3>${person.fullName}</h3>
        <h4>${person.profession}</h4>
        <p>${person.description}</p>

        <div class="tags">
          ${person.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>

        <span class="btn">Contact</span>
      </div>
    </div>
  `;
});

container.innerHTML = output;
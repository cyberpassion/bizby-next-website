interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

export const teamList: TeamProps[] = [
  {
    imageUrl:
      "https://cyberpassion.com/wp-content/uploads/2022/04/IMG_20220130_175614_115-e1751993608989.jpg",
    firstName: "Ravi",
    lastName: "Sharma",
    positions: ["Chief Executive Officer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://shadcnuikit.com/",
      },
    ],
  },
  {
    imageUrl:
      "https://cyberpassion.com/wp-content/uploads/2022/04/IMG-20200123-WA0020.jpg",
    firstName: "Akanksha",
    lastName: "Sharma",
    positions: ["Chief Operating Officer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://shadcnuikit.com/",
      },
      {
        name: "Github",
        url: "https://github.com/bundui",
      },
    ],
  },
  {
    imageUrl:
      "https://cyberpassion.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-10-at-7.50.09-AM-e1751992257949.jpeg",
    firstName: "Heera Lal",
    lastName: "Sharma",
    positions: ["Chief Marketing Officer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://shadcnuikit.com/",
      },
      {
        name: "Github",
        url: "https://github.com/bundui",
      },
      {
        name: "X",
        url: "https://x.com/TobyBelhome",
      },
    ],
  },
  {
    imageUrl:
      "https://cyberpassion.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-09-at-7.33.18-PM-1-e1751992471234.jpeg",
    firstName: "Veer",
    lastName: "Prajapati",
    positions: ["Chief Financial Officer"],
    socialNetworks: [
      {
        name: "X",
        url: "https://x.com/TobyBelhome",
      },
    ],
  },
  {
    imageUrl:
      "https://cyberpassion.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-03-at-15.52.43-e1751992309429.jpeg",
    firstName: "Shreya",
    lastName: "Sharma",
    positions: ["Chief Creative Officer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://shadcnuikit.com/",
      },
      {
        name: "Github",
        url: "https://github.com/bundui",
      },
      {
        name: "X",
        url: "https://x.com/TobyBelhome",
      },
    ],
  },
  {
    imageUrl:
      "https://cyberpassion.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-08-at-10.25.17-PM.jpeg",
    firstName: "Utkarsh",
    lastName: "Rastogi",
    positions: ["Web Developer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://shadcnuikit.com/",
      },
      {
        name: "Github",
        url: "https://github.com/bundui",
      },
      {
        name: "X",
        url: "https://x.com/TobyBelhome",
      },
    ],
  },
  {
    imageUrl:
      "https://cyberpassion.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-08-at-8.37.19-PM.jpeg",
    firstName: "Yash",
    lastName: "Johari",
    positions: ["Software Developer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://shadcnuikit.com/",
      },
      {
        name: "Github",
        url: "https://github.com/bundui",
      },
      {
        name: "X",
        url: "https://x.com/TobyBelhome",
      },
    ],
  },
  {
    imageUrl:
      "https://cyberpassion.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-28-at-2.25.02-PM.jpeg",
    firstName: "Piyush",
    lastName: "Sharma",
    positions: ["Business Development Manager"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://shadcnuikit.com/",
      },
      {
        name: "Github",
        url: "https://github.com/bundui",
      },
      {
        name: "X",
        url: "https://x.com/TobyBelhome",
      },
    ],
  },
  {
    imageUrl:
      "https://cyberpassion.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-08-at-9.00.12-PM.jpeg",
    firstName: "Reetu",
    lastName: "Chaudhary",
    positions: ["Manager, Quality Assurance"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://shadcnuikit.com/",
      },
      {
        name: "Github",
        url: "https://github.com/bundui",
      },
      {
        name: "X",
        url: "https://x.com/TobyBelhome",
      },
    ],
  },
];

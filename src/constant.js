import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";

export { logoImg };

export const companyDetails = {
  phone: "+919620715510",
  phone2: "+919901933775",
  address:
    "208, Shri Sannidhi Apartment, 2nd Cross, Chikkappanna Layout, Hennur, Bengaluru - 560043",
  email: "authaisolutions@gmail.com",
  linkedin: "https://www.linkedin.com/in/raghavendra-gs-683b73329/",
  instagram:
    "https://www.instagram.com/authaisolutions2024/profilecard/?igsh=a2U1cW9oaWlzNXFl",
  twitter: "https://x.com/authaisolutions",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// portfolio
// export const portfolio = [
//   {
//     id: 1,
//     title: "Figo Tech",
//     img: require("./assets/images/portfolio/1.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 2,
//     title: "News Feed",
//     img: require("./assets/images/portfolio/2.jpeg"),
//     imgFit: "object-cover",
//   },
//   {
//     id: 3,
//     title: "Food Application",
//     img: require("./assets/images/portfolio/3.png"),
//     imgFit: "object-contain",
//   },
//   {
//     id: 4,
//     title: "Crio Load App",
//     img: require("./assets/images/portfolio/4.jpg"),
//     imgFit: "object-cover",
//   },
// ];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO of Innovative Tech Corp",
    img: require("./assets/images/testimonial1.png"),
    desc: "“Partnering with AUTH AI SOLUTIONS has been nothing short of a revelation for our organization. Their unwavering commitment to ethical AI has not only streamlined our operations but has also resonated deeply with our core values”",
  },
  {
    id: 2,
    name: "Sarah Jardin",
    position: "Director of Operations at Green Future Ltd",
    img: require("./assets/images/testimonial2.png"),
    desc: "“The exceptional team at AUTH AI SOLUTIONS took the time to thoroughly understand our unique challenges and crafted bespoke solutions that far exceeded our expectations.”",
  },
  {
    id: 3,
    name: "Velicia Jamez",
    position: "CTO of Health Innovations Group",
    img: require("./assets/images/testimonial3.png"),
    desc: "“AUTH AI SOLUTIONS stands at the forefront of ethical artificial intelligence. Their invaluable insights and expertise have been instrumental as we navigate the intricate landscape of implementing AI technologies within our business.”",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Our full-stack development services provide end-to-end solutions, combining front-end and back-end expertise for a future-proof digital presence.",
    icon: require("./assets/images/icons/webdev.png"),
    detailContent:
      "In today's interconnected world, website applications have become an integral part of our daily lives. From e-commerce platforms to social media networks, from educational resources to government services, these digital tools have revolutionized the way we interact, communicate, and conduct business. The development of website applications is a complex process that involves a blend of creativity, technical expertise, and a deep understanding of user needs. \n\n At the core of website application development lies the interplay of front-end and back-end development. The front-end, or client-side, is what the user sees and interacts with. It encompasses the design, layout, and functionality of the website's interface. Popular front-end technologies include HTML, CSS, and JavaScript frameworks like React, Angular, and Vue.js. These tools enable developers to create visually appealing and intuitive user experiences.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Achieve Mobile Supremacy through Custom App Development Solutions that Combine User- Centric Design, Seamless Functionality, and Sustainable Business Growth.",
    icon: require("./assets/images/icons/appdev.png"),
    detailContent:
      "One of the key differences between mobile and web app development is the platform-specific nature of mobile apps. While web apps can be accessed on any device with a web browser, mobile apps are designed for specific platforms, such as iOS and Android. This necessitates developing separate versions for each platform, often using different programming languages and development environments.\n\nPerformance is another critical factor in mobile app development. With limited processing power and battery life, mobile devices demand optimized apps that run smoothly and efficiently. Developers must carefully consider factors such as memory usage, network connectivity, and power consumption to ensure a positive user experience.",
  },
  {
    id: 3,
    title: "Cloud Migration Services",
    description:
      "Seamlessly transition your business to the cloud with expert migration strategies that minimize risk and maximize performance.",
    icon: require("./assets/images/icons/cloud.png"),
    detailContent:
      "One of the primary drivers of cloud migration is the need for scalability. Traditional on-premises infrastructure can be inflexible, making it difficult to accommodate rapid growth or fluctuating workloads. Cloud platforms, on the other hand, offer virtually unlimited scalability, allowing businesses to easily adjust their resources to meet changing demands. This flexibility can significantly reduce costs and improve operational efficiency.\n\nCost-effectiveness is another compelling reason for organizations to consider cloud migration. Cloud providers often offer pay-as-you-go pricing models, which can result in significant cost savings compared to the upfront investments required for on-premises infrastructure. Additionally, cloud platforms can help reduce IT operational costs by automating routine tasks and eliminating the need for on-premises data centers.",
  },
  {
    id: 4,
    title: "AI Development",
    description:
      "Unlock Next-Gen Customer Experience with Expertly Crafted Conversational AI ",
    icon: require("./assets/images/icons/ai.png"),
    detailContent:
      "At the heart of AI development is the creation of algorithms and models that enable machines to learn from data and improve their performance over time. Machine learning, a subset of AI, involves training algorithms on large datasets to recognize patterns, make predictions, and automate tasks. Deep learning, a more advanced form of machine learning, utilizes artificial neural networks to process complex data and learn from it.\n\nAI development has a wide range of applications across various domains. In healthcare, AI is being used to diagnose diseases, develop new treatments, and personalize patient care. In finance, AI-powered systems are used for fraud detection, risk assessment, and algorithmic trading. In manufacturing, AI is driving automation, improving efficiency, and enhancing product quality.",
  },
  {
    id: 5,
    title: "Data Science Services",
    description:
      "Accelerate Business Growth and Unlock New Revenue Streams with Our Expert Data Science Solutions.",
    icon: require("./assets/images/icons/datascience.png"),
    detailContent:
      "At the core of data science services lies the ability to collect, clean, and prepare data for analysis. Data scientists employ a variety of techniques to ensure data quality and reliability, including data cleansing, normalization, and feature engineering. Once the data is prepared, it can be subjected to statistical analysis, machine learning algorithms, and other data mining techniques to uncover meaningful patterns and trends.\n\nOne of the key benefits of data science services is the ability to make data-driven decisions. By analyzing vast amounts of data, businesses can gain valuable insights into customer behavior, market trends, and operational efficiency. Data science services also play a crucial role in driving innovation. By leveraging advanced analytics techniques, businesses can develop new products and services, identify emerging opportunities, and stay ahead of the competition. Additionally, data science can be used to create predictive models that can forecast future trends and anticipate risks.",
  },
  {
    id: 6,
    title: "IT Consulting & Strategy",
    description:
      "Connect IT and Business for Unparalleled Success with Our Expert Consulting, Aligning IT Infrastructure with Business Goals.",
    icon: require("./assets/images/icons/itconsulting.png"),
    detailContent:
      "One of the primary roles of IT consulting firms is to help businesses align their IT strategies with their overall business objectives. By conducting thorough assessments and analyses, consultants can identify areas for improvement and recommend solutions that optimize efficiency, reduce costs, and enhance competitiveness. This may involve implementing new technologies, upgrading existing systems, or restructuring IT operations.\n\nIT consulting firms also play a vital role in addressing the security challenges faced by businesses today. In an increasingly interconnected world, protecting sensitive data from cyber threats is crucial. Consultants can help organizations assess their security vulnerabilities, implement robust security measures, and develop incident response plans to minimize the impact of potential breaches.",
  },
  {
    id: 7,
    title: "Chatbot Development",
    description:
      "Chatbots to Re-define Customer Interaction, Drive Revenue, and Future-Proof Your Business.",
    icon: require("./assets/images/icons/chatbot.png"),
    detailContent:
      "Chatbots are powered by natural language processing (NLP), a field of artificial intelligence that enables machines to understand and interpret human language. NLP techniques allow chatbots to process and analyze text, extract meaning, and generate appropriate responses. This capability has led to the development of chatbots that can engage in meaningful conversations, answer questions, and even provide personalized recommendations.\n\nOne of the primary benefits of chatbots is their ability to improve customer service. By automating routine tasks and providing immediate responses to customer inquiries, chatbots can reduce wait times, enhance customer satisfaction, and free up human agents to handle more complex issues. Additionally, chatbots can be used to collect customer feedback and insights, helping businesses to identify areas for improvement and tailor their offerings to meet customer needs.",
  },
  {
    id: 8,
    title: "Data Analytics & Business Intelligence",
    description:
      "Our cutting-edge analytics and Business Intelligence capabilities distil complex data in to clear, actionable insights.",
    icon: require("./assets/images/icons/dataanalytics.png"),
    detailContent:
      "Data analytics involves the process of examining data to uncover patterns, trends, and insights. It encompasses a wide range of techniques, including statistical analysis, machine learning, and data mining. By applying these methods to large datasets, organizations can extract valuable information that can be used to inform decision-making.\n\nBusiness intelligence, on the other hand, focuses on providing actionable insights to support strategic decision-making. BI tools and platforms enable organizations to collect, store, and analyze data from various sources, transforming raw data into meaningful information that can be easily understood and visualized.",
  },
  {
    id: 9,
    title: "Natural Language Processing (NLP)",
    description:
      "Our advanced NLP capabilities empower applications to decipher, analyze, and respond to human language.",
    icon: require("./assets/images/icons/nlp.png"),
    detailContent:
      "NLP has a wide range of applications across various domains. In customer service, chatbots and virtual assistants powered by NLP can provide immediate responses to customer inquiries and automate routine tasks. In healthcare, NLP can be used to analyze medical records, extract information from clinical notes, and assist in drug discovery. In the legal field, NLP can be used to automate document review, extract key information from legal contracts, and provide legal research assistance.\n\nAs NLP technology continues to advance, we can expect to see even more innovative applications emerging. For example, NLP-powered systems could be used to create intelligent personal assistants that can understand our needs and preferences, or to develop more accurate and natural-sounding language translation tools.However, the development of NLP is not without its challenges. Issues such as bias, privacy, and ethical considerations must be carefully addressed.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Glowsy",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "Artisan Express",
  },
  {
    id: 5,
    img: require("./assets/images/app_projects/5.webp"),
    title: "House of Deliverance",
  },
];

// 'use client';

// import React, { useState } from "react";
// import Image from "next/image";
// import { FaReact, FaNodeJs } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiFirebase, SiJsonwebtokens, SiStripe } from "react-icons/si";
// import { FiFolder } from "react-icons/fi";

// import Project1 from "./Projects/Project1";
// import Project2 from "./Projects/Project2";
// import Project3 from "./Projects/Project3";

// import project1Img from "../../public/Project-1/img1.png";
// import project2Img from "../../public/Project-2/img11.png";
// import project3Img from "../../public/project-3/img1.png";

// const iconMap = {
//   React: <FaReact className="inline-block text-blue-400 mr-1" size={14} />,
//   "Tailwind CSS": <SiTailwindcss className="inline-block text-teal-400 mr-1" size={14} />,
//   "Node.js": <FaNodeJs className="inline-block text-green-500 mr-1" size={14} />,
//   MongoDB: <SiMongodb className="inline-block text-green-600 mr-1" size={14} />,
//   Firebase: <SiFirebase className="inline-block text-yellow-400 mr-1" size={14} />,
//   JWT: <SiJsonwebtokens className="inline-block text-purple-400 mr-1" size={14} />,
//   Stripe: <SiStripe className="inline-block text-purple-600 mr-1" size={14} />,
// };

// const projects = [
//   {
//     title: "Workfleed - Employee Management System",
//     subtitle: "Role-based Employee Management System",
//     banner: project1Img,
//     component: Project1,
//     liveLink: "https://your-live-link.com",
//     repoLink: "https://github.com/your-repo",
//     description:
//       "Workfleed is a role-based employee management system with dashboards for Employees, HR, and Admin. It supports payroll handling, real-time updates, and task tracking.",
//     features: [
//       "Role-based Dashboard (Employee, HR, Admin)",
//       "Task & Work Sheet Management",
//       "Payroll & Salary Approval System",
//       "Email/Google Authentication",
//     ],
//     technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Firebase", "JWT", "Stripe"],
//   },
//   {
//     title: "Service Sharing Web Application",
//     subtitle: "Add, manage, and book services",
//     banner: project2Img,
//     component: Project2,
//     liveLink: "https://your-live-link.com",
//     description:
//       "A platform where users can add, manage, and book services. It supports dashboards, bookings, real-time updates, and more.",
//     features: [
//       "Service Management System",
//       "Role-based Dashboard",
//       "Status Tracking (Pending → Working → Completed)",
//       "Email/Google Authentication",
//     ],
//     technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Firebase", "JWT"],
//   },
//   {
//     title: "Micro Freelance Platform",
//     subtitle: "Find freelancers for small tasks",
//     banner: project3Img,
//     component: Project3,
//     liveLink: "https://your-live-link.com",
//     repoLink: "https://github.com/your-repo",
//     description:
//       "A platform that helps individuals find freelancers for small tasks. Users can post tasks, bid, and connect based on skills, budget, and deadlines.",
//     features: [
//       "Task Posting & Bidding System",
//       "User Roles: Client and Freelancer",
//       "Skill Matching & Filtering",
//       "Live Chat",
//       "Stripe Payment Integration",
//     ],
//     technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Firebase", "JWT"],
//   },
// ];

// const Projects = () => {
//   const [activeProject, setActiveProject] = useState(null);
//   const ActiveComponent = activeProject ? activeProject.component : null;

//   return (
//     <section id="Projects" className="scroll-mt-24 bg-gradient-to-br from-gray-900 via-black bg-black text-white py-12 font-rancho">
//       <h1 className="text-4xl md:text-5xl text-center font-bold mb-8 flex items-center justify-center gap-3">
//         <FiFolder className="text-blue-500" size={36} /> My Projects
//       </h1>

//       {/* Projects grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6">
//         {projects.map((proj, idx) => (
//           <div
//             key={idx}
//             className="bg-[#0b1220] rounded-xl overflow-hidden shadow-lg border border-gray-800 transform transition hover:-translate-y-2 flex flex-col"
//             style={{ minHeight: "330px" }}
//           >
//             <div className="relative w-full h-48">
//               <Image src={proj.banner} alt={proj.title} fill className="object-cover" />
//             </div>
//             <div className="p-5 flex flex-col justify-between flex-grow">
//               <div>
//                 <h3 className="text-lg md:text-xl font-semibold mb-1 leading-tight">{proj.title}</h3>
//                 <p className="text-purple-400 italic text-sm mb-3 truncate">{proj.subtitle}</p>

//                 <div className="flex flex-wrap gap-2 mb-4 max-w-full overflow-hidden">
//                   {proj.technologies.map((tech, i) => (
//                     <span key={i} className="text-xs flex items-center bg-gray-800 rounded-full px-2 py-1 select-none whitespace-nowrap">
//                       {iconMap[tech]}
//                       <span className="max-w-[80px] truncate">{tech}</span>
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <button
//                 onClick={() => setActiveProject(proj)}
//                 className="mt-auto w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
//               >
//                 View Details →
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {activeProject && (
//         <dialog open className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
//           <div className="bg-[#0b1220] w-full max-w-7xl max-h-[90vh] overflow-auto rounded-lg relative">
//             <button
//               onClick={() => setActiveProject(null)}
//               className="absolute right-4 top-4 text-white text-2xl font-bold"
//               aria-label="Close modal"
//             >
//               ✕
//             </button>
//             <div className="p-6 text-white">
//               {ActiveComponent && <ActiveComponent />}
//             </div>
//           </div>
//         </dialog>
//       )}
//     </section>
//   );
// };

// export default Projects;

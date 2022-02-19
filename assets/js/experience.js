AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Technical Product/Architecture Consultant",
    cardImage: "assets/images/experience-page/yellowfin.png",
    place: "Yellowfin BI",
    time: "(May, 2020 - present)",
    desp: "<p><strong>Key Successes:</strong></p><ul><li>Lead consultant to RLDatix SRE team allowing them to automate their Yellowfin deployment in Docker, and responsible for the success of new SSO project</li><li>Trusted advisor to UnderwriteMe engineering team enabling them to auto scale their Yellowfin deployment</li> <li>Solution Architect to key Launchpad customers, including Zing, EmiratesHR, and Edict eGaming</li> <li>Escalation point for all technical issues in the region, from third line support to pre-sales technical evaluations and advising customers on system &amp; environmental configuration</li> <li>Directed all technical aspects of Launchpad (customer onboarding to reduce customer time to live)</li> <li>Wrote playbook for global consultancy team, which was key in the sale of Yellowfin to new investors</li> <li>Successfully implemented Signals (AI) into Dekabank on BMC Remedy Smart Reporting ITSM data</li> <li>Automated provisioning of users and client orgs in regional Yellowfin demonstration system for sales team to create environments quickly</li> <li>Responsible for accuracy and thoroughness of Yellowfin Analyst and Architect certifications by testing and co-authoring</li> </ul> <p><strong>Key Responsibilities:</strong></p> <ul> <li>Ensure deployment standards are achieved around the design, develop, and delivery of Yellowfin.</li> <li>Assist the regional team and customers with the understanding of best practice deployment.</li> <li>Assist and oversee the end-to-end delivery of our BI solutions to ensure we achieve the customer desired outcome.</li> <li>Partner with customers to formulate strategies and determine what data drives the best business decision-making needs for their end users, including ideal design, data visualisation and UX flow.</li> <li>Provide detailed technical design specifications which define the Yellowfin solution, including the target architecture and requirements for ongoing management.</li> <li>Act as the regional Level 3 resource to help the team, customer, and partners isolate: glitches in their programs and applications, preserving/creating systems for data use, dealing with data warehouse, database storage, and other IT infrastructure issues, suggest best practice with building metadata so users can access data more efficiently, diagnosing capacity issues; etc.</li> <li>Assist pre-sales, post-sales, and partner teams with technical engagement, providing direction to Product Consultants, and support and advice to CSM as required.</li> <li>Responsible for the technical aptitude of the region, documenting gaps, needs, and being the funnel/bridge to product and development for issues experienced by the team, pre and post sales.</li> <li>Identify gaps in resources that help the team win, work with the needed teams to create the content and validate it.</li> <li>Educate and train the regional teams with short-focused sessions on the changes in product deployment and troubleshooting, new content.</li> <li>Experiment with new data reporting tools/technologies.</li> <li>Coach and mentor teams around changing in-product and deployment process.</li> <li>Keep up to date on changes in industry and product by investing in self-development, including extending technical skills and knowledge.</li> <li>Keep up to date on customer engagement documentation in Salesforce linked to insights and activities completed.</li> </ul>"
     },
  {
    title: "Support Engineer",
    cardImage: "assets/images/experience-page/yellowfin.png",
    place: "Yellowfin BI",
    time: "(July 2019 - Feb 2020)",
    desp: "<p><strong>Key Successes:</strong></p> <ul> <li>Key in the retention of at risk clients including Vallourec</li> <li>Technical escalation for retaining Payoneer</li> <li>Created interactive website, and step by step SSO scripts, to assist with up-skilling of partners in the region</li> </ul> <p><strong>Key Responsibilities:</strong></p> <ul> <li>Provide support by phone, email, and community posts.</li> <li>Prioritise and handle escalated issues through our global team and workflow</li> <li>Own and trouble-shooting new/unknown product issues with a focus on restoring systems to normal service and documenting solutions for the wider audience.</li> <li>Assist with the creation of test labs and VMs for the client services team.</li> <li>Assist with maintaining both internal and external training documents where necessary</li> <li>Keep detailed records of product defects/enhancements</li> <li>Assist the Customer Success team in driving client retention and growth.</li> <li>Follow up on escalated issues, be the voice of the customer.</li> <li>Build relationships with our customers</li> </ul>",
  },
  {
    title: "Technical Architect",
    cardImage: "assets/images/experience-page/zinc.png",
    place: "Zinc Digital",
    time: "(Feb 2018 - July 2019)",
    desp: "<p><strong>Key Successes:</strong></p> <ul> <li>Successfully implemented: Multiple client VPN&rsquo;s for automated data imports, bespoke data imports, custom business processes into proprietary system.</li> <li>Successfully Supported: Multiple clients and a variety of product implementations including High Profile Security Clients and Crisis Communication Systems.</li> <li>Data migration from alarm activation and signaling systems to proprietary system.</li> <li>Database Restructure, working through the current structure to remove unnecessary table/columns, defining naming convention and documentation for structure and changes.</li> <li>Application Development for High Profile Security Clients and Crisis Communication Systems/Platforms.</li> </ul> <p><strong>Key Responsibilities:</strong></p> <ul> <li>API Analysis &amp; Integration: Twilio, Sendgrid, Active Campaign, Merlin (data sent via email) and Secure File Transfer for import.</li> <li>Technical Specification Writing (Functionality, Data and Integration)</li> <li>Server Management and Troubleshooting: Configuration of Cloud Storage, Setup of Server Notifications, Ongoing Maintenance to both internal and client servers.&nbsp;</li> <li>VHost and DNS Management: Creating/managing Vhost Conf file, Creating/managing DNS Records for multiple domains</li> <li>Operations Management: Phone Line Management, Office IT Hardware, Onsite Server and Database Maintenance.&nbsp;</li> <li>Support Ticket Escalation for complex tickets or key clients.&nbsp;</li> <li>Application Development &amp; Testing: Bespoke client installations of Synapse product for clients such as Nation Incident Communications Centre, Global Support Services, M&amp;S, Global Security Operations Centre.&nbsp;</li> <li>Application Design: Synapse Actional Insight Application</li> <li>AWS Serverless Migration: Currently in progress, this involves working with other members of the team and our server provider.</li> <li>Client Liason for Technical Projects:Teach Northamptonshire, VSG Recruitment, JD Sports,&nbsp; Dixons Carphone, EDF Energy</li> </ul>",
  },
  {
    title: "Technical Support Lead",
    cardImage: "assets/images/experience-page/zinc.png",
    place: "Zinc Digital",
    time: "(Nov 2016 - Feb 2018)",
    desp: "<p><strong>Key Successes:</strong></p> <ul> <li>Implementation of new client support process.&nbsp;</li> <li>Creation of centralised contact point for clients.</li> <li>Process documentation creation.</li> <li>Department KPI reporting</li> </ul> <p><strong>Key Responsibilities:</strong></p> <ul> <li>Day to day management of the support team.</li> <li>Resource Management of external provider development teams.</li> <li>Provision of last line support for Zinc Digital product suite.</li> <li>Managing and monitor open incidents tickets, problem records and change management.</li> <li>KPI Reporting and SLA Management.</li> <li>Implementation of current standards, documentation and procedures to support ITIL,ISO 27001 and GDRP</li> <li>Organising and running team training.</li> <li>VHost and DNS Management: Creating/managing Vhost Conf file, Creating/managing DNS Records for multiple domains</li> <li>Operations Management: Phone Line Management, Office IT Hardware, Onsite Server and Database Maintenance.&nbsp;</li> <li>Support Ticket Escalation for complex tickets or key clients.&nbsp;</li> <li>Server Management and Troubleshooting: Configuration of Cloud Storage, Setup of Server Notifications, Ongoing Maintenance to both internal and client servers.</li> <li>Maintaining interdepartmental relationships.</li> </ul>",
  },
  {
    title: "Junior Web Developer",
    cardImage: "assets/images/experience-page/zero.jpeg",
    place: "Zero Carbon Future",
    time: "(Jun 2014 - July 2019)",
    desp: "<p><strong>Key Successes:</strong></p> <ul> <li>Implementation of a bespoke stocktake system that allowed users to record the stocktake web system rather than the previous paper based system.</li> <li>Co-managing the first stocktake using the newly implemented system.</li> <li>Running client training session.</li> <li>Launching the new UI client portal for managing heating systems.</li> </ul> <p><strong>Key Responsibilities:</strong></p> <ul> <li>Started by being given small tasks within the main project, these would include assigned bug fixes and small functionality changes.</li> <li>Working with our users from a support perspective, dealing with phone calls, emails and face to face issues from both internal and external customers.</li> <li>Train the staff in using the new functionality</li> <li>User Interface: Working with the design team and improving the current UI based on user feedback.</li> <li>Managing GIT repositories.</li> <li>Writing release notes and training documentation.</li> <li>Operations Management: Phone Line Management, Office IT Hardware, Onsite Server and Database Maintenance.</li> </ul>",
  },
  {
    title: "1st Line Support Analyst",
    cardImage: "assets/images/experience-page/kinetic.jpg",
    place: "Kinetic Solutions",
    time: "(Oct 2012 - June 2014)",
    desp: "<p><strong>Key Successes:</strong></p> <ul> <li>Worked for the Graduate Recruitment Scheme visiting various Universities promoting the company.</li> <li>Regularly gave presentations on new issues and developments which help us to share information and work more efficiently</li> </ul>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}<br>
              <span class="author">${time}
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },

];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

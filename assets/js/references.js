/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1: "Geoff",
    designation1: "VP Sales EMEA",
    image1: "assets/images/references-page/reviewphoto1.png",
    message1: "<p>Nathan's contribution covers so many different areas it is a challenge to pick out 1 or 2. If I was to try and summarise the impact, its that Nathan thinks strategically.</p><p>He can and does fix tactical issues relating to specific circumstances every day but what really sets him apart is the understanding and recognition of whats is required to enable the company to move forward and operate at scale. When we learn something new how do we share that with other stakeholders so that we dont have to repeat or duplicate the effort. The company relies in individual intervention too often to save the day. Often this is Nathan.</p> <p>He puts in whatever time is necessary to get it done whether that is customer or internal facing, often working evenings and weekends to keep on top of it all.</p> <p>He has opinions and ideas that he shares, he is willing to jump into situations without too much prep because he knows it necessary and is trusted not to make a  mess of it as the audience can quickly recognise the value and insights he offers and can build trust very quickly. I have really enjoyed working with him and value his opinion on many things.</p>",

    sl2: 2,
    name2: "Richard",
    designation2: "Customer Experience Director",
    image2: "assets/images/references-page/reviewphoto2.png",
    message2: "<p>Nathan has helped tier 1 &amp; 2 customers with upgrades, architectural improvements, performance enhancements and infrastructure changes. This has helped the CS to retain the accounts, reduce risk on the renewals and strengthen the relationships.</p> <p>Nathan has assisted Minerra with the creation of the Yellowfin product certifications. This included validating the certification program, both examination and practicals, giving feedback on question structure, answers provided, content of the practical assessment and feedback around the user experience of the certification process.</p> <p>Nathan goes above and beyond in everything he does. For any issue, either internal, client or partner related, Nathan takes ownership of the situation and bends over backwards to help everyone get to the solution. He thinks outside of the box and shares his thought process with the customers, partners and Yellowfin team to work collaboratively. He&rsquo;s great to have around and always picks up the team in conversations. Nathan works late nights and weekends to speak to the right people, improve his knowledge in all areas and ensures that he delivers. Nathan is passionate about sharing knowledge and spends his time documenting processes and procedures for other to follow and learn from. He is always available, for any member of the team, to assist and teach others how to deal with problems. Nathan produces great ideas to improve process, performance and the product and articulates it very effectively. I would have Nathan in my team any day.</p>",
  },

  {
    sl1: 3,
    name1: "Brett",
    designation1: "Product Consultant",
    image1: "assets/images/references-page/reviewphoto3.png",
    message1: "<p>Nathan is constantly going above and beyond in his role in the EMEA team.</p> <p>Two key examples of this contribution are:</p> <p>Taking on the responsibility for re-writing, organising and managing a large part of the client Launchpad process. Nathan has been a leader in the process and has provided valuable insight and knowledge (including a lot of time and hard work) to help making this process and its rollout more valuable for YF and its partners.</p> <p>As well as continuing with regular duties and role, Nathan has also been heavily involved with the technical refit of the EMEA office, including being onsite for an entire week to help supervise contractors on the setting up of new cabling, routers and wifi/network access, as well as doing a lot of the work himself.If you are looking at company values, Nathan covers all of these in (Accountability, Authenticity, Courage, Innovation, Fun) on a daily basis. These values are shown everyday as Nathan works not just in the Consultant role, but also jumps into a large number of other roles regularly to assist the team. These include creating and managing key documentation, jumping on support tickets, providing ad-hoc support and training to colleagues and lastly, constantly providing invaluable feedback to the development and product teams to help improve the YF product.</p>",

    sl2: 4,
    name2: "Jean",
    designation2: "Partner Channel Manager",
    image2: "assets/images/references-page/reviewphoto4.png",
    message2: "<p>Nathan has provided enormous support to the EMEA Channel and to me in particular over the last few months, as we drive hard as a priority to recruit new partners for our region.</p> <p>Through outbound efforts we have secured 6 new partner discussions/engagements in the last 3 months and Nathan has worked with the partner consultants to walk them through the product from a partner perspective, answer Q and A's and help expand their vision to ensure they fully understand &amp; appreciate our core proposition and USPs. He helps get them excited about the market opportunity and partnering with us and his contribution is critical to our success.</p> <p>In parallel to this, Nathan has spent time with some of the key existing partners to validate &amp; support their pre &amp; post sales execution, which is all part of our critical quality control. During these sessions he is gathering important product feedback and market intelligence and sharing with the team to help us improve. Partners (current and future) all appreciate and respect his time and energy and I know they would all give a huge vote for him if they were part of the nomination process!</p> <p>Thanks Nathan from all the partners and from me! The above efforts will add value to support EMEA partners to execute on their revenue commitments to Yellowfin of just under 800k AUD AAR this FY. The impact is significant and important.</p> <p>What Company Values does he embody? Nathan's engagement with our new ( and existing) partners embodies the authentic, knowledgable approach we need for these conversations - mixed in with his great personality. Calm personae and ability to connect with people (fun!) , it is clear how and why new partners will want to be connected with him and with the Company How does he go above and beyond? Nathan will work tirelessly in ensuring we fully prepare for each new partner session and will nail the brief each time. He continues to help challenge, in a constructive way, what we need to ensure our partner channel is successful and he will not hesitate to support conversations to secure this. (Innovation, Courage of conviction)</p>",
  },

  {
    sl1: 5,
    name1: "Sarah",
    designation1: "Customer Success Operations",
    image1: "assets/images/references-page/reviewphoto5.png",
    message1: "<p>Going over and beyond for helping keep the EMEA office the best place to work. With anything that I struggle to do, need help with or just on his own initiative. Nathan is the support system we need in the office and makes sure we have all working comms for the office.</p> <p>He joins on to any call to ensure that the customer has all that they need to get the most out of the product. Even at last minute Nathan will join a call to help and rescue a situation. His technical information is outstanding and blows me away with what he knows.</p> <p>Nathan embodies the company values and also instils them in his peers, he is a pleasure to work with. Nathan goes above and beyond in helping to ensure that the EMEA office is in a workable condition and that we have everything we need. With all of the updates that we put the office through Nathan was there to help clear out the office, organising the wiring and being in the office past when he should be to get the job done. When I can&rsquo;t be around Nathan steps in and does an amazing job. His knowledge of the product is incredibly impressive and nothing is too much for him to ensure that customer is happy. He goes over and beyond what he should and always ready to join last minute calls to help out customers. Nathan is a key member of the EMEA team and we are very lucky to have him.</p>",
   
    sl2: 6,
    name2: "Andrej",
    designation2: "Lead UX Architect",
    image2: "assets/images/references-page/reviewphoto4.png",
    message2: "<p>I give my highest recommendation to Nathan.</p>",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="assets/images/icons8-quote-left-96.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="assets/images/icons8-quote-left-96.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

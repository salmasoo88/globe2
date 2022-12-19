import video from "assets/video/explore.mp4";
import Ire_video from "assets/video/Eva Lloyd intro REF 21 FINAL (Captioned by Zubtitle).mp4";
import julie_video from "assets/video/JULIA DAVIDSON - REF - intro - final (Captioned by Zubtitle).mp4";
import Richard_video from "assets/video/Richard Lindsay intro REF 21 FINAL (Captioned by Zubtitle) (1).mp4";
import Ravi_video from "assets/video/Ravi intro REF 2021 FINAL (Captioned by Zubtitle) (1).mp4";
import Sam_video from "assets/video/Sam Wass intro FINAL (Captioned by Zubtitle).mp4";
import image from "assets/images/Pollution.jpeg";
import image1 from "assets/images/ACE A Conversational AI Approach to Detecting Deception and Tackling Insurance Fraud Julie Wall 4.jpg";
import {
  HelpingYoungPeople,
  Meera_p1,
  Meera_p2,
  Clare_p1,
  Janet_p1,
  Sam_p1,
  Kathryn_p1,
  LYN,
  JOMBA,
  Alex_p1,
  Pollution_p1,
  Huang_p1,
  Vassils_p1,
  Alan_p1,
  Eva_p1,
  Ravindra_p1,
  Arman_p1,
  Shareef_p1,
  Shareef_p2,
  Shareef_p3,
  Nadeem_p1,
} from "./image_videosExport.js";

const country = {
  Finland: [
    {
      location: "Finland",
      title:
        "Deep Fake Videos Detection through Explainable AI to Combat Disinformation on Social Media",
      description:
        "&#8226 The wide circulation of disinformation including both fake news and deep fake videos, particularly on social media is polluting its transparency and authenticity turning it into an untrustworthy environment. While research on fake news is considerably high, the research on AI-generated deep fake video is still in the infancy stage. Following this need, the prime objective of this research is to develop a proactive, advanced explainable, human collaborated AI-based online disinformation detecting tool for securing a trustworthy social media environment. The aim is to build technological capability for algorithmic fake video detection. that could be installed or delivered as a service.",
      Plname: "Dr.Nadeem Qazi",
      image: Nadeem_p1,
    },
  ],

  Japan: [
    {
      location: "Japan",
      title: "Pioneering Sustainable Coastal Defences",
      description:
        "&#8226 Dr Ravindra Jayaratne works with disaster-vulnerable communities around the world to build stronger, more sustainable coastal defences against tsunamis and extreme waves.<br>&#8226 His new breakwater design formula for tsunami has been incorporated into the Structural Design Standards of the American Society of Civil Engineers. ",
      Plname: "Dr Ravindra Jayaratne",
      image: Ravindra_p1,
    },
    {
      location: "Japan",
      title: "Supporting conservation of key peatland sites in Japan",
      description:
        "&#8226 1. Providing key scientific justification for the conservation of several key peatland sites, working with the Universities of Tokyo and Kyoto, and the Kushiro International Wetland Centre.  <br>&#8226 This work led to the protection of one key site from development as a liquified natural gas storage facility, as well as stimulating a significant expansion in the number of sites designated under the Ramsar Convention throughout Japan.  ",
      Plname: "Richard Lindsay",
    },
  ],

  "United Kingdom": [
    {
      location: "United Kingdom ",
      title:
        "A Conversational AI Approach to Detecting Deception and Tackling Insurance Fraud",
      description:
        "&#8226 Speech and natural language technology have advanced at a rapid pace in recent years.Today, there are numerous commercial products that rely on speech, natural language processing and natural language understanding, loosely termed Conversational AI.<br>&#8226 Together with the SME Intelligent Voice Ltd, this project investigated the latest machine and deep learning approaches, which enable Conversational AI, to produce a solution to a real-world case study in the insurance domain that exploits speech and language to detect deception and tackle fraud.",
      Plname: "Dr Julie Wall ",
      image: image1,
    },

    {
      location: "United Kingdom ",
      title:
        "Assessing peatland status, condition, management and policy for carbon and other ecosystem benefits (REF 2021)",
      //description:
      //"&#8226 Community art exhibition with neighbours displaying their art in their windows for all to see on healthy walks through the Borough. ",
      Plname: "Richard Lindsay",
      video: Richard_video,
    },
    {
      location: "United Kingdom ",
      title:
        "Protecting the beaches; Disaster prevention mechanisms against tsunamis, floods and coastal erosion (REF 2021)",
      //description:
      //"&#8226 Community art exhibition with neighbours displaying their art in their windows for all to see on healthy walks through the Borough. ",
      Plname: "Ravindra Jayaratne",
      video: Ravi_video,
    },
    {
      location: "United Kingdom ",
      title:
        "City kids: demonstrating how noisy, cramped environments affect early cognitive and emotional development",
      //description:
      //"&#8226 Community art exhibition with neighbours displaying their art in their windows for all to see on healthy walks through the Borough. ",
      Plname: "Sam Wass",
      video: Sam_video,
    },
    //New projects start
    {
      location: "United Kingdom ",
      title: "Newham Lockdown Window Art Exhibit",
      description:
        "&#8226 Community art exhibition with neighbours displaying their art in their windows for all to see on healthy walks through the Borough. ",
      Plname: "Michael Nash",
    },

    {
      location: "United Kingdom ",
      title: "The Supporting Wall ",
      description:
        "&#8226 Level 6 Photography and Graphic Design students, Luisa Iacuzio and Dominika Blaszczyk, worked with Newham Council on the ‘Supporting Wall’ project. <br>&#8226Working with the community, they produced a 7.5 meter x 2.9 meter photographic mural for the Carpenters' Estate community in Stratford to celebrate community spirt in the face of gentrification which has dispersed people in the area.",
      Plname: "Luisa Lacuzio, Dominika Ewa Blaszczyk",
    },
    {
      location: "United Kingdom",
      title: "Advocating for Better Childcare for Low-Income Families",
      description:
        "&#8226 Professor Eva Lloyd’s work has promoted access to affordable, quality childcare, which improves the health and economic wellbeing of families. Her research has influenced UK and international policy, law and services.",
      Plname: "Eva Lloyd",
      image: Eva_p1,
    },
    {
      location: "United Kingdom ",
      title: "SportInYourFutures: Community Sport Programme for Children",
      description:
        "&#8226 The programme is designed to directly tackle the low levels of engagement with physical activity among primary school ages children in East London boroughs.<br>&#8226 Primary school pupils are invited to attend UEL matches at SportsDock. Before matches, UEL sport scholars take the children through a series of fun exercises and sporting activities from volleyball to judo, plus share insight into the wider health and wellbeing benefits of sport.<br>&#8226 There is also a Q&A with the scholars, so pupils can ask questions about university life and getting into sport.",
      Plname: "Will Ashby, High Performance Sport Manager",
    },
    {
      location: "United Kingdom ",
      title: "GreenSeasTrust Bin: Designed by Students for the Ocean",
      description:
        "&#8226 Educational bin designed by Product Design students for GreenSeas Trust.",
      Plname: "Emily Hodgkinson, George Davis",
    },
    {
      location: "United Kingdom ",
      title: "Confronting Youth Cybercrime in Europe",
      description:
        "&#8226 The cost of cybercrime is estimated to be at least 27£ billion per year to the UK alone.<br>&#8226 The Europol Cybercrime Centre (EC3) suggest that youth are increasingly involved as perpetrators in a wide range of cybercrime. <br>&#8226  This project develops education and awareness raising initiatives across the EU to divert young people from cybercrime. <br>&#8226 Funded by EU H2020 (CCDriver).",
      Plname: "Professor Julia Davidson",
    },
    {
      location: "United Kingdom ",
      title: "Addressing Online Harms in the UK",
      description:
        "&#8226  The UK Online Safety Bill places a duty of care on industry to protect children ( and adults) from online harm. <br>&#8226 The new regulator is OFCOM. <br>&#8226 The project produced an interconnected framework of risk and harm to inform OFCOMs guidance to VSPs on the protection of children online. ",
      Plname: "Professor Julia Davidson",
    },
    {
      location: "United Kingdom",
      title: "JOMBA! Dance Festival ",
      description:
        "&#8226 JOMBA! is a contemporary dance festival, colloquium and writing residency. <br>&#8226The latest festival focused on the theme of ‘BORDER CROSSINGS’ and looked at dance makers, dance companies and performance-based artists who, in some articulated way resonate with the ideas of “BORDER CROSSINGS”; be these geographical, emotional, physical, spiritual and performative. <br>&#8226The JOMBA! Series explores political ideas such as border crossings or the context of archives– who has access to the artefacts, whose voice is the loudest or strongest, whose histories and memories are chosen to represent or stand as a symbol of a movement or moment in time? <br>&#8226Funder: Centre for Creative Arts (University of KwaZulu-Natal) and the National Institute for Humanities & Social Sciences (South Africa) <br>&#8226Key collaborator: Dr Llaine Loots, Artistic Director of JOMBA! Contemporary Dance Experience and The Centre for Creative Arts (University of KwaZulu-Natal) ",
      Plname: "Sarahleigh Castelyn",
      image: JOMBA,
    },

    {
      location: "Newham and Dudley,United Kindom",
      title: "Addressing Public Involvement in Open Democracy",
      description:
        "&#8226 Public spending and the commissioning of public services is weakened when it does not involve the public. <br>&#8226 	The Young Commissioner model is a tried and tested model to make open democracy real. <br>&#8226 	A range of public bodies, civil servants, healthcare workers, policy makers and communities have benefited from using the young commissioner’s model.",
      Plname: "Dr Darren Sharpe",
    },

    {
      location: "United Kingdom ",
      title: "Improving Health with Holistic Interventions",
      description:
        "&#8226  Dr Marcello Bertotti has lobbied the NHS to allocate more resources on social prescribing for young people as a way to strengthen their mental and physical wellbeing.<br>&#8226In social prescribing, doctors make referrals for patients to connect and participate in community-based activities.  ",
      Plname: "Dr Marcello Bertotti",
    },
    {
      location: "London,United Kingdom",
      title:
        "Dignity, Gender and Period Poverty; Approaches to Improving Menstrual Health Outcome",
      description:
        "&#8226 This project challenged stigmatised views of menstrual health and empowers women to seek appropriate medical treatment. <br>&#8226 An exploration of different approaches to tackling period poverty and menstrual health compared to the UK. <br>&#8226 The research is uncovering the relationship between global cultures, dignity, and menstrual health.",
      Plname: "Abigail Lennox (PhD student)",
    },

    {
      location: "United Kingdom",
      title: "Localising the SDGs in Newham and Tower Hamlets",
      image: Meera_p1,
      description:
        "&#8226 The project is promoting the use of UN Sustainable Development Goals in the Newham and Tower Hamlets<br>&#8226 It encourages sustainable consumption and production habits. <br>&#8226 It advocates for health and well- being for everyone in the borough at all ages.",
      Plname: "Dr Meera Tiwari",
    },
    {
      location: "United Kingdom",
      title: "Walking Publics/Walking Arts",
      image: Clare_p1,
      description:
        "&#8226 The project surveyed over 1000 members of the public and over 100 artists to explore the importance of walking during the pandemic. <br>&#8226  Over the course of the project, various walking art pieces were commissioned and collected together in an online exhibition.<br>&#8226  The project worked in partnership with experts and creative walking artists to inform its research and understand the many health and social benefits of walking creatively.",
      Plname: "Clare Qualmann",
      img: "images/Walkingpublic.jpg",
    },
    {
      location: "United Kingdom",
      title: "The Stopping Place",
      description:
        "&#8226 The project gave a voice to a demographic that faces some of the harshest discrimination in the UK.<br> &#8226 The Stopping Place is a large- scale choral project which places two sisters of Roma heritage centre stage of a diverse female chorus drawing on music from the Roma tradition working with Newham Music Education Hub to create the all-female chorus drawn from schools in Newham.<br> &#8226 The project is creating new roles in the repertoire for underrepresented artists, in a production for diverse secondary school students from ‘hard to reach’ schools and opportunities for participation from diverse inter-generational community groups in the borough",
      Plname: "Dominic Hingorani",
    },

    {
      location: "United Kingdom",
      title: "Housing and Independence in Duchenne Muscular Dystrophy",
      image: Janet_p1,
      description:
        "&#8226 The study will support people with disabilities to live full, happy and independent lives.<br>&#8226 The study supports a Parliamentary and cross-charity campaign about accessible housing by exploring the experience of disabled adults with Neuro-muscular impairment looking for places to live independently.",
      Plname: "Dr Janet Hoskin",
    },
    {
      location: "United Kingdom",
      title: "Investigating How Nature Affects Learning ",
      image: Sam_p1,
      description:
        "&#8226  Professor Sam Wass is taking children into green spaces to examine how learning outside versus indoors affecs under privileged kids growing up in the city. ",
      Plname: "Sam Wass and Goldenburg",
    },
    {
      location: "United Kingdom",
      title:
        "Brickfields; 5 events Exploring and Learning the Craft of Brick Making and Performance",
      description:
        "&#8226 Community based project that investigates themes of living in urban environments and reconnects people with the history of London, manual labour, and housing issues. <br>&#8226 It gives young people the opportunity to learn traditional crafts which are in decline.<br>&#8226 Th events provided students and young people opportunities to reflect on and craft performances about relationships between built environments and the people who live there.",
      Plname: "Lynne McCarthy",
      image: LYN,
    },
    {
      location: "United Kingdom",
      title: "Pollution Pods",
      description:
        "&#8226  Pollutions Pods is a radical, sensory art installation.<br>&#8226  Through collaboration with NITU and expert perfumers, Pinsky recreated the air environment from 5 cities across the globe.<br>&#8226 The Pods demonstrate to visitors the effects of different pollutants on local air quality and highlights the danger of air pollution.",
      Plname: "Michael Pinksy",
      image: Pollution_p1,
    },
    {
      location: "United Kingdom",
      title: "Making Royal Docks Regeneration Zone a Living Wage Place",
      description:
        "&#8226 Funded through UEL’s East London Scholars initiative, students investigated the impact that the Living Wage has had on employers and employees in the Royal Docks Enterprise Zone.",
      Plname: "Dr Shampa Roy-Mukherjee",
    },
    {
      location: "United Kingdom",
      title: "Me and Your Story",
      description:
        "&#8226  The project helped to capture stories of people with learning disabilities during Covid-19 pandemic.<br>&#8226   The project used story telling to bridge gaps and resolve misunderstandings, fostering social inclusion.<br>&#8226  Resource for teachers to use during distance learning were produced.",
      Plname: "Gosia Kwiatkowska",
    },
    {
      location: "United Kingdom",
      title: "Solutions to Antimicrobial Resistance",
      description:
        "&#8226   Antimicrobial resistance is a major issue of today’s healthcare system. It has been estimated that there will be over 10M deaths per year due to AMR if no action is taken.  <br>&#8226 Natural products have been used globally for the treatment of various diseases including infections caused by multi-drug resistant bacteria.  <br>&#8226 This project focuses on natural resources including medicinal plants and microbes to explore metabolites with potential activities against multi- drug resistant and methicillin- resistant Staphylococcus aureus Current funding: Indian Council of Agricultural Research (ICAR), TETFund, UEL-Industry joint KE fund, Self-funded PhD. ",
      Plname: "Mukhles ur Rahmen ",
    },
    {
      location: "United Kingdom",
      title: "Advanced Practice Nurses' Perceptions of Spirituality ",
      description:
        "&#8226  An online international survey of advanced practice nurses and follow-up interviews was conducted. ",
      Plname: "Gulnar Ali",
    },
    {
      location: "United Kingdom",
      title: "East London Sport Talent Pathway ",
      description:
        "&#8226 In some sports the diversity of athletes, coaches and administrators reaching elite levels is limited. This project will shed light on a set of factors that exist along the talent pipeline that impact on an individual’s chances of reaching elite levels. <br>&#8226 The project is funded by Sport England.",
      Plname:
        "Dr Richard Buscombe Stewart Bruce-Low Kara-Aretha Graham Ian Pickup Louis Annan",
    },
    {
      location: "United Kingdom",
      title: "Pioneering Sustainable Coastal Defences",
      description:
        "&#8226 Dr Ravindra Jayaratne works with disaster-vulnerable communities around the world to build stronger, more sustainable coastal defences against tsunamis and extreme waves.<br>&#8226 His new breakwater design formula for tsunami has been incorporated into the Structural Design Standards of the American Society of Civil Engineers. ",
      Plname: "Dr Ravindra Jayaratne",
      image: Ravindra_p1,
    },

    //Project Starts here
    {
      location: "United Kingdom",
      title: " The Relational States of Dalston ",
      description: "",
      Plname: "Carsten Jungfer, Fernanda Palmieri ",
    },
    {
      location: "United Kingdom",
      title: " Growing up Bilingual Project  ",
      description: "",
      Plname: "Layal Husain, Virginia Lam ",
    },

    //

    {
      location: "United Kingdom",
      title: "Concrete Clarity ",
      description:
        "&#8226 A free site-specific live art project that explores the themes of Order, Chaos, and Human Connections within the city.   ",
      Plname: "UEL 2nd year drama students ",
    },
    {
      location: "United Kingdom",
      title: "Paws and  Pause ",
      description:
        "&#8226 Paws & Pause is a socially conscious doggy day care centre. That means we combine expert-levels of dog care with a social mission, providing training opportunities to people in long-term unemployment.<br>&#8226 We provide animal-based employment opportunities for people recovering from mental health issues and addiction. This means you can feel good about your choice of day care, knowing we’re looking after your pup and your community.  ",
      Plname: "Jodie Larsen",
    },
    //
    {
      location: "United Kingdom",
      title:
        "City Life : Invisible London: Place and Identiy in Non-Fiction by Londoners ",
      description:
        "<br>&#8226 CityLife crafted new stories about place through four series of workshops with writers and storytellers in community organizations. Analysing the pieces through the lens of cultural studies offers a way to look at the cultural scripts produced by the interactions of writers and storyteller, of memory and literature, as framed by discourse<br>&#8226 It also allows to investigate belonging through cultural geography and how people’s relation to the space they inhabit or traverse can be mapped out. The elders’ stories, plus the autobiographical companion pieces by their writers, can be found here.<br>&#8226 PhD in Creative Writing and Cultural Studies funded by the Stuart Hall Foundation.Partners: Ageing Well Barking and Dagenham, AgeUK Stones End Day Centre, Cody Dock, The Pepper Pot Centre, and University of East London.",
      Plname: "Erica Masserano, Tessa McWatt , Stephen Maddison , Sam Dodd",
    },
    //
    {
      location: "United Kingdom",
      title: "City Life: Stories Against Loneliness ",
      description:
        "<br>&#8226 In 2016 we partnered with Richard House, a hospice for children with life-limiting conditions, facilitating five writer/storyteller pairings with the parents and carers of children who the hospice cared for. <br>&#8226 The parents and carers’ stories, plus the autobiographical companion pieces by their writers, can be found here.<br>&#8226 Partners: Richard House Children’s Hospice, University of East London",
      Plname: "Tessa McWatt ,Stephen Maddison ,Sam Dodd ",
    },
    //
    {
      location: "United Kingdom",
      title: "City Life: East Life: An Anthology of Life Writing ",
      description:
        " <br>&#8226 Culture is memory; memory is collective; and elders are a creative resource for cultural history. These concepts were at the centre of EastLife – the pilot phase of our project, unearthing the cultural richness of East London that is embedded in personal experience.<br>&#8226 Community elders are not only key sources of memories and the cultural histories that enrich the local community, but, unfortunately, they are often isolated (in terms of access, mobility, and technology) from participation in cultural exchange.<br>&#8226 This first project allowed UEL creative writing students and community elders to learn a bit more about one another, with a printed anthology of life writing as the fruits of their exchanges. The elders’ stories, plus the autobiographical companion pieces by their writers, can be found here.<br>&#8226 Partners: Canning Town Library, LinkUp/Great British Community, Stroke Association Tower Hamlets, and University of East London.",
      Plname: "Tessa McWatt , Stephen Maddison ,Sam Dodd",
    },
    //Psyc Category
    {
      location: "United Kingdom",
      title: "Outdoor Learning Project ",
      description:
        "&#8226 Understanding the impact of classroom learning environments on the wellbeing and attainment of primary school children in Newham. <br>&#8226 Working jointly with Newham Learning to develop training tools and resources based on the project’s findings. <br>&#8226 Addressing educational inequality in Newham and creating links with educational research at UEL and local teachers in the community. ",
      Plname: "Sam Wass ",
    },
    {
      location: "United Kingdom",
      title: "Wellbeing Support for Humanitarian Aid Workers",
      description:
        "&#8226 The DL MSc Humanitarian Intervention created a wellbeing portal to offer mental health and psychosocial support (MHPSS) to international health care practitioners and humanitarian aid workers. <br>&#8226 The portal also offers regular online ‘Reflective Practice Groups’ for humanitarian staff currently working in Ukraine and Afghanistan as a space to foster peer support among colleagues. <br>&#8226 In collaboration with the Humanitarian Leadership Academy and Save The Children we are creating DL delivery of training and training for trainers on Counselling Skills for staff of international humanitarian organizations operating in volatile areas of conflicts and disasters. ",
      Plname: "Lucia Berdondini",
    },
    {
      location: "United Kingdom",
      title:
        "Establishing Objective Measures for Identifying Children with Autism Spectrum Disorders Using Eye-Tracking Technology in the UK and India ",
      description:
        "&#8226 Developing novel ways, using technology to assess child development in children in low resource regions, e.g. New Delhi, India. <br>&#8226 Establishing the feasibility and acceptability of conducting neurophysiological assessments with children in diverse low-resource, under-researched areas. <br>&#8226 Establishing markers of attention control using eye-tracking technology that are associated with autism traits during early childhood  Identifying barriers to healthcare and autism diagnosis for children in New Delhi. ",
      Plname: "Georgia Lockwood Estrin",
    },
    {
      location: "United Kingdom",
      title: "The CHATA Project ",
      description:
        "&#8226 To co-produce, evaluate and validate novel diagnostic tools for the assessment of suspected Autism Spectrum Disorders that are cost-effective and have the potential to be delivered online.  <br>&#8226 To be developed and delivered specifically for ethnically diverse populations. <br>&#8226 To reduce current NHS waiting lists for autism diagnosis in East London. ",
      Plname:
        "Prods David Skuse, Dr Michelle Heys. Georgia Lockwood Estrin: Senior Researcher team member ",
    },
    {
      location: "United Kingdom",
      title:
        "Community-Based Transcranial Direct Current Stimulation (TDCS) Treatment for Bipolar Depression: Efficacy, Acceptability and AI-Prediction of Treatment Response based on Neurophysiological Correlates",
      description:
        "&#8226  Detecting Deception and Tackling Insurance Fraud Julie Wall 4.jpg ACE Community-Based Transcranial Direct Current Stimulation (tDCS) Treatment for Bipolar Depression: Efficacy, Acceptability and AI-Prediction of Treatment Response based on Neurophysiological Correlates Dr Saeed Sharif, Prof Cynthia Fu .<br>&#8226 The primary aim of the study is to assess the efficacy of a course of tDCS treatment as a home-based intervention, as measured by clinical response.<br>&#8226 The proposed study will be the first to examine the efficacy of home-based tDCS therapy to treat bipolar disorder.<br>&#8226 Providing neural correlates of clinical response for tDCS treatment is a novel scientific measure of clinical outcomes. By applying computational modelling and machine learning to the analysis of resting state EEG coherence, there is potential to predict clinical response to tDCS treatment for bipolar disorder.  ",
      Plname: "Dr Saeed Sharif, Professor Cynthia Fu",
      image: Shareef_p1,
    },
    {
      location: "United Kingdom",
      title: "Sustainability Decathlon  ",
      description:
        "&#8226 The project aims to design and build an Affordable Prefabricated Carbon Neutral House in California, Orange County as a collaboration between University of East London and Tongji University at Sustainability Decathlon.<br>&#8226 “OCSD23 is a new competition that challenges teams to design, build, and market innovative model homes that demonstrate a range of solutions to some of California’s most urgent problems.” <br>&#8226 Eighteen teams have been selected and each will receive $100,000 to help fund the project. <br>&#8226 The project brings bold and inventive ideas to be designed, built and marketed that are carbon neutral, resilient, water- and energy efficient and affordable. The homes will be displayed in October 2023 in a Solar Village which will be open to the public.  ",
      Plname: "Dr Arman Hashemi  ",
      image: Arman_p1,
    },
    {
      location: "United Kingdom",
      title:
        "A Machine-Learning-Based Approach to Predict the Health Impacts of Dr Saeed Sharif 1-The purpose of this research is to investigate and predict the neurophysiological and psychological effects of commuting in Greater London on the human body based on machine-learning approaches. UK ",
      description:
        "&#8226  The purpose of this research is to investigate and predict the neurophysiological and psychological effects of commuting in Greater London on the human body based on machine-learning approaches. UK<br>&#8226 Commuting on Productivity at work in Large Cities<br>&#8226 Multimodal data sets and quantitative data, will be acquired in his research using non-invasive and safe-measure wearable technology. Data will be collected from participants who are employed and commute regularly to work in Greater London for five continuous working days.<br>&#8226 This research aims to materialize a living lab for multimodal research to experiment in areas such as body sensors, ubiquitous computing, wireless telehealth and neurophysiology.",
      Plname: "Dr Saeed Sharif ",
    },
    {
      location: "United Kingdom",
      title:
        "Innovative Machine Learning Based Model to Determine the Significance of Risk Factors in Diagnosing Keratoconus",
      description:
        "&#8226 This research investigate the significance of keratoconus risk factors in the predictive modelling process. <br>&#8226 This research will impact significantly the ophthalmologists work, as the developed machine learning based model will be able to provide better performance in diagnosis and underpin their work towards better medical care for the patients. <br>&#8226 The achieved model may significantly improve the diagnosis process in the clinical settings as well as provide insight into importance of data collection for specific risk factors.",
      Plname: "Dr Saeed Sharif ",
      image: Shareef_p2,
    },
    {
      location: "United Kingdom",
      title:
        "Ensemble Machine Learning Approaches for the Reliable Diagnosis of Sepsis.",
      description:
        "&#8226 This research provides strong insight into the significance of dataset bias in the predictive modelling process and its effects. · This research develop innovative machine learning based model for robust performance in diagnosis compared to other models. · This research may significantly improve the diagnosis process in the clinical settings, underpin the clinician in the early predication of the disease. It will provide insight into the value of ensemble machine learning techniques in real world diagnosis.",
      Plname: "Dr Saeed Sharif ",
      image: Shareef_p3,
    },
    {
      location: "United Kingdom",
      title:
        "A Comprehensive Model Of Machine Learning Algorithms On Diagnosing COPD Through Telehealth Adoption.",
      description:
        "&#8226 This research innovate the acceptance of new technology by the decision maker which is covered on the theoretical model. <br>&#8226 It predicts the COPD status of patients using generalized linear models (GLMs). <br>&#8226 It predicts the severity (mild or severe) of COPD for patients who are likely to have COPD. ",
      Plname: "Dr Saeed Sharif ",
    },

    {
      location: "United Kingdom",
      title:
        "A Secure Data Compression Technique in IoT for Minimizing Data Generation.",
      description:
        "&#8226 This research focuses on minimizing data generation by using event based methodology.<br>&#8226 This research addresses the key issues related to IoT devices; including the security issues, unreliable, accessibility, UK, Bahrain Minimizing Data Generation. unauthorized access, encryption failure, etc. <br>&#8226 This research will have a great impact on the security level of IoT devices and the efficiency of processing the generated data.",
      Plname: "Dr Saeed Sharif ",
    },
    {
      location: "United Kingdom",
      title: "Eastern New Energy",
      description:
        "&#8226 Understanding and helping to remove the barriers that prevent us rapidly decarbonising our communities, buildings, transport and lives.<br>&#8226 Working with business, councils, communities, organisations, households and individuals towards delivering these aims.<br>&#8226 Project being delivered across the East of England area including: Cambridgeshire, Peterborough, Lincolnshire and Rutland, Hertfordshire, Norfolk, Suffolk and the Uttlesford region of Essex.<br>&#8226 Funded by EU ERDF funding",
      Plname: "Aurore Julien, Sue Keeping, Darryl Newport",
    },
    {
      location: "United Kingdom",
      title: "Southeast New Energy",
      description:
        "&#8226 Understanding and helping to remove the barriers that prevent us rapidly decarbonising our communities, buildings, transport and lives, accelerating the transition to a low carbon economy and developing the local energy economy.<br>&#8226 Working with business, councils, communities, organisations, and households towards delivering these aims.<br>&#8226 Project being delivered across the Southeast of England area including: East Sussex, Essex, Kent, Medway, Southend and Thurrock.",
      Plname: "Mike Medas, Aurore Julien, Sue Keeping, Darryl Newport",
    },
    {
      location: "United Kingdom",
      title: "ARENA",
      description:
        "&#8226 Business support project supporting start-ups, SMEs, and larger organisations with a London address<br>&#8226 Support is being provided to help businesses involved in resource efficiency, green infrastructure, and nature-based solutions.<br>&#8226 Support consists of a variety of: Market knowledge and networks; <br>&#8226 Research and development support. Demonstration trials and assessment.Publicity and promotion; market rollout and procurement.<br>&#8226 Funded by EU ERDF funding",
      Plname: "Mike Medas",
    },
    {
      location: "United Kingdom",
      title: "COP26 Peatland Pavilion",
      description:
        "&#8226 Working with the United Nations Environment Programme ‘Global Peatlands Initiative’ we produced both a physical and virtual Peatland Pavilion for COP26 – the first ever Peatland Pavilion for an inter-governmental COP. <br>&#8226 The physical Pavilion was the venue for government commitments from Chile, Indonesia, Ireland, Democratic Republic of Congo, Scotland, Iceland, Canada and the Philippines. <br>&#8226 Funded by the IUCN UK Peatland Programme and the COP26 Peatland Pavilion Partnership (UNEP GPI, Wetlands International, IUCN UK Peatland Programme, Michael Succow Foundation).",
      Plname: "Richard Lindsay and Jack Clough",
    },
  ],

  Türkiye: [
    {
      location: "Türkiye",
      title:
        "Strengthening housing resilience in Turkey: sustainable strategies for seismic retrofitting decisions ",
      description:
        "&#8226 The overall aim is to assess and support seismic mitigation strategies in an innovative and sustainable manner.                   In particular, the project aims to devise a conceptual framework including appropriate retrofitting-related interventions for substandard housing which are cost-effective and environmentally sound. <br>&#8226 This decision-support system for households is aimed to impact the resilience, sustainability and safety of housing infrastructure and community in Turkey and possibly in other countries with similar challenges.<br>&#8226 The project adopts a transdisciplinary approach, bringing together relevant stakeholders and beneficiaries, key contributors to the long-term plan to support the seismic resilience and sustainability of the housing infrastructure and communities in Turkey and in seismic prone countries in general.  ",
      Plname: "Dr Anca Ciupala   ",
    },
  ],
  "Sri Lanka": [
    {
      location: "Sri Lanka",
      title: "Mental Health and Wellbeing Support ",
      description:
        "&#8226 Professor Tribe has worked in partnership with universities, non-governmental organisations and professional organisations in Sri Lanka for 30 years. <br>&#8226 She helped set a mental health resource centre in the community and a wellbeing centre for staff and students at one university and is assisting with setting one up at another university. She has offered training on numerous occasions there. <br>&#8226  She has also run training for the Sri Lankan Office for National Unity and Reconciliation psychosocial team ",
      Plname: "Rachel Tribe  ",
    },
    {
      location: "Sri Lanka",
      title: "Pioneering Sustainable Coastal Defences",
      description:
        "&#8226 Dr Ravindra Jayaratne works with disaster-vulnerable communities around the world to build stronger, more sustainable coastal defences against tsunamis and extreme waves.<br>&#8226 His new breakwater design formula for tsunami has been incorporated into the Structural Design Standards of the American Society of Civil Engineers. ",
      Plname: "Dr Ravindra Jayaratne",
      image: Ravindra_p1,
    },
  ],
  Chile: [
    {
      location: "Chile",
      title: "Reframing Conservation in Chile",
      description:
        "&#8226 Alan Chandler helped transform the derelict Palacio Pereira into the Chilean Heritage Department’s new headquarters. The project led to a reframing of conservation philosophy in Chile, policy changes and the adoption of new processes.  ",
      Plname: "Alan Chandler  ",
      image: Alan_p1,
    },
    {
      location: "United Kingdom",
      title: "COP26 Peatland Pavilion",
      description:
        "&#8226 Working with the United Nations Environment Programme ‘Global Peatlands Initiative’ we produced both a physical and virtual Peatland Pavilion for COP26 – the first ever Peatland Pavilion for an inter-governmental COP. <br>&#8226 The physical Pavilion was the venue for government commitments from Chile, Indonesia, Ireland, Democratic Republic of Congo, Scotland, Iceland, Canada and the Philippines. <br>&#8226 Funded by the IUCN UK Peatland Programme and the COP26 Peatland Pavilion Partnership (UNEP GPI, Wetlands International, IUCN UK Peatland Programme, Michael Succow Foundation).",
      Plname: "Richard Lindsay and Jack Clough",
    },
    {
      location: "Chile",
      title:
        "Virtual Peatland Pavilion featuring Chilean Peatlands, for the Venice Biennale",
      description:
        "&#8226 1. Creating a Virtual Peatland Pavilion featuring Chilean peatlands for the Venice Biennale.  <br>&#8226 This work was used by the UN Global Peatland Initiative to promote peatland conservation in Chile, plus emphasise the wider story of global peatland conservation. <br>&#8226 Funded by IUCN UK Peatland Programme and UNEP GPI.",
      Plname: "Richard Lindsay",
    },
  ],
  India: [
    {
      location: "India",
      title: "STREAM ",
      description:
        "Funder: Medical Research Council <br>&#8226 To develop a scalable mobile platform to map the population distribution of scores in key neurodevelopmental domains relevant to mental health in 0-6year old children in two diverse low-resource settings (India and Malawi). <br>&#8226 To test the utility of this transdiagnostic platform in identifying the presence of any neurodevelopmental disorder as well as clinical needs of these children through an assessment of their level of functioning based on the WHO International Classification of Functioning (ICF) framework. <br>&#8226 To establish the sensitivity of the platform to fingerprint the impact of known risk factors on individual cognitive, behavioural, and brain function. ",
      Plname:
        "PI: Professor Bhismadev Chakrabarti (University of Reading) Georgia Lockwood Estrin (UEL): Research Team ",
    },
    {
      location: "India",
      title:
        "Establishing objective measures for identifying children with Autism Spectrum Disorders using eye-tracking technology in the UK and India ",
      description:
        "&#8226 Developing novel ways, using technology to assess child development in children in low resource regions, e.g. New Delhi, India <br>&#8226 Establishing the feasibility and acceptability of conducting neurophysiological assessments with children in diverse low-resource, under-researched areas <br>&#8226 Establishing markers of attention control using eye-tracking technology that are associated with autism traits during early childhood  Identifying barriers to healthcare and autism diagnosis for children in New Delhi ",
      Plname: "PI: Georgia Lockwood Estrin (UEL)",
    },
    {
      location: "India",
      title: "Addressing Diabetes Induced Blindness in India",
      description:
        "&#8226 India has  77 million diabetics potentially increasing to 100 million in the next decade, 5% can develop severe vision loss. <br>&#8226   This project promotes early detection of retinopathy which can prevent its progress. funded by UKRI ",
      Plname: "Prof Gopal Netuveli (g.netuveli@uel.ac.uk) ",
    },
    {
      location: "India",
      title: "Solutions to Antimicrobial Resistance",
      description:
        "&#8226   Antimicrobial resistance is a major issue of today’s healthcare system. It has been estimated that there will be over 10M deaths per year due to AMR if no action is taken.  <br>&#8226 Natural products have been used globally for the treatment of various diseases including infections caused by multi-drug resistant bacteria  <br>&#8226 This project focuses on natural resources including medicinal plants and microbes to explore metabolites with potential activities against multi- drug resistant.",
      Plname: "Mukhles ur Rahmen",
    },
    {
      location: "India",
      title:
        "Dignity, Gender and Period Poverty; Approaches to Improving Menstrual Health Outcome",
      description:
        "&#8226 This project challenged stigmatised views of menstrual health and empowers women to seek appropriate medical treatment <br>&#8226 An exploration of different approaches to tackling period poverty and menstrual health compared to the UK <br>&#8226 The research is uncovering the relationship between global cultures, dignity, and menstrual health",
      Plname: "Abigail Lennox",
    },

    {
      location: "India",
      title: "Breaking the Taboos of Menstruation in Rural India",
      image: Meera_p2,
      description:
        "&#8226 Dr Meera Tiwari and her team used street theatre to engage men and women in rural India to challenge misinformation and stigmatised views of menstrual health and embrace it a a dignified bodily function essential for the wellbeing of women, family and society. ",
      Plname: "Dr Meera Tiwari",
    },
  ],
  rwanda: [
    {
      location: "Rwanda",
      title: "Protecting children in Rwanda from Online Harm",
      description:
        "&#8226   Professor Julia Davidson developed a child online protection policy and implementation plan which was adopted by the Rwanda government in 2019. <br>",
      Plname: "Prof Julia Davidson",
    },
    {
      location: "Rwanda",
      title:
        "Helping young people in Africa recover from the impact of Covid-19 ",
      //image: HelpingYoungPeople,
      //description:"&#8226   The Insitute for Connected Communities built an alliance to improve the online and offline health and welfare of vulnerable young people during and after the pandemic in South Africa, Rwanda, Zambia and Sierra Leone. ",
      Plname: "Professor Julia Davidson and Dr Darren Sharpe",
      video: julie_video,
    },
  ],
  Austria: [
    {
      location: "Austria",
      title: "Me and Your Story",
      description:
        "&#8226  The project helped to capture stories of people with learning disabilities during Covid-19 pandemic.<br>&#8226   The project used story telling to bridge gaps and resolve misunderstandings, fostering social inclusion.<br>&#8226  Resource for teachers to use during distance learning were produced",
      Plname: "Gosia Kwiatkowska",
    },
  ],
  Germany: [
    {
      location: "Germany",
      title: "Me and Your Story",
      description:
        "&#8226  The project helped to capture stories of people with learning disabilities during Covid-19 pandemic.<br>&#8226   The project used story telling to bridge gaps and resolve misunderstandings, fostering social inclusion.<br>&#8226  Resource for teachers to use during distance learning were produced.",
      Plname: "Gosia Kwiatkowska",
    },
    {
      location: "Germany",
      title: "Place and Memory Making in Artistic Practice",
      description:
        "&#8226   Films and photographs document both contemporary existence and examine monuments to the past.",
      Plname: "Sharone Lifshitz",
    },
    {
      location: "Germany",
      title: "Advocating for Better Childcare for Low-Income Families",
      description:
        "&#8226  Professor Eva Lloyd’s work has promoted access to affordable, quality childcare, which improves the health and economic wellbeing of families. Her research has influenced UK and international policy, law and services.",
      Plname: "Eva Lloyd",
      image: Eva_p1,
    },
    {
      location: "Germany",
      title:
        "Community-Based Transcranial Direct Current Stimulation (TDCS) Treatment for Bipolar Depression: Efficacy, Acceptability and AI-Prediction of Treatment Response based on Neurophysiological Correlates",
      description:
        "&#8226  Detecting Deception and Tackling Insurance Fraud Julie Wall 4.jpg ACE Community-Based Transcranial Direct Current Stimulation (tDCS) Treatment for Bipolar Depression: Efficacy, Acceptability and AI-Prediction of Treatment Response based on Neurophysiological Correlates Dr Saeed Sharif, Prof Cynthia Fu .<br>&#8226 The primary aim of the study is to assess the efficacy of a course of tDCS treatment as a home-based intervention, as measured by clinical response.<br>&#8226 The proposed study will be the first to examine the efficacy of home-based tDCS therapy to treat bipolar disorder.<br>&#8226 Providing neural correlates of clinical response for tDCS treatment is a novel scientific measure of clinical outcomes. By applying computational modelling and machine learning to the analysis of resting state EEG coherence, there is potential to predict clinical response to tDCS treatment for bipolar disorder.  ",
      Plname: "Dr Saeed Sharif, Professor Cynthia Fu",
    },
  ],
  slovakia: [
    {
      location: "Slovakia",
      title: "Me and Your Story",
      description:
        "&#8226  The project helped to capture stories of people with learning disabilities during Covid-19 pandemic.<br>&#8226   The project used story telling to bridge gaps and resolve misunderstandings, fostering social inclusion.<br>&#8226  Resource for teachers to use during distance learning were produced",
      Plname: "Gosia Kwiatkowska",
    },
  ],
  Romania: [
    {
      location: "Romania",
      title: "Me and Your Story",
      description:
        "&#8226  The project helped to capture stories of people with learning disabilities during Covid-19 pandemic.<br>&#8226   The project used story telling to bridge gaps and resolve misunderstandings, fostering social inclusion.<br>&#8226  Resource for teachers to use during distance learning were produced.",
      Plname: "Gosia Kwiatkowska",
    },
  ],
  "Bosnia and Herzegovina": [
    {
      location: "Bosnia and Herzegovina",
      title: "Combating the Brain Drain in the Baltics ",
      description:
        "&#8226  Professor Vassilis Fouskas’ economic advice to the government of Bosnia and Herzegovina and the creation of a multi-ethnic business network has contributed to a reduction in outward youth migration in the country.<br>&#8226 In the city of Banja Luka, the network helped increase the graduate employment rate from 14% in 2012 to nearly 50% in 2019. ",
      Plname: "Vassils Fouskas",
      image: Vassils_p1,
    },
  ],
  Greece: [
    {
      location: "Greece",
      title: "Combatting the Brain Drain in the Baltics",
      description:
        "&#8226 Professor Vassilis Fouskas’ economic advice to the government of Bosnia and Herzegovina and the creation of a multi-ethnic business network has contributed to a reduction in outward youth migration in the country. <br>&#8226  In the city of Banja Luka, the network helped increase the graduate employment rate from 14% in 2012 to nearly 50% in 2019. ",
      Plname: "Vass Fouskas",
    },
    {
      location: "Bosnia and Herzegovina",
      title: "Combating the Brain Drain in the Baltics ",
      description:
        "&#8226  Professor Vassilis Fouskas’ economic advice to the government of Bosnia and Herzegovina and the creation of a multi-ethnic business network has contributed to a reduction in outward youth migration in the country.<br>&#8226 In the city of Banja Luka, the network helped increase the graduate employment rate from 14% in 2012 to nearly 50% in 2019. ",
      Plname: "Vassils Fouskas",
      image: Vassils_p1,
    },
  ],
  macedonia: [
    {
      location: "Northern Macedonia",
      title: "Combatting the brain drain in the Baltics",
      description:
        "&#8226  Professor Vassilis Fouskas’ economic advice to the government of Bosnia and Herzegovina and the creation of a multi-ethnic business network has contributed to a reduction in outward youth migration in the country.<br>&#8226  In the city of Banja Luka, the network helped increase the graduate employment rate from 14% in 2012 to nearly 50% in 2019.",
      Plname: "Vass Fouskas",
    },
  ],
  China: [
    {
      location: "China",
      title: "Stressed management",
      description:
        "&#8226 The project examined business ethics and stress in CEO’s of SME’s in China",
      Plname: "Angus Huang",
      image: Huang_p1,
    },
    {
      location: "China",
      title: "Sustainability Decathlon  ",
      description:
        "&#8226 The project aims to design and build an Affordable Prefabricated Carbon Neutral House in California, Orange County as a collaboration between University of East London and Tongji University at Sustainability Decathlon.<br>&#8226 “OCSD23 is a new competition that challenges teams to design, build, and market innovative model homes that demonstrate a range of solutions to some of California’s most urgent problems.” <br>&#8226 Eighteen teams have been selected and each will receive $100,000 to help fund the project. <br>&#8226 The project brings bold and inventive ideas to be designed, built and marketed that are carbon neutral, resilient, water- and energy efficient and affordable. The homes will be displayed in October 2023 in a Solar Village which will be open to the public.  ",
      Plname: "Dr Arman Hashemi  ",
      image: Arman_p1,
    },

    {
      location: "China",
      title: "Place and memory making in artistic practice",
      description:
        "&#8226   Films and photographs document both contemporary existence and examine monuments to the past.",
      Plname: "Sharone Lifshitz",
    },
    {
      location: "China",
      title:
        "Promoting Ethical Standards and Communication Efficiency in Chinese Business",
      description:
        "&#8226   Dr Qingan Huang’s research into business ethics in China has allowed him to advise civil servants and businesses on creating ethical business practices which promote greater prosperity and workplace wellbeing. ",
      Plname: "Dr Qingan Huang",
    },

    {
      location: "China",
      title: "Advanced practice nurses' perceptions of spirituality ",
      description:
        "&#8226  An online international survey of advanced practice nurses and follow-up interviews was conducted. ",
      Plname: "Gulnar Ali",
    },
  ],
  ENGLAND: [
    {
      location: "England",
      title: "JOMBA! Dance Festival ",
      description:
        "&#8226 JOMBA! is a contemporary dance festival, colloquium and writing residency. <br>&#8226The latest festival focused on the theme of ‘BORDER CROSSINGS’ and looked at dance makers, dance companies and performance-based artists who, in some articulated way resonate with the ideas of “BORDER CROSSINGS”; be these geographical, emotional, physical, spiritual and performative. <br>&#8226The JOMBA! Series explores political ideas such as border crossings or the context of archives– who has access to the artefacts, whose voice is the loudest or strongest, whose histories and memories are chosen to represent or stand as a symbol of a movement or moment in time? <br>&#8226Funder: Centre for Creative Arts (University of KwaZulu-Natal) and the National Institute for Humanities & Social Sciences (South Africa) <br>&#8226Key collaborator: Dr Llaine Loots, Artistic Director of JOMBA! Contemporary Dance Experience and The Centre for Creative Arts (University of KwaZulu-Natal) ",
      Plname: "Sarahleigh Castelyn",
      img: "images/JOMBA.jpg",
    },
  ],
  "South Africa": [
    {
      location: "South Africa",
      title: "JOMBA! Dance Festival ",
      description:
        "&#8226 JOMBA! is a contemporary dance festival, colloquium and writing residency. <br>&#8226The latest festival focused on the theme of ‘BORDER CROSSINGS’ and looked at dance makers, dance companies and performance-based artists who, in some articulated way resonate with the ideas of “BORDER CROSSINGS”; be these geographical, emotional, physical, spiritual and performative. <br>&#8226The JOMBA! Series explores political ideas such as border crossings or the context of archives– who has access to the artefacts, whose voice is the loudest or strongest, whose histories and memories are chosen to represent or stand as a symbol of a movement or moment in time? <br>&#8226Funder: Centre for Creative Arts (University of KwaZulu-Natal) and the National Institute for Humanities & Social Sciences (South Africa) <br>&#8226Key collaborator: Dr Llaine Loots, Artistic Director of JOMBA! Contemporary Dance Experience and The Centre for Creative Arts (University of KwaZulu-Natal) ",
      Plname: "Sarahleigh Castelyn",
      image: JOMBA,
    },
    {
      location: "South Africa",
      title: "Emerging Geohazards ",
      description:
        "&#8226  Examining how mainly man- made factors affect soil fabric.  ",
      Plname: "Arya Assadi- Langroudi",
    },
    {
      location: "South Africa",
      title:
        "Helping young people in Africa recover from the impact of Covid-19 ",
      // image:HelpingYoungPeople,
      //description:"&#8226   The Insitute for Connected Communities built an alliance to improve the online and offline health and welfare of vulnerable young people during and after the pandemic in South Africa, Rwanda, Zambia and Sierra Leone.   ",
      Plname: "Julia Davidson and Darren Sharpe ",
      video: julie_video,
    },
  ],
  UAE: [
    {
      location: "United Arab Emirates",
      title: "JOMBA! Dance Festival ",
      description:
        "JOMBA! is a contemporary dance festival, colloquium and writing residency. <br>&#8226The latest festival focused on the theme of ‘BORDER CROSSINGS’ and looked at dance makers, dance companies and performance-based artists who, in some articulated way resonate with the ideas of “BORDER CROSSINGS”; be these geographical, emotional, physical, spiritual and performative. <br>&#8226The JOMBA! Series explores political ideas such as border crossings or the context of archives– who has access to the artefacts,  <br>&#8226Funder: Centre for Creative Arts (University of KwaZulu-Natal) and the National Institute for Humanities & Social Sciences (South Africa)",
      Plname: "Sarahleigh Castelyn",
      image: JOMBA,
    },
  ],
  "United States": [
    {
      location: "United States",
      title: "Sustainability Decathlon  ",
      description:
        "&#8226 The project aims to design and build an Affordable Prefabricated Carbon Neutral House in California, Orange County as a collaboration between University of East London and Tongji University at Sustainability Decathlon.<br>&#8226 “OCSD23 is a new competition that challenges teams to design, build, and market innovative model homes that demonstrate a range of solutions to some of California’s most urgent problems.” <br>&#8226 Eighteen teams have been selected and each will receive $100,000 to help fund the project. <br>&#8226 The project brings bold and inventive ideas to be designed, built and marketed that are carbon neutral, resilient, water- and energy efficient and affordable. The homes will be displayed in October 2023 in a Solar Village which will be open to the public.  ",
      Plname: "Dr Arman Hashemi ",
      image: Arman_p1,
    },

    {
      location: "United States",
      title: "Advanced practice nurses' perceptions of spirituality ",
      description:
        "&#8226  An online international survey of advanced practice nurses and follow-up interviews was conducted. ",
      Plname: "Gulnar Ali",
    },
    {
      location: "United States",
      title: "Pollution Pods",
      description:
        "&#8226  Pollutions Pods is a radical, sensory art installation.<br>&#8226  Through collaboration with NITU and expert perfumers, Pinsky recreated the air environment from 5 cities across the globe.<br>&#8226 The Pods demonstrate to visitors the effects of different pollutants on local air quality and highlights the danger of air pollution.",
      Plname: "Michael Pinksy",
      image: Pollution_p1,
    },
    {
      location: "United States",
      title: "JOMBA! Dance Festival ",
      description:
        "JOMBA! is a contemporary dance festival, colloquium and writing residency. <br>&#8226The latest festival focused on the theme of ‘BORDER CROSSINGS’ and looked at dance makers, dance companies and performance-based artists who, in some articulated way resonate with the ideas of “BORDER CROSSINGS”; be these geographical, emotional, physical, spiritual and performative. <br>&#8226The JOMBA! Series explores political ideas such as border crossings or the context of archives– who has access to the artefacts, <br>&#8226Funder: Centre for Creative Arts (University of KwaZulu-Natal) and the National Institute for Humanities & Social Sciences (South Africa) ",
      Plname: "Sarahleigh Castelyn",
      image: JOMBA,
    },
    {
      location: "United States",
      title: "Building roads to a sustainable future",
      description:
        "&#8226 1.   The research project developed sustainable construction materials that meet the needs of the communities they serve without causing environmental damage.<br>&#8226 As a result, we improved transport connections between settlements and repair damage to the older roads",
      Plname: "Alex Apeagyei",
      image: Alex_p1,
    },
  ],
  Isreal: [
    {
      location: "Isreal",
      title: "Advanced practice nurses' perceptions of spirituality ",
      description:
        "&#8226  An online international survey of advanced practice nurses and follow-up interviews was conducted. ",
      Plname: "Gulnar Ali",
    },
    {
      location: "Isreal",
      title: "Place and memory making in artistic practice",
      description:
        "&#8226   Films and photographs document both contemporary existence and examine monuments to the past.",
      Plname: "Sharone Lifshitz",
    },
  ],
  Nigeria: [
    {
      location: "Nigeria",
      title: "Solutions to antimicrobial resistance",
      description:
        "&#8226   Antimicrobial resistance is a major issue of today’s healthcare system. It has been estimated that there will be over 10M deaths per year due to AMR if no action is taken.  <br>&#8226 Natural products have been used globally for the treatment of various diseases including infections caused by multi-drug resistant bacteria  <br>&#8226 This project focuses on natural resources including medicinal plants and microbes to explore metabolites with potential activities against multi- drug resistant and methicillin- resistant Staphylococcus aureus Current funding: Indian Council of Agricultural Research (ICAR), TETFund, UEL-Industry joint KE fund, Self-funded PhD ",
      Plname: "Mukhles ur Rahmen ",
    },
  ],
  Indonesia: [
    {
      location: "Indonesia",
      title: "Advocating for the rights of the disadvantaged",
      description:
        "&#8226  Professor Sait advocates for the land ownership rights and independence of women and disadvantaged throughout global south.<br>&#8226   He has spoken about a variety of related issues in front of policy makers such as the UN and was a founding member of the Global Land Tools Network, which has implemented tools for equality in more than 40 countries.",
      Plname: "Siraj Sait",
    },
  ],
  "Saudi Arabia": [
    {
      location: "Saudi Arabia",
      title: "Advocating for the rights of the disadvantaged",
      description:
        "&#8226  Professor Sait advocates for the land ownership rights and independence of women and disadvantaged throughout global south.<br>&#8226   He has spoken about a variety of related issues in front of policy makers such as the UN and was a founding member of the Global Land Tools Network, which has implemented tools for equality in more than 40 countries.",
      Plname: "Siraj Sait",
    },
  ],
  Qatar: [
    {
      location: "Qatar",
      title: "Advocating for the rights of the disadvantaged",
      description:
        "&#8226  Professor Sait advocates for the land ownership rights and independence of women and disadvantaged throughout global south.<br>&#8226   He has spoken about a variety of related issues in front of policy makers such as the UN and was a founding member of the Global Land Tools Network, which has implemented tools for equality in more than 40 countries.",
      Plname: "Siraj Sait",
    },
  ],
  Quito: [
    {
      location: "Quito,Equador",
      title: "Advocating for the rights of the disadvantaged",
      description:
        "&#8226  Professor Sait advocates for the land ownership rights and independence of women and disadvantaged throughout global south.<br>&#8226   He has spoken about a variety of related issues in front of policy makers such as the UN and was a founding member of the Global Land Tools Network, which has implemented tools for equality in more than 40 countries.",
      Plname: "Siraj Sait",
    },
  ],
  Algeria: [
    {
      location: "Algeria",
      title: "Advocating for the rights of the disadvantaged",
      description:
        "&#8226  Professor Sait advocates for the land ownership rights and independence of women and disadvantaged throughout global south.<br>&#8226   He has spoken about a variety of related issues in front of policy makers such as the UN and was a founding member of the Global Land Tools Network, which has implemented tools for equality in more than 40 countries.",
      Plname: "Siraj Sait",
    },
  ],
  Egypt: [
    {
      location: "Egypt",
      title: "Advocating for the rights of the disadvantaged",
      image: image,
      description:
        "&#8226Professor Sait advocates for the land ownership rights and independence of women and disadvantaged throughout global south.<br>&#8226   He has spoken about a variety of related issues in front of policy makers such as the UN and was a founding member of the Global Land Tools Network, which has implemented tools for equality in more than 40 countries.",
      Plname: "Siraj Sait",
    },
  ],
  Ireland: [
    {
      location: "Ireland",
      title: "Derrybrien Windfarm, Co. Galway, Ireland",
      description:
        "&#8226 Following catastrophic peat-slide caused by windfarm construction, assisting villagers in the case against the Irish Government planning system in the European Court of Justice (ECJ). <br>&#8226 The villagers won their case in the ECJ thanks, in part, to the scientific reports produced by the SRI, resulting in an EU-wide ruling. <br>&#8226 Funded by the Derrybrien Villager Cooperative.",
      Plname: "Richard Lindsay",
    },
    {
      location: "Ireland",
      title: "Advocating for Better Childcare for Low-Income Families",
      description:
        "&#8226 Professor Eva Lloyd’s work has promoted access to affordable, quality childcare, which improves the health and economic wellbeing of families. Her research has influenced UK and international policy, law and services.",
      Plname: "Eva Lloyd",
      image: Eva_p1,
    },
    {
      location: "Ireland",
      title: "Advanced Practice Nurses' Perceptions of Spirituality ",
      description:
        "&#8226An online international survey of advanced practice nurses and follow-up interviews was conducted. ",
      Plname: "Gulnar Ali",
    },
  ],
  Netharlands: [
    {
      location: "Netherlands",
      title: "Advocating for better childcare for low-income families",
      description:
        "&#8226 Professor Eva Lloyd’s work has promoted access to affordable, quality childcare, which improves the health and economic wellbeing of families. Her research has influenced UK and international policy, law and services. ",
      Plname: "Eva Lloyd",
      image: Eva_p1,
    },
  ],
  Singapore: [
    {
      location: "Singapore",
      title: "Advocating for better childcare for low-income families",
      description:
        "&#8226  Professor Eva Lloyd’s work has promoted access to affordable, quality childcare, which improves the health and economic wellbeing of families. Her research has influenced UK and international policy, law and services.",
      Plname: "Eva Lloyd",
      image: Eva_p1,
    },
  ],
  Canada: [
    {
      location: "Canada",
      title: "Exploring the role of faith-based groups in humanitarian aid",
      image: Kathryn_p1,
      description:
        "&#8226  Dr Kathryn Kraft worked with religious groups around the world to understand their role in meeting the needs of refugees and vulnerable people, leading to better cooperation between secular and religious aid organisations. ",
      Plname: "Katherine Kraft",
    },
    {
      location: "Canada",
      title: "Advanced practice nurses' perceptions of spirituality ",
      description:
        "&#8226  An online international survey of advanced practice nurses and follow-up interviews was conducted. ",
      Plname: "Gulnar Ali",
    },
    {
      location: "Canada",
      title: "Pollution Pods",
      description:
        "&#8226  Pollutions Pods is a radical, sensory art installation.<br>&#8226  Through collaboration with NITU and expert perfumers, Pinsky recreated the air environment from 5 cities across the globe.<br>&#8226 The Pods demonstrate to visitors the effects of different pollutants on local air quality and highlights the danger of air pollution.",
      Plname: "Michael Pinksy",
      image: Pollution_p1,
    },
    {
      location: "United Kingdom",
      title: "COP26 Peatland Pavilion",
      description:
        "&#8226 Working with the United Nations Environment Programme ‘Global Peatlands Initiative’ we produced both a physical and virtual Peatland Pavilion for COP26 – the first ever Peatland Pavilion for an inter-governmental COP. <br>&#8226 The physical Pavilion was the venue for government commitments from Chile, Indonesia, Ireland, Democratic Republic of Congo, Scotland, Iceland, Canada and the Philippines. <br>&#8226 Funded by the IUCN UK Peatland Programme and the COP26 Peatland Pavilion Partnership (UNEP GPI, Wetlands International, IUCN UK Peatland Programme, Michael Succow Foundation).",
      Plname: "Richard Lindsay and Jack Clough",
    },
  ],
  lebenon: [
    {
      location: "Lebenon",
      title: "Exploring the role of faith-based groups in humanitarian aid",
      image: Kathryn_p1,
      description:
        "&#8226 Dr Kathryn Kraft worked with religious groups around the world to understand their role in meeting the needs of refugees and vulnerable people, leading to better cooperation between secular and religious aid organisations.  ",
      Plname: "Katherine Kraft",
    },
  ],
  Uganda: [
    {
      location: "Uganda",
      title: "Exploring the role of faith-based groups in humanitarian aid",
      image: Kathryn_p1,
      description:
        "&#8226 Dr Kathryn Kraft worked with religious groups around the world to understand their role in meeting the needs of refugees and vulnerable people, leading to better cooperation between secular and religious aid organisations. ",
      Plname: "Katherine Kraft",
    },
  ],
  Iraq: [
    {
      location: "Iraq  ",
      title: "Exploring the role of faith-based groups in humanitarian aid",
      description:
        "&#8226 Dr Kathryn Kraft worked with religious groups around the world to understand their role in meeting the needs of refugees and vulnerable people, leading to better cooperation between secular and religious aid organisations. ",
      Plname: "Katherine Kraft",
      image: Kathryn_p1,
      // img:"images/JOMBA.jpg",
      //    video: "explore.mp4"
    },
  ],
  Norway: [
    {
      location: "Norway",
      title: "Pollution Pods",
      description:
        "&#8226  Pollutions Pods is a radical, sensory art installation.<br>&#8226  Through collaboration with NITU and expert perfumers, Pinsky recreated the air environment from 5 cities across the globe.<br>&#8226 The Pods demonstrate to visitors the effects of different pollutants on local air quality and highlights the danger of air pollution.",
      Plname: "Michael Pinksy",
      image: Pollution_p1,
    },
  ],
  Spain: [
    {
      location: "Spain",
      title: "Identification of EU-significant peatlands in Cantabria, Spain.",
      description:
        "&#8226 Working with Nottingham Trent University and Spanish authorities to identify and map EU-significant areas of peatland in the Cantabrian Mountains.  <br>&#8226 Local authorities are now working to ensure that these sites are protected from development and, where necessary, restored to ecosystem health.<br>&#8226 Funded by LIFE+ Ordunte Sostenible and the Provincial Council of Bizkaia and Gobierno de Cantabria.",
      Plname: "Richard Lindsay and Jack Clough",
    },
    {
      location: "Spain",
      title: "Pollution Pods",
      description:
        "&#8226  Pollutions Pods is a radical, sensory art installation.<br>&#8226  Through collaboration with NITU and expert perfumers, Pinsky recreated the air environment from 5 cities across the globe.<br>&#8226 The Pods demonstrate to visitors the effects of different pollutants on local air quality and highlights the danger of air pollution.",
      Plname: "Michael Pinksy",
      image: Pollution_p1,
    },
  ],
  Australia: [
    {
      location: "Australia",
      title: "Pollution Pods",
      description:
        "&#8226  Pollutions Pods is a radical, sensory art installation.<br>&#8226  Through collaboration with NITU and expert perfumers, Pinsky recreated the air environment from 5 cities across the globe.<br>&#8226 The Pods demonstrate to visitors the effects of different pollutants on local air quality and highlights the danger of air pollution.",
      Plname: "Michael Pinksy",
      image: Pollution_p1,
    },
    {
      location: "Australia",
      title:
        "Identification of World Heritage peatlands, Fraser Island, Australia.",
      description:
        "&#8226 Survey work to identify new types of peatland systems in coastal northern Queensland.<br>&#8226 Following identification of these hitherto-overlooked peatland areas their unique character has led to them being incorporated into the Fraser Island World Heritage Site. <br>&#8226 Funded by the Fraser Island Defenders Organisation (FIDO).",
      Plname: "Richard Lindsay ",
    },
  ],
  Nepal: [
    {
      location: "Nepal",
      title: "Building roads to a sustainable future",
      description:
        "&#8226 The research project developed sustainable construction materials that meet the needs of the communities they serve without causing environmental damage.<br>&#8226 As a result, we improved transport connections between settlements and repair damage to the older roads",
      Plname: "Alex Apeagyei",
      image: Alex_p1,
    },
  ],
  Zambia: [
    {
      location: "Zambia",
      title: "Addressing public involvement in open democracy",
      description:
        "&#8226 Public spending and the commissioning of public services is weakened when it does not involve the public. <br>&#8226 	The Young Commissioner model is a tried and tested model to make open democracy real. <br>&#8226 	A range of public bodies, civil servants, healthcare workers, policy makers and communities have benefited from using the young commissioner’s model.",
      Plname: "Dr Darren Sharpe ",
    },
    {
      location: "Zambia",
      title:
        "Helping young people in Africa recover from the impact of Covid-19",
      // image:HelpingYoungPeople,
      //description:"&#8226  The Institute for Connected Communities built an alliance to improve the online and offline health and welfare of vulnerable young people during and after the pandemic in South Africa, Rwanda, Zambia and Sierra Leone.  ",
      Plname: "Prof Julia Davidson and Dr Darren Sharpe",
      video: julie_video,
    },
  ],
  Rome: [],
  Italy: [
    {
      location: "Italy",
      title: "Mineral Language",
      description:
        "&#8226  A co-produced dance piece which was both scored and choreographed by Harries.<br>&#8226  The piece embodies language as a mineral and as a movement.",
      Plname: "Guy Harries",
    },
  ],
  Sieraleone: [
    {
      location: "Sierra Leone",
      title:
        "Helping young people in Africa recover from the impact of Covid-19",
      //image:HelpingYoungPeople,
      //description:"&#8226  The Institute for Connected Communities built an alliance to improve the online and offline health and welfare of vulnerable young people during and after the pandemic in South Africa, Rwanda, Zambia and Sierra Leone.  ",
      Plname: "Prof Julia Davidson and Dr Darren Sharpe",
      video: julie_video,
    },
  ],
  Jordan: [
    {
      location: "Jordan",
      title:
        "Dignity, gender and period poverty; Approaches to improving menstrual health outcome",
      description:
        "&#8226 This project challenged stigmatised views of menstrual health and empowers women to seek appropriate medical treatment <br>&#8226 An exploration of different approaches to tackling period poverty and menstrual health compared to the UK <br>&#8226 The research is uncovering the relationship between global cultures, dignity, and menstrual health",
      Plname: "Abigail Lennox (PhD student)",
    },
  ],

  Kenya: [
    {
      location: "Kenya",
      title:
        "Dignity, gender and period poverty; Approaches to improving menstrual health outcome",
      description:
        "&#8226 This project challenged stigmatised views of menstrual health and empowers women to seek appropriate medical treatment <br>&#8226 An exploration of different approaches to tackling period poverty and menstrual health compared to the UK <br>&#8226 The research is uncovering the relationship between global cultures, dignity, and menstrual health",
      Plname: "Abigail Lennox (PhD student)",
    },
  ],

  Malaysia: [
    {
      location: "Malaysia",
      title: "Pioneering Sustainable Coastal Defences",
      description:
        "&#8226 Dr Ravindra Jayaratne works with disaster-vulnerable communities around the world to build stronger, more sustainable coastal defences against tsunamis and extreme waves.<br>&#8226 His new breakwater design formula for tsunami has been incorporated into the Structural Design Standards of the American Society of Civil Engineers. ",
      Plname: "Dr Ravindra Jayaratne",
      image: Ravindra_p1,
    },
  ],
};

export default country;

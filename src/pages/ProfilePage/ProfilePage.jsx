import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
// React icons
// import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// import profile from "assets/img/faces/rhiannon.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import studio6 from "assets/img/examples/rhiannon.jpg";

import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const STYLE = {
      arial: {
        fontFamily: 'Arial'
      }
  };
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Seattle Acupuncture Hub"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small image={require("assets/img/bg7.jpg")} />
        <div style={STYLE.arial} className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={studio6} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h1 style={{fontFamily: 'Arial', color: '#666666'}}>Rhiannon Stanford</h1>
                      <h3 style={{fontFamily: 'Arial', color: '#666666'}}>Licensed Acupuncturist<br/> & <br/>Traditional Chinese Medicine Herbalist 🌿</h3>

                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p style={STYLE.arial}>
                  Rhiannon Stanford is a Licensed Acupuncturist and Herbalist specializing in women’s health issues, pain management, and internal medicine.  She enjoys working with all patients to empower and support them to achieve health, wellness, and balance.  She has board certification in both acupuncture and Chinese herbal medicine through the National Certification Commission for Acupuncture and Oriental Medicine (NCCAOM).  She is a Diplomate in Oriental Medicine (Dipl. OM), a NCCAOM board certification ensuring the highest quality of training in acupuncture and oriental medicine.
                </p><br/>
                <p>
                  Rhiannon holds a Masters in Acupuncture and Oriental Medicine (M.Ac.O.M.) from the <a href="https://sieam.edu/">Seattle Institute of East Asian Medicine</a>, where she received rigorous apprentice style training from masters of diverse specialties.  She is adept at a broad range of skills in East Asian Medicine including Chinese Acupuncture, Japanese Acupuncture, Scalp Acupuncture, Auriculotherapy, Tuina (Chinese Medical Massage), and both Traditional (傷寒論 Shang Han Lun and 温病 Wen Bing) and Modern Chinese Herbalism.{" "}
                </p>
                <br/>
                <p>
                  Licensed Acupuncturist, L.Ac.
                  <br/>
                  East Asian Medicine Practitioner, E.A.M.P.
                  <br/>
                  Masters of Acupuncture & Oriental Medicine, M.Ac.O.M.
                  <br/>
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  {/* <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  /> */}
                </GridItem>
              </GridContainer>
              <h2 style={{fontFamily: 'Arial', color: '#666666'}}>Patient Stories</h2>
              <Card>
                <CardBody>
                  Rhiannon is amazing! Her acupuncture treatments have made such a difference in how I feel.  I started seeing Rhiannon when she was a clinician at the Seattle Institute of Oriental Medicine. I was immediately impressed by her knowledge and quality of care. Rhiannon made me feel at ease. Her treatments were very effective in dealing with a knee problem and other issues. I always left the treatment feeling better than when I went in.<br/>
                  <br/>
                  Rhiannon’s care does does not stop at the treatment room. She was sincerely concerned with my health and was great with answering any questions I had about my progress. Rhiannon is very accessible and treats every patient with equal caring and concern. I highly recommend Rhiannon as an acupuncturist, herbalist, and wonderful caregiver. Five stars!!!
                </CardBody>
                <CardFooter>- Grace M.</CardFooter>
              </Card>
             
              <Card>
                <CardBody>
                  I have been a patient of Rhiannon Stanford for several years now. When I started, I had several health issues, both chronic and acute. Since being a patient of Rhiannon’s, they have been resolved, and I am enjoying excellent and robust health, feeling as good as I felt 10 years ago!<br/>
                  <br/>
                  I have seen many acupuncturists over the years, and Rhiannon is absolutely one of the best practitioners I have had the pleasure of seeing. She is thorough, kind, gentle, extremely knowledgeable in needling and herbs. She has the perfect combination of bedside manner and science. I feel complete confidence in her abilities and in her care. Whether you have never had acupuncture or have had it many times before, Rhiannon is the practitioner to see!
                </CardBody>
                <CardFooter>- Lizzy K.</CardFooter>
              </Card>
              
              <Card>
                <CardBody>
                  I’ve been receiving consistent treatments from Rhiannon and she has made a significant difference in my health. I struggle with fatigue, anxiety, and irregular menstruation. She has been able to guide me to a place of stability with the use of acupuncture and herbs. I value her knowledge and also her ability to counsel me through these issues. She is very friendly and genuine! I know she truly cares about my well-being and health, which is extremely comforting. I have recommended her to my family and friends because I trust her skills completely. I’ve always had good experiences with her.
                </CardBody>
                <CardFooter>- Kristy O.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  I see Rhiannon regularly for acupuncture treatments and I look forward to each time I see her. Her needling is gentle and skillful, and I always feel safe in her care. She is also a wonderful herbalist and I have faith in her to help me with whatever it is that I need each time I see her. She has helped me with acute issues such as getting rid of colds or flus and also with more chronic health issues such as digestive problems and menstrual pain. She is full of wisdom and knowledge, and has a warm, peaceful and humble way about her that immediately puts you at ease. I highly recommend her as a healthcare practitioner!
                </CardBody>
                <CardFooter>- Samara G.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  I’ve had many treatments from Rhiannon, mostly for a variety of musculo-skeletal issues, and I highly recommend her care. Her acupuncture skill is exceptional and she is such a nice person!  She's helped me with chronic back pain.
                </CardBody>
                <CardFooter>- Phil M.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  I first met Rhiannon several years ago when she was an intern at the Seattle Institute of Oriental Medicine (SIOM). I soon scheduled all my acupuncture appointments with her and have continued to go to her after her graduation and opening of her own practice.<br/>
                  <br/>
                  Rhiannon has an extensive education in acupuncture, Chinese herbal medicine, and Tui-Na ( a massage technique). She has been able to achieve immediate and verifiable results in her work with me. Through acupuncture and herbal medicine, she was able to increase my blood circulation to decrease edema that had caused swelling in my legs. She also helped me move away from various blood pressure prescriptions that were causing side effects including leg cramps, itching, loss of wind, and other issues. I am now completely off prescription medicine, after review by my physician, due to lowered blood pressure, cholesterol levels, and other healthy physical changes.<br/>
                  <br/>
                  My experience has been that Rhiannon is attentive, caring, gracious, giving of her time, precise in her thinking, intensely serious, and professional in her work. I, therefore, highly recommend her. This is especially true if you are seeking solutions that will compliment and possibly replace your need for western medical procedures.
                </CardBody>
                <CardFooter>- John J.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  Consider this a rating of 5+++ stars! Rhiannon Stanford is the most effective and helpful healer I have met – I refer her to anyone and everyone who has a need (most people do). She is incredibly helpful and does a wonderful job of working together with her clients to meet their goals. Rhiannon is also one of the kindest, gentlest and most nurturing people I know, which is a fantastic quality for a healer.<br/>
                  <br/>
                  I came in with over a decade of visiting numerous professionals in an attempt to cure my chronic back and neck pain, low levels of energy, and abnormally warm body temperature (and considerable sweating). After several months of seeing her every other week or so, my energy levels have greatly increased, my back pains have mostly subsided, and my body temperature is normal. I have also reaped other wonderfully unexpected benefits. In a nutshell, my health goals that I have been working toward for the past 14 years but unable to achieve have been resolved thanks to Rhiannon.<br/>
                  <br/>
                  Not only is she an incredibly skilled acupuncturist, she has a solid network of other professionals that she is not afraid to refer her clients to. Whereas some professionals hoard their clients and keep them beyond the point where treatment is necessary, Rhiannon is quick to make referrals to other professionals to help resolve issues as quickly as possible. Rhiannon is also skilled in various forms of Chinese massage as well as herbal treatments. While herbs are not the most delicious thing in the world, they have impacted my well being considerably and are well worth the slight distaste.<br/>
                  <br/>
                  Also, Rhiannon is concerned first and foremost with the health of her clients and was very flexible with fee payment arrangements.
                </CardBody>
                <CardFooter>- Kris D.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  My first experience with Acupuncture was with Ms Stanford. She made me feel relaxed, explained everything she was doing before, during, and after so I never felt anxious. She really knows so much about how to keep your body and mind healthy! Also, she’s so giving with her time and truly cares about your well being.
                </CardBody>
                <CardFooter>- Cheryl G.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  Rhiannon has great acupuncture technique and her needling always feels comfortable and gentle. When I receive her treatments, I feel so relaxed and I feel as if I am truly recovering from unbalance in my body. Rhiannon is also very skilled at choosing effective herbs. I have been working on a severe and chronic condition with Rhiannon, and I soon feel better after taking her herbs. I choose her as my acupuncturist because of her great skill and knowledge as well as her caring and healing intention. She always does her best for her patients for their health and wellness and has rich knowledge of Traditional Chinese Medicine.
                </CardBody>
                <CardFooter>- Mayumi H.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  I was treated by Ms. Stanford for a very bad episode of the flu. She created a special (not off the shelf) concoction for me made from various dried herbs that was very effective in aiding my return to health. She is a traditionally trained Chinese medicine practitioner which I appreciate. I can whole heartedly recommend Rhiannon.
                </CardBody>
                <CardFooter>- Stephen A.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  Struggling with addiction and substance abuse, Rhiannon has helped me get to the place I am now in my recovery. She is someone who cares greatly about her patients’ progress and her kindness/understanding makes me feel comforted all the time.
                </CardBody>
                <CardFooter>- L.M.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  I am so grateful to have Rhiannon as my acupuncturist! She has been helping me overcome symptoms like fatigue, stress, irregular periods, poor appetite, and musculoskeletal problems. Getting regular treatments from her has helped me manage the hardships of being a graduate student. Her love for Acupuncture and Chinese Herbal Medicine truly shows in her treatments and is always fully attentive to my health. If you want a treatment that leaves you feeling refreshed and balanced go see Rhiannon!
                </CardBody>
                <CardFooter>- Lucia M.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  I highly recommend Rhiannon at Seattle Acupuncture Hub. Rhiannon has been treating me weekly for several months and I have noticed significant improvements in my physical health and mental strength. She is very knowledgeable about Chinese and Japanese medicine. She pulls from that knowledge, coupled with her awareness of Western medicine, and tailors her treatments to address my immediate needs as well as to enhance my body’s overall needs. Her treatments compliment Western medicine and also goes further to build up the body’s natural healing systems, once the major issue has been dealt with.<br/>
                  <br/>
                  Rhiannon has a gentle, attentive approach. If you are in relatively good health, go see her for an overall check to balance your systems.
                  If you have been dealing with a long-term illness or an immune system problem, I urge you to get treated by Rhiannon. I feel so much better and I’m certain you will, too.
                </CardBody>
                <CardFooter>- Eva A.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  I’ve been getting acupuncture treatments from Rhiannon Stanford for over 2 years. Her work is nothing less than amazing. I had a very persistent sty that did not respond to several home treatments or to a double course of antibiotics. It was gone after 2-3 treatments form her and never came back. She’s also helped me with hip pain and practically eliminated my hot flashes. I know acupuncture isn’t for everyone, but if it works for you, I highly recommend Rhiannon’s deep knowledge and gentle approach.
                </CardBody>
                <CardFooter>- Marie M.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  When you are in any kind of pain, the last thing you want is a medical practitioner who treats you like a number and looks at you as a symptom, rather than a whole person whose whole body needs treating, not just a tiny part. Also, you don’t want to be rushed or charged more than you can afford. None of that happens with Rhiannon, and her compassion and gentle nature always makes me feel better, even before my health concerns are addressed. I know in my heart she is in this for the right reasons, which makes me happy to support her with my business. She takes her time, checks in on me, and is available in a pinch if you’ve got a nasty cold or other frightening health concern and have nowhere else to turn. You feel welcomed and cared for, and that is priceless.<br/>
                  <br/>
                  She has helped me significantly with stress, as my job has intense periods of stress that often leave me with insomnia and then, of course, fatigue. She has helped me improve those conditions significantly, and has helped me with bronchitis, back pain and an auto injury that gave me whiplash. I am so grateful to her, and want more people to benefit from her care!
                </CardBody>
                <CardFooter>- Stefanie E.</CardFooter>
              </Card>
              
              <Card>
                <CardBody>
                  I am deeply grateful for finding Rhiannon Stanford and Seattle Acupuncture Hub when I did. She has a rare mix of qualities that make her an exceptional practitioner. Her approach to life is holistic, intelligent, kind. Her needling powerful and on point. She carries her insight and knowledge like a master physician. She is present, measured, informed and precise. She treated my whole family while we were in crisis and as I look back she rises above all other supports we had in place as the most helpful in her humanity, her range and skillful application of the various modalities she knows. She helped us find the still point in the chaos.
                </CardBody>
                <CardFooter>- Sarah L.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  I’ve been going to see Rhiannon Stanford at SAH for several years now.  I was skeptical at first since my problem is due to pain associated with having had a spinal fusion years ago.  And to my surprise and delight Rhiannon has really helped me get through some painful episodes.  She is truly gifted and a true and committed  healer.  There doesn’t seem to be any problem that she cannot address!  I’m so grateful to have found her.  And an added bonus is that she is so caring and delightful and genuine!  Love her!
                </CardBody>
                <CardFooter>- Andy S.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  I originally started seeing Rhiannon for treatment after a traumatic car accident, on the recommendation of my sister. I have continued to see her, not only for those symptoms, but as I have other health challenges going on, she has become an integral part of my health-care team. Rhiannon has a very calm and gentle demeanor, and a very accurate read on what your body needs and what’s going on at a deeper level. She has helped me to make some changes, dietary and herbal, that have dramatically improved my base-line health. I have already recommended her to my mother, who was uncomfortable with the idea of acupuncture but felt very comfortable with Rhiannon and had a positive experience, and would recommend her to anyone else considering acupuncture treatment.
                </CardBody>
                <CardFooter>- Anshika K.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  I was referred to Rhiannon by Dr. Jeff Metzger ND , a long-time friend who has an office in the same suite as Rhiannon.  She did an initial assessment when I was having some stress-related issues and started me on a program of acupuncture and Chinese herbs which I have been following for several months.  The results have been dramatic. I’m a regular commuting cyclist and college student.  I immediately began to notice an increased level of physical energy, improved focus and better general health.  In addition, the aches I was experiencing have lessened dramatically.  I would recommend her without hesitation.  She is also very gentle, always asks if I have any questions about the treatment and involves me fully in the process.
                </CardBody>
                <CardFooter>- Nickolas H.</CardFooter>
              </Card>

              <Card>
                <CardBody>
                  I first went to Rhiannon after a car accident.  I was experiencing back and shoulder pain as well as frequent headaches.  I had been going to a chiropractor for my injuries, which was helpful but only to a point.  Rhiannon helped my body break though the stagnation I was in, and I now experience very little pain related to the accident.  My headaches are completely gone.<br/>
                  <br/>
                  Rhiannon has a holistic approach, and I have experienced much better circulation since first seeing her, as well.  My cold hands and feet and limbs that frequently “fell asleep” are now much improved!  She has also helped me get over colds more quickly and improved a chronic sinus problem.<br/>
                  <br/>
                  Rhiannon is clearly knowledgeable and skilled at her profession.  However, what I appreciate most about Rhiannon is that she listens closely to her patients and asks them many questions.  She is concerned with both the body and emotions, and she never acts as though she knows more about your body than you do.  After having numerous medical professionals not really listen to me, it is so refreshing to have one who does.  She is also wonderful about explaining what she is doing as she does it.  She is highly attuned to her patients and is generous, kind, and wise.
                </CardBody>
                <CardFooter>- Kira D.</CardFooter>
              </Card>
              

              <br/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);

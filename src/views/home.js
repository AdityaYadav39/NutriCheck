import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>NutriCheck</title>
        <meta property="og:title" content="Nutricheck" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100 thq-body-small">
              Input your allergies and health information
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Get Started</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102 thq-link thq-body-small">
              Upload
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103 thq-body-large">#Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105 thq-body-large">#Allergies</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106 thq-body-large">#Upload</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107 thq-link thq-body-small">
              Allergies
            </span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108 thq-body-small">
              Learn more about NutriCheck
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109 thq-body-small">
              Upload nutrition label photos for analysis
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110 thq-link thq-body-small">
              Analysis
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111 thq-body-large">#Analysis</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              View ingredient analysis results and health ratings
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Submit</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114 thq-body-small">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115 thq-body-small">Get Started</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116 thq-heading-1">
            Welcome to <span className='home-text116B'>NutriCheck</span>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117 thq-body-large">
              Analyzing food ingredients for a healthier you
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118 thq-body-small">
              User form for allergies
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119 thq-heading-2">
              Allergy Information
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120 thq-body-small">
              Ingredient analysis results with health ratings
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121 thq-heading-2">
              Photo Upload for Nutrition Labels
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              Upload photos of nutrition labels for ingredient analysis
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123 thq-heading-2">
              Health Impact Analysis
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124 thq-heading-2">
              Start Analyzing Your Ingredients Today
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125 thq-body-large">
              Upload a photo of the nutrition label and receive detailed health
              impact analysis and substitution suggestions.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Get Started</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127 thq-body-small">
              Users can input their allergies and health information to receive
              personalized substitution suggestions.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128 thq-body-small">
              Users can easily upload photos of nutrition labels from food
              products for ingredient analysis.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129 thq-heading-2">
              Ingredient Analysis Results with Health Ratings
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130 thq-heading-2">
              Upload Section for Nutrition Label Photos
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131 thq-body-small">
              Receive detailed analysis results for each ingredient with health
              ratings to make informed decisions.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132 thq-heading-2">
              User Form for Allergies
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133 thq-heading-3">$29.99/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134 thq-body-small">Subscribe Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136 thq-body-small">Subscribe Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139 thq-body-small">
              User form for allergies
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143 thq-body-small">
              Priority support
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146 thq-body-large">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148 thq-body-small">Subscribe Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149 thq-body-small">
              All features of Plan 2
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150 thq-body-small">
              Customized health recommendations
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151 thq-heading-3">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155 thq-body-small">
              Personalized meal plans
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157 thq-body-small">
              All features of Plan 1
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166 thq-heading-3">$19.99/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171 thq-heading-3">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172 thq-body-large">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174 thq-heading-3">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Health impact and substitution suggestions
            </span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177 thq-body-large">or $200 yearly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178 thq-body-small">
              Ingredient analysis results with health ratings
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179 thq-body-small">
              Exclusive access to nutritionists
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text183 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text184 thq-heading-3">$9.99/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text185 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        rootClassName="pricing14root-class-name"
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186 thq-body-small">
              Easily upload photos of nutrition labels from food products for
              analysis.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187 thq-body-small">
              Provide information about allergies and health conditions to
              receive personalized substitution suggestions.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188 thq-heading-2">
              Ingredient Analysis Results
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189 thq-body-small">
              Receive detailed analysis results for each ingredient with health
              ratings and impact information.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190 thq-heading-2">
              Upload Nutrition Label Photos
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191 thq-heading-2">
              Input Allergies and Health Info
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Read testimonials from satisfied users who have benefited from
              NutriCheck&apos;s ingredient health impact analysis and
              substitution recommendations.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193 thq-heading-2">Testimonials</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text194 thq-body-small">Health Coach</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195 thq-body-small">
              Fitness Enthusiast
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text196 thq-body-large">Emily Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text197 thq-body-large">Sarah Lee</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text198 thq-body-small">
              As a health coach, I recommend NutriCheck to all my clients. It
              simplifies the process of understanding food labels and making
              informed decisions about what we eat.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199 thq-body-large">David Johnson</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text200 thq-body-small">Food Blogger</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201 thq-body-large">Michael Brown</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text202 thq-body-small">
              I&apos;ve been using NutriCheck for a month now, and it has
              completely changed the way I look at food. The ingredient analysis
              and health ratings have helped me make better choices for my
              fitness goals.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text203 thq-body-small">Nutritionist</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text204 thq-body-small">
              NutriCheck is a game-changer!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text205 thq-heading-2">
              Our Customers Love NutriCheck
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text206 thq-body-small">
              NutriCheck is a valuable tool for both professionals and
              individuals looking to improve their dietary habits. The
              substitution suggestions are especially helpful for those with
              dietary restrictions.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text207 thq-body-small">
              NutriCheck has become my go-to app for researching ingredients and
              finding healthier alternatives. It&apos;s user-friendly and
              provides accurate information that I can trust.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text209 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text210 thq-heading-2">Locations</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text212 thq-heading-3">Pune</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text213 thq-heading-3">Mumbai-Thane</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text214 thq-body-small">Blog</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216 thq-body-small">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217 thq-body-small">Terms of Use</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218 thq-body-small">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219 thq-body-small">FAQs</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home

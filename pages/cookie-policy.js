/* eslint-disable react/no-unescaped-entities */
import _ from 'lodash'
import Head from 'next/head'
import moment from 'moment'
// api
import { getItem, getSeoContent } from 'api/collections'
// components
import { getAnalytics } from 'api/collections'

export default function CookiePolicy({ seo }) {
  const { metas, defaultSeo } = seo
  const hostname = typeof window !== 'undefined' && window.location.href ? window.location.href : '';
  const metaTitle = _.get(metas, 'metaTitle') ? _.get(metas, 'metaTitle') : _.get(defaultSeo, 'defaultMetaTitle') ? _.get(defaultSeo, 'defaultMetaTitle') : ''
  const metaDescription = `We are a communication advisor, strategist, and actuator, employing extensive knowledge and an advanced perspective on communication tools and processes.`
  const { url } = seo.defaultSeo

  return (
    <div className="w-full">
      <Head>
        <title>Cookie Policy - {metaTitle}</title>
        <link rel="canonical" href={hostname}/>
        <meta name="title" content={`Cookie Policy - ${metaTitle}`} />
        <meta name="description" content={`${metaDescription}`}/>
        <meta property="og:title" content={`Cookie Policy - ${metaTitle}`} key="title" />
        <meta property="og:description" content={`${metaDescription}`} key="description" />
        <meta property="og:image" content={`${_.get(metas, 'ogImage.imageUrl')}`} key="image" />
      </Head>

      <section className="relative w-full overflow-hidden ">
        <div className={`w-full h-full overflow-hidden`}>
          <div className={`py-8 md:pt-12 md:pb-16 lg:pt-16 lg:pb-16 xl:pt-20 2xl:pt-24 container relative z-1 2xl:px-24 mt-20 mb-20`}>
            <div className="mx-auto max-w-prose xl:text-lg">
              <h2 className="text-4xl md:text-5xl font-heading text-theme-title font-extrabold text-center">Cookie Policy</h2>
              {/* title and subtitle */}
              <div className="mt-8 space-y-6 md:mt-10 xl:space-y-8">
                <div className="prose bg-transparent mx-auto">
                  <p>This cookie policy ("Policy") describes what cookies are and how and they're being
                    used by the <a target="_blank" rel="noreferrer" href={url}>{url}</a> website ("Website" or
                    "Service") and any of its related products and services (collectively,
                    "Services"). This Policy is a legally binding agreement between you ("User",
                    "you" or "your") and this Website operator ("Operator",
                    "we", "us" or "our"). You should read this Policy so you can
                    understand the types of cookies we use, the information we collect using cookies and how that
                    information is used. It also describes the choices available to you regarding accepting or
                    declining the use of cookies. For further information on how we use, store and keep your
                    personal data secure, see our <a target="_blank" rel="noreferrer" href={`${url}privacy-policy`}>Privacy Policy</a>.
                  </p>

                  <h2>What are cookies?</h2>

                  <p>Cookies are small pieces of data stored in text files that are saved on your computer or other
                    devices when websites are loaded in a browser. They are widely used to remember you and your
                    preferences, either for a single visit (through a "session cookie") or for multiple
                    repeat visits (using a "persistent cookie").
                  </p>

                  <p>Session cookies are temporary cookies that are used during the course of your visit to the
                    Website, and they expire when you close the web browser.
                  </p>

                  <p>Persistent cookies are used to remember your preferences within our Website and remain on your
                    desktop or mobile device even after you close your browser or restart your computer. They ensure
                    a consistent and efficient experience for you while visiting the Website and Services.
                  </p>

                  <p>Cookies may be set by the Website ("first-party cookies"), or by third parties, such as
                    those who serve content or provide advertising or analytics services on the Website ("third
                    party cookies"). These third parties can recognize you when you visit our website and also
                    when you visit certain other websites.
                  </p>

                  <h2>What type of cookies do we use?</h2>
                  <h3>Functionality cookies</h3>

                  <p>Functionality cookies let us operate the Website and Services in accordance with the choices you
                    make. For example, we will recognize your username and remember how you customized the Website
                    and Services during future visits.
                  </p>

                  <h3>Analytical cookies</h3>
                  <p>These cookies enable us and third party services to collect aggregated data for statistical
                    purposes on how our visitors use the Website. These cookies do not contain personal information
                    such as names and email addresses and are used to help us improve your user experience of the
                    Website.
                  </p>

                  <h3>Social media cookies</h3>
                  <p>Third party cookies from social media sites (such as Facebook, Twitter, etc) let us track social
                    network users when they visit or use the Website and Services, or share content, by using a
                    tagging mechanism provided by those social networks.
                  </p>

                  <p>These cookies are also used for event tracking and remarketing purposes. Any data collected with
                    these tags will be used in accordance with our and social networks’ privacy policies. We will
                    not collect or share any personally identifiable information from the user.
                  </p>

                  <h2>What are your cookie options?</h2>

                  <p>If you don't like the idea of cookies or certain types of cookies, you can change your browser's
                    settings to delete cookies that have already been set and to not accept new cookies. To learn
                    more about how to do this or to learn more about cookies, visit <a target="_blank" rel="noreferrer" href="https://www.internetcookies.org">internetcookies.org</a>
                  </p>

                  <h2>Changes and amendments</h2>
                  <p>We reserve the right to modify this Policy or its terms relating to the Website and Services at
                    any time, effective upon posting of an updated version of this Policy on the Website. When we
                    do, we will revise the updated date at the bottom of this page. Continued use of the Website and
                    Services after any such changes shall constitute your consent to such changes.
                  </p>

                  <h2>Acceptance of this policy</h2>
                  <p>You acknowledge that you have read this Policy and agree to all its terms and conditions. By
                    accessing and using the Website and Services you agree to be bound by this Policy. If you do not
                    agree to abide by the terms of this Policy, you are not authorized to access or use the Website
                    and Services.
                  </p>

                  <h2>Contacting us</h2>
                  <p>If you would like to contact us to understand more about this Policy or wish to contact us
                    concerning any matter relating to our use of cookies, you may do so via the <a target="_blank" rel="noreferrer" href={`${url}contact`}>contact form</a>
                  </p>

                  <p><em>Effective as of {moment().format('ll')}</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps(context) { 
  const defaultSeo = await getSeoContent();
  const dataCollection = await getAnalytics()
  const analyticsId =  dataCollection.analyticsId

  return {
    props: { 
      seo: { name: null, metas: { metaTitle: null}, defaultSeo },
      analyticsId
    },
  };
}

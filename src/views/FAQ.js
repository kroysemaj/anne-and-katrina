import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../styles/FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "Is there a dress code? What should I wear? ",
      answer:
        "The dress code is suits and sparkles! Feel free to interpret that in whatever way feels most comfortable and celebratory for you. Kids are encouraged to wear their favorite dinosaur shirt, or whatever they can best party in.",
    },
    {
      question: "Kids? Is this event kid-friendly?",
      answer:
        "Totally is! We’re hiring extra supervision and providing kid’s activities and a kid-friendly meal for our 12-and-under guests. Kids are of course welcome to party in the main space with us, as well as retire to the fun zone when the adults get boring.",
    },

    {
      question:
        "How do I get around? What’s the parking situation? Public transit? ",
      answer:
        "Public transit in Detroit is not great, we don’t recommend relying upon it. There’s secure parking at The Jam Handy, and both Uber and Lyft have a strong presence in the city.",
    },
  ];

  const multiAnswerFaqs = [
    {
      question: "Where can I stay?",
      answer:
        "We don’t have a hotel block booked anywhere, but we do have some recommendations!",
      answer2:
        "If you prefer an AirBnB experience, we recommend looking in the Corktown, Midtown, and Brush Park neighborhoods.",
      links: [
        {
          label: "The Hotel St. Regis",
          url: "https://hotelstregisdetroit.com/",
        },
        {
          label: "The El Moore Lodge",
          url: "https://elmoore.com/",
        },
        {
          label: "The Inn on Ferry Street",
          url: "https://www.innonferrystreet.com/",
        },
        {
          label: "The Shinola Hotel",
          url: "https://www.shinolahotel.com/",
        },
        {
          label: "The Siren",
          url: "https://www.sirenhotel.com/",
        },
        {
          label: "The Westin Book Cadillac",
          url: "https://www.marriott.com/hotels/travel/dtwak-the-westin-book-cadillac-detroit/",
        },
        {
          label: "The Hotel David Whitney",
          url: "https://www.marriott.com/hotels/travel/dtwlc-the-whitney-a-luxury-collection-hotel-detroit/",
        },
      ],
    },
    {
      question: "I came all this way, what else should I do while I’m here?",
      answer:
        "So many things, you guys! Some recommendations of our favorite places and activities around Detroit:",
      links: [
        {
          label: "The Henry Ford Museum & Greenfield Village",
          description:
            "An eclectic museum and history park with an interesting collection of everything from Rosa Parks’ bus to the chair Lincoln was shot in to the Wright Brothers bicycle shop.",
          url: "https://www.thehenryford.org/",
        },
        {
          label: "The Detroit Institute of Arts",
          description:
            " one of the true must-see museums in the world, with a collection that includes the dazzling Diego Rivera murals, and works by Bruegel the Elder, Claude Monet, Rembrandt, and the first Van Gogh to be purchased in the US.",
          url: "https://www.dia.org/",
        },
        {
          label: "The Motown Museum",
          description:
            "the home of Hitsville USA, the original recording studio for the Motown label. Now a museum of the history of and artifacts from the era.",
          url: "https://www.motownmuseum.org/",
        },
        {
          label: "Eastern Market",
          description:
            " one of the oldest farmer’s markets in the country. Go on Saturday morning to take in the mountains of fresh produce or on Sunday morning for the arts-and-crafts market. Has a ton of great restaurants and breweries, as well as the best vintage shopping in the city. ",
          url: "https://www.easternmarket.org/",
        },
        {
          label: "Detroit Riverwalk",
          description:
            "a lovely stroll along Detroit’s historic riverfront, and the only spot in the US from which you can look south and see Canada! Also, there’s a nice carousel and some fun playgrounds for the kiddos.",
          url: "https://detroitriverfront.org/",
        },
        {
          label: "Belle Isle",
          description:
            "A beautiful island park in the Detroit River, with a conservatory, a zoo, a beach, and a giant slide.",
          url: "https://www.belleisleconservancy.org/",
        },
        {
          label: "Canada",
          description:
            "It’s right there. Pack your passport! Get the good Tim Horton’s and load up on Coffee Crisps!",
          url: "https://visitdetroit.com/destinations/windsor-ontario/",
        },
      ],
    },
  ];

  const registry = {
    question: "Do you have a registry? ",
    answer:
      "Listen. We deeply appreciate your desire to give us presents, we love presents! But we’ve been lucky enough to be well established in our life and home before we made it official. Your presence is more than present enough! That said, if you are insistent, we do have a small registry at Williams-Sonoma that you can find here:",
    links: [
      {
        label: "Registry",
        url: "https://www.williams-sonoma.com/registry/fxfhpjmc8q/registry-list.html",
      },
    ],
  };

  return (
    <div className="container text-center menu-container">
      <div className="call-to-action faq-cta">
        <p className="faq-title f">Frequently</p>
        <p className="faq-title a">Asked </p>
        <p className="faq-title q"> Questions</p>
      </div>
      <div className="faqs">
        <Accordion flush>
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body className="faq-answer">
                {faq.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}

          {multiAnswerFaqs.map((faq, index) => (
            <Accordion.Item eventKey={index + faqs.length} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body className="faq-answer">
                {faq.answer}
                {faq.answer2 && <p>{faq.answer2}</p>}
                {faq.answer3 && <p>{faq.answer3}</p>}
                {faq.links && (
                  <ul>
                    {faq.links.map((link, index) => (
                      <li key={index}>
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                        {link.description && <p>{link.description}</p>}
                      </li>
                    ))}
                  </ul>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}

          <Accordion.Item>
            <Accordion.Header>
              <p>{registry.question}</p>
            </Accordion.Header>
            <Accordion.Body className="faq-answer">
              Listen. We deeply appreciate your desire to give us presents, we
              love presents! But we’ve been lucky enough to be well established
              in our life and home before we made it official. Your presence is
              more than present enough! That said, if you are insistent, we do
              have a small registry at Williams-Sonoma that you can find{" "}
              <a href="https://www.williams-sonoma.com/registry/fxfhpjmc8q/registry-list.html">
                here
              </a>
              .
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>
              <p>Just the one party? I thought you guys were cool.</p>
            </Accordion.Header>
            <Accordion.Body className="faq-answer">
              All guests, especially people who have traveled any distance to
              celebrate with us, are invited to our home on Sunday afternoon for
              a brunch open house between 12pm - 4pm. Come see the house, our
              fantastic backyard gazebo, our many many Legos, and have a more
              relaxed hang with family and friends!
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5895.023014844027!2d-83.11013228672508!3d42.374248771071564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824cd0e3c125111%3A0x349eb92ad8df0c6e!2s2489%20Atkinson%20St%2C%20Detroit%2C%20MI%2048206!5e0!3m2!1sen!2sus!4v1724644049801!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

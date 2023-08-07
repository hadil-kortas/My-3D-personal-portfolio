
import { motion } from "framer-motion";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { slideIn } from "../utils/motion";
import { contacts } from "../constants";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from '../utils/motion';



const ContactCard = ({index ,name, image, source_link}) =>
{
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75 )}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 400
        }}
        
        
        >
        
          <div className="w-10 h-10 object-contain rounded-full m-3">
            <img 
              src={image}
              alt={name}
              className="w-10 h-10 object-contain"
            />

          </div>
        </Tilt>
      </motion.div>
  )
}

const Contact = () => {

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >

          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          {contacts.map((contact, index) => (
            <ContactCard 
            key={`contact-${index}`}
            index={index}
            {...contact}
            />
          ))}

      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")
"use client"
import { motion } from 'framer-motion';
const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.',
    icon: '🌐',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with great user experience.',
    icon: '🎨',
  },
  {
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications using React Native.',
    icon: '📱',
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Here's what I can do for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
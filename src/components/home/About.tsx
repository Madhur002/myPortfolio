"use client"
import { motion } from 'framer-motion';
const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
];

const timeline = [
  {
    year: '2023',
    title: 'Senior Frontend Developer',
    description: 'Leading frontend development at XYZ Company',
  },
  {
    year: '2021',
    title: 'Frontend Developer',
    description: 'Developed modern web applications at ABC Corp',
  },
  {
    year: '2019',
    title: 'Junior Developer',
    description: 'Started my journey in web development',
  },
];

export default function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="font-bold text-blue-600 w-20">{item.year}</div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-blue-600 h-2.5 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
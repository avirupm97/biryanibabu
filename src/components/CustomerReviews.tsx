'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const reviews = [
  {
    name: 'Ishita Kumar',
    review: 'Tried the Lazeez Bhuna Murgh Biryani and honestly, it was so good. Great portions, amazing flavour and the chicken pieces are very soft.',
    image: 'https://images.pexels.com/photos/30004315/pexels-photo-30004315.jpeg',
    attribution: 'Daniel & Hannah Snipes on Pexels'
  },
  {
    name: 'Nikita Chawla',
    review: 'Ordered Biryani Babu for a family dinner and everyone loved it. Biryani, kebabs, gravy, everything was so tasty and rich.',
    image: 'https://images.pexels.com/photos/29153940/pexels-photo-29153940.jpeg',
    attribution: 'Adenir Figueiredo Carvalho on Pexels'
  },
  {
    name: 'Manya Sanghvi',
    review: 'My whole family enjoyed Dum Gosht Biryani, Kebabs and Gulab Jamun. Everything looks and tastes delicious.',
    image: 'https://pixabay.com/get/g1d9f713c32ca1f9b1ed692f2b1e1814122e3a566461e88ce9f3b1eae5e6c4e18db45654b0a97ba9e9fb4f01cbce7333b.jpg',
    attribution: 'u_lmnydti56c on Pixabay'
  },
  {
    name: 'Shivi Jha',
    review: 'I ordered Dum Gosht Biryani, Zaikedaar Paneer Biryani and kebabs. Everything tasted amazing and didn\'t feel heavy at all.',
    image: 'https://pixabay.com/get/g8fc62e226eee9ff07de41b9e631a31c644c791455d2b94a56e84696b68461c463450f1c83537ccefd35f04eedae4182b.jpg',
    attribution: 'u_4bga4jlsw8 on Pixabay'
  },
  {
    name: 'Chanchal Hingorani',
    review: 'My husband orders Dum Gosht Biryani with kebabs everytime and they never disappoint. This is a date night ritual now.',
    image: 'https://images.pexels.com/photos/30767565/pexels-photo-30767565.jpeg',
    attribution: 'Uiliam Nörnberg on Pexels'
  },
  {
    name: 'Akrita Negi',
    review: 'The portion size was great and the quality really stood out. Totally worth it! Ordering Dum Gosht again soon.',
    image: 'https://pixabay.com/get/g791d27d169b0333d3aab3c1ad978b9891bc40651b27d1470df964db093351b5b8218d70c5b9896050256b838d7870a75.jpg',
    attribution: 'u_4bga4jlsw8 on Pixabay'
  }
];

export default function CustomerReviews() {
  return (
    <section className="py-24 bg-dark-glow relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="accent-text text-sm tracking-[0.3em] uppercase mb-4 block">Testimonials</span>
          <h2 className="heading-xl mb-6">Ishq-e-Aawaam</h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto mb-8" />
          <p className="body-lg max-w-2xl mx-auto italic text-light-tan">The people&apos;s love and gratitude, in every bite. Our true reward is your satisfaction.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="h-full"
            >
              <Card className="bg-warm-brown/40 backdrop-blur-sm border-royal-gold/15 hover:border-royal-gold/40 transition-all duration-500 p-6 h-full shadow-2xl flex flex-row items-start gap-4 group">
                <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-royal-gold/30 p-1 bg-dark-brown group-hover:border-royal-gold transition-colors duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <h4 className="heading-md text-lg group-hover:text-royal-gold transition-colors">{review.name}</h4>
                  <p className="text-light-tan/90 text-sm leading-relaxed italic font-light">
                    &quot;{review.review}&quot;
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="ornamental-divider">
          ◆
        </div>
      </div>
    </section>
  );
}

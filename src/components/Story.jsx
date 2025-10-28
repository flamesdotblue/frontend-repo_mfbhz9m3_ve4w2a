import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Story = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="story" ref={ref} className="relative overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Behind the Lens</h2>
          <p className="mt-2 text-neutral-600">A brief story about craft, curiosity, and light.</p>
        </div>

        <div className="relative">
          <motion.div style={{ y: y1, opacity }} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <p className="text-neutral-700">
              Every frame starts with a question: what does this moment feel like? I chase that
              feeling through texture, shape, and silence, letting the subject breathe while the
              world blurs away.
            </p>
          </motion.div>

          <motion.div
            style={{ y: y2, opacity }}
            className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
          >
            <p className="text-neutral-700">
              The process is simple and intentional: observe, connect, and create. Minimal gear,
              honest light, and careful timing—so the story leads, not the tools.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;

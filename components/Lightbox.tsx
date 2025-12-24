
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  media: { src: string; type: 'image' | 'video' } | null;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const contentVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit: { scale: 0.8, opacity: 0 }
};

const Lightbox: React.FC<LightboxProps> = ({ media, onClose }) => {
  const isVideo = media?.type === 'video';

  return (
    <AnimatePresence>
      {media && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
          className="fixed inset-0 bg-[var(--bg-backdrop)] backdrop-blur-md flex items-center justify-center z-50 p-4 md:p-10"
        >
          <motion.div
            variants={contentVariants}
            className="relative w-full max-w-5xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo ? (
              <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={`${media.src}?autoplay=1`}
                  title="Video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ) : (
              <img
                src={media.src}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            )}
            
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 bg-[var(--bg-card)] text-[var(--text-color)] rounded-full h-10 w-10 flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-50"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;

import { ContactForm } from "../components/ContactForm";
import { AnimatedPage } from '../components/AnimatedPage';

export const ContactView = () => {
  return (
    <AnimatedPage>
      <div className="relative min-h-[calc(100vh-80px)]">
        {/* ContactForm already has all styling and structure */}
        <ContactForm />
      </div>
    </AnimatedPage>
  );
};

"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="none"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Academics",          id: "features"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Chipadze High"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars"}}
      title="Empowering Future Generations"
      description="Chipadze High School is committed to academic excellence, leadership development, and character building in every student."
      leftCarouselItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DTiIWtAtKwXJVjuLkMC9HJeqcU/uploaded-1778314207972-wugn6vec.png", imageAlt: "Campus Overview" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DTiIWtAtKwXJVjuLkMC9HJeqcU/uploaded-1778314499981-bydw2zsw.png", imageAlt: "Students in classroom" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DTiIWtAtKwXJVjuLkMC9HJeqcU/uploaded-1778314745571-3ojqumgm.png", imageAlt: "Campus Overview 2" },
        { imageSrc: "http://img.b2bpic.net/free-photo/girl-pushing-her-colleague-with-physical-impairment-through-library_482257-126269.jpg", imageAlt: "Students in library" },
        { imageSrc: "http://img.b2bpic.net/free-photo/building-lake_1127-3460.jpg", imageAlt: "Campus Overview 3" },
      ]}
      rightCarouselItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DTiIWtAtKwXJVjuLkMC9HJeqcU/uploaded-1778314242135-8yjpmtrq.png", imageAlt: "Students at science lab" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DTiIWtAtKwXJVjuLkMC9HJeqcU/uploaded-1778315576864-fsmvqyxk.png", imageAlt: "School architecture" },
        { imageSrc: "http://img.b2bpic.net/free-photo/close-up-students-learning-together_23-2149127112.jpg", imageAlt: "Students at sports activity" },
        { imageSrc: "http://img.b2bpic.net/free-photo/getting-information-project_1098-14186.jpg", imageAlt: "School hallway" },
        { imageSrc: "http://img.b2bpic.net/free-photo/teen-boy-with-book-looking-up-near-friends_23-2147864051.jpg", imageAlt: "Students at computer lab" },
      ]}
      buttons={[{ text: "Learn More", href: "#about" }]}
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/student-walking-campus-with-backpack_23-2147850662.jpg", alt: "Student walking" },
        { src: "http://img.b2bpic.net/free-photo/students-walking-near-campus_23-2147850663.jpg", alt: "Students walking" },
        { src: "http://img.b2bpic.net/free-photo/primary-school-students-go-school-holding-hands-first-day-school-back-school_169016-13532.jpg", alt: "Primary students" },
        { src: "http://img.b2bpic.net/free-photo/girls-walking-boys-with-backs-camera_259150-60373.jpg", alt: "Students group" },
        { src: "http://img.b2bpic.net/free-photo/primary-school-students-go-school-holding-hands-first-day-school-back-school_169016-13700.jpg", alt: "Back to school group" },
      ]}
      avatarText="Join our community of over 1200+ students"
      marqueeItems={[
        { type: "text", text: "Academic Excellence" },
        { type: "text", text: "Inclusive Environment" },
        { type: "text", text: "STEM Leadership" },
        { type: "text", text: "Athletic Prowess" },
        { type: "text", text: "Character Building" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="A Legacy of Excellence"
      description="Since our inception, Chipadze High School has been at the forefront of quality education, fostering an environment where students thrive both intellectually and personally."
      metrics={[
        { value: "50+", title: "Expert Educators" },
        { value: "1200+", title: "Success Stories" },
        { value: "98%", title: "University Placement" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DTiIWtAtKwXJVjuLkMC9HJeqcU/uploaded-1778314179138-vmr7foqs.png"
      imageAlt="About Chipadze High School"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "STEM Excellence",          description: "Modern laboratories and cutting-edge curriculum.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/stationary-items-photovoltaics-factory-engineering-workspace-desk_482257-120473.jpg", imageAlt: "Science Lab" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/researchers-laboratory_23-2148776165.jpg", imageAlt: "Technology Room" }
        },
        {
          title: "Sports Development",          description: "Focus on holistic wellness and physical education.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/athletic-blonde-women-sitting-grass_23-2148355533.jpg", imageAlt: "Sports Field" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-grass-field-hockey_23-2149668571.jpg", imageAlt: "Team Practice" }
        },
        {
          title: "Library & Research",          description: "Resources to foster a culture of inquiry.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/girl-with-books-sitting-shelves_23-2147854102.jpg", imageAlt: "Library View" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/books-lying-ladder-bookstore_23-2147767747.jpg", imageAlt: "Study Room" }
        },
      ]}
      showStepNumbers={true}
      title="Academic Programs"
      description="Comprehensive curriculum designed to meet modern standards."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "8 ",          title: "Clubs Offered",          description: "Diverse extracurricular activities",          imageSrc: "http://img.b2bpic.net/free-photo/well-organized-empty-medical-cabinet-ready-healthcare-services_482257-124048.jpg"},
        {
          id: "m2",          value: "40+",          title: "Classrooms",          description: "Well-equipped learning spaces",          imageSrc: "http://img.b2bpic.net/free-photo/room-interior-design_23-2148899442.jpg"},
        {
          id: "m3",          value: "15+",          title: "Sports Teams",          description: "Building competitive spirit",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DTiIWtAtKwXJVjuLkMC9HJeqcU/uploaded-1778315518061-2mdlwtcn.png"},
      ]}
      title="School at a Glance"
      description="Measuring our impact through numbers and milestones."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      members={[
        { id: "t1", name: "Mr. Dube", role: "Principal", imageSrc: "http://img.b2bpic.net/free-photo/graduation-concept-with-portrait-happy-man_23-2148201907.jpg" },
        { id: "t2", name: "Mrs. Moyo", role: "Deputy headmaster ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DTiIWtAtKwXJVjuLkMC9HJeqcU/uploaded-1778314907330-q43byeit.png" },
        { id: "t3", name: "Mr. Ndlovu", role: "Athletics Director", imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-woman-smiling_23-2148369437.jpg" },
      ]}
      title="Leadership & Faculty"
      description="Meet the passionate team behind the success of our students."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Chipadze High School changed my life. The teachers are incredibly supportive and the resources helped me excel in my university entrance exams."
      rating={5}
      author="Sarah Dube - Alumna"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/joyful-pretty-businesswoman-has-found-solution_1262-1864.jpg", alt: "Reviewer 1" },
        { src: "http://img.b2bpic.net/free-photo/young-lady-looking-camera-academic-dress-looking-confident_176474-82320.jpg", alt: "Reviewer 2" },
        { src: "http://img.b2bpic.net/free-photo/close-up-smiley-women-posing_23-2148634670.jpg", alt: "Reviewer 3" },
        { src: "http://img.b2bpic.net/free-photo/cheerful-teenager-tries-explain-material-younger-brother-who-sits-back-camera_273609-28612.jpg", alt: "Reviewer 4" },
        { src: "http://img.b2bpic.net/free-photo/she-s-ready-making-coffee_329181-2917.jpg", alt: "Reviewer 5" },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "f1", title: "How do I enroll?", content: "Visit our admissions office with your results and identification." },
        { id: "f2", title: "Are there school buses?", content: "Yes, we provide transport for students living in the main residential zones." },
        { id: "f3", title: "What are school hours?", content: "Classes run from 07:30 AM to 03:00 PM, Monday through Friday." },
        { id: "f4", title: "What subjects are offered?", content: "We offer a wide range of subjects including Sciences, Arts, and Commercial studies." },
      ]}
      title="Frequently Asked Questions"
      description="Quick answers to help you understand our school processes."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch"
      description="Have questions about our admissions or school programs? We are here to help."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name" },
        { name: "email", type: "email", placeholder: "Your Email" },
        { name: "subject", type: "text", placeholder: "Inquiry Subject" },
      ]}
      textarea={{ name: "message", placeholder: "How can we assist you?", rows: 4 }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DTiIWtAtKwXJVjuLkMC9HJeqcU/uploaded-1778315483156-il1vhzzo.png"
      mediaPosition="left"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      logoText="Chipadze High School"
      columns={[
        {
          title: "Quick Links",          items: [
            { label: "Home", href: "#hero" },
            { label: "About Us", href: "#about" },
            { label: "Programs", href: "#features" },
          ],
        },
        {
          title: "Admissions",          items: [
            { label: "Enrollment", href: "#contact" },
            { label: "Contact Support", href: "#contact" },
          ],
        },
        {
            title: "Legal",            items: [
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
            ]
        }
      ]}
      copyrightText="© 2025 Chipadze High School"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
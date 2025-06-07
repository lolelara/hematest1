
import React from 'react';
import ProfileCard from './components/ProfileCard';
import { SocialLink } from './types';
import FacebookIcon from './components/icons/FacebookIcon';
import InstagramIcon from './components/icons/InstagramIcon';
import TwitterIcon from './components/icons/TwitterIcon';
import LinkedInIcon from './components/icons/LinkedInIcon';

const App: React.FC = () => {
  // --- بيانات الطبيب - يمكنك تعديل هذه البيانات ---
  const doctorProfile = {
    name: "د. إبراهيم (عدّل اسمك هنا)", // استبدل هذا باسمك
    specialty: "أخصائي ... (عدّل تخصصك هنا)", // استبدل هذا بتخصصك
    bio: `مرحباً بك في صفحتي الشخصية.
أنا طبيب متخصص في [اذكر تخصصك هنا، مثل طب الأطفال، الجراحة العامة، إلخ]. لدي خبرة [عدد] سنوات في هذا المجال، وأسعى دائماً لتقديم أفضل رعاية صحية لمرضاي.
    
يمكنك هنا كتابة نبذة عن إنجازاتك، اهتماماتك البحثية، أو أي معلومات أخرى تود مشاركتها.
    
هذا النص هو مثال، لا تتردد في تعديله ليعكس شخصيتك وخبراتك بشكل أفضل.`, // اكتب نبذة تعريفية عنك هنا
    imageUrl: "https://picsum.photos/seed/doctorprofile/200/200", // يمكنك تغيير رابط الصورة الشخصية
  };

  const socialLinks: SocialLink[] = [
    {
      platform: "فيسبوك",
      url: "https://www.facebook.com/doc.hema.2004", // الرابط الذي قدمته
      icon: <FacebookIcon className="w-6 h-6 text-blue-600" />,
      ariaLabel: "صفحة فيسبوك الخاصة بالدكتور",
    },
    {
      platform: "انستغرام",
      url: "#", // استبدل # برابط حسابك على انستغرام
      icon: <InstagramIcon className="w-6 h-6 text-pink-500" />,
      ariaLabel: "حساب انستغرام الخاص بالدكتور",
    },
    {
      platform: "إكس (تويتر سابقا)",
      url: "#", // استبدل # برابط حسابك على إكس
      icon: <TwitterIcon className="w-6 h-6 text-sky-500" />,
      ariaLabel: "حساب إكس الخاص بالدكتور",
    },
    {
      platform: "لينكد إن",
      url: "#", // استبدل # برابط حسابك على لينكد إن
      icon: <LinkedInIcon className="w-6 h-6 text-blue-700" />,
      ariaLabel: "حساب لينكد إن الخاص بالدكتور",
    },
  ];
  // --- نهاية قسم بيانات الطبيب ---

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-sky-800">الصفحة الشخصية</h1>
        <p className="text-lg text-slate-600">مرحباً بك في صفحتي التعريفية</p>
      </header>
      <main>
        <ProfileCard
          name={doctorProfile.name}
          specialty={doctorProfile.specialty}
          bio={doctorProfile.bio}
          imageUrl={doctorProfile.imageUrl}
          socialLinks={socialLinks}
        />
      </main>
      <footer className="text-center py-8 mt-10 text-slate-500">
        <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة للدكتور {doctorProfile.name}.</p>
      </footer>
    </div>
  );
};

export default App;

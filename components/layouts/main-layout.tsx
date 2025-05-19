import { Header } from "@/components/navigation/header";
import { SocialSidebar } from "@/components/navigation/social-sidebar";
import { EmailSidebar } from "@/components/navigation/email-sidebar";
import { Footer } from "@/components/navigation/footer";
import { ScrollManager } from "@/components/scroll-manager";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <ScrollManager>
      <div className="decoration-circle fixed top-20 right-[20%] w-32 h-32 rounded-full bg-purple-500/20 blur-xl"></div>
      <div className="decoration-circle fixed bottom-40 left-[10%] w-48 h-48 rounded-full bg-blue-500/20 blur-xl"></div>
      <div className="decoration-circle fixed top-1/3 left-[5%] w-24 h-24 rounded-full bg-cyan-500/20 blur-xl"></div>
      <Header />
      <SocialSidebar />
      <EmailSidebar />
      <main className="px-6 sm:px-12 md:px-24 lg:px-32 xl:px-36 mx-auto min-h-screen">
        {children}
      </main>
      <Footer />
    </ScrollManager>
  );
}

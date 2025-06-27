"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import confetti from 'canvas-confetti';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Lightbulb } from "lucide-react";

// Import components
import { UserDetailsForm, UserDetails } from "./components/UserDetailsForm";
import { Header } from "./components/Header";
import { ProjectGenerationForm } from "./components/ProjectGenerationForm";
import { ProjectResults } from "./components/ProjectResults";
import { PdfPreviewDialog } from "./components/PdfPreviewDialog";
import { ShareWidget } from "./components/ShareWidget";
import { ToastProvider, useToast } from "./components/ToastProvider";

// Import constants and types
import { sampleProjects, popupMessages } from "./constants";
import { Project, SortOption, FilterOption, Domain } from "./types";
import { generateSecureToken, encryptData } from "./lib/encryption";

function ProjectIdeasGeneratorContent() {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [showUserForm, setShowUserForm] = useState(true);
  const [selectedDomain, setSelectedDomain] = useState<Domain>("web");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedProjects, setGeneratedProjects] = useState<Project[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [likedProjects, setLikedProjects] = useState<Set<number>>(new Set());
  const [savedProjects, setSavedProjects] = useState<Project[]>([]);
  const [showFlushDialog, setShowFlushDialog] = useState(false);
  const [showPdfPreview, setShowPdfPreview] = useState(false);
  const [selectedProjectForPdf, setSelectedProjectForPdf] = useState<Project | null>(null);
  const pdfPreviewRef = useRef<HTMLDivElement>(null);

  // Filter and sort states
  const [sortBy, setSortBy] = useState<SortOption>("trending");
  const [selectedDomains, setSelectedDomains] = useState<FilterOption>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { showToast } = useToast();

  // Random popup messages
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const randomMessage = popupMessages[Math.floor(Math.random() * popupMessages.length)];
        showToast(randomMessage.text);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [showToast]);

  // Load user data from localStorage
  useEffect(() => {
    const savedUserDetails = localStorage.getItem("projectGenerator_userDetails");
    const savedProjectsData = localStorage.getItem("projectGenerator_savedProjects");
    const savedLikedProjects = localStorage.getItem("projectGenerator_likedProjects");

    if (savedUserDetails) {
      setUserDetails(JSON.parse(savedUserDetails));
      setShowUserForm(false);
    }

    if (savedProjectsData) {
      setSavedProjects(JSON.parse(savedProjectsData));
    }

    if (savedLikedProjects) {
      setLikedProjects(new Set(JSON.parse(savedLikedProjects)));
    }
  }, []);

  const handleUserDetailsSubmit = (details: UserDetails) => {
    setUserDetails(details);
    localStorage.setItem("projectGenerator_userDetails", JSON.stringify(details));
    setShowUserForm(false);
    setSelectedDomain(details.interestedDomain.toLowerCase().split(" ")[0] as Domain);
    showToast("Welcome! Let's start generating some amazing project ideas!");
  };

  const handleGenerate = async () => {
    if (!selectedDomain) {
      showToast("Please select a domain first!");
      return;
    }

    setIsGenerating(true);
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));

      const domainProjects = sampleProjects
        .filter(p => p.domain === selectedDomain)
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);

      // Generate secure token and encrypt data
      const token = generateSecureToken();
      const encryptedData = encryptData({ projects: domainProjects });
      sessionStorage.setItem(`projects-${token}`, encryptedData);

      // Trigger confetti before navigation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Navigate to the secure route
      router.push(`/tools/project-ideas/generated/${token}`);
    } catch (error) {
      console.error('Error generating projects:', error);
      showToast("Error generating projects. Please try again.");
    } finally {
      clearInterval(progressInterval);
      setIsGenerating(false);
      setProgress(0);
    }
  };

  const handleLike = (index: number) => {
    const newLiked = new Set(likedProjects);
    if (newLiked.has(index)) {
      newLiked.delete(index);
      showToast("Project removed from favorites");
    } else {
      newLiked.add(index);
      showToast("Project added to favorites!");
    }
    setLikedProjects(newLiked);
    localStorage.setItem("projectGenerator_likedProjects", JSON.stringify(Array.from(newLiked)));
  };

  const handleViewProject = async (project: Project) => {
    try {
      const token = generateSecureToken();
      const encryptedData = encryptData({ project });
      sessionStorage.setItem(`project-${token}`, encryptedData);
      window.location.href = `/tools/project-ideas/${token}`;
    } catch (error) {
      console.error('Error encrypting project data:', error);
      showToast("Error viewing project details. Please try again.");
    }
  };

  const handleFlushData = () => {
    localStorage.removeItem("projectGenerator_userDetails");
    localStorage.removeItem("projectGenerator_savedProjects");
    localStorage.removeItem("projectGenerator_likedProjects");
    setUserDetails(null);
    setSavedProjects([]);
    setGeneratedProjects([]);
    setLikedProjects(new Set());
    setShowUserForm(true);
    setShowFlushDialog(false);
    showToast("All data has been cleared successfully");
  };

  const exportToPDF = async (project: Project) => {
    setSelectedProjectForPdf(project);
    setShowPdfPreview(true);
    showToast("Preparing PDF preview...");
  };

  const generatePDF = async () => {
    if (!pdfPreviewRef.current || !selectedProjectForPdf || !userDetails) {
      showToast("Error generating PDF. Please try again.");
      return;
    }

    try {
      const canvas = await html2canvas(pdfPreviewRef.current, {
        scale: 2,
        backgroundColor: '#1a1a1a',
        logging: false
      });

      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.setFontSize(12);
      pdf.setTextColor(128, 128, 128);
      pdf.text(`Generated for: ${userDetails.name}`, 20, 20);
      pdf.text(`College: ${userDetails.collegeName}`, 20, 30);
      pdf.text(`Year: ${userDetails.year}`, 20, 40);

      pdf.addImage(imgData, 'PNG', 0, 50, imgWidth, imgHeight);

      pdf.setFontSize(10);
      pdf.text('Generated by Divine Tools - Project Ideas Generator', 20, 280);
      pdf.text(new Date().toLocaleDateString(), 160, 280);

      pdf.save(`${selectedProjectForPdf.title.toLowerCase().replace(/\s+/g, '-')}.pdf`);

      setShowPdfPreview(false);
      setSelectedProjectForPdf(null);
      showToast("PDF generated successfully!");
    } catch (error) {
      console.error('Error generating PDF:', error);
      showToast("Error generating PDF. Please try again.");
    }
  };

  if (showUserForm) {
    return (
      <div className="min-h-screen bg-black py-16">
        <UserDetailsForm onSubmit={handleUserDetailsSubmit} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header userDetails={userDetails} onClearData={() => setShowFlushDialog(true)} />

      <div className="min-h-[calc(100vh-64px)] lg:h-[calc(100vh-64px)] overflow-auto lg:overflow-hidden bg-black px-4 md:px-8 py-8">
        <div className="flex items-center justify-center h-full w-full">
          <div className="w-full max-w-7xl">
            <ProjectGenerationForm
              selectedDomain={selectedDomain}
              onDomainChange={setSelectedDomain}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
              progress={progress}
            />
          </div>
        </div>

        <ProjectResults
          projects={generatedProjects}
          userDetails={userDetails}
          onLike={handleLike}
          likedProjects={likedProjects}
          sortBy={sortBy}
          onSortChange={setSortBy}
          selectedDomains={selectedDomains}
          onDomainFilterChange={setSelectedDomains}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <PdfPreviewDialog
          ref={pdfPreviewRef}
          open={showPdfPreview}
          onOpenChange={setShowPdfPreview}
          project={selectedProjectForPdf}
          userDetails={userDetails}
          onDownload={generatePDF}
        />

        <div className="fixed bottom-6 right-6 flex items-center gap-4">
          <ShareWidget />
        </div>

        {/* Flush Data Confirmation Dialog */}
        <AlertDialog open={showFlushDialog} onOpenChange={setShowFlushDialog}>
          <AlertDialogContent className="bg-black/95 backdrop-blur-md border-white/10 rounded-2xl">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">Clear All Data?</AlertDialogTitle>
              <AlertDialogDescription className="text-white/70">
                This will permanently delete all your saved projects and preferences. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-neutral-800 text-white hover:bg-neutral-700">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-500 text-white hover:bg-red-600"
                onClick={handleFlushData}
              >
                Clear Data
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default function ProjectIdeasGenerator() {
  return (
    <ToastProvider>
      <ProjectIdeasGeneratorContent />
    </ToastProvider>
  );
} 
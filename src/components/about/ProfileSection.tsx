
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, FileText, ChevronDown, Download } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const ProfileSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg text-muted-foreground">
          I'm a cloud engineer by profession and stealthpreneur by passion. Currently, I'm working on a venture called Ethica Labs, and pursuing my masters at trinity business school.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button asChild>
            <Link to="/contact">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Link>
          </Button>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="group">
                <FileText className="mr-2 h-4 w-4 group-hover:animate-pulse" /> 
                Download Profile
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-0 bg-card backdrop-blur-sm border-primary/20">
              <div className="grid gap-1 p-2">
                <a 
                  href="https://drive.google.com/drive/folders/1NQTE8T5N7HkQBWD59IcO_De4GVMJVRv1?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-primary/10 transition-colors"
                >
                  <Download className="mr-2 h-4 w-4 text-primary" />
                  <span>Download CV</span>
                </a>
                <a 
                  href="https://drive.google.com/drive/folders/1NQTE8T5N7HkQBWD59IcO_De4GVMJVRv1?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-primary/10 transition-colors"
                >
                  <FileText className="mr-2 h-4 w-4 text-primary" />
                  <span>Download Resume</span>
                </a>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="relative">
        <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
          <img 
            src="/lovable-uploads/36d8cacb-5396-445b-90dc-48e9d0f0b676.png" 
            alt="Naga Vaishak S K" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-lg"></div>
      </div>
    </div>
  );
};

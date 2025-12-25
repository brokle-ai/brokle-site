'use client';

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ShieldCheck, Cookie, BarChart2, Settings, X, ChevronDown, ChevronUp } from "lucide-react";
import { useCookieConsentContext } from '@/providers/cookie-consent-provider';

// shadcn UI components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

// Types
export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

// Local storage key
const COOKIE_CONSENT_KEY = "cookie-consent-preferences";

export const CookieConsent: React.FC = () => {
  // Use the context for persistent preferences
  const { preferences, updatePreferences } = useCookieConsentContext();

  // Add a temporary state to track changes in the dialog without saving immediately
  const [tempPreferences, setTempPreferences] = useState<CookiePreferences>({...preferences});

  // Tracks if user has previously set preferences
  const [hasSavedPreferences, setHasSavedPreferences] = useState(false);

  // Show/hide minimal banner
  const [showBanner, setShowBanner] = useState(false);

  // Show/hide advanced dialog
  const [showAdvancedDialog, setShowAdvancedDialog] = useState(false);

  // Track expanded descriptions
  const [expandedSections, setExpandedSections] = useState({
    necessary: false,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const isCookieSettingButtonEnabled = false;

  // Load saved preferences once on mount
  useEffect(() => {
    const savedPrefs = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (savedPrefs) {
      setHasSavedPreferences(true);
    } else {
      // If none saved, show the banner
      setShowBanner(true);
    }
  }, []);

  // When dialog opens, initialize temporary preferences with current values
  useEffect(() => {
    if (showAdvancedDialog) {
      setTempPreferences({...preferences});
    }
  }, [showAdvancedDialog, preferences]);

  // Helper function to update temporary preferences
  const updateTempPreferences = (update: Partial<CookiePreferences>) => {
    setTempPreferences(prev => ({
      ...prev,
      ...update
    }));
  };

  // Toggle section expansion
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // ---- Handlers ----
  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };

    // Update context preferences
    updatePreferences(allAccepted);

    // Update temp preferences to match
    setTempPreferences(allAccepted);

    // Hide the banner & dialog
    setHasSavedPreferences(true);
    setShowBanner(false);
    setShowAdvancedDialog(false);

    toast("All cookies accepted", {
      description: "Your cookie preferences have been saved",
    });
  };

  const handleSavePreferences = () => {
    // Now we only apply all changes at once when explicitly saving
    updatePreferences(tempPreferences);

    setHasSavedPreferences(true);
    setShowBanner(false);
    setShowAdvancedDialog(false);

    toast("Preferences saved", {
      description: "Your cookie preferences have been saved",
    });
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };

    // Update both states
    updatePreferences(essentialOnly);
    setTempPreferences(essentialOnly);

    setHasSavedPreferences(true);
    setShowBanner(false);
    setShowAdvancedDialog(false);

    toast("Only essential cookies accepted", {
      description: "Your cookie preferences have been saved",
    });
  };

  // ---- Render ----
  return (
    <>
      {/* 1) Card-style Cookie Banner */}
      {showBanner && !hasSavedPreferences && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-0 right-0 z-50 mx-auto flex justify-center px-4"
        >
          <Card className="w-full max-w-2xl shadow-lg border-0 bg-white/95 backdrop-blur-md dark:bg-gray-900/95 overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cookie className="h-5 w-5 text-primary" />
                  <CardTitle>Cookie Preferences</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowBanner(false)}
                  aria-label="Close cookie banner"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>
                We use cookies to enhance your browsing experience. Choose which cookies you want to allow.
              </CardDescription>
            </CardHeader>

            <CardFooter className="flex flex-col sm:flex-row sm:justify-between gap-2 pt-0 pb-4">
              <Button variant="outline" size="sm" onClick={() => setShowAdvancedDialog(true)}>
                More options
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleRejectNonEssential}>
                  Essential Only
                </Button>
                <Button size="sm" onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90">
                  Accept All
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      )}

      {/* 2) Advanced Settings Dialog (centered) */}
      <Dialog open={showAdvancedDialog} onOpenChange={setShowAdvancedDialog}>
        <DialogContent className="sm:max-w-lg rounded-xl">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              <DialogTitle>Customize Cookie Settings</DialogTitle>
            </div>
            <DialogDescription>
              Choose which cookies you want to allow on this site.
            </DialogDescription>
          </DialogHeader>

          <Separator />

          <div className="py-4 space-y-4">
            {/* Necessary (always checked) */}
            <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => toggleSection('necessary')}
                >
                  <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Necessary Cookies</span>
                      <Badge variant="outline" className="text-xs">Required</Badge>
                    </div>
                  </div>
                  {expandedSections.necessary ?
                    <ChevronUp className="h-4 w-4 ml-2" /> :
                    <ChevronDown className="h-4 w-4 ml-2" />
                  }
                </div>
                <Switch
                  checked
                  disabled
                  aria-label="Necessary cookies toggle (required)"
                />
              </div>

              {expandedSections.necessary && (
                <div className="mt-2 ml-8 text-sm text-muted-foreground">
                  These cookies are essential for the website to function properly and cannot be disabled.
                  They enable basic functions like page navigation, secure areas access, and remember
                  your preferences.
                </div>
              )}
            </div>

            {/* Analytics */}
            <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => toggleSection('analytics')}
                >
                  <BarChart2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium">Analytics Cookies</span>
                  </div>
                  {expandedSections.analytics ?
                    <ChevronUp className="h-4 w-4 ml-2" /> :
                    <ChevronDown className="h-4 w-4 ml-2" />
                  }
                </div>
                <Switch
                  id="analytics"
                  checked={tempPreferences.analytics}
                  onCheckedChange={(checked) =>
                    updateTempPreferences({ analytics: checked })
                  }
                  aria-label="Analytics cookies toggle"
                />
              </div>

              {expandedSections.analytics && (
                <div className="mt-2 ml-8 text-sm text-muted-foreground">
                  These cookies help us understand how visitors interact with our website by collecting
                  and reporting information anonymously. They help us improve our website and services.
                </div>
              )}
            </div>

            {/* Marketing */}
            <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => toggleSection('marketing')}
                >
                  <Cookie className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium">Marketing Cookies</span>
                  </div>
                  {expandedSections.marketing ?
                    <ChevronUp className="h-4 w-4 ml-2" /> :
                    <ChevronDown className="h-4 w-4 ml-2" />
                  }
                </div>
                <Switch
                  id="marketing"
                  checked={tempPreferences.marketing}
                  onCheckedChange={(checked) =>
                    updateTempPreferences({ marketing: checked })
                  }
                  aria-label="Marketing cookies toggle"
                />
              </div>

              {expandedSections.marketing && (
                <div className="mt-2 ml-8 text-sm text-muted-foreground">
                  These cookies are used to track visitors across websites to display relevant
                  advertisements. They help make advertising more engaging to users and more valuable
                  to publishers and advertisers.
                </div>
              )}
            </div>

            {/* Preferences */}
            <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => toggleSection('preferences')}
                >
                  <Settings className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium">Preference Cookies</span>
                  </div>
                  {expandedSections.preferences ?
                    <ChevronUp className="h-4 w-4 ml-2" /> :
                    <ChevronDown className="h-4 w-4 ml-2" />
                  }
                </div>
                <Switch
                  id="preferences"
                  checked={tempPreferences.preferences}
                  onCheckedChange={(checked) =>
                    updateTempPreferences({ preferences: checked })
                  }
                  aria-label="Preference cookies toggle"
                />
              </div>

              {expandedSections.preferences && (
                <div className="mt-2 ml-8 text-sm text-muted-foreground">
                  These cookies enable a website to remember information that changes the way the
                  website behaves or looks, like your preferred language or the region that you are in.
                </div>
              )}
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row sm:justify-between gap-2">
            <Button variant="outline" onClick={handleRejectNonEssential}>
              Essential Only
            </Button>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={handleSavePreferences}>
                Save Preferences
              </Button>
              <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90">
                Accept All
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 3) (Optional) A small "Cookie Settings" button always available */}
      {hasSavedPreferences && isCookieSettingButtonEnabled && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 left-4 z-50"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAdvancedDialog(true)}
            className="bg-white/90 backdrop-blur-sm shadow-md hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800 gap-2 rounded-full"
          >
            <Cookie className="h-4 w-4" />
            Cookie Settings
          </Button>
        </motion.div>
      )}
    </>
  );
};

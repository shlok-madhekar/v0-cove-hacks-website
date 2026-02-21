"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download, Loader2 } from "lucide-react";
import { ProspectusDocument } from "./prospectus-document";
import { useEffect, useState } from "react";

export function ProspectusDownloadButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <button
        disabled
        className="bg-[#6B9BD2] text-white rounded-full p-4 shadow-2xl flex items-center gap-2 font-sans font-bold opacity-50 cursor-wait"
      >
        <Loader2 className="w-5 h-5 animate-spin" />
        <span className="hidden sm:inline">Preparing PDF...</span>
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<ProspectusDocument />}
      fileName="CoveHacks_Prospectus_2026.pdf"
      className="bg-[#6B9BD2] hover:bg-[#5a8abf] text-white rounded-full p-4 shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center gap-2 font-sans font-bold no-underline"
    >
      {({ loading }) =>
        loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="hidden sm:inline">Generating...</span>
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            <span className="hidden sm:inline">Download PDF</span>
          </>
        )
      }
    </PDFDownloadLink>
  );
}

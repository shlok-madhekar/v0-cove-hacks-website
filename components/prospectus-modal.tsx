"use client";

import { useEffect, useRef, useCallback } from "react";
import { X, Download, FileText } from "lucide-react";

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProspectusModal({ isOpen, onClose }: ProspectusModalProps) {
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Fire download on open
  useEffect(() => {
    if (isOpen) {
      downloadRef.current?.click();
    }
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Hidden download anchor */}
      <a
        ref={downloadRef}
        href="/Cove Hacks Prospectus.pdf"
        download="CoveHacks_Prospectus_2026.pdf"
        className="hidden"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center px-4"
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
        aria-label="Download confirmation"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        />

        {/* Card */}
        <div
          className="relative w-full"
          style={{
            maxWidth: 500,
            background: "#ffffff",
            borderRadius: 20,
            boxShadow:
              "0 4px 6px rgba(0,0,0,0.04), 0 20px 60px rgba(0,0,0,0.12)",
            border: "1px solid rgba(0,0,0,0.07)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ padding: "24px 24px 24px" }}>
            {/* Close */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute top-4 right-4 flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-150"
              style={{
                background: "rgba(0,0,0,0.05)",
                border: "none",
                color: "rgba(0,0,0,0.35)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(0,0,0,0.1)";
                el.style.color = "rgba(0,0,0,0.6)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(0,0,0,0.05)";
                el.style.color = "rgba(0,0,0,0.35)";
              }}
            >
              <X size={13} />
            </button>

            {/* Content row */}
            <div className="flex items-center gap-4 pr-6">
              {/* Icon */}
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(107,155,210,0.1)",
                  border: "1px solid rgba(107,155,210,0.16)",
                }}
              >
                <FileText size={20} style={{ color: "#6B9BD2" }} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p
                  className="font-sans font-semibold"
                  style={{ fontSize: 15, color: "#111", marginBottom: 3 }}
                >
                  Your download has started
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: 13, color: "rgba(0,0,0,0.4)" }}
                >
                  CoveHacks Prospectus 2026 · PDF
                </p>
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background: "rgba(0,0,0,0.06)",
                margin: "20px 0",
              }}
            />

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href="/Cove Hacks Prospectus.pdf"
                download="CoveHacks_Prospectus_2026.pdf"
                className="flex items-center justify-center gap-2 no-underline font-sans font-semibold rounded-xl transition-colors duration-150 active:scale-95"
                style={{
                  flex: 1,
                  fontSize: 13,
                  padding: "9px 16px",
                  background: "#6B9BD2",
                  color: "#fff",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "#5a8abf";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "#6B9BD2";
                }}
              >
                <Download size={13} />
                Download again
              </a>

              <button
                onClick={handleClose}
                className="font-sans font-medium rounded-xl transition-colors duration-150 active:scale-95"
                style={{
                  flex: 1,
                  fontSize: 13,
                  padding: "9px 16px",
                  background: "rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  color: "rgba(0,0,0,0.5)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(0,0,0,0.08)";
                  el.style.color = "rgba(0,0,0,0.7)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(0,0,0,0.04)";
                  el.style.color = "rgba(0,0,0,0.5)";
                }}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image as PDFImage,
} from "@react-pdf/renderer";
import { PROSPECTUS_DATA } from "@/lib/prospectus-data";

// Define colors matching the web theme
const COLORS = {
  background: "#0e0e0e",
  surface: "#1a1a1a",
  surfaceHighlight: "#222222",
  primary: "#6B9BD2",
  text: "#ffffff",
  textMuted: "#999999",
  textDim: "#555555",
  border: "#333333",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.background,
    color: COLORS.text,
    fontFamily: "Helvetica",
    padding: 0, // We'll handle padding in containers
  },
  // Layout Helpers
  container: {
    padding: 40,
    height: "100%",
    flexDirection: "column",
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },

  // Typography
  titleLarge: {
    fontSize: 48,
    fontWeight: 900,
    letterSpacing: -1,
    marginBottom: 10,
  },
  titleMedium: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.primary,
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 20,
    fontWeight: 700,
  },
  body: {
    fontSize: 11,
    lineHeight: 1.6,
    color: "#cccccc",
    marginBottom: 10,
  },
  bodySmall: {
    fontSize: 9,
    color: COLORS.textMuted,
  },

  // Components
  logoBox: {
    width: 120,
    height: 120,
    backgroundColor: "rgba(107, 155, 210, 0.1)",
    borderRadius: 30,
    padding: 25,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "rgba(107, 155, 210, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  // Decorative
  accentCircle: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: COLORS.primary,
    opacity: 0.05,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 8,
    color: COLORS.textDim,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  // Table Specifics
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingBottom: 8,
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: "#222",
    alignItems: "center",
  },
  colFeature: { width: "35%", fontSize: 9, color: "#ddd" },
  colTier: { width: "16.25%", alignItems: "center" }, // 65% remaining / 4
  checkmark: { fontSize: 10, color: COLORS.primary, fontWeight: "bold" },
  bullet: { width: 4, height: 4, borderRadius: 2, backgroundColor: "#444" },
});

// Reusable Background Component
const PageBackground = () => (
  <View style={StyleSheet.absoluteFill} fixed>
    <View
      style={[
        styles.accentCircle,
        { top: -100, right: -100, width: 400, height: 400 },
      ]}
    />
    <View
      style={[
        styles.accentCircle,
        { bottom: -50, left: -50, width: 300, height: 300, opacity: 0.03 },
      ]}
    />
  </View>
);

const Footer = () => (
  <View style={styles.footer} fixed>
    <Text style={styles.footerText}>Cove Hacks 2026</Text>
    <Text style={styles.footerText}>Sponsorship Prospectus</Text>
  </View>
);

export const ProspectusDocument = () => (
  <Document>
    {/* PAGE 1: COVER */}
    <Page size="A4" style={styles.page}>
      <PageBackground />
      <View style={[styles.container, styles.centerContent]}>
        <View style={styles.logoBox}>
          <PDFImage src="/images/cove-logo-nobg.png" />
        </View>

        <Text style={styles.titleLarge}>COVE HACKS</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <View
            style={{
              width: 40,
              height: 1,
              backgroundColor: COLORS.primary,
              opacity: 0.5,
              marginRight: 15,
            }}
          />
          <Text style={styles.subtitle}>Sponsorship Prospectus</Text>
          <View
            style={{
              width: 40,
              height: 1,
              backgroundColor: COLORS.primary,
              opacity: 0.5,
              marginLeft: 15,
            }}
          />
        </View>

        <Text style={{ fontSize: 14, color: "#fff", marginBottom: 5 }}>
          June 19-21, 2026
        </Text>
        <Text style={{ fontSize: 14, color: COLORS.textMuted }}>
          San Francisco, CA
        </Text>
      </View>
      <Footer />
    </Page>

    {/* PAGE 2: MISSION & OVERVIEW */}
    <Page size="A4" style={styles.page}>
      <PageBackground />
      <View style={styles.container}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text style={styles.titleMedium}>Our Mission</Text>

        <View style={{ marginBottom: 30 }}>
          <Text style={styles.body}>
            Cove Hacks is bringing together 400 of the brightest young
            engineers, designers, and builders for 48 hours of creation.
          </Text>
          <Text style={styles.body}>
            We believe in the power of hands-on building. By providing students
            with hardware labs, mentorship, and resources, we're empowering the
            next generation of innovators to turn their crazy ideas into
            reality.
          </Text>
        </View>

        <Text style={[styles.titleMedium, { marginTop: 10 }]}>
          By The Numbers
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 30,
          }}
        >
          {PROSPECTUS_DATA.stats.map((stat, i) => (
            <View
              key={i}
              style={[styles.card, { width: "48%", alignItems: "center" }]}
            >
              <Text
                style={{ fontSize: 28, fontWeight: 900, color: COLORS.text }}
              >
                {stat.value}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: COLORS.primary,
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                {stat.label}
              </Text>
              <Text
                style={{ fontSize: 8, color: COLORS.textDim, marginTop: 2 }}
              >
                {stat.detail}
              </Text>
            </View>
          ))}
        </View>

        <Text style={[styles.titleMedium, { marginTop: 10 }]}>
          Past Sponsors
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
          {PROSPECTUS_DATA.pastSponsors.map((sponsor, i) => (
            <View
              key={i}
              style={{
                backgroundColor: COLORS.surfaceHighlight,
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 4,
              }}
            >
              <Text style={{ color: COLORS.textMuted, fontSize: 9 }}>
                {sponsor}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <Footer />
    </Page>

    {/* PAGE 3: AUDIENCE & WHY SPONSOR */}
    <Page size="A4" style={styles.page}>
      <PageBackground />
      <View style={styles.container}>
        <Text style={styles.subtitle}>Audience</Text>
        <Text style={styles.titleMedium}>Why Sponsor?</Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          {PROSPECTUS_DATA.whySponsor.map((item, i) => (
            <View key={i} style={[styles.card, { width: "48%" }]}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: COLORS.text,
                  marginBottom: 4,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  color: COLORS.textMuted,
                  lineHeight: 1.4,
                }}
              >
                {item.description}
              </Text>
            </View>
          ))}
        </View>

        <Text style={[styles.titleMedium, { marginTop: 0 }]}>Demographics</Text>

        <View style={[styles.card, { marginBottom: 20 }]}>
          <Text
            style={{
              fontSize: 10,
              color: COLORS.primary,
              textTransform: "uppercase",
              marginBottom: 15,
              fontWeight: 700,
            }}
          >
            Top Interests
          </Text>
          {PROSPECTUS_DATA.demographics.interests.map((item, i) => (
            <View key={i} style={{ marginBottom: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 4,
                }}
              >
                <Text style={{ fontSize: 9, color: COLORS.text }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 9, color: COLORS.textMuted }}>
                  {item.percent}%
                </Text>
              </View>
              <View
                style={{
                  height: 4,
                  backgroundColor: COLORS.surfaceHighlight,
                  borderRadius: 2,
                }}
              >
                <View
                  style={{
                    height: 4,
                    backgroundColor: COLORS.primary,
                    width: `${item.percent}%`,
                    borderRadius: 2,
                  }}
                />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text
            style={{
              fontSize: 10,
              color: COLORS.primary,
              textTransform: "uppercase",
              marginBottom: 15,
              fontWeight: 700,
            }}
          >
            Experience Level
          </Text>
          <View
            style={{
              flexDirection: "row",
              height: 16,
              borderRadius: 4,
              overflow: "hidden",
              marginBottom: 10,
            }}
          >
            {PROSPECTUS_DATA.demographics.experience.map((exp, i) => (
              <View
                key={i}
                style={{
                  width: `${exp.percent}%`,
                  backgroundColor:
                    i === 0
                      ? COLORS.primary
                      : i === 1
                        ? "rgba(107, 155, 210, 0.6)"
                        : "rgba(107, 155, 210, 0.3)",
                  borderRightWidth: 1,
                  borderRightColor: COLORS.background,
                }}
              />
            ))}
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {PROSPECTUS_DATA.demographics.experience.map((exp, i) => (
              <View
                key={i}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor:
                      i === 0
                        ? COLORS.primary
                        : i === 1
                          ? "rgba(107, 155, 210, 0.6)"
                          : "rgba(107, 155, 210, 0.3)",
                    marginRight: 4,
                  }}
                />
                <Text style={{ fontSize: 8, color: COLORS.textMuted }}>
                  {exp.name} ({exp.percent}%)
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <Footer />
    </Page>

    {/* PAGE 4: TIERS TABLE */}
    <Page size="A4" style={styles.page}>
      <PageBackground />
      <View style={styles.container}>
        <Text style={styles.subtitle}>Partnership</Text>
        <Text style={styles.titleMedium}>Sponsorship Tiers</Text>

        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            borderColor: COLORS.border,
            borderRadius: 8,
            padding: 10,
            backgroundColor: COLORS.surface,
          }}
        >
          {/* Header */}
          <View style={styles.tableHeader}>
            <View style={styles.colFeature}>
              <Text style={{ fontSize: 8, color: COLORS.textDim }}>
                FEATURE
              </Text>
            </View>
            {PROSPECTUS_DATA.tiers.map((tier, i) => (
              <View key={i} style={styles.colTier}>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: tier.color,
                    marginBottom: 2,
                  }}
                >
                  {tier.name}
                </Text>
                <Text style={{ fontSize: 8, color: COLORS.textMuted }}>
                  {tier.price}
                </Text>
              </View>
            ))}
          </View>

          {/* Rows */}
          {PROSPECTUS_DATA.features.map((feature, i) => (
            <View
              key={i}
              style={[
                styles.tableRow,
                {
                  backgroundColor:
                    i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                },
              ]}
            >
              <Text style={styles.colFeature}>{feature.name}</Text>
              {feature.tiers.map((has, idx) => (
                <View key={idx} style={styles.colTier}>
                  {has === true ? (
                    <Text style={styles.checkmark}>✓</Text>
                  ) : has === false ? (
                    <View style={styles.bullet} />
                  ) : (
                    <View
                      style={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        paddingHorizontal: 4,
                        paddingVertical: 1,
                        borderRadius: 2,
                      }}
                    >
                      <Text
                        style={{ fontSize: 7, fontWeight: 700, color: "#eee" }}
                      >
                        {String(has)}
                      </Text>
                    </View>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      <Footer />
    </Page>

    {/* PAGE 5: CONTACT */}
    <Page size="A4" style={styles.page}>
      <PageBackground />
      <View style={[styles.container, styles.centerContent]}>
        <View
          style={{
            padding: 40,
            backgroundColor: COLORS.surface,
            borderRadius: 20,
            width: "100%",
            alignItems: "center",
            borderWidth: 1,
            borderColor: COLORS.border,
          }}
        >
          <Text
            style={[styles.titleLarge, { fontSize: 36, textAlign: "center" }]}
          >
            Ready to Partner?
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: COLORS.textMuted,
              textAlign: "center",
              marginBottom: 30,
              maxWidth: 300,
            }}
          >
            Help us build the future. Reach out to discuss custom packages,
            recruiting goals, or any questions.
          </Text>

          <View style={{ width: "100%", gap: 15 }}>
            <View
              style={{
                backgroundColor: "#222",
                padding: 15,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: COLORS.primary, fontSize: 12, fontWeight: 700 }}
              >
                covehacks@gmail.com
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#222",
                padding: 15,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: COLORS.text, fontSize: 12, fontWeight: 700 }}
              >
                covehacks.org
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 50, alignItems: "center" }}>
          <View style={styles.logoBox}>
            <PDFImage src="/images/cove-logo-nobg.png" />
          </View>
          <Text
            style={{ fontSize: 10, color: COLORS.textDim, letterSpacing: 2 }}
          >
            © 2026 COVE HACKS
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

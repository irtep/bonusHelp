import React, { useState, useMemo } from "react";

interface RowSummary {
  interval: string;
  signUps: number;
  ftd: number;
  acqPct: number;
  depAttAmt: number;
  depAttCount: number;
  depositAmt: number;
  depositCount: number;
  payoutAmt: number;
  payoutCount: number;
  bonusOffered: number;
  bonusDropped: number;
  casinoBets: number;
  casinoWins: number;
  sbBets: number;
  sbWins: number;
  depSuccessRatioAmt: number;
  depSuccessRatioCount: number;
  udc: number;
  casinoNgr: number;
  sbNgr: number;
  totalNgr: number;
}

const HEADER_MAP: Record<string, keyof RowSummary> = {
  "Interval": "interval",
  "SignUp #": "signUps",
  "FTD #": "ftd",
  "Acq. %": "acqPct",
  "Dep Att.$": "depAttAmt",
  "Dep Att. #": "depAttCount",
  "Deposit $": "depositAmt",
  "Deposit #": "depositCount",
  "Payout $": "payoutAmt",
  "Payout #": "payoutCount",
  "Bonus Offered $": "bonusOffered",
  "Bonus Dropped $": "bonusDropped",
  "Casino Bets $": "casinoBets",
  "Casino Wins $": "casinoWins",
  "SB Bets $": "sbBets",
  "SB Wins $": "sbWins",
  "Deposit Success Ratio $": "depSuccessRatioAmt",
  "Deposit Success Ratio #": "depSuccessRatioCount",
  "UDC #": "udc",
};

/*const NUMERIC_KEYS = new Set<keyof RowSummary>([
  "signUps", "ftd", "acqPct", "depAttAmt", "depAttCount", "depositAmt",
  "depositCount", "payoutAmt", "payoutCount", "bonusOffered", "bonusDropped",
  "casinoBets", "casinoWins", "sbBets", "sbWins", "depSuccessRatioAmt", "depSuccessRatioCount", "udc",
]);*/

function parseNumber(raw: string): number {
  const cleaned = raw.replace(/,/g, "").trim();
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
}

function fmtMoney(n: number): string {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function buildFullSummaryText(row: RowSummary): string {
  return [
    `${row.interval || "Untitled interval"} — Report summary`,
    "",
    "Traffic & Acquisition",
    `Sign-Ups: ${row.signUps}`,
    `FTDs (First Time Deposits): ${row.ftd}`,
    `Acquisition %: ${row.acqPct.toFixed(2)}`,
    "",
    "Deposits",
    `Deposit Attempts: €${fmtMoney(row.depAttAmt)} / ${row.depAttCount} attempts`,
    `Actual Deposits: €${fmtMoney(row.depositAmt)} / ${row.depositCount}`,
    "",
    "Withdrawals",
    `Payout: €${fmtMoney(row.payoutAmt)} / ${row.payoutCount}`,
    "",
    "Bonuses",
    `Bonus Offered: €${fmtMoney(row.bonusOffered)}`,
    "",
    "Casino Activity",
    `Casino Bets: €${fmtMoney(row.casinoBets)}`,
    `Casino Wins: €${fmtMoney(row.casinoWins)}`,
    "",
    "Sportsbook Activity",
    `SB Bets: €${fmtMoney(row.sbBets)}`,
    `SB Wins: €${fmtMoney(row.sbWins)}`,
    "",
    "Ratios",
    `Deposit Success Ratio €: ${row.depSuccessRatioAmt.toFixed(2)} (${(row.depSuccessRatioAmt * 100).toFixed(0)}%)`,
    `Deposit Success Ratio #: ${row.depSuccessRatioCount.toFixed(2)} (${(row.depSuccessRatioCount * 100).toFixed(0)}%)`,
    "",
    "Other Counts",
    `UDC #: ${row.udc}`,
    "",
    "NGR",
    `Casino NGR: €${fmtMoney(row.casinoNgr)}`,
    `Sportsbook NGR: €${fmtMoney(row.sbNgr)}`,
    `Total NGR: €${fmtMoney(row.totalNgr)}`,
  ].join("\n");
}

function buildShortSummaryText(row: RowSummary): string {
  return [
    `Deposits: €${fmtMoney(row.depositAmt)} / #${row.depositCount}`,
    `NGR: €${fmtMoney(row.totalNgr)}`,
    `(Casino NGR: €${fmtMoney(row.casinoNgr)} / Sportsbook NGR: €${fmtMoney(row.sbNgr)})`,
    `(Casino Bets: ${fmtMoney(row.casinoBets)}. Casino Wins: ${fmtMoney(row.casinoWins)} )`,
    `(Sports Bets: ${fmtMoney(row.sbBets)}. Sports Wins: ${fmtMoney(row.sbWins)} )`,
    `(Bonuses offered: ${fmtMoney(row.bonusOffered)}. Bonuses dropped: ${fmtMoney(row.bonusDropped)})`,
    `FTD: #${row.ftd}`,
    `UDC: #${row.udc}`,
  ].join("\n");
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to legacy fallback
  }
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

function splitLine(line: string): string[] {
  if (line.includes("\t")) return line.split("\t");
  // Fallback: some paste sources collapse tabs into runs of spaces.
  return line.split(/ {2,}/).map((c) => c.trim());
}

function parseReport(raw: string): RowSummary[] {
  const cleaned = raw.replace(/^\uFEFF/, "");
  const lines = cleaned
    .split("\n")
    .map((l) => l.replace(/\r$/, ""))
    .filter((l) => l.trim().length > 0);

  if (lines.length < 2) return [];

  const headerCells = splitLine(lines[0]).map((h) => h.trim());
  const colIndex: Partial<Record<keyof RowSummary, number>> = {};
  headerCells.forEach((h, i) => {
    const key = HEADER_MAP[h];
    if (key) colIndex[key] = i;
  });

  if (Object.keys(colIndex).length === 0) return [];

  const rows: RowSummary[] = [];

  for (let i = 1; i < lines.length; i++) {
    const cells = splitLine(lines[i]);
    if (cells.length < 2) continue;

    const getRaw = (key: keyof RowSummary): string => {
      const idx = colIndex[key];
      return idx !== undefined && cells[idx] !== undefined ? cells[idx] : "";
    };

    const row: any = {};
    for (const key of Object.keys(HEADER_MAP) as Array<keyof typeof HEADER_MAP>) {
      const mapped = HEADER_MAP[key];
      const rawVal = getRaw(mapped);
      row[mapped] = mapped === "interval" ? rawVal.trim() : parseNumber(rawVal);
    }

    const casinoNgr =
      (row.casinoBets ?? 0) -
      (row.casinoWins ?? 0) -
      (row.bonusOffered ?? 0) +
      (row.bonusDropped ?? 0);

    const sbNgr = (row.sbBets ?? 0) - (row.sbWins ?? 0);

    const totalNgr = casinoNgr + sbNgr;

    rows.push({ ...row, casinoNgr, sbNgr, totalNgr } as RowSummary);
  }

  return rows;
}

const CopyButton: React.FC<{ text: string; label?: string }> = ({ text, label = "Copy" }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        fontSize: 12,
        fontWeight: 600,
        color: copied ? "#047857" : "#374151",
        background: copied ? "#ecfdf5" : "#f9fafb",
        border: `1px solid ${copied ? "#a7f3d0" : "#d1d5db"}`,
        borderRadius: 6,
        padding: "4px 10px",
        cursor: "pointer",
      }}
    >
      {copied ? "Copied!" : label}
    </button>
  );
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 style={{
    fontSize: 13,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    color: "#6b7280",
    margin: "20px 0 8px",
  }}>
    {children}
  </h3>
);

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div style={{
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 0",
    borderBottom: "1px solid #eee",
    fontSize: 14,
  }}>
    <span style={{ color: "#374151" }}>{label}</span>
    <span style={{ fontWeight: 600, color: "#111827", fontVariantNumeric: "tabular-nums" }}>{value}</span>
  </div>
);

const ReportSummaryCard: React.FC<{ row: RowSummary }> = ({ row }) => (
  <div style={{
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: "16px 20px",
    marginBottom: 20,
    background: "#fff",
    fontFamily: "system-ui, -apple-system, sans-serif",
  }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>
        {row.interval || "Untitled interval"}
      </div>
      <CopyButton text={buildFullSummaryText(row)} label="Copy full summary" />
    </div>

    <SectionTitle>Traffic &amp; Acquisition</SectionTitle>
    <Row label="Sign-Ups" value={`${row.signUps}`} />
    <Row label="FTDs (First Time Deposits)" value={`${row.ftd}`} />
    <Row label="Acquisition %" value={`${row.acqPct.toFixed(2)}`} />

    <SectionTitle>Deposits</SectionTitle>
    <Row label="Deposit Attempts" value={`$${fmtMoney(row.depAttAmt)} / ${row.depAttCount} attempts`} />
    <Row label="Actual Deposits" value={`$${fmtMoney(row.depositAmt)} / ${row.depositCount}`} />

    <SectionTitle>Withdrawals</SectionTitle>
    <Row label="Payout" value={`$${fmtMoney(row.payoutAmt)} / ${row.payoutCount}`} />

    <SectionTitle>Bonuses</SectionTitle>
    <Row label="Bonus Offered" value={`$${fmtMoney(row.bonusOffered)}`} />

    <SectionTitle>Casino Activity</SectionTitle>
    <Row label="Casino Bets" value={`$${fmtMoney(row.casinoBets)}`} />
    <Row label="Casino Wins" value={`$${fmtMoney(row.casinoWins)}`} />

    <SectionTitle>Sportsbook Activity</SectionTitle>
    <Row label="SB Bets" value={`$${fmtMoney(row.sbBets)}`} />
    <Row label="SB Wins" value={`$${fmtMoney(row.sbWins)}`} />

    <SectionTitle>Ratios</SectionTitle>
    <Row label="Deposit Success Ratio $" value={`${row.depSuccessRatioAmt.toFixed(2)} (${(row.depSuccessRatioAmt * 100).toFixed(0)}%)`} />
    <Row label="Deposit Success Ratio #" value={`${row.depSuccessRatioCount.toFixed(2)} (${(row.depSuccessRatioCount * 100).toFixed(0)}%)`} />

    <SectionTitle>Other Counts</SectionTitle>
    <Row label="UDC #" value={`${row.udc}`} />

    <SectionTitle>NGR</SectionTitle>
    <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 14 }}>
      <span style={{ color: "#374151" }}>Casino NGR</span>
      <span style={{ fontWeight: 600, color: row.casinoNgr >= 0 ? "#047857" : "#b91c1c" }}>
        ${fmtMoney(row.casinoNgr)}
      </span>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 14, borderBottom: "1px solid #eee", marginBottom: 8 }}>
      <span style={{ color: "#374151" }}>Sportsbook NGR</span>
      <span style={{ fontWeight: 600, color: row.sbNgr >= 0 ? "#047857" : "#b91c1c" }}>
        ${fmtMoney(row.sbNgr)}
      </span>
    </div>
    <div style={{
      fontSize: 20,
      fontWeight: 700,
      color: row.totalNgr >= 0 ? "#047857" : "#b91c1c",
      padding: "6px 0",
    }}>
      Total: ${fmtMoney(row.totalNgr)}
    </div>
    <div style={{ fontSize: 12, color: "#9ca3af" }}>
      Casino NGR = Casino Bets − Casino Wins − Bonus Offered + Bonus Dropped<br />
      Sportsbook NGR = SB Bets − SB Wins<br />
      Total NGR = Casino NGR + Sportsbook NGR
    </div>
  </div>
);

const ShortSummaryCard: React.FC<{ row: RowSummary }> = ({ row }) => (
  <div style={{
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: "16px 20px",
    marginBottom: 20,
    background: "#fafafa",
    fontFamily: "system-ui, -apple-system, sans-serif",
  }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>
        {row.interval || "Untitled interval"} — Short summary
      </div>
      <CopyButton text={buildShortSummaryText(row)} label="Copy short summary" />
    </div>

    <Row label="Deposits" value={`$${fmtMoney(row.depositAmt)} / ${row.depositCount}`} />
    <Row label="NGR" value={`$${fmtMoney(row.totalNgr)}`} />
    <Row label="FTD" value={`${row.ftd}`} />
    <Row label="UDC" value={`${row.udc}`} />
  </div>
);

const ReportSummary: React.FC = () => {
  const [raw, setRaw] = useState("");

  const rows = useMemo(() => parseReport(raw), [raw]);

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#111827" }}>
        Report summary
      </h2>
      <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 12 }}>
        Paste the tab-separated report (header row + one or more data rows) below.
      </p>
      <textarea
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
        placeholder="Paste report data here..."
        rows={8}
        style={{
          width: "100%",
          boxSizing: "border-box",
          fontFamily: "monospace",
          fontSize: 12,
          padding: 10,
          border: "1px solid #d1d5db",
          borderRadius: 8,
          resize: "vertical",
        }}
      />

      {raw.trim().length > 0 && rows.length === 0 && (
        <p style={{ color: "#b91c1c", fontSize: 13, marginTop: 12 }}>
          Couldn't parse any data rows. Make sure you pasted the header row and at least one data row, tab-separated.
        </p>
      )}

      <div style={{ marginTop: 20 }}>
        {rows.map((row, i) => (
          <div key={i}>
            <ShortSummaryCard row={row} />
            <ReportSummaryCard row={row} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportSummary;
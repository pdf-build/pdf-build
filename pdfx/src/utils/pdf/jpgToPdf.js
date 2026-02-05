import { jsPDF } from "jspdf";

// iLovePDF-style sweet spot
const TARGET_DPI = 150;
const JPEG_QUALITY = 0.85;

export const convertImagesToPdf = async (images) => {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "a4",
  });

  const pageWidthPt = pdf.internal.pageSize.getWidth();
  const pageHeightPt = pdf.internal.pageSize.getHeight();

  // Convert A4 page size to pixels at target DPI
  const pageWidthPx = (pageWidthPt / 72) * TARGET_DPI;
  const pageHeightPx = (pageHeightPt / 72) * TARGET_DPI;

  for (let i = 0; i < images.length; i++) {
    const imgData = await readFile(images[i]);
    const img = await loadImage(imgData);

    // Fit image into page (aspect ratio preserved)
    const scale = Math.min(
      pageWidthPx / img.width,
      pageHeightPx / img.height
    );

    const renderWidthPx = img.width * scale;
    const renderHeightPx = img.height * scale;

    // Resize image physically (THIS controls file size)
    const resizedDataUrl = resizeImage(
      img,
      renderWidthPx,
      renderHeightPx,
      JPEG_QUALITY
    );

    if (i !== 0) pdf.addPage();

    // Convert px → pt for jsPDF
    const renderWidthPt = (renderWidthPx / TARGET_DPI) * 72;
    const renderHeightPt = (renderHeightPx / TARGET_DPI) * 72;

    const x = (pageWidthPt - renderWidthPt) / 2;
    const y = (pageHeightPt - renderHeightPt) / 2;

    pdf.addImage(
      resizedDataUrl,
      "JPEG",
      x,
      y,
      renderWidthPt,
      renderHeightPt
    );
  }

  pdf.save("images.pdf");
};

// ---------- helpers ----------

const resizeImage = (img, width, height, quality) => {
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width);
  canvas.height = Math.round(height);

  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  return canvas.toDataURL("image/jpeg", quality);
};

const readFile = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = src;
  });